// script.js — Zenginleştirilmiş Veritabanı ile Güncel Hâl

// -----------------------------
// ♻️ Atık veritabanı (Zenginleştirilmiş & Eğitici Örnekler)
// -----------------------------
const atiklar = [
  // --- 🏠 EN SIK KARIŞTIRILANLAR (Eğitici) ---
  { ad: "yağlı pizza kutusu", renk: "gri", baslik: "GENEL ATIK (ÇÖP)", bilgi: "Dikkat! Yağ ve yemek artığı bulaştığı için geri dönüştürülemez. Kağıt kumbarasına atmayınız." },
  { ad: "alışveriş fişi", renk: "gri", baslik: "GENEL ATIK (ÇÖP)", bilgi: "Termal kağıttır ve kimyasal içerir. Kağıt geri dönüşümüne değil, çöpe atılmalıdır." },
  { ad: "karton kahve bardağı", renk: "gri", baslik: "GENEL ATIK / KARIŞIK", bilgi: "İçi plastik film kaplıdır, normal kağıt değildir. Özel toplama kutusu yoksa çöpe atılmalıdır." },
  { ad: "ıslak mendil", renk: "gri", baslik: "GENEL ATIK (ÇÖP)", bilgi: "Kağıt gibi görünse de plastiktir ve suda erimez. Kesinlikle tuvalete veya geri dönüşüme atılmamalıdır." },
  { ad: "ayna", renk: "gri", baslik: "GENEL ATIK (ÇÖP)", bilgi: "Ayna cam değildir (sır kaplıdır). Erime sıcaklığı farklı olduğu için cam kumbarasına ATILMAZ." },
  { ad: "porselen tabak", renk: "gri", baslik: "GENEL ATIK (ÇÖP)", bilgi: "Seramik ve porselenler cam değildir. Cam kumbarasına atılırsa tüm geri dönüşüm sürecini bozar." },
  { ad: "kırık cam bardak", renk: "gri", baslik: "GENEL ATIK (ÇÖP)", bilgi: "Isıya dayanıklı camların yapısı farklıdır. Şişe/kavanoz kumbarasına atılmaz. Gazeteye sarıp çöpe atın." },
  { ad: "diş macunu tüpü", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "İçi tamamen boşsa plastik kutusuna atılabilir, ancak genellikle karma malzeme olduğu için çöpe gider." },
  { ad: "cips paketi", renk: "gri", baslik: "GENEL ATIK (ÇÖP)", bilgi: "İçi metalize plastik kaplıdır (jelatin). Geri dönüşümü çok zordur, çöpe atılmalıdır." },
  
  // --- 📄 KAĞIT (Mavi) ---
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Gazeteler, dergiler ve broşürler mavi kutuya atılmalıdır." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Parlak dergi kağıtları geri dönüştürülebilir." },
  { ad: "kitap", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Eski kitaplar ve defterler kağıt kumbarasına uygundur." },
  { ad: "karton koli", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Koli bantlarını söküp, kutuyu iyice ezerek/katlayarak atınız." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KAĞIT/KOMPOZİT", bilgi: "Tetra Pak kutular (meyve suyu/süt) içindeki sıvıyı boşaltıp, ezerek geri dönüşüme atılmalıdır." },
  { ad: "yumurta kartonu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Temiz yumurta viyolleri kağıt atığıdır. (Böcek ilacı vb. bulaşmamışsa)." },
  { ad: "kağıt havlu rulosu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Tuvalet kağıdı ve havlu rulolarının içindeki karton silindir geri dönüştürülebilir." },
  { ad: "zarf", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Pencereli zarfların plastik kısmını söküp kağıt kısmını atabilirsiniz." },
  { ad: "not kağıdı", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kullanılmış ofis kağıtları ve notlar mavi kutuya." },

  // --- 🥤 PLASTİK (Sarı) ---
  { ad: "pet şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Kapağını çıkarıp şişeyi ezerek atın. Kapaklar da ayrı bir plastik türüdür, toplanabilir." },
  { ad: "şampuan kutusu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Kutuyu suyla çalkalayıp temizledikten sonra sarı kutuya atınız." },
  { ad: "sıvı sabun şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pompa kısmını (içinde metal yay varsa) ayırıp şişeyi geri dönüşüme atın." },
  { ad: "deterjan bidonu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Çamaşır suyu ve deterjan kapları yüksek kaliteli plastiktir, mutlaka geri dönüştürülmeli." },
  { ad: "yoğurt kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Yemek artığı kalmayacak şekilde yıkayıp sarı kutuya atınız." },
  { ad: "streç film", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Temiz streç filmler ve balonlu naylonlar (pıt pıt) plastik atığıdır." },
  { ad: "naylon poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Market poşetleri plastik geri dönüşümüne uygundur." },
  { ad: "damacana", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Eski damacanalar sert plastik grubundadır ve dönüştürülebilir." },
  { ad: "pipet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Plastik pipetler sarı kutuya atılabilir (ancak kullanımı azaltılmalıdır)." },

  // --- 🧴 CAM (Yeşil) ---
  { ad: "cam şişe", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Maden suyu, gazoz ve su şişeleri kapaksız olarak yeşil kutuya." },
  { ad: "kavanoz", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Reçel, salça, turşu kavanozları yıkanıp atılmalıdır. Metal kapakları metal kutusuna atın." },
  { ad: "parfüm şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Biten parfüm ve kolonya şişeleri cam kumbarasına atılabilir." },
  { ad: "zeytinyağı şişesi", renk: "yeşil", baslik: "CAM ATIK", bilgi: "Yağ kalıntısı bırakmayacak şekilde çalkalayıp atınız." },

  // --- 🥫 METAL (Sarı/Gri) ---
  { ad: "konserve kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Salça, mısır, ton balığı kutuları yıkanıp ezilerek metal/sarı kutuya atılmalı." },
  { ad: "içecek kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Kola ve bira gibi alüminyum kutular en değerli geri dönüşüm malzemelerindendir." },
  { ad: "alüminyum folyo", renk: "sarı", baslik: "METAL ATIK", bilgi: "Temiz ise geri dönüştürülebilir. Çok kirli ve yağlı ise çöpe atın." },
  { ad: "metal kapak", renk: "sarı", baslik: "METAL ATIK", bilgi: "Kavanoz kapakları metaldir ve geri dönüştürülebilir." },
  { ad: "tencere", renk: "sarı", baslik: "METAL ATIK", bilgi: "Eski çelik tencere ve tavalar hurdacılara veya metal toplama alanlarına verilebilir." },
  { ad: "deodorant şişesi", renk: "sarı", baslik: "METAL ATIK", bilgi: "Boş deodorant kutuları metal (alüminyum) olarak işlenir. Delmeyiniz, ateşe atmayınız." },

  // --- 🔋 TEHLİKELİ & ELEKTRONİK (Kırmızı) ---
  { ad: "pil", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Piller toprağı zehirler! Asla çöpe atmayın, marketlerdeki kırmızı pil kutularına atın." },
  { ad: "led ampul", renk: "kırmızı", baslik: "E-ATIK / TEHLİKELİ", bilgi: "İçinde elektronik devreler vardır. Cam kumbarasına ATILMAZ. E-atık noktasına verilmeli." },
  { ad: "floresan lamba", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "İçinde cıva buharı vardır. Kırmadan belediye atık merkezine teslim edilmeli." },
  { ad: "şarj kablosu", renk: "kırmızı", baslik: "ELEKTRONİK ATIK", bilgi: "Kablolar, şarj aletleri ve kulaklıklar e-atık kutularına atılmalıdır." },
  { ad: "telefon", renk: "kırmızı", baslik: "ELEKTRONİK ATIK", bilgi: "Eski telefonlar ve tabletler elektronik atık toplama merkezlerine verilmelidir." },
  { ad: "boya kutusu", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "İçi dolu boya, tiner ve solvent kutuları kimyasal atıktır." },
  { ad: "akü", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Araç aküleri kesinlikle çöpe atılmaz, sanayide geri alım noktalarına verilmelidir." },
  { ad: "ilaç", renk: "kırmızı", baslik: "TEHLİKELİ ATIK", bilgi: "Tarihi geçmiş ilaçları lavaboya dökmeyin. Eczanelerdeki atık kutularına bırakın." },

  // --- 🍂 ORGANİK (Gri/Kahverengi) ---
  { ad: "meyve kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Muz, elma, portakal kabukları kompost için harikadır." },
  { ad: "yumurta kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Yumurta kabukları kalsiyum kaynağıdır, toprağa karıştırılabilir." },
  { ad: "çay posası", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Çay ve kahve telveleri bitkiler için gübre olarak kullanılabilir." },
  { ad: "bayat ekmek", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Islatıp sokak hayvanlarına verebilir veya kompost yapabilirsiniz." },
  { ad: "kuruyemiş kabuğu", renk: "gri", baslik: "ORGANİK ATIK", bilgi: "Ceviz ve fındık kabukları doğal atıktır, doğada çözünür." }
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
// Başlık tıklanırsa sayfayı yenile (desktop + mobile touch destekli)
// -----------------------------
function reloadPageHandler(e) {
  // Eğer touchmove olduysa (kaydırma), yenileme yapma
  if (e.type === "touchend" && reloadPageHandler._touchMoved) {
    reloadPageHandler._touchMoved = false;
    return;
  }
  location.reload();
}
reloadPageHandler._touchMoved = false;

if (appTitle) {
  // click her zaman çalışır (masaüstü + bazı mobil tarayıcılarda)
  appTitle.addEventListener("click", reloadPageHandler);

  // dokunma için güvenli destek: touchstart/touchmove/touchend
  appTitle.addEventListener("touchstart", () => { reloadPageHandler._touchMoved = false; }, { passive: true });
  appTitle.addEventListener("touchmove", () => { reloadPageHandler._touchMoved = true; }, { passive: true });
  appTitle.addEventListener("touchend", reloadPageHandler);

  // pointerup ek desteği (bazı tarayıcılar)
  appTitle.addEventListener("pointerup", (ev) => {
    // yalnızca birincil pointer (parmak/sol tık) için
    if (typeof ev.isPrimary === "boolean" ? ev.isPrimary : true) {
      reloadPageHandler(ev);
    }
  });
}

// -----------------------------
// Temizle (X) davranışı
// -----------------------------
function temizleInput() {
  input.value = "";
  suggestionBox.innerHTML = "";
  suggestionBox.style.display = "none";
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
      <div class="atik-cumle">${atik.ad}, <b style="color:${atik.renk === 'gri' ? '#555' : atik.renk}">${atik.renk === 'gri' ? 'GRI (veya ÇÖP)' : atik.renk.toUpperCase()}</b> kutuya atılmalıdır.</div>
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

if (input) {
  input.addEventListener("input", () => {
    const q = (input.value || "").toLowerCase().trim();
    suggestionBox.innerHTML = "";
    aktifIndex = -1;
    if (!q) {
      suggestionBox.style.display = "none";
      return;
    }

    // basit contains araması
    const eslesen = atiklar.filter(a => a.ad.includes(q)).slice(0, 10);
    if (!eslesen.length) {
      suggestionBox.style.display = "none";
      return;
    }

    // göster
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

// tıklama dışında sayfanın herhangi bir yere tıklayınca önerileri kapat
document.addEventListener("click", (e) => {
  if (!e.target.closest(".arama-alani") && !e.target.closest(".suggestion-box")) {
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
  }
});

// -----------------------------
// Enter tuşu ile arama (input içinde) — yedek
// -----------------------------
if (input) {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      bul();
    }
  });
}

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
if (temizleBtn) temizleBtn.style.opacity = input && input.value ? 1 : 0;
