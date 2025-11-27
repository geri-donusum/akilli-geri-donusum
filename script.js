// ♻️ Geniş Atık Veritabanı (45 öğe - bilgilendirici açıklamalar tekrarsız)
const atiklar = [
  // 📘 Kağıt
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Geri dönüştürülerek yeni kağıt ürünlerinin üretiminde kullanılır." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Geri dönüşümle enerji ve su tasarrufu sağlanır." },
  { ad: "kitap", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "1 ton kağıdın geri dönüşümüyle 17 ağaç kurtarılır." },
  { ad: "karton kutu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Katlanarak atılırsa taşıma alanı verimli kullanılır." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "İçindeki plastik ve alüminyum tabakalar ayrıştırılarak geri dönüştürülür." },

  // 🟨 Plastik
  { ad: "plastik şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Geri dönüştürülerek tekstil ve inşaat ürünlerinde kullanılabilir." },
  { ad: "naylon poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Doğada çözünmesi yüzlerce yıl sürer, bu yüzden geri dönüşüm çok önemlidir." },
  { ad: "yoğurt kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Temiz atıldığında geri dönüşüm kalitesi artar." },
  { ad: "şampuan şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Yeni plastik ürünlerin hammaddesi olabilir." },
  { ad: "pipet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Kullanımı azaltmak çevre kirliliğini önler." },

  // 🟩 Cam
  { ad: "cam şişe", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam sonsuz kez geri dönüştürülebilir." },
  { ad: "cam kavanoz", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam geri dönüşümü enerji tasarrufu sağlar." },
  { ad: "cam bardak", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam ürünlerin geri dönüşümü doğaya zarar vermez." },
  { ad: "kolonya şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Yeni cam üretiminde tekrar kullanılabilir." },

  // 🟥 Tehlikeli
  { ad: "pil", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Toprağa veya suya atılırsa ağır metal sızıntısı oluşturur." },
  { ad: "ampul", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "İçerdikleri civa insan sağlığına ve çevreye zararlıdır." },
  { ad: "ilaç", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Suya karışması çevreyi zehirler, eczanelerde toplanmalıdır." },
  { ad: "boya kutusu", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Kimyasal içeriği nedeniyle özel geri dönüşüm tesislerinde işlenir." },
  { ad: "batarya", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Toksik maddelerin doğaya karışmasını önlemek için ayrı toplanır." },

  // 🟫 Organik
  { ad: "muz kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Kompost yapımında kullanılabilir, toprağı besler." },
  { ad: "yemek artığı", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Organik atıklar doğada kolayca çözünebilir." },
  { ad: "çay poşeti", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Toprağa karıştığında doğal gübre etkisi yaratır." },
  { ad: "yumurta kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Bitkiler için doğal kalsiyum kaynağıdır." },
  { ad: "kahve posası", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Bitki toprağını zenginleştirir ve zararlı böcekleri uzak tutar." },

  // 🟧 Metal
  { ad: "konserve kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Geri dönüşümle enerji tasarrufu sağlanır." },
  { ad: "teneke kutu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Metal geri dönüşümü doğaya büyük katkı sağlar." },
  { ad: "alüminyum folyo", renk: "sarı", baslik: "METAL ATIK", bilgi: "Alüminyum %100 geri dönüştürülebilir." },
  { ad: "vida", renk: "sarı", baslik: "METAL ATIK", bilgi: "Ergitilerek yeniden kullanılabilir." },
  { ad: "çivi", renk: "sarı", baslik: "METAL ATIK", bilgi: "Geri dönüşümü enerji ve kaynak tasarrufu sağlar." },
];

// 🎯 DOM Elementleri
const input = document.getElementById("inputAtik");
const suggestionBox = document.querySelector(".suggestion-box");
const sonucAlani = document.getElementById("sonuc");
const appTitle = document.getElementById("appTitle");

// 🔄 Başlığa tıklayınca sayfa yenilensin
appTitle.addEventListener("click", () => location.reload());

// ❌ Temizle (x)
function temizleInput() {
  input.value = "";
  suggestionBox.innerHTML = "";
  sonucAlani.innerHTML = "";
  input.focus();
}

// 🧩 Yazım benzerliği (Levenshtein)
function benzerlik(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

// 🔍 Arama fonksiyonu
function bul() {
  let girdi = input.value.toLowerCase().trim();
  suggestionBox.innerHTML = "";
  sonucAlani.classList.remove("goster");
  void sonucAlani.offsetWidth;
  if (!girdi) return;

  let atik = atiklar.find(a => a.ad === girdi);

  if (!atik) {
    let enYakin = null;
    let minMesafe = Infinity;
    atiklar.forEach(a => {
      const fark = benzerlik(girdi, a.ad);
      if (fark < minMesafe) { minMesafe = fark; enYakin = a; }
    });

    if (enYakin && minMesafe <= 3) {
      atik = enYakin;
      sonucAlani.innerHTML = `
        <div class="renk-baslik">
          <div class="kutu-icon ${atik.renk}"></div>
          <div class="baslik-yazi">${atik.baslik}</div>
        </div>
        <div class="atik-cumle">
          "${girdi}" yerine "${atik.ad}" olarak algılandı.<br>
          ${atik.ad}, <b style="color:${atik.renk}">${atik.renk}</b> kutuya atılmalıdır.
        </div>
        <div class="bilgi-metni">💡 ${atik.bilgi}</div>`;
      setTimeout(() => sonucAlani.classList.add("goster"), 15);
      return;
    }
  }

  if (atik) {
    sonucAlani.innerHTML = `
      <div class="renk-baslik">
        <div class="kutu-icon ${atik.renk}"></div>
        <div class="baslik-yazi">${atik.baslik}</div>
      </div>
      <div class="atik-cumle">
        ${atik.ad}, <b style="color:${atik.renk}">${atik.renk}</b> kutuya atılmalıdır.
      </div>
      <div class="bilgi-metni">💡 ${atik.bilgi}</div>`;
  } else {
    sonucAlani.innerHTML = `
      <div class="renk-baslik">
        <div class="uyari-ikon">⚠️</div>
        <div class="baslik-yazi">ATIK BULUNAMADI</div>
      </div>
      <div class="atik-cumle">Bu atık listede yer almıyor.</div>
      <div class="bilgi-metni">
        💡 Lütfen geçerli bir atık türü giriniz (örnek: cam şişe, pil, süt kutusu).
      </div>`;
  }

  setTimeout(() => sonucAlani.classList.add("goster"), 15);
}

// 🧠 Otomatik öneriler + klavye kontrolü
let aktifIndex = -1;
input.addEventListener("input", () => {
  const girdi = input.value.toLowerCase().trim();
  suggestionBox.innerHTML = "";
  aktifIndex = -1;
  if (!girdi) return;

  const eslesenler = atiklar.filter(a => a.ad.includes(girdi));
  if (!eslesenler.length) return;

  eslesenler.forEach(a => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.textContent = a.ad;
    item.addEventListener("click", () => {
      input.value = a.ad;
      suggestionBox.innerHTML = "";
      bul();
    });
    suggestionBox.appendChild(item);
  });
});

input.addEventListener("keydown", e => {
  const items = document.querySelectorAll(".suggestion-item");
  if (!items.length) { if (e.key === "Enter") { e.preventDefault(); bul(); } return; }

  if (e.key === "ArrowDown") {
    e.preventDefault(); aktifIndex = (aktifIndex + 1) % items.length; guncelleSecim(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault(); aktifIndex = (aktifIndex - 1 + items.length) % items.length; guncelleSecim(items);
  } else if (e.key === "Enter") {
    e.preventDefault(); if (aktifIndex >= 0) { input.value = items[aktifIndex].textContent; suggestionBox.innerHTML = ""; } bul();
  }
});

function guncelleSecim(items) {
  items.forEach((el, i) => {
    el.style.backgroundColor = i === aktifIndex ? "#e6f5ff" : "";
    el.style.fontWeight = i === aktifIndex ? "bold" : "normal";
  });
}
