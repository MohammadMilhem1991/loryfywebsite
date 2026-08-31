/**
 * Loryfy - Bilingual Content Dictionary (English & Arabic)
 * Strictly strictly adhering to the official copy guidelines.
 */

import { FaqItem } from "../types";

export interface TranslationContent {
  brandName: string;
  tagline: string;
  nav: {
    home: string;
    discover: string;
    forOwners: string;
    howItWorks: string;
    about: string;
    faq: string;
    contact: string;
    downloadApp: string;
    switchLangLabel: string;
  };
  hero: {
    h1: string;
    h1Prefix: string;
    h1Gradient: string;
    secondaryMessage: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    floatingBadges: {
      runningBusinesses: string;
      startupIdeas: string;
      partnershipOpportunities: string;
      tradeLicenses: string;
    };
    highlights: {
      item1: string;
      item2: string;
      item3: string;
    };
  };
  categories: {
    sectionHeading: string;
    runningBusinesses: {
      title: string;
      description: string;
      cta: string;
    };
    startupIdeas: {
      title: string;
      description: string;
      cta: string;
    };
    tradeLicenses: {
      title: string;
      description: string;
      cta: string;
    };
  };
  userJourneys: {
    journeyA: {
      title: string;
      description: string;
      cta: string;
      badge: string;
      businessTypes?: string;
    };
    journeyB: {
      title: string;
      description: string;
      cta: string;
      badge: string;
    };
  };
  partnerTypes: {
    sectionHeading: string;
    introduction: string;
    professionalsWithCapital: {
      title: string;
      description: string;
    };
    experiencedExecutives: {
      title: string;
      description: string;
    };
    individualInvestors: {
      title: string;
      description: string;
    };
    companies: {
      title: string;
      description: string;
    };
    supportingMessage: string;
    cta: string;
  };
  registration: {
    heading: string;
    description: string;
    bullets: {
      simple: string;
      instant: string;
      noHassle: string;
    };
  };
  howItWorks: {
    heading: string;
    subheading: string;
    ownersFlowTitle: string;
    ownersFlowSummary: string;
    runningBusinessHeading: string;
    runningBusinessStep1: string;
    runningBusinessStep2: string;
    runningBusinessPartnerOption: string;
    runningBusinessSellOption: string;
    startupIdeaHeading: string;
    startupIdeaFlow: string;
    tradeLicenseHeading: string;
    tradeLicenseFlow: string;
    seekersHeading: string;
    seekersFlow: string;
    seekersDescription: string;
  };
  communication: {
    heading: string;
    description: string;
    badge: string;
  };
  appExperience: {
    heading: string;
    subheading: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  whyLoryfy: {
    heading: string;
    focusedDiscovery: {
      title: string;
      description: string;
    };
    directConnection: {
      title: string;
      description: string;
    };
    simpleExperience: {
      title: string;
      description: string;
    };
    uaeFocused: {
      title: string;
      description: string;
    };
  };
  whatIsLoryfy: {
    heading: string;
    description: string;
    badge: string;
  };
  faqs: FaqItem[];
  finalCta: {
    heading: string;
    subheading: string;
    button: string;
    appStoreBadge: string;
    googlePlayBadge: string;
  };
  footer: {
    description: string;
    linksTitle: string;
    categoriesTitle: string;
    legalTitle: string;
    contactTitle: string;
    home: string;
    discover: string;
    howItWorks: string;
    about: string;
    faq: string;
    contact: string;
    terms: string;
    privacy: string;
    findPartnerLink: string;
    runningBusinessesLink: string;
    startupOpportunitiesLink: string;
    partnershipOpportunitiesLink: string;
    tradeLicenseLink: string;
    disclaimer: string;
    copyright: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export const translations: Record<"en" | "ar", TranslationContent> = {
  en: {
    brandName: "Loryfy",
    tagline: "Discover running businesses, startup ideas & partnership opportunities",
    nav: {
      home: "Home",
      discover: "For Partners & Investors",
      forOwners: "For Owners & Founders",
      howItWorks: "How It Works",
      about: "About",
      faq: "FAQ",
      contact: "Contact Us",
      downloadApp: "Download App",
      switchLangLabel: "العربية",
    },
    hero: {
      h1: "Find the Right Partner, Buy or Sell a Business, and Invest in the UAE — All in One App",
      h1Prefix: "Find the Right Partner, Buy or Sell a Business, and Invest in the UAE — ",
      h1Gradient: "All in One App",
      secondaryMessage: "From a small local business to an established company — find the right partner or opportunity.",
      description:
        "Whatever you have — capital, experience, time, a running business, or an idea — Loryfy connects you with the right partners, investors, and buyers, and helps you discover opportunities to join, invest in, or buy across the UAE.",
      primaryCta: "Download Loryfy",
      secondaryCta: "See How It Works",
      floatingBadges: {
        runningBusinesses: "Running Businesses",
        startupIdeas: "Startup Ideas",
        partnershipOpportunities: "Partnership Opportunities",
        tradeLicenses: "Trade Licenses",
      },
      highlights: {
        item1: "List Your Business or Idea",
        item2: "Find the Right Partner or Investor",
        item3: "Explore Business & Startup Opportunities",
      },
    },
    categories: {
      sectionHeading: "Find the opportunity that fits you",
      runningBusinesses: {
        title: "Running Businesses",
        description:
          "Discover running and startup businesses in the UAE whose owners are looking for investors or partners who can contribute funding, management expertise, or active involvement in the business.",
        cta: "Explore Businesses",
      },
      startupIdeas: {
        title: "Startup Ideas",
        description:
          "Discover business and startup ideas intended to be launched or developed in the UAE, whose owners are looking for potential partners or investors.",
        cta: "Explore Ideas",
      },
      tradeLicenses: {
        title: "Trade Licenses",
        description: "Discover UAE trade licenses listed by owners looking to sell them.",
        cta: "Explore Opportunities",
      },
    },
    userJourneys: {
      journeyA: {
        title: "I Have a Business or Business Idea",
        description:
          "Have a running business, startup, or business idea and looking for the right partner or investor? Loryfy helps you connect with people who can contribute capital, expertise, or active involvement.",
        cta: "Find Partners & Investors",
        badge: "For Founders & Owners",
        businessTypes: "Company • Restaurant • Supermarket • Garage • Café • Salon • Retail Shop • Workshop • Other Running Businesses",
      },
      journeyB: {
        title: "I'm Looking for a Business Opportunity",
        description:
          "Looking for a running business, startup idea, trade license, or partnership opportunity? Explore opportunities and connect directly with their owners through Loryfy.",
        cta: "Start Exploring",
        badge: "For Partners & Investors",
      },
    },
    partnerTypes: {
      sectionHeading: "Who can you connect with on Loryfy?",
      introduction:
        "Partners come from all walks of life in the UAE — salaried employees, professionals, retirees, consultants and freelancers, individual investors, and companies looking for their next opportunity. Whatever you bring, there is a place for you here.",
      professionalsWithCapital: {
        title: "Employees & Professionals with Capital",
        description:
          "You have a salary and some savings but not the time to run something yourself. Loryfy lets you connect with business owners and founders seeking a funding partner — a way to put your money to work and build a second income alongside your job.",
      },
      experiencedExecutives: {
        title: "Experienced Professionals & Retirees",
        description:
          "You have years of management or industry experience and time on your hands. Connect with running businesses and startups that need a strategic or operating partner to help them grow.",
      },
      individualInvestors: {
        title: "Individual Investors",
        description:
          "You want your money in something real. Discover running businesses and startup ideas where you can invest directly and share in the growth.",
      },
      companies: {
        title: "Companies & Investment Firms",
        description:
          "Your company is looking to expand, enter a new segment, or back a promising venture. Connect with businesses and founders open to funding, strategic, or operating partnerships.",
      },
      supportingMessage:
        "Depending on the opportunity, a partner might contribute capital, experience, management, strategic value, hands-on involvement, time, or a mix of these. Loryfy is a place to connect and start the conversation — nothing more, nothing less.",
      cta: "Learn more about finding partners in the UAE",
    },
    registration: {
      heading: "Simple Registration",
      description:
        "Getting started with Loryfy is simple. Users only need their name and mobile number to create an account.",
      bullets: {
        simple: "No complicated forms or unnecessary steps",
        instant: "Instant verification via mobile number",
        noHassle: "Start creating or discovering opportunities in seconds",
      },
    },
    howItWorks: {
      heading: "From Discovery to Conversation",
      subheading: "A straightforward pathway whether you are listing an opportunity or seeking one.",
      ownersFlowTitle: "For Business & Idea Owners",
      ownersFlowSummary: "Create Listing → Select Category → Add Required Information → Publish",
      runningBusinessHeading: "How to Publish a Running Business",
      runningBusinessStep1: "Select Running Business",
      runningBusinessStep2: "Choose Objective (Find Partner/Investor or Sell Business)",
      runningBusinessPartnerOption:
        "Specify how many partners or investors you need, the partnership type, and key business details.",
      runningBusinessSellOption:
        "If you want to sell your running business, provide the required details such as the asking price, current status, office or premises, visas, and other relevant information.",
      startupIdeaHeading: "Startup Idea Listing",
      startupIdeaFlow:
        "Publish your startup idea and specify the type and number of partners or investors you are looking for, together with the relevant information and projections related to the idea.",
      tradeLicenseHeading: "Trade License Listing",
      tradeLicenseFlow:
        "List a trade license for sale by providing the required information such as asking price, current license status, visas, office or premises, and other relevant details.",
      seekersHeading: "Looking for a Partnership or Investment Opportunity?",
      seekersFlow:
        "Explore Running Businesses / Startup Ideas / Trade Licenses → Filter Based on Your Interests → Open Listing → Chat with Owner",
      seekersDescription:
        "Explore running businesses, startup ideas, and trade licenses. Use filters to narrow opportunities based on your interests, open the listings that interest you, and start a conversation with their owners.",
    },
    communication: {
      heading: "Direct, Instant Communication",
      description:
        "When you find an opportunity that interests you, open the listing and tap Chat to start a conversation directly with the business or listing owner through the Loryfy app. Both parties may also choose to exchange contact details and continue communicating outside the app.",
      badge: "In-App Chat",
    },
    appExperience: {
      heading: "Business opportunities in your pocket",
      subheading:
        "Designed to give founders, partners, and investors an intuitive, high-speed mobile interface.",
      feature1Title: "Filtered Search",
      feature1Desc: "Quickly filter by category, partnership type, and location.",
      feature2Title: "Rich Profiles",
      feature2Desc: "Review comprehensive business information and partnership requirements.",
      feature3Title: "Direct Connection",
      feature3Desc: "Initiate direct chats with verified listing owners with one tap.",
    },
    whyLoryfy: {
      heading: "Built for meaningful business connections",
      focusedDiscovery: {
        title: "Focused Discovery",
        description:
          "A platform focused on running businesses, business ideas, and partnership opportunities.",
      },
      directConnection: {
        title: "Direct Connection",
        description:
          "Move from discovering an opportunity to starting a conversation with its owner through Loryfy.",
      },
      simpleExperience: {
        title: "Simple Experience",
        description:
          "Designed to make discovering and connecting around business opportunities straightforward and easy.",
      },
      uaeFocused: {
        title: "UAE & Beyond",
        description:
          "Loryfy targets UAE business opportunities. Businesses and licenses must be UAE-based; startup ideas from anywhere must target the UAE. Global exploration is open to all.",
      },
    },
    whatIsLoryfy: {
      heading: "What is Loryfy?",
      description:
        "Loryfy is a mobile platform that helps users discover running businesses, startup ideas, partnership opportunities, and trade licenses. It also helps owners of running businesses, startup founders, and people with business ideas connect with potential funding, strategic, and operating partners as well as investors.",
      badge: "Platform Overview",
    },
    faqs: [
      {
        id: "faq-1",
        question: "What is Loryfy?",
        answer:
          "Loryfy is a mobile platform that helps users discover running businesses, startup ideas, partnership opportunities, and trade licenses across the UAE. It also helps business and startup owners and people with business ideas connect with potential partners, investors, and buyers.",
      },
      {
        id: "faq-2",
        question: "What do I need to register on Loryfy?",
        answer:
          "You only need your name and mobile number to create an account and start using Loryfy.",
      },
      {
        id: "faq-3",
        question: "How can I find a partner for my business?",
        answer:
          "Post your business or business idea on Loryfy and specify the type and number of partners or investors you are looking for. Interested users can discover your listing and contact you directly through the in-app chat.",
      },
      {
        id: "faq-4",
        question: "What types of partners can I look for?",
        answer:
          "You can look for Funding, Strategic, or Operating Partners depending on your needs. This may include individuals with capital, experienced professionals, investors, or companies interested in participating in a business.",
      },
      {
        id: "faq-5",
        question: "How do I list a running business on Loryfy?",
        answer:
          "Select Running Business when creating your listing, choose whether you are looking for partners or selling the business, complete the required information, and publish your listing. Running businesses listed on Loryfy must operate in the UAE.",
      },
      {
        id: "faq-6",
        question: "Can I post a startup idea?",
        answer:
          "Yes. You can post a startup or business idea intended for the UAE market and look for partners or investors who can contribute capital, experience, management, or operational support.",
      },
      {
        id: "faq-7",
        question: "Can I list a trade license for sale?",
        answer:
          "Yes. UAE-issued trade licenses can be listed for sale with relevant information such as the issuing authority, activities, asking price, visa allocations, and premises details where applicable.",
      },
      {
        id: "faq-8",
        question: "How can I find opportunities that match my interests?",
        answer:
          "Explore Running Businesses, Startup Ideas, and Trade Licenses and use the available search and filtering options to narrow the results based on what you are looking for.",
      },
      {
        id: "faq-9",
        question: "How do I contact a business or listing owner?",
        answer:
          "Open an opportunity that interests you and tap Chat to start a direct conversation through the Loryfy app. Both parties may also choose to exchange contact details and continue communicating outside the app.",
      },
      {
        id: "faq-10",
        question: "Can I use Loryfy if I am outside the UAE?",
        answer:
          "Yes. Users outside the UAE can register and explore opportunities in the UAE. They may also post business or startup ideas intended for the UAE market. Running Business and Trade License listings must relate to businesses or licenses in the UAE.",
      },
      {
        id: "faq-11",
        question: "Who can list on Loryfy?",
        answer:
          "A listing can be created by the Owner, Authorized Partner, Consultant, or Broker. When creating the listing, select the option that best describes your relationship to the business.",
      },
      {
        id: "faq-12",
        question: "Does Loryfy require personal or business documents?",
        answer:
          "Loryfy allows you to optionally add documents such as a personal ID or company financial documents. These documents are not required, but adding relevant documents can help increase trust in your listing and give interested users more confidence when reviewing the opportunity.",
      },
      {
        id: "faq-13",
        question: "Is Loryfy free to use?",
        answer:
          "Registration and exploring opportunities on Loryfy are free. During Loryfy’s launch period, listing a running business, startup idea, or trade license is also free. Loryfy offers flexible, competitively priced listing options suitable for different users and business types, including time-based and Pay per Chat packages.",
      },
      {
        id: "faq-14",
        question: "What are the different listing options on Loryfy?",
        answer:
          "Loryfy offers two main listing options:\n\nFixed Fee: Pay a fixed amount to keep your listing active for a selected period, such as 1 month or 3 months.\n\nPay per Chat: Pay based on the number of chats started by interested users. Each new chat started by an interested user counts as one paid chat.\n\nYou can choose the option that best suits your business and expected level of interest.",
      },
      {
        id: "faq-15",
        question: "Does Loryfy guarantee profits, revenue, or expected returns shown in listings?",
        answer:
          "No. Financial information is provided by the listing owner and does not represent a guarantee by Loryfy of any future result or return.",
      },
      {
        id: "faq-16",
        question: "Is Loryfy responsible for the accuracy of information provided in listings?",
        answer:
          "No. Listing information is provided by the listing owner. Users are responsible for independently verifying the information and carrying out appropriate due diligence before entering into any agreement, partnership, investment, or payment.",
      },
    ],
    finalCta: {
      heading: "Your Next Opportunity Starts Here",
      subheading: "Connect with businesses, ideas, and partners on Loryfy.",
      button: "Download Loryfy",
      appStoreBadge: "Download on the App Store",
      googlePlayBadge: "Get it on Google Play",
    },
    footer: {
      description: "Connecting people around businesses, ideas, and partnership opportunities.",
      linksTitle: "Navigation",
      categoriesTitle: "Opportunities",
      legalTitle: "Legal",
      contactTitle: "Contact Us",
      home: "Home",
      discover: "Discover",
      howItWorks: "How It Works",
      about: "About Loryfy",
      faq: "FAQ",
      contact: "Contact",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      findPartnerLink: "Find a Business Partner",
      runningBusinessesLink: "Running Businesses",
      startupOpportunitiesLink: "Startup Opportunities",
      partnershipOpportunitiesLink: "Business Partnership Opportunities",
      tradeLicenseLink: "Trade License Opportunities",
      disclaimer:
        "Loryfy facilitates the discovery of and connection around business opportunities. Information in individual listings is provided by their respective users. Users should independently verify all information and conduct appropriate due diligence before entering into any business, partnership, investment, or financial commitment.",
      copyright: `© ${new Date().getFullYear()} Loryfy Portal. All rights reserved.`,
    },
    notFound: {
      title: "Looks like this opportunity moved.",
      subtitle: "Let's help you discover another one.",
      cta: "Explore Loryfy",
    },
  },
  ar: {
    brandName: "لوريفاي",
    tagline: "اكتشف مشاريع قائمة وأفكار مشاريع وفرص شراكة",
    nav: {
      home: "الرئيسية",
      discover: "للشركاء والمستثمرين",
      forOwners: "لأصحاب المشاريع والأفكار",
      howItWorks: "كيف يعمل لوريفاي",
      about: "عن لوريفاي",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      downloadApp: "حمّل التطبيق",
      switchLangLabel: "EN",
    },
    hero: {
      h1: "اعثر على الشريك المناسب، بِع أو اشترِ مشروعاً، واستثمر في الإمارات — كل ذلك في تطبيق واحد",
      h1Prefix: "اعثر على الشريك المناسب، بِع أو اشترِ مشروعاً، واستثمر في الإمارات — ",
      h1Gradient: "كل ذلك في تطبيق واحد",
      secondaryMessage: "من المشروع المحلي الصغير إلى الشركة الكبيرة — اعثر على الشريك أو الفرصة المناسبة.",
      description:
        "مهما كان ما تملكه — رأس مال أو خبرة أو وقت أو مشروع قائم أو فكرة — يربطك لوريفاي بالشركاء والمستثمرين والمشترين المناسبين، ويساعدك على اكتشاف فرص للانضمام إليها أو الاستثمار فيها أو شرائها في مختلف أنحاء الإمارات.",
      primaryCta: "حمّل لوريفاي",
      secondaryCta: "تعرّف على طريقة عمل لوريفاي",
      floatingBadges: {
        runningBusinesses: "مشاريع قائمة",
        startupIdeas: "أفكار مشاريع",
        partnershipOpportunities: "فرص شراكة",
        tradeLicenses: "رخص تجارية",
      },
      highlights: {
        item1: "اعرض مشروعك أو فكرتك",
        item2: "ابحث عن الشريك أو المستثمر المناسب",
        item3: "اكتشف المشاريع وأفكار المشاريع",
      },
    },
    categories: {
      sectionHeading: "اكتشف الفرصة المناسبة لك",
      runningBusinesses: {
        title: "مشاريع قائمة",
        description:
          "اكتشف مشاريع قائمة وناشئة في الإمارات يطرحها أصحابها الباحثون عن شركاء أو مستثمرين، سواء للمساهمة بالتمويل أو الخبرة الإدارية أو المشاركة الفعلية في المشروع.",
        cta: "اكتشف المشاريع",
      },
      startupIdeas: {
        title: "أفكار مشاريع",
        description:
          "اكتشف أفكار مشاريع وأعمال تهدف إلى الإطلاق أو التطوير في الإمارات، ويبحث أصحابها عن شركاء أو مستثمرين محتملين.",
        cta: "اكتشف الأفكار",
      },
      tradeLicenses: {
        title: "رخص تجارية",
        description: "اكتشف الرخص التجارية الصادرة في الإمارات والتي يعرضها أصحابها للبيع عبر لوريفاي.",
        cta: "اكتشف الفرص",
      },
    },
    userJourneys: {
      journeyA: {
        title: "لدي مشروع أو فكرة مشروع",
        description:
          "لديك مشروع قائم أو ناشئ أو فكرة مشروع وتبحث عن الشريك أو المستثمر المناسب؟ يساعدك لوريفاي على التواصل مع أشخاص يمكنهم المساهمة برأس المال أو الخبرة أو المشاركة الفعلية في المشروع.",
        cta: "ابحث عن شركاء ومستثمرين",
        badge: "لأصحاب المشاريع والأفكار",
        businessTypes: "شركة • مطعم • سوبرماركت • كراج • مقهى • صالون • متجر • ورشة • مشاريع قائمة أخرى",
      },
      journeyB: {
        title: "أبحث عن فرصة تجارية",
        description:
          "تبحث عن مشروع قائم أو فكرة مشروع أو رخصة تجارية أو فرصة شراكة؟ اكتشف الفرص وتواصل مباشرة مع أصحابها عبر لوريفاي.",
        cta: "ابدأ الاكتشاف",
        badge: "للشركاء والمستثمرين",
      },
    },
    partnerTypes: {
      sectionHeading: "مع من يمكنك التواصل عبر لوريفاي؟",
      introduction:
        "الشركاء في الإمارات من خلفيات متنوعة — موظفون ومهنيون ومتقاعدون ومستشارون ومستقلون ومستثمرون أفراد وشركات تبحث عن فرصتها التالية. مهما كان ما تقدّمه، فلك مكان هنا.",
      professionalsWithCapital: {
        title: "الموظفون والمهنيون أصحاب رأس المال",
        description:
          "لديك راتب ومدّخرات، لكن لا تملك الوقت لإدارة مشروع بنفسك. يتيح لك لوريفاي التواصل مع أصحاب المشاريع الباحثين عن شريك مموّل — وسيلة لتشغيل أموالك وبناء دخل إضافي إلى جانب وظيفتك.",
      },
      experiencedExecutives: {
        title: "أصحاب الخبرة والمتقاعدون",
        description:
          "تملك سنوات من الخبرة الإدارية أو المهنية ولديك وقت. تواصل مع مشاريع قائمة وشركات ناشئة تحتاج إلى شريك استراتيجي أو تشغيلي يساعدها على النمو.",
      },
      individualInvestors: {
        title: "المستثمرون الأفراد",
        description:
          "ترغب في استثمار أموالك في مشروع حقيقي. اكتشف مشاريع قائمة وأفكاراً ناشئة يمكنك الاستثمار فيها مباشرة والمشاركة في نموّها.",
      },
      companies: {
        title: "الشركات والمؤسسات الاستثمارية",
        description:
          "شركتك تسعى للتوسّع أو دخول قطاع جديد أو دعم مشروع واعد. تواصل مع مشاريع وأصحاب أفكار منفتحين على شراكات تمويلية أو استراتيجية أو تشغيلية.",
      },
      supportingMessage:
        "بحسب طبيعة الفرصة، قد يساهم الشريك برأس المال أو الخبرة أو الإدارة أو القيمة الاستراتيجية أو المشاركة الفعلية أو الوقت، أو بمزيج منها. لوريفاي مكان للتواصل وبدء الحديث — لا أكثر ولا أقل.",
      cta: "اعرف المزيد عن العثور على شركاء في الإمارات",
    },
    registration: {
      heading: "تسجيل بسيط",
      description:
        "التسجيل في لوريفاي بسيط، ويحتاج المستخدم فقط إلى الاسم ورقم الهاتف لإنشاء الحساب.",
      bullets: {
        simple: "بدون نماذج معقدة أو خطوات غير ضرورية",
        instant: "تحقق فوري عبر رقم الهاتف المحمول",
        noHassle: "ابدأ بنشر أو استكشاف الفرص في ثوانٍ معدودة",
      },
    },
    howItWorks: {
      heading: "من اكتشاف الفرصة إلى بدء التواصل",
      subheading: "مسار واضح وسلس سواء كنت تعرض فرصة أو تبحث عن واحدة.",
      ownersFlowTitle: "لأصحاب المشاريع والأفكار والرخص",
      ownersFlowSummary: "أنشئ إعلانًا ← اختر الفئة ← أدخل المعلومات المطلوبة ← انشر",
      runningBusinessHeading: "كيف تنشر مشروعًا قائمًا",
      runningBusinessStep1: "اختر مشروع قائم",
      runningBusinessStep2:
        "حدد الهدف (البحث عن شريك/مستثمر أو بيع المشروع)",
      runningBusinessPartnerOption:
        "حدد عدد الشركاء أو المستثمرين المطلوبين، ونوع الشراكة، وأهم معلومات مشروعك.",
      runningBusinessSellOption:
        "إذا كنت ترغب في بيع مشروعك القائم، أدخل المعلومات المطلوبة مثل سعر البيع ووضع المشروع الحالي والمكتب أو المقر والتأشيرات وغيرها من التفاصيل ذات الصلة.",
      startupIdeaHeading: "نشر فكرة مشروع ناشئ",
      startupIdeaFlow:
        "انشر فكرة مشروعك وحدد عدد ونوع الشركاء أو المستثمرين الذين تبحث عنهم، وأضف المعلومات والتوقعات المتعلقة بالفكرة.",
      tradeLicenseHeading: "عرض رخصة تجارية للبيع",
      tradeLicenseFlow:
        "اعرض رخصة تجارية للبيع وأدخل المعلومات المطلوبة مثل السعر ووضع الرخصة الحالي والتأشيرات والمكتب أو المقر وغيرها من التفاصيل ذات الصلة.",
      seekersHeading: "تبحث عن فرصة شراكة أو استثمار؟",
      seekersFlow:
        "استكشف المشاريع القائمة / أفكار المشاريع / الرخص التجارية ← صفِّ النتائج حسب اهتماماتك ← افتح الإعلان ← تواصل مع صاحبه",
      seekersDescription:
        "استكشف المشاريع القائمة وأفكار المشاريع والرخص التجارية، واستخدم خيارات التصفية للوصول إلى الفرص التي تناسب اهتماماتك، ثم افتح الإعلان وابدأ التواصل مع صاحبه.",
    },
    communication: {
      heading: "تواصل مباشر ومريح",
      description:
        "عندما تجد فرصة تهمك، افتح الإعلان واضغط على المحادثة لبدء التواصل مباشرة مع صاحب المشروع أو الإعلان عبر تطبيق لوريفاي. ويمكن للطرفين تبادل معلومات التواصل والاتفاق على مواصلة التواصل خارج التطبيق إذا رغبا في ذلك.",
      badge: "محادثة مدمجة",
    },
    appExperience: {
      heading: "فرص الأعمال بين يديك",
      subheading: "واجهة تطبيق صُممت لتوفر تجربة سريعة وبديهية للمؤسسين والمستثمرين.",
      feature1Title: "تصفية ذكية",
      feature1Desc: "فلترة سريعة حسب الفئة ونوع الشراكة والموقع.",
      feature2Title: "معلومات تفصيلية",
      feature2Desc: "استعراض تفاصيل واضحة عن المشروع ومتطلبات الشراكة.",
      feature3Title: "تواصل مباشر",
      feature3Desc: "بدء محادثة فورية مع صاحب الإعلان بضغطة زر.",
    },
    whyLoryfy: {
      heading: "مصمم لتسهيل الوصول إلى فرص وشراكات الأعمال",
      focusedDiscovery: {
        title: "اكتشاف مركّز",
        description: "منصة تركز على المشاريع القائمة وأفكار المشاريع وفرص الشراكة.",
      },
      directConnection: {
        title: "تواصل مباشر",
        description: "انتقل من اكتشاف الفرصة إلى بدء التواصل مع صاحبها عبر لوريفاي.",
      },
      simpleExperience: {
        title: "تجربة بسيطة",
        description: "تجربة مصممة لتجعل اكتشاف الفرص والتواصل بشأنها أكثر سهولة ووضوحًا.",
      },
      uaeFocused: {
        title: "تركيز على الإمارات وما حولها",
        description:
          "يركز لوريفاي على فرص الأعمال بالإمارات. يجب أن تكون المشاريع والرخص محلية، بينما يمكن نشر أفكار مشاريع تستهدف الدولة من أي مكان. الاستكشاف متاح للجميع عالمياً.",
      },
    },
    whatIsLoryfy: {
      heading: "ما هي لوريفاي؟",
      description:
        "لوريفاي منصة عبر تطبيق الهاتف تساعد المستخدمين على اكتشاف المشاريع القائمة وأفكار المشاريع وفرص الشراكة والرخص التجارية، وتسهّل التواصل بين أصحاب المشاريع والأفكار وبين الشركاء والمستثمرين المحتملين.",
      badge: "نظرة عامة على المنصة",
    },
    faqs: [
      {
        id: "faq-1",
        question: "ما هي لوريفاي (Loryfy)؟",
        answer:
          "لوريفاي هي منصة عبر تطبيق الهاتف تساعد المستخدمين على اكتشاف المشاريع القائمة، وأفكار المشاريع الناشئة، وفرص الشراكة، والرخص التجارية في الإمارات. كما تساعد أصحاب المشاريع والمشاريع الناشئة وأصحاب الأفكار التجارية على التواصل مع شركاء ومستثمرين ومشترين محتملين.",
      },
      {
        id: "faq-2",
        question: "ماذا أحتاج للتسجيل في لوريفاي؟",
        answer:
          "تحتاج فقط إلى اسمك ورقم هاتفك لإنشاء حساب والبدء باستخدام لوريفاي.",
      },
      {
        id: "faq-3",
        question: "كيف يمكنني العثور على شريك لمشروعي؟",
        answer:
          "انشر مشروعك أو فكرتك التجارية على لوريفاي، وحدد نوع وعدد الشركاء أو المستثمرين الذين تبحث عنهم. يمكن للمستخدمين المهتمين اكتشاف إعلانك والتواصل معك مباشرة من خلال الدردشة داخل التطبيق.",
      },
      {
        id: "faq-4",
        question: "ما أنواع الشركاء الذين يمكنني البحث عنهم؟",
        answer:
          "يمكنك البحث عن شركاء تمويليين أو استراتيجيين أو تشغيليين حسب احتياجاتك. وقد يشمل ذلك أفرادًا لديهم رأس مال، أو مهنيين ذوي خبرة، أو مستثمرين، أو شركات مهتمة بالمشاركة في مشروع.",
      },
      {
        id: "faq-5",
        question: "كيف يمكنني إدراج مشروع قائم على لوريفاي؟",
        answer:
          "اختر مشروع قائم عند إنشاء الإعلان، ثم حدد ما إذا كنت تبحث عن شركاء أو ترغب في بيع المشروع، وأكمل المعلومات المطلوبة وانشر الإعلان. يجب أن تكون المشاريع القائمة المدرجة على لوريفاي عاملة في الإمارات.",
      },
      {
        id: "faq-6",
        question: "هل يمكنني نشر فكرة مشروع ناشئ؟",
        answer:
          "نعم. يمكنك نشر فكرة مشروع ناشئ أو فكرة تجارية مخصصة للسوق الإماراتي والبحث عن شركاء أو مستثمرين يمكنهم المساهمة برأس المال أو الخبرة أو الإدارة أو الدعم التشغيلي.",
      },
      {
        id: "faq-7",
        question: "هل يمكنني عرض رخصة تجارية للبيع؟",
        answer:
          "نعم. يمكن عرض الرخص التجارية الصادرة في الإمارات للبيع، مع إضافة المعلومات ذات الصلة مثل الجهة المصدرة، والأنشطة، والسعر المطلوب، وعدد التأشيرات، وتفاصيل المقر عند انطباق ذلك.",
      },
      {
        id: "faq-8",
        question: "كيف يمكنني العثور على فرص تناسب اهتماماتي؟",
        answer:
          "يمكنك تصفح المشاريع القائمة، وأفكار المشاريع الناشئة، والرخص التجارية، واستخدام خيارات البحث والتصفية المتاحة للوصول إلى النتائج التي تناسب ما تبحث عنه.",
      },
      {
        id: "faq-9",
        question: "كيف أتواصل مع صاحب المشروع أو الإعلان؟",
        answer:
          "افتح الفرصة التي تهمك واضغط على الدردشة لبدء محادثة مباشرة من خلال تطبيق لوريفاي. ويمكن للطرفين أيضًا اختيار تبادل معلومات الاتصال ومواصلة التواصل خارج التطبيق.",
      },
      {
        id: "faq-10",
        question: "هل يمكنني استخدام لوريفاي إذا كنت خارج الإمارات؟",
        answer:
          "نعم. يمكن للمستخدمين من خارج الإمارات التسجيل واستكشاف الفرص المتاحة في الإمارات. كما يمكنهم نشر أفكار تجارية أو أفكار مشاريع ناشئة مخصصة للسوق الإماراتي. أما إعلانات المشاريع القائمة والرخص التجارية فيجب أن تكون مرتبطة بمشاريع أو رخص داخل الإمارات.",
      },
      {
        id: "faq-11",
        question: "من يمكنه نشر إعلان على لوريفاي؟",
        answer:
          "يمكن إنشاء الإعلان من قبل المالك، أو الشريك المفوض، أو المستشار، أو الوسيط. عند إنشاء الإعلان، اختر الخيار الذي يوضح بشكل أفضل علاقتك بالمشروع.",
      },
      {
        id: "faq-12",
        question: "هل تطلب لوريفاي مستندات شخصية أو مستندات خاصة بالمشروع؟",
        answer:
          "تتيح لك لوريفاي إضافة مستندات بشكل اختياري، مثل مستند إثبات الهوية أو المستندات المالية الخاصة بالشركة. هذه المستندات ليست إلزامية، ولكن إضافة المستندات ذات الصلة قد تساعد في تعزيز الثقة بالإعلان ومنح المستخدمين المهتمين ثقة أكبر عند تقييم الفرصة.",
      },
      {
        id: "faq-13",
        question: "هل استخدام لوريفاي مجاني؟",
        answer:
          "التسجيل واستكشاف الفرص على لوريفاي مجانيان. وخلال فترة إطلاق لوريفاي، سيكون نشر إعلان لمشروع قائم أو فكرة مشروع ناشئ أو رخصة تجارية مجانيًا أيضًا. وتوفر لوريفاي خيارات إعلانات مرنة وبأسعار تنافسية تناسب مختلف المستخدمين وأنواع المشاريع، بما في ذلك الباقات المحددة بمدة وباقات الدفع حسب المحادثة (Pay per Chat).",
      },
      {
        id: "faq-14",
        question: "ما هي باقات وخيارات نشر الإعلانات المتاحة على لوريفاي؟",
        answer:
          "توفر لوريفاي خيارين رئيسيين للإعلانات:\n\nرسوم ثابتة: تدفع مبلغًا ثابتًا لإبقاء إعلانك فعالًا لمدة محددة، مثل شهر واحد أو ثلاثة أشهر.\n\nالدفع حسب المحادثة (Pay per Chat): تدفع بناءً على عدد المحادثات التي يبدأها المستخدمون المهتمون. وتُحتسب كل محادثة جديدة يبدأها مستخدم مهتم كمحادثة مدفوعة واحدة.\n\nيمكنك اختيار الخيار الأنسب لمشروعك ومستوى الاهتمام المتوقع.",
      },
      {
        id: "faq-15",
        question: "هل تضمن لوريفاي الأرباح أو الإيرادات أو العوائد المتوقعة المعروضة في الإعلانات؟",
        answer:
          "لا. يتم تقديم المعلومات المالية من قبل صاحب الإعلان، ولا تمثل ضمانًا من لوريفاي لأي نتائج أو عوائد مستقبلية.",
      },
      {
        id: "faq-16",
        question: "هل لوريفاي مسؤولة عن دقة المعلومات الواردة في الإعلانات؟",
        answer:
          "لا. يتم تقديم معلومات الإعلان من قبل صاحب الإعلان. ويتحمل المستخدم مسؤولية التحقق بشكل مستقل من المعلومات وإجراء العناية الواجبة المناسبة قبل الدخول في أي اتفاق أو شراكة أو استثمار أو إجراء أي دفعة.",
      },
    ],
    finalCta: {
      heading: "فرصتك القادمة تبدأ بمحادثة",
      subheading: "تواصل مع أصحاب المشاريع والأفكار عبر لوريفاي.",
      button: "حمّل لوريفاي",
      appStoreBadge: "حمّل من App Store",
      googlePlayBadge: "احصل عليه من Google Play",
    },
    footer: {
      description: "نربط الأشخاص حول المشاريع والأفكار وفرص الشراكة.",
      linksTitle: "روابط سريعة",
      categoriesTitle: "الفرص",
      legalTitle: "قانوني",
      contactTitle: "اتصل بنا",
      home: "الرئيسية",
      discover: "اكتشف",
      howItWorks: "كيف يعمل",
      about: "عن لوريفاي",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      findPartnerLink: "اعثر على شريك لمشروعك",
      runningBusinessesLink: "مشاريع قائمة",
      startupOpportunitiesLink: "أفكار ومشاريع ناشئة",
      partnershipOpportunitiesLink: "فرص شراكة تجارية",
      tradeLicenseLink: "فرص الرخص التجارية",
      disclaimer:
        "تسهّل لوريفاي اكتشاف فرص الأعمال والتواصل بشأنها. المعلومات الواردة في كل إعلان يقدمها المستخدم صاحب الإعلان، وعلى المستخدمين التحقق من المعلومات بشكل مستقل وإجراء التحقق اللازم قبل الدخول في أي اتفاق تجاري أو شراكة أو استثمار أو التزام مالي.",
      copyright: `© ${new Date().getFullYear()} بوابة لوريفاي. جميع الحقوق محفوظة.`,
    },
    notFound: {
      title: "يبدو أن هذه الفرصة لم تعد هنا.",
      subtitle: "اكتشف فرصًا أخرى عبر لوريفاي.",
      cta: "اكتشف لوريفاي",
    },
  },
};
