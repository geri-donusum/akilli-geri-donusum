// script.js - tam, çalışır hâl
document.addEventListener("DOMContentLoaded", () => {
  // ELEMENTLER
  const input = document.getElementById("arama");                // <input id="arama">
  const inputKaps = document.querySelector(".input-kapsayici"); // input’un kapsayıcısı
  let suggestionBox = document.querySelector(".suggestion-box"); // <div class="suggestion-box">
  const bulBtn = document.getElementById("bulBtn");              // "Kutuyu Göster" butonu
  const temizleBtn = document.querySelector(".temizle-btn");    // X butonu

  // ÖRNEK ÖĞE LİSTESİ (burayı kendi verinle kolayca değiştir)
  const atiklar = [
    "gazete","kitap","karton kutu","süt kutusu","plastik şişe","naylon poşet",
    "yoğurt kabı","şampuan şişesi","cam şişe","cam kavanoz","cam bardak",
    "kolonya şişesi","ampul","ilaç","muz kabuğu","yemek artığı","yumurta kabuğu",
    "kahve posası","metal kutu","pil","bez parçası","kağıt havlu","peçete"
  ];

  // Eğer suggestionBox yoksa oluştur (DOM'da her zaman bir tane olmasını sağlarız)
  if (!suggestionBox) {
    suggestionBox = document.createElement("div");
    suggestionBox.className = "suggestion-box";
    // Başlangıçta boş, mobil fonksiyonda yerleştirilecek
    suggestionBox.style.display = "none";
    // Öntanımlı olarak input'un hemen sonrasına ekle (bu düzen JS ile mobil/desktop'a göre taşınacak)
    if (inputKaps && inputKaps.parentNode) {
      inputKaps.parentNode.insertBefore(suggestionBox, inputKaps.nextSibling);
    } else {
      document.body.appendChild(suggestionBox);
    }
  }

  // Yardımcı: ekran genişliği mobil mi?
  function isMobile() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 768;
  }

  // MOBİLDE: suggestionBox sırasını garantiye al (input -> suggestionBox -> bulBtn)
  function placeSuggestionMobile() {
    if (!inputKaps || !suggestionBox || !bulBtn) return;
    if (isMobile()) {
      // inputKaps sonra suggestionBox
      if (inputKaps.nextElementSibling !== suggestionBox) {
        inputKaps.parentNode.insertBefore(suggestionBox, inputKaps.nextSibling);
      }
      // suggestionBox sonra bulBtn (buton önerilerin ALTINDA kalır)
      if (suggestionBox.nextElementSibling !== bulBtn) {
        suggestionBox.parentNode.insertBefore(bulBtn, suggestionBox.nextSibling);
      }
    } else {
      // Masaüstü: hiçbir şeyi değiştirmiyoruz — eğer önce değiştirilmişse
      // istersen buraya desktop-specific restore logic eklenebilir.
    }
  }

  // İlk yerleştirme + resize ile güncelle
  placeSuggestionMobile();
  window.addEventListener("resize", () => placeSuggestionMobile());

  // ÖNERİLERİ GÖSTERME
  function showSuggestions(q) {
    if (!suggestionBox) return;
    q = (q || "").trim();
    suggestionBox.innerHTML = "";            // temizle
    if (!q) { suggestionBox.style.display = "none"; return; }

    // filtrele (küçük-büyük harf duyarsız, içeren)
    const list = atiklar.filter(a => a.toLowerCase().includes(q.toLowerCase()));
    if (list.length === 0) { suggestionBox.style.display = "none"; return; }

    // html oluştur
    const frag = document.createDocumentFragment();
    list.forEach(item => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.textContent = item;
      // tıklanınca inputa koy ve önerileri kapat
      div.addEventListener("click", () => {
        input.value = item;
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
        input.focus();
      });
      frag.appendChild(div);
    });
    suggestionBox.appendChild(frag);
    suggestionBox.style.display = "block";
    // Mobilde suggestionBox'ı input'un altına koy (yeniden güvence)
    placeSuggestionMobile();
  }

  // Basit debounce (yazarken çok çağırılmasın)
  let debounceTimer = null;
  function debouncedSuggest(q) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => showSuggestions(q), 120);
  }

  // input event
  if (input) {
    input.addEventListener("input", (e) => {
      debouncedSuggest(e.target.value);
    });

    // Enter ile "Kutuyu Göster" tuşunu tetikle
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (bulBtn) bulBtn.click();
      }
    });
  }

  // TEMİZLE (X) OLAYI
  if (temizleBtn) {
    temizleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (input) {
        input.value = "";
        input.focus();
      }
      if (suggestionBox) {
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
      }
    });
  }

  // "Kutuyu Göster" butonuna örnek olay (gerçek davranışını kendi kodunla değiştir)
  if (bulBtn) {
    bulBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const q = input ? input.value.trim() : "";
      // Örneğin: eğer boşsa önerileri göster / seçiliyse sonuç göster
      if (!q) {
        // input boşsa tüm önerileri göster
        showSuggestions("");
        // showSuggestions kullanımı yukarıda boş bırakınca gizli; buradan tümünü göstermek için:
        suggestionBox.innerHTML = "";
        atiklar.forEach(item => {
          const div = document.createElement("div");
          div.className = "suggestion-item";
          div.textContent = item;
          div.addEventListener("click", ()=> {
            if (input) { input.value = item; suggestionBox.innerHTML = ""; suggestionBox.style.display = "none"; }
          });
          suggestionBox.appendChild(div);
        });
        suggestionBox.style.display = "block";
        placeSuggestionMobile();
      } else {
        // Burada senin uygulamanın asıl "kutuyu göster" mantığını çağır
        // Örnek olarak basit alert:
        // alert(`${q} için kutu gösterme işlemi çalıştı (örnek).`);
        // Eğer mevcut kodun varsa onu çağır:
        if (typeof bul === "function") {
          bul(); // eğer senin sayfanda 'bul' fonksiyonu varsa çağırılacak
        } else {
          // varsayılan örnek davranış: önerilerden ilkini seç ve göster
          const found = atiklar.find(a => a.toLowerCase() === q.toLowerCase());
          if (found) {
            // gerçek uygulaman: burada sonucu gösterme fonksiyonunu çalıştır
            console.log("Bulundu:", found);
            // (örnek) suggestionBox içinde sonucu göster
            suggestionBox.innerHTML = `<div class="suggestion-item" style="background:#eef;">${found}</div>`;
            suggestionBox.style.display = "block";
            placeSuggestionMobile();
          } else {
            // bulunamadı mesajı
            suggestionBox.innerHTML = `<div class="suggestion-item" style="color:#777">Aradığınız öğe listede yok.</div>`;
            suggestionBox.style.display = "block";
            placeSuggestionMobile();
          }
        }
      }
    });
  }

  // Document tıklayınca önerileri kapat (ama input veya suggestionBox tıklanırsa kapatma)
  document.addEventListener("click", (e) => {
    if (!suggestionBox || !input) return;
    const target = e.target;
    if (target === input || input.contains(target) || suggestionBox.contains(target) || (bulBtn && bulBtn.contains(target))) {
      // iç tıklama - hiçbir şey yapma
      return;
    }
    // dış klik: önerileri gizle
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
  });

});
