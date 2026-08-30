/* =========================================================================
   AK TOURS & TRAVELS — ALL WORDS, PRICES AND PHOTO NAMES LIVE IN THIS FILE.

   To change anything on the site, edit the text between the "quotes" below
   and save. Nothing else needs touching.

   THE THREE MOST COMMON EDITS:
   1. Phone number  -> change `phone` just below (one place, used everywhere).
   2. A tour price  -> find the tour, change its `priceFrom`.
   3. Any wording   -> find the sentence, change it between the quotes.

   Lines marked CONFIRM are guesses or placeholders — check them with Pooja
   before relying on them. Full instructions in README.md.
   ========================================================================= */

const CONTENT = {

  /* ---- The one and only phone number. Format: +91 then 10 digits. ---- */
  phone: "+918097004157",

  email: "hello@example.com", /* REPLACE with the real address */

  siteName: "AK Tours & Travels",
  siteUrl: "https://ryanl-byte.github.io/ak-tours-travels/",

  /* First line of the WhatsApp chat when someone taps a button. */
  whatsappGreeting: "Hi Pooja! I found AK Tours & Travels online and I'd like to ask about a tour.",

  hero: {
    kicker: "Private tours · Mumbai",
    heading: "See Mumbai with someone who calls it home.",
    sub: "Small, private tours led by Pooja — a Mumbai native who grew up in Dharavi and has guided this city for years. No coach, no script, no crowd. Just her city, shown properly.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "Browse the tours",
    imageAlt: "Marine Drive's long curve at sunset, dark tetrapods in the foreground and the Mumbai skyline across the bay"
  },

  toursIntro: {
    kicker: "The tours",
    heading: "Ten ways into Mumbai.",
    sub: "Half-day walks, full-day escapes, food after dark. Every one is private by default, led by Pooja, and booked with a WhatsApp message — prices are confirmed in the chat before anything is fixed."
  },

  pooja: {
    kicker: "Meet your guide",
    heading: "This is Pooja's city. She'll lend it to you for a day.",
    paragraphs: [
      "Pooja was born and raised in Dharavi, in the middle of the city she now shows to visitors. She guided independently for years before putting her own name over the door — AK Tours & Travels is hers, and when you message, it's Pooja herself who answers.",
      "A day with her doesn't run on a script. It feels more like being shown around by a friend who happens to know everything: which vada pav stall is worth the queue, when the tide uncovers the causeway to Haji Ali, how to cross a Mumbai road without flinching. Mention that you love textiles, or trains, or quiet — she'll quietly rebuild the whole day around it.",
      "Every tour on this page is private by default: your party, her, and the city. Ask her anything before you book. That's rather the point of her."
    ],
    facts: [
      { label: "Home", value: "Dharavi, Mumbai" },
      { label: "Guiding", value: "Independent guide for years, now running her own company" },
      { label: "Languages", value: "English, Hindi, Marathi" } /* CONFIRM WITH POOJA */
    ],
    photoNote: "Photo of Pooja coming soon" /* Swap in a real photo: see README.md */
  },

  whyUs: {
    kicker: "Why book with us",
    heading: "Small on purpose.",
    points: [
      {
        title: "A guide who lives here",
        text: "You're not getting a franchise or a freelancer with a laminated flag. Pooja was born in this city, and the tours go where she genuinely goes."
      },
      {
        title: "Private and small",
        text: "Every tour is your party only by default. No strangers, no group pace, no waiting for the coach."
      },
      {
        title: "Flexible timings",
        text: "Early start to beat the heat, evening walk to catch the food stalls — tell Pooja what suits you and the day is planned around it."
      },
      {
        title: "Pickup and comfort",
        text: "Hotel pickup can usually be arranged, with a car and driver for the longer routes. Solo women travellers are especially welcome — you'll be with Pooja herself throughout."
        /* CONFIRM WITH POOJA: pickup coverage area and car arrangements */
      }
    ]
  },

  /* ---- Testimonials: SAMPLE TEXT ONLY. Replace all three with real guest
     reviews (and set sample: false) before promoting the site. ---- */
  testimonials: {
    kicker: "What guests say",
    heading: "Real reviews coming soon.",
    note: "These three are sample placeholders so you can see the layout — swap them for real reviews and change sample to false.",
    items: [
      { /* REPLACE with a real review */
        quote: "Sample review — replace me. Two or three sentences from a real guest about their day with Pooja go here.",
        name: "Guest name",
        origin: "Country",
        sample: true
      },
      { /* REPLACE with a real review */
        quote: "Sample review — replace me. The best reviews mention a specific moment: a stall, a story, a view they didn't expect.",
        name: "Guest name",
        origin: "Country",
        sample: true
      },
      { /* REPLACE with a real review */
        quote: "Sample review — replace me. Ask past guests on WhatsApp — two lines and a first name is all you need.",
        name: "Guest name",
        origin: "Country",
        sample: true
      }
    ]
  },

  faq: {
    kicker: "Good to know",
    heading: "Questions people actually ask.",
    items: [
      {
        q: "Where do you pick up from?",
        a: "Hotel pickup can usually be arranged — tell Pooja where you're staying when you message and she'll confirm the details and time. If your hotel is outside the pickup area, she'll suggest an easy meeting point instead." /* CONFIRM WITH POOJA: pickup coverage */
      },
      {
        q: "How do I pay?",
        a: "Cash (Indian rupees) or UPI on the day. You'll agree the price on WhatsApp before the tour, so there are no surprises — there's no online payment and no card machine." /* CONFIRM WITH POOJA: deposit policy, if any */
      },
      {
        q: "How big are the groups?",
        a: "There isn't one — tours are private by default, meaning your party only. Couples, families and small groups of friends all work; for bigger parties, message Pooja and she'll say honestly what's manageable."
      },
      {
        q: "What about the weather and monsoon?",
        a: "October to March is the driest, most comfortable stretch. The monsoon (roughly June to September) is dramatic and green, and most tours still run with small tweaks — though Elephanta ferries can pause in rough seas, and hill viewpoints trade views for mist. Pooja will tell you plainly what your dates mean."
      },
      {
        q: "What should I wear?",
        a: "Light, breathable clothes and comfortable shoes you can walk in. For temples, mosques and churches: shoulders and knees covered, and shoes come off at many doors — slip-ons make life easier. Each tour page lists anything extra."
      },
      {
        q: "I'm a woman travelling alone — is this for me?",
        a: "Yes. AK Tours & Travels is women-led: you'll be with Pooja herself from start to finish, and you're welcome to message her with any question at all before you decide."
      },
      {
        q: "What if I need to cancel?",
        a: "Plans change — message Pooja on WhatsApp as soon as you know and she'll be as flexible as she can. Agree the cancellation terms with her when you book." /* CONFIRM WITH POOJA: exact cancellation policy */
      }
    ]
  },

  contact: {
    kicker: "Get in touch",
    heading: "Booking is just a message.",
    text: "No booking engine, no forms — every tour starts as a WhatsApp chat with Pooja. Tell her your dates, who's coming, and what you're curious about.",
    responseNote: "Messages are answered personally, usually the same day (Indian time).", /* CONFIRM WITH POOJA */
    whatsappLabel: "WhatsApp Pooja",
    phoneLabel: "Or call",
    emailLabel: "Email"
  },

  footer: {
    line: "AK Tours & Travels — private, guide-led tours of Mumbai.",
    credit: "Photos are temporary placeholders from Unsplash photographers, credited in img/CREDITS.md, until Pooja's own tour photos take their place."
  },

  /* =======================================================================
     THE TOURS. Order here = order on the homepage.
     priceFrom: shown as "From ₹…" — replace ₹X,XXX with the real figure.
     ======================================================================= */
  tours: [

    {
      slug: "mumbai-city-tour",
      name: "Mumbai City Tour",
      tagline: "Mumbai's classics, walked with someone who grew up here",
      duration: "About 4–5 hours, with a full-day option",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "mumbai-city-tour-1",
      imageAlt: "The Gateway of India and the Taj Mahal Palace hotel seen from the water, boats crossing the harbour",
      card: "The classic Mumbai circuit, walked with Pooja — whose city this is. Stand under the basalt arch of the Gateway of India, look down on Dhobi Ghat, the open-air laundry that has worked for over a century, and hear why Marine Drive is called the Queen's Necklace. Add Crawford Market's clocktower, the Victorian Gothic front of Chhatrapati Shivaji Maharaj Terminus, and the hedge animals of the Hanging Gardens. Half day or full — your pace either way.",
      paragraphs: [
        "Start at the water. The Gateway of India went up in basalt and was finished in 1924; ferries still nose in and out beneath the arch, and the square in front fills with pigeons, photographers and school groups by mid-morning. Pooja grew up in this city, and she starts here because this is where Mumbai has greeted arrivals for about a century — by sea then, by taxi now.",
        "From there the route strings together the places every visitor asks about. At Chhatrapati Shivaji Maharaj Terminus — Victorian Gothic, a working railway station, on the UNESCO World Heritage list since 2004 — you watch commuters stream through a building that looks like a cathedral. Crawford Market, officially Mahatma Jyotiba Phule Mandai, still trades fruit and spices under its old clocktower; Pooja knows which stalls to stop at and what is in season.",
        "Then the contrast. At Mahalaxmi you look down over Dhobi Ghat, the open-air laundry that has washed the city's linen for more than a century — rows of washing pens, laundry strung out in the sun, and a system behind it all that Pooja will explain. Up on Malabar Hill, the Hanging Gardens give you terraced lawns, hedges clipped into animals, and a long view back over the city. You finish on Marine Drive, the curve of sea-front locals call the Queen's Necklace for the way its streetlights string out after dark.",
        "The core loop takes about half a day. If you would rather go slower — a proper lunch stop, more time in the market lanes — ask about the full-day version when you message. It is your tour: just you and your party, and the order can flex around the heat and the traffic."
      ],
      itinerary: [
        { title: "Gateway of India", detail: "Start beneath the basalt arch on the harbour, finished in 1924, with the ferries coming and going." },
        { title: "Chhatrapati Shivaji Maharaj Terminus", detail: "A Victorian Gothic railway station, UNESCO World Heritage since 2004 — and still a working one, so you see it in use." },
        { title: "Crawford Market", detail: "Officially Mahatma Jyotiba Phule Mandai: fruit, spices and the old clocktower building, with Pooja steering you to the right stalls." },
        { title: "Dhobi Ghat, Mahalaxmi", detail: "Look out over the vast open-air laundry that has been working for more than a century." },
        { title: "Hanging Gardens, Malabar Hill", detail: "Terraced gardens with hedge animals and a wide view over the city." },
        { title: "Marine Drive", detail: "End on the sweep of sea-front locals call the Queen's Necklace." }
      ],
      included: [
        "Pooja as your private guide from start to finish",
        "A route and pace planned around your party",
        "Hotel pickup and drop-off (details confirmed on WhatsApp)"
      ],
      excluded: [
        "Entry tickets where charged",
        "Meals and drinks",
        "Car with driver, where the route needs one (can be arranged — ask when booking)"
      ],
      bring: [
        "Comfortable walking shoes",
        "A hat and sunscreen — much of the route is in the open",
        "A bottle of water",
        "Some cash if you want to shop at Crawford Market"
      ],
      goodToKnow: [
        "Private by default — just Pooja and your party",
        "Timings are flexible; earlier starts beat the heat and the traffic",
        "The stops are spread across South Mumbai, so a car with driver is the comfortable way to do it",
        "Crawford Market is closed on Sundays — on a Sunday tour Pooja swaps in another stop",
        "CST is a working station; expect crowds around rush hour",
        "Dhobi Ghat is viewed from the overlook at Mahalaxmi"
      ],
      specialBox: null,
      needsConfirmation: [
        "Hotel pickup and drop-off — coverage area and any conditions",
        "Car with driver — included by default or arranged as an extra, and for which stops",
        "Full-day option — what it adds and its typical length",
        "Whether Dhobi Ghat is viewed from the Mahalaxmi overlook only or includes a closer visit"
      ],
      metaDescription: "See Mumbai's classics with Pooja, a local guide: Gateway of India, Dhobi Ghat, CST, Crawford Market, Marine Drive. Private tours, half or full day."
    },

    {
      slug: "elephanta-caves-tour",
      name: "Elephanta Caves Tour",
      tagline: "Across the harbour to the three faces of Shiva",
      duration: "About 5–6 hours, including the ferry both ways",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "elephanta-caves-tour-1",
      imageAlt: "The three-faced Trimurti sculpture of Shiva carved into the rock wall of the main Elephanta cave",
      card: "Board the morning ferry at the Gateway of India and cross the harbour to Gharapuri — Elephanta Island — in about an hour. At the top of about 120 steps are rock-cut cave temples, carved around the 5th to 7th centuries, now UNESCO World Heritage. The centrepiece is the Trimurti: three faces of Shiva, about six metres tall. Pooja guides just your party, at your pace, and has you back on the mainland by late afternoon. Note: closed Mondays.",
      paragraphs: [
        "The main cave at Elephanta has no doors. You walk in from full sun into a hall of stone columns, and for a moment you can't see much at all. Then your eyes adjust and the Trimurti comes out of the dark: three faces of Shiva, about six metres tall, carved around the 5th to 7th centuries. People have stood on this spot, doing what you're doing, for more than a thousand years.",
        "The day starts at the Gateway of India. You board the ferry beneath the arch and spend about an hour crossing the harbour, gulls trailing the boat, the city thinning to a line behind you. The island's own name is Gharapuri; the Portuguese renamed it after a stone elephant they found on the shore. From the jetty it's about 120 steps up to the caves, past stalls selling hats and carvings — keep your bag zipped; the monkeys here have quick hands.",
        "Inside, Pooja walks you round the panels at your pace — Shiva dancing, Shiva marrying Parvati, Shiva as half woman and half man — and tells you what the carvings meant then and what they mean to people now. The site is UNESCO World Heritage, but it doesn't feel like a museum. It feels like a hill somebody hollowed into a temple, which is what it is.",
        "The last ferries return late afternoon, so mornings work best. One date to fix first: the caves are closed on Mondays. Message Pooja on WhatsApp and sort a day that suits."
      ],
      itinerary: [
        { title: "Hotel pickup", detail: "Pooja collects you from your hotel, or meets you at the Gateway of India — whichever suits (pickup details to confirm)." },
        { title: "Gateway of India", detail: "Pick up ferry tickets and board beneath the arch, with the harbour opening out ahead." },
        { title: "The crossing", detail: "About an hour on the water — gulls trail the boat and the city thins to a grey line behind you." },
        { title: "Gharapuri jetty", detail: "Step off at the island; when it's running, a small train covers the flat stretch to the base of the steps." },
        { title: "The 120 steps", detail: "Climb past stalls selling hats, carvings and cold drinks — bags zipped, because the monkeys are watching." },
        { title: "The main cave", detail: "A pillared hall cut straight into the hillside and dedicated to Shiva, carved around the 6th century." },
        { title: "The Trimurti", detail: "Three faces of Shiva, about six metres tall, on the back wall — give your eyes a minute to find them in the dark." },
        { title: "Around the panels", detail: "Pooja walks you through the other carvings — Shiva dancing, Shiva marrying Parvati, Shiva as half woman and half man." },
        { title: "Ferry back", detail: "Catch a boat well before the last late-afternoon sailing, then it's back across the harbour and drop-off at your hotel." }
      ],
      included: [
        "Pooja as your private guide from pickup to drop-off",
        "A tour for your party only — no strangers, no group pace",
        "Hotel pickup and drop-off (details to confirm)"
      ],
      excluded: [
        "Ferry tickets",
        "Cave entry tickets",
        "Meals and drinks",
        "The island's small train, if you choose to ride it"
      ],
      bring: [
        "A hat and sunscreen — the steps and the cave forecourt are in full sun",
        "Water",
        "Comfortable shoes for about 120 steps",
        "A bag that zips shut, for phone, snacks and sunglasses",
        "Small change for the stalls on the way up"
      ],
      goodToKnow: [
        "The caves are closed on Mondays — we plan the tour around it",
        "It's about 120 steps from the jetty to the caves, with stalls to pause at on the way",
        "Monkeys here are bold: keep food, sunglasses and anything shiny zipped away",
        "Ferries run from morning and the last boats return late afternoon, so this is a daytime tour — mornings work best",
        "In the monsoon the sea can be rough and sailings sometimes pause — check with Pooja before you book"
      ],
      specialBox: null,
      needsConfirmation: [
        "Hotel pickup and drop-off — availability, pickup radius, and whether a car with driver is needed",
        "Exact ferry timings on the day, and whether sailings run during the monsoon season",
        "Whether Pooja buys ferry and entry tickets on your behalf on the day",
        "Whether the island's small jetty train is currently running"
      ],
      metaDescription: "Private Elephanta Caves tour with Mumbai guide Pooja: ferry from the Gateway of India to the six-metre Trimurti. Closed Mondays."
    },

    {
      slug: "city-dharavi-tour",
      name: "City + Dharavi Tour",
      tagline: "The postcard city, then the square mile that works",
      duration: "About 5–6 hours",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "city-dharavi-tour-1",
      imageAlt: "A potter's hand shaping wet clay on a spinning wheel in Kumbharwada, Dharavi's potters' quarter",
      card: "The morning covers the postcards — Gateway of India, Marine Drive, the Dhobi Ghat overlook. Then the part no other tour has: Dharavi on foot with Pooja, who was born and raised there. You'll see the working side most visitors never hear about — plastic recycling, leather workshops, potters' kilns, papads drying on rooftops — an economy whose turnover is often put at as much as a billion US dollars a year. No photography of people, ever.",
      paragraphs: [
        "Kumbharwada is the potters' quarter of Dharavi. The kilns there have been fired by the same families for generations, and rows of clay pots dry in the lanes before market day. A few streets away, sewing machines run in garment units, papads dry on rooftop racks, and workers in the recycling compounds sort plastic by colour and grade — a big share of Mumbai's plastic waste comes through here to start a second life. Add it all up and Dharavi's combined annual turnover is often estimated at as much as a billion US dollars. This walk is about that: work, trade and skill packed into less than a square mile.",
        "It matters who leads it. Pooja was born and raised in Dharavi. The workshops on the route belong to people she knows; the lanes are the ones she grew up in. That is also why one rule is firm: no photographs of people. These are homes and workplaces, not exhibits, and everyone here gets the courtesy you would expect on your own street. You visit workshops, never anyone's home, and you come as a guest.",
        "Before Dharavi, the morning covers the city's postcard side. You start at the Gateway of India by the harbour, drive the long curve of Marine Drive with the sea wall on one side and art deco flats on the other, and stop at the viewpoint above Dhobi Ghat, the open-air laundry where washing is beaten clean and hung to dry in rows of concrete pens. Pooja can usually arrange hotel pickup and a car with driver for the city stretch; confirm the details on WhatsApp when you book."
      ],
      itinerary: [
        { title: "Gateway of India", detail: "Start on the harbour front before the day's crowds build." },
        { title: "Marine Drive", detail: "Follow the long sea curve past the art deco flats, with a stop on the promenade." },
        { title: "Dhobi Ghat viewpoint", detail: "Look down over the open-air laundry, where washing is beaten clean in concrete pens and hung in long rows." },
        { title: "Into Dharavi", detail: "The drive north ends where the walk begins — Pooja's own neighbourhood, entered on foot as a guest." },
        { title: "Recycling compounds", detail: "Plastic is sorted by colour and grade, shredded and washed — a big share of Mumbai's plastic waste starts its second life in these rooms." },
        { title: "Leather workshops", detail: "Watch hides become bags, belts and jackets in small units whose goods sell far beyond the neighbourhood." },
        { title: "Kumbharwada", detail: "The potters' quarter — working kilns, wheels turning, and rows of clay pots drying in the lanes." },
        { title: "Garment and papad units", detail: "Sewing lines at full tilt, and papads drying on rooftop racks in the sun." },
        { title: "Chai to finish", detail: "Sit down for a cutting chai and ask Pooja anything you've been saving up." }
      ],
      included: [
        "Pooja as your guide for the whole route",
        "Private tour — your party only, never a crowd with a flag",
        "Flexible start time"
      ],
      excluded: [
        "Entry tickets, where a site charges them",
        "Meals and drinks",
        "Car and driver for the city stretch (can be arranged — ask when booking)"
      ],
      bring: [
        "Closed, comfortable shoes — lanes are narrow and surfaces uneven",
        "Light, modest clothing, plus a cap or scarf against the sun",
        "A water bottle",
        "A little cash for chai or anything you buy from a workshop"
      ],
      goodToKnow: [
        "No photography of people on the Dharavi walk — see the ground rules below",
        "You visit workshops and lanes, never anyone's home",
        "Mornings are cooler, and the running order can flex around your day",
        "Monsoon season (roughly June to September) can reshuffle the route",
        "Not suited to prams; some lanes are narrow with steps — ask about mobility needs"
      ],
      specialBox: {
        title: "How the Dharavi walk works",
        items: [
          "No photographs of people, full stop. These are homes and workplaces, not exhibits — everyone gets the same courtesy you'd expect on your own street.",
          "Private and small — just your party and Pooja, never a crowd with a flag.",
          "We visit workshops, kilns and trading lanes. We do not enter anyone's home.",
          "Pooja grew up here. The route follows people and places she knows, and it changes if a workshop asks for a quiet day.",
          "Bring questions — conversation is welcome; pointing cameras at people is not."
        ]
      },
      /* CONFIRM WITH POOJA: if a share of the tour fee goes back into community
         projects, say exactly what here — do not publish a vague claim. */
      communityNote: null,
      needsConfirmation: [
        "Does a share of the tour fee go back into community projects? If yes, state exactly what.",
        "Hotel pickup: which areas are covered, and is it included in the fee?",
        "Chai stop: included in the tour, or do guests pay their own?",
        "Confirm the walk visits the recycling compounds, leather workshops, Kumbharwada and garment/papad units — adjust the stop list if the real route differs",
        "Any minimum age or mobility limits for the Dharavi lanes",
        "Monsoon policy: does the tour run in heavy rain, and what changes?"
      ],
      metaDescription: "Gateway of India, Marine Drive, then a walk through Dharavi's working lanes with Pooja, who grew up there. Private tours booked over WhatsApp."
    },

    {
      slug: "kanheri-caves-tour",
      name: "Kanheri Caves Tour",
      tagline: "A forest in the city, caves in the rock",
      duration: "About 5–6 hours door to door",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "kanheri-caves-tour-1",
      imageAlt: "The dark basalt rock face of the Kanheri Caves rising above a sunlit forecourt in Sanjay Gandhi National Park",
      card: "A forest the size of a small city sits inside Mumbai, and cut into its black basalt hill are more than 100 Buddhist caves — the oldest about 2,000 years old. Pooja walks you through the grand chaitya prayer hall, past monastic cells and rock-cut cisterns, up staircases carved by hand. Watch for spotted deer and langurs on the way in. Best in or just after the monsoon, when streams run down the hillside.",
      paragraphs: [
        "The great chaitya hall at Kanheri was not built. It was cut — the tall pillars, the stupa at the far end, the whole prayer hall carved into a hill of black basalt by hand. Monks began this work about 2,000 years ago and kept at it for close to a thousand years. What they left behind is more than 100 caves: prayer halls, sleeping cells, rainwater cisterns, and staircases chiselled into the rock to link them all together.",
        "To reach them you pass through Sanjay Gandhi National Park in Borivali — a proper forest, protected, inside Mumbai's city limits. Spotted deer often cross the road ahead of the car; langurs watch from the trees. Come in or just after the monsoon and the hillside runs with streams; the cisterns the monks cut still fill with rain, the same way they have for centuries.",
        "Pooja has guided travellers around Mumbai for years, and she treats Kanheri as a walk, not a checklist. The steps are uneven and the outcrop climbs, so you take it at your pace — pause in the shade, sit in a quiet cell away from the main hall, let the forest do its thing. Hotel pickup and a car with driver can be arranged; tell Pooja where you're staying when you book."
      ],
      itinerary: [
        { title: "Morning pickup", detail: "Pooja collects you from your hotel or an agreed meeting point — time and place settled on WhatsApp." },
        { title: "Into the national park", detail: "Entry tickets at the gate (not included), then the forest closes over the road." },
        { title: "The forest road", detail: "Watch the verges for spotted deer, and the branches above for langurs." },
        { title: "The great chaitya hall", detail: "Kanheri's grand prayer hall: rows of tall carved pillars leading to a rock-cut stupa." },
        { title: "The monks' cells", detail: "Plain little rooms with stone benches, home to generations of Buddhist monks." },
        { title: "Cisterns and water channels", detail: "Rainwater tanks cut into the basalt, still filling every monsoon after centuries." },
        { title: "Steps to the upper caves", detail: "Hand-cut staircases climb the outcrop, linking cave to cave, with forest views opening as you rise." },
        { title: "Back through the forest", detail: "Down to the gate and back to your hotel — or a drop-off somewhere else if you fancy, just say." }
      ],
      included: [
        "Pooja as your private guide throughout",
        "A tour for your party only — no strangers",
        "Flexible start time, planned around you"
      ],
      excluded: [
        "Park and cave entry tickets (bought at the gate)",
        "Meals, snacks and drinks",
        "Car with driver — can be arranged, ask when booking"
      ],
      bring: [
        "Shoes with grip — the rock steps are uneven and slick in the rains",
        "Water bottle and a hat",
        "A light raincoat or umbrella in monsoon season",
        "Insect repellent",
        "Cash for entry tickets"
      ],
      goodToKnow: [
        "Kanheri Caves are closed on Mondays",
        "Best in and just after the monsoon, roughly June to October, when the streams run",
        "There is real walking here — rock-cut steps and slopes; tell Pooja if you'd like a gentler pace",
        "Monkeys are quick — keep food and loose items zipped away",
        "It's a protected forest: whatever you carry in, carry out"
      ],
      specialBox: null,
      needsConfirmation: [
        "Hotel pickup and drop-off — availability, timings and coverage area",
        "Car with driver — whether it can drive inside the park up to the caves, or the park shuttle is used",
        "Whether Pooja assists with buying park and cave entry tickets at the gate"
      ],
      metaDescription: "More than 100 Buddhist caves in a forest inside Mumbai. A private Kanheri Caves tour with Pooja — rock-cut halls, spotted deer and monsoon streams."
    },

    {
      slug: "lonavala-day-trip",
      name: "Lonavala Day Trip",
      tagline: "Hill air, ancient caves, chikki for the ride home",
      duration: "Full day, about 10–12 hours",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "lonavala-day-trip-1",
      imageAlt: "The expressway winding through green Western Ghats valleys near Khandala, hills rising on both sides",
      card: "Swap sea air for hill air. Pooja and a driver collect you from your hotel and take the expressway into the Western Ghats — about two to two and a half hours to Lonavala. Climb the steps to Karla Caves, a Buddhist prayer hall cut into rock about 2,000 years ago, stand over the valleys at Lion's Point, and buy chikki, the local nut brittle, for the trip home. In monsoon the hills run with waterfalls and mist — and the crowds come out to meet them.",
      paragraphs: [
        "In the last stretch before Lonavala, the expressway starts to climb, the air cools, and Mumbai's flat sprawl gives way to green ridges. A short drive out of town, at the top of a long stepped path, waits the reason to make this trip: Karla Caves, a Buddhist chaitya hall cut into the rock about 2,000 years ago, one of the largest of its kind in India. Look up when you get inside. The ribs across the vaulted ceiling are teak, and they are original. Pooja will give you time to simply stand there.",
        "This is a proper day out — about 83 km each way on the expressway, roughly two to two and a half hours depending on traffic — so Pooja suggests an early start. A car with a driver is arranged for the day, and because the tour is private, the day is yours to rearrange: linger at the caves, skip a stop, add one. Lunch is in town; if you let Pooja order, expect a Maharashtrian thali and no regrets.",
        "In the afternoon, out to Lion's Point and Tiger Point, where the ground falls away and the valleys open below — in monsoon the mist can swallow the view whole, then hand it back a minute later. Bhushi Dam is the season's other sight: water sheeting over its wide steps. Go to look rather than get in — in recent monsoons the authorities have banned entering the water there, and Pooja follows the rules in force on the day. Weekends get crowded; midweek is kinder. Before the drive home, pick up chikki, the nut brittle Lonavala is known for. It travels well and keeps the car quiet on the way back."
      ],
      itinerary: [
        { title: "Early pickup", detail: "Pooja and the driver collect you from your hotel; leaving early keeps the expressway kind." },
        { title: "The expressway climb", detail: "About 2–2.5 hours out of Mumbai, with the Ghats rising around you as the road gains height." },
        { title: "Karla Caves", detail: "A stepped climb to a rock-cut Buddhist chaitya hall about 2,000 years old, its vaulted ceiling still ribbed with the original teak." },
        { title: "Lunch in Lonavala", detail: "A sit-down meal in town — Pooja knows where; meals are on you." },
        { title: "Lion's Point and Tiger Point", detail: "Viewpoints on the plateau's edge: mist and waterfalls in monsoon, long clear views in the dry months." },
        { title: "Bhushi Dam (in season)", detail: "Monsoon overflow sheeting over wide steps — viewed from the sides; entering the water is often prohibited." },
        { title: "Chikki stop", detail: "Pick out boxes of the local nut brittle to carry home." },
        { title: "Drive back to Mumbai", detail: "Doze if you like; drop-off at your hotel in the evening." }
      ],
      included: [
        "Pooja as your guide for the full day",
        "Private tour — your party only",
        "Car with driver for the day (details to confirm)",
        "Hotel pickup and drop-off (to confirm for your location)"
      ],
      excluded: [
        "Entry tickets at Karla Caves",
        "Meals and drinks",
        "Chikki and other shopping"
      ],
      bring: [
        "Shoes with grip for the cave steps",
        "Water bottle",
        "Rain jacket or umbrella in monsoon (June–September)",
        "Sun hat and sunscreen in the dry months",
        "Cash in small notes for tickets and chikki"
      ],
      goodToKnow: [
        "The climb to Karla Caves is a steady flight of steps — take it at your own pace; there are stalls along the way",
        "Bhushi Dam only really flows during and just after monsoon — and entering the water there is periodically prohibited; treat it as a viewpoint and follow the rules on the day",
        "Monsoon weekends are the busiest time across Lonavala — go midweek if your dates allow",
        "It is a long day with about 4–5 hours of driving in total"
      ],
      specialBox: null,
      needsConfirmation: [
        "Car and driver arrangement — vehicle type, capacity, and whether tolls and parking are included",
        "Hotel pickup and drop-off — availability for the traveller's location",
        "Current local rules at Bhushi Dam in monsoon (restrictions have applied in recent seasons)",
        "Availability on peak monsoon weekends"
      ],
      metaDescription: "A private full-day trip from Mumbai with Pooja: the 2,000-year-old Karla Caves, valley viewpoints, monsoon waterfalls and chikki to carry home."
    },

    {
      slug: "shopping-tour",
      name: "Shopping Tour",
      tagline: "Four markets, one guide who knows the fair stalls",
      duration: "About 6–8 hours (shorter if you skip a market)",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "shopping-tour-1",
      imageAlt: "A crowded market lane near Zaveri Bazaar lined with stalls and bright umbrellas, mosque domes rising behind",
      card: "Shop the way Pooja shops. Start among the pavement stalls of Colaba Causeway, move through Crawford Market's spice and dry-fruit lanes, walk the gold lanes of Zaveri Bazaar, then finish with shoes and streetwear on Linking Road in Bandra. Pooja knows which stalls charge a fair price and which are set up for tourists — and the only shopping list that matters is yours. Unhurried, and planned around what you actually want to buy.",
      paragraphs: [
        "The first number you hear on Colaba Causeway is an invitation, not a price. Pooja will show you what to do with it — how to counter, when to smile and walk away, and when a stall is simply fair and haggling would be rude. She has shopped these streets all her life; she knows which sellers she would send her own family to.",
        "The day runs south to north. Colaba Causeway first: pavement stalls of scarves, sandals, brass and bags, with small boutiques tucked in behind them. Then Crawford Market, a Victorian market hall where you can buy whole spices by weight, dry fruit by the handful, and the steel and copper homewares Mumbai kitchens actually use. A short hop away is Zaveri Bazaar, the jewellery district — lane after lane of gold and silver dealers, where pieces are still sold by weight at the day's rate.",
        "After lunch — Pooja knows where to stop, and you eat what you fancy — a car takes you north to Bandra for Linking Road: trainers, bags and streetwear stacked shoulder-high, and the best spot of the day to put your new haggling skills to work. Buy plenty or buy nothing. Nobody steers you into a shop you didn't ask for, so the only list that matters is yours.",
        "The route bends to you. Serious about jewellery? Give Zaveri Bazaar the whole afternoon. Only after spices and fabric? Linger at Crawford Market and skip Bandra. Message Pooja on WhatsApp and tell her what you're hunting for."
      ],
      itinerary: [
        { title: "Hotel pickup", detail: "Pooja meets you at your hotel and goes over your shopping list before you set off (pickup details confirmed when you book)." },
        { title: "Colaba Causeway", detail: "Pavement stalls of scarves, sandals, brass and bags, with small boutiques behind them — and your first lesson in reading an opening price." },
        { title: "Crawford Market", detail: "Whole spices, dry fruit and everyday homewares under the roof of a Victorian market hall." },
        { title: "Zaveri Bazaar", detail: "The jewellery district — lane after lane of gold and silver dealers, where pieces are sold by weight at the day's rate." },
        { title: "Lunch break", detail: "Pooja suggests a spot near the bazaars; you choose, and meals are at your own expense." },
        { title: "Drive to Bandra", detail: "A car with driver covers the hop north across the city (arranged when you book)." },
        { title: "Linking Road", detail: "Shoes, bags and streetwear stalls — the best place of the day to practise your bargaining." },
        { title: "Drop-off", detail: "Back to your hotel with your haul, or stay on in Bandra for the evening — your call." }
      ],
      included: [
        "Pooja as your private guide for the day",
        "A route planned around your shopping list",
        "Bargaining help at the stalls — as much or as little as you want",
        "Hotel pickup and drop-off (confirm your location on WhatsApp)"
      ],
      excluded: [
        "Your purchases — what you buy is yours to pay for",
        "Meals and drinks",
        "Car with driver for the longer hops (can be arranged — ask when booking)"
      ],
      bring: [
        "A roomy, empty bag — you will fill it",
        "Cash in smaller notes for the street stalls",
        "Comfortable shoes — pavements are uneven and you'll be on your feet",
        "Water and sun protection; the market lanes get hot",
        "A photo of anything specific you're hunting for — it helps Pooja plan"
      ],
      goodToKnow: [
        "Private by default — just your party and Pooja",
        "Timings are flexible; mornings are cooler and the lanes are quieter",
        "Crawford Market and Zaveri Bazaar close on Sundays, so this tour runs best Monday to Saturday — if Sunday is your only day, Pooja will replan the route",
        "If you don't want to buy, you don't buy — there's no pressure at any stop"
      ],
      specialBox: {
        title: "Pooja's bargaining tips",
        items: [
          "Haggle at street stalls, not fixed-price shops — if the price is on a tag, that's the price.",
          "Open at about half the first quote and meet somewhere in the middle.",
          "Walking away politely often brings the price down — and you can always walk back.",
          "Two or three items from one stall earns a better rate than one item from three.",
          "Carry smaller notes; exact change closes a deal faster.",
          "Locals pay by UPI everywhere, but as a visitor you'll mostly be using cash — and cash bargains harder anyway.",
          "Keep it friendly — it's a game both sides enjoy, not a fight."
        ]
      },
      needsConfirmation: [
        "Confirm there is no commission or referral arrangement with any shop or stall on the route before advertising that claim",
        "Hotel pickup and drop-off — coverage and any radius limits",
        "Car with driver for the Colaba-to-Bandra transfer — availability and whether it is included or charged separately",
        "Whether a shorter half-day version is offered"
      ],
      metaDescription: "A private Mumbai shopping tour with Pooja: Colaba Causeway, Crawford Market, Zaveri Bazaar and Linking Road — fair stalls and honest bargaining help."
    },

    {
      slug: "mumbai-food-tour",
      name: "Mumbai Food Tour",
      tagline: "Eat where Pooja eats, one stall at a time",
      duration: "About 3–4 hours, usually in the evening",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "mumbai-food-tour-1",
      imageAlt: "Vada pav on a paper plate with a fried green chilli and red garlic chutney, soft pav buns behind",
      card: "An evening eating your way through Mumbai with Pooja, who knows which vada pav stall is worth the queue. Start with the fried-potato pav the city eats on the way to work, watch pav bhaji get mashed on a hot tawa, work through bhel and sev puri with cutting chai, then head for the kebab and sweet lanes around Mohammed Ali Road. Kulfi or falooda to finish — and every stall is one Pooja eats at herself.",
      paragraphs: [
        "The vada goes into the oil, puffs up, comes out golden, and lands in a split pav with green chutney and a smear of dry garlic. Pooja will tell you to eat it in three bites while it's still too hot, fried green chilli on the side if you're feeling brave. That's your first stop. It's how Mumbai eats on the way to work, and it's the right way to start an evening of eating.",
        "From there the pace is easy. You'll stand at a tawa the size of a table while pav bhaji is mashed and folded through butter, then move on to bhel and sev puri, mixed in front of you and made to your spice level — Pooja will ask before the first chutney goes in. Cutting chai in between: half a glass, strong and sweet, the pause this city runs on.",
        "Later you'll head for the lanes around Mohammed Ali Road, where kebab griddles and sweet shops run into the night. They're at their fullest during Ramzan, but the food is there all year. The evening ends the way Pooja likes it to: kulfi cut into slices, or a tall glass of falooda, rose syrup sinking through the milk.",
        "The walk is private — just your party and Pooja. Vegetarian, Jain, easy on the chilli, a stall you've read about and want to try: say so. Every stop is somewhere Pooja eats herself, picked because the food moves fast and never sits. Message on WhatsApp with your dates and any allergies, and she'll plan the evening around them."
      ],
      itinerary: [
        { title: "Vada pav to start", detail: "The vada comes straight out of the oil and into a split pav with green and dry garlic chutneys — eat it hot." },
        { title: "Pav bhaji off the tawa", detail: "Watch it mashed and folded through butter on a griddle the size of a table, then scoop it up with toasted pav." },
        { title: "Bhel and sev puri", detail: "Puffed rice, crisp puris and chutneys mixed in front of you, spiced to whatever level you ask for." },
        { title: "Cutting chai", detail: "Half a glass of strong, sweet tea — the pause between courses, taken standing up like everyone else." },
        { title: "Mohammed Ali Road kebab lanes", detail: "Griddles and skewers in lanes that run late into the night — at their fullest during Ramzan, good all year." },
        { title: "The sweet shops", detail: "Trays of mithai in the same lanes; Pooja will point you to whatever is freshest that evening." },
        { title: "Kulfi or falooda to finish", detail: "Dense kulfi cut into slices, or a tall falooda with rose syrup and vermicelli — your call." }
      ],
      included: [
        "Pooja as your guide for the whole walk",
        "A private walk — your party only",
        "A route planned around your diet, allergies and spice level",
        "Tastings at each stop (confirm when you book)",
        "Bottled water for the walk (confirm when you book)"
      ],
      excluded: [
        "Anything you order beyond the planned tastings",
        "Taxi or car transfers between areas — can be arranged if needed (ask when booking)"
      ],
      bring: [
        "Comfortable closed shoes — pavements are uneven, and wet in monsoon",
        "An appetite: come hungry, the portions add up across seven stops",
        "Hand wipes or sanitiser if you like having your own",
        "A little cash in case something extra catches your eye"
      ],
      goodToKnow: [
        "Usually an evening walk; timings are flexible, so say what suits you",
        "Vegetarian and Jain-friendly routes are easy in Mumbai — just say so when booking",
        "You'll mostly stand and eat at stalls; seating is rare",
        "During Ramzan the Mohammed Ali Road lanes get very full and run very late — worth it, but expect crowds",
        "New to Indian street food? Pooja will pace you and steer you past the riskier choices"
      ],
      specialBox: {
        title: "Hygiene and diets, honestly",
        items: [
          "Every stall is one Pooja eats at herself, chosen for high turnover — the food is cooked fresh and doesn't sit around",
          "Bottled water is the rule on the walk — no tap water, no ice of unknown origin",
          "Sensitive stomach? Go easy on raw garnishes early in your trip — Pooja will steer you towards the cooked, hot things first",
          "Vegetarian and Jain-friendly routes are easy in Mumbai; tell us what you eat when you book",
          "Message any allergies on WhatsApp when booking and the whole route is planned around them"
        ]
      },
      needsConfirmation: [
        "Whether tastings at each stop are included in the tour fee, and roughly how many the fee covers",
        "Bottled water — confirm it is provided and included in the fee",
        "Hotel pickup — coverage, and where guests outside it should meet",
        "Whether an afternoon or daytime start is possible on request"
      ],
      metaDescription: "An evening food walk with Pooja, a Mumbai native: vada pav, pav bhaji, Mohammed Ali Road's kebab lanes, kulfi to finish. Private, booked on WhatsApp."
    },

    {
      slug: "religious-tour",
      name: "Religious Tour",
      tagline: "Temples, a dargah, a basilica — one city, one day",
      duration: "About 6–7 hours, depending on traffic and the tide",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "religious-tour-1",
      imageAlt: "Haji Ali Dargah on its islet in the Arabian Sea at sunset, framed by the silhouette of a palm tree",
      card: "Mumbai prays in every direction. In one day you'll queue with Ganesha devotees at Siddhivinayak, walk the sea causeway to Haji Ali Dargah at low tide, climb the Bandra hilltop to Mount Mary Basilica, and find Mumba Devi — the goddess the city is named after — deep in the Bhuleshwar bazaar lanes. Babulnath's old Shiva temple rounds it off. Pooja plans the route around the tide and explains what to wear at every door.",
      paragraphs: [
        "Twice a day, the sea decides who reaches Haji Ali. The dargah — a mosque and a saint's tomb — stands on an islet off the shoreline, and the only way over is a causeway that goes under water at high tide. So this tour starts with a tide table. Pooja checks it before your day and plans the route around that walk — the Arabian Sea on both sides, qawwali sometimes drifting from the courtyard.",
        "The rest of the day moves between faiths the way Mumbai does — without fuss. At Siddhivinayak in Prabhadevi, one of the city's most visited temples, stalls outside sell marigold garlands and coconuts for Ganesha. Mumba Devi, the goddess the city takes its name from, sits deep in the Bhuleshwar bazaar lanes, past flower sellers and silver shops. Babulnath, an old Shiva temple near Girgaon Chowpatty, is a climb of stone steps that ends in quiet.",
        "Bandra changes the key: Mount Mary Basilica on its hilltop, where stalls sell wax candles shaped like hands, hearts and houses — you offer the shape of the thing you're praying for. Pooja grew up with neighbours who kept every one of these festivals, and she'll tell you what to wear at each door, when shoes come off, and what the coconut in your hand is for. A car with driver is the sensible way to cover the stretches between — ask when you book."
      ],
      itinerary: [
        { title: "Mount Mary Basilica, Bandra", detail: "Begin on the Bandra hilltop, sea below and wax-candle stalls at the gate, each candle shaped like the thing being prayed for." },
        { title: "Siddhivinayak Temple, Prabhadevi", detail: "Join the flow of devotees at one of the city's most visited temples — coconut and garland in hand if you like." },
        { title: "Haji Ali Dargah", detail: "Timed to low tide: walk the causeway over the sea to the mosque and tomb on their islet." },
        { title: "Chai break", detail: "Ten minutes at a roadside stall — the breather that makes five sites in a day possible." },
        { title: "Babulnath Temple", detail: "Climb the stone steps to the old Shiva temple near Girgaon Chowpatty — it is noticeably calmer up there." },
        { title: "Bhuleshwar bazaar lanes", detail: "Walk in through the flower and utensil lanes rather than driving to the door." },
        { title: "Mumba Devi Temple", detail: "End with the goddess the city is named after, her shrine folded into the middle of the market." }
      ],
      included: [
        "Pooja as your guide for the whole day",
        "Private tour — your party only",
        "Route planned around tide timings for Haji Ali",
        "Hotel pickup and drop-off (details to confirm when you book)"
      ],
      excluded: [
        "Meals and drinks",
        "Donations and offerings at any site (always optional)",
        "Camera or entry fees where a site charges them",
        "Car with driver — can be arranged, ask when booking"
      ],
      bring: [
        "Easy slip-on shoes — you'll be taking them off a lot",
        "Clothes that cover shoulders and knees",
        "A scarf of your own for Haji Ali's inner sanctum",
        "Socks, in case marble floors are hot",
        "A bottle of water"
      ],
      goodToKnow: [
        "Haji Ali's causeway floods at high tide — access is tide-dependent, so the running order may change on the day",
        "Tuesdays are the busiest day at Siddhivinayak and queues can be long",
        "These are working places of worship, not museums — areas can close for prayers or rituals without notice",
        "The tour covers a lot of ground, so a car with driver is recommended for this route",
        "An early start beats both the queues and the heat"
      ],
      specialBox: {
        title: "What to wear, where",
        items: [
          "Everywhere: cover shoulders and knees — light, loose cotton works well",
          "Temples: shoes come off at the door, so easy slip-ons save time",
          "Haji Ali: legs covered for everyone; women cover their head in the inner sanctum — scarves are usually available there, but your own is simpler",
          "Some temples restrict photography inside — check with Pooja before raising your phone",
          "Leather belts and bags are best left behind at some Hindu temples",
          "Marble forecourts get hot by midday — a pair of socks solves it"
        ]
      },
      needsConfirmation: [
        "Hotel pickup and drop-off — availability and coverage area",
        "Car with driver — whether its cost is separate",
        "Scarf availability at Haji Ali's inner sanctum (stated as 'usually available')",
        "Chai break — whether it is a standard stop and who pays"
      ],
      metaDescription: "A private day across Mumbai's places of faith with Pooja: Siddhivinayak, Haji Ali at low tide, Mount Mary, Mumba Devi and Babulnath. Book on WhatsApp."
    },

    {
      slug: "tuk-tuk-tour",
      name: "Tuk Tuk Tour",
      tagline: "Three wheels into the lanes cars can't enter",
      duration: "About 3–4 hours",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "tuk-tuk-tour-1",
      imageAlt: "A driver at the handlebars of a black-and-yellow Mumbai auto-rickshaw with a teal canopy, seen from the side",
      card: "Autos aren't allowed in south Mumbai — and that's the point. This tour belongs to the northern suburbs, where the three-wheeler is king. Climb in beside Pooja and rattle through Bandra's old villages, Ranwar and Chuim, down lanes no car can enter. Stop for film-star murals on Chapel Road, bazaar lanes stacked with fruit and fish, and chaat by the sea. Doors open, street level, three passengers to an auto.",
      paragraphs: [
        "The driver tips the auto into a lane off Hill Road that no car could manage, and there's nothing between you and the street — no door, no window, just air. A handcart of okra passes close enough to count the pods. That's the whole idea. Auto-rickshaws are banned from Mumbai's island-city core, so this tour lives where the auto lives: the northern suburbs, where three wheels beat four.",
        "Bandra's old villages are where Pooja slows the ride down. Ranwar and Chuim were villages long before the high-rises grew around them; their lanes double back past low bungalows, wooden balconies and crosses at the corners. On Chapel Road you hop out and walk — the house walls carry murals, film stars painted two storeys tall, and the street reads like a family album left open.",
        "Then the bazaar lanes, taken at walking pace with the engine puttering: fish on ice, marigolds sold by the string, a tailor at his machine in an open doorway. Somewhere along the way there's a pause at a chai stall the drivers use — engine off, street still going past. And the finish is the sea: chaat where the stalls meet the sand, sev puri sharp with tamarind, pav bhaji straight off the tawa, crows negotiating for scraps.",
        "Each auto takes three passengers, so a bigger group simply becomes a small convoy. Timings flex to you: morning for cooler air, late afternoon if you want the beach near sunset. Message Pooja on WhatsApp with what you're curious about — food, murals, old Bandra — and she'll build the ride around it."
      ],
      itinerary: [
        { title: "Meet your auto", detail: "Pooja meets you with your driver — pickup from suburban hotels is usually possible, confirmed on WhatsApp." },
        { title: "Ranwar village", detail: "Wind through one of Bandra's oldest villages, past low bungalows with wooden balconies and crosses at the lane corners." },
        { title: "Chapel Road street art", detail: "Hop out for the murals — film faces two storeys tall, painted straight onto house walls." },
        { title: "Chuim village", detail: "A second old village, quieter still, where the lanes are so tight the auto barely fits and cars don't try." },
        { title: "Bazaar lanes", detail: "Roll at walking pace through Bandra's market streets: fish on ice, marigold garlands, tailors at their machines in open doorways." },
        { title: "Chai pause", detail: "A stop at a stall the drivers use — engine off, street still going past." },
        { title: "Chaat by the beach", detail: "Finish at the seaside stalls with sand underfoot: sev puri, bhel, hot pav bhaji off the tawa." },
        { title: "Drop-off", detail: "Your convoy runs you back to your hotel, or drops you wherever the evening takes you next." }
      ],
      included: [
        "Pooja as your private guide — your party only",
        "Auto-rickshaws and drivers for the full route, up to 3 passengers per auto (to confirm)",
        "Hotel pickup and drop-off in the suburbs (details to confirm)"
      ],
      excluded: [
        "Food and drink — chaat, chai and anything else you fancy along the way",
        "Tips for drivers (optional, always appreciated)"
      ],
      bring: [
        "Sunglasses and sunscreen — the auto is open to the street",
        "Cash for street food; small stalls rarely take foreign cards",
        "A scarf or buff if road dust bothers you",
        "A firm grip on your phone — there are no doors",
        "A bottle of water"
      ],
      goodToKnow: [
        "Autos are open-sided and the ride is part of the fun — expect honking, close traffic and the odd pothole",
        "Up to 3 passengers per auto; larger groups travel as a small convoy",
        "You'll climb in and out of a low bench seat several times — mention any mobility concerns when you book",
        "Monsoon rain (roughly June to September) can reroute or shorten the ride",
        "Mornings are cooler; late afternoon catches the beach at its liveliest"
      ],
      specialBox: null,
      needsConfirmation: [
        "Whether auto-rickshaw hire and drivers are included in the fee or paid separately on the day",
        "Hotel pickup and drop-off — availability and coverage area",
        "Which beach hosts the chaat stop (route and traffic dependent)",
        "Maximum group size and how many autos can be arranged",
        "Wet-weather policy in heavy monsoon rain"
      ],
      metaDescription: "Ride an auto-rickshaw through Mumbai's suburbs with Pooja: Bandra's old villages, Chapel Road murals, bazaar lanes, chaat by the sea. Private tours."
    },

    {
      slug: "bollywood-tour",
      name: "Bollywood Tour",
      tagline: "Sets, star gates and the business of make-believe",
      duration: "About 5–6 hours, a little longer with the dance session",
      priceFrom: "₹X,XXX", /* CONFIRM PRICE */
      image: "bollywood-tour-1",
      imageAlt: "A film clapperboard held up on a set, crew members blurred in the background",
      card: "Film City sits on the forest edge in Goregaon — sound stages, outdoor sets, and a temple that turns out to be painted board from the back. Pooja takes you in on the official studio tour, then across town to where fans wait outside Shah Rukh Khan's Mannat in Bandra and Amitabh Bachchan's Jalsa in Juhu. No promises of stars or live shoots — just the real machinery of Hindi cinema, explained by someone who grew up on it.",
      paragraphs: [
        "There's a temple in Film City that looks like it has stood for centuries. Walk round the back and it's bamboo, scaffolding and painted board. That gap — between the shot and the set — is what this tour is about. Film City sits in Goregaon on the edge of Sanjay Gandhi National Park, and it's where a big share of Hindi cinema actually gets made: sound stages, outdoor sets, half-built streets, carpenters and painters at work.",
        "You go in on the official studio tour — the only way in, and it runs to the studio's schedule, so the day is planned around it. Pooja will be straight with you: some days a crew is shooting on an outdoor set, most days they aren't, and nobody can promise you a star. What she can do is tell you what was filmed where, what the crews are building now, and how a rain scene gets made on a dry afternoon.",
        "Then you cross to the other side of the industry: the houses. On Bandstand in Bandra, fans stand at the gate of Mannat, Shah Rukh Khan's home, photographing a wall with real feeling. In Juhu it's Jalsa, Amitabh Bachchan's place — he has greeted Sunday-evening crowds there for years, though whether he appears on your day is his business, not ours. Either way, the crowds themselves are worth watching.",
        "If the schedule allows, a dance session can be added — a choreographer, a hook step, and you learning it imperfectly to a song you'll be humming for the rest of the trip. It depends on availability, so mention it when you message Pooja and she'll check."
      ],
      itinerary: [
        { title: "Hotel pickup", detail: "Pooja meets you at your hotel; the start time follows the studio tour's schedule." },
        { title: "Drive north to Goregaon", detail: "Out through the suburbs to the studio gates, where the city stops and the forest starts." },
        { title: "Film City studio tour", detail: "The official tour of Dadasaheb Phalke Chitranagari: studio areas, outdoor sets and the temple set." },
        { title: "Sets and stories", detail: "Pooja fills in what the official commentary leaves out — what was shot where, and how the tricks work." },
        { title: "Dance session (if available)", detail: "A choreographer teaches your group a hook step from a Hindi film song." },
        { title: "Jalsa, Juhu", detail: "Amitabh Bachchan's home, with fans at the gate most days; viewed from outside." },
        { title: "Mannat, Bandstand", detail: "Shah Rukh Khan's sea-facing house in Bandra, with the promenade and its crowds alongside." },
        { title: "Drop-off", detail: "Back to your hotel, or somewhere else in the city if that suits your evening better." }
      ],
      included: [
        "Pooja as your guide throughout",
        "Private tour — your party only",
        "Hotel pickup and drop-off (details to confirm)",
        "Car with driver for the day (to confirm)"
      ],
      excluded: [
        "Film City studio tour tickets",
        "Dance session fee, where taken",
        "Meals and drinks"
      ],
      bring: [
        "Comfortable shoes — the set areas mean walking on rough ground",
        "A hat and water; much of Film City is outdoors",
        "Sunscreen",
        "Your phone or camera — follow the studio's photography rules on the day"
      ],
      goodToKnow: [
        "Live shoots and celebrity sightings are never guaranteed — some days crews are filming, most days you'll see the sets, not the stars",
        "Access inside Film City is via the official studio tour and runs to its schedule, so start times can shift",
        "Star homes are private residences, seen from outside the gates only",
        "The dance session depends on availability — ask when you book"
      ],
      specialBox: null,
      needsConfirmation: [
        "Dance session — availability, venue and how it's booked",
        "Whether Pooja pre-books official studio tour tickets or guests buy on the day",
        "Official studio tour schedule and days of operation",
        "Hotel pickup and car arrangements for the day"
      ],
      metaDescription: "Private Bollywood day with Mumbai guide Pooja: Film City's official studio tour, outdoor sets and the star homes of Bandra and Juhu. Book on WhatsApp."
    }
  ]
};

/* Make the content usable both in the browser and by the page generator. */
if (typeof module !== "undefined" && module.exports) { module.exports = CONTENT; }
