// script.js — Türkiye Sıfır Atık Yönetmeliği'ne Tam Uyumlu GENİŞLETİLMİŞ Sürüm

// -----------------------------
// ♻️ ATIK VERİTABANI (Genişletilmiş Liste)
// -----------------------------
const atiklar = [
  // --- 🟦 MAVİ KUTU (Kağıt & Karton) ---
  { ad: "defter", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Eski defterler (telleri/spiralleri çıkarılarak) mavi kutuya atılır." },
  { ad: "kitap", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kullanılmayacak durumdaki ders kitapları ve romanlar geri dönüştürülebilir." },
  { ad: "kağıt", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Üzerinde karalama olsa bile kağıtlar geri dönüştürülebilir." },
  { ad: "karton koli", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Koli bantlarını söküp, kutuyu iyice ezerek (hacim kaplamaması için) atınız." },
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Gazeteler ve ekleri mavi kutuya uygundur." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Parlak kapaklı dergiler, kataloglar ve broşürler." },
  { ad: "el ilanı", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Posta kutularına bırakılan reklam kağıtları." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KOMPOZİT / KAĞIT", bilgi: "Tetra Pak (süt/meyve suyu) kutuları; içi yıkanıp ezilerek atılmalıdır." },
  { ad: "meyve suyu kutusu", renk: "mavi", baslik: "KOMPOZİT / KAĞIT", bilgi: "Pipeti çıkarıp plastik kutuya, kutuyu ezerek mavi kutuya atın." },
  { ad: "karton bardak", renk: "mavi", baslik: "KAĞIT (Sadece Temiz)", bilgi: "Sadece içi yıkanmış/temiz karton bardaklar. Kahve lekesi çoksa Siyaha atın." },
  { ad: "yumurta kolisi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Karton yumurta viyolleri kağıt geri dönüşümüdür." },
  { ad: "ilaç kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Karton ilaç ambalajları ve prospektüs kağıtları." },
  { ad: "zarf", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Pencereli zarfların plastik kısmını söküp atınız." },
  { ad: "kese kağıdı", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Yağsız ve temiz kese kağıtları." },
  { ad: "tuvalet kağıdı rulosu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Biten ruloların karton kısmı mavi kutuya atılır." },

  // --- 🟨 SARI KUTU (Plastik Ambalajlar) ---
  { ad: "pet şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "İçini boşaltıp eziniz. Kapaklarını da üzerinde bırakarak atabilirsiniz." },
  { ad: "su şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Okul ve kantinlerde en çok çıkan atıktır. Lütfen ezip atın." },
  { ad: "ayran kutusu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Gıda artıkları geri dönüşüm sürecini bozar; içini mutlaka çalkalayın. Tam dönüşüm için folyo kapağı ayırıp metale, bardağı sarı kutuya atın." },
  { ad: "yoğurt kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Plastik gıda kapları temizlenerek geri dönüşüme atılır." },
  { ad: "plastik bardak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "İçindeki sıvı, diğer temiz atıkları kirleterek geri dönüşümü engeller. Mutlaka boşaltın ve yer kaplamaması için bardakları ezerek atın." },
  { ad: "poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Geri kazanılabilmesi için temiz ve kuru olması şarttır. Islak, yağlı veya gıda bulaşmış poşetler geri dönüşüm sürecini bozar." },
  { ad: "cips paketi", renk: "sarı", baslik: "PLASTİK ATIK (Tartışmalı)", bilgi: "Bazı tesisler kabul etmez (Siyah), ancak genelde plastik ambalaj grubuna atılır." },
  { ad: "şampuan kutusu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "İçindeki kimyasallar geri dönüşüm sürecini bozar; lütfen çalkalayıp atın. Eğer pompalı kapak ise (içinde metal yay olduğu için) söküp çöpe, kutuyu ise sarı kutuya atınız." },
  { ad: "sıvı sabun kutusu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pompasını çıkarıp (yay içerir) kutuyu sarı kutuya atın." },
  { ad: "plastik dosya", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Eski şeffaf föyler, telli dosyalar ve plastik klasörler." },
  { ad: "pipet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Meyve suyu ve süt pipetleri plastiktir." },
  { ad: "streç film", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Temiz streç filmler geri dönüştürülebilir." },
  { ad: "plastik kapak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Mavi kapaklar ve diğer şişe kapakları." },
  { ad: "ketçap şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "İçi tamamen yıkanmış plastik sos şişeleri." },
  { ad: "oyuncak", renk: "sarı", baslik: "SERT PLASTİK", bilgi: "Kırılmış, pilsiz plastik oyuncaklar (elektronik değilse)." },

  // --- 🟩 YEŞİL KUTU (Cam) ---
  { ad: "cam şişe", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Su ve meşrubat şişeleri. Kapaklarını çıkarıp atınız." },
  { ad: "soda şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Maden suyu şişeleri en değerli cam atığıdır." },
  { ad: "gazoz şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam meşrubat şişeleri." },
  { ad: "kavanoz", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Reçel, turşu, salça kavanozları (yıkanmış ve kapaksız)." },
  { ad: "parfüm şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Boş cam parfüm ve kolonya şişeleri." },
  { ad: "ilaç şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Cam şuruplar (içi boş ve yıkanmış) yeşil kutuya atılır." },

  // --- 🔘 GRİ KUTU (Metal) ---
  { ad: "kola kutusu", renk: "gri", baslik: "METAL ATIK", bilgi: "Alüminyum içecek kutularını ezip gri kutuya atınız." },
  { ad: "gazoz kutusu", renk: "gri", baslik: "METAL ATIK", bilgi: "Teneke içecek kutuları." },
  { ad: "konserve kutusu", renk: "gri", baslik: "METAL ATIK", bilgi: "Salça, mısır, ton balığı konserveleri (yıkanmış)." },
  { ad: "metal kapak", renk: "gri", baslik: "METAL ATIK", bilgi: "Cam kavanozların ve şişelerin metal kapakları." },
  { ad: "alüminyum folyo", renk: "gri", baslik: "METAL ATIK", bilgi: "Temiz alüminyum folyolar ve alüminyum gıda kapları." },
  { ad: "deodorant şişesi", renk: "gri", baslik: "METAL ATIK", bilgi: "Boş deodorant ve saç spreyi kutuları (Delmeyiniz, ateşe atmayınız)." },
  { ad: "tel zımba", renk: "gri", baslik: "METAL ATIK", bilgi: "Büyük miktardaki zımba telleri ve ataşlar." },
  { ad: "çatal kaşık", renk: "gri", baslik: "METAL ATIK", bilgi: "Eskimiş metal mutfak gereçleri." },

  // --- 🟤 KAHVERENGİ KUTU (Organik / Kompost) ---
  { ad: "meyve kabuğu", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Elma, muz, mandalina, portakal kabukları." },
  { ad: "sebze artığı", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Patates soyukları, marul yaprakları, domates sapları." },
  { ad: "çay posası", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Demlikteki çay posaları (poşet çaysa kağıdını ayırın)." },
  { ad: "kahve telvesi", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Filtre kahve veya Türk kahvesi atıkları." },
  { ad: "yumurta kabuğu", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Yumurta kabukları toprağa mineral verir." },
  { ad: "ceviz kabuğu", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Kuruyemiş kabukları (tuzsuz ise daha iyidir)." },
  { ad: "yaprak", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Okul bahçesindeki kurumuş yaprak ve dal parçaları." },
  { ad: "çekirdek kabuğu", renk: "kahverengi", baslik: "ORGANİK ATIK", bilgi: "Ayçekirdeği vb. kabuklar (yere değil kutuya!)." },

  // --- ⚫ SİYAH KUTU (Geri Dönüşmeyen / Diğer Atık) ---
  { ad: "ıslak mendil", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Plastik lif içerir ve kirlidir. Asla tuvalete veya geri dönüşüme atmayın." },
  { ad: "kağıt havlu", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Kullanılmış, kirli kağıt havlular hijyenik atıktır." },
  { ad: "peçete", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Yemek yağı veya ağız silinen peçeteler çöpe gider." },
  { ad: "tuvalet kağıdı", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Kullanılmış tuvalet kağıtları çöptür." },
  { ad: "maske", renk: "siyah", baslik: "TIBBİ/EVSEL ATIK", bilgi: "Kullanılmış maske ve eldivenler siyah kutuya atılmalıdır." },
  { ad: "sigara izmariti", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Doğaya en çok zarar veren atıktır. İyice söndürüp siyah kutuya atın." },
  { ad: "sakız", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Sakızlar asla yere atılmamalı, kağıda sarılıp siyah kutuya atılmalıdır." },
  { ad: "kalem tıraş çöpü", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Boyalı tahta ve grafit ucu içerdiği için kağıt değildir. Geri dönüştürülemez, genel atık (siyah) kutusuna atılmalıdır." },
  { ad: "tükenmez kalem", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Biten plastik kalemler karmaşık yapıda olduğu için genelde çöpe atılır." },
  { ad: "diş fırçası", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Kompozit plastik olduğu için geri dönüşümü zordur." },
  { ad: "porselen", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Kırık tabak, porselen kupa ve seramikler CAM DEĞİLDİR." },
  { ad: "ayna", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Ayna sır kaplıdır, cam kumbarasına atılmaz." },
  { ad: "ısıya dayanıklı cam", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Borcam vb. ısı camları normal camla karışmamalıdır." },
  { ad: "alışveriş fişi", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Termal kağıtlar (fiş/fatura) kimyasal içerir, geri dönüşmez." },
  { ad: "yağlı kağıt", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Fırın pişirme kağıtları veya yağlı hamburger kağıtları." },
  { ad: "kurşun kalem", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Boyalı tahta ve grafit içerdiği için geri dönüşüme uygun değildir. Siyah kutuya atılır." },
  { ad: "tükenmez kalem", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Plastik, metal yay ve mürekkep karışımıdır. Ayrıştırılamadığı için çöpe atılır." },
  { ad: "keçeli kalem", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Mürekkep haznesi içerdiği için plastik geri dönüşüme atılmaz." },
  { ad: "uçlu kalem", renk: "siyah", baslik: "GERİ DÖNÜŞMEYEN (ÇÖP)", bilgi: "Bozulmuşsa, karmaşık mekanizması nedeniyle çöpe (siyah kutu) atılmalıdır." },

  // --- 🟣 MOR KUTU (Ekmek) ---
  { ad: "bayat ekmek", renk: "mor", baslik: "EKMEK ATIĞI", bilgi: "Ekmekler poşetsiz olarak mor kutuya atılmalıdır." },
  { ad: "simit", renk: "mor", baslik: "EKMEK ATIĞI", bilgi: "Yenmeyecek durumdaki simit parçaları." },
  { ad: "poğaça", renk: "mor", baslik: "EKMEK ATIĞI", bilgi: "Küflenmemiş hamur işi artıkları." },
  { ad: "pide", renk: "mor", baslik: "EKMEK ATIĞI", bilgi: "Kurumuş pide parçaları." },

  // --- 🔴 KIRMIZI KUTU (Atık Pil & Tehlikeli) ---
  { ad: "pil", renk: "kırmızı", baslik: "ATIK PİL", bilgi: "Kalem piller toprağı zehirler. Okul veya marketteki kırmızı kutuya atın." },
  { ad: "kalem pil", renk: "kırmızı", baslik: "ATIK PİL", bilgi: "AA ve AAA piller." },
  { ad: "düğme pil", renk: "kırmızı", baslik: "ATIK PİL", bilgi: "Saat ve tartı pilleri." },
  { ad: "batarya", renk: "kırmızı", baslik: "E-ATIK", bilgi: "Şişmiş veya bitmiş telefon bataryaları." },
  { ad: "powerbank", renk: "kırmızı", baslik: "E-ATIK", bilgi: "Taşınabilir şarj cihazları elektronik atık noktalarına verilmelidir." },
  { ad: "elektronik", renk: "kırmızı", baslik: "E-ATIK", bilgi: "Eski kulaklık, şarj kablosu, fare (mouse) gibi e-atıklar." },
  { ad: "toner", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Yazıcı tonerleri ve kartuşları özel toplama kutularına." },
  { ad: "ampul", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Floresan ve tasarruflu ampuller kırılmadan teslim edilmelidir." },

  // --- ⚪ BEYAZ KUTU (Yemek Artığı - Hayvanlar İçin) ---
  { ad: "makarna", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Sokak hayvanları için ayrılan soslanmamış/temiz makarna." },
  { ad: "pilav", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Bozulmamış ve temiz pilav artıkları." },
  { ad: "et", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Pişmiş et parçaları (baharatsız)." },
  { ad: "kemik", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Köpekler için uygun kemik artıkları." },
  { ad: "sulu yemek", renk: "beyaz", baslik: "YEMEK ARTIĞI", bilgi: "Hayvanlara uygun, aşırı yağlı ve baharatlı olmayan yemekler." }
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



