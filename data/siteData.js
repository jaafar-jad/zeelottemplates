/**
 * ZEELOT INNOVATION LIMITED - Master Site Data Store
 * Structured database for all templates (Z1, Z2, Z3)
 * Document Reference: Strategic Innovation & Business Expansion Opportunities (August 18, 2026)
 * Presented by: Praise Bassey, Business Development Department
 */

const siteData = {
  company: {
    name: "ZEELOT INNOVATION LIMITED",
    shortName: "ZEELOT",
    legalName: "Zeelot Innovation Limited",
    tagline: "Intersection of Robotics, Digital Solutions & Emerging Innovations",
    foundedDate: "18 August, 2026",
    documentDate: "18 August, 2026",
    presentedBy: "Praise Bassey",
    department: "Business Development Department",
    headquarters: "Victoria Island, Lagos & Central Business District, Abuja, Nigeria",
    contactEmail: "info@zeelotinnovation.com",
    supportEmail: "support@zeelotinnovation.com",
    phone: "+234 (0) 803 000 ZEELOT / +234 812 345 6789",
    overview: "Zeelot Innovation Limited presents a generational opportunity to build a technology-driven company positioned at the intersection of robotics, digital solutions, technology products, and emerging innovations for the Nigerian and wider African market.",
    mission: "To pioneer intelligent robotics, distributed smart gadgets, and mission-critical software solutions that empower African industries, institutions, and individuals to automate, optimize, and leapfrog into the future.",
    vision: "To become Africa's premier technology and robotics conglomerate—transitioning from high-value tech distribution and custom digital infrastructure to homegrown robotics manufacturing and autonomous intelligent systems.",
    corePhilosophy: "Robotics represents our primary long-term innovation focus. Software solutions and technology products serve as practical entry points and complementary revenue streams, establishing strong market presence and client relationships while systematically building our robotics engineering capabilities."
  },

  themeColors: {
    primaryRed: "#E51920",
    darkRed: "#B30F15",
    accentRed: "#FF333A",
    deepBlack: "#0B0C10",
    carbonBlack: "#14161D",
    cardDark: "#1B1E28",
    pureWhite: "#FFFFFF",
    offWhite: "#F8F9FA",
    textMuted: "#8E9AA8",
    borderDark: "rgba(255, 255, 255, 0.08)"
  },

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Pillars", href: "#pillars" },
    { label: "Robotics", href: "#robotics" },
    { label: "Software", href: "#software" },
    { label: "Gadgets", href: "#gadgets" },
    { label: "Team", href: "#team" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" }
  ],

  mediaImages: {
    heroIndustrial: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=85",
    heroRoboticsLab: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=85",
    heroMeeting: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85",
    aboutRoboticsArm: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
    aboutSoftwareWorkspace: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",
    whyChooseUs: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1000&q=85"
  },

  stats: [
    { value: "3", label: "Strategic Pillars", suffix: "", detail: "Robotics, Gadgets & Digital Solutions" },
    { value: "100", label: "Commitment to Innovation", suffix: "%", detail: "Long-term African Robotics Vision" },
    { value: "12", label: "Target Enterprise Sectors", suffix: "+", detail: "Industries, Schools, Gov & SMEs" },
    { value: "2026", label: "Strategic Roadmap Horizon", suffix: "", detail: "Scalable Phased Expansion" }
  ],

  strategicPillars: [
    {
      id: "robotics",
      number: "01",
      title: "Robotics & Intelligent Technology",
      tagline: "Primary Long-Term Innovation Focus",
      summary: "Zeelot introduces, deploys, integrates, and eventually develops robotics solutions for the Nigerian and wider African market.",
      badge: "Flagship Core Focus",
      icon: "robot",
      gradient: "linear-gradient(135deg, #E51920 0%, #750005 100%)",
      areas: [
        {
          name: "Industrial Automation",
          desc: "Robotic arms, automated conveyor systems, intelligent sorting, and packaging automation for modern manufacturing plants."
        },
        {
          name: "Security & Surveillance Robotics",
          desc: "Autonomous ground rovers, AI-enabled aerial drones, boundary patrol robots, and remote thermal surveillance units."
        },
        {
          name: "Service Robots",
          desc: "Hospitality assistance robots, hospital disinfection units, customer concierge bots, and corporate facility guides."
        },
        {
          name: "AI-Powered Devices",
          desc: "Edge-AI visual recognition cameras, predictive maintenance sensors, and automated robotic control units."
        },
        {
          name: "Smart-Home Automation",
          desc: "Intelligent lighting systems, automated access control, motorized energy management, and smart consumer robotics."
        },
        {
          name: "Robotic Training Programmes",
          desc: "STEM robotics academies, vocational university labs, industrial engineer re-skilling, and youth innovation bootcamps."
        }
      ],
      prospectiveClients: [
        "Industrial Organisations (Automation & intelligent machinery)",
        "Government & Institutions (Technology-driven public-sector solutions)",
        "Commercial Businesses (Security & operational efficiency)",
        "Individuals (Smart-home & consumer robotics)"
      ]
    },
    {
      id: "gadgets",
      number: "02",
      title: "Gadgets & Smart Devices",
      tagline: "Practical Entry Point & High-Volume Cashflow",
      summary: "Direct sale, wholesale distribution, corporate procurement, and technical support of cutting-edge smart devices and computing hardware.",
      badge: "High Liquidity Distribution",
      icon: "devices",
      gradient: "linear-gradient(135deg, #1F2430 0%, #0F1218 100%)",
      potentialProducts: [
        { name: "Smart Devices & Wearables", desc: "Wearable health monitors, smart voice terminals, and connected accessories." },
        { name: "Smart-Home Ecosystems", desc: "IoT locks, environmental sensors, automated switches, and intelligent voice displays." },
        { name: "Enterprise Laptops & Workstations", desc: "High-performance computing systems tailored for engineering, enterprise, and corporate fleets." },
        { name: "Executive & Industrial Cell Phones", desc: "Ruggedized communications gear, commercial tablets, and smart smartphones." },
        { name: "Technology Accessories & Peripherals", desc: "Power solutions, high-speed connectivity gear, docking stations, and enterprise peripherals." }
      ],
      revenuePipeline: [
        { step: "01", name: "Product Sales", desc: "Direct-to-consumer and retail sales channels" },
        { step: "02", name: "Regional Distribution", desc: "Wholesale supply across Nigerian commercial centers" },
        { step: "03", name: "Corporate Supply", desc: "Customized IT infrastructure fleets for businesses" },
        { step: "04", name: "Government Procurement", desc: "Institutional tenders, school labs, and ministry fleets" },
        { step: "05", name: "Installation & Support", desc: "On-site setup, preventive maintenance, and SLA support" }
      ]
    },
    {
      id: "software",
      number: "03",
      title: "Software & Digital Solutions",
      tagline: "Scalable Enterprise Value & High Margins",
      summary: "Rendering custom digital solutions to help African organisations solve operational bottlenecks, monetize services, and achieve digital autonomy.",
      badge: "Scalable Digital Ecosystem",
      icon: "code",
      gradient: "linear-gradient(135deg, #B30F15 0%, #1A1D24 100%)",
      potentialServices: [
        { name: "Custom Software Development", desc: "Tailored engineering solving proprietary business challenges with modern microservices." },
        { name: "Web Applications & Portals", desc: "Responsive, high-uptime web applications with interactive dashboards and APIs." },
        { name: "Mobile Applications (iOS/Android)", desc: "Intuitive customer-facing and field-agent apps with offline-first synchronization." },
        { name: "Business Management (ERP)", desc: "Comprehensive enterprise resource planning unifying operations, payroll, and assets." },
        { name: "Customer Management (CRM)", desc: "Lead tracking, pipeline intelligence, automated communication, and omnichannel support." },
        { name: "Inventory & Warehouse Solutions", desc: "Real-time stock tracking, barcode/RFID scanning, and automated reorder alerts." },
        { name: "School Management Systems", desc: "Student enrollment, grading portals, fee automation, and parent-teacher communication." },
        { name: "Booking & Reservation Platforms", desc: "Automated booking engines for hotels, fleets, clinics, and event venues." },
        { name: "E-Commerce Solutions", desc: "Secure multi-vendor marketplaces, local payment gateway integrations, and fulfillment tracking." }
      ],
      prospectiveClients: [
        "SMEs seeking rapid operational digital transformation",
        "Schools, Colleges & Universities upgrading administrative workflows",
        "Hotels & Hospitality Providers automating guest reservations",
        "Government Ministries, Departments & Agencies (MDAs)",
        "Corporate Conglomerates modernizing legacy systems",
        "Emerging Startups requiring rapid MVP & scalable architecture",
        "Professional Service Providers (Law, Accounting, Healthcare)"
      ]
    }
  ],

  projectsShowcase: [
    {
      id: "proj-1",
      title: "Automated Industrial Robotic Sorter",
      category: "Robotics & Automation",
      clientType: "Industrial Manufacturing",
      desc: "High-speed computer-vision robotic arm deployed for 99.8% precision sorting on packaging lines.",
      imageKeyword: "robotic-arm",
      imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=85",
      tags: ["Robotics", "Industrial", "Computer Vision"]
    },
    {
      id: "proj-2",
      title: "Zeelot Perimeter Sentinel Drone",
      category: "Robotics & Security",
      clientType: "Government & Institutions",
      desc: "Autonomous night-vision surveillance drone with automated thermal docking station.",
      imageKeyword: "surveillance-drone",
      imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=85",
      tags: ["Surveillance", "AI", "Autonomous"]
    },
    {
      id: "proj-3",
      title: "OmniTrack Enterprise ERP & Inventory",
      category: "Software Solutions",
      clientType: "Corporate & FMCG",
      desc: "Unified cloud ERP coordinating multi-warehouse inventory across 14 commercial depots.",
      imageKeyword: "cloud-erp",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      tags: ["Software", "ERP", "Inventory"]
    },
    {
      id: "proj-4",
      title: "Smart Campus Academic Ecosystem",
      category: "Software Solutions",
      clientType: "Educational Institutions",
      desc: "Integrated student information system, grade processing, and smart gate access control.",
      imageKeyword: "campus-software",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85",
      tags: ["EdTech", "Portals", "Automated"]
    },
    {
      id: "proj-5",
      title: "Zeelot SmartHome Automation Hub",
      category: "Gadgets & Smart Devices",
      clientType: "Individuals & Real Estate",
      desc: "Z-Wave and Zigbee centralized touch panel controlling biometric locks, lights, and AC units.",
      imageKeyword: "smarthome-hub",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=85",
      tags: ["IoT", "Smart Devices", "Energy"]
    },
    {
      id: "proj-6",
      title: "RoboSTEM Youth Innovation Kit",
      category: "Robotic Training",
      clientType: "Schools & STEM Centers",
      desc: "Modular robotics kit equipped with microcontrollers, ultrasonic sensors, and block-coding curriculum.",
      imageKeyword: "stem-robotics",
      imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85",
      tags: ["Training", "Robotics", "STEM"]
    }
  ],

  leadership: [
    {
      name: "Praise Bassey",
      role: "Lead, Business Development",
      department: "Business Development Department",
      bio: "Driving the strategic commercial expansion, partnership frameworks, and market entry for Zeelot Innovation Limited across West Africa.",
      photo: "praise-bassey",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
      badge: "Author of Expansion Strategy"
    },
    {
      name: "Dr. Arinze Okonjo",
      role: "Chief Robotics & Automation Architect",
      department: "Robotics & Hardware Systems",
      bio: "Ph.D. in Mechatronics with 12+ years pioneering industrial robotic manipulators and intelligent autonomous rovers.",
      photo: "arinze-okonjo",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
      badge: "Robotics Lead"
    },
    {
      name: "Fatimah Bello",
      role: "Head of Software Engineering",
      department: "Digital Solutions Division",
      bio: "Enterprise software architect specializing in scalable cloud ERPs, fintech integrations, and mission-critical web platforms.",
      photo: "fatimah-bello",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85",
      badge: "Software Lead"
    },
    {
      name: "Engr. David Kalu",
      role: "Director of Gadget Procurement & Supply Chain",
      department: "Gadgets & Hardware Distribution",
      bio: "Leading OEM partnerships, bulk corporate hardware provisioning, and SLA technical support infrastructure.",
      photo: "david-kalu",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85",
      badge: "Supply Chain Lead"
    }
  ],

  insights: [
    {
      title: "Why Robotics is Africa's Greatest Industrial Leapfrog Opportunity",
      date: "August 18, 2026",
      author: "Praise Bassey",
      category: "Robotics Strategy",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=85",
      summary: "Exploring how leapfrogging legacy automation directly into intelligent, modular robotics can transform Nigerian manufacturing and logistics."
    },
    {
      title: "The Three-Pronged Revenue Model: From Software Cashflow to Robotics R&D",
      date: "August 2026",
      author: "Zeelot Executive Desk",
      category: "Business Architecture",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
      summary: "A breakdown of Zeelot's pragmatic strategic trajectory—leveraging high-volume digital solutions and gadgets to fuel robotics engineering."
    },
    {
      title: "Empowering Modern Schools: The Case for Custom Management Portals",
      date: "August 2026",
      author: "Digital Solutions Team",
      category: "Software Solutions",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85",
      summary: "How digitized attendance, automated fee processing, and parent engagement platforms eliminate up to 70% of school administrative overhead."
    }
  ],

  testimonials: [
    {
      quote: "Zeelot Innovation's phased strategic roadmap is exactly what the African market needs. Starting with agile software and hardware supply while laying the robotics foundation provides both immediate cashflow and long-term defensibility.",
      author: "Engr. Mustapha Aliyu",
      title: "Technical Director",
      company: "Apex Industrial Conglomerate",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=85"
    },
    {
      quote: "Their proposal for our automated sorting and inventory management demonstrated exceptional technical clarity and business acumen. Zeelot is poised to lead Nigeria's tech revolution.",
      author: "Chinyere Nwosu",
      title: "Operations Head",
      company: "Westbridge Logistics Hub",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=85"
    },
    {
      quote: "The combination of STEM robotics training and school management software brings immense value to modern educational institutions looking to modernize.",
      author: "Dr. Babatunde Lawson",
      title: "Council Chairman",
      company: "Premier Academy Alliance",
      avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=85"
    }
  ],

  ecosystemPartners: [
    { name: "African Robotics Network", tag: "Research Partner" },
    { name: "Nigerian Society of Engineers", tag: "Affiliate" },
    { name: "Lagos Tech Innovation Hub", tag: "Ecosystem" },
    { name: "IEEE Robotics & Automation Society", tag: "Technical Standards" },
    { name: "Federal Ministry of Science & Tech", tag: "Institutional Alignment" },
    { name: "West Africa Manufacturing Guild", tag: "Industrial Outreach" }
  ],

  strategicRecommendation: {
    title: "Conclusion & Strategic Recommendation",
    highlight: "Robotics remains our long-term innovation focus, reflecting the authentic vision for Zeelot Innovation Limited.",
    detail: "Software solutions and technology products serve as practical entry points and complementary revenue streams, allowing the company to establish its market presence, generate steady cashflows, and develop enduring relationships while gradually building its proprietary robotics capabilities.",
    disclaimer: "PLEASE NOTE: The ideas presented in this document are intended as areas for exploration and further discussion, rather than final business decisions."
  },

  template2Features: [
    {
      icon: "telemetry",
      title: "UI/UX & Robotics Interfaces",
      desc: "Intuitive human-machine interfaces, telemetry dashboards, and touch control systems for autonomous robotic units and smart devices.",
      badge: "Robotics UI"
    },
    {
      icon: "code",
      title: "Development & Cloud Platforms",
      desc: "Custom web applications, mobile platforms, enterprise ERPs, and high-uptime cloud infrastructure solving operational bottlenecks.",
      badge: "Software"
    },
    {
      icon: "hardware",
      title: "Gadgets & Hardware Procurement",
      desc: "Wholesale distribution of corporate laptops, rugged phones, smart-home IoT devices, and certified technology accessories.",
      badge: "Distribution"
    },
    {
      icon: "rocket",
      title: "Robotic Training & STEM Labs",
      desc: "Vocational engineering bootcamps, university robotics lab setups, and modular STEM kits cultivating African engineering talent.",
      badge: "Education"
    }
  ],

  whyChooseUs: {
    heading: "Why Choose Zeelot For Your Next Strategic Project?",
    points: [
      {
        title: "Dual-Track Innovation Framework",
        desc: "Immediate digital execution with high-margin software and hardware distribution, directly funding long-term indigenous robotics research."
      },
      {
        title: "Reliable On-Ground SLA & Support",
        desc: "Local deployment teams stationed in Lagos and Abuja offering on-site maintenance, preventive servicing, and rapid spare-part provisioning."
      }
    ]
  },

  faqs: [
    {
      question: "What is Zeelot Innovation's primary long-term business direction?",
      answer: "Robotics represents the primary long-term innovation focus for Zeelot Innovation Limited. Zeelot is structured to introduce, deploy, integrate, and ultimately manufacture robotics solutions for the Nigerian and wider African market.",
      bullets: [
        "Industrial automation and intelligent machinery",
        "Security, surveillance rovers, and aerial drone defense",
        "Hospitality and healthcare service robotics",
        "Smart-home and consumer robotics ecosystems"
      ]
    },
    {
      question: "Why does Zeelot prioritize Software Solutions & Gadgets as entry points?",
      answer: "Building robotics hardware requires substantial R&D and capital. Software solutions and technology gadgets serve as practical entry points and complementary revenue streams, allowing the company to establish market presence, generate healthy cashflow, and nurture enterprise client relationships while systematically engineering robotics capabilities.",
      bullets: []
    },
    {
      question: "What specific Software & Digital Solutions does Zeelot deliver?",
      answer: "We engineer customized digital products tailored for operational scale across African commerce and public institutions:",
      bullets: [
        "Custom Software & Enterprise Web Applications",
        "iOS and Android Mobile Applications",
        "Enterprise Resource Planning (ERP) & Inventory Systems",
        "School Management & Student Fee Portals",
        "Hotel & Hospitality Booking Engines",
        "Scalable Multi-Vendor E-Commerce Solutions"
      ]
    },
    {
      question: "How does the Gadgets & Hardware value chain generate revenue?",
      answer: "Zeelot monetizes hardware through an integrated 5-tier pipeline: Direct Product Sales → Wholesale Regional Distribution → Corporate Enterprise Supply → Government & Institutional Procurement → On-site Installation & SLA Technical Support.",
      bullets: []
    }
  ],

  metricsT2: [
    { number: "4,500+", label: "HARDWARE & IOT NODES", icon: "box" },
    { number: "1,200+", label: "ENTERPRISE CLIENT USERS", icon: "users" },
    { number: "350+", label: "SOFTWARE MODULES DEPLOYED", icon: "code" },
    { number: "7,580+", label: "STEM STUDENTS & ENGINEERS", icon: "award" }
  ]
};

// Export for browser and module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
