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
  { label: "About us", href: "/about-us" },
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
    title: "Emergency plumbing in NYC",
    shortTitle: "Emergency plumbing",
    icon: "emergency",
    category: "Emergency",
    description:
      "24/7 service for burst pipes, active leaks, overflowing toilets, and drain backups.",
    body: "Call (347) 502-6441 for an urgent plumbing repair in Manhattan, Brooklyn, or Queens. Tell us where the problem is and whether water is still leaking or backing up. Our team will confirm the available arrival time and arrange a plumber for your home or business.",
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
    title: "Drain cleaning in NYC",
    shortTitle: "Drain cleaning",
    icon: "drain",
    category: "Plumbing",
    description:
      "Clearing clogged sinks, showers, bathtubs, and main drains in homes and commercial properties.",
    body: "Standing water in the shower or a sink that takes several minutes to empty can be a sign of a blocked drain. We clear drain clogs and investigate recurring backups. If more than one fixture is affected, mention it when you call so we can check for a blockage farther along the line.",
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
    title: "Water heater repair & installation",
    shortTitle: "Water heaters",
    icon: "water",
    category: "Heating",
    description:
      "Service for water heaters with leaks, inconsistent temperatures, or no hot water, plus new installations.",
    body: "We repair and replace water heaters for residential and commercial properties. A visit starts with checking the heater and identifying the fault. If replacement is needed, we can discuss a unit suited to your hot water use and the available space. Have the model number and a description of the problem ready when you book.",
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
    title: "Faucet, sink & fixture repairs",
    shortTitle: "Faucets & fixtures",
    icon: "faucet",
    category: "Plumbing",
    description:
      "Repairs for dripping faucets and leaking sink connections, plus kitchen and bathroom fixture installation.",
    body: "A faucet may need a replacement part rather than a whole new fixture. We check the leak, repair worn components where possible, and install replacement faucets or sinks when needed. If you have already purchased a fixture, send its details before the appointment so we can confirm the installation requirements.",
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
    title: "Residential plumbing in NYC",
    shortTitle: "Residential plumbing",
    icon: "home",
    category: "Plumbing",
    description:
      "Plumbing repairs and installations for apartments, co-ops, condos, and houses.",
    body: "We repair leaks, clear drains, replace fixtures, and service water heaters in New York homes. For apartment work, we can provide the insurance and license documents requested by building management. Let us know about access arrangements or a required building water shutoff before the visit.",
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
    title: "Commercial plumbing in NYC",
    shortTitle: "Commercial plumbing",
    icon: "building",
    category: "Commercial",
    description:
      "Repairs, installations, and emergency service for restaurants, offices, hotels, and managed buildings.",
    body: "Contact Rite Plumbing for commercial leaks, blocked drains, fixture repairs, and plumbing installations. We work with business owners and property managers to arrange access and document the proposed work. For an active leak or backup, call our 24/7 number rather than waiting for an email reply.",
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
    title: "Bathroom plumbing & shower repair",
    shortTitle: "Bathrooms & showers",
    icon: "faucet",
    category: "Plumbing",
    description:
      "Shower valve and cartridge repairs, bathtub drain clearing, and bathroom fixture installation.",
    body: "We service bathroom faucets, tubs, showers, and their water connections. Common calls include a shower that will not shut off, a leaking valve, or water collecting in the bathtub. We also install replacement fixtures. Share the fixture brand or a photo with our team if you have it.",
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
    title: "Toilet repair & installation",
    shortTitle: "Toilet repairs",
    icon: "drain",
    category: "Plumbing",
    description:
      "Clearing toilet clogs, repairing running toilets and leaks, and installing replacement units.",
    body: "Call us for a toilet that will not flush, keeps running, or leaks around the base. We check the cause and repair the affected parts, including seals, wax rings, and flanges where needed. If you are replacing a toilet, we can remove the old unit and connect the new one.",
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
    title: "Garbage disposal repair & replacement",
    shortTitle: "Garbage disposals",
    icon: "faucet",
    category: "Plumbing",
    description:
      "Service for leaking, jammed, or nonworking garbage disposals and their sink connections.",
    body: "A disposal problem may involve the unit itself or the drain connections beneath the sink. We inspect both and advise whether the disposal can be repaired or needs replacement. For a new installation, contact us with the unit details and your current sink setup.",
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
    title: "Gas line repair in NYC",
    shortTitle: "Gas line services",
    icon: "gas",
    category: "Plumbing",
    description:
      "Gas piping repairs by a licensed plumbing company, with documentation for building management.",
    body: "If you suspect a gas leak, leave the area and call 911 from a safe location first. After emergency responders or your utility have made the area safe, contact Rite Plumbing about the required piping repair. We can discuss access, the scope of work, and the documents your building requests.",
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
    title: "Radiator valve repair & installation",
    shortTitle: "Radiators & heating",
    icon: "heat",
    category: "Heating",
    description:
      "Repair and replacement of leaking or faulty radiator valves in homes and apartment buildings.",
    body: "A leak at a radiator valve or connection needs attention before it damages floors or walls. We inspect the valve and replace damaged parts or the valve assembly where needed. In a building with shared heating, let us know who manages the system so the work can be coordinated.",
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
    title: "Sump pump installation & repair",
    shortTitle: "Sump pumps",
    icon: "water",
    category: "Plumbing",
    description:
      "Sump pump repairs, replacement, installation, and maintenance for your property.",
    body: "Contact us if your sump pump is not turning on, runs continuously, or is not removing water from the pit. We check the pump and discharge connections to identify the problem. We also install replacement pumps and provide maintenance for existing systems.",
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
    title: "Tankless water heater services",
    shortTitle: "Tankless water heaters",
    icon: "water",
    category: "Heating",
    description:
      "Tankless water heater repairs, replacement, and new installations in NYC properties.",
    body: "We service tankless units that are not producing hot water or are struggling to maintain temperature. For a new installation, we review hot water demand and the building’s existing connections before recommending a setup. Give us the model number and any displayed error code when requesting a repair.",
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
    title: "24/7 plumbing services in NYC",
    shortTitle: "24/7 plumbing services",
    icon: "emergency",
    category: "Emergency",
    description:
      "Day, night, and weekend plumbing service for homes and businesses in Manhattan, Brooklyn, and Queens.",
    body: "Our phone line is available 24 hours a day, seven days a week. Call for an urgent repair and our team will confirm the next available arrival time. For routine repairs or an installation, you can also choose an appointment through our online calendar.",
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
      "Yes. Call (347) 502-6441 any time for an active leak, burst pipe, overflowing toilet, or drain backup. Our team will confirm the available arrival time.",
  },
  {
    question: "Which parts of New York do you serve?",
    answer:
      "Manhattan, Brooklyn, and Queens. Give us your address when you call so we can confirm service at your location.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Rite Plumbing & Heating holds NYC plumbing license #1608 and is insured. We can provide license and insurance documents for building management.",
  },
  {
    question: "Can you provide a COI for my building?",
    answer:
      "Yes. We provide Certificates of Insurance, license documents, indemnification letters, and a scope of work. Send your building’s requirements before the appointment.",
  },
  {
    question: "How do I book a visit?",
    answer:
      "Choose Book a service to open the appointment calendar, or call (347) 502-6441. For an emergency, call directly.",
  },
  {
    question: "Do you offer estimates?",
    answer:
      "Yes, estimates are free. Call or book online and describe the repair or installation you need.",
  },
];

export const documents = [
  {
    title: "Certificate of Insurance (COI)",
    description: "A certificate for your building manager or managing agent.",
  },
  {
    title: "Plumbing license",
    description: "NYC plumbing license #1608, supplied for building approval.",
  },
  {
    title: "Indemnification letter",
    description: "A letter for buildings that request one before work begins.",
  },
  {
    title: "Scope of work",
    description: "The planned repair or installation, including any required water shutoff.",
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
      "Common mistakes include overtightening fittings, using the wrong replacement parts, and repeatedly flushing a blocked toilet.",
    title: "Common DIY plumbing mistakes",
    category: "Homeowner tips",
    readTime: "2 min read",
    sections: [
      {
        title: "Using the wrong shutoff",
        text: "Know which valve supplies the fixture before attempting a repair. In an apartment building, some valves control water to more than one unit. If you cannot identify the correct shutoff, contact your building manager or a plumber before taking anything apart.",
      },
      {
        title: "Overtightening a leaking connection",
        text: "Tightening a fitting harder can damage its threads or seal. A leak may come from a worn washer, a damaged part, or an incorrectly assembled connection. Identify the cause instead of repeatedly tightening the fitting, and check that any replacement part matches the fixture.",
      },
      {
        title: "Repeating a fix that is not working",
        text: "Do not keep flushing a toilet that is backing up. A drain that blocks again shortly after clearing also needs further investigation. When you call a plumber, describe the previous repair and how quickly the problem returned.",
      },
    ],
  },
  {
    slug: "spring-cleaning-plumbing-tasks",
    image: "/images/riteplumbing/news/spring-cleaning-1.jpg",
    date: "August 25, 2023",
    excerpt:
      "Check for leaks beneath sinks, slow drains, running toilets, and signs that your water heater needs service.",
    title: "A spring plumbing maintenance checklist",
    category: "Maintenance",
    readTime: "2 min read",
    sections: [
      {
        title: "Check sinks and toilets for leaks",
        text: "Look inside sink cabinets for dampness, water stains, or drips from visible connections. Listen for a toilet that continues to run after flushing, and check for water around its base. Arrange a repair for a leak rather than leaving it until the next maintenance visit.",
      },
      {
        title: "Check for slow or blocked drains",
        text: "Water should not remain in a sink or bathtub long after use. Note which drain is slow and whether other fixtures are affected. Several drains backing up at once can indicate a problem in a shared line, especially in an apartment building.",
      },
      {
        title: "Review water heater maintenance",
        text: "Check the heater’s service record and the manufacturer’s recommended maintenance schedule. Mention changes in temperature, unusual noises, or water near the unit when booking service. In a managed building, ask whether the heater serves only your unit or is part of a shared system.",
      },
    ],
  },
  {
    slug: "how-does-residential-plumbing-work",
    image: "/images/riteplumbing/news/residential-plumbing-1.jpg",
    date: "August 25, 2023",
    excerpt:
      "Water supply pipes bring water to your fixtures. Drains carry wastewater away. In an apartment, parts of both systems may be shared.",
    title: "How residential plumbing works",
    category: "Plumbing basics",
    readTime: "2 min read",
    sections: [
      {
        title: "Water supply pipes",
        text: "Supply pipes carry water to faucets, toilets, and appliances. Cold water also feeds the water heater, which supplies hot water to the fixtures that need it. Shutoff valves control water to individual fixtures or larger parts of the system.",
      },
      {
        title: "Drains, traps, and vents",
        text: "Drain pipes carry wastewater from sinks, showers, toilets, and appliances. Water held in a trap helps keep sewer gases out of the room, while vents let air into the drainage system. A blockage can affect one fixture or several, depending on where it occurs.",
      },
      {
        title: "Shared plumbing in apartment buildings",
        text: "An apartment’s pipes may connect to risers and drains used by neighboring units. Some repairs therefore require building access or a shared water shutoff. Check with building management before scheduling work, and pass any document requirements to your plumber.",
      },
    ],
  },
  {
    slug: "common-plumbing-issues-causes",
    image: "/images/riteplumbing/services/p9.jpeg.webp",
    date: "August 25, 2023",
    excerpt:
      "Dripping faucets, running toilets, slow drains, and pipe leaks have different causes and need different repairs.",
    title: "Common plumbing problems and their causes",
    category: "Homeowner tips",
    readTime: "2 min read",
    sections: [
      {
        title: "Dripping faucets and running toilets",
        text: "A worn faucet component can cause dripping even when the handle is closed. A toilet that keeps running may have a problem with its fill or flush mechanism. These faults often involve replaceable parts, but the part must match the fixture.",
      },
      {
        title: "Slow drains and repeated clogs",
        text: "Hair, grease, and other debris can restrict a drain. A problem affecting several fixtures may be farther along the line. Tell your plumber which drains are affected and whether the blockage returns after clearing; those details help locate the problem.",
      },
      {
        title: "Leaks beneath sinks or inside walls",
        text: "Leaks can come from a loose connection, a failed seal, or a damaged pipe. Water stains show where moisture is appearing, but the source may be elsewhere. Contact a plumber for an active leak and notify building management if neighboring units or shared pipes may be affected.",
      },
    ],
  },
  {
    slug: "is-it-ok-to-leave-a-toilet-clogged-overnight",
    image:
      "/images/riteplumbing/services/clogged-toilet-repairs-installation-1-scaled.jpg.webp",
    date: "August 25, 2023",
    excerpt:
      "Stop flushing a blocked toilet. An overflow, a recurring clog, or a backup affecting other fixtures needs attention.",
    title: "Can you leave a toilet clogged overnight?",
    category: "Plumbing basics",
    readTime: "2 min read",
    sections: [
      {
        title: "Stop using the blocked toilet",
        text: "Leaving a toilet unused does not remove the blockage. Repeated flushing can raise the water level and cause an overflow. Keep the fixture out of use until the clog is cleared. If water is overflowing or sewage is backing up, arrange urgent help.",
      },
      {
        title: "Look for backups in other fixtures",
        text: "A shower or sink backing up at the same time can indicate a blockage beyond the toilet. Mention all affected fixtures when calling a plumber. In an apartment building, notify management because a shared drain may be involved.",
      },
      {
        title: "Arrange a repair for repeated clogs",
        text: "A toilet that blocks repeatedly, leaks around the base, or still will not flush after a clog is cleared needs inspection. Rite Plumbing handles toilet clogs, seals, flanges, and replacement installations. Call (347) 502-6441 for an urgent backup.",
      },
    ],
  },
  {
    slug: "what-happens-if-theres-a-gas-leak-in-my-house",
    image:
      "/images/riteplumbing/services/gas-leak-repair-service-1-1920x1280.jpg.webp",
    date: "August 25, 2023",
    excerpt:
      "If you smell gas, leave the area immediately. Call 911 from a safe location and follow instructions from emergency responders.",
    title: "What to do if you smell gas",
    category: "Safety",
    readTime: "2 min read",
    sections: [
      {
        title: "Leave the area and call 911",
        text: "Leave immediately if you smell gas. Once you are safely away, call 911 to report the suspected leak. Do not try to find the source or repair it yourself, and do not re-enter until emergency responders say it is safe.",
      },
      {
        title: "Do not use switches or a phone nearby",
        text: "Do not turn lights or appliances on or off, smoke, light a match, or use a phone in the affected area. These actions can create an ignition source. Make the emergency call only after leaving the area.",
      },
      {
        title: "Contact a plumber after the emergency response",
        text: "Emergency responders or the utility must address the immediate hazard first. After the area is safe, a licensed plumber can discuss any required gas piping repairs and building documentation. See the Con Edison guidance linked above for instructions on reporting a suspected leak.",
      },
    ],
  },
];
