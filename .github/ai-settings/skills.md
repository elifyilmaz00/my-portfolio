# 🧠 SKILLS & EXPERT PERSPECTIVE (skills.md)

## 1. Yetenekler (Skills) Bölümü Standartları & Mimari Yapısı

### 🗂️ Kategorizasyon ve Hiyerarşi (Tezgah Ayrımı)
CV'deki teknik yetenekleri karmaşık bir liste halinde sunma. Veriyi yapılandırırken (`constants` veya `mocks` içinde) şu 3 ana kategoriye sadık kalarak grupla:
1. **Frontend Core (Ana Menü):** React, Next.js (App Router), TypeScript, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3.
2. **Engineering & Ecosystem (Mutfak Robotları):** State Management (Zustand/Redux), RESTful APIs (Fetch API), Git/GitHub, Unity, VS Code.
3. **CS Fundamentals (Reçete Bilgisi):** SOLID Prensipleri, Data Structures & Algorithms, C/C++, Java.

### 🎨 Görsel Tasarım Düzeni (Sunum Tabağı)
- **Modüler Cam Kartlar:** Her kategori, `border-white/[0.08]` ve `backdrop-blur-md` özelliklerine sahip geniş birer Glassmorphism kartı (`section`) olmalı.
- **Glow (Parlama) Efekti:** Her yetenek etiketinin (badge) veya ikonunun üzerine gelindiğinde (hover), o teknolojinin marka rengine sadık kalınarak arkadan çok hafif, soft bir gölge parlaması (`shadow-[0_0_15px_rgba(...)]`) ve yumuşak bir büyüme (`transition-transform duration-300 scale-105`) tetiklenmeli.
- **Seviye Çubukları Yasaktır:** Sitede asla "%90 TypeScript biliyorum" gibi öznel ve mühendisliğe yakışmayan ilerleme çubukları (progress bars) kullanma. Bunun yerine teknolojileri şık, temiz ikonlar ve etiketler (badges) şeklinde listele.

### 🧠 Örnek Veri Yapısı (TypeScript Interface Örneği)
Yetenekler listesini kodlarken veri yapısını kesinlikle şu şekilde tiplendir ve dinamik olarak map et:

```typescript
// Her bir yeteneğin veri modelini tanımlar
interface Skill {
  name: string;
  category: 'frontend' | 'engineering' | 'fundamentals';
  iconName: string; // Lucide-react ikon ismi veya SVG path
  description?: string; // İsteğe bağlı: O teknolojideki uzmanlık vurgusu
}
2. Analiz Edilen CV Verilerinin Entegrasyonu & HikayeleştirmeCV belgesindeki verileri, düz birer kopyala-yapıştır metni olarak değil, bir frontend problem çözme başarısı olarak hikayeleştirerek arayüze aktar:📈 Staj Deneyimlerinin Frontend Dilinde PazarlanmasıEHSİM Stajı Vurgusu: "JavaScript tabanlı dinamik fiyat teklif ve sepet modülü geliştirme" ile "veri görselleştirme" işlerini anlatırken; asenkron veri yönetimi, yüksek performanslı arayüz mimarisi ve Git/GitHub versiyon kontrol standartlarını nasıl uyguladığını parlat.DataFlowX Stajı Vurgusu: "Mobilya e-ticaret arayüzü ve kategori filtreleme" işini anlatırken; kullanıcı deneyimi (UX) odaklı interaktif bileşen tasarımlarını, dinamik sepet mantığını ve responsive (mobil uyumlu) layout yönetimini öne çıkar.🚀 Proje Kartlarında Mühendislik VizyonuAntigravity Todo App: Geliştirilen en güncel akıllı asistan projesi olarak portfolyoda en tepede yer almalı. Arkasındaki yapay zeka ajan kuralları (.cursorrules), durum yönetimi (state management) ve temiz kod mimarisi vurgulanmalı.React Weather Application & Movie Portal: React bileşen mimarisini, Fetch API ile asenkron veri akışlarını ve harici REST API entegrasyon yeteneklerini doğrudan gözler önüne ser.UniVerse 3D Campus (Unity & C#): Bilgisayar mühendisi olarak çok yönlülüğünü ve 3D simülasyon vizyonunu, web teknolojileriyle harmanlanabilecek vizyoner bir mühendislik yeteneği olarak konumlandır.🏆 Eğitim ve Topluluk Sosyal KanıtıBaşkent Üniversitesi: Mezuniyet notunu (GPA: 2.89/4.0) ve mühendislik altyapısını "Hakkımda" alanında kurumsal ve prestijli bir dille vurgula.GDSC Core Team: Google Developer Student Clubs Core Team üyeliğini; liderlik, takım çalışması ve topluluk yönetimi kaslarının kanıtı olarak sun.3. Çoklu Dil Desteği (i18n) ve Global İçerik StandartlarıProfesyonel Yazılım Jargonu: İngilizce dil seçeneğinde çevirileri birebir düz kelime çevirisi olarak yapma. Sektörel terimleri tam karşılıklarıyla konumlandır:Stajyer / Stajyer Geliştirici $\rightarrow$ Frontend Developer InternBitirme Projesi / Mezuniyet Projesi $\rightarrow$ Graduation ProjectGeliştirici $\rightarrow$ Software Engineer / Frontend EngineerSözlük (Dictionary) Yapısı: Okuduğun tüm CV verilerini, deneyimleri ve projeleri src/constants/translations.ts gibi merkezi bir dosyada hem TR hem EN karşılıklarıyla yapılandır. İki dil arasında veri veya hiyerarşi kaybı yaşanmasın.