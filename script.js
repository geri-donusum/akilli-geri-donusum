// ♻️ Atık veritabanı (çok örnekli, sade, öğretici — öneri/autocomplete destekli)
const atiklar = [
  // 📘 KAĞIT
  { ad: "kağıt", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Temiz ve kuru olduğu sürece çoğu yazı veya baskı içeren kağıt geri dönüşüme uygundur." },
  { ad: "gazete", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Gazeteler kağıt kutusuna atıldığında yeni kağıt ürünlerinin hammaddesi olur." },
  { ad: "dergi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Dergiler, broşürler ve el ilanları kağıt geri dönüşümünde değerlendirilir." },
  { ad: "kitap", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kullanılmayan kitaplar geri dönüşüme verildiğinde ağaç kesiminin azalmasına yardımcı olur." },
  { ad: "defter", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Defterlerin metal veya plastik spirali ayrılıp kağıt kısmı mavi kutuya atılmalıdır." },
  { ad: "fotokopi kağıdı", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Ofislerde en çok oluşan kağıt atık türlerinden biridir ve geri dönüşüme uygundur." },
  { ad: "karton kutu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Koli ve ambalaj kartonları katlanarak mavi kutuya atılırsa hem yer hem enerji tasarrufu sağlanır." },
  { ad: "yumurta kolisi", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Kartondan yapılan yumurta kolileri kağıt kutusuna atılabilir." },
  { ad: "süt kutusu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "İçinde plastik ve alüminyum katman olsa da karton esaslıdır ve çoğu belediyede kağıt atık olarak toplanır." },
  { ad: "koli kartonu", renk: "mavi", baslik: "KAĞIT ATIK", bilgi: "Taşınma kolileri gibi kalın kartonlar da kağıt geri dönüşümüne uygundur." },

  // 🟨 PLASTİK
  { ad: "plastik", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Şişe, kap, poşet gibi plastik malzemeler temiz ve boşsa geri dönüştürülebilir." },
  { ad: "pet şişe", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Su ve meşrubat şişeleri, ezilip kapağıyla birlikte sarı kutuya atıldığında kolayca geri dönüştürülür." },
  { ad: "su şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Tek kullanımlık su şişeleri boşaltılıp mümkünse ezilerek plastik kutusuna atılmalıdır." },
  { ad: "naylon poşet", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Doğada çözünmesi yüzlerce yıl süren poşetler, plastik geri dönüşümüne verilmelidir." },
  { ad: "ambalaj naylonu", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Kargolarda kullanılan baloncuklu naylonlar ve diğer koruyucu plastikler sarı kutuya atılmalıdır." },
  { ad: "cips paketi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Çoğu cips paketi plastik/metal karışımı çok katmanlı ambalajdır ve birçok bölgede plastik atıkla birlikte toplanır." },
  { ad: "yoğurt kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Boş ve mümkünse hızlıca durulanmış yoğurt kapları plastik geri dönüşümünde değerlendirilir." },
  { ad: "dondurma kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Plastik dondurma kapları temizlenip sarı kutuya atılabilir, yeni plastik ürünlere dönüştürülebilir." },
  { ad: "yemek saklama kabı", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Kırılan veya artık kullanılmayan plastik saklama kapları plastik geri dönüşüme verilebilir." },
  { ad: "şampuan şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Banyo ürünlerinin plastik şişeleri içi boşaltılıp kapağı kapalı şekilde sarı kutuya atılmalıdır." },
  { ad: "deterjan şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Çamaşır ve bulaşık deterjanı şişeleri kimyasal kalıntısı akıtıldıktan sonra plastik olarak toplanır." },
  { ad: "sıvı sabun şişesi", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pompalı sabun şişeleri boşaltılıp durulandıktan sonra plastik kutusuna atılabilir." },
  { ad: "plastik bardak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Tek kullanımlık plastik bardaklar plastik geri dönüşümüne aittir; kullanımı azaltmak doğa için faydalıdır." },
  { ad: "plastik tabak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Pikniklerde kullanılan plastik tabaklar temizse sarı kutuya atılabilir." },
  { ad: "plastik çatal", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "Tek kullanımlık çatal, bıçak ve kaşıklar plastik atıktır; tekrar kullanılabilir ürünler tercih edilmelidir." },
  { ad: "plastik kapak", renk: "sarı", baslik: "PLASTİK ATIK", bilgi: "İçecek kapakları küçük olsa da plastik geri dönüşümünde değerlidir." },

  // 🟧 METAL
  { ad: "metal", renk: "sarı", baslik: "METAL ATIK", bilgi: "İçecek kutuları, konserve kutuları gibi metal ambalajlar geri dönüşümle defalarca kullanılabilir." },
  { ad: "içecek kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Kola, gazoz, enerji içeceği kutuları genellikle alüminyumdur ve geri dönüşüm için çok değerlidir." },
  { ad: "konserve kutusu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Konserve kutularının içi boşaltılıp hafifçe durulandıktan sonra metal atık olarak ayrılmalıdır." },
  { ad: "teneke kutu", renk: "sarı", baslik: "METAL ATIK", bilgi: "Zeytin, peynir gibi ürünlerin teneke kutuları metal atık grubuna girer." },
  { ad: "alüminyum folyo", renk: "sarı", baslik: "METAL ATIK", bilgi: "Temiz ve çok kirlenmemiş alüminyum folyolar geri dönüşüme uygundur." },
  { ad: "metal kapak", renk: "sarı", baslik: "METAL ATIK", bilgi: "Cam şişelerin üzerindeki metal kapaklar ayrı toplanarak metal geri dönüşümüne gönderilir." },
  { ad: "kahve kapsülü", renk: "sarı", baslik: "METAL ATIK
