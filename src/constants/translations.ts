export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  category: 'web' | 'other';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'engineering' | 'fundamentals';
  description?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
}

export interface TranslationDict {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    title: string;
    summary: string;
    university: string;
    gdscTitle: string;
    gdscDesc: string;
  };
  skills: {
    title: string;
    categories: {
      frontend: string;
      engineering: string;
      fundamentals: string;
    };
  };
  experience: {
    title: string;
  };
  projects: {
    title: string;
    categories: {
      all: string;
      web: string;
      other: string;
    };
  };
  contact: {
    title: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    phone: string;
    location: string;
    email: string;
  };
  education: Education;
  experiences: Experience[];
  projectsList: Project[];
  skillsList: SkillItem[];
}

export const translations: Record<'tr' | 'en', TranslationDict> = {
  tr: {
    nav: {
      about: 'Hakkımda',
      skills: 'Yetenekler',
      experience: 'Deneyimler',
      projects: 'Projeler',
      contact: 'İletişim',
    },
    hero: {
      greeting: 'Merhaba, ben',
      title: 'Bilgisayar Mühendisi & Frontend Geliştirici',
      description: 'Başkent Üniversitesi Bilgisayar Mühendisliği mezunuyum. Modern web teknolojileri, asenkron veri yönetimi ve yüksek performanslı arayüz mimarileri üzerine odaklanıyorum.',
      viewProjects: 'Projelerimi Gör',
      contactMe: 'İletişime Geç',
    },
    about: {
      title: 'Hakkımda',
      summary: 'Kullanıcı dostu, yüksek performanslı ve modern web arayüzleri geliştiren bir Bilgisayar Mühendisiyim. HTML5, CSS3, JavaScript, React ve Next.js ekosistemlerinde modern standartları uyguluyorum. Google Developer Student Clubs (GDSC) Core Team üyesi olarak kazandığım liderlik ve takım çalışması yetkinliklerini, frontend projelerinde teknik değer üretmek için kullanıyorum.',
      university: 'Başkent Üniversitesi - Bilgisayar Mühendisliği',
      gdscTitle: 'GDSC Core Team Üyesi',
      gdscDesc: 'Etkinlik organizasyonları, topluluk yönetimi ve teknik eğitim destekleriyle frontend yeteneklerinin yaygınlaştırılması.',
    },
    skills: {
      title: 'Yetenekler',
      categories: {
        frontend: 'Frontend Core (Ana Menü)',
        engineering: 'Engineering & Ecosystem (Mutfak Robotları)',
        fundamentals: 'CS Fundamentals (Reçete Bilgisi)',
      },
    },
    experience: {
      title: 'Deneyim',
    },
    projects: {
      title: 'Projeler',
      categories: {
        all: 'Hepsi',
        web: 'Web Projeleri',
        other: 'Diğer Simülasyonlar',
      },
    },
    contact: {
      title: 'İletişim',
      nameLabel: 'Adınız',
      emailLabel: 'E-posta Adresiniz',
      messageLabel: 'Mesajınız',
      sendButton: 'Gönder',
      phone: '+90 507 572 0277',
      location: 'Ankara / Türkiye',
      email: 'elifyilmaz1906@gmail.com',
    },
    education: {
      school: 'Başkent Üniversitesi',
      degree: 'Bilgisayar Mühendisliği Lisans Derecesi',
      period: '2020 - 2025',
      location: 'Ankara, Türkiye',
      gpa: '2.89 / 4.00',
    },
    experiences: [
      {
        company: 'EHSİM Elektronik Harp Sist. Müh. Tic. A.Ş.',
        role: 'Stajyer Geliştirici',
        period: 'Ağustos 2023 - Eylül 2023',
        location: 'Ankara, Türkiye',
        bullets: [
          'JavaScript tabanlı, dinamik ve performans odaklı fiyat tekliflendirme & sepet modülü geliştirildi.',
          'Responsive arayüz yapıları ve modern görselleştirme araçları kullanılarak teknik raporlama ekranları optimize edildi.',
          'Mühendislik standartlarını korumak amacıyla Git versiyon kontrol sistemi aktif olarak kullanıldı.'
        ],
      },
      {
        company: 'DataFlowX',
        role: 'Stajyer Geliştirici',
        period: 'Temmuz 2024 - Ağustos 2024',
        location: 'Ankara, Türkiye',
        bullets: [
          'HTML5, CSS3 ve JavaScript kullanarak kategori filtreleme ve ürün detaylarını barındıran e-ticaret mobilya arayüzü kodlandı.',
          'Kullanıcı deneyimi (UX) standartlarına uygun dinamik sepet mantığı ve akıcı etkileşim modülleri geliştirildi.',
          'Versiyon kontrolü ve kod organizasyonunu düzenli tutmak amacıyla Git standartlarına uyuldu.'
        ],
      },
    ],
    projectsList: [
      {
        id: 'todo-app',
        title: 'Antigravity Todo App',
        subtitle: 'Yapay Zeka Destekli Yapılacaklar Listesi',
        description: 'Öncelik yönetimi (Düşük, Orta, Yüksek), LocalStorage durum koruması ve otomatik sıralama özelliklerine sahip, Next.js ve Tailwind CSS tabanlı modern bir asistan uygulaması.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
        category: 'web',
      },
      {
        id: 'weather-app',
        title: 'Weather Application',
        subtitle: 'React Hava Durumu Uygulaması',
        description: 'React bileşen mimarisi kullanılarak geliştirilmiş, Fetch API aracılığıyla harici hava durumu servislerinden asenkron veri süzerek dinamik görsel sunum yapan uygulama.',
        tags: ['React', 'API Integration', 'Fetch API', 'CSS3'],
        category: 'web',
      },
      {
        id: 'movie-portal',
        title: 'Movie Portal & REST API',
        subtitle: 'Film Portalı Entegrasyonu',
        description: 'REST API entegrasyonu ile dinamik film verilerini listeleyen, arama ve filtreleme mekanizmalarını asenkron işlemlerle yöneten kullanıcı odaklı medya arayüzü.',
        tags: ['JavaScript', 'REST API', 'CSS3', 'Asynchronous JS'],
        category: 'web',
      },
      {
        id: 'furniture-store',
        title: 'Furniture E-Commerce',
        subtitle: 'E-Ticaret Mobilya Arayüzü',
        description: 'HTML5 ve CSS3 standartlarına uygun, kategori filtreleme özellikli ve interaktif ürün detay sayfalarını içeren dinamik e-ticaret kullanıcı arayüzü.',
        tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
        category: 'web',
      },
      {
        id: 'universe-3d',
        title: 'UniVerse: Virtual Campus',
        subtitle: '3D Sanal Kampüs Simülasyonu',
        description: 'Unity motoru ve C# dilleri kullanılarak geliştirilmiş, gerçek zamanlı atmosferik verilerle senkronize çalışan dinamik gece-gündüz mekanizmasına sahip 3D kampüs simülasyonu.',
        tags: ['Unity', 'C#', '3D Modeling', 'Simulation'],
        category: 'other',
      },
    ],
    skillsList: [
      // Frontend Core
      { name: 'React', category: 'frontend' },
      { name: 'Next.js (App Router)', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'JavaScript (ES6+)', category: 'frontend' },
      { name: 'HTML5', category: 'frontend' },
      { name: 'CSS3', category: 'frontend' },
      // Engineering & Ecosystem
      { name: 'Zustand / Redux', category: 'engineering' },
      { name: 'RESTful APIs (Fetch API)', category: 'engineering' },
      { name: 'Git & GitHub', category: 'engineering' },
      { name: 'Unity', category: 'engineering' },
      { name: 'Visual Studio Code', category: 'engineering' },
      // CS Fundamentals
      { name: 'SOLID Prensipleri', category: 'fundamentals' },
      { name: 'Data Structures & Algorithms', category: 'fundamentals' },
      { name: 'C / C++', category: 'fundamentals' },
      { name: 'Java', category: 'fundamentals' },
    ],
  },
  en: {
    nav: {
      about: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      title: 'Computer Engineer & Frontend Developer',
      description: 'Computer Engineering graduate from Baskent University. Focused on modern web technologies, asynchronous data handling, and high-performance UI architectures.',
      viewProjects: 'View Projects',
      contactMe: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      summary: 'I am a Computer Engineer specialized in developing user-centric, high-performance, and modern web interfaces. I implement modern standards across HTML5, CSS3, JavaScript, React, and Next.js ecosystems. Applying the leadership and team collaboration skills I acquired as a Google Developer Student Clubs (GDSC) Core Team member, I aim to create technical value in frontend engineering initiatives.',
      university: 'Baskent University - Computer Engineering',
      gdscTitle: 'GDSC Core Team Member',
      gdscDesc: 'Fostering frontend capabilities within the community through event organization, community management, and technical mentorship.',
    },
    skills: {
      title: 'Skills',
      categories: {
        frontend: 'Frontend Core',
        engineering: 'Engineering & Ecosystem',
        fundamentals: 'CS Fundamentals',
      },
    },
    experience: {
      title: 'Experience',
    },
    projects: {
      title: 'Projects',
      categories: {
        all: 'All',
        web: 'Web Projects',
        other: 'Other Simulations',
      },
    },
    contact: {
      title: 'Contact',
      nameLabel: 'Your Name',
      emailLabel: 'Your Email Address',
      messageLabel: 'Your Message',
      sendButton: 'Send Message',
      phone: '+90 507 572 0277',
      location: 'Ankara / Turkey',
      email: 'elifyilmaz1906@gmail.com',
    },
    education: {
      school: 'Baskent University',
      degree: "Bachelor's Degree in Computer Engineering",
      period: '2020 - 2025',
      location: 'Ankara, Turkey',
      gpa: '2.89 / 4.00',
    },
    experiences: [
      {
        company: 'EHSİM Elektronik Harp Sist. Müh. Tic. A.Ş.',
        role: 'Frontend Developer Intern',
        period: 'August 2023 - September 2023',
        location: 'Ankara, Turkey',
        bullets: [
          'Developed a dynamic, high-performance quotation and shopping cart module using JavaScript.',
          'Optimized technical reporting dashboards by implementing responsive frontend layouts and data visualization components.',
          'Leveraged Git version control to adhere to engineering guidelines and manage code repository flows.'
        ],
      },
      {
        company: 'DataFlowX',
        role: 'Frontend Developer Intern',
        period: 'July 2024 - August 2024',
        location: 'Ankara, Turkey',
        bullets: [
          'Built an e-commerce furniture UI featuring category filtering and item details using HTML5, CSS3, and JavaScript.',
          'Designed dynamic cart logic and fluid interaction states complying with user experience (UX) standards.',
          'Utilized Git for code organization and tracking incremental project additions.'
        ],
      },
    ],
    projectsList: [
      {
        id: 'todo-app',
        title: 'Antigravity Todo App',
        subtitle: 'AI-Guided Task Management System',
        description: 'A modern assistant application built on Next.js and Tailwind CSS, featuring priority levels (Low, Medium, High), LocalStorage persistence, and automated task sorting.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
        category: 'web',
      },
      {
        id: 'weather-app',
        title: 'Weather Application',
        subtitle: 'React Weather Dashboard',
        description: 'A dynamic web application using React to fetch and process real-time meteorological data from external APIs asynchronously.',
        tags: ['React', 'API Integration', 'Fetch API', 'CSS3'],
        category: 'web',
      },
      {
        id: 'movie-portal',
        title: 'Movie Portal & REST API',
        subtitle: 'Dynamic Media Search Interface',
        description: 'A user-centric media index listing dynamic movie databases using asynchronous query matching and REST API pagination.',
        tags: ['JavaScript', 'REST API', 'CSS3', 'Asynchronous JS'],
        category: 'web',
      },
      {
        id: 'furniture-store',
        title: 'Furniture E-Commerce',
        subtitle: 'Interactive Product Catalog',
        description: 'A responsive e-commerce storefront layout featuring smooth category filters and interactive item showcase detail interfaces.',
        tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
        category: 'web',
      },
      {
        id: 'universe-3d',
        title: 'UniVerse: Virtual Campus',
        subtitle: '3D Campus Simulation Environment',
        description: 'A 3D simulation environment built using Unity and C#, utilizing custom lighting rigs for day-night cycles synchronized with atmospheric data feeds.',
        tags: ['Unity', 'C#', '3D Modeling', 'Simulation'],
        category: 'other',
      },
    ],
    skillsList: [
      // Frontend Core
      { name: 'React', category: 'frontend' },
      { name: 'Next.js (App Router)', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'JavaScript (ES6+)', category: 'frontend' },
      { name: 'HTML5', category: 'frontend' },
      { name: 'CSS3', category: 'frontend' },
      // Engineering & Ecosystem
      { name: 'Zustand / Redux', category: 'engineering' },
      { name: 'RESTful APIs (Fetch API)', category: 'engineering' },
      { name: 'Git & GitHub', category: 'engineering' },
      { name: 'Unity', category: 'engineering' },
      { name: 'Visual Studio Code', category: 'engineering' },
      // CS Fundamentals
      { name: 'SOLID Principles', category: 'fundamentals' },
      { name: 'Data Structures & Algorithms', category: 'fundamentals' },
      { name: 'C / C++', category: 'fundamentals' },
      { name: 'Java', category: 'fundamentals' },
    ],
  },
};
