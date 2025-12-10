// script.js - Tam çalışır versiyon (autocomplete + zengin atık listesi)

// ♻️ Atık veritabanı (örnek amaçlı, geniş ama tekrarsız)
const atiklar = [
  // KAĞIT
  { ad: "kağıt", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Temiz ve kuru olduğu sürece çoğu yazı/baskı içeren kağıt geri dönüşüme uygundur." },
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Gazeteler kağıt kutusuna atıldığında yeni kağıt ürünlerinin hammaddesi olur." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Dergiler, broşürler ve el ilanları kağıt geri dönüşümünde değerlendirilir." },
  { ad: "kitap", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kullanılmayan kitaplar geri dönüşüme verildiğinde ağaç kesiminin azalmasına yardımcı olur." },
  { ad: "defter", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Defterlerin plastik veya metal spiralleri ayrılmalı, kağıt kısmı mavi kutuya atılmalıdır." },
  { ad: "fotokopi kağıdı", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Ofislerde sık oluşur; temizse kağıt geri dönüşümüne verilir." },
  { ad: "karton kutu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Koli ve ambalaj kartonları katlanarak mavi kutuya atılırsa taşıma verimi artar." },
  { ad: "yumurta kolisi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kartondan yapılan yumurta kolileri kağıt kutusuna atılabilir." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "İç kaplama içerse bile karton esaslı olduğundan çoğu belediyede kağıt grubu olarak değerlendirilir." },

  // PLASTİK
  { ad: "plastik", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Şişe, kap, poşet gibi plastikler temiz ve boşsa geri dönüştürülebilir." },
  { ad: "pet şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Su/meşrubat şişeleri kapağıyla birlikte atılabilir; ezilerek yer tasarrufu sağlanır." },
  { ad: "su şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Boşaltılıp ezilip sarı kutuya atılmalıdır." },
  { ad: "naylon poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Doğada uzun süre kalan poşetler toplanıp geri dönüşüme verilmelidir." },
  { ad: "ambalaj naylonu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Kargolarda kullanılan koruyucu naylonlar plastik atığa aittir." },
  { ad: "cips paketi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Çok katmanlı olabilir; birçok belediye plastik atıkta kabul eder ama yerel kurala bak." },
  { ad: "yoğurt kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Boş ve hafifçe durulanmış kaplar plastik geri dönüşümünde değerlidir." },
  { ad: "dondurma kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Temizlendiğinde geri dönüşüme verilebilir." },
  { ad: "sıvı sabun şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pompalı şişeler içi boşaltılıp durulanarak toplanır." },
  { ad: "plastik kapak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Küçük olsa da kapaklar geri dönüşümde değerlidir." },
  { ad: "plastik çatal", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Tek kullanımlık ürünlerdir; geri dönüşüme verilebilirler." },
  { ad: "plastik bardak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Temizse plastik grubuna atılır." },

  // METAL
  { ad: "metal", renk: "sarı", baslik: "METAL ATIK", bilgi: "Teneke, alüminyum ve metal ambalajlar geri dönüşüme uygundur." },
  { ad: "içecek kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Alüminyum kutular yüksek geri dönüşüm değerine sahiptir." },
  { ad: "konserve kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "İçi boşaltılıp durulanarak metal atıkta toplanır." },
  { ad: "alüminyum folyo", renk: "sarı", baslik: "METAL ATIK", bilgi: "Çok kirliyse temizlenmeli; temiz folyo geri dönüştürülebilir." },
  { ad: "metal kapak", renk: "sarı", baslik: "METAL ATIK", bilgi: "Cam kapaklarından ayrılıp metal grubuna verilir." },
  { ad: "kahve kapsülü", renk: "sarı", baslik: "METAL ATIK", bilgi: "Bazı sistemlerde ayrıştırma ile geri kazanılır; kahve posasını ayırmak gerekebilir." },
  { ad: "deodorant kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Boş metal sprey kutuları metal atığa verilir." },

  // CAM
  { ad: "cam", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam şişe ve kavanozlar kırılmamış ve temizse cam kumbaralarına atılmalıdır." },
  { ad: "cam şişe", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam defalarca geri dönüştürülebilir." },
  { ad: "cam kavanoz", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Reçel/konserve kavanozları kapağı ayrılarak cam kutusuna verilir." },
  { ad: "turşu kavanozu", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Metal kapağı çıkarılıp cam kısmı geri dönüşüme gider." },
  { ad: "kolonya şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam kolonya/parfüm şişeleri geri kazanılabilir; pompa parçaları plastik olabilir." },

  // ORGANİK
  { ad: "organik atık", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Meyve-sebze kabukları, yemek artıkları komposta uygun atıklardır." },
  { ad: "yemek artığı", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Artan yemekler kompost ya da organik atık sistemine verilmelidir." },
  { ad: "muz kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Kompost için mükemmeldir; toprağı zenginleştirir." },
  { ad: "kahve posası", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Bitkiler için doğal gübredir." },
  { ad: "yumurta kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Ufalandığında kalsiyum kaynağı olur." },

  // TEHLİKELİ & ELEKTRONİK
  { ad: "tehlikeli atık", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Pil, ilaç, kimyasal, motor yağı gibi atıklar ayrı toplanmalıdır." },
  { ad: "pil", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Ağır metaller içerir; eczane/pil toplama noktalarına verilmelidir." },
  { ad: "tasarruflu ampul", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Civa içerir; kırılırsa dikkatli toplanmalı ve özel toplama noktasına verilmeli." },
  { ad: "ilaç", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Boş/son kullanma tarihi geçmiş ilaçlar eczane toplama kutularına verilmeli." },
  { ad: "cep telefonu", renk: "kırmızı", baslik: "ELEKTRONİK ATIK", bilgi: "Elektronik atık toplama noktalarına verilmelidir." },
  { ad: "laptop", renk: "kırmızı", baslik: "ELEKTRONİK ATIK", bilgi: "Yetkili toplama/geri dönüşüm merkezlerine teslim edilmelidir." },

  // EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN (kafa karıştıranlar)
  { ad: "peçete", renk: "gri", baslik: "EVSEL ATIK", bilgi: "Islak/yağlı kağıtlar kağıt geri dönüşümüne uygun değildir; evsel atığa atılmalıdır." },
  { ad: "pizza kutusu", renk: "gri", baslik: "EVSEL ATIK", bilgi: "Yağlı kısımlar geri dönüşüme uygun değil; temiz kısımlar ayrılabilir." },
  { ad: "karton bardak", renk: "gri", baslik: "EVSEL ATIK", bilgi: "İç kaplaması nedeniyle çoğunlukla kağıt olarak alınmaz." },
  { ad: "bebek bezi", renk: "gri", baslik: "EVSEL ATIK", bilgi: "Hem organik hem plastik kir içerdiği için evsel atığa gider." },

  // TEKSTİL
  { ad: "tekstil atık", renk: "gri", baslik: "TEKSTİL ATIK", bilgi: "Temiz giysiler önce bağışlanmalı; kullanılamayanlar tekstil kumbaralarına verilmeli." },
  { ad: "giysi", renk: "gri", baslik: "TEKSTİL ATIK", bilgi: "Kullanılmayan ama sağlam giysiler bağışlanmalı." }
];

// -------- DOM referansları ----------
const input = document.getElementById("inputAtik");
const suggestionBox = document.querySelector(".suggestion-box");
const sonucAlani = document.getElementById("sonuc");
const appTitle = document.getElementById("appTitle");

// Başlığa tıklanınca yenile (mevcut davranış)
if (appTitle) appTitle.addEventListener("click", () => location.reload());

// Temizleme
function temizleInput() {
  if (!input) return;
  input.value = "";
  suggestionBox.innerHTML = "";
  sonucAlani.innerHTML = "";
  input.focus();
}

// Levenshtein (yazım benzerliği) - basit implementasyon
function benzerlik(a, b) {
  const A = (a || "").toLowerCase();
  const B = (b || "").toLowerCase();
  const dp = Array(A.length + 1).fill(null).map(() => Array(B.length + 1).fill(0));
  for (let i = 0; i <= A.length; i++) dp[i][0] = i;
  for (let j = 0; j <= B.length; j++) dp[0][j] = j;
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      const cost = A[i - 1] === B[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + cost);
    }
  }
  return dp[A.length][B.length];
}

// Arama ve sonuç gösterme
function bul() {
  if (!input) return;
  const girdi = input.value.toLowerCase().trim();
  suggestionBox.innerHTML = "";
  if (!girdi) { sonucAlani.classList.remove("goster"); sonucAlani.innerHTML = ""; return; }

  // Tam eşleşme
  let atik = atiklar.find(a => a.ad === girdi);

  // Yakın eşleşme (Levenshtein)
  if (!atik) {
    let enYakin = null, minDist = Infinity;
    atiklar.forEach(a => {
      const d = benzerlik(girdi, a.ad);
      if (d < minDist) { minDist = d; enYakin = a; }
    });
    if (enYakin && minDist <= 3) atik = enYakin;
  }

  if (atik) {
    sonucAlani.innerHTML = `
      <div class="renk-baslik">
        <div class="kutu-icon ${atik.renk}"></div>
        <div class="baslik-yazi">${atik.baslik}</div>
      </div>
      <div class="atik-cumle"><b>${atik.ad}</b> — ${atik.bilgi}<br><em>${atik.ad}, <b style="color:${atik.renk}">${atik.renk}</b> kutuya atılmalıdır.</em></div>
    `;
    sonucAlani.classList.add("goster");
  } else {
    sonucAlani.innerHTML = `
      <div class="renk-baslik">
        <div class="uyari-ikon">⚠️</div>
        <div class="baslik-yazi">ATIK BULUNAMADI</div>
      </div>
      <div class="atik-cumle">Bu atık listede yok veya farklı yazılmış olabilir.</div>
      <div class="bilgi-metni">💡 Örnekler: pet şişe, pil, karton kutu, cam kavanoz</div>
    `;
    sonucAlani.classList.add("goster");
  }
}

// ---------- AUTOCOMPLETE (öneriler) ----------
let aktifIndex = -1;

function normalizeForSearch(s = "") {
  return s.toLowerCase()
    .replace(/ı/g, "i").replace(/İ/g,"i")
    .replace(/ü/g, "u").replace(/Ü/g,"u")
    .replace(/ö/g, "o").replace(/Ö/g,"o")
    .replace(/ç/g, "c").replace(/Ç/g,"c")
    .replace(/ş/g, "s").replace(/Ş/g,"s")
    .replace(/ğ/g, "g").replace(/Ğ/g,"g");
}

if (input) {
  input.addEventListener("input", () => {
    const raw = input.value || "";
    const q = normalizeForSearch(raw.trim());
    suggestionBox.innerHTML = "";
    aktifIndex = -1;
    if (!q) return;

    const eslesen = atiklar
      .map(a => ({...a, _norm: normalizeForSearch(a.ad)}))
      .filter(a => a._norm.includes(q))
      .sort((x,y) => {
        const xs = x._norm.startsWith(q) ? 0 : 1;
        const ys = y._norm.startsWith(q) ? 0 : 1;
        if (xs !== ys) return xs - ys;
        return x.ad.length - y.ad.length;
      })
      .slice(0, 8);

    if (eslesen.length === 0) {
      // küçük fuzzy öneri (distance ≤ 2)
      const fuzzy = atiklar
        .map(a => ({...a, dist: benzerlik(q, normalizeForSearch(a.ad))}))
        .filter(a => a.dist <= 2)
        .sort((a,b) => a.dist - b.dist)
        .slice(0,6);
      fuzzy.forEach(a => createSuggestionItem(a.ad));
      return;
    }

    eslesen.forEach(a => createSuggestionItem(a.ad));
  });

  // klavye kontrolleri
  input.addEventListener("keydown", (e) => {
    const items = Array.from(document.querySelectorAll(".suggestion-item"));
    if (!items.length) {
      if (e.key === "Enter") { e.preventDefault(); bul(); }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      aktifIndex = (aktifIndex + 1) % items.length;
      updateSelection(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      aktifIndex = (aktifIndex - 1 + items.length) % items.length;
      updateSelection(items);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (aktifIndex >= 0 && items[aktifIndex]) {
        input.value = items[aktifIndex].textContent;
        suggestionBox.innerHTML = "";
      }
      bul();
    } else if (e.key === "Escape") {
      suggestionBox.innerHTML = "";
      aktifIndex = -1;
    }
  });
}

// suggestion item oluşturucu
function createSuggestionItem(text) {
  const item = document.createElement("div");
  item.className = "suggestion-item";
  item.textContent = text;
  item.setAttribute("role", "option");
  item.addEventListener("mousedown", (ev) => {
    ev.preventDefault(); // click sonrası input odak kaybını engelle
    input.value = text;
    suggestionBox.innerHTML = "";
    bul();
  });
  suggestionBox.appendChild(item);
}

function updateSelection(items) {
  items.forEach((el, i) => {
    if (i === aktifIndex) {
      el.style.backgroundColor = "#e6f5ff";
      el.style.fontWeight = "700";
      el.scrollIntoView({ block: "nearest", inline: "nearest" });
    } else {
      el.style.backgroundColor = "";
      el.style.fontWeight = "normal";
    }
  });
}
