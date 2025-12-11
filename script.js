// script.js - Eski davranış korunur + yeni mobil/öneri düzeni (input -> suggestions -> Kutuyu Göster)
// (Yazar: ChatGPT - birleşik, uyumlu sürüm)

document.addEventListener("DOMContentLoaded", () => {
  // ----- 1) ELEMENT BULMA (farklı isimleme senaryolarına uyum) -----
  const input =
    document.getElementById("inputAtik") ||
    document.getElementById("arama") ||
    document.querySelector(".arama-alani input") ||
    document.querySelector("input[type='text']");

  // Buton: önce id, sonra onclick bul, sonra buton metni "Kutuyu Göster"
  let bulBtn =
    document.getElementById("bulBtn") ||
    document.querySelector("button[onclick*='bul']") ||
    Array.from(document.querySelectorAll("button")).find(b => (b.textContent||"").trim().toLowerCase() === "kutuyu göster");

  // X temizle butonu (genelde .temizle-btn)
  let temizleBtn = document.querySelector(".temizle-btn") || null;

  // suggestion-box var mı bakalım
  let suggestionBox = document.querySelector(".suggestion-box");

  // Eğer input yoksa vazgeç (hata ayıklama için console)
  if (!input) {
    console.warn("script.js: Arama inputu bulunamadı (id: inputAtik / id: arama / .arama-alani input).");
    return;
  }

  // Eğer suggestionBox yoksa oluştur
  if (!suggestionBox) {
    suggestionBox = document.createElement("div");
    suggestionBox.className = "suggestion-box";
    // başlangıçta gizli
    suggestionBox.style.display = "none";
    // input kapsayıcısının hemen sonrasına koy - burası mobil düzenlemelerini kolaylaştırır
    const parent = input.parentNode;
    if (parent) parent.insertBefore(suggestionBox, input.nextSibling);
    else document.body.appendChild(suggestionBox);
  }

  // Eğer bulBtn yoksa fallback: page'de başka buton yoksa oluşturma, sadece uyar
  if (!bulBtn) {
    console.warn("script.js: 'Kutuyu Göster' butonu bulunamadı. script bulBtn arıyor ama yok.");
  }

  // Eğer temizleBtn yoksa, input'a sağda görünmesi için dinamik bir buton oluşturabiliriz (isteğe bağlı)
  if (!temizleBtn) {
    // yalnızca sayfa zaten bir temizle butonu yoksa oluştur
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "temizle-btn";
    btn.title = "Temizle";
    btn.innerHTML = "✕"; // basit X
    // butonu input kapsayıcısına ekle (input parent'ı olmalı)
    const wrap = input.parentNode;
    if (wrap) {
      // position relative olmalı, eğer değilse inline style ekle (CSS tarafında zaten ayarlanmış olmalı)
      wrap.style.position = wrap.style.position || "relative";
      wrap.appendChild(btn);
      temizleBtn = btn;
    }
  }

  // ----- 2) ÖRNEK LİSTE (kendi verinle değiştir) -----
  const atiklar = [
    "gazete","kitap","karton kutu","süt kutusu","plastik şişe","naylon poşet",
    "yoğurt kabı","şampuan şişesi","cam şişe","cam kavanoz","cam bardak",
    "kolonya şişesi","ampul","ilaç","muz kabuğu","yemek artığı","yumurta kabuğu",
    "kahve posası","metal kutu","pil","bez parçası","kağıt havlu","peçete"
  ];

  // ----- 3) YARDIMCI FONKSİYONLAR -----
  function isMobile() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 768;
  }

  // Mobilde istenen sıralama: input -> suggestionBox -> bulBtn (buton önerilerin ALTINDA)
  function placeSuggestionMobile() {
    try {
      if (!input || !suggestionBox) return;
      const wrap = input.parentNode;
      if (!wrap) return;

      if (isMobile()) {
        // suggestionBox input'un hemen sonrası
        if (wrap.nextElementSibling !== suggestionBox) {
          if (wrap.parentNode) wrap.parentNode.insertBefore(suggestionBox, wrap.nextSibling);
        }
        // suggestionBox'tan sonra buton gelsin
        if (bulBtn && suggestionBox.nextElementSibling !== bulBtn) {
          if (suggestionBox.parentNode) suggestionBox.parentNode.insertBefore(bulBtn, suggestionBox.nextSibling);
        }
      } else {
        // Masaüstü: orijinal akışı bozmamak için hiçbir zorunlu restore yapmıyoruz.
        // Eğer istersen burada desktop restore kodu eklenebilir.
      }
    } catch (err) {
      console.error("placeSuggestionMobile error", err);
    }
  }

  // Öneri listeleme fonksiyonu
  function showSuggestions(q) {
    if (!suggestionBox) return;
    const query = (q || "").trim().toLowerCase();
    suggestionBox.innerHTML = ""; // temizle
    suggestionBox.style.display = "none";

    // Eğer boş sorguysa tüm listeyi gösterme — yerine gizle
    if (!query) return;

    // filtre
    const matched = atiklar.filter(it => it.toLowerCase().includes(query));
    if (!matched.length) {
      suggestionBox.style.display = "none";
      return;
    }

    // Oluştur
    const frag = document.createDocumentFragment();
    matched.forEach(item => {
      const el = document.createElement("div");
      el.className = "suggestion-item";
      el.textContent = item;
      el.addEventListener("click", () => {
        input.value = item;
        hideSuggestions();
        input.focus();
      });
      frag.appendChild(el);
    });

    suggestionBox.appendChild(frag);
    suggestionBox.style.display = "block";
    placeSuggestionMobile();
  }

  function hideSuggestions() {
    if (!suggestionBox) return;
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
  }

  // Debounce
  let debounceTimer = null;
  function debouncedSuggest(q) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => showSuggestions(q), 120);
  }

  // ----- 4) OLAY LİSTENERS -----
  // Input events
  input.addEventListener("input", (e) => {
    const v = e.target.value || "";
    if (v.trim() === "") {
      hideSuggestions();
    } else {
      debouncedSuggest(v);
    }
  });

  // Enter ile butonu tetikle
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (bulBtn) bulBtn.click();
      else fallbackBul();
    }
  });

  // Temizle (X)
  if (temizleBtn) {
    temizleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      input.value = "";
      input.focus();
      hideSuggestions();
    });
  }

  // Buton (Kutuyu Göster) event - eski bul() fonksiyonun varsa onu çağır, yoksa fallback davranışı
  if (bulBtn) {
    bulBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // İlk: eğer sayfanda tanımlı bir global bul() fonksiyonu varsa çağır (eski kod uyumluluğu)
      if (typeof window.bul === "function") {
        try { window.bul(); } catch (err) { console.error("window.bul() çağrılırken hata:", err); fallbackBul(); }
        return;
      }
      // Diğer olası isimler: showResult, showKutuyu vs.
      if (typeof window.showResult === "function") {
        try { window.showResult(); } catch (err) { console.error("window.showResult() hata:", err); fallbackBul(); }
        return;
      }

      // Eğer yukarıdakiler yoksa fallback:
      fallbackBul();
    });
  }

  function fallbackBul() {
    const q = (input.value || "").trim();
    if (!q) {
      // boşsa tüm listeyi göster (kullanıcı isterse)
      suggestionBox.innerHTML = "";
      atiklar.forEach(item => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.textContent = item;
        div.addEventListener("click", () => {
          input.value = item;
          hideSuggestions();
        });
        suggestionBox.appendChild(div);
      });
      suggestionBox.style.display = "block";
      placeSuggestionMobile();
    } else {
      // aranan öğeyi bul ve (sayfanda mevcut ise) gerçek gösterme kodunu çağır
      const found = atiklar.find(a => a.toLowerCase() === q.toLowerCase());
      if (found) {
        // örnek: sayfanda showResult veya displaySonuc varsa çağır
        if (typeof window.showResult === "function") {
          window.showResult(found);
        } else {
          // fallback: basit sonuç gösterimi suggestionBox içinde
          suggestionBox.innerHTML = `<div class="suggestion-item" style="background:#eef;padding:12px;">Sonuç: <strong>${found}</strong></div>`;
          suggestionBox.style.display = "block";
          placeSuggestionMobile();
        }
      } else {
        suggestionBox.innerHTML = `<div class="suggestion-item" style="color:#777;padding:12px;">Aradığınız öğe listede yok.</div>`;
        suggestionBox.style.display = "block";
        placeSuggestionMobile();
      }
    }
  }

  // Dışarı tıklandığında önerileri kapatma (ancak input veya suggestionBox tıklanırsa kapatma)
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!suggestionBox || !input) return;
    if (target === input || input.contains(target) || suggestionBox.contains(target) || (bulBtn && bulBtn.contains(target))) {
      return; // içeride tıklama; kapatma yok
    }
    hideSuggestions();
  });

  // Resize durumunda mobile yerleşimini yeniden ayarla
  window.addEventListener("resize", () => {
    placeSuggestionMobile();
  });

  // İlk çağırma (sayfa yüklenince mobilde yerleşimi uygula)
  placeSuggestionMobile();

  // Expose helper for debugging (optional)
  window.__geriDonusum = {
    showSuggestions,
    hideSuggestions,
    placeSuggestionMobile,
    fallbackBul
  };
});
