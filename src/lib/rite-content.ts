import type { DocumentRequirement, NavigationItem, NewsArticle, ServiceFeature } from "@/types/rite-plumbing";

export type ServicePageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string[];
  sectionTitle: string;
  body: string[];
  listTitle?: string;
  bullets: string[];
  closingTitle: string;
  closing: string;
  images: string[];
};

export const navItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "/blog/" },
  { label: "Video", href: "/video/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact", href: "/contact/" },
];

export const serviceMenuItems: NavigationItem[] = [
  { label: "24/7 Plumbing Services", href: "/24-7-plumbing-services/" },
  { label: "Bathroom Plumbing & Shower Repair", href: "/bathroom-plumbing-shower-repair/" },
  { label: "Clogged Toilet Repairs & Installation", href: "/clogged-toilet-repairs-installation/" },
  { label: "Professional Drain Clogged Services", href: "/professional-drain-clogged-services/" },
  { label: "Emergency Plumber Repair", href: "/emergency-plumber-repair/" },
  { label: "Faucet, Fixture, Sink Plumbing And Installation", href: "/faucet-fixture-sink-plumbing-and-installation/" },
  { label: "Garbage Disposal Repair And Replacement", href: "/garbage-disposal-repair-and-replacement/" },
  { label: "Gas Leak Repair Service", href: "/gas-leak-repair-service/" },
  { label: "Hot Water Heater Repair & Installation", href: "/hot-water-heater-repair-installation/" },
  { label: "Radiator Valve Repair & Installation", href: "/radiator-valve-repair-installation/" },
  { label: "Sump Pump Installation, Maintenance & Repairs", href: "/sump-pump-installation-maintenance-repairs/" },
  { label: "Tankless Water Heater Repair & Installation", href: "/tankless-water-heater-repair-installation/" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing/" },
  { label: "Residential Plumbing Services & Repairs", href: "/residential-plumbing-services-repairs/" },
];

export const features: ServiceFeature[] = [
  { icon: "calendar", title: "Schedule Online", description: "Schedule a plumber online within less than a minute." },
  { icon: "route", title: "Track your plumber while on route", description: "GPS Tracking your plumber while on route." },
  { icon: "document", title: "Building Management Document Requirements", description: "Secure Your Plumbing Work with Necessary Documents In less than 24 Hours" },
  { icon: "payment", title: "Easy Online Payments", description: "Pay online through the invoice sent to you (Credit Card, check, ACH)" },
];

export const documents: DocumentRequirement[] = [
  { title: "Certificate of Insurance (COI)", description: "When you choose Rite Plumbing and Heating, you can trust that your plumbing work is being done right. We provide a Certificate of Insurance (COI) as a guarantee that any demage that occurs during or after work is covered as insured by us. This gives you peace of mind that you are fully protected against any damages that may happen." },
  { title: "Licensed Plumbing Company", description: "We are a fully licenced plumbing company, with license number 1608. We do residential plumbing, gas leak plumbing and clogged toilet plumbing work done in the city must be done by a licensed plumbing company, so you can be sure that we have the necessary qualificaions to get the job done right." },
  { title: "Indemnification Letter", description: "We provide an indemnification letter to ensure that you are fully protected from any legal claims. This clause give you peace of mind that you are not liable for any demages that may occure during or after the work." },
  { title: "Scope of Work", description: "We provide a scope of work to building management so that they understand what's involved in the plumbing work. This scope of work allows them to know whether they need to shut off the water in the building, so they can inform the tenants accordingly." },
];

export const news: NewsArticle[] = [
  { title: "Plumbing Mistakes DIY-ers Make", category: "Uncategorized", readTime: "5 min read" },
  { title: "Spring Cleaning Plumbing Tasks", category: "Plumbing", readTime: "5 min read" },
  { title: "How Does Residential Plumbing Work", category: "Plumbing", readTime: "4 min read" },
  { title: "Common Plumbing Issues Causes", category: "Plumbing", readTime: "5 min read" },
  { title: "Is It Ok To Leave A Toilet Clogged Overnight", category: "Plumbing", readTime: "4 min read" },
  { title: "What Happens If There'S A Gas Leak In My House", category: "Gas", readTime: "5 min read" },
];

const baseServices = "/images/riteplumbing/services/";

export const servicePages: ServicePageContent[] = [
  {
    slug: "24-7-plumbing-services",
    title: "24/7 Plumbing Services",
    eyebrow: "24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.",
    intro: ["Plumbing problem? We can help! 24/7 plumbing service. Less than 30 minutes to arrrive", "Our estimates are free, schedule an appointment with our online scheduling"],
    sectionTitle: "Rite Plumbing NYC | Your Plumbing Solution",
    body: ["Licensed and Insured Plumbing License: 1608. You can save time by quickly and easily schedule with our online scheduling service.", "We do residential plumbing, gas leak plumbing and clogged toilet plumbing work done in the city must be done by a licensed plumbing company."],
    listTitle: "Services Include:",
    bullets: ["24/7 Emergency Services", "Free Estimates", "Under 30-minute Arrival Time", "State of the Art Scheduling Software", "Plumbing and Heating Problems in Manhattan, Queens, and Brooklyn"],
    closingTitle: "We Will Arrive In Less Than 30-minutes.",
    closing: "Schedule an emergency commercial plumber through our online calendar.",
    images: [`${baseServices}Rite-Plumbing-20230204-026-1920x1280.jpg.webp`, `${baseServices}Rite-Plumbing-20230204-003-1920x1280.jpg.webp`],
  },
  {
    slug: "bathroom-plumbing-shower-repair",
    title: "Bathroom Plumbing & Shower Repair",
    eyebrow: "We Fix Faucets, Tubs, Showers And Pipes",
    intro: ["We are insured and Licensed Plumbers you can trust. Need shower repair in NYC? Call us now at 347-502-6441.", "Or you can schedule faucet, tub, shower, and pipe repair through our online calendar.", "We are Top-Rated Plumbers. Check our reviews."],
    sectionTitle: "Licensed Plumbers Nyc | Rite Plumbing & Heating",
    body: ["A lot of things have changed with today’s bathrooms and showers. There are many tub and shower options with complex shower heads, jacuzzi and whirlpool spas, faucets and steam systems. Licensed Rite Plumbing & Heating experts are top-rated for bathroom plumbing repairs of all kinds."],
    listTitle: "Our Shower Plumbing Services Include:",
    bullets: ["Bathroom and Shower Faucet Repairs", "Bathtub Repairs", "Clogged Bathroom Drains", "Entire Shower Installations", "Leaky Pipes and Bathroom Fixtures", "Shower and Bathtub Fitting", "Shower Cartridge Replacement", "Shower Repair", "Shower Valve Leaks", "Toilet Repairs", "Walk-In Shower Connections and Repair", "Water Pipe Repairs and Installation"],
    closingTitle: "We Are Available 24/7, 7 Days A Week",
    closing: "We can understand what our customer’s face when dealing with broken or faulty bathroom plumbing. Please contact our master technicians to handle these dilemmas, otherwise you could be looking at disaster. Remember: Unresolved water damage leads to mold. We care about you!",
    images: [`${baseServices}Bathroom-plumbing-and-shower-repair-1920x1371.jpg.webp`, `${baseServices}p1.jpeg.webp`, `${baseServices}p2.jpeg.webp`],
  },
  {
    slug: "clogged-toilet-repairs-installation",
    title: "Clogged Toilet Repairs & Installation",
    eyebrow: "We Fix Toilet Clogs. We Install Toilets",
    intro: ["We are a Insured and licensed plumbing/heating company offering Clogged Toilet Service in the New York City and surrounding areas. Call Rite Plumbing & Heating in NYC at 347-502-6441 24-hours a day for prompt emergency service assistance.", "Schedule a plumber through our online calendar for a free estimate.", "Check our reviews; you will not be disappointed."],
    sectionTitle: "Toilet Plumber Specialists | We Know What To Fix",
    body: ["If you are looking for an expert plumber in NYC, you have come to the right place. We are prompt and efficient when servicing clogged toilets because we know toilet clogs can be a hassle.", "When toilet paper or objects get stuck in the drain or when you have a toilet leak, it may be time to call Rite Plumbing & Heating."],
    listTitle: "When you rely on Rite Plumbing & Heating, you can expect prompt service on:",
    bullets: ["Clogged Toilet Repairs", "Toilet Clogs", "Toilet Installations", "Wax Ring Replacement", "Toilet Sealing", "Toilet Leaks", "Toilet Flange"],
    closingTitle: "Emergency Licensed Plumber | New York City",
    closing: "#1 Toilet Clog Tip – Never Use Chemicals. Call us. We are experts in toilet plumbing services and know how to fix them. We are available 24/7, contact us now!",
    images: [`${baseServices}clogged-toilet-repairs-installation-1-scaled.jpg.webp`, `${baseServices}p3.jpeg.webp`, `${baseServices}p4.jpeg.webp`],
  },
  {
    slug: "professional-drain-clogged-services",
    title: "Professional Drain Clogged Services",
    eyebrow: "Clogged Drain Services For New York City",
    intro: ["Need drain cleaning in NYC? Call us now at 347-502-6441 for 24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.", "Or you can schedule us to come in 30 minutes. View our online calendar."],
    sectionTitle: "Professional Drain Cleaning | Rite Plumbing & Heating",
    body: ["We are prompt and efficient when servicing clogged drains because we know drain clogs can be a hassle. Our licensed plumbers can clear kitchen drains, bathroom drains, shower drains and main drain lines."],
    listTitle: "Drain Services Include:",
    bullets: ["Clogged Bathroom Drains", "Kitchen Drain Cleaning", "Main Drain Service", "Emergency Drain Service", "Water Pipe Repairs and Installation", "State of the Art Equipment Solutions"],
    closingTitle: "We Will Arrive In Less Than 30-minutes.",
    closing: "24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN. Schedule an emergency commercial plumber through our online calendar.",
    images: [`${baseServices}p9.jpeg.webp`, `${baseServices}p11.jpeg.webp`],
  },
  {
    slug: "emergency-plumber-repair",
    title: "Emergency Plumber Repair",
    eyebrow: "Emergency Plumbers You Can Trust",
    intro: ["Need emergency plumber in NYC? Call us now at 347-502-6441 for 24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.", "We are Top-Rated Plumbers. Check our reviews."],
    sectionTitle: "Emergency Licensed Plumber | New York City",
    body: ["There is no job too big or too small that we can’t handle. Rite Plumbing and Heating is a insured and licensed plumbing/heating company offering resolutions to your plumbing, residential and commercial needs."],
    listTitle: "Emergency Plumbing Services Include:",
    bullets: ["Gas Leaks", "Shower Repairs", "Garbage Disposals", "Faucet Fixtures and Sinks", "Clogged Toilet Repairs", "Clogged Drains", "Water Heater Installations"],
    closingTitle: "We Are Available 24/7, 7 Days A Week",
    closing: "We value your time in this busy city and are never late. Schedule prompt appointments through our high-end scheduling software.",
    images: [`${baseServices}emergency-plumber-repair-1-1920x1280.jpg.webp`, `${baseServices}Rite-Plumbing-20230204-026-1920x1280.jpg.webp`, `${baseServices}p6.jpg.webp`],
  },
  {
    slug: "faucet-fixture-sink-plumbing-and-installation",
    title: "Faucet, Fixture, Sink Plumbing And Installation Repair New York City",
    eyebrow: "We Fix Faucets, Fixtures And Sinks",
    intro: ["We are insured and Licensed Plumbers you can trust. Need faucet fixture sink plumbing in NYC? Call us now at 347-502-6441.", "Or you can schedule faucet, fixture, sink plumbing and installation repair through our online calendar."],
    sectionTitle: "Faucet, Fixture, Sink Plumbing And Installation",
    body: ["Licensed Rite Plumbing & Heating experts are top-rated for faucet, fixture, sink plumbing repairs of all kinds. We repair kitchen faucets, bathroom fixtures, sink plumbing and installation."],
    listTitle: "Our Plumbing Services Include:",
    bullets: ["Faucet Repairs", "Fixture Installation", "Sink Plumbing", "Kitchen Faucet Replacement", "Bathroom Faucet Problems", "Leaky Pipes and Bathroom Fixtures"],
    closingTitle: "We Will Arrive In Less Than 30-minutes.",
    closing: "Schedule an emergency commercial plumber through our online calendar.",
    images: [`${baseServices}faucet-fixture-sink-plumbing-and-installation-repair-1-1920x1371.jpg.webp`, `${baseServices}Rite-Plumbing-20230204-002-1920x1280.jpg.webp`, `${baseServices}p5.jpeg.webp`],
  },
  {
    slug: "garbage-disposal-repair-and-replacement",
    title: "Garbage Disposal Repair and Replacement NYC",
    eyebrow: "Garbage Disposal Plumbers You Can Trust",
    intro: ["Need garbage disposal repair in NYC? Call us now at 347-502-6441 for 24/7 Emergency Plumbing Service.", "We are Top-Rated Plumbers. Check our reviews."],
    sectionTitle: "Garbage Disposal Repair And Replacement",
    body: ["When garbage disposals stop working, leaking, humming, or backing up the sink, our licensed plumbers can diagnose the problem and repair or replace the unit."],
    listTitle: "Service Includes:",
    bullets: ["Garbage Disposal Repair", "Garbage Disposal Replacement", "Kitchen Sink Plumbing", "Leaky Pipes", "Drain Cleaning", "Emergency Licensed Plumber"],
    closingTitle: "We Are Available 24/7, 7 Days A Week",
    closing: "Contact us for a free estimate. We can be there in 30 minutes.",
    images: [`${baseServices}garbage-disposal-repair-and-replacement-1-1920x1371.jpg.webp`, `${baseServices}p7.jpeg.webp`, `${baseServices}p8.jpeg.webp`],
  },
  {
    slug: "gas-leak-repair-service",
    title: "Gas Leak Repair Service",
    eyebrow: "Gas Leak Plumbers You Can Trust",
    intro: ["Need gas leak repair service in NYC? Call us now at 347-502-6441 for 24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.", "We are insured and Licensed Plumbers you can trust."],
    sectionTitle: "Gas Leak Repair Service | Rite Plumbing & Heating",
    body: ["Gas leaks are serious plumbing emergencies. Licensed Rite Plumbing & Heating experts provide gas leak plumbing work in the city with the necessary qualifications to get the job done right."],
    listTitle: "Gas Services Include:",
    bullets: ["Gas Leak Repair", "Gas Line Service", "Emergency Licensed Plumber", "Certificate of Insurance", "Indemnification Letter", "Scope of Work"],
    closingTitle: "We Will Arrive In Less Than 30-minutes.",
    closing: "24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.",
    images: [`${baseServices}gas-leak-repair-service-1-1920x1280.jpg.webp`, `${baseServices}p9.jpeg.webp`, `${baseServices}p11.jpeg.webp`],
  },
  {
    slug: "hot-water-heater-repair-installation",
    title: "Hot Water Heater Repair & Installation NYC",
    eyebrow: "Water Heater Installations",
    intro: ["Need hot water heater repair in NYC? Call us now at 347-502-6441.", "We are Top-Rated Plumbers. Check our reviews."],
    sectionTitle: "Hot Water Heater Repair & Installation",
    body: ["Get honest, free estimates when choosing Rite Plumbing and Heating. Whether it be in the middle of the night or early morning, we are here 24 hours a day, 7 days a week to serve you."],
    listTitle: "Water Heater Services Include:",
    bullets: ["Water Heater Repair", "Water Heater Replacement", "Water Heater Installations", "Tankless Water Heaters", "Emergency Plumbing Service", "Residential Plumbing"],
    closingTitle: "We Are Available 24/7, 7 Days A Week",
    closing: "There is no job too big or too small that we can’t handle.",
    images: [`${baseServices}Rite-Plumbing-20230204-018-1920x2688.jpg.webp`, `${baseServices}p10.jpeg.webp`],
  },
  {
    slug: "radiator-valve-repair-installation",
    title: "Radiator Valve Repair & Installation Repair NYC",
    eyebrow: "Radiator Valve Plumbers You Can Trust",
    intro: ["Need radiator valve repair in NYC? Call us now at 347-502-6441.", "Or you can schedule repair and installation through our online calendar."],
    sectionTitle: "Radiator Valve Repair & Installation",
    body: ["If you’ve rented long enough in and around the city of New York, you will understand how exhausting it can feel to find prompt resolutions to your plumbing needs when living in buildings dating back to the 1920’s."],
    listTitle: "Service Includes:",
    bullets: ["Radiator Valve Repair", "Radiator Valve Installation", "Radiator Leaks", "Heating Problems", "Emergency Licensed Plumber", "Scope of Work"],
    closingTitle: "We Will Arrive In Less Than 30-minutes.",
    closing: "Contact Us for 24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.",
    images: [`${baseServices}p14.jpeg.webp`, `${baseServices}p14-2.jpeg.webp`, `${baseServices}p15.jpeg.webp`],
  },
  {
    slug: "sump-pump-installation-maintenance-repairs",
    title: "Sump Pump Installation, Maintenance & Repairs in NYC",
    eyebrow: "Sump Pump Services You Can Trust",
    intro: ["Need sump pump installation, maintenance or repairs in NYC? Call us now at 347-502-6441.", "We are insured and Licensed Plumbers you can trust."],
    sectionTitle: "Sump Pump Installation, Maintenance & Repairs",
    body: ["Our highly trained staff ensures each job is completed without flaws, leaving no job uncleaned. We leave a job well-done and clean."],
    listTitle: "Sump Pump Services Include:",
    bullets: ["Sump Pump Installation", "Sump Pump Maintenance", "Sump Pump Repairs", "Water Pipe Repairs", "Emergency Plumbing", "Free Estimates"],
    closingTitle: "We Are Available 24/7, 7 Days A Week",
    closing: "We value your time in this busy city and are never late.",
    images: [`${baseServices}p17.jpeg.webp`, `${baseServices}Rite-Plumbing-20230204-003-1920x1280.jpg.webp`],
  },
  {
    slug: "tankless-water-heater-repair-installation",
    title: "Tankless Water Heater Repair & Installation NYC",
    eyebrow: "Tankless Water Heaters",
    intro: ["Need tankless water heater repair or installation in NYC? Call us now at 347-502-6441.", "We are Top-Rated Plumbers. Check our reviews."],
    sectionTitle: "Tankless Water Heater Repair & Installation",
    body: ["Experience Peace of Mind with Rite Plumbing and Heating. Google Guaranteed! Member of Master Licensed Plumbers in NYC Licensed and Insured!"],
    listTitle: "Tankless Water Heater Services Include:",
    bullets: ["Tankless Water Heater Repair", "Tankless Water Heater Installation", "Water Heater Replacement", "Emergency Plumbing Service", "Free Estimates", "Residential Plumbing"],
    closingTitle: "We Will Arrive In Less Than 30-minutes.",
    closing: "Schedule an emergency commercial plumber through our online calendar.",
    images: [`${baseServices}p19.jpeg.webp`, `${baseServices}p20.jpeg.webp`, `${baseServices}p21.jpeg.webp`],
  },
  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    eyebrow: "Insured And Licensed Plumbers You Can Trust",
    intro: ["Need Commercial Plumber in NYC?Call us now at 347-502-6441 for24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.", "Or you can schedule us to come in30 minutes. View our online calendar.", "We are Top-Rated Plumbers. Check our reviews."],
    sectionTitle: "Rite Plumbing And Heating |your Trusted Commercial Plumbing Specialist",
    body: ["Rite Plumbing and Heating offers full-service commercial plumbing 24/7,7 days a week, 365 days a year, including holidays. Never worry, we can be there in 30 minutes.", "Your business deserves high-quality, prompt, and expert plumbing services. Expect nothing less form Rite Plumbing and Heating. We have decades of commercial plumbing experience with New York City, Queens, Brooklyn,and Manhattan."],
    listTitle: "Our Specialties:",
    bullets: ["Restaurant Plumbing", "Office spaces Plumbing", "Apartment Remodeling Plumbing", "Hotel Plumbing", "Commercial Plumbing Repair, Integration and New Construction", "Around the Clock Plumbing Services for Property Management", "School and University Plumbing Services", "Grocery Store Plumbing", "And More!"],
    closingTitle: "We Are Available 24/7, 7 Days A Week",
    closing: "We offer free estimates and no-hassle guarantees.",
    images: [`${baseServices}commercial-plumbing-image-1.jpg.webp`, `${baseServices}p22.jpeg.webp`, `${baseServices}p23.jpeg.webp`],
  },
  {
    slug: "residential-plumbing-services-repairs",
    title: "Residential Plumbing Services NYC",
    eyebrow: "We Are Available 24/7, 7 Days A Week",
    intro: ["Need Residential Plumbing in NYC? Call us now at347-502-6441 for 24/7 Emergency Plumbing Service in QUEENS, BROOKLYN, AND MANHATTAN.", "Or you can schedule us to come in30 minutes. View our online calendar."],
    sectionTitle: "Residential Plumbing And Heating",
    body: ["Get honest, free estimates when choosing Rite Plumbing and Heating. Whether it be in the middle of the night or early morning, we are here 24 hours a day, 7 days a week to serve you.", "Drain Cleaning, Water Heater Repair or Replacement, Toilet and Bathroom Plumbing Repair and Faucet Replacement, and so much more!"],
    listTitle: "Residential Services Include:",
    bullets: ["Water Heater Installations", "Tankless Water Heaters", "Clogged Toilet Repairs", "Clogged Drains", "Gas Leaks", "Shower Repairs", "Garbage Disposals", "Faucet Fixtures and Sinks", "Sump Pumps"],
    closingTitle: "Trust our quality for a better plumbing experience.",
    closing: "Experience Peace of Mind with Rite Plumbing and Heating.",
    images: [`${baseServices}residential-plumbing-services-repairs-1.jpg.webp`, `${baseServices}Rite-Plumbing-20230204-003-1920x1280.jpg.webp`, `${baseServices}faucet-fixture-sink-plumbing-and-installation-repair2-1920x1372.jpg.webp`],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
