// All business facts for the Florida site live here. Update this file and every page follows.
import type { ImageMetadata } from 'astro';
import p from './photos';

export const business = {
  name: 'G&G Rooter',
  legalName: 'G&G Rooter LLC',
  phoneDisplay: '(239) 994-0524',
  phoneHref: 'tel:+12399940524',
  phoneE164: '+1-239-994-0524',
  url: 'https://fl.gandgrooter.com',
  mainSite: 'https://www.gandgrooter.com',
  region: 'Lee County, FL',
  regionLong: 'Lee County, Florida',
  hours: 'Available 24/7',
  owner: 'Kory Garczynski',
  years: '25+',
  rating: '4.9',
  social: {
    Facebook: 'https://www.facebook.com/gandgrooter/',
    Instagram: 'https://www.instagram.com/ggrooter',
    LinkedIn: 'https://www.linkedin.com/in/g-g-rooter-70ba72b8',
  },
  // Florida Google Business Profile. Leave blank until the profile is live; the
  // review button and map link stay hidden while these are empty.
  googleReviewUrl: '',
  googleMapsUrl: '',
  // Online card payments. Paste a Stripe or Square payment link here to show a
  // "Pay online" button on the payments page. Blank means the page collects
  // invoice details and the office follows up.
  paymentUrl: '',
  // Keep false until the site is signed off. While false, every page is noindex
  // and robots.txt blocks crawlers.
  launch: false,
  // Google Analytics 4 measurement ID (G-XXXXXXX). Blank means no tracking code.
  gaId: '',
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  card: string;
  image: ImageMetadata;
  imageAlt: string;
  title: string;
  description: string;
  h1: [string, string];
  video: string;
  poster: ImageMetadata;
  signs: string;
  bannerTitle: [string, string];
  banner: ImageMetadata;
  bannerAlt: string;
  body: [string, string];
  sectionLabel: string;
  sectionTitle: string;
  items: { name: string; text: string; image: ImageMetadata; alt: string }[];
  areasLabel: [string, string];
};

export const services: Service[] = [
  {
    slug: 'drain-sewer-cleaning-services',
    name: 'Drain & Sewer Cleaning',
    short: 'Drain & Sewer Cleaning',
    card: 'Clear clogged drains, slow drains, floor drains, kitchen drains, and main sewer backups.',
    image: p.drainMachine,
    imageAlt: 'Technician running a drain cleaning machine under a sink in Lee County, FL',
    title: 'Drain and Sewer Cleaning in Cape Coral & Fort Myers, FL',
    description: 'G&G Rooter provides drain and sewer cleaning in Cape Coral, Fort Myers, and all of Lee County, FL. Fast help for clogged drains, slow drains, and sewer backups. Open 24/7.',
    h1: ['Drain & Sewer Cleaning', 'Services in Cape Coral & Fort Myers, FL'],
    video: '/media/hero-drain.mp4',
    poster: p.heroDrain,
    signs: 'Signs You Need Drain or Sewer Cleaning',
    bannerTitle: ['Get Your Drains', 'Flowing Again'],
    banner: p.drainBanner,
    bannerAlt: 'Drain cleaning machine clearing a clogged drain line',
    body: [
      'Drain and sewer issues can get worse fast. If water is draining slowly, backing up, or leaving behind sewer odors, call G&G Rooter.',
      'We help clear clogged drains, floor drains, kitchen drains, bathroom drains, bathtub drains, and main sewer line backups throughout Lee County.',
    ],
    sectionLabel: 'Drain & Sewer Cleaning Services',
    sectionTitle: 'We Handle Clogged Drains, Sewer Backups & Slow Drains',
    items: [
      { name: 'Slow or Clogged Drains', text: 'Help for slow sinks, clogged tubs, shower drains, laundry drains, bathroom drains, and kitchen drain clogs.', image: p.clogSink, alt: 'Bathroom sink backed up with dirty water from a clogged drain' },
      { name: 'Main Sewer Line Backups', text: 'Service for sewer line backups, multiple slow drains, water backing up, sewer odors, and main line blockage concerns.', image: p.mainLine, alt: 'Drain cable pulling debris out of a main sewer line cleanout' },
      { name: 'Floor Drain Issues', text: 'Help for floor drain backups, standing water near floor drains, laundry and utility room drains, and garage drain problems.', image: p.floorDrain, alt: 'Technician clearing a floor drain with a drain cleaning machine' },
      { name: 'Recurring Drain Problems', text: 'If the same drain keeps clogging, gurgling, or smelling bad, G&G Rooter can clean the line and recommend next steps if inspection is needed.', image: p.recurring, alt: 'Plumber working on a sink drain that keeps clogging' },
    ],
    areasLabel: ['Drain and Sewer', 'Cleaning Service Areas'],
  },
  {
    slug: 'sewer-inspection-services',
    name: 'Sewer Inspection Services',
    short: 'Sewer Inspection',
    card: 'Find blockages, roots, breaks, and sewer line issues with camera inspection service.',
    image: p.cameraInspection,
    imageAlt: 'Technician running a sewer camera inspection outside a home in Lee County, FL',
    title: 'Sewer Camera Inspection in Cape Coral & Fort Myers, FL',
    description: 'Need a sewer inspection in Cape Coral, Fort Myers, or anywhere in Lee County, FL? G&G Rooter provides sewer camera inspections, line locating, and backup checks.',
    h1: ['Sewer Inspection Services', 'in Cape Coral & Fort Myers, FL'],
    video: '/media/hero-sewer.mp4',
    poster: p.heroSewer,
    signs: 'Signs You Need a Sewer Inspection',
    bannerTitle: ['Find the Issue', 'Without Guessing'],
    banner: p.cameraMonitor,
    bannerAlt: 'Sewer inspection camera monitor showing the inside of a drain line',
    body: [
      'Recurring backups, sewer odors, slow drains, or gurgling sounds can point to a problem inside the sewer line.',
      'G&G Rooter provides sewer camera inspections and sewer line locating to help identify blockages, roots, breaks, and problem areas throughout Lee County.',
    ],
    sectionLabel: 'Sewer Inspection Services',
    sectionTitle: 'We Locate Sewer Line Problems Before They Get Worse',
    items: [
      { name: 'Sewer Camera Inspections', text: 'Camera inspections help locate blockages, buildup, roots, breaks, and problem areas inside the sewer line.', image: p.cameraInspection, alt: 'Sewer camera reel and monitor set up for a line inspection' },
      { name: 'Recurring Sewer Backups', text: 'If the same drain or sewer line keeps backing up, an inspection can help find what is causing the repeat issue.', image: p.floorDrain, alt: 'Technician checking a drain that keeps backing up' },
      { name: 'Sewer Line Locating', text: 'Locate sewer lines and problem areas before cleanup, maintenance, or next-step planning.', image: p.cameraKit, alt: 'Sewer inspection camera kit used to locate a sewer line' },
      { name: 'Roots, Breaks & Blockages', text: 'Find signs of roots, buildup, breaks, or obstructions that may be slowing your sewer line.', image: p.mainLine, alt: 'Roots and debris pulled from a blocked sewer line' },
    ],
    areasLabel: ['Sewer Inspection', 'Service Areas'],
  },
  {
    slug: 'sewage-water-damage-clean-up-services',
    name: 'Sewage & Water Damage Cleanup',
    short: 'Sewage & Water Cleanup',
    card: 'Cleanup help for sewer backups, standing water, flooded rooms, and contaminated areas.',
    image: p.waterExtraction,
    imageAlt: 'Crew extracting standing water with air movers after water damage in Lee County, FL',
    title: 'Sewage and Water Damage Cleanup in Cape Coral & Fort Myers, FL',
    description: 'G&G Rooter provides sewage and water damage cleanup in Cape Coral, Fort Myers, and all of Lee County, FL. Fast help for sewer backups, standing water, and flooding. Open 24/7.',
    h1: ['Sewage & Water Cleanup', 'Services in Cape Coral & Fort Myers, FL'],
    video: '/media/hero-sewer.mp4',
    poster: p.heroSewer,
    signs: 'Signs You Need Sewage or Water Cleanup',
    bannerTitle: ['Get Cleanup', 'Help Fast!'],
    banner: p.contaminated,
    bannerAlt: 'Water cleanup equipment drying a floor after a sewage backup',
    body: [
      'Sewage backups and standing water can spread quickly. If water or waste is in your bathroom, kitchen, laundry room, garage, or living space, call G&G Rooter.',
      'We help with sewer backup cleanup, standing water, flooded rooms, contaminated water, and water damage cleanup throughout Lee County.',
    ],
    sectionLabel: 'Sewage & Water Cleanup Services',
    sectionTitle: 'We Help With Sewer Backups, Standing Water & Water Damage',
    items: [
      { name: 'Sewer Backup Cleanup', text: 'Cleanup help when sewage backs up into floor drains, tubs, showers, bathrooms, or living areas.', image: p.sewerBackup, alt: 'Drain machine and cleanup equipment at a sewer backup' },
      { name: 'Standing Water Issues', text: 'Help for standing water, wet floors, flooded rooms, utility rooms, floor drain overflows, and storm water that got inside.', image: p.standingWater, alt: 'Wet vacuum removing standing water from a flooded floor' },
      { name: 'Contaminated Water Cleanup', text: 'Cleanup support for water affected by sewer backups, overflows, drain issues, or unsanitary conditions.', image: p.contaminated, alt: 'Technician cleaning up contaminated water with extraction equipment' },
      { name: 'Water Damage Cleanup', text: 'Help reduce moisture, clean affected areas, and limit further damage after water or sewage enters the space.', image: p.waterExtraction, alt: 'Air movers drying a room after water damage' },
    ],
    areasLabel: ['Sewage and', 'Water Cleanup Service Areas'],
  },
  {
    slug: 'mold-mitigation-services',
    name: 'Mold Mitigation Services',
    short: 'Mold Mitigation',
    card: 'Help with mold concerns caused by moisture, water damage, flooding, or sewer backups.',
    image: p.moldTech,
    imageAlt: 'Technician in protective gear treating mold on a wall in Lee County, FL',
    title: 'Mold Mitigation in Cape Coral & Fort Myers, FL',
    description: 'G&G Rooter provides mold mitigation in Cape Coral, Fort Myers, and all of Lee County, FL. Help for mold caused by humidity, water damage, flooding, or sewer backups.',
    h1: ['Mold Mitigation Services', 'in Cape Coral & Fort Myers, FL'],
    video: '/media/hero-mold.mp4',
    poster: p.heroMold,
    signs: 'Signs You Need Mold Mitigation',
    bannerTitle: ['Address Mold', 'Concerns Fast!'],
    banner: p.moldContainment,
    bannerAlt: 'Mold mitigation technician working inside a sealed containment area',
    body: [
      'Mold can show up after water damage, sewer backups, flooding, or ongoing moisture problems. If you see mold, smell musty odors, or notice damp areas that will not dry, call G&G Rooter.',
      'We help with mold mitigation for homes and businesses throughout Cape Coral, Fort Myers, and the rest of Lee County.',
    ],
    sectionLabel: 'Mold Mitigation Services',
    sectionTitle: 'We Help With Mold, Moisture & Water Damage Concerns',
    items: [
      { name: 'Visible Mold Concerns', text: 'Help for visible mold on walls, ceilings, floors, closets, utility rooms, and moisture-prone areas.', image: p.ceilingStain, alt: 'Water stain and mold spots on a ceiling' },
      { name: 'Mold After Water Damage', text: 'Mold can develop after standing water, flooding, leaks, or moisture that was not fully dried.', image: p.moldWater, alt: 'Mold growth near a shower fixture after a leak' },
      { name: 'Humidity & Hidden Moisture', text: 'Help for mold concerns in closets, laundry rooms, garages, attics, and other spots where damp air or a slow leak keeps things wet.', image: p.moldWall, alt: 'Mold and moisture damage along the bottom of a block wall' },
      { name: 'Mold After Sewer Backups', text: 'Mold mitigation support after sewer backups, sewage cleanup, contaminated water, or damp affected areas.', image: p.moldSewer, alt: 'Floor damaged by moisture and mold after a sewer backup' },
    ],
    areasLabel: ['Mold Mitigation', 'Service Areas'],
  },
];

export const serviceHref = (s: Service) => `/${s.slug}/`;

export const moreNav = [
  { href: '/make-a-payment/', label: 'Payments' },
  { href: '/about/', label: 'About' },
  { href: '/employment/', label: 'Employment' },
  { href: '/faqs/', label: 'FAQs' },
  { href: '/contact/', label: 'Contact Us' },
];

export const serviceOptions = ['Drain and Sewer Cleaning', 'Sewer Inspection', 'Sewage and Water Damage Cleanup', 'Mold Mitigation', 'General Question', 'Not Sure'];
export const urgencyOptions = ['HELP ASAP', 'Today', 'This Week'];

export const marquee = ['24-Hour Service 7 Days a Week', 'Same-Day Service Available', 'Drain & Sewer Cleaning', 'Sewer Inspections', 'Sewage & Water Cleanup', 'Mold Mitigation', 'Call Now'];

export const highlights = [`${business.years} years of drain and sewer experience`, 'Same-day service available', 'Fully insured, family-owned company', `${business.rating}★ Google rating`];

// Customer reviews carried over from the main G&G Rooter site. Locations are
// left off on purpose (see docs/GG_Rooter_Florida_Website_To-Do.pdf).
export const reviews = [
  { quote: 'G&G Rooter showed up fast, cleared our drain, and explained everything before leaving the space clean afterward. Thank you guys!', who: 'Mark T.' },
  { quote: 'Our kitchen drain kept backing up, and G&G Rooter cleared it quickly with honest communication throughout the service.', who: 'Ashley B.' },
  { quote: 'The sewer camera inspection gave us answers, and G&G Rooter explained the issue without making the process confusing.', who: 'Rachel K.' },
  { quote: 'We had a sewer backup, and G&G Rooter responded quickly, handled the mess, and stayed professional during service.', who: 'Dan R.' },
  { quote: 'Water came up through our floor drain, and G&G Rooter helped get the cleanup handled quickly and professionally!', who: 'Megan L.' },
  { quote: 'After moisture turned into mold concerns, G&G Rooter helped us understand and address the issue right away.', who: 'Brian S.' },
];

export const why = [
  { name: `${business.years} Years of Experience`, text: 'Hands-on sewer and drain cleaning experience for clogged drains, backups, inspections, cleanup, and mold concerns.', icon: 'award' },
  { name: 'Fast Response Times', text: 'When drains back up or water spreads, G&G Rooter is ready to respond quickly across Lee County, 24 hours a day.', icon: 'bolt' },
  { name: 'Fully Insured, Family-Owned', text: 'A family-owned company that carries full insurance, so you know who is in your home and who stands behind the work.', icon: 'shield' },
  { name: 'Focused Service Team', text: 'We explain what we find before we start, give you a free quote, and leave the work area clean when we’re done.', icon: 'tools' },
];

export const faqGroups = [
  {
    title: 'Drain and Sewer FAQs',
    items: [
      { q: 'Is there a difference between drain cleaning and sewer cleaning?', a: ['Yes. Drain cleaning usually focuses on clogs in specific fixtures like sinks, tubs, showers, or floor drains.', 'Sewer cleaning focuses on the main sewer line that carries wastewater away from the property.'] },
      { q: 'What are signs I need drain or sewer cleaning?', a: ['Common signs include slow drains, recurring clogs, sewer odors, gurgling sounds, water backing up, or needing to use a plunger often.'] },
      { q: 'Why do my drains keep clogging?', a: ['Recurring clogs can be caused by grease, hair, soap buildup, debris, roots, or a deeper sewer line issue. If the same drain keeps clogging, call G&G Rooter.'] },
      { q: 'What can I do to prevent drain clogs?', a: ['Avoid pouring grease, oils, large food particles, wipes, or debris down drains. Use drain screens in sinks, tubs, and showers to catch hair and buildup.'] },
      { q: 'Should I use chemical drain cleaner?', a: ['Chemical drain cleaners may not solve deeper clogs and can be harsh on some drain systems. If a clog keeps coming back, call for drain or sewer cleaning.'] },
      { q: 'Do you work on homes with septic systems?', a: ['Yes. Plenty of homes in Lee County use a septic tank instead of city sewer. We clear and inspect the drain lines that run from the house. If the tank itself needs pumping, we’ll tell you.'] },
    ],
  },
  {
    title: 'Sewer Backup and Inspection FAQs',
    items: [
      { q: 'What should I do if I have a sewer backup?', a: ['Stop using water and call G&G Rooter right away. Avoid running sinks, showers, laundry, dishwashers, or toilets until the issue is checked.'] },
      { q: 'Why is water backing up into my tub, shower, or floor drain?', a: ['Water backing up into the lowest drains in the house can point to a main sewer line blockage or backup. Call before the issue spreads.'] },
      { q: 'When should I schedule a sewer inspection?', a: ['Schedule a sewer inspection if you have recurring backups, sewer odors, gurgling drains, repeated clogs, or unknown sewer line issues.'] },
      { q: 'What does a sewer camera inspection show?', a: ['A sewer camera inspection can help locate blockages, roots, buildup, breaks, and problem areas inside the sewer line.'] },
      { q: 'Can a sewer inspection help with recurring backups?', a: ['Yes. If backups keep happening, a sewer inspection can help identify whether the issue is deeper inside the line.'] },
    ],
  },
  {
    title: 'Sewage, Water Cleanup and Mold FAQs',
    items: [
      { q: 'Is a sewer backup dangerous?', a: ['Yes. Sewage backups can contain contaminated water. Avoid contact with affected areas and call G&G Rooter quickly.'] },
      { q: 'Can G&G Rooter help with sewage cleanup?', a: ['Yes. G&G Rooter helps with sewer backup cleanup, contaminated water, flooded rooms, and affected areas caused by sewage or water damage.'] },
      { q: 'Can G&G Rooter help with water damage cleanup?', a: ['Yes. G&G Rooter helps with standing water, flooded rooms, water damage cleanup, and moisture concerns after backups, leaks, or storms.'] },
      { q: 'What causes mold after water damage?', a: ['Mold can grow when moisture remains after water damage, flooding, sewer backups, leaks, or damp conditions that do not dry properly. Florida humidity can make it harder for wet areas to dry out on their own.'] },
      { q: 'When should I call for mold mitigation?', a: ['Call if you see visible mold, smell musty odors, notice damp areas, or recently had water damage, flooding, or a sewer backup.'] },
    ],
  },
];

export const positions = ['Lead Drain Technician', 'Technician Helper / Apprentice', 'Excavator / Laborer', 'Office / Dispatch'];
export const experienceOptions = ['No experience (Willing to learn)', 'Less than 1 year', '1 to 3 years', '3 to 5 years', '5+ years'];
export const startOptions = ['Immediately', 'Within 1 week', 'Within 2 weeks', 'I need to give notice to my current employer'];
