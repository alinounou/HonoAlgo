// Translation strings for HonoAlgo
export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      features: 'المميزات',
      comparison: 'المقارنة',
      testimonials: 'آراء العملاء',
      pricing: 'الأسعار',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
    },
    
    // Hero Section
    hero: {
      badge: 'أداة التداول الأكثر دقة',
      title: 'HonoAlgo',
      subtitle: 'خوارزمية تداول احترافية بدقة 98.5%',
      description: 'احصل على إشارات تداول دقيقة وموثوقة مبنية على تحليل فني متقدم. أكثر من 10,000 متداول يثقون بنا.',
      freeCta: 'احصل على النسخة المجانية',
      proCta: 'احصل على النسخة الاحترافية - $12.50',
      limitedOffer: 'عرض محدود: خصم 50% لفترة قصيرة',
      countdown: 'ينتهي العرض خلال',
      days: 'يوم',
      hours: 'ساعة',
      minutes: 'دقيقة',
      seconds: 'ثانية',
      trustedBy: 'موثوق من قبل أكثر من',
      traders: 'متداول',
    },
    
    // Features Section
    features: {
      title: 'لماذا تختار HonoAlgo؟',
      subtitle: 'مميزات تجعلنا الخيار الأمثل للمتداولين المحترفين',
      items: [
        {
          title: 'دقة عالية 98.5%',
          description: 'خوارزمية متطورة تم اختبارها على أكثر من 1000 صفقة ذهب مع نتائج مثبتة.',
        },
        {
          title: 'إشارات فورية',
          description: 'احصل على تنبيهات فورية لحظة اكتشاف فرص التداول المربحة.',
        },
        {
          title: 'سهولة الاستخدام',
          description: 'واجهة بسيطة وسهلة لا تتطلب خبرة تقنية سابقة.',
        },
        {
          title: 'دعم متعدد المنصات',
          description: 'يعمل على TradingView و MetaTrader 4/5 و منصات أخرى.',
        },
        {
          title: 'تحديثات مستمرة',
          description: 'تحديثات مجانية مدى الحياة لتحسين الأداء وإضافة ميزات جديدة.',
        },
        {
          title: 'دعم فني 24/7',
          description: 'فريق دعم متخصص جاهز لمساعدتك في أي وقت.',
        },
      ],
    },
    
    // Comparison Section
    comparison: {
      title: 'مقارنة شاملة',
      subtitle: 'كيف يقارن HonoAlgo بالبدائل الأخرى؟',
      features: 'المميزات',
      honoalgo: 'HonoAlgo',
      tradingview: 'TradingView المدمج',
      springbox: 'Springbox',
      rows: [
        { feature: 'دقة الإشارات', honoalgo: '98.5%', tradingview: '75%', springbox: '82%' },
        { feature: 'السرعة', honoalgo: 'فوري', tradingview: 'متأخر', springbox: 'متأخر' },
        { feature: 'سهولة التثبيت', honoalgo: 'سهل جداً', tradingview: 'معقد', springbox: 'معقد' },
        { feature: 'الدعم الفني', honoalgo: '24/7', tradingview: 'محدود', springbox: 'بريد' },
        { feature: 'التحديثات', honoalgo: 'مجانية', tradingview: 'مدفوعة', springbox: 'مدفوعة' },
        { feature: 'السعر', honoalgo: '$12.50', tradingview: '$14.95/شهر', springbox: '$29/شهر' },
      ],
      bestChoice: 'الخيار الأفضل',
    },
    
    // Testimonials Section
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'آراء حقيقية من متداولين حققوا نتائج مذهلة',
      reviews: [
        {
          name: 'أحمد محمد',
          role: 'متداول محترف',
          content: 'كنت خاسراً في التداول لسنوات. مع HonoAlgo، حققت أرباحاً في أول أسبوع! الأداة سهلة الاستخدام والإشارات دقيقة جداً.',
          rating: 5,
          date: '2024-01-15',
        },
        {
          name: 'سارة العلي',
          role: 'مستثمرة',
          content: 'أفضل استثمار قمت به هذا العام. الدقة مذهلة والدعم الفني ممتاز. أنصح بها كل من يريد تحسين نتائج تداوله.',
          rating: 5,
          date: '2024-01-20',
        },
        {
          name: 'خالد السعيد',
          role: 'متداول جزئي',
          content: 'كنت متشككاً في البداية، لكن بعد تجربة النسخة المجانية، اشتريت Pro فوراً. النتائج تتحدث عن نفسها!',
          rating: 5,
          date: '2024-02-01',
        },
        {
          name: 'فاطمة الزهراء',
          role: 'مبتدئة في التداول',
          content: 'رغم أنني مبتدئة، استطعت تحقيق أرباح من أول يوم. الواجهة بسيطة والتعليمات واضحة. شكراً HonoAlgo!',
          rating: 5,
          date: '2024-02-10',
        },
        {
          name: 'محمد عبدالله',
          role: 'محلل مالي',
          content: 'بصفتي محلل مالي، أستطيع القول أن هذه الخوارزمية متطورة جداً. الدقة والسرعة مذهلان.',
          rating: 5,
          date: '2024-02-15',
        },
      ],
      verified: 'تم التحقق من المراجعة',
      onTrustpilot: 'على Trustpilot',
    },
    
    // Pricing Section
    pricing: {
      title: 'خطط الأسعار',
      subtitle: 'اختر الخطة المناسبة لاحتياجاتك',
      free: {
        name: 'مجاني',
        price: '0',
        period: 'للأبد',
        description: 'للمبتدئين والمتعلمين',
        features: [
          '5 إشارات يومياً',
          'الأصول الأساسية',
          'دعم البريد الإلكتروني',
          'تحديثات محدودة',
        ],
        cta: 'ابدأ مجاناً',
        popular: false,
      },
      pro: {
        name: 'احترافي',
        price: '12.50',
        period: 'دفعة واحدة',
        description: 'للمتداولين الجادين',
        features: [
          'إشارات غير محدودة',
          'جميع الأصول',
          'دعم 24/7',
          'تحديثات مجانية مدى الحياة',
          'إعدادات متقدمة',
          'تنبيهات فورية',
          'تقارير أداء',
        ],
        cta: 'احصل على Pro الآن',
        popular: true,
      },
      orderBump: {
        title: 'عرض خاص!',
        description: 'أضف InfinityRSI V6.2',
        price: '$12.50',
        savings: 'وفر 50%',
        features: [
          'مؤشر RSI متقدم',
          'إشارات divergence',
          'مناطق تشبع الشراء/البيع',
        ],
        addBtn: 'أضف للطلب',
        noThanks: 'لا شكراً، أريد Pro فقط',
      },
      moneyBack: 'ضمان استرداد الأموال خلال 30 يوم',
    },
    
    // FAQ Section
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'إجابات على أكثر الأسئلة شيوعاً',
      items: [
        {
          question: 'لماذا تبلغ دقة HonoAlgo 98.5%؟',
          answer: 'تم اختبار خوارزميتنا على أكثر من 1000 صفقة ذهب على مدار 3 سنوات، مع نتائج مثبتة وموثقة. نستخدم تقنيات تعلم آلي متقدمة لتحليل الأنماط والتوجهات.',
        },
        {
          question: 'كيف يعمل الـ Backtesting؟',
          answer: 'يمكنك اختبار الاستراتيجية على بيانات تاريخية قبل التداول الفعلي. يتيح لك هذا رؤية كيف كان أداء الخوارزمية في الماضي وتحسين إعداداتك.',
        },
        {
          question: 'ما هي الأسواق المدعومة؟',
          answer: 'ندعم الفوركس، الأسهم، العملات الرقمية، السلع، والمؤشرات. الخوارزمية تعمل على جميع الأدوات المالية المتاحة على TradingView.',
        },
        {
          question: 'ما الفرق بين النسخة المجانية والاحترافية؟',
          answer: 'النسخة المجانية تعطيك 5 إشارات يومياً على الأصول الأساسية. النسخة الاحترافية توفر إشارات غير محدودة، جميع الأصول، دعم 24/7، وميزات متقدمة.',
        },
        {
          question: 'كيف أثبت الأداة؟',
          answer: 'بعد الشراء، ستحصل على رابط تحميل ودليل تثبيت مفصل. العملية بسيطة وتستغرق أقل من 5 دقائق. كما نوفر فيديوهات تعليمية.',
        },
        {
          question: 'ما هي خيارات الدعم المتاحة؟',
          answer: 'نوفر دعماً عبر البريد الإلكتروني للنسخة المجانية، ودعماً 24/7 عبر الدردشة المباشرة والهاتف لعملاء Pro. فريقنا متخصص وجاهز للمساعدة.',
        },
        {
          question: 'هل هناك سياسة استرداد الأموال؟',
          answer: 'نعم! نوفر ضمان استرداد الأموال خلال 30 يوماً. إذا لم تكن راضياً، تواصل معنا وسنرد لك المبلغ كاملاً.',
        },
        {
          question: 'ما مدى تكرار التحديثات؟',
          answer: 'نصدر تحديثات شهرية لتحسين الأداء وإضافة ميزات جديدة. جميع التحديثات مجانية لعملاء Pro مدى الحياة.',
        },
        {
          question: 'ما هي المنصات المتوافقة؟',
          answer: 'HonoAlgo يعمل على TradingView، MetaTrader 4/5، cTrader، و NinjaTrader. التكامل سهل وسلس مع جميع المنصات.',
        },
        {
          question: 'كيف أبدأ؟',
          answer: 'اختر خطتك، أكمل عملية الدفع الآمنة، وستحصل على تعليمات التثبيت فوراً. يمكنك البدء في التداول خلال دقائق!',
        },
      ],
    },
    
    // Contact Section
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك. راسلنا وسنرد عليك في أقرب وقت.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      success: 'تم إرسال رسالتك بنجاح!',
      error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
      placeholder: {
        name: 'أدخل اسمك الكامل',
        email: 'أدخل بريدك الإلكتروني',
        subject: 'موضوع رسالتك',
        message: 'اكتب رسالتك هنا...',
      },
    },
    
    // Footer
    footer: {
      copyright: '© 2024 HonoAlgo. جميع الحقوق محفوظة.',
      madeWith: 'صنع بـ ❤️ للمتداولين',
      links: {
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الاستخدام',
        refund: 'سياسة الاسترداد',
      },
    },
    
    // Common
    common: {
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      success: 'تم بنجاح',
      try: 'جرب مجاناً',
      buy: 'اشترِ الآن',
      learnMore: 'اعرف المزيد',
      close: 'إغلاق',
      save: 'حفظ',
      cancel: 'إلغاء',
    },
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      features: 'Features',
      comparison: 'Comparison',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      badge: 'The Most Accurate Trading Tool',
      title: 'HonoAlgo',
      subtitle: 'Professional Trading Algorithm with 98.5% Accuracy',
      description: 'Get precise and reliable trading signals based on advanced technical analysis. Trusted by over 10,000 traders worldwide.',
      freeCta: 'Get Free Version',
      proCta: 'Get Pro Version - $12.50',
      limitedOffer: 'Limited Offer: 50% Discount for a Short Time',
      countdown: 'Offer ends in',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      trustedBy: 'Trusted by over',
      traders: 'traders',
    },
    
    // Features Section
    features: {
      title: 'Why Choose HonoAlgo?',
      subtitle: 'Features that make us the best choice for professional traders',
      items: [
        {
          title: '98.5% High Accuracy',
          description: 'Advanced algorithm tested on over 1000 gold trades with proven results.',
        },
        {
          title: 'Instant Signals',
          description: 'Get instant alerts the moment profitable trading opportunities are detected.',
        },
        {
          title: 'Easy to Use',
          description: 'Simple and intuitive interface that requires no prior technical experience.',
        },
        {
          title: 'Multi-Platform Support',
          description: 'Works on TradingView, MetaTrader 4/5, and other platforms.',
        },
        {
          title: 'Continuous Updates',
          description: 'Lifetime free updates to improve performance and add new features.',
        },
        {
          title: '24/7 Support',
          description: 'Specialized support team ready to help you anytime.',
        },
      ],
    },
    
    // Comparison Section
    comparison: {
      title: 'Comprehensive Comparison',
      subtitle: 'How does HonoAlgo compare to alternatives?',
      features: 'Features',
      honoalgo: 'HonoAlgo',
      tradingview: 'TradingView Built-in',
      springbox: 'Springbox',
      rows: [
        { feature: 'Signal Accuracy', honoalgo: '98.5%', tradingview: '75%', springbox: '82%' },
        { feature: 'Speed', honoalgo: 'Instant', tradingview: 'Delayed', springbox: 'Delayed' },
        { feature: 'Installation Ease', honoalgo: 'Very Easy', tradingview: 'Complex', springbox: 'Complex' },
        { feature: 'Technical Support', honoalgo: '24/7', tradingview: 'Limited', springbox: 'Email Only' },
        { feature: 'Updates', honoalgo: 'Free', tradingview: 'Paid', springbox: 'Paid' },
        { feature: 'Price', honoalgo: '$12.50', tradingview: '$14.95/mo', springbox: '$29/mo' },
      ],
      bestChoice: 'Best Choice',
    },
    
    // Testimonials Section
    testimonials: {
      title: 'What Our Customers Say',
      subtitle: 'Real reviews from traders who achieved amazing results',
      reviews: [
        {
          name: 'John Smith',
          role: 'Professional Trader',
          content: 'I was losing money trading for years. With HonoAlgo, I made profits in my first week! The tool is easy to use and the signals are incredibly accurate.',
          rating: 5,
          date: '2024-01-15',
        },
        {
          name: 'Sarah Johnson',
          role: 'Investor',
          content: 'Best investment I made this year. The accuracy is amazing and support is excellent. I recommend it to anyone looking to improve their trading results.',
          rating: 5,
          date: '2024-01-20',
        },
        {
          name: 'Michael Chen',
          role: 'Part-time Trader',
          content: 'I was skeptical at first, but after trying the free version, I bought Pro immediately. The results speak for themselves!',
          rating: 5,
          date: '2024-02-01',
        },
        {
          name: 'Emma Williams',
          role: 'Trading Beginner',
          content: 'Despite being a beginner, I was able to make profits from day one. The interface is simple and instructions are clear. Thanks HonoAlgo!',
          rating: 5,
          date: '2024-02-10',
        },
        {
          name: 'David Brown',
          role: 'Financial Analyst',
          content: 'As a financial analyst, I can say this algorithm is very advanced. The accuracy and speed are impressive.',
          rating: 5,
          date: '2024-02-15',
        },
      ],
      verified: 'Verified Review',
      onTrustpilot: 'on Trustpilot',
    },
    
    // Pricing Section
    pricing: {
      title: 'Pricing Plans',
      subtitle: 'Choose the plan that fits your needs',
      free: {
        name: 'Free',
        price: '0',
        period: 'Forever',
        description: 'For beginners and learners',
        features: [
          '5 daily signals',
          'Basic assets',
          'Email support',
          'Limited updates',
        ],
        cta: 'Start Free',
        popular: false,
      },
      pro: {
        name: 'Pro',
        price: '12.50',
        period: 'One-time',
        description: 'For serious traders',
        features: [
          'Unlimited signals',
          'All assets',
          '24/7 support',
          'Lifetime free updates',
          'Advanced settings',
          'Instant alerts',
          'Performance reports',
        ],
        cta: 'Get Pro Now',
        popular: true,
      },
      orderBump: {
        title: 'Special Offer!',
        description: 'Add InfinityRSI V6.2',
        price: '$12.50',
        savings: 'Save 50%',
        features: [
          'Advanced RSI indicator',
          'Divergence signals',
          'Overbought/Oversold zones',
        ],
        addBtn: 'Add to Order',
        noThanks: 'No thanks, I want Pro only',
      },
      moneyBack: '30-day money-back guarantee',
    },
    
    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions',
      items: [
        {
          question: 'Why is HonoAlgo 98.5% accurate?',
          answer: 'Our algorithm has been tested on over 1000 gold trades over 3 years, with documented and verified results. We use advanced machine learning techniques to analyze patterns and trends.',
        },
        {
          question: 'How does Backtesting work?',
          answer: 'You can test the strategy on historical data before live trading. This allows you to see how the algorithm would have performed in the past and optimize your settings.',
        },
        {
          question: 'What markets are supported?',
          answer: 'We support Forex, Stocks, Cryptocurrencies, Commodities, and Indices. The algorithm works on all financial instruments available on TradingView.',
        },
        {
          question: 'What\'s the difference between Free and Pro?',
          answer: 'The free version gives you 5 daily signals on basic assets. The Pro version provides unlimited signals, all assets, 24/7 support, and advanced features.',
        },
        {
          question: 'How do I install the tool?',
          answer: 'After purchase, you\'ll receive a download link and detailed installation guide. The process is simple and takes less than 5 minutes. We also provide tutorial videos.',
        },
        {
          question: 'What support options are available?',
          answer: 'We provide email support for free users, and 24/7 live chat and phone support for Pro customers. Our team is specialized and ready to help.',
        },
        {
          question: 'Is there a refund policy?',
          answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied, contact us and we\'ll refund you in full.',
        },
        {
          question: 'How often are updates released?',
          answer: 'We release monthly updates to improve performance and add new features. All updates are free for Pro customers for life.',
        },
        {
          question: 'What platforms are compatible?',
          answer: 'HonoAlgo works on TradingView, MetaTrader 4/5, cTrader, and NinjaTrader. Integration is easy and seamless with all platforms.',
        },
        {
          question: 'How do I get started?',
          answer: 'Choose your plan, complete the secure payment process, and you\'ll receive installation instructions immediately. You can start trading within minutes!',
        },
      ],
    },
    
    // Contact Section
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help. Send us a message and we\'ll respond as soon as possible.',
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Your message has been sent successfully!',
      error: 'An error occurred. Please try again.',
      placeholder: {
        name: 'Enter your full name',
        email: 'Enter your email address',
        subject: 'Subject of your message',
        message: 'Write your message here...',
      },
    },
    
    // Footer
    footer: {
      copyright: '© 2024 HonoAlgo. All rights reserved.',
      madeWith: 'Made with ❤️ for traders',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        refund: 'Refund Policy',
      },
    },
    
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success',
      try: 'Try Free',
      buy: 'Buy Now',
      learnMore: 'Learn More',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
    },
  },
};

export const getTranslation = (lang: Language) => {
  return translations[lang];
};

export const isRTL = (lang: Language) => {
  return lang === 'ar';
};
