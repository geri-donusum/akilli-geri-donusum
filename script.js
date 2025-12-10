// script.js — Tam ve güncel hâl

// -----------------------------
// ♻️ Atık veritabanı (yaklaşık 45 örnek)
// -----------------------------
const atiklar = [
  // KAĞIT
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Gazeteler ve broşürler geri dönüşüme verilebilir." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Dergiler karton ve kağıt olarak ayrılmalıdır." },
  { ad: "kitap", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Eski kitaplar kâğıt toplama noktalarına verilebilir." },
  { ad: "karton kutu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Karton kutular katlanıp mavi kutuya atılmalıdır." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Süt kutuları iyice çalkalanıp temizlenmeli ve mavi kutuya atılmalı." },
  { ad: "zarf", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Zarflar ve evrak kağıtları kağıt atık olarak ayrılmalıdır." },

  // PLASTİK
  { ad: "plastik şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pet şişeler temizlenip sarı kutuya atılmalıdır." },
  { ad: "naylon poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Poşetler sarı kutuya veya ilgili toplama noktalarına verilmelidir." },
  { ad: "yoğurt kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Yoğurt kapları iyice temizlenip sarı kutuya atılabilir." },
  { ad: "şampuan şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Şampuan şişeleri boş ve temiz olarak sarıya atılmalıdır." },
  { ad: "plastik kap", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Gıda kapları temizlenip sarı kutuya atılabilir." },
  { ad: "plastik tabak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Tek kullanımlık plastik tabaklar sarı kutuya atılmalıdır." },

  // CAM
  { ad: "cam şişe", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam şişeler kırılmadan yeşil kutuya atılmalıdır." },
  { ad: "cam kavanoz", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam kavanozlar temizlenip yeşil kutuya verilebilir." },
  { ad: "cam bardak", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam bardaklar uygun şekilde ayrılmalıdır." },
  { ad: "kolonya şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Boş kolonya şişeleri cam olarak toplanmalıdır." },

  // TEHLİKELİ
  { ad: "pil", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Piller özel toplama kutularına verilmelidir." },
  { ad: "ampul", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Ampuller dikkatle paketlenip tehlikeli atık noktasına verilmeli." },
  { ad: "ilaç", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Kullanılmamış veya tarihi geçmiş ilaçlar eczanelerde veya tehlikeli atık noktasında toplanır." },
  { ad: "boya kutusu", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Boya ve solvent gibi atıklar tehlikeli atık kategorisindedir." },

  // ORGANİK
  { ad: "muz kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Muz kabuğu kompost için uygundur." },
  { ad: "yemek artığı", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Yemek artıklarını organik atık kutusuna verin." },
  { ad: "kahve posası", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Kahve posası bahçe için iyi bir kompost malzemesidir." },

  // METAL
  { ad: "konserve kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Konserve kutuları temizlenip sarı kutuya atılmalıdır." },
  { ad: "teneke kutu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Alüminyum kutular geri dönüştürülebilir metaldir." },

  // EKSTRA (günlük yaygın atıklar)
  { ad: "cd kutusu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "CD kutuları plastik sınıfına girer." },
  { ad: "pipet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Plastik pipetler plastik atık kutusuna atılmalıdır." },
  { ad: "peçete kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kağıt mendil kutuları kâğıt atığıdır." },
  { ad: "defter", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Eski defterler kâğıt olarak değerlendirilir." },
  { ad: "zarf", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Zarflar kâğıt atığına verilebilir." },
  { ad: "pekmez kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Temiz plastik kaplar sarı kutuya atılabilir." },
  { ad: "reçel kavanozu", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam kavanozlar geri dönüşüme uygundur." },
  { ad: "tedavi amaçlı ilaç kutusu", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "İlaç kutuları tehlikeli atık kategorisine girebilir." },
  { ad: "ekmek", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Bayat ekmek organik atık olarak ayrılmalıdır." },
  { ad: "sebze kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Sebze kabukları kompost yapılabilir." },
  { ad: "alüminyum folyo", renk: "sarı", baslik: "METAL ATIK", bilgi: "Temiz alüminyum folyo geri dönüşüme verilebilir." },
  { ad: "şeffaf plastik", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Şeffaf plastik ambalajlar sarı kutuya atılmalıdır." },
  { ad: "kolonya kutusu", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Parfüm ve kolonya cam şişeleridir." },
  { ad: "çay poşeti", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Kullanılmış çay poşetleri organik atık kutusuna atılmalıdır." },
  { ad: "vida", renk: "sarı", baslik: "METAL ATIK", bilgi: "Küçük metal parçalar metal geri dönüşümüne uygundur." },
  { ad: "bira kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Alüminyum içecek kutuları geri dönüşüme uygundur." },
  { ad: "deterjan şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Deterjan şişeleri temizlenip sarıya atılmalıdır." },
  { ad: "pipet plastik", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Tek kullanımlık pipetler plastik atığa gider." },
  { ad: "kahve fincanı karton", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kartondan yapılmış ambalajlar kâğıt atığıdır." },
  { ad: "ambalaj kartonu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Ambalaj kartonları kırıştırılıp mavi kutuya atılabilir." },
  { ad: "toy kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Oyuncak ambalajları kâğıt grubuna girer." }
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
// Başlık tıklanırsa sayfayı yenile
// -----------------------------
if (appTitle) {
  appTitle.addEventListener("click", () => location.reload());
}

// -----------------------------
// Temizle (X) davranışı
// -----------------------------
function temizleInput() {
  input.value = "";
  suggestionBox.innerHTML = "";
  sonucAlani.innerHTML = "";
  input.focus();
  if (temizleBtn) temizleBtn.style.opacity = 0;
}

// input değişimine göre temizle butonunu göster/gizle
if (input) {
  input.addEventListener("input", () => {
    if (temizleBtn) {
      temizleBtn.style.opacity = input.value ? 1 : 0;
    }
  });
}

// -----------------------------
// Levenshtein (yazım düzeltme)
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
// Arama / gösterme fonksiyonu
// -----------------------------
function bul() {
  const raw = (input.value || "").toLowerCase().trim();
  suggestionBox.innerHTML = "";

  if (!raw) {
    // boşsa hiçbir şey yapma
    return;
  }

  // tam eşleşme ilk önce
  let atik = atiklar.find(a => a.ad === raw);

  // eğer tam bulunamadıysa en yakın (Levenshtein) bul
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
    // eşiğe dikkat: 3 veya daha az yakın kabul edilebilir
    if (enYakin && min <= 3) {
      atik = enYakin;
      // bilgilendirici mesaj ile göster
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

  if (atik) {
    // normal gösterim
    showResultWithFade(`
      <div class="renk-baslik">
        <div class="kutu-icon ${atik.renk}"></div>
        <div class="baslik-yazi">${atik.baslik}</div>
      </div>
      <div class="atik-cumle">${atik.ad}, <b style="color:${atik.renk}">${atik.renk}</b> kutuya atılmalıdır.</div>
      <div class="bilgi-metni">💡 ${atik.bilgi}</div>
    `);
  } else {
    // bulunamadı
    showResultWithFade(`
      <div class="renk-baslik">
        <div class="uyari-ikon">⚠️</div>
        <div class="baslik-yazi">ATIK BULUNAMADI</div>
      </div>
      <div class="atik-cumle">Bu atık listede yer almıyor.</div>
      <div class="bilgi-metni">💡 Lütfen geçerli bir atık türü giriniz (örnek: cam şişe, pil, süt kutusu).</div>
    `);
  }
}

// küçük yardımcı - HTML kaçış (güvenlik/temizlik)
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// -----------------------------
// Öneriler (typeahead) + klavye navigasyonu
// -----------------------------
let aktifIndex = -1;

input.addEventListener("input", () => {
  const q = (input.value || "").toLowerCase().trim();
  suggestionBox.innerHTML = "";
  aktifIndex = -1;
  if (!q) return;

  // basit contains araması
  const eslesen = atiklar.filter(a => a.ad.includes(q)).slice(0, 10);
  if (!eslesen.length) return;

  // göster
  suggestionBox.style.display = "block";
  eslesen.forEach(item => {
    const el = document.createElement("div");
    el.className = "suggestion-item";
    el.textContent = item.ad;
    el.addEventListener("click", () => {
      input.value = item.ad;
      suggestionBox.innerHTML = "";
      bul();
    });
    suggestionBox.appendChild(el);
  });
});

// klavye ile ok tuşları + Enter
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
      bul();
    } else {
      bul();
    }
  } else if (e.key === "Escape") {
    suggestionBox.innerHTML = "";
  }
});

function guncelleSecim(items) {
  items.forEach((el, i) => {
    if (i === aktifIndex) {
      el.classList.add("active");
      el.style.background = "#e6f5ff";
      el.style.fontWeight = "700";
      // scroll into view if needed
      el.scrollIntoView({ block: "nearest" });
    } else {
      el.classList.remove("active");
      el.style.background = "";
      el.style.fontWeight = "";
    }
  });
}

// tıklama dışında sayfanın herhangi bir yerine tıklayınca önerileri kapat
document.addEventListener("click", (e) => {
  if (!e.target.closest(".arama-alani") && !e.target.closest(".suggestion-box")) {
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
  }
});

// -----------------------------
// Enter tuşu ile arama (input içinde)
// -----------------------------
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    bul();
  }
});

// -----------------------------
// Temizle buton olay atama (varsa)
// -----------------------------
if (temizleBtn) {
  temizleBtn.addEventListener("click", temizleInput);
}

// Bul buton (id bulBtn) varsa click olayını bağla
if (bulBtn) {
  bulBtn.addEventListener("click", bul);
}

// -----------------------------
// Başlangıç - temizle görünümü kontrolü
// -----------------------------
if (temizleBtn) temizleBtn.style.opacity = input.value ? 1 : 0;
