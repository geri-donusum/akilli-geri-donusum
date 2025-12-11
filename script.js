// script.js
// Tam, çalışır hâl: gruplanmış atıklar + kategori başlıkları + renk kutucukları + mobil yerleştirme + keyboard destek

document.addEventListener("DOMContentLoaded", () => {
  // ---------- ELEMENTLER (farklı id/class senaryolarına uyumlu) ----------
  const input =
    document.getElementById("inputAtik") ||
    document.getElementById("arama") ||
    document.querySelector(".arama-alani input") ||
    document.querySelector("input[type='text']") ||
    document.querySelector("input");

  let bulBtn =
    document.getElementById("bulBtn") ||
    document.querySelector("button[onclick*='bul']") ||
    Array.from(document.querySelectorAll("button")).find(
      b => (b.textContent || "").trim().toLowerCase() === "kutuyu göster"
    );

  let temizleBtn = document.querySelector(".temizle-btn");

  if (!input) {
    console.error("script.js: Arama inputu bulunamadı. (inputAtik / arama / .arama-alani input / input[type=text])");
    return;
  }

  // suggestion-box oluştur ya da al
  let suggestionBox = document.querySelector(".suggestion-box");
  if (!suggestionBox) {
    suggestionBox = document.createElement("div");
    suggestionBox.className = "suggestion-box";
    suggestionBox.style.display = "none";
    // input'un parent'ının hemen sonrasına koy
    const wrap = input.parentNode;
    if (wrap && wrap.parentNode) wrap.parentNode.insertBefore(suggestionBox, wrap.nextSibling);
    else document.body.appendChild(suggestionBox);
  }

  // temizle butonu yoksa oluştur
  if (!temizleBtn) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "temizle-btn";
    btn.title = "Temizle";
    btn.innerHTML = "✕";
    const wrap = input.parentNode;
    if (wrap) {
      if (getComputedStyle(wrap).position === "static") wrap.style.position = "relative";
      wrap.appendChild(btn);
      temizleBtn = btn;
    }
  }

  // ---------- GRUPLANMIŞ ATIK VERİSİ (60 öğe) ----------
  // Her grubun bir renk sınıfı / etiketi var (mavi/sarı/yeşil/gri/kırmızı)
  const groups = {
    "Kağıt Atık": {
      renk: "mavi",
      items: [
        "gazete","dergi","kitap","broşür","fotokopi kağıdı",
        "karton kutu","defter","zarf","kartvizit","peçete kutusu"
      ]
    },
    "Plastik": {
      renk: "sarı",
      items: [
        "plastik şişe","yoğurt kabı","plastik kap","şampuan şişesi","deterjan şişesi",
        "plastik tabak","plastik çatal","plastik bardak","şeffaf plastik","naylon poşet"
      ]
    },
    "Cam": {
      renk: "yeşil",
      items: [
        "cam şişe","cam kavanoz","cam bardak","kolonya şişesi","reçel kavanozu",
        "cam tabak","cam sürahi","şurup şişesi","zeytin kavanozu","parfüm şişesi"
      ]
    },
    "Metal": {
      renk: "sarı",
      items: [
        "konserve kutusu","teneke kutu","alüminyum folyo","bira kutusu","soda kutusu",
        "metal kapak","çay kutusu","kahve kutusu","ton balığı kutusu","vida/çivi (küçük)"
      ]
    },
    "Organik Atık": {
      renk: "gri",
      items: [
        "muz kabuğu","elma çekirdeği","yemek artığı","ekmek","sebze kabuğu",
        "kahve posası","çay poşeti","yumurta kabuğu","meyve kabuğu","patates kabuğu"
      ]
    },
    "Tehlikeli / Özel Atık": {
      renk: "kırmızı",
      items: [
        "pil","batarya","ampul","ilaç","sprey kutusu",
        "boya kutusu","eski telefon","eski batarya","kartuş","civa termometre"
      ]
    }
  };

  // düz tüm madde listesi (arama kolaylığı)
  const allItems = Object.values(groups).flatMap(g => g.items);

  // ---------- YARDIMCI FONKSİYONLAR ----------
  function isMobile() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) <= 768;
  }

  function placeSuggestionMobile() {
    try {
      const wrap = input.parentNode;
      if (!wrap) return;
      // suggestionBox'ı input'un hemen sonrasına koy
      if (wrap.nextElementSibling !== suggestionBox) {
        wrap.parentNode.insertBefore(suggestionBox, wrap.nextSibling);
      }
      // mobilde suggestionBox'tan sonra bulBtn gelsin (buton önerilerin altına)
      if (isMobile() && bulBtn) {
        if (suggestionBox.nextElementSibling !== bulBtn) {
          suggestionBox.parentNode.insertBefore(bulBtn, suggestionBox.nextSibling);
        }
      }
    } catch (err) {
      console.error("placeSuggestionMobile err:", err);
    }
  }

  function clearSuggestions() {
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
    activeIndex = -1;
  }

  // HTML parçaları oluşturmak için yardımcı
  function makeGroupHeader(title) {
    const h = document.createElement("div");
    h.className = "suggestion-group";
    h.textContent = title;
    // stil doğrudan değil; CSS ile belirle daha iyi. Bu sadece minimal fallback görünüm.
    h.style.fontWeight = "700";
    h.style.padding = "8px 12px";
    h.style.background = "#fafafa";
    h.style.borderBottom = "1px solid #eee";
    return h;
  }

  function makeItemElement(text, renkClass) {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.setAttribute("data-value", text);
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.gap = "10px";
    item.style.padding = "10px 12px";
    // renk kutucuğu
    const colorBox = document.createElement("span");
    colorBox.className = "kutu-icon " + (renkClass || "");
    colorBox.style.width = "14px";
    colorBox.style.height = "14px";
    colorBox.style.borderRadius = "3px";
    colorBox.style.display = "inline-block";
    // metin
    const txt = document.createElement("span");
    txt.textContent = text;
    txt.style.flex = "1";
    item.appendChild(colorBox);
    item.appendChild(txt);
    return item;
  }

  // ---------- ÖNERİ OLUŞTURMA (gruplu, kategori başlıklı) ----------
  function buildGroupedSuggestions(q) {
    suggestionBox.innerHTML = "";
    const query = (q || "").trim().toLowerCase();
    let matchedAny = false;

    Object.entries(groups).forEach(([groupName, obj]) => {
      const { renk, items } = obj;
      // filtre
      const matchedItems = items.filter(it => it.toLowerCase().includes(query));
      if (matchedItems.length) {
        matchedAny = true;
        // başlık
        suggestionBox.appendChild(makeGroupHeader(groupName));
        // öğeler
        matchedItems.forEach(itemText => {
          const el = makeItemElement(itemText, renk);
          el.addEventListener("click", () => {
            input.value = itemText;
            clearSuggestions();
            input.focus();
            // eğer sayfada global bul() fonksiyonu varsa çağır
            if (typeof window.bul === "function") {
              try { window.bul(); } catch (err) { console.error("window.bul() hata:", err); }
            }
          });
          suggestionBox.appendChild(el);
        });
      }
    });

    if (!matchedAny) {
      const no = document.createElement("div");
      no.className = "suggestion-none";
      no.textContent = "Eşleşen öğe bulunamadı.";
      no.style.padding = "12px";
      no.style.color = "#666";
      suggestionBox.appendChild(no);
    }

    suggestionBox.style.display = "block";
    placeSuggestionMobile();
    activeIndex = -1;
    cacheKeyboardItems(); // keyboard navigation için öğeleri güncelle
  }

  // ---------- KLAVYE NAVİGASYONU ----------
  let activeIndex = -1;
  function cacheKeyboardItems() {
    keyboardItems = Array.from(suggestionBox.querySelectorAll(".suggestion-item"));
  }
  let keyboardItems = [];

  function highlightIndex(idx) {
    keyboardItems.forEach((el, i) => {
      if (i === idx) {
        el.classList.add("active");
        el.style.background = "#e6f5ff";
        el.style.fontWeight = "700";
        // scroll into view if necessary
        el.scrollIntoView({ block: "nearest", inline: "nearest" });
      } else {
        el.classList.remove("active");
        el.style.background = "";
        el.style.fontWeight = "";
      }
    });
  }

  // ---------- DEBOUNCE ----------
  let dbTimer = null;
  function suggestDebounced(q) {
    clearTimeout(dbTimer);
    dbTimer = setTimeout(() => buildGroupedSuggestions(q), 120);
  }

  // ---------- OLAYLAR ----------
  input.addEventListener("input", (e) => {
    const v = e.target.value || "";
    if (!v.trim()) clearSuggestions();
    else suggestDebounced(v);
  });

  // klavye: oklar + enter
  input.addEventListener("keydown", (e) => {
    const items = keyboardItems || [];
    if (suggestionBox.style.display === "none" || items.length === 0) {
      if (e.key === "Enter") {
        e.preventDefault();
        triggerBul();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      highlightIndex(activeIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      highlightIndex(activeIndex);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && items[activeIndex]) {
        const val = items[activeIndex].getAttribute("data-value");
        input.value = val;
        clearSuggestions();
        // call bul if present
        if (typeof window.bul === "function") {
          try { window.bul(); } catch (err) { console.error("window.bul() hata:", err); }
        }
      } else {
        triggerBul();
      }
    } else if (e.key === "Escape") {
      clearSuggestions();
    }
  });

  // X temizle
  if (temizleBtn) {
    temizleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      input.value = "";
      input.focus();
      clearSuggestions();
    });
  }

  // Buton (Kutuyu Göster)
  if (bulBtn) {
    bulBtn.addEventListener("click", (e) => {
      e.preventDefault();
      triggerBul();
    });
  }

  function triggerBul() {
    const q = (input.value || "").trim();
    // öncelik: sayfada global bul() fonksiyonu varsa onu çağır
    if (typeof window.bul === "function") {
      try { window.bul(); } catch (err) { console.error("window.bul() hata:", err); }
      return;
    }
    // yoksa fallback: tam eşleşen varsa göster, yoksa grouped suggestions göster
    if (!q) {
      buildGroupedSuggestions("");
      return;
    }
    const found = allItems.find(i => i.toLowerCase() === q.toLowerCase());
    if (found) {
      // fallback: göstermeyi suggestionBox içinde yap
      suggestionBox.innerHTML = `<div class="suggestion-item" style="padding:14px;background:#eef;">Sonuç: <strong>${found}</strong></div>`;
      suggestionBox.style.display = "block";
      placeSuggestionMobile();
      cacheKeyboardItems();
    } else {
      buildGroupedSuggestions(q);
    }
  }

  // dış tıklama ile kapatma
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!suggestionBox || !input) return;
    if (t === input || input.contains(t) || suggestionBox.contains(t) || (bulBtn && bulBtn.contains(t)) || (temizleBtn && temizleBtn.contains(t))) {
      return;
    }
    clearSuggestions();
  });

  // resize => place
  window.addEventListener("resize", () => {
    placeSuggestionMobile();
  });

  // başlangıç konumu
  placeSuggestionMobile();

  // expose for debug
  window.__geriDonusum = {
    groups, buildGroupedSuggestions, clearSuggestions, placeSuggestionMobile
  };
});
