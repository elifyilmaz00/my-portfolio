# 📑 PROJE İŞ AKIŞI (workflow.md)

## 🛠️ FAZ 1: Altyapı ve Tezgah Hazırlığı (Dizin & Konfigürasyon)
- [x] **Adım 1.1:** Next.js (App Router) + TypeScript projesini ayağa kaldır. `rules.md` içerisindeki dizin yapısını (`/src/app`, `/src/components` vb.) oluştur.
- [x] **Adım 1.2:** Tailwind CSS konfigürasyonunu yap. `tailwind.config.ts` dosyasına Glassmorphism için gerekli olan global renk paletini (primary, secondary, accent) ve özel animasyon (transition) sürelerini ekle.
- [x] **Adım 1.3:** Çoklu dil desteği için `src/constants/translations.ts` dosyasını oluştur. `skills.md` 3. maddedeki global jargon kurallarına uygun olarak Elif Sultan Yılmaz CV verilerini (TR/EN) merkezi bir sözlük (dictionary) mimarisinde buraya aktar.

## 🧱 FAZ 2: Bileşen Mimarisi & Atomik Tasarım (Malzeme Ön Hazırlığı)
- [x] **Adım 2.1:** Navbar (Navigasyon) bileşenini premium cam efektiyle (`backdrop-blur-md`, `border-white/[0.08]`) ve dil değiştirme butonuyla birlikte oluştur.
- [x] **Adım 2.2:** `/src/components/ui` altında yeniden kullanılabilir cam kart (`GlassCard`), şık butonlar ve hover edildiğinde marka rengiyle parıldayan (glow effect) Badge bileşenlerini yaz. Asla `any` kullanma!

## 🎨 FAZ 3: Sayfalar ve Hikayeleştirme (Sunum Tabağı)
- [x] **Adım 3.1:** Hero Section & Hakkımda: Başkent Üniversitesi mühendislik altyapını ve GDSC Core Team liderlik deneyimini kurumsal/prestijli bir dille anlatan giriş alanını tasarla. Arka plana soft CSS grid çizgileri serpiştir.
- [x] **Adım 3.2:** Skills (Yetenekler): `skills.md` dosyasındaki 3 ana kategoriye göre (Frontend Core, Engineering, CS Fundamentals) modüler cam kartları yerleştir. İlerleme çubukları yerine parıldayan şık ikon ve etiketleri map et.
- [x] **Adım 3.3:** Deneyimler (Stajlar): EHSİM ve DataFlowX stajlarını düz metin olarak değil; asenkron veri yönetimi, veri görselleştirme ve filtreleme başarıları olarak hikayeleştirerek kronolojik bir timeline (zaman çizgisi) ile sun.
- [x] **Adım 3.4:** Projeler: Antigravity Todo App en tepede olacak şekilde; Weather App, Movie Portal ve UniVerse 3D Campus projelerini cam kartlar halinde listele. Asenkron veri simülasyonu için parıldayan İskelet Ekranlar (Skeleton Loaders) ekle.

## 🛑 FAZ 4: Güvenlik, Performans ve Cilalama (Son Kontroller)
- [ ] **Adım 4.1:** Tüm asenkron işlemlere ve form yapılarına `try-catch` blokları ekle. Olası bir patlamada gösterilecek premium hata arayüzünü ve *"Kod tabanında ufak bir yan etki oluştu..."* mesajını entegre et.
- [ ] **Adım 4.2:** Projeyi baştan sona optional chaining (`?.`) süzgecinden geçirerek null/undefined çökmelerini sıfırla.
- [ ] **Adım 4.3:** Tüm siteyi mobil öncelikli (Mobile-First) responsive testlerinden geçir. `npm run lint` ve `npm run build` komutlarını çalıştırarak sıfır hata (Zero Warning/Error) ile derle.