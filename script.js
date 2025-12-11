// script.js — ESKİ (sade, çalışır) HAL (arama, öneri, klavye, fuzzy match)
// Yükle: kaydet -> GitHub Pages -> cache temizle -> test et

// ♻️ Atık veritabanı (~45 öğe)
const atiklar = [
  // Kağıt
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Gazeteler geri dönüşüme uygun şekilde ayrılmalıdır." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Dergiler poşetlere konmadan katlanıp atılmalı." },
  { ad: "kitap", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Eski kitaplar bağışlanabilir veya mavi kutuya atılabilir." },
  { ad: "broşür", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Broşürler kağıt akışına uygundur." },
  { ad: "fotokopi kağıdı", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kullanılmış fotokopi kağıtlarını mavi kutuya atın." },
  { ad: "karton kutu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kartonlar katlanarak atılmalıdır." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "İçleri temizlenip mavi kutuya atılmalıdır." },
  { ad: "defter", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Eski defterler kağıt atığıdır." },
  { ad: "zarf", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Zarflar ve kağıt evraklar mavi kutuda toplanır." },
  { ad: "kartvizit", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kartvizitler de kağıt atığıdır." },

  // Plastik
  { ad: "plastik şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pet şişeler boş olarak ve sıkıştırılmış şekilde sarı kutuya." },
  { ad: "naylon poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Poşetler ayrı toplanır; mümkünse yeniden kullanım." },
  { ad: "plastik kap", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Plastik gıda kapları temizlendikten sonra atılmalı." },
  { ad: "şampuan şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Şampuan ve kozmetik şişeleri temizlenip atılmalıdır." },
  { ad: "yoğurt kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Kapların içi temizlenmelidir." },
  { ad: "plastik tabak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Tek kullanımlık plastik tabaklar sarı kutuya." },
  { ad: "plastik çatal", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Plastik çatal ve bıçaklar sarı kutuda toplanır." },
  { ad: "pipet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Plastik pipetler geri dönüşüme uygundur." },
  { ad: "deterjan şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Boş deterjan şişeleri geri dönüşüm." },

  // Cam
  { ad: "cam şişe", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam şişeler kırılmamaya dikkat edilerek yeşil kutuya." },
  { ad: "cam kavanoz", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam kavanozlar temizlenip atılmalıdır." },
  { ad: "cam bardak", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Kırık camlar dikkatle paketlenmelidir." },
  { ad: "kolonya şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Boş kolonya şişeleri cam grubuna girer." },
  { ad: "reçel kavanozu", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Kavanozlar temizlenerek atılmalıdır." },

  // Metal
  { ad: "teneke kutu", renk: "sarı", baslik: "METAL ATIK", bilgi: "İçecek tenekeleri iyice sıkıştırılarak atılmalı." },
  { ad: "konserve kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Konserve kutuları metal grubuna girer." },
  { ad: "alüminyum folyo", renk: "sarı", baslik: "METAL ATIK", bilgi: "Temiz folyo sarı kutuya atılabilir." },
  { ad: "vida", renk: "sarı", baslik: "METAL ATIK", bilgi: "Küçük metal parçalar uygun şekilde toplanır." },

  // Organik
  { ad: "muz kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Organik atıklar kompost için uygundur." },
  { ad: "elma çekirdeği", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Meyve çekirdekleri organik atıktır." },
  { ad: "yumurta kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Yumurta kabukları kompostta değerlendirilebilir." },
  { ad: "kahve posası", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Kahve posası bitki gübresi olarak kullanılabilir." },
  { ad: "çay poşeti", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Çay poşetleri organik atığa aittir." },
  { ad: "ekmek", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Bayat ekmek organik atıktır." },
  { ad: "sebze kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Sebze-meyve kabukları organik atıktır." },
  { ad: "yemek artığı", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Yemek atıkları komposta uygundur." },

  // Tehlikeli / Özel
  { ad: "pil", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Piller özel toplama noktalarına verilmelidir." },
  { ad: "batarya", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Bataryalar ayrı biriktirilmelidir." },
  { ad: "ampul", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Kırılmadan özenle teslim edin." },
  { ad: "ilaç", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "İlaç atıkları eczanelerde toplanabilir." },
  { ad: "sprey kutusu", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Basınçlı kutular özel işleme gerektirir." },
  { ad: "boya kutusu", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Boya artıklarını yetkili noktalara verin." },

  // Ek birkaç yaygın örnek
  { ad: "pet şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pet şişeler geri dönüşüme uygundur." },
  { ad: "süt kutusu karton", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Süt kartonları mavi kutuya atılmalıdır." },
  { ad: "cam parça", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Kırık cam parçaları dikkatle paketlenmeli." },
  { ad: "metal kapak", renk: "sarı", baslik: "METAL ATIK", bilgi: "Kapaklar metal grubuna verilebilir." },
  { ad: "plastik poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Poşetleri mümkün olduğunca azaltın." }
];

// DOM elemanlarını al
const input = document.getElementById("inputAtik") || document.getElementById("arama");
const suggestionBox = document.querySelector(".suggestion-box") || (() => {
  const el = document.createElement("div");
  el.className = "suggestion-box";
  // input parent'ının sonuna ekleme denemesi
  const parent = (input && input.parentNode) || document.body;
  parent.appendChild(el);
  return el;
})();
const sonucAlani = document.getElementById("sonuc");
const appTitle = document.getElementById("appTitle");
const temizleBtn = document.querySelector(".temizle-btn");
const bulBtn = document.getElementById("bulBtn") || document.querySelector("button[onclick*='bul']");

// Başlığa tıklayınca sayfa yenilensin (hem masaüstü hem mobil)
if (appTitle) appTitle.addEventListener("click", () => location.reload());

// Temizle butonu fonksiyonu
function temizleInput() {
  if (!input) return;
  input.value = "";
  suggestionBox.innerHTML = "";
  suggestionBox.style.display = "none";
  if (sonucAlani) sonucAlani.innerHTML = "";
  input.focus();
}

// Levenshtein (yazım hatası düzeltme)
function levenshtein(a, b) {
  const A = a || "";
  const B = b || "";
  const dp = Array(A.length + 1).fill(null).map(() => Array(B.length + 1).fill(0));
  for (let i = 0; i <= A.length; i++) dp[i][0] = i;
  for (let j = 0; j <= B.length; j++) dp[0][j] = j;
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      const cost = A[i - 1] === B[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[A.length][B.length];
}

// Önerileri göster
let aktifIndex = -1;
function guncelleSecim(items) {
  items.forEach((el, i) => {
    el.classList.toggle("active", i === aktifIndex);
    if (i === aktifIndex) {
      el.scrollIntoView({ block: "nearest" });
    }
  });
}

if (input) {
  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    suggestionBox.innerHTML = "";
    aktifIndex = -1;
    if (!q) { suggestionBox.style.display = "none"; return; }

    const eslesenler = atiklar.filter(a => a.ad.includes(q)).slice(0, 10);
    if (!eslesenler.length) { suggestionBox.style.display = "none"; return; }

    eslesenler.forEach(a => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.textContent = a.ad;
      item.addEventListener("click", () => {
        input.value = a.ad;
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
        // otomatik arama istersen buraya bul() çağrısı ekle
      });
      suggestionBox.appendChild(item);
    });
    suggestionBox.style.display = "block";
  });

  // Klavye ile gezinme ve Enter
  input.addEventListener("keydown", (e) => {
    const items = Array.from(suggestionBox.querySelectorAll(".suggestion-item"));
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!items.length) return;
      aktifIndex = (aktifIndex + 1) % items.length;
      guncelleSecim(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!items.length) return;
      aktifIndex = (aktifIndex - 1 + items.length) % items.length;
      guncelleSecim(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (aktifIndex >= 0 && items[aktifIndex]) {
        input.value = items[aktifIndex].textContent;
        suggestionBox.innerHTML = "";
        suggestionBox.style.display = "none";
        // çağırılacak gerçek arama fonksiyonu varsa onu tetikle
        if (typeof window.bul === "function") window.bul();
      } else {
        // doğrudan arama
        if (typeof window.bul === "function") window.bul();
        else bul(); // fallback
      }
    } else if (e.key === "Escape") {
      suggestionBox.innerHTML = "";
      suggestionBox.style.display = "none";
    }
  });
}

// Arama / bul fonksiyonu
function bul() {
  const q = (input && input.value.toLowerCase().trim()) || "";
  if (!q) return;
  suggestionBox.innerHTML = "";
  suggestionBox.style.display = "none";

  // önce tam eşleşme
  let atik = atiklar.find(a => a.ad === q);

  // yazım hatası var mı bak (levenshtein)
  if (!atik) {
    let enYakin = null;
    let min = Infinity;
    atiklar.forEach(a => {
      const d = levenshtein(q, a.ad);
      if (d < min) { min = d; enYakin = a; }
    });
    if (enYakin && min <= 3) {
      // yakın eşleşme bulundu
      atik = enYakin;
      // gösterirken kullanıcıya uyar
      if (sonucAlani) {
        sonucAlani.innerHTML = `
          <div class="renk-baslik">
            <div class="kutu-icon ${atik.renk}"></div>
            <div class="baslik-yazi">${atik.baslik}</div>
          </div>
          <div class="atik-cumle">"${q}" yerine "<strong>${atik.ad}</strong>" olarak algılandı.</div>
          <div class="bilgi-metni">💡 ${atik.bilgi}</div>
        `;
      }
      return;
    }
  }

  if (atik) {
    if (sonucAlani) {
      sonucAlani.innerHTML = `
        <div class="renk-baslik">
          <div class="kutu-icon ${atik.renk}"></div>
          <div class="baslik-yazi">${atik.baslik}</div>
        </div>
        <div class="atik-cumle">${atik.ad} kutusuna atılmalıdır.</div>
        <div class="bilgi-metni">💡 ${atik.bilgi}</div>
      `;
    }
  } else {
    if (sonucAlani) {
      sonucAlani.innerHTML = `
        <div class="renk-baslik">
          <div class="uyari-ikon">⚠️</div>
          <div class="baslik-yazi">ATIK BULUNAMADI</div>
        </div>
        <div class="atik-cumle">Bu atık listede yer almıyor.</div>
        <div class="bilgi-metni">💡 Lütfen geçerli bir atık türü giriniz (örnek: cam şişe, pil, süt kutusu).</div>
      `;
    }
  }
}

// temizle butonu varsa bağla
if (temizleBtn) {
  temizleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    temizleInput();
  });
}

// "Kutuyu Göster" butonun onclick'ine bağlı çalışılabilir; eğer buton farklı isimdeyse yukarıda bulBtn ile bağlanabilir
if (bulBtn && !bulBtn.onclick) {
  bulBtn.addEventListener("click", (e) => {
    e.preventDefault();
    bul();
  });
}

// dış tıklamada önerileri kapat
document.addEventListener("click", (e) => {
  const target = e.target;
  if (!suggestionBox || !input) return;
  if (target === input || input.contains(target) || suggestionBox.contains(target)) return;
  suggestionBox.innerHTML = "";
  suggestionBox.style.display = "none";
});
