// script.js — Türkiye Sıfır Atık Yönetmeliği'ne Tam Uyumlu Sürüm
// (Okul, Sokak, Kantin Karma Örnekler)

// -----------------------------
// ♻️ ATIK VERİTABANI
// -----------------------------
const atiklar = [
  // --- 🟦 MAVİ KUTU (Kağıt & Karton) ---
  { ad: "defter", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Eski defterler (telleri çıkarılarak) ve kitaplar mavi kutuya atılır." },
  { ad: "kağıt", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kullanılmış test kağıtları ve A4 kağıtlar temizse geri dönüştürülür." },
  { ad: "karton koli", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Koli bantlarını söküp, kutuyu iyice ezerek (hacim kaplamaması için) atınız." },
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Gazeteler ve el ilanları mavi kutuya uygundur." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Parlak kapaklı dergiler ve broşürler kağıt geri dönüşüme atılır." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KOMPOZİT / KAĞIT", bilgi: "Tetra Pak kutular (meyve suyu/süt) içindeki sıvı boşaltılıp ezilerek mavi kutuya atılır." },
  { ad: "karton bardak", renk: "mavi", baslik: "KAĞIT (TEMİZSE)", bilgi: "Sadece çok temiz karton bardaklar maviye atılır. İçi plastik kaplıysa Siyah (Çöp) kutusuna atın." },
  { ad: "ilaç kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Karton ilaç ambalajları ve prospektüsler mavi kutuya atılır." },

  // --- 🟨 SARI KUTU (Plastik Ambalajlar) ---
  { ad: "pet şişe", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "İçini boşaltıp eziniz. Kapaklarını da üzerinde bırakarak atabilirsiniz." },
  { ad: "ayran kutusu", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "Kantinlerde sık çıkan ayran ve yoğurt kaplarını yıkayıp atınız." },
  { ad: "plastik bardak", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "Sebil bardakları ve şeffaf plastik bardaklar sarı kutuya atılır." },
  { ad: "poşet", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "Market poşetleri, naylon ambalajlar ve streç filmler plastik atığıdır." },
  { ad: "şampuan kutusu", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "Deterjan ve şampuan bidonlarını çalkalayıp atınız." },
  { ad: "plastik dosya", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "Eski şeffaf dosyalar ve plastik klasörler geri dönüştürülebilir." },
  { ad: "pipet", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "Plastik pipetler sarı kutuya atılmalıdır." },
  { ad: "tost ambalajı", renk: "sari", baslik: "PLASTİK ATIK", bilgi: "Jelatin ambalajlar plastik sınıfına girer (çok yağlı değilse)." },

  // --- 🟩 YEŞİL KUTU (Cam) ---
  { ad: "cam şişe", renk: "yesil", baslik: "CAM ATIK", bilgi: "Su şişeleri (kapaksız) yeşil kutuya atılır." },
  { ad: "soda şişesi", renk: "yesil", baslik: "CAM ATIK", bilgi: "Maden suyu şişeleri en değerli cam atığıdır." },
  { ad: "kavanoz", renk: "yesil", baslik: "CAM ATIK", bilgi: "Reçel ve salça kavanozları yıkanıp yeşil kutuya atılmalıdır." },
  { ad: "parfüm şişesi", renk: "yesil", baslik: "CAM ATIK", bilgi: "Boş cam parfüm şişeleri cam kumbarasına atılabilir." },

  // --- 🔘 GRİ KUTU (Metal) ---
  { ad: "kola kutusu", renk: "gri", baslik: "METAL ATIK", bilgi: "Alüminyum içecek kutularını ezip gri kutuya atınız." },
  { ad: "konserve kutusu", renk: "gri", baslik: "METAL ATIK", bilgi: "Salça ve mısır konserveleri yıkanıp metal kutusuna atılır." },
  { ad: "metal kapak", renk: "gri", baslik: "METAL ATIK", bilgi: "Cam kavanozların metal kapakları buraya atılmalıdır." },
  { ad: "alüminyum folyo", renk: "gri", baslik: "METAL ATIK", bilgi: "Temiz alüminyum folyolar ve gıda kapları metal geri dönüşümüdür." },
  { ad: "gazoz kapağı", renk: "gri", baslik: "METAL ATIK", bilgi: "Metal şişe kapakları gri kutuya atılır." },

  // --- 🟤 KAHVERENGİ KUTU (Organik / Kompost) ---
  { ad: "meyve kabuğu", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Elma, muz, mandalina kabukları kompost için idealdir." },
  { ad: "çay posası", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Demlikteki çay posaları ve kahve telveleri organik atıktır." },
  { ad: "yumurta kabuğu", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Yumurta kabukları toprağa karışabilir." },
  { ad: "yaprak", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Bahçedeki kurumuş yaprak ve dal parçaları." },

  // --- ⚫ SİYAH KUTU (Geri Dönüşmeyen / Diğer Atık) ---
  { ad: "ıslak mendil", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Plastik lif içerir ve kirlidir. Siyah kutuya (çöpe) atılır." },
  { ad: "yağlı peçete", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Yağlanmış kağıtlar geri dönüşemez. Siyah kutuya atın." },
  { ad: "sigara izmariti", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Doğaya en çok zarar veren atıktır. Söndürüp siyah kutuya atın." },
  { ad: "cips paketi", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Metalize plastik içerdiği için geri dönüşümü zordur, genelde çöpe atılır." },
  { ad: "sakız", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Sakızlar asla yere atılmamalı, kağıda sarılıp siyah kutuya atılmalıdır." },
  { ad: "kalem tıraş çöpü", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Okullardaki kalem açacağı artıkları siyah kutuya gider." },
  { ad: "ayna", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Ayna ve porselenler cam kumbarasına (Yeşil) ATILMAZ." },

  // --- 🟣 MOR KUTU (Ekmek) ---
  { ad: "bayat ekmek", renk: "mor", baslik: "EKMEK ATIĞI", bilgi: "Ekmekler poşetsiz olarak mor kutuya atılmalıdır." },
  { ad: "simit parçası", renk: "mor", baslik: "EKMEK ATIĞI", bilgi: "Tüketilemeyecek unlu mamuller mor kutuda toplanır." },
  { ad: "poğaça", renk: "mor", baslik: "EKMEK ATIĞI", bilgi: "Küflenmemiş hamur işi artıkları." },

  // --- 🔴 KIRMIZI KUTU (Atık Pil & Tehlikeli) ---
  { ad: "pil", renk: "kirmizi", baslik: "ATIK PİL", bilgi: "Kalem piller toprağı zehirler. Okul veya marketteki kırmızı kutuya atın." },
  { ad: "telefon bataryası", renk: "kirmizi", baslik: "ATIK PİL / E-ATIK", bilgi: "Eski bataryalar patlama riski taşır, pil kutusuna atılmalıdır." },
  { ad: "saat pili", renk: "kirmizi", baslik: "ATIK PİL", bilgi: "Düğme piller yutulma tehlikesi taşır, güvenli şekilde kırmızı kutuya atın." },

  // --- ⚪ BEYAZ KUTU (Yemek Artığı - Hayvanlar İçin) ---
  { ad: "makarna", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Sokak hayvanları için ayrılan temiz yemekler (kürdansız)." },
  { ad: "pilav", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Bozulmamış ve temiz pilav artıkları." },
  { ad: "et kemik", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Hayvan dostlarımız için et ve kemik artıkları beyaz kutuya." }
];

// -----------------------------
// DOM elementleri
// -----------------------------
const input = document.getElementById("inputAtik");
const suggestionBox = document.querySelector(".suggestion-box");
const sonucAlani = document.getElementById("sonuc");
const appTitle = document.getElementById("appTitle");
const temizleBtn = document.querySelector(".temizle-btn");
const bulBtn = document.getElementById("bulBtn");

// Fade-in için klası ekle/çıkar
function showResultWithFade(html) {
  sonucAlani.classList.remove("goster");
  void sonucAlani.offsetWidth; // reflow ile restart
  sonucAlani.innerHTML = html;
  setTimeout(() => sonucAlani.classList.add("goster"), 20);
}

// -----------------------------
// Sayfa Yenileme (Logo/Başlık)
// -----------------------------
function reloadPageHandler(e) {
  if (e.type === "touchend" && reloadPageHandler._touchMoved) {
    reloadPageHandler._touchMoved = false;
    return;
  }
  location.reload();
}
reloadPageHandler._touchMoved = false;

if (appTitle) {
  appTitle.addEventListener("click", reloadPageHandler);
  appTitle.addEventListener("touchstart", () => { reloadPageHandler._touchMoved = false; }, { passive: true });
  appTitle.addEventListener("touchmove", () => { reloadPageHandler._touchMoved = true; }, { passive: true });
  appTitle.addEventListener("touchend", reloadPageHandler);
  appTitle.addEventListener("pointerup", (ev) => {
    if (typeof ev.isPrimary === "boolean" ? ev.isPrimary : true) {
      reloadPageHandler(ev);
    }
  });
}

// -----------------------------
// Temizle (X) Butonu
// -----------------------------
function temizleInput() {
  input.value = "";
  suggestionBox.innerHTML = "";
  suggestionBox.style.display = "none";
  sonucAlani.innerHTML = "";
  input.focus();
  if (temizleBtn) temizleBtn.style.opacity = 0;
}

if (input) {
  input.addEventListener("input", () => {
    if (temizleBtn) {
      temizleBtn.style.opacity = input.value ? 1 : 0;
    }
  });
}

// -----------------------------
// Levenshtein Algoritması (Yazım Hatası Düzeltme)
// -----------------------------
function levenshtein(a, b) {
  a = a || "";
  b = b || "";
  const dp = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

// -----------------------------
// BUL Fonksiyonu (Ana Mantık)
// -----------------------------
function bul() {
  const raw = (input.value || "").toLowerCase().trim();
  suggestionBox.innerHTML = "";

  if (!raw) {
    return;
  }

  let atik = atiklar.find(a => a.ad === raw);

  // Yakın eşleşme arama (Levenshtein)
  if (!atik) {
    let min = Infinity;
    let enYakin = null;
    for (const a of atiklar) {
      const d = levenshtein(raw, a.ad);
      if (d < min) {
        min = d;
        enYakin = a;
      }
    }
    // Eşik değer (3 harf hatasına kadar tolerans)
    if (enYakin && min <= 3) {
      atik = enYakin;
      showResultWithFade(`
        <div class="renk-baslik">
          <div class="kutu-icon ${atik.renk}"></div>
          <div class="baslik-yazi">${atik.baslik}</div>
        </div>
        <div class="atik-cumle">"${escapeHtml(raw)}" yerine "<b>${atik.ad}</b>" olarak algılandı.</div>
        <div class="bilgi-metni">💡 ${atik.bilgi}</div>
      `);
      return;
    }
  }

  // Sonuç Gösterimi
  if (atik) {
    // Siyah (Çöp) ve Beyaz (Yemek) için metin rengi ayarı
    let yaziRengi = atik.renk;
    if (atik.renk === 'siyah') yaziRengi = '#333'; 
    if (atik.renk === 'beyaz') yaziRengi = '#999'; 

    showResultWithFade(`
      <div class="renk-baslik">
        <div class="kutu-icon ${atik.renk}"></div>
        <div class="baslik-yazi">${atik.baslik}</div>
      </div>
      <div class="atik-cumle">${atik.ad}, <b style="color:${yaziRengi}; text-transform:uppercase;">${atik.renk}</b> kutuya atılmalıdır.</div>
      <div class="bilgi-metni">💡 ${atik.bilgi}</div>
    `);
  } else {
    showResultWithFade(`
      <div class="renk-baslik">
        <div class="uyari-ikon">⚠️</div>
        <div class="baslik-yazi">ATIK BULUNAMADI</div>
      </div>
      <div class="atik-cumle">Bu atık listede yer almıyor.</div>
      <div class="bilgi-metni">💡 Lütfen geçerli bir atık türü giriniz (örnek: pet şişe, pil, gazete).</div>
    `);
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// -----------------------------
// Öneriler (Autocomplete)
// -----------------------------
let aktifIndex = -1;

if (input) {
  input.addEventListener("input", () => {
    const q = (input.value || "").toLowerCase().trim();
    suggestionBox.innerHTML = "";
    aktifIndex = -1;
    if (!q) {
      suggestionBox.style.display = "none";
      return;
    }

    const eslesen = atiklar.filter(a => a.ad.includes(q)).slice(0, 10);
    if (!eslesen.length) {
      suggestionBox.style.display = "none";
      return;
    }

    suggestionBox.style.display = "block";
    eslesen.forEach(item => {
      const el = document.createElement("div");
      el.className = "suggestion-item";
      el.textContent = item.ad;
      el.addEventListener("click", () => {
        input.value = item.ad;
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
        bul();
      });
      suggestionBox.appendChild(el);
    });
  });

  input.addEventListener("keydown", e => {
    const items = Array.from(document.querySelectorAll(".suggestion-item"));
    if (!items.length) {
      if (e.key === "Enter") {
        e.preventDefault();
        bul();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      aktifIndex = (aktifIndex + 1) % items.length;
      guncelleSecim(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      aktifIndex = (aktifIndex - 1 + items.length) % items.length;
      guncelleSecim(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (aktifIndex >= 0 && items[aktifIndex]) {
        input.value = items[aktifIndex].textContent;
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
        bul();
      } else {
        bul();
      }
    } else if (e.key === "Escape") {
      suggestionBox.innerHTML = "";
      suggestionBox.style.display = "none";
    }
  });
}

function guncelleSecim(items) {
  items.forEach((el, i) => {
    if (i === aktifIndex) {
      el.classList.add("active");
      el.style.background = "#e6f5ff";
      el.style.fontWeight = "700";
      el.scrollIntoView({ block: "nearest" });
    } else {
      el.classList.remove("active");
      el.style.background = "";
      el.style.fontWeight = "";
    }
  });
}

// Dışarı tıklayınca önerileri kapat
document.addEventListener("click", (e) => {
  if (!e.target.closest(".arama-alani") && !e.target.closest(".suggestion-box")) {
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
  }
});

if (input) {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      bul();
    }
  });
}

if (temizleBtn) {
  temizleBtn.addEventListener("click", temizleInput);
}

if (bulBtn) {
  bulBtn.addEventListener("click", bul);
}

if (temizleBtn) temizleBtn.style.opacity = input && input.value ? 1 : 0;

