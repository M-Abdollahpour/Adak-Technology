import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fa: {
      translation: {
        menu: {
          home: "خانه",
          services: "خدمات",
          articles: "مقالات",
          solutions: "راهکارها",
          equipment: "تجهیزات",
          projects: "پروژه‌ها",
          aboutUs: "درباره ما",
          contactUs: "تماس با ما",
          requestConsultation: "درخواست مشاوره",
          fa: "FA",
          en: "EN",
        },
        banner: {
          title: "فناوری باید کسب‌وکار شما را پیش ببرد، نه متوقف کند.",
          titleLineOne: "زیرساختی که",
          titleLineTwo: "پایدار می‌ماند",
          paragraph:
            "از معماری شبکه و مرکز داده تا امنیت و پشتیبانی؛ آداک زیرساخت فناوری اطلاعات سازمان شما را یکپارچه طراحی، دقیق اجرا و مستمر پشتیبانی می‌کند.",
          requestConsultation: "درخواست مشاوره تخصصی",
          viewSolutions: "مشاهده راهکارها",
          projects: "پروژه",
          designAndImplementation: "طراحی و اجرا",
          countOne: "۱۲۰",
          organizations: "سازمان",
          withAdak: "همراه آداک",
          countTwo: "۸۰",
          support: "پشتیبانی",
          monitoringAndResponse: "پایش و پاسخ‌گویی",
          countThree: "۲۴/۷",
        },
        partnership: {
          title: "همکاری با آداک",
          process: "مسیر همکاری را از همین‌جا شروع کنید",
          newProject: "پروژه جدید",
          newProjectDescription:
            "برای طراحی، اجرا یا بازطراحی زیرساخت و امنیت سازمان، نیازتان را با ما مطرح کنید.",
          equipmentSupply: "تأمین تجهیزات",
          equipmentSupplyDescription:
            "سرور، شبکه، امنیت و تجهیزات دیتاسنتر را متناسب با نیاز واقعی پروژه انتخاب کنید.",
          corporatePartnership: "همکاری سازمانی",
          corporatePartnershipDescription:
            "برای قراردادهای پشتیبانی، همکاری B2B و پروژه‌های بلندمدت سازمانی با ما در ارتباط باشید.",
        },
        step: {
          title: "فرآیند گام‌به‌گام",
          process: "فرآیند اجرای گام‌به‌گام پروژه",
          needsAssessment: "شناخت نیازمندی‌ها",
          needsAssessmentDescription:
            "بررسی اهداف سازمان، چالش‌های زیرساختی و تعیین بودجه",
          siteSurvey: "بازدید و کارشناسی",
          siteSurveyDescription: "ممیزی میدانی، آزمایش خطوط و ارزیابی بار شبکه",
          solutionDesign: "طراحی راهکار",
          solutionDesignDescription:
            "ارائه‌ی نقشه‌ی فنی، معماری تجهیزات و صورت‌حساب شفاف",
          implementation: "اجرا و پیکربندی",
          implementationDescription:
            "کابل‌کشی، آرایش رک، نصب و پیکربندی فایروال و سرور",
          testingAndHandover: "آزمایش و تحویل",
          testingAndHandoverDescription:
            "آزمایش فشار، تحویل نقشه‌ی As-Built و فایل‌های پیکربندی",
          support: "پشتیبانی و SLA",
          supportDescription: "پایش مستمر Uptime و رفع اشکال بر اساس SLA",
          numOne: "۱",
          numTwo: "۲",
          numThree: "۳",
          numFour: "۴",
          numFive: "۵",
          numSix: "۶",
        },
        services: {
          title: "خدمات آداک",
          process: "تخصص در سه بعد فناوری",
          viewServicesPage: "مشاهده صفحه خدمات",
          network: {
            title: "شبکه و زیرساخت",
            description: "طراحی، پیاده‌سازی و بهینه‌سازی زیرساخت شبکه",
            data: {
              dataCenter: "مرکزداده",
              virtualization: "مجازی‌سازی",
              support: "پشتیبانی",
            },
          },

          security: {
            title: "امنیت",
            description: "تامین امنیت زیرساخت داده‌های سازمان شما",
            data: {
              networkSecurity: "امنیت شبکه",
              incidentMonitoring: "پایش رخداد",
              vulnerabilityAssessment: "ارزیابی آسیب‌پذیری",
            },
          },

          software: {
            title: "نرم‌افزار و سامانه",
            description:
              "ارائه راهکارهای نرم‌افزاری سفارشی و سامانه‌های سازمانی",
            data: {
              customDevelopment: "توسعه اختصاصی",
              integration: "یکپارچه‌سازی",
              enterpriseSystems: "سامانه های سازمانی",
            },
          },
        },
        project: {
          title: "پروژه‌ها",
          process: "پروژه‌های شاخص آداک",
          showMore: "نمایش بیشتر",

          wirelessNetwork: {
            title: "شبکه و زیرساخت",
            header: "تجهیز شبکه بی‌سیم درمانگاه ولی‌عصر",
            description:
              "پوشش کامل بی‌سیم در ساختمان‌های درمانگاهی با مدیریت متمرکز دسترسی.",
            customer: "مجتمع متمرکز ولی‌عصر",
            year: "۱۴۰۱",
          },

          dataCenterNetwork: {
            title: "شبکه و زیرساخت",
            header: "شبکه مرکز داده شهرداری پردیس",
            description:
              "طراحی مجدد معماری شبکه و افزایش پایداری سرویس‌های حیاتی سازمان",
            customer: "شهرداری پردیس",
            year: "۱۴۰۳",
          },

          voip: {
            title: "ویپ",
            header: "پیاده‌سازی مرکز تماس سازمانی",
            description:
              "استقرار راهکار تماس یکپاره میان ستاد و شعب با مدیریت گزارش‌ها",
            customer: "حمل و نقل جاده ابریشم",
            year: "۱۴۰۲",
          },
        },
        whyAdak: {
          title: "چرا آداک؟",
          support: {
            title: "پشتیبانی حرفه‌ای",
            description: "و پاسخگویی سریع",
          },
          team: {
            title: "تیم متخصص",
            description: "و با تجریه",
          },
          innovation: {
            title: "راهکارهای نوآورانه",
            description: "و به‌روز",
          },
          quality: {
            title: "تعهد به کیفیت",
            description: "و رضایت مشتری",
          },
          pricing: {
            title: "قیمت‌گذاری شفاف",
            description: "و منصفانه",
          },
        },
        news: {
          title: "آخرین اخبار و مقالات",
          showMore: "نمایش بیشتر",
          item: {
            title: "مجازی سازی زیرساخت IT:",
            description: "افزایش بهره‌وری و کاهش هزینه‌ها",
          },
        },
        trustCompanies: {
          title: "همکاری",
          process: "سازمانی‌هایی که به آداک اعتماد کرده‌اند",
        },
        consultation: {
          title: "برای دریافت مشاوره تخصصی با ما در ارتباط باشید",
          paragraph: "تیم تخصصی آداک آماده پاسخگویی به نیازهای شماست",
          request: "درخواست مشاوره",
        },
        footer: {
          about: {
            title: "آداک فناوری داده پردازان",
            tagline: "همراه شما در مسیر تحول دیجیتال",
          },
          quickAccess: {
            title: "دسترسی سریع",
            home: "خانه",
            services: "خدمات",
            aboutUs: "درباره ما",
            contactUs: "تماس با ما",
          },
          contactUs: {
            title: "تماس با ما",
            tel: "021-91592045",
            email: "info@adakfan.ir",
            address: "تهران، تهرانپارس، بزرگراه زین الدین، خیابان مظفری",
          },
          copyright:
            "تمامی حقوق مادی و معنوی این وب سایت متعلق به آداک فناوری می‌باشد.",
        },
      },
    },
    en: {
      translation: {
        menu: {
          home: "Home",
          services: "Services",
          articles: "Articles",
          solutions: "Solutions",
          equipment: "Equipment",
          projects: "Projects",
          aboutUs: "About us",
          contactUs: "contact us",
          requestConsultation: "Request a Consultation",
          fa: "FA",
          en: "EN",
        },
        banner: {
          title:
            "Technology should move your business forward, not hold it back.",
          titleLineOne: "Infrastructure that",
          titleLineTwo: "stands the test of time",
          paragraph:
            "From network and data center architecture to security and support, ADAK designs, implements, and continuously supports your organization’s IT infrastructure as one integrated system.",
          requestConsultation: "Request an Expert Consultation",
          viewSolutions: "Explore Our Solutions",
          projects: "Projects",
          countOne: "120",
          designAndImplementation: "Design & Implementation",
          organizations: "Organizations",
          withAdak: "With ADAK",
          countTwo: "80",
          support: "Support",
          monitoringAndResponse: "Monitoring & Response",
          countThree: "24/7",
        },
        partnership: {
          title: "Partner with ADAK",
          process: "Start your partnership journey here",
          newProject: "New Project",
          newProjectDescription:
            "Tell us what you need for the design, implementation, or redesign of your organization's infrastructure and security.",
          equipmentSupply: "Equipment Procurement",
          equipmentSupplyDescription:
            "Choose servers, networking, security, and data center equipment to match your project's actual needs.",
          corporatePartnership: "Corporate Partnership",
          corporatePartnershipDescription:
            "Contact us about support contracts, B2B collaboration, and long-term enterprise projects.",
        },
        step: {
          title: "Step-by-Step Process",
          process: "Step-by-Step Project Implementation Process",
          needsAssessment: "Requirements Assessment",
          needsAssessmentDescription:
            "Reviewing organizational goals and infrastructure challenges, and defining the budget",
          siteSurvey: "Site Survey",
          siteSurveyDescription:
            "On-site audit, line testing, and network load assessment",
          solutionDesign: "Solution Design",
          solutionDesignDescription:
            "Delivering technical plans, equipment architecture, and a transparent cost estimate",
          implementation: "Implementation & Configuration",
          implementationDescription:
            "Cabling, rack organization, and firewall and server installation and configuration",
          testingAndHandover: "Testing & Handover",
          testingAndHandoverDescription:
            "Stress testing and delivery of as-built drawings and configuration files",
          support: "Support & SLA",
          supportDescription:
            "Continuous uptime monitoring and troubleshooting in accordance with the SLA",
          numOne: "1",
          numTwo: "2",
          numThree: "3",
          numFour: "4",
          numFive: "5",
          numSix: "6",
        },
        services: {
          title: "ADAK Services",
          process: "Expertise Across Three Areas of Technology",
          viewServicesPage: "View Services",

          network: {
            title: "Network & Infrastructure",
            description:
              "Design, implementation, and optimization of network infrastructure",
            data: {
              dataCenter: "Data Center",
              virtualization: "Virtualization",
              support: "Support",
            },
          },

          security: {
            title: "Security",
            description: "Securing your organization's data infrastructure",
            data: {
              networkSecurity: "Network Security",
              incidentMonitoring: "Incident Monitoring",
              vulnerabilityAssessment: "Vulnerability Assessment",
            },
          },

          software: {
            title: "Software & Systems",
            description: "Tailored software solutions and enterprise systems",
            data: {
              customDevelopment: "Custom Development",
              integration: "Integration",
              enterpriseSystems: "Enterprise Systems",
            },
          },
        },
        project: {
          title: "Projects",
          process: "ADAK's Featured Projects",
          showMore: "Show more",

          wirelessNetwork: {
            title: "Network & Infrastructure",
            header: "Wireless Network Deployment at Vali-Asr Clinic",
            description:
              "Complete wireless coverage across the clinic buildings with centralized access management.",
            customer: "Vali-Asr Central Complex",
            year: "1401",
          },

          dataCenterNetwork: {
            title: "Network & Infrastructure",
            header: "Data Center Network for Pardis Municipality",
            description:
              "Redesigning the network architecture and improving the reliability of the organization's critical services.",
            customer: "Pardis Municipality",
            year: "1403",
          },

          voip: {
            title: "VoIP",
            header: "Enterprise Contact Center Implementation",
            description:
              "Deploying a unified calling solution across headquarters and branches, with report management.",
            customer: "Silk Road Transportation",
            year: "1402",
          },
        },
        whyAdak: {
          title: "Why ADAK?",
          support: {
            title: "Professional Support",
            description: "and rapid response",
          },
          team: {
            title: "Expert Team",
            description: "and experienced",
          },
          innovation: {
            title: "Innovative Solutions",
            description: "and up to date",
          },
          quality: {
            title: "Commitment to Quality",
            description: "and customer satisfaction",
          },
          pricing: {
            title: "Transparent Pricing",
            description: "and fairness",
          },
        },
        news: {
          title: "Latest News and Articles",
          showMore: "Show more",
          item: {
            title: "IT Infrastructure Virtualization:",
            description: "Increasing productivity and reducing costs",
          },
        },
        consultation: {
          title: "Get in touch with us for expert consultation",
          paragraph:
            "The ADAK team of specialists is ready to address your needs",
          request: "Request a Consultation",
        },
        footer: {
          about: {
            title: "ADAK Data Processing Technology",
            tagline: "With you on the path to digital transformation",
          },
          quickAccess: {
            title: "Quick Links",
            home: "Home",
            services: "Services",
            aboutUs: "About Us",
            contactUs: "Contact Us",
          },
          contactUs: {
            title: "Contact Us",
            tel: "021-91592045",
            email: "info@adakfan.ir",
            address: "Tehran, Tehranpars, Zain al-Din Highway, Mozafari Street",
          },
          copyright:
            "All material and intellectual property rights to this website belong to ADAK Technology.",
        },
      },
    },
  },
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
