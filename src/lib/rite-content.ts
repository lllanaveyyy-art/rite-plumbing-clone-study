import type { NavigationItem } from "@/types/rite-plumbing";

export const company = {
  name: "Rite Plumbing & Heating",
  phone: "(347) 502-6441",
  phoneHref: "tel:+13475026441",
  email: "info@riteplumbingnyc.com",
  address: "750 Lexington Ave, 9th Floor",
  city: "New York, NY 10022",
  license: "1608",
};

export const scheduleUrl =
  "https://www.housecallpro.com/book/Rite-Plumbing--Heating-Inc/fe74abec57da43a0a171551f5812231d";
export const uploadDocumentsUrl =
  "https://riteplumbingnyc.com/building-management-document/";
export const heroVideoUrl =
  "https://riteplumbingnyc.com/wp-content/uploads/2023/04/WhatsApp-Video-2023-04-07-at-11.19.15-AM.mp4";

export const navItems: NavigationItem[] = [
  { label: "Services", href: "/services" },
  { label: "Why Rite", href: "/about-us" },
  { label: "Service areas", href: "/#service-areas" },
  { label: "Tips & advice", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/pages/category/Plumbing-Service/Rite-Plumbing-Heating-195520531093617/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rite_plumbing_and_heating/",
  },
  { label: "YouTube", href: "https://youtube.com/@riteplumbingandheating" },
];

export type ServiceIcon =
  | "emergency"
  | "drain"
  | "water"
  | "faucet"
  | "home"
  | "building"
  | "heat"
  | "gas";
export type ServicePageContent = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  body: string;
  bullets: string[];
  images: string[];
  icon: ServiceIcon;
  category: "Plumbing" | "Heating" | "Emergency" | "Commercial";
};

export const servicePages: ServicePageContent[] = [
  {
    title: "Emergency plumbing. Help when you need it.",
    shortTitle: "Emergency plumbing",
    icon: "emergency",
    category: "Emergency",
    description:
      "A burst pipe or overflowing toilet can’t wait. Reach our NYC plumbing team any time, day or night.",
    body: "Tell us what’s happening and where you are. We’ll confirm availability and next steps, assess the problem, and explain the repair before work begins. We serve homes and businesses across Manhattan, Brooklyn, and Queens.",
    bullets: [
      "Burst and leaking pipes",
      "Overflowing toilets",
      "Blocked drains and backups",
      "Urgent fixture repairs",
      "Water heater problems",
      "Residential and commercial service",
    ],
    slug: "emergency-plumber-repair",
    images: [
      "/images/riteplumbing/services/emergency-plumber-repair-1-1920x1280.jpg.webp",
      "/images/riteplumbing/services/Rite-Plumbing-20230204-026-1920x1280.jpg.webp",
    ],
  },
  {
    title: "Clear drains. A home that flows.",
    shortTitle: "Drain cleaning",
    icon: "drain",
    category: "Plumbing",
    description:
      "Slow sinks, standing shower water, or a stubborn blockage? Let’s get things moving again.",
    body: "A recurring clog needs more than a temporary fix. Our plumbers assess the affected drain, choose the right clearing method, and check the flow afterward. From kitchen sinks to main drains, we’ll explain what we find and what comes next.",
    bullets: [
      "Kitchen and bathroom drains",
      "Shower and bathtub clogs",
      "Main drain blockages",
      "Recurring slow drains",
      "Drain line assessment",
      "Emergency drain service",
    ],
    slug: "professional-drain-clogged-services",
    images: [
      "/images/riteplumbing/services/drain-clogged-services-1-scaled.jpg.webp",
      "/images/riteplumbing/services/p9.jpeg.webp",
    ],
  },
  {
    title: "Hot water. Back where it belongs.",
    shortTitle: "Water heaters",
    icon: "water",
    category: "Heating",
    description:
      "Reliable repairs, replacements, and installations for the hot water your day depends on.",
    body: "No hot water, inconsistent temperatures, or a leaking tank? We assess the heater and its connections, discuss repair and replacement options, and help you choose a solution that fits your property.",
    bullets: [
      "Water heater diagnosis",
      "Repairs and replacements",
      "New heater installation",
      "Leaking connections",
      "Hot water supply problems",
      "Tankless heater options",
    ],
    slug: "hot-water-heater-repair-installation",
    images: [
      "/images/riteplumbing/services/p10.jpeg.webp",
      "/images/riteplumbing/services/Rite-Plumbing-20230204-018-1920x2688.jpg.webp",
    ],
  },
  {
    title: "Small leaks. Expert fixes.",
    shortTitle: "Faucets & fixtures",
    icon: "faucet",
    category: "Plumbing",
    description:
      "Repair a dripping faucet or give your kitchen and bathroom a fresh start with new fixtures.",
    body: "From worn faucet parts to a new sink installation, the connections matter. Our team repairs leaks, replaces fixtures, and checks the finished installation so you can get back to using your space.",
    bullets: [
      "Faucet repairs and replacement",
      "Kitchen and bathroom sinks",
      "Fixture installation",
      "Leaks beneath sinks",
      "Supply and drain connections",
      "Bathroom upgrades",
    ],
    slug: "faucet-fixture-sink-plumbing-and-installation",
    images: [
      "/images/riteplumbing/services/faucet-fixture-sink-plumbing-and-installation-repair-1-1920x1371.jpg.webp",
      "/images/riteplumbing/services/Rite-Plumbing-20230204-002-1920x1280.jpg.webp",
    ],
  },
  {
    title: "Your home. In capable hands.",
    shortTitle: "Residential plumbing",
    icon: "home",
    category: "Plumbing",
    description:
      "Everyday repairs and thoughtful installations for NYC apartments, condos, co-ops, and homes.",
    body: "City homes come with their own plumbing challenges. We handle leaks, drains, fixtures, and heating connections, and help coordinate the paperwork your building requires. Tell us about your property and we’ll plan the work with you.",
    bullets: [
      "Leak diagnosis and repair",
      "Bathroom and kitchen plumbing",
      "Toilets, faucets, and fixtures",
      "Drain cleaning",
      "Water heaters",
      "Building management coordination",
    ],
    slug: "residential-plumbing-services-repairs",
    images: [
      "/images/riteplumbing/services/residential-plumbing-services-repairs-1.jpg.webp",
      "/images/riteplumbing/services/Rite-Plumbing-20230204-003-1920x1280.jpg.webp",
    ],
  },
  {
    title: "Keep your business moving.",
    shortTitle: "Commercial plumbing",
    icon: "building",
    category: "Commercial",
    description:
      "Plumbing support for busy businesses, property managers, and the buildings New York works in.",
    body: "We support restaurants, offices, hotels, and managed properties with repairs, installations, and emergency service. Our team works with your point of contact to agree on access, scope, and building requirements.",
    bullets: [
      "Restaurant and retail plumbing",
      "Office and hotel repairs",
      "Property management support",
      "Fixture and pipe installations",
      "Building documentation",
      "24/7 emergency availability",
    ],
    slug: "commercial-plumbing",
    images: [
      "/images/riteplumbing/services/Rite-Plumbing-20230204-002-1920x1280.jpg.webp",
      "/images/riteplumbing/services/p22.jpeg.webp",
    ],
  },
  {
    title: "A bathroom that works beautifully.",
    shortTitle: "Bathrooms & showers",
    icon: "faucet",
    category: "Plumbing",
    description:
      "Expert help for leaking showers, worn valves, tubs, and bathroom plumbing upgrades.",
    body: "We repair and install bathroom fixtures and the plumbing behind them. Whether the problem is a shower valve, a slow bathtub drain, or a leaking connection, we’ll assess it and talk you through the work.",
    bullets: [
      "Shower and bathtub repairs",
      "Shower valve replacement",
      "Cartridge and faucet repairs",
      "Bathroom drain clearing",
      "Fixture installation",
      "Pipe and connection repairs",
    ],
    slug: "bathroom-plumbing-shower-repair",
    images: [
      "/images/riteplumbing/services/Bathroom-plumbing-and-shower-repair-1920x1371.jpg.webp",
      "/images/riteplumbing/services/p1.jpeg.webp",
    ],
  },
  {
    title: "Toilet trouble? Let’s take care of it.",
    shortTitle: "Toilet repairs",
    icon: "drain",
    category: "Plumbing",
    description:
      "Clogs, leaks, and new installations handled by a team that knows NYC plumbing.",
    body: "A toilet that runs, leaks, or won’t flush can disrupt the whole household. We identify the cause, explain the repair, and check the toilet and its connections before wrapping up.",
    bullets: [
      "Clogged toilet clearing",
      "Running toilet repairs",
      "New toilet installation",
      "Wax ring replacement",
      "Flange and seal repairs",
      "Leaks around the base",
    ],
    slug: "clogged-toilet-repairs-installation",
    images: [
      "/images/riteplumbing/services/clogged-toilet-repairs-installation-1-scaled.jpg.webp",
      "/images/riteplumbing/services/p3.jpeg.webp",
    ],
  },
  {
    title: "Get your kitchen back to normal.",
    shortTitle: "Garbage disposals",
    icon: "faucet",
    category: "Plumbing",
    description:
      "Repairs and replacements for disposals that leak, jam, or stop working.",
    body: "We inspect the disposal and its plumbing connections, discuss whether repair or replacement makes sense, and check the sink drainage after the work is complete.",
    bullets: [
      "Disposal diagnosis",
      "Leak repairs",
      "Disposal replacement",
      "New unit installation",
      "Kitchen sink connections",
      "Drainage checks",
    ],
    slug: "garbage-disposal-repair-and-replacement",
    images: [
      "/images/riteplumbing/services/garbage-disposal-repair-and-replacement-1-1920x1371.jpg.webp",
      "/images/riteplumbing/services/p7.jpeg.webp",
    ],
  },
  {
    title: "Licensed gas line repairs.",
    shortTitle: "Gas line services",
    icon: "gas",
    category: "Plumbing",
    description:
      "Professional gas plumbing repairs and building coordination after the immediate hazard has been addressed.",
    body: "Once emergency responders or your utility have made the area safe, contact our team to discuss the repair, access requirements, and documentation for your building.",
    bullets: [
      "Gas piping repairs",
      "Gas line assessment",
      "Building coordination",
      "Scope of work documentation",
      "Insurance documentation",
      "Licensed plumbing support",
    ],
    slug: "gas-leak-repair-service",
    images: [
      "/images/riteplumbing/services/gas-leak-repair-service-1-1920x1280.jpg.webp",
      "/images/riteplumbing/services/p9.jpeg.webp",
    ],
  },
  {
    title: "Bring comfort back home.",
    shortTitle: "Radiators & heating",
    icon: "heat",
    category: "Heating",
    description:
      "Radiator valve repairs and installations for New York’s homes and buildings.",
    body: "Older NYC buildings need plumbers who understand their heating connections. We assess leaking radiator valves and heating issues, discuss the required work, and coordinate building access where needed.",
    bullets: [
      "Radiator valve repairs",
      "Valve replacement and installation",
      "Leaking radiator connections",
      "Heating system assessment",
      "Building coordination",
      "Plumbing documentation",
    ],
    slug: "radiator-valve-repair-installation",
    images: [
      "/images/riteplumbing/services/p14.jpeg.webp",
      "/images/riteplumbing/services/p14-2.jpeg.webp",
    ],
  },
  {
    title: "A little prevention. More peace of mind.",
    shortTitle: "Sump pumps",
    icon: "water",
    category: "Plumbing",
    description:
      "Installation, maintenance, and repair for your property’s sump pump system.",
    body: "We assess your sump pump and its connections, discuss maintenance or replacement, and check operation after the service. Share your property’s setup when booking so we can plan the visit.",
    bullets: [
      "Sump pump installation",
      "Pump repairs",
      "Maintenance and inspections",
      "Discharge pipe connections",
      "Replacement options",
      "System operation checks",
    ],
    slug: "sump-pump-installation-maintenance-repairs",
    images: [
      "/images/riteplumbing/services/p17.jpeg.webp",
      "/images/riteplumbing/services/Rite-Plumbing-20230204-003-1920x1280.jpg.webp",
    ],
  },
  {
    title: "Hot water. A smarter setup.",
    shortTitle: "Tankless water heaters",
    icon: "water",
    category: "Heating",
    description:
      "Tankless water heater repairs, replacements, and installation planning for your property.",
    body: "Choosing a tankless system starts with your hot water needs and the building’s existing connections. We review the setup with you, explain the installation requirements, and service existing units when hot water becomes unreliable.",
    bullets: [
      "Tankless heater diagnosis",
      "Repairs and replacement",
      "Installation planning",
      "Water and gas connections",
      "Hot water supply assessment",
      "Building requirements",
    ],
    slug: "tankless-water-heater-repair-installation",
    images: [
      "/images/riteplumbing/services/p19.jpeg.webp",
      "/images/riteplumbing/services/p20.jpeg.webp",
    ],
  },
  {
    title: "Plumbing help. Around the clock.",
    shortTitle: "24/7 plumbing services",
    icon: "emergency",
    category: "Emergency",
    description:
      "Plumbing problems don’t follow business hours. You can reach Rite Plumbing 24 hours a day.",
    body: "Call for an urgent problem or book a planned visit online. Our team serves Manhattan, Brooklyn, and Queens with plumbing and heating repairs for residential and commercial properties. Call to confirm the next available arrival window.",
    bullets: [
      "Day and night availability",
      "Urgent plumbing repairs",
      "Residential service",
      "Commercial service",
      "Online scheduling",
      "Free estimates",
    ],
    slug: "24-7-plumbing-services",
    images: [
      "/images/riteplumbing/services/24-hour-emergency-plumbing-1.jpg.webp",
      "/images/riteplumbing/services/Rite-Plumbing-20230204-026-1920x1280.jpg.webp",
    ],
  },
];

export const serviceSlugAliases: Record<string, string> = {
  "24-hour-emergency-plumbing": "24-7-plumbing-services",
  "24-7-plumbing-services-in-nyc": "24-7-plumbing-services",
  "bathroom-plumbing-shower-repair-nyc": "bathroom-plumbing-shower-repair",
  "clogged-toilet-repairs-installation-nyc":
    "clogged-toilet-repairs-installation",
  "drain-clogged-services": "professional-drain-clogged-services",
  "professional-drain-clogged-services-nyc":
    "professional-drain-clogged-services",
  "emergency-plumber-repair-nyc": "emergency-plumber-repair",
  "faucet-fixture-sink-plumbing-and-installation-repair":
    "faucet-fixture-sink-plumbing-and-installation",
  "faucet-fixture-sink-plumbing-and-installation-repair-nyc":
    "faucet-fixture-sink-plumbing-and-installation",
  "garbage-disposal-repair-and-replacement-nyc":
    "garbage-disposal-repair-and-replacement",
  "gas-leak-repair-service-nyc": "gas-leak-repair-service",
  "hot-water-heater-repair-installation-nyc":
    "hot-water-heater-repair-installation",
  "radiator-valve-repair-installation-repair":
    "radiator-valve-repair-installation",
  "radiator-valve-repair-installation-repair-nyc":
    "radiator-valve-repair-installation",
  "sump-pump-installation-maintenance-repairs-in-nyc":
    "sump-pump-installation-maintenance-repairs",
  "tankless-water-heater-repair-installation-nyc":
    "tankless-water-heater-repair-installation",
  "commercial-plumber-nyc": "commercial-plumbing",
  "residential-plumbing-services-repairs-nyc":
    "residential-plumbing-services-repairs",
};

export const serviceRouteSlugs = Array.from(
  new Set([
    ...servicePages.map((page) => page.slug),
    ...Object.keys(serviceSlugAliases),
  ]),
);
export function getServicePage(slug: string) {
  return servicePages.find(
    (page) => page.slug === (serviceSlugAliases[slug] ?? slug),
  );
}

export const faqs = [
  {
    question: "Do you offer emergency plumbing?",
    answer:
      "Yes. You can reach Rite Plumbing 24/7 for urgent plumbing problems. Call (347) 502-6441 so we can discuss the issue and confirm availability and an arrival window.",
  },
  {
    question: "Which parts of New York do you serve?",
    answer:
      "We serve Manhattan, Brooklyn, and Queens. Call with your address to confirm coverage and availability for your property.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Rite Plumbing & Heating is licensed and insured. Our plumbing license number is 1608. Ask our team for the documentation your building requires.",
  },
  {
    question: "Can you provide a COI for my building?",
    answer:
      "Yes. Our team can help with a Certificate of Insurance, license documentation, an indemnification letter, and a scope of work. Send your building’s requirements before the appointment so we can coordinate.",
  },
  {
    question: "How do I book a visit?",
    answer:
      "Use Book a service to open our online scheduling calendar, or call us directly. For an active leak or another urgent issue, calling is the quickest way to discuss next steps.",
  },
  {
    question: "Do you offer estimates?",
    answer:
      "We offer free estimates. Contact the team with details of your plumbing issue to discuss the scope and arrange the right type of appointment.",
  },
];

export const documents = [
  {
    title: "Certificate of Insurance",
    description: "Insurance documentation for your building’s review.",
  },
  {
    title: "Plumbing license",
    description: "License information for building management.",
  },
  {
    title: "Indemnification letter",
    description: "Documentation tailored to the building’s requirements.",
  },
  {
    title: "Scope of work",
    description: "A clear outline of the planned plumbing work.",
  },
];

export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  sections: { title: string; text: string }[];
};

export const news: NewsArticle[] = [
  {
    slug: "plumbing-mistakes-diy-ers-make",
    image: "/images/riteplumbing/news/diy-mistakes-1.jpg",
    date: "August 25, 2023",
    excerpt:
      "Oftentimes, you find people making mistakes when they try to fix plumbing issues by themselves.",
    title: "The small plumbing mistakes that become big problems",
    category: "Homeowner tips",
    readTime: "2 min read",
    sections: [
      {
        title: "Know what you’re working with",
        text: "Before taking apart a fixture, identify its water supply and the correct shutoff. If you aren’t sure which valve controls the fixture, stop and ask a professional. In an apartment building, a shutoff may affect neighboring homes.",
      },
      {
        title: "Tighter isn’t always better",
        text: "Overtightening can damage threads, seals, or a fixture. Different connections require different parts and methods. A persistent leak is a reason to identify the cause rather than keep tightening.",
      },
      {
        title: "Notice a recurring problem",
        text: "A drain that clogs repeatedly or a faucet that keeps leaking deserves a closer look. Share when the problem happens and what has already been tried with your plumber. That history helps guide the assessment.",
      },
    ],
  },
  {
    slug: "spring-cleaning-plumbing-tasks",
    image: "/images/riteplumbing/news/spring-cleaning-1.jpg",
    date: "August 25, 2023",
    excerpt:
      "Spring cleaning is a good time to look at drains, fixtures, leaks, and water heater maintenance.",
    title: "A simple seasonal check for your home’s plumbing",
    category: "Maintenance",
    readTime: "2 min read",
    sections: [
      {
        title: "Look under the sink",
        text: "Check accessible cabinets for dampness, stains, or a musty smell. Look at visible connections without taking them apart. If you see an active leak, arrange a repair and let building management know when appropriate.",
      },
      {
        title: "Notice how the drains behave",
        text: "Does water drain more slowly than it used to? Does a problem affect one fixture or several? Write down what you notice. Repeated backups or multiple slow drains are worth discussing with a plumber.",
      },
      {
        title: "Plan your maintenance",
        text: "Keep your water heater’s model and service information handy. Follow the manufacturer’s maintenance guidance and have equipment serviced by a qualified professional. A planned appointment is easier to coordinate than an unexpected disruption.",
      },
    ],
  },
  {
    slug: "how-does-residential-plumbing-work",
    image: "/images/riteplumbing/news/residential-plumbing-1.jpg",
    date: "August 25, 2023",
    excerpt:
      "Residential plumbing brings clean water in and carries waste water away through connected systems.",
    title: "Your home’s plumbing, explained simply",
    category: "Plumbing basics",
    readTime: "2 min read",
    sections: [
      {
        title: "The supply side",
        text: "Supply pipes bring water to your faucets, toilets, and appliances. A water heater supplies the hot side of the system. Shutoff valves allow fixtures or sections of the supply to be isolated when work is needed.",
      },
      {
        title: "The drainage side",
        text: "Drain pipes carry wastewater away from fixtures. Traps and venting are part of that system. If several fixtures back up together, the issue may be farther along the drainage route rather than at one sink.",
      },
      {
        title: "Your building matters",
        text: "Apartments often share supply and drainage infrastructure. Before a repair or installation, check your building’s access and documentation requirements. A plumber and your building manager can coordinate the scope and any shared shutoff.",
      },
    ],
  },
  {
    slug: "common-plumbing-issues-causes",
    image: "/images/riteplumbing/services/p9.jpeg.webp",
    date: "August 25, 2023",
    excerpt:
      "Common plumbing trouble often starts with aging pipes, clogged drains, leaks, and fixture wear.",
    title: "What recurring plumbing problems can tell you",
    category: "Homeowner tips",
    readTime: "2 min read",
    sections: [
      {
        title: "Describe the pattern",
        text: "Note which fixtures are affected, when the issue started, and whether it happens all the time. A clear description helps your plumber plan an assessment.",
      },
      {
        title: "Look for visible signs",
        text: "Damp cabinets, water stains, or an unusual change in fixture behavior are useful details. Avoid opening walls or dismantling shared building plumbing to investigate.",
      },
      {
        title: "Get a diagnosis first",
        text: "Similar symptoms can have different causes. An on-site assessment helps distinguish a worn fixture part from a pipe or building system problem and gives you a clear repair plan.",
      },
    ],
  },
  {
    slug: "is-it-ok-to-leave-a-toilet-clogged-overnight",
    image:
      "/images/riteplumbing/services/clogged-toilet-repairs-installation-1-scaled.jpg.webp",
    date: "August 25, 2023",
    excerpt:
      "A clogged toilet can overflow or back up, so quick service is safer than waiting overnight.",
    title: "A clogged toilet: what to do next",
    category: "Plumbing basics",
    readTime: "2 min read",
    sections: [
      {
        title: "Don’t keep flushing",
        text: "Repeated flushing can add more water to a blocked toilet. Stop using the fixture if it is backing up. Keep people away from overflow and arrange professional help for an active backup.",
      },
      {
        title: "Check the other fixtures",
        text: "If a sink or shower also backs up, mention that when you call. A problem involving several fixtures may need assessment beyond the toilet itself.",
      },
      {
        title: "Call when the problem persists",
        text: "A recurring clog, a leak around the base, or an overflow should be assessed. In an apartment, notify building management if the issue could affect shared drainage or neighboring units.",
      },
    ],
  },
  {
    slug: "what-happens-if-theres-a-gas-leak-in-my-house",
    image:
      "/images/riteplumbing/services/gas-leak-repair-service-1-1920x1280.jpg.webp",
    date: "August 25, 2023",
    excerpt:
      "Leave the area immediately and call 911 from a safe location. A plumbing booking is not the first step.",
    title: "Smell gas? Put safety first.",
    category: "Safety",
    readTime: "2 min read",
    sections: [
      {
        title: "Leave and call from a safe location",
        text: "If you smell gas, leave the area immediately. Once you are safely away, call 911. Do not try to locate or repair the leak yourself.",
      },
      {
        title: "Avoid anything that could create a spark",
        text: "Do not switch lights or appliances on or off, smoke, light matches, or use a phone in the area where you smell gas. Follow emergency responders’ and your utility’s instructions.",
      },
      {
        title: "Arrange repairs once the area is safe",
        text: "Once emergency responders or the utility have addressed the immediate hazard, a licensed plumber can discuss gas piping repairs and the requirements for your building. NYC’s emergency guidance is linked below.",
      },
    ],
  },
];
