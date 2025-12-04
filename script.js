// ♻️ Atık veritabanı (çok örnekli, sade, öğretici)
const atiklar = [
  // 📘 KAĞIT
  {
    ad: "kağıt",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Temiz ve kuru olduğu sürece çoğu yazı veya baskı içeren kağıt geri dönüşüme uygundur."
  },
  {
    ad: "gazete",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Gazeteler kağıt kutusuna atıldığında yeni kağıt ürünlerinin hammaddesi olur."
  },
  {
    ad: "dergi",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Dergiler, broşürler ve el ilanları kağıt geri dönüşümünde değerlendirilir."
  },
  {
    ad: "kitap",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Kullanılmayan kitaplar geri dönüşüme verildiğinde ağaç kesiminin azalmasına yardımcı olur."
  },
  {
    ad: "defter",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Defterlerin metal veya plastik spirali ayrılıp kağıt kısmı mavi kutuya atılmalıdır."
  },
  {
    ad: "fotokopi kağıdı",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Ofislerde en çok oluşan kağıt atık türlerinden biridir ve geri dönüşüme uygundur."
  },
  {
    ad: "karton kutu",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Koli ve ambalaj kartonları katlanarak mavi kutuya atılırsa hem yer hem enerji tasarrufu sağlanır."
  },
  {
    ad: "yumurta kolisi",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Kartondan yapılan yumurta kolileri kağıt kutusuna atılabilir."
  },
  {
    ad: "süt kutusu",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "İçinde plastik ve alüminyum katman olsa da karton esaslıdır ve çoğu belediyede kağıt atık olarak toplanır."
  },
  {
    ad: "koli kartonu",
    renk: "mavi",
    baslik: "KAĞIT ATIK",
    bilgi: "Taşınma kolileri gibi kalın kartonlar da kağıt geri dönüşümüne uygundur."
  },

  // 🟨 PLASTİK
  {
    ad: "plastik",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Şişe, kap, poşet gibi plastik malzemeler temiz ve boşsa geri dönüştürülebilir."
  },
  {
    ad: "pet şişe",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Su ve meşrubat şişeleri, ezilip kapağıyla birlikte sarı kutuya atıldığında kolayca geri dönüştürülür."
  },
  {
    ad: "su şişesi",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Tek kullanımlık su şişeleri boşaltılıp mümkünse ezilerek plastik kutusuna atılmalıdır."
  },
  {
    ad: "naylon poşet",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Doğada çözünmesi yüzlerce yıl süren poşetler, plastik geri dönüşümüne verilmelidir."
  },
  {
    ad: "ambalaj naylonu",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Kargolarda kullanılan baloncuklu naylonlar ve diğer koruyucu plastikler sarı kutuya atılmalıdır."
  },
  {
    ad: "cips paketi",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Çoğu cips paketi plastik/metal karışımı çok katmanlı ambalajdır ve birçok bölgede plastik atıkla birlikte toplanır."
  },
  {
    ad: "yoğurt kabı",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Boş ve mümkünse hızlıca durulanmış yoğurt kapları plastik geri dönüşümünde değerlendirilir."
  },
  {
    ad: "dondurma kabı",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Plastik dondurma kapları temizlenip sarı kutuya atılabilir, yeni plastik ürünlere dönüştürülebilir."
  },
  {
    ad: "yemek saklama kabı",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Kırılan veya artık kullanılmayan plastik saklama kapları plastik geri dönüşüme verilebilir."
  },
  {
    ad: "şampuan şişesi",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Banyo ürünlerinin plastik şişeleri içi boşaltılıp kapağı kapalı şekilde sarı kutuya atılmalıdır."
  },
  {
    ad: "deterjan şişesi",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Çamaşır ve bulaşık deterjanı şişeleri kimyasal kalıntısı akıtıldıktan sonra plastik olarak toplanır."
  },
  {
    ad: "sıvı sabun şişesi",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Pompalı sabun şişeleri boşaltılıp durulandıktan sonra plastik kutusuna atılabilir."
  },
  {
    ad: "plastik bardak",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Tek kullanımlık plastik bardaklar plastik geri dönüşümüne aittir; kullanımı azaltmak doğa için faydalıdır."
  },
  {
    ad: "plastik tabak",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Pikniklerde kullanılan plastik tabaklar temizse sarı kutuya atılabilir."
  },
  {
    ad: "plastik çatal",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "Tek kullanımlık çatal, bıçak ve kaşıklar plastik atıktır; tekrar kullanılabilir ürünler tercih edilmelidir."
  },
  {
    ad: "plastik kapak",
    renk: "sarı",
    baslik: "PLASTİK ATIK",
    bilgi: "İçecek kapakları küçük olsa da plastik geri dönüşümünde değerlidir."
  },

  // 🟧 METAL (çoğu yerde plastikle birlikte sarı kutuda toplanır)
  {
    ad: "metal",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "İçecek kutuları, konserve kutuları gibi metal ambalajlar geri dönüşümle defalarca kullanılabilir."
  },
  {
    ad: "içecek kutusu",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Kola, gazoz, enerji içeceği kutuları genellikle alüminyumdur ve geri dönüşüm için çok değerlidir."
  },
  {
    ad: "konserve kutusu",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Konserve kutularının içi boşaltılıp hafifçe durulandıktan sonra metal atık olarak ayrılmalıdır."
  },
  {
    ad: "teneke kutu",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Zeytin, peynir gibi ürünlerin teneke kutuları metal atık grubuna girer."
  },
  {
    ad: "alüminyum folyo",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Temiz ve çok kirlenmemiş alüminyum folyolar geri dönüşüme uygundur."
  },
  {
    ad: "metal kapak",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Cam şişelerin üzerindeki metal kapaklar ayrı toplanarak metal geri dönüşümüne gönderilir."
  },
  {
    ad: "kahve kapsülü",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Alüminyum gövdeli kahve kapsülleri bazı sistemlerde metal geri dönüşümünde değerlendirilir; kahve posası ayrılmalıdır."
  },
  {
    ad: "deodorant kutusu",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Boş metal deodorant ve saç spreyi kutuları çoğu yerde metal atık olarak değerlendirilir."
  },
  {
    ad: "tencere",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Eski metal tencere ve tavalar hurda metal veya belediyenin metal toplama noktalarına verilmelidir."
  },
  {
    ad: "çaydanlık",
    renk: "sarı",
    baslik: "METAL ATIK",
    bilgi: "Kullanılmayan metal çaydanlıklar metal geri dönüşüm sistemine dahil edilebilir."
  },

  // 🟩 CAM
  {
    ad: "cam",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Cam şişe ve kavanozlar, kırılmamış ve içi boş olduğu sürece cam kumbaralarına atılmalıdır."
  },
  {
    ad: "cam şişe",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Cam şişeler kalite kaybı olmadan defalarca geri dönüştürülebilir."
  },
  {
    ad: "cam kavanoz",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Reçel, zeytin gibi ürünlerin cam kavanozları yıkanıp kapakları ayrılarak yeşil kutuya atılır."
  },
  {
    ad: "reçel kavanozu",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "İçinde yiyecek kalmayacak şekilde boşaltılıp cam kumbarasına atılmalıdır."
  },
  {
    ad: "bal kavanozu",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Bal kavanozları sıcak suyla durulanıp cam geri dönüşümüne verilebilir."
  },
  {
    ad: "kolonya şişesi",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Boş cam kolonya şişeleri yeni cam ürünlerin hammaddesi olabilir."
  },
  {
    ad: "cam yağ şişesi",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Ayçiçek, zeytinyağı gibi cam şişeler boşaltılıp mümkünse durulandıktan sonra cam kumbarasına atılmalıdır."
  },
  {
    ad: "turşu kavanozu",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Turşu kavanozlarının metal kapağı ayrılıp cam kısmı yeşil kutuya atılmalıdır."
  },
  {
    ad: "cam vazo",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Sağlam cam vazolar kırılmamışsa cam geri dönüşümüne verilebilir."
  },
  {
    ad: "cam kupa",
    renk: "yeşil",
    baslik: "CAM ATIK",
    bilgi: "Bazı belediyeler ısıya dayanıklı camları ayrı toplasa da çoğu yerde cam atıkla birlikte değerlendirilir."
  },

  // 🟫 ORGANİK
  {
    ad: "organik atık",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Meyve-sebze kabukları, yemek artıkları gibi biyobozunur atıklar bu gruba girer."
  },
  {
    ad: "yemek artığı",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Artan yemekler mümkünse israf edilmeden değerlendirilir, kalanı organik atık olarak ayrılır."
  },
  {
    ad: "muz kabuğu",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Muz kabuğu kompost yapımında kullanılabilir ve toprağı zenginleştirir."
  },
  {
    ad: "elma kabuğu",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Meyve kabukları doğada kolay çözünen organik atıklardandır."
  },
  {
    ad: "sebze kabuğu",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Patates, havuç, salatalık gibi sebzelerin kabukları kompost için uygundur."
  },
  {
    ad: "patates kabuğu",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Patates kabukları kompost karışımına eklenebilir."
  },
  {
    ad: "limon kabuğu",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Limon ve portakal kabukları ufalanarak kompostta kullanılabilir."
  },
  {
    ad: "bayat ekmek",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Önce ihtiyaç sahiplerine veya hayvanlara verilmesi, kalan kısmın organik atık olarak ayrılması önerilir."
  },
  {
    ad: "çay posası",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Demlenmiş çay posaları bitki toprağına karıştırıldığında doğal besin kaynağı olur."
  },
  {
    ad: "kahve posası",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Kahve posası hem kompostta hem de bitki toprağında değerlendirilebilir."
  },
  {
    ad: "yumurta kabuğu",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Kurutulup ufalandığında bitkilere kalsiyum takviyesi sağlayan doğal bir malzemedir."
  },
  {
    ad: "çekirdek kabuğu",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Ay çekirdeği, kabak çekirdeği kabukları doğada çözünebilen organik atıklardır."
  },
  {
    ad: "çiçek toprağı",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Saksı toprağı, kuru yaprak ve küçük dallarla birlikte organik atık/kompost içinde değerlendirilebilir."
  },
  {
    ad: "bahçe dalı",
    renk: "gri",
    baslik: "ORGANİK ATIK",
    bilgi: "Budanan ince dallar ve yapraklar organik atık olarak ayrılmalıdır."
  },

  // 🟥 TEHLİKELİ
  {
    ad: "tehlikeli atık",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Pil, ilaç, kimyasal ve bazı elektronikler doğaya zarar verdiği için ayrı toplanmalıdır."
  },
  {
    ad: "pil",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Toprağa veya suya karıştığında ağır metaller yayar; bu yüzden özel pil toplama kutularına atılmalıdır."
  },
  {
    ad: "şarjlı pil",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Tekrar kullanılabilir olsalar da ömürleri bittiğinde normal çöpe değil pil kutularına atılmalıdır."
  },
  {
    ad: "tasarruflu ampul",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "İçerdiği civa nedeniyle kırıldığında sağlığa zararlıdır; özel toplama noktalarına verilmelidir."
  },
  {
    ad: "flüoresan lamba",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Civa içeren bu lambalar kesinlikle normal çöp kutularına atılmamalıdır."
  },
  {
    ad: "ilaç",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Son kullanma tarihi geçmiş veya kullanılmayan ilaçlar eczanelerdeki toplama kutularına verilmelidir."
  },
  {
    ad: "boya kutusu",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "İçinde solvent ve kimyasal bulunduğu için özel tehlikeli atık tesislerinde işlenir."
  },
  {
    ad: "böcek ilacı",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Böcek ilacı şişeleri ve kutuları normal çöpe değil tehlikeli atık sistemine verilmelidir."
  },
  {
    ad: "motor yağı",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Kullanılmış motor yağları kesinlikle toprağa veya giderlere dökülmemeli, lisanslı toplama noktalarına teslim edilmelidir."
  },
  {
    ad: "sprey boya",
    renk: "kırmızı",
    baslik: "TEHLİKELİ ATIK",
    bilgi: "Sprey boya kutuları yanıcı ve kimyasal içeriklidir, tehlikeli atık kapsamında değerlendirilir."
  },

  // 🟥 ELEKTRONİK
  {
    ad: "elektronik atık",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Elektronik cihazlar içerdikleri metal ve kimyasallar nedeniyle özel elektronik atık toplama noktalarına verilmelidir."
  },
  {
    ad: "cep telefonu",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "İçindeki metaller ve kimyasallar nedeniyle elektronik atık toplama noktalarına bırakılmalıdır."
  },
  {
    ad: "şarj aleti",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Bozulan adaptör ve kablolar elektronik atık olarak ayrı toplanmalıdır."
  },
  {
    ad: "kulaklık",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Kablo ve elektronik devre içerdiği için elektronik atık kutusuna atılmalıdır."
  },
  {
    ad: "kumanda",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "İçindeki piller pil kutusuna, kumanda gövdesi ise elektronik atık noktasına verilmelidir."
  },
  {
    ad: "laptop",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Dizüstü bilgisayarlar, yetkili elektronik atık toplama noktalarına veya belediyenin elektronik atık hattına verilmelidir."
  },
  {
    ad: "tablet",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Kırık veya kullanılmayan tabletler normal çöpe değil elektronik atık sistemine verilmelidir."
  },
  {
    ad: "klavye",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Bilgisayar klavyeleri elektronik devre içerdiği için elektronik atık olarak toplanmalıdır."
  },
  {
    ad: "mouse",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Bilgisayar fareleri de elektronik atık kapsamındadır."
  },
  {
    ad: "televizyon",
    renk: "kırmızı",
    baslik: "ELEKTRONİK ATIK",
    bilgi: "Eski televizyonlar ağır metal ve kimyasal içerir; lisanslı toplama noktalarına verilmelidir."
  },

  // ⚪ EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN – en çok karıştırılanlar
  {
    ad: "evsel atık",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Geri dönüşüme uygun olmayan veya kirli atıklar bu gruptadır."
  },
  {
    ad: "peçete",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Kirli veya ıslak kağıt ürünler (peçete, yağlı kağıt) kağıt geri dönüşümüne uygun değildir, evsel atığa atılmalıdır."
  },
  {
    ad: "kağıt havlu",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Genelde ıslak ve kirli oldukları için kağıt kutusuna değil evsel atığa atılmalıdır."
  },
  {
    ad: "karton bardak",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "İç kısmı plastik kaplı olduğu için çoğu sistemde kağıt geri dönüşümüne alınmaz; evsel atığa atılır."
  },
  {
    ad: "pizza kutusu",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Kutunun yağlı ve kirli kısımları kağıt geri dönüşümüne uygun değildir, evsel atığa atılmalıdır."
  },
  {
    ad: "ıslak mendil",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Çoğu ıslak mendil plastik lif içerir; tuvalete atılmamalı, evsel atığa atılmalıdır."
  },
  {
    ad: "bebek bezi",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Hem plastik hem organik kir içerdiği için hiçbir geri dönüşüm kutusuna uygun değildir, evsel atığa aittir."
  },
  {
    ad: "kırık cam",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Kırık tabak, bardak ve ısıya dayanıklı camlar cam kumbarasına değil, güvenli şekilde paketlenip evsel atığa atılmalıdır."
  },
  {
    ad: "seramik tabak",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Porselen ve seramik ürünler cam geri dönüşümüne uygun değildir, evsel atık olarak toplanır."
  },
  {
    ad: "porselen kupa",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Kırılan porselen kupalar camla karıştırılmadan evsel atığa atılmalıdır."
  },
  {
    ad: "bulaşık süngeri",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Plastik içerir ama kirli ve yağlı olduğu için geri dönüşüme alınmaz, evsel atıktır."
  },
  {
    ad: "yüz maskesi",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Tek kullanımlık tıbbi maskeler geri dönüştürülemez, evsel/medikal atık olarak değerlendirilir."
  },
  {
    ad: "sigara izmariti",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Filtreleri plastik lif içerir ve toksiktir, kesinlikle yere atılmamalı, evsel atığa atılmalıdır."
  },
  {
    ad: "alışveriş fişi",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Birçok fiş termal kağıttan üretilir ve kimyasal içerdiğinden kağıt geri dönüşümüne uygun değildir."
  },
  {
    ad: "cd",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "CD ve DVD’ler plastik ve metal karışımıdır, çoğu sistemde özel geri dönüşüm yoktur, evsel atığa gider."
  },
  {
    ad: "kalem",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Plastik, metal ve mürekkep içeren karışık yapısı nedeniyle genellikle geri dönüşüme alınmaz."
  },
  {
    ad: "diş fırçası",
    renk: "gri",
    baslik: "EVSEL / GERİ DÖNÜŞTÜRÜLEMEYEN ATIK",
    bilgi: "Plastik ve naylon karışımı olduğu için çoğu yerde evsel atık olarak değerlendirilir."
  },

  // 👕 TEKSTİL
  {
    ad: "tekstil atık",
    renk: "gri",
    baslik: "TEKSTİL ATIK",
    bilgi: "Giysi, çarşaf, havlu gibi tekstil ürünleri bazı belediyelerde ayrı tekstil kumbaralarında toplanır."
  },
  {
    ad: "giysi",
    renk: "gri",
    baslik: "TEKSTİL ATIK",
    bilgi: "Kullanılmayan ama temiz giysiler önce bağışlanmalı, kullanılamayacak durumdakiler tekstil atığına verilmelidir."
  },
  {
    ad: "tişört",
    renk: "gri",
    baslik: "TEKSTİL ATIK",
    bilgi: "Pamuklu tişörtler bez olarak değerlendirilebilir veya tekstil kumbaralarına atılabilir."
  },
  {
    ad: "pantolon",
    renk: "gri",
    baslik: "TEKSTİL ATIK",
    bilgi: "Eski pantolonlar yeniden kullanım ya da tekstil geri dönüşümü için ayrılmalıdır."
  },
  {
    ad: "çorap",
    renk: "gri",
    baslik: "TEKSTİL ATIK",
    bilgi: "Tek kalmış veya yıpranmış çoraplar tekstil atığı kapsamında değerlendirilir."
  },
  {
    ad: "havlu",
    renk: "gri",
    baslik: "TEKSTİL ATIK",
    bilgi: "Eski havlular temizlik bezi olarak kullanılabilir, aşırı yıpranmışsa tekstil atığına ayrılmalıdır."
  }
];
