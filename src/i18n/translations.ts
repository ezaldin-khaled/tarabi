export type Locale = 'ar' | 'en'

export type ServiceId = 'land' | 'sea' | 'air' | 'customs' | 'logistics'
export type RegionId = 'gcc' | 'levant' | 'iraq_egypt' | 'turkey_global'

export type Translation = {
  meta: { homeTitle: string; coverageTitle: string }
  nav: {
    home: string
    services: string
    coverage: string
    whyUs: string
    contact: string
    coverageNetwork: string
    trackShipment: string
    getQuote: string
    menu: string
  }
  brand: { name: string; tagline: string; logo: string }
  hero: {
    badge: string
    title: string
    description: string
    subdescription: string
    stats: Array<{ value: string; label: string }>
  }
  servicesSection: { eyebrow: string; title: string; description: string; countriesLabel: string }
  services: Array<{
    id: ServiceId
    icon: string
    title: string
    summary: string
    details: string[]
    countries?: string[]
  }>
  coverageSection: {
    eyebrow: string
    title: string
    description: string
    viewDetails: string
    routesLabel: string
    operationalRoute: string
  }
  regions: Array<{ id: RegionId; name: string; routes: number; status: string }>
  whySection: { eyebrow: string; title: string; description: string }
  whyUs: Array<{ icon: string; title: string; text: string }>
  contactSection: {
    eyebrow: string
    title: string
    description: string
    locationLabel: string
    emailLabel: string
    phoneLabel: string
    nameLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    serviceLabel: string
    serviceOptions: string[]
    messageLabel: string
    messagePlaceholder: string
    submit: string
    location: string
    email: string
    phone: string
  }
  ui: { imageSoon: string }
  footer: {
    servicesTitle: string
    serviceLinks: string[]
    companyTitle: string
    companyLinks: { whyUs: string; coverage: string; contact: string }
    contactTitle: string
    contactUs: string
    rights: string
  }
  coveragePage: {
    backHome: string
    eyebrow: string
    title: string
    description: string
    regionsTitle: string
    regionsHint: string
    activeRoutes: string
    availableServices: string
    shipmentsTitle: string
    shipmentsDescription: string
    shipments: Array<{ id: string; route: string; type: string; status: string; variant: 'info' | 'success' | 'warning' }>
  }
  networkOverview: {
    title: string
    live: string
    subtitle: string
    kpis: Array<{ label: string; value: string; icon: string }>
    regionsTitle: string
    corridorsTitle: string
    countriesTitle: string
    corridors: Array<{ id: string; from: string; to: string; load: number; variant: 'success' | 'info' }>
  }
  lang: { label: string; ar: string; en: string }
}

const LOGO = '/tarabih png.png'

export const translations: Record<Locale, Translation> = {
  ar: {
    meta: {
      homeTitle: 'طربيه للنقل والخدمات اللوجستية',
      coverageTitle: 'شبكة التغطية | طربيه للنقل والخدمات اللوجستية',
    },
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      coverage: 'التغطية',
      whyUs: 'لماذا طربيه',
      contact: 'تواصل معنا',
      coverageNetwork: 'شبكة التغطية',
      trackShipment: 'تتبع شحنة',
      getQuote: 'اطلب عرض سعر',
      menu: 'القائمة',
    },
    brand: {
      name: 'طربيه للنقل والخدمات اللوجستية',
      tagline: 'نحرك أعمالكم بثقة... ونربطكم بأسواق المنطقة والعالم.',
      logo: LOGO,
    },
    hero: {
      badge: 'من دولة الإمارات العربية المتحدة',
      title: 'شريككم الاستراتيجي لحلول النقل وسلاسل الإمداد في الشرق الأوسط',
      description:
        'من قلب الإمارات، أحد أهم المراكز التجارية واللوجستية في العالم، نقدم حلولاً متكاملة للنقل وإدارة سلاسل الإمداد مدعومة بشبكة واسعة من الشركاء الدوليين وخبرات تشغيلية تضمن الكفاءة والموثوقية.',
      subdescription:
        'لا نقدم خدمة نقل فحسب — بل حلولاً لوجستية متكاملة تساعدكم على الوصول إلى أسواقكم بسرعة وأمان، مع إدارة احترافية لكل مرحلة من الشحن والنقل والتوزيع.',
      stats: [
        { value: '12+', label: 'دولة مغطاة' },
        { value: '5', label: 'خدمات متكاملة' },
        { value: '3', label: 'وسائل نقل' },
      ],
    },
    servicesSection: {
      eyebrow: 'خدماتنا',
      title: 'حلول نقل ولوجستيات متكاملة',
      description: 'من النقل البري إلى الشحن البحري والجوي — نغطي كل مرحلة من رحلة شحنتكم.',
      countriesLabel: 'دول التغطية البريّة:',
    },
    services: [
      {
        id: 'land',
        icon: 'local_shipping',
        title: 'النقل البري الإقليمي والدولي',
        summary: 'حلول نقل مرنة وموثوقة للحاويات والسيارات والآليات من وإلى الإمارات عبر شبكة تشغيل واسعة.',
        details: ['شحنات كاملة (FTL) وجزئية (LTL)', 'بضائع عامة، مواد غذائية، معدات صناعية', 'حاويات، سيارات، ومشاريع خاصة'],
        countries: ['السعودية', 'عُمان', 'الكويت', 'قطر', 'البحرين', 'العراق', 'الأردن', 'سوريا', 'لبنان', 'مصر', 'السودان', 'تركيا'],
      },
      {
        id: 'sea',
        icon: 'directions_boat',
        title: 'الشحن البحري',
        summary: 'شحن من وإلى أهم الموانئ العالمية عبر شبكة واسعة من الخطوط الملاحية والشركاء الدوليين.',
        details: ['FCL — حاويات كاملة', 'LCL — حاويات مشتركة', 'شحنات خاصة ومشاريع', 'حلول الاستيراد والتصدير'],
      },
      {
        id: 'air',
        icon: 'flight',
        title: 'الشحن الجوي',
        summary: 'للبضائع التي تتطلب سرعة الوصول — شبكة عالمية من شركات الطيران ووكلاء الشحن المعتمدين مع متابعة حتى التسليم.',
        details: ['شحن عاجل ومعتمد', 'متابعة دقيقة للشحنات', 'تنسيق التسليم النهائي'],
      },
      {
        id: 'customs',
        icon: 'gavel',
        title: 'التخليص الجمركي',
        summary: 'فريق متخصص يضمن إنجاز الإجراءات الجمركية بكفاءة، لتقليل أوقات الانتظار وتسريع حركة الشحنات عبر الحدود.',
        details: ['إجراءات استيراد وتصدير', 'تنسيق عبر الحدود', 'تقليل التأخير التشغيلي'],
      },
      {
        id: 'logistics',
        icon: 'inventory_2',
        title: 'الخدمات اللوجستية وسلاسل الإمداد',
        summary: 'حلول متكاملة لإدارة الشحنات والمشاريع والتخزين والتوزيع متعدد الوسائط.',
        details: ['إدارة الشحنات والمشاريع', 'التخزين والتوزيع', 'تنسيق النقل متعدد الوسائط', 'حلول للشركات والمصانع', 'إدارة التوريد الإقليمي'],
      },
    ],
    coverageSection: {
      eyebrow: 'نطاق التغطية',
      title: 'نطاق التغطية',
      description: 'بفضل حضورنا الإقليمي وشبكة علاقاتنا الدولية، نربط بين أسواق الخليج وبلاد الشام والعراق ومصر وتركيا والأسواق العالمية.',
      viewDetails: 'عرض التفاصيل',
      routesLabel: 'مسار تشغيلي',
      operationalRoute: 'مسار تشغيلي',
    },
    regions: [
      { id: 'gcc', name: 'دول الخليج العربي', routes: 48, status: 'تشغيل يومي' },
      { id: 'levant', name: 'بلاد الشام', routes: 22, status: 'تشغيل منتظم' },
      { id: 'iraq_egypt', name: 'العراق ومصر', routes: 18, status: 'تشغيل منتظم' },
      { id: 'turkey_global', name: 'تركيا والأسواق العالمية', routes: 34, status: 'شركاء دوليون' },
    ],
    whySection: { eyebrow: 'لماذا طربيه؟', title: 'شريك موثوق لأعمالكم', description: 'نجمع بين الخبرة الإقليمية والشبكة الدولية لنقدّم لكم تجربة نقل سلسة.' },
    whyUs: [
      { icon: 'hub', title: 'شبكة إقليمية قوية', text: 'علاقات تشغيلية واسعة مع شركاء النقل والخدمات اللوجستية في مختلف دول المنطقة.' },
      { icon: 'verified', title: 'موثوقية والتزام', text: 'نجاح عملائنا يعتمد على الالتزام بالمواعيد ودقة التنفيذ وفق أعلى المعايير التشغيلية.' },
      { icon: 'tune', title: 'حلول مخصصة', text: 'حلول مرنة مصممة خصيصاً وفق طبيعة النشاط والشحنات والأسواق المستهدفة.' },
      { icon: 'public', title: 'خبرة في الأسواق الإقليمية', text: 'فهم عميق للأنظمة التشغيلية والجمركية في الخليج والعراق وبلاد الشام.' },
      { icon: 'support_agent', title: 'متابعة مستمرة', text: 'فريق متخصص لمتابعة الشحنات وتقديم الدعم المباشر في جميع مراحل النقل.' },
    ],
    contactSection: {
      eyebrow: 'تواصل معنا',
      title: 'تواصل معنا',
      description: 'أخبرنا عن احتياجات الشحن والنقل — فريقنا جاهز لمساعدتكم في بناء الحل المناسب.',
      locationLabel: 'المقر',
      emailLabel: 'البريد',
      phoneLabel: 'الهاتف',
      nameLabel: 'الاسم',
      namePlaceholder: 'الاسم الكامل',
      emailPlaceholder: 'name@company.com',
      serviceLabel: 'نوع الخدمة',
      serviceOptions: ['النقل البري', 'الشحن البحري', 'الشحن الجوي', 'التخليص الجمركي', 'سلاسل الإمداد'],
      messageLabel: 'تفاصيل الشحنة',
      messagePlaceholder: 'الوجهة، نوع البضاعة، الحجم التقريبي...',
      submit: 'إرسال الطلب',
      location: 'الإمارات العربية المتحدة',
      email: 'info@tarabih.ae',
      phone: '+971 XX XXX XXXX',
    },
    ui: { imageSoon: 'صورة قريباً' },
    footer: {
      servicesTitle: 'خدماتنا',
      serviceLinks: ['النقل البري', 'الشحن البحري والجوي', 'التخليص الجمركي', 'سلاسل الإمداد'],
      companyTitle: 'الشركة',
      companyLinks: { whyUs: 'لماذا طربيه', coverage: 'شبكة التغطية', contact: 'تواصل معنا' },
      contactTitle: 'تواصل',
      contactUs: 'راسلنا الآن',
      rights: 'جميع الحقوق محفوظة.',
    },
    coveragePage: {
      backHome: 'العودة للرئيسية',
      eyebrow: 'شبكة التغطية',
      title: 'نربطكم بأسواق المنطقة والعالم',
      description: 'من الإمارات نصل إلى الخليج وبلاد الشام والعراق ومصر وتركيا — عبر شبكة شركاء موثوقة ومسارات تشغيلية مجربة.',
      regionsTitle: 'المناطق',
      regionsHint: 'اختر منطقة لعرض تفاصيلها',
      activeRoutes: 'مسار تشغيلي نشط',
      availableServices: 'الخدمات المتاحة',
      shipmentsTitle: 'أمثلة على الشحنات النشطة',
      shipmentsDescription: 'نماذج من المسارات التي نُديرها يومياً لعملائنا',
      shipments: [
        { id: 'TRB-2041', route: 'دبي → الرياض', type: 'FTL · حاويات', status: 'في الطريق', variant: 'info' },
        { id: 'TRB-1988', route: 'دبي → بغداد', type: 'LTL · بضائع عامة', status: 'في الموعد', variant: 'success' },
        { id: 'TRB-2103', route: 'جبل علي → إسطنبول', type: 'FCL · بحري', status: 'تخليص جمركي', variant: 'warning' },
        { id: 'TRB-1876', route: 'دبي → عمان', type: 'سيارات', status: 'في الموعد', variant: 'success' },
      ],
    },
    networkOverview: {
      title: 'نظرة على شبكة طربيه',
      live: 'تشغيل نشط',
      subtitle: 'تغطية إقليمية من الإمارات إلى الخليج وبلاد الشام والعراق ومصر وتركيا',
      kpis: [
        { label: 'دولة مغطاة', value: '12+', icon: 'public' },
        { label: 'وسائل النقل', value: '3', icon: 'local_shipping' },
        { label: 'خدمات متكاملة', value: '5', icon: 'inventory_2' },
        { label: 'المقر', value: 'الإمارات', icon: 'location_on' },
      ],
      regionsTitle: 'المناطق الرئيسية',
      corridorsTitle: 'مسارات النقل البري النشطة',
      countriesTitle: 'دول النقل البري',
      corridors: [
        { id: 'GCC', from: 'دبي', to: 'الرياض', load: 88, variant: 'success' },
        { id: 'LEV', from: 'عمّان', to: 'بيروت', load: 72, variant: 'info' },
        { id: 'IRQ', from: 'دبي', to: 'بغداد', load: 81, variant: 'success' },
        { id: 'TR', from: 'دبي', to: 'إسطنبول', load: 65, variant: 'info' },
      ],
    },
    lang: { label: 'اللغة', ar: 'عربي', en: 'English' },
  },
  en: {
    meta: {
      homeTitle: 'Tarabih Transport & Logistics',
      coverageTitle: 'Coverage Network | Tarabih Transport',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      coverage: 'Coverage',
      whyUs: 'Why Tarabih',
      contact: 'Contact',
      coverageNetwork: 'Coverage network',
      trackShipment: 'Track shipment',
      getQuote: 'Get a quote',
      menu: 'Menu',
    },
    brand: {
      name: 'Tarabih Transport & Logistics',
      tagline: 'Moving your business with confidence — connecting you to regional and global markets.',
      logo: LOGO,
    },
    hero: {
      badge: 'Based in the United Arab Emirates',
      title: 'Your strategic partner for transport and supply chain solutions in the Middle East',
      description:
        'From the heart of the UAE — one of the world\'s leading trade and logistics hubs — we deliver integrated transport and supply chain solutions backed by an extensive international partner network and operational expertise.',
      subdescription:
        'We don\'t just move cargo — we provide end-to-end logistics that help you reach your markets quickly and safely, with professional management at every stage of shipping, transport, and distribution.',
      stats: [
        { value: '12+', label: 'Countries' },
        { value: '5', label: 'Core services' },
        { value: '3', label: 'Transport modes' },
      ],
    },
    servicesSection: {
      eyebrow: 'Our services',
      title: 'Integrated transport & logistics',
      description: 'From road freight to sea and air shipping — we cover every stage of your shipment\'s journey.',
      countriesLabel: 'Road freight coverage:',
    },
    services: [
      {
        id: 'land',
        icon: 'local_shipping',
        title: 'Regional & international road freight',
        summary: 'Flexible, reliable transport for containers, vehicles, and machinery to and from the UAE across a wide operating network.',
        details: ['Full (FTL) and partial (LTL) loads', 'General cargo, foodstuffs, industrial equipment', 'Containers, vehicles, and special projects'],
        countries: ['Saudi Arabia', 'Oman', 'Kuwait', 'Qatar', 'Bahrain', 'Iraq', 'Jordan', 'Syria', 'Lebanon', 'Egypt', 'Sudan', 'Turkey'],
      },
      {
        id: 'sea',
        icon: 'directions_boat',
        title: 'Sea freight',
        summary: 'Shipping to and from major global ports through an extensive network of shipping lines and international partners.',
        details: ['FCL — full container loads', 'LCL — shared containers', 'Special cargo & projects', 'Import & export solutions'],
      },
      {
        id: 'air',
        icon: 'flight',
        title: 'Air freight',
        summary: 'For time-sensitive cargo — a global network of airlines and accredited freight agents with tracking through to final delivery.',
        details: ['Express & certified shipping', 'Precise shipment tracking', 'Final-mile coordination'],
      },
      {
        id: 'customs',
        icon: 'gavel',
        title: 'Customs clearance',
        summary: 'Our specialist team ensures efficient customs procedures, reducing wait times and accelerating cross-border movement.',
        details: ['Import & export procedures', 'Cross-border coordination', 'Reduced operational delays'],
      },
      {
        id: 'logistics',
        icon: 'inventory_2',
        title: 'Logistics & supply chain',
        summary: 'Integrated solutions for shipment and project management, warehousing, and multimodal distribution.',
        details: ['Shipment & project management', 'Warehousing & distribution', 'Multimodal transport coordination', 'Solutions for companies & factories', 'Regional supply management'],
      },
    ],
    coverageSection: {
      eyebrow: 'Coverage',
      title: 'Our coverage',
      description: 'Through our regional presence and international relationships, we connect Gulf, Levant, Iraq, Egypt, Turkey, and global markets.',
      viewDetails: 'View details',
      routesLabel: 'active routes',
      operationalRoute: 'operational route',
    },
    regions: [
      { id: 'gcc', name: 'Gulf countries', routes: 48, status: 'Daily operations' },
      { id: 'levant', name: 'Levant', routes: 22, status: 'Regular operations' },
      { id: 'iraq_egypt', name: 'Iraq & Egypt', routes: 18, status: 'Regular operations' },
      { id: 'turkey_global', name: 'Turkey & global markets', routes: 34, status: 'International partners' },
    ],
    whySection: { eyebrow: 'Why Tarabih?', title: 'A trusted partner for your business', description: 'We combine regional expertise with an international network to deliver a seamless transport experience.' },
    whyUs: [
      { icon: 'hub', title: 'Strong regional network', text: 'Extensive operational relationships with transport and logistics partners across the region.' },
      { icon: 'verified', title: 'Reliability & commitment', text: 'Our clients\' success depends on on-time delivery and precision execution to the highest operational standards.' },
      { icon: 'tune', title: 'Tailored solutions', text: 'Flexible solutions designed specifically for your business, cargo, and target markets.' },
      { icon: 'public', title: 'Regional market expertise', text: 'Deep understanding of operational and customs systems across the Gulf, Iraq, and the Levant.' },
      { icon: 'support_agent', title: 'Continuous tracking', text: 'A dedicated team monitoring shipments and providing direct support at every stage.' },
    ],
    contactSection: {
      eyebrow: 'Contact us',
      title: 'Get in touch',
      description: 'Tell us about your shipping and transport needs — our team is ready to build the right solution for you.',
      locationLabel: 'Head office',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      nameLabel: 'Name',
      namePlaceholder: 'Full name',
      emailPlaceholder: 'name@company.com',
      serviceLabel: 'Service type',
      serviceOptions: ['Road freight', 'Sea freight', 'Air freight', 'Customs clearance', 'Supply chain'],
      messageLabel: 'Shipment details',
      messagePlaceholder: 'Destination, cargo type, approximate volume...',
      submit: 'Send request',
      location: 'United Arab Emirates',
      email: 'info@tarabih.ae',
      phone: '+971 XX XXX XXXX',
    },
    ui: { imageSoon: 'Image coming soon' },
    footer: {
      servicesTitle: 'Services',
      serviceLinks: ['Road freight', 'Sea & air freight', 'Customs clearance', 'Supply chain'],
      companyTitle: 'Company',
      companyLinks: { whyUs: 'Why Tarabih', coverage: 'Coverage network', contact: 'Contact us' },
      contactTitle: 'Contact',
      contactUs: 'Email us',
      rights: 'All rights reserved.',
    },
    coveragePage: {
      backHome: 'Back to home',
      eyebrow: 'Coverage network',
      title: 'Connecting you to regional and global markets',
      description: 'From the UAE we reach the Gulf, Levant, Iraq, Egypt, and Turkey — through trusted partners and proven operational routes.',
      regionsTitle: 'Regions',
      regionsHint: 'Select a region to view details',
      activeRoutes: 'active operational routes',
      availableServices: 'Available services',
      shipmentsTitle: 'Active shipment examples',
      shipmentsDescription: 'Sample routes we manage daily for our clients',
      shipments: [
        { id: 'TRB-2041', route: 'Dubai → Riyadh', type: 'FTL · containers', status: 'In transit', variant: 'info' },
        { id: 'TRB-1988', route: 'Dubai → Baghdad', type: 'LTL · general cargo', status: 'On time', variant: 'success' },
        { id: 'TRB-2103', route: 'Jebel Ali → Istanbul', type: 'FCL · sea', status: 'Customs clearance', variant: 'warning' },
        { id: 'TRB-1876', route: 'Dubai → Muscat', type: 'Vehicles', status: 'On time', variant: 'success' },
      ],
    },
    networkOverview: {
      title: 'Tarabih network overview',
      live: 'Active',
      subtitle: 'Regional coverage from the UAE across the Gulf, Levant, Iraq, Egypt, and Turkey',
      kpis: [
        { label: 'Countries covered', value: '12+', icon: 'public' },
        { label: 'Transport modes', value: '3', icon: 'local_shipping' },
        { label: 'Integrated services', value: '5', icon: 'inventory_2' },
        { label: 'Headquarters', value: 'UAE', icon: 'location_on' },
      ],
      regionsTitle: 'Key regions',
      corridorsTitle: 'Active road corridors',
      countriesTitle: 'Road freight countries',
      corridors: [
        { id: 'GCC', from: 'Dubai', to: 'Riyadh', load: 88, variant: 'success' },
        { id: 'LEV', from: 'Amman', to: 'Beirut', load: 72, variant: 'info' },
        { id: 'IRQ', from: 'Dubai', to: 'Baghdad', load: 81, variant: 'success' },
        { id: 'TR', from: 'Dubai', to: 'Istanbul', load: 65, variant: 'info' },
      ],
    },
    lang: { label: 'Language', ar: 'عربي', en: 'English' },
  },
}
