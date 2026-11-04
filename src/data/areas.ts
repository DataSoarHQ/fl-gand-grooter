// One entry per service area page. Adding an entry here creates the page.
// Local text sticks to geography and general housing notes. Don't add claims
// about specific local jobs, response times or reviews unless G&G supplies them.
type Setting = 'mixed' | 'septic' | 'coastal' | 'established';

export type Area = {
  name: string;
  slug: string;
  intro: string;
  local: string;
  setting: Setting;
  nearby: string[];
};

// General notes by setting. Worded as guidance, not as facts about any one street.
export const settingNotes: Record<Setting, { title: string; text: string }> = {
  mixed: {
    title: 'Sewer or septic, we can help',
    text: 'Some homes in this part of Lee County are connected to city sewer and others still use a septic tank. Let us know which you have when you call. A slow drain can mean something different on a septic system than on a sewer line, and knowing up front helps us bring the right equipment.',
  },
  septic: {
    title: 'Drain help for homes on septic',
    text: 'Larger lots out this way often mean a private septic system instead of a city sewer line. If several drains slow down at once, toilets gurgle, or you notice odors near the tank, call us. We clear and camera-inspect the lines between the house and the tank, and we’ll tell you if the tank itself needs pumping.',
  },
  coastal: {
    title: 'Water, storms, and moisture near the Gulf',
    text: 'Homes close to the water deal with heavy summer rain, storm surge risk, and humidity that keeps wet areas from drying. Along with drain and sewer work, we help with standing water, water damage cleanup, and mold concerns after a storm, leak, or backup.',
  },
  established: {
    title: 'Older homes and older drain lines',
    text: 'Established neighborhoods often have drain and sewer lines that have been in the ground for decades. When a clog keeps coming back, a sewer camera inspection shows the condition of the line so you can decide on next steps with real information instead of a guess.',
  },
};

export const areas: Area[] = [
  {
    name: 'Cape Coral', slug: 'cape-coral', setting: 'mixed',
    intro: 'Cape Coral is the largest city in Lee County, with homes spread across hundreds of miles of canals between the Caloosahatchee River and Matlacha Pass. G&G Rooter clears clogged drains, cleans sewer lines, and handles water cleanup for homes and businesses across the Cape.',
    local: 'From older homes in the southeast Cape to newer construction farther north, drains here back up for the same reasons they do anywhere: grease, wipes, hair, buildup, and roots. We find the cause, clear the line, and explain what we found.',
    nearby: ['North Fort Myers', 'Fort Myers', 'Matlacha', 'Pine Island Center'],
  },
  {
    name: 'Fort Myers', slug: 'fort-myers', setting: 'established',
    intro: 'Fort Myers is the Lee County seat, stretching along the south bank of the Caloosahatchee River from the downtown River District out to newer neighborhoods off Colonial Boulevard and Daniels Parkway. G&G Rooter provides drain cleaning, sewer cleaning, and sewer camera inspections across the city.',
    local: 'Homes, apartments, restaurants, and offices all call us for kitchen drain clogs, main line backups, and floor drain problems. When a backup affects more than one fixture, we start by checking the main line.',
    nearby: ['Cape Coral', 'McGregor', 'Tice', 'Villas'],
  },
  {
    name: 'Bonita Springs', slug: 'bonita-springs', setting: 'coastal',
    intro: 'Bonita Springs sits at the southern end of Lee County, along the Imperial River and the Gulf beaches near the Collier County line. G&G Rooter serves Bonita Springs homes, condos, and businesses with drain and sewer cleaning, inspections, and water cleanup.',
    local: 'Whether you live near the river, out by Bonita Beach, or in a community off Bonita Beach Road, a backed-up drain or a wet floor needs attention quickly. Call any time, day or night.',
    nearby: ['Estero', 'San Carlos Park', 'Fort Myers Beach'],
  },
  {
    name: 'Lehigh Acres', slug: 'lehigh-acres', setting: 'septic',
    intro: 'Lehigh Acres is a large community east of Fort Myers, with single-family homes spread across a wide grid of streets. G&G Rooter clears clogged drains, cleans and inspects drain lines, and helps with water cleanup for Lehigh Acres homeowners.',
    local: 'With so many single-family homes, most calls here are kitchen and bathroom clogs, slow drains throughout the house, and lines that back up after heavy use. We clear the line and let you know if anything else needs a look.',
    nearby: ['Buckingham', 'Tice', 'Fort Myers'],
  },
  {
    name: 'North Fort Myers', slug: 'north-fort-myers', setting: 'mixed',
    intro: 'North Fort Myers sits across the Caloosahatchee from downtown Fort Myers, between Cape Coral and the rural land to the north and east. G&G Rooter handles drain and sewer cleaning, camera inspections, and cleanup for homes and businesses throughout North Fort Myers.',
    local: 'Neighborhoods here range from single-family homes to manufactured home communities, and the drain setup can vary from one to the next. Tell us about your home when you call, and we’ll plan the visit around it.',
    nearby: ['Cape Coral', 'Fort Myers', 'Matlacha'],
  },
  {
    name: 'Estero', slug: 'estero', setting: 'mixed',
    intro: 'Estero is a village between Fort Myers and Bonita Springs, along the Estero River and US 41. G&G Rooter provides drain cleaning, sewer cleaning, inspections, and water damage cleanup for Estero homes, communities, and businesses.',
    local: 'Many Estero homes are in planned communities, so a clog in your line is often yours to fix even when the street is maintained by an association. We work directly with homeowners and can talk with your community manager if needed.',
    nearby: ['Bonita Springs', 'San Carlos Park', 'Fort Myers Beach'],
  },
  {
    name: 'San Carlos Park', slug: 'san-carlos-park', setting: 'mixed',
    intro: 'San Carlos Park is a residential community south of Fort Myers, between US 41 and I-75. G&G Rooter clears clogged drains, cleans sewer lines, and handles water cleanup for homes and businesses in San Carlos Park.',
    local: 'Most of the homes here are single-family houses, and the usual trouble spots are kitchen sinks, laundry drains, and main line backups. If more than one drain is slow, call us before it backs up.',
    nearby: ['Estero', 'Villas', 'Fort Myers', 'Bonita Springs'],
  },
  {
    name: 'Iona', slug: 'iona', setting: 'coastal',
    intro: 'Iona sits in southwest Lee County between McGregor Boulevard and the water, on the way to the Sanibel Causeway and Fort Myers Beach. G&G Rooter serves Iona with drain and sewer cleaning, sewer inspections, and water and mold cleanup.',
    local: 'With canals, the river, and the Gulf close by, Iona homes deal with storm water and humidity as well as everyday clogs. We can clear the drain and help with any water left behind.',
    nearby: ['McGregor', 'Harlem Heights', 'Fort Myers Beach', 'Cypress Lake'],
  },
  {
    name: 'Villas', slug: 'villas', setting: 'established',
    intro: 'Villas is a community in south Fort Myers, near US 41. G&G Rooter clears clogged drains, cleans sewer lines, and runs camera inspections for homes, condos, and businesses in Villas.',
    local: 'Condos and multi-unit buildings here can share drain lines, so a backup in one unit may start somewhere else. A camera inspection helps find where the problem is before anyone pays to guess.',
    nearby: ['Cypress Lake', 'Whiskey Creek', 'San Carlos Park', 'Fort Myers'],
  },
  {
    name: 'Cypress Lake', slug: 'cypress-lake', setting: 'established',
    intro: 'Cypress Lake is an established community in south Fort Myers, around Cypress Lake Drive and Summerlin Road. G&G Rooter provides drain cleaning, sewer cleaning, inspections, and cleanup for Cypress Lake homes and businesses.',
    local: 'Mature trees are part of what makes Cypress Lake neighborhoods pleasant, and roots are a common reason older drain lines slow down. If a clog keeps coming back, ask us about a camera inspection.',
    nearby: ['Whiskey Creek', 'McGregor', 'Villas', 'Iona'],
  },
  {
    name: 'McGregor', slug: 'mcgregor', setting: 'established',
    intro: 'McGregor follows McGregor Boulevard along the Caloosahatchee in southwest Fort Myers, known for its long rows of royal palms. G&G Rooter serves McGregor homes and businesses with drain and sewer cleaning, camera inspections, and water and mold cleanup.',
    local: 'Some homes along McGregor have been here a long time, and their drain lines have too. When a backup happens, we find out whether it’s a simple clog or something deeper in the line.',
    nearby: ['Iona', 'Cypress Lake', 'Whiskey Creek', 'Fort Myers'],
  },
  {
    name: 'Fort Myers Beach', slug: 'fort-myers-beach', setting: 'coastal',
    intro: 'Fort Myers Beach is on Estero Island, between Estero Bay and the Gulf. G&G Rooter provides drain and sewer cleaning, inspections, and water damage and mold cleanup for homes, rentals, restaurants, and businesses on the island.',
    local: 'Many properties on the island have been rebuilt or repaired since Hurricane Ian. Whether your building is new or older, we can clear drains, check sewer lines with a camera, and help with water or moisture problems.',
    nearby: ['Iona', 'Harlem Heights', 'Estero', 'Bonita Springs'],
  },
  {
    name: 'Whiskey Creek', slug: 'whiskey-creek', setting: 'established',
    intro: 'Whiskey Creek is a residential neighborhood in south Fort Myers, near McGregor Boulevard and Cypress Lake. G&G Rooter clears clogged drains, cleans sewer lines, and handles cleanup for Whiskey Creek homeowners.',
    local: 'Kitchen clogs, slow tubs, and the occasional main line backup are the calls we see most in neighborhoods like this. We explain the problem before we start and leave the space clean when we’re done.',
    nearby: ['McGregor', 'Cypress Lake', 'Villas', 'Fort Myers'],
  },
  {
    name: 'Tice', slug: 'tice', setting: 'mixed',
    intro: 'Tice is a community just east of Fort Myers, along Palm Beach Boulevard and the Caloosahatchee River. G&G Rooter provides drain cleaning, sewer cleaning, and water cleanup for homes and businesses in Tice.',
    local: 'Homes here range from older houses near the river to newer builds, so drain setups vary. Let us know what you’re seeing, and we’ll come ready to clear the line and check what’s behind it.',
    nearby: ['Fort Myers', 'Lehigh Acres', 'Buckingham'],
  },
  {
    name: 'Buckingham', slug: 'buckingham', setting: 'septic',
    intro: 'Buckingham is a rural area east of Fort Myers, between Tice and Lehigh Acres, with homes on larger lots and acreage. G&G Rooter serves Buckingham with drain cleaning, drain line inspections, and water cleanup.',
    local: 'Being out past the city doesn’t mean waiting days for help. We come out for clogged drains, slow lines, and water problems, and we’re available 24/7.',
    nearby: ['Lehigh Acres', 'Tice', 'Fort Myers'],
  },
  {
    name: 'Pine Manor', slug: 'pine-manor', setting: 'established',
    intro: 'Pine Manor is a small residential community in central Lee County, just outside the Fort Myers city limits. G&G Rooter clears clogged drains, cleans sewer lines, and runs camera inspections for Pine Manor homes.',
    local: 'Smaller, established neighborhoods like Pine Manor often have drain lines that have been in place for years. If a drain backs up more than once, a camera inspection can show why.',
    nearby: ['Fort Myers', 'Villas', 'Cypress Lake', 'Whiskey Creek'],
  },
  {
    name: 'Harlem Heights', slug: 'harlem-heights', setting: 'coastal',
    intro: 'Harlem Heights is a neighborhood in southwest Fort Myers, near Iona and the road out to the beaches. G&G Rooter provides drain and sewer cleaning, inspections, and water cleanup for Harlem Heights homes.',
    local: 'Close to the water, this part of the county sees heavy summer rain and plenty of humidity. We help with clogged drains and backups, and with water or mold problems that follow.',
    nearby: ['Iona', 'McGregor', 'Fort Myers Beach', 'Cypress Lake'],
  },
  {
    name: 'St. James City', slug: 'st-james-city', setting: 'coastal',
    intro: 'St. James City is at the southern tip of Pine Island, with canal-front homes and quick access to the water. G&G Rooter makes the drive for drain and sewer cleaning, line inspections, and water and mold cleanup in St. James City.',
    local: 'Island homes can be a long way from the nearest service shop. Call us for clogged drains, backups, or water problems, and we’ll tell you when to expect us.',
    nearby: ['Pine Island Center', 'Matlacha', 'Cape Coral'],
  },
  {
    name: 'Pine Island Center', slug: 'pine-island-center', setting: 'septic',
    intro: 'Pine Island Center sits in the middle of Pine Island, where Pine Island Road meets Stringfellow Road, surrounded by homes, nurseries, and groves. G&G Rooter serves Pine Island Center with drain cleaning, line inspections, and water cleanup.',
    local: 'Island living means fewer service options close by. We come out to Pine Island for clogged drains, slow lines, and water problems, any day of the week.',
    nearby: ['Matlacha', 'St. James City', 'Cape Coral'],
  },
  {
    name: 'Matlacha', slug: 'matlacha', setting: 'coastal',
    intro: 'Matlacha is a small fishing village on the road between Cape Coral and Pine Island, known for its brightly painted shops and galleries. G&G Rooter provides drain and sewer cleaning, inspections, and water cleanup for Matlacha homes and businesses.',
    local: 'Shops, restaurants, and homes here sit right on the water. When a drain backs up or water gets in, call us and we’ll get it cleared and cleaned up.',
    nearby: ['Pine Island Center', 'Cape Coral', 'St. James City', 'North Fort Myers'],
  },
];

export const areaHref = (a: Area) => `/drain-cleaning-${a.slug}/`;
export const findArea = (name: string) => {
  const a = areas.find((x) => x.name === name);
  if (!a) throw new Error(`Unknown nearby area: ${name}`);
  return a;
};
