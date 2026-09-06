/* =========================================================================
   AK TOURS & TRAVELS — ALL WORDS, PRICES AND PHOTO NAMES LIVE IN THIS FILE.

   To change anything on the site, edit the text between the "quotes" below
   and save. Nothing else needs touching.

   THE THREE MOST COMMON EDITS:
   1. Phone number  -> change `phone` just below (one place, used everywhere).
   2. A tour price  -> find the tour, edit `priceFrom` and its `pricing` list.
   3. Any wording   -> find the sentence, change it between the quotes.

   All prices are per person. Lines marked CONFIRM are placeholders or best
   guesses — check them with Pooja. Full instructions in README.md.
   ========================================================================= */

const CONTENT = {

  /* ---- The one and only phone number. Format: +91 then 10 digits. ---- */
  phone: "+918097004157",

  email: "poojreddy026@gmail.com",

  siteName: "AK Tours & Travels",
  siteUrl: "https://ryanl-byte.github.io/ak-tours-travels/",

  /* First line of the WhatsApp chat when someone taps a button. */
  whatsappGreeting: "Hi Pooja! I found AK Tours & Travels online and I'd like to ask about a tour.",

  hero: {
    kicker: "Guided tours · Mumbai & beyond",
    heading: "See Mumbai with someone who calls it home.",
    sub: "Small-group and private tours led by Pooja — a Mumbai native who grew up in Dharavi and has guided this city for years. No coach, no script, no crowd. Just her city, shown properly.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "Browse the tours",
    imageAlt: "Marine Drive's long curve at sunset, dark tetrapods in the foreground and the Mumbai skyline across the bay"
  },

  toursIntro: {
    kicker: "The tours",
    heading: "Fourteen ways in.",
    sub: "Half-day walks, dawn markets, food after dark, hills and caves — even the far Northeast. Join a small group departure or make any tour private; everything is priced per person and booked with a WhatsApp message."
  },

  /* ---- Extras strip shown under the tours grid. ---- */
  extras: {
    heading: "Also available",
    sub: "Easy add-ons for any tour — ask on WhatsApp.",
    items: [
      {
        title: "Pick-up & drop service",
        text: "A comfortable, air-conditioned car with drinking water on board: ₹2,000 for up to 60 km. Airport transfers and longer runs quoted on WhatsApp."
      },
      {
        title: "Something custom",
        text: "None of the tours quite fit? Tell Pooja what you're curious about — trains, textiles, temples, kitchens — and she'll build a day around it."
      }
    ]
  },

  /* ---- Gallery: real photographs from AK Tours outings. ---- */
  gallery: {
    kicker: "From the tours",
    heading: "What it actually looks like.",
    sub: "No stock photography here — these were all taken on AK Tours outings around Mumbai.",
    items: [
      { image: "gallery-01", alt: "Rows of round clay pots drying on a kiln wall of grey bricks in Kumbharwada, Dharavi", caption: "Kumbharwada's kilns, Dharavi" },
      { image: "gallery-02", alt: "Tall stacks of leather hides in a Dharavi workshop", caption: "Leather district, Dharavi" },
      { image: "gallery-03", alt: "A garment unit in Dharavi with a tailor working at a sewing machine", caption: "A garment unit at full tilt" },
      { image: "gallery-04", alt: "A narrow working lane in Dharavi lined with sacks of sorted material", caption: "Recycling lanes, Dharavi" },
      { image: "gallery-05", alt: "A colourful residential lane in Dharavi with painted walls, plants and a spiral staircase", caption: "The lanes Pooja grew up in" },
      { image: "gallery-06", alt: "A pale spotted cat sitting on a sunny ledge in Dharavi", caption: "A local supervisor" },
      { image: "gallery-07", alt: "A carved panel of dancing Shiva surrounded by attendant figures inside the Elephanta caves", caption: "Shiva dancing, Elephanta" },
      { image: "gallery-08", alt: "The pillared entrance of the main Elephanta cave beneath a monsoon-green hillside, visitors walking in", caption: "Elephanta in the monsoon" },
      { image: "gallery-09", alt: "Two monkeys sitting together on a branch on Elephanta Island", caption: "The island's other residents" },
      { image: "gallery-10", alt: "Guests standing among the carved pillars of the main Elephanta cave", caption: "Inside the main cave" },
      { image: "gallery-11", alt: "The Gateway of India under a big sky, the square in front full of visitors", caption: "The Gateway, mid-morning" },
      { image: "gallery-12", alt: "Looking down over Dhobi Ghat's washing pens and drying laundry with towers behind", caption: "Dhobi Ghat from the overlook" },
      { image: "gallery-13", alt: "Guests posing at night in front of a grandly lit Victorian building in Mumbai", caption: "South Mumbai after dark" }
    ]
  },

  pooja: {
    kicker: "Meet your guide",
    heading: "This is Pooja's city. She'll lend it to you for a day.",
    paragraphs: [
      "Pooja was born and raised in Dharavi, in the middle of the city she now shows to visitors. She guided independently for years before putting her own name over the door — AK Tours & Travels is hers, and when you message, it's Pooja herself who answers.",
      "A day with her doesn't run on a script. It feels more like being shown around by a friend who happens to know everything: which vada pav stall is worth the queue, when the tide uncovers the causeway to Haji Ali, how to cross a Mumbai road without flinching. Mention that you love textiles, or trains, or quiet — she'll quietly rebuild the whole day around it.",
      "Book any tour as a small group departure or privately for your own party. Ask her anything before you book. That's rather the point of her."
    ],
    facts: [
      { label: "Home", value: "Dharavi, Mumbai" },
      { label: "Guiding", value: "Independent guide for years, now running her own company" },
      { label: "Tours run in", value: "English" },
      { label: "Gives back", value: "Around 15% of every tour fee goes to someone in the community who needs it" }
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
        title: "Group or private — your call",
        text: "Small group departures keep the price friendly; go private and it's just your party and Pooja. Either way, never a coach crowd."
      },
      {
        title: "Flexible timings",
        text: "Early start to beat the heat, evening walk to catch the food stalls — tell Pooja what suits you and the day is planned around it."
      },
      {
        title: "It gives back",
        text: "Around 15% of every tour fee goes straight to someone in the community who genuinely needs it. Solo women travellers are especially welcome — you'll be with Pooja herself throughout."
      }
    ]
  },

  /* ---- Testimonials: SAMPLE TEXT ONLY. Replace all three with real guest
     reviews (and set sample: false) before promoting the site. ---- */
  testimonials: {
    kicker: "What guests say",
    heading: "The first reviews are in.",
    note: "The remaining sample cards will be swapped for real guest reviews as they arrive.",
    items: [
      {
        quote: "Took the Elephanta Island tour with Pooja and it was the highlight of our time in Mumbai. Everything was organised from the first WhatsApp message, so we never had to think about tickets, timings or the ferry. She seems to know everyone, and she has a real gift for making the whole group feel looked after. We felt seen, safe and never rushed. If you're in Mumbai, book with her. You'll be in very good hands.",
        name: "Ryan",
        origin: "UK",
        sample: false
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
        a: "Most tours offer a with-pickup price — a comfortable air-conditioned car collects you and drops you back, with drinking water on board. As a standalone service, pick-up and drop is ₹2,000 for up to 60 km; airport transfers and longer distances are quoted on WhatsApp." /* CONFIRM WITH POOJA: pickup coverage */
      },
      {
        q: "Group tour or private — what's the difference?",
        a: "Group departures put you with a handful of other travellers and cost less per person. Private means it's just your own party with Pooja, at your pace. Every tour page lists both prices — pick whichever suits when you message."
      },
      {
        q: "How do I pay?",
        a: "Cash (Indian rupees) or UPI on the day. You'll agree the price on WhatsApp before the tour, so there are no surprises — there's no online payment and no card machine." /* CONFIRM WITH POOJA: deposit policy, if any */
      },
      {
        q: "Where does the money go?",
        a: "Mostly where you'd expect — but around 15% of every tour fee is set aside for someone in the community who genuinely needs it. If you'd like to add a little on top, tell Pooja and she'll make sure it lands where it helps."
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
    line: "AK Tours & Travels — guide-led tours of Mumbai and beyond.",
    credit: "Gallery photos are from real AK Tours outings; a few tour headers use licensed Unsplash images (credited in img/CREDITS.md) until they're replaced with our own."
  },

  /* =======================================================================
     THE TOURS. Order here = order on the homepage.
     All prices are per person. priceFrom = the cheapest option, shown on
     the homepage card; the full `pricing` list appears on the tour page.
     ======================================================================= */
  tours: [

    {
      slug: "mumbai-city-tour",
      name: "Mumbai City Tour",
      tagline: "Mumbai's classics, walked with someone who grew up here",
      duration: "About 4–5 hours, with a full-day option",
      priceFrom: "₹4,000",
      pricing: [
        { label: "Group tour, with pick-up & drop", price: "₹4,000" },
        { label: "Private tour, with pick-up & drop", price: "₹6,000" }
      ],
      image: "mumbai-city-tour-1",
      imageAlt: "The Gateway of India and the Taj Mahal Palace hotel seen from the water, boats crossing the harbour",
      card: "The classic Mumbai circuit, walked with Pooja — whose city this is. Stand under the basalt arch of the Gateway of India, look down on Dhobi Ghat, the open-air laundry that has worked for over a century, and hear why Marine Drive is called the Queen's Necklace. Add Crawford Market's clocktower, the Victorian Gothic front of Chhatrapati Shivaji Maharaj Terminus, and the hedge animals of the Hanging Gardens. Half day or full — your pace either way.",
      paragraphs: [
        "Start at the water. The Gateway of India went up in basalt and was finished in 1924; ferries still nose in and out beneath the arch, and the square in front fills with pigeons, photographers and school groups by mid-morning. Pooja grew up in this city, and she starts here because this is where Mumbai has greeted arrivals for about a century — by sea then, by taxi now.",
        "From there the route strings together the places every visitor asks about. At Chhatrapati Shivaji Maharaj Terminus — Victorian Gothic, a working railway station, on the UNESCO World Heritage list since 2004 — you watch commuters stream through a building that looks like a cathedral. Crawford Market, officially Mahatma Jyotiba Phule Mandai, still trades fruit and spices under its old clocktower; Pooja knows which stalls to stop at and what is in season.",
        "Then the contrast. At Mahalaxmi you look down over Dhobi Ghat, the open-air laundry that has washed the city's linen for more than a century — rows of washing pens, laundry strung out in the sun, and a system behind it all that Pooja will explain. Up on Malabar Hill, the Hanging Gardens give you terraced lawns, hedges clipped into animals, and a long view back over the city. You finish on Marine Drive, the curve of sea-front locals call the Queen's Necklace for the way its streetlights string out after dark.",
        "The core loop takes about half a day. If you would rather go slower — a proper lunch stop, more time in the market lanes — ask about the full-day version when you message. Join a group departure, or make it private and the order flexes around the heat and the traffic."
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
        "Pooja as your guide from start to finish",
        "Bottled water",
        "Pick-up and drop-off in an air-conditioned car",
        "A route and pace planned around the group"
      ],
      excluded: [
        "Entry tickets where charged",
        "Meals and drinks beyond the water provided"
      ],
      bring: [
        "Comfortable walking shoes",
        "A hat and sunscreen — much of the route is in the open",
        "Some cash if you want to shop at Crawford Market"
      ],
      goodToKnow: [
        "Group departures or private — both prices above, per person",
        "Timings are flexible; earlier starts beat the heat and the traffic",
        "Crawford Market is closed on Sundays — on a Sunday tour Pooja swaps in another stop",
        "CST is a working station; expect crowds around rush hour",
        "Dhobi Ghat is viewed from the overlook at Mahalaxmi"
      ],
      specialBox: null,
      needsConfirmation: [
        "Whether a without-pickup price should also be offered for this tour",
        "Full-day option — what it adds and its price",
        "Typical group size on group departures"
      ],
      metaDescription: "See Mumbai's classics with Pooja, a local guide: Gateway of India, Dhobi Ghat, CST, Crawford Market, Marine Drive. Group and private tours from ₹4,000."
    },

    {
      slug: "dharavi-tour",
      name: "Dharavi Tour",
      tagline: "The square mile that works, walked with someone born there",
      duration: "About 2–3 hours on foot",
      priceFrom: "₹800",
      pricing: [
        { label: "Group tour", price: "₹800" },
        { label: "Private tour", price: "₹1,700" },
        { label: "Group tour, with pick-up & drop", price: "₹2,800" },
        { label: "Private tour, with pick-up & drop", price: "₹3,500" }
      ],
      image: "dharavi-tour-1",
      imageAlt: "Hand-carved terracotta pots with cut-out patterns stacked in Kumbharwada, Dharavi's potters' quarter",
      card: "The part no other tour has: Dharavi on foot with Pooja, who was born and raised there. This is the heart of Mumbai beyond the tourist attractions — plastic recycling, leather workshops, potters' kilns, papads drying on rooftops — an economy whose turnover is often put at as much as a billion US dollars a year. Around 15% of the fee goes back into the community. No photography of people, ever.",
      paragraphs: [
        "Kumbharwada is the potters' quarter of Dharavi. The kilns there have been fired by the same families for generations, and rows of clay pots dry in the lanes before market day. A few streets away, sewing machines run in garment units, papads dry on rooftop racks, and workers in the recycling compounds sort plastic by colour and grade — a big share of Mumbai's plastic waste comes through here to start a second life. Add it all up and Dharavi's combined annual turnover is often estimated at as much as a billion US dollars. This walk is about that: work, trade and skill packed into less than a square mile.",
        "It matters who leads it. Pooja was born and raised in Dharavi. The workshops on the route belong to people she knows; the lanes are the ones she grew up in. That is also why one rule is firm: no photographs of people. These are homes and workplaces, not exhibits, and everyone here gets the courtesy you would expect on your own street. You visit workshops, never anyone's home, and you come as a guest.",
        "You'll hear about daily life as well as industry — the schools, the festivals, the rents, the way ten trades share one lane — and you can ask Pooja anything as you walk. It is the heart of Mumbai most visitors never see, told by someone it belongs to."
      ],
      communityNote: "Around 15% of the fee from every AK Tours booking — not just this walk — goes directly to someone in the community who genuinely needs it. If you'd like to add to that, tell Pooja: every extra rupee is passed on.",
      itinerary: [
        { title: "Meeting point", detail: "Meet Pooja at the edge of Dharavi (or take the pick-up option) — details agreed on WhatsApp." },
        { title: "Recycling compounds", detail: "Plastic is sorted by colour and grade, shredded and washed — a big share of Mumbai's plastic waste starts its second life in these rooms." },
        { title: "Leather workshops", detail: "Watch hides become bags, belts and jackets in small units whose goods sell far beyond the neighbourhood." },
        { title: "Kumbharwada", detail: "The potters' quarter — working kilns, wheels turning, and rows of clay pots drying in the lanes." },
        { title: "Garment and papad units", detail: "Sewing lines at full tilt, and papads drying on rooftop racks in the sun." },
        { title: "Chai to finish", detail: "Sit down for a cutting chai and ask Pooja anything you've been saving up." }
      ],
      included: [
        "Pooja as your guide — born and raised here",
        "Bottled water",
        "Around 15% of the fee given back into the community",
        "Pick-up and drop-off, if you choose that option"
      ],
      excluded: [
        "Anything you buy from a workshop",
        "Meals beyond the chai stop"
      ],
      bring: [
        "Closed, comfortable shoes — lanes are narrow and surfaces uneven",
        "Light, modest clothing, plus a cap or scarf against the sun",
        "A little cash for chai or anything you buy from a workshop"
      ],
      goodToKnow: [
        "Group departures or private — all four prices above, per person",
        "No photography of people on the walk — see the ground rules below",
        "You visit workshops and lanes, never anyone's home",
        "Mornings are cooler, and the running order can flex around your day",
        "Monsoon season (roughly June to September) can reshuffle the route",
        "Not suited to prams; some lanes are narrow with steps — ask about mobility needs"
      ],
      specialBox: {
        title: "How the Dharavi walk works",
        items: [
          "No photographs of people, full stop. These are homes and workplaces, not exhibits — everyone gets the same courtesy you'd expect on your own street.",
          "Small groups only, or just your party on a private walk — never a crowd with a flag.",
          "We visit workshops, kilns and trading lanes. We do not enter anyone's home.",
          "Pooja grew up here. The route follows people and places she knows, and it changes if a workshop asks for a quiet day.",
          "Around 15% of the fee goes back into the community — and you can add to that if you wish.",
          "Bring questions — conversation is welcome; pointing cameras at people is not."
        ]
      },
      needsConfirmation: [
        "Duration stated as about 2–3 hours — confirm",
        "Where the walk meets when guests don't take pick-up",
        "Typical group size on group departures"
      ],
      metaDescription: "Walk Dharavi with Pooja, who was born and raised there: recycling, leather, pottery and daily life. Group tours from ₹800; 15% goes back to the community."
    },

    {
      slug: "elephanta-caves-tour",
      name: "Elephanta Caves Tour",
      tagline: "Across the harbour to the three faces of Shiva",
      duration: "About 5–6 hours, including the ferry both ways",
      priceFrom: "₹4,000",
      pricing: [
        { label: "Group tour", price: "₹4,000" },
        { label: "Private tour", price: "₹5,000" },
        { label: "Group tour, with pick-up & drop", price: "₹5,800" },
        { label: "Private tour, with pick-up & drop", price: "₹6,800" },
        { label: "Luxury: private speedboat, with pick-up & drop", price: "₹13,800" }
      ],
      image: "elephanta-caves-tour-1",
      imageAlt: "The three-faced Trimurti sculpture of Shiva carved into the rock wall of the main Elephanta cave",
      card: "Board the ferry at the Gateway of India and cross the harbour to Gharapuri — Elephanta Island — in about an hour. At the top of about 120 steps are rock-cut cave temples, carved around the 5th to 7th centuries, now UNESCO World Heritage. The centrepiece is the Trimurti: three faces of Shiva, about six metres tall. There's even a speedboat option if you'd rather skim across. Note: closed Mondays.",
      paragraphs: [
        "The main cave at Elephanta has no doors. You walk in from full sun into a hall of stone columns, and for a moment you can't see much at all. Then your eyes adjust and the Trimurti comes out of the dark: three faces of Shiva, about six metres tall, carved around the 5th to 7th centuries. People have stood on this spot, doing what you're doing, for more than a thousand years.",
        "The day starts at the Gateway of India. You board the ferry and spend about an hour crossing the harbour with Pooja, gulls trailing the boat, the city thinning to a line behind you. The island's own name is Gharapuri; the Portuguese renamed it after a stone elephant they found on the shore. From the jetty it's about 120 steps up to the caves, past stalls selling hats and carvings — keep your bag zipped; the monkeys here have quick hands.",
        "At the caves, an experienced local island guide takes the lead — Shiva dancing, Shiva marrying Parvati, Shiva as half woman and half man — the panels explained by someone who knows this rock inside out, with Pooja alongside. The site is UNESCO World Heritage, but it doesn't feel like a museum. It feels like a hill somebody hollowed into a temple, which is what it is.",
        "The last ferries return late afternoon, so mornings work best — or take the private speedboat option and set your own pace. One date to fix first: the caves are closed on Mondays. Message Pooja on WhatsApp and sort a day that suits."
      ],
      itinerary: [
        { title: "Meeting point or pick-up", detail: "Meet at the Gateway of India, or choose the with-pickup option and be collected from your hotel." },
        { title: "Gateway of India", detail: "Pick up ferry tickets and board beneath the arch, with the harbour opening out ahead." },
        { title: "The crossing", detail: "About an hour on the water with Pooja — or a fraction of that by private speedboat." },
        { title: "Gharapuri jetty", detail: "Step off at the island; when it's running, a small train covers the flat stretch to the base of the steps." },
        { title: "The 120 steps", detail: "Climb past stalls selling hats, carvings and cold drinks — bags zipped, because the monkeys are watching." },
        { title: "The main cave", detail: "A pillared hall cut straight into the hillside and dedicated to Shiva, carved around the 6th century." },
        { title: "The Trimurti", detail: "Three faces of Shiva, about six metres tall, on the back wall — give your eyes a minute to find them in the dark." },
        { title: "Around the panels", detail: "A local island guide leads you through the carvings, with Pooja alongside." },
        { title: "Ferry back", detail: "Catch a boat well before the last late-afternoon sailing, then it's back across the harbour." }
      ],
      included: [
        "Pooja with you for the day, plus a local island guide at the caves",
        "Bottled water",
        "Pick-up and drop-off, on the with-pickup options",
        "Private speedboat, on the luxury option"
      ],
      excluded: [
        "Ferry tickets and cave entry tickets",
        "Meals and drinks beyond the water provided",
        "The island's small train, if you choose to ride it"
      ],
      bring: [
        "A hat and sunscreen — the steps and the cave forecourt are in full sun",
        "Comfortable shoes for about 120 steps",
        "A bag that zips shut, for phone, snacks and sunglasses",
        "Small change for the stalls on the way up"
      ],
      goodToKnow: [
        "The caves are closed on Mondays — we plan the tour around it",
        "At the caves an experienced local guide leads, with Pooja alongside — two sets of stories instead of one",
        "It's about 120 steps from the jetty to the caves, with stalls to pause at on the way",
        "Monkeys here are bold: keep food, sunglasses and anything shiny zipped away",
        "Ferries run from morning and the last boats return late afternoon — mornings work best",
        "In the monsoon the sea can be rough and sailings sometimes pause — check with Pooja before you book"
      ],
      specialBox: null,
      needsConfirmation: [
        "Whether ferry tickets are included in any option, given ticket prices vs the tour price",
        "Speedboat option — capacity and how far ahead it must be booked",
        "Typical group size on group departures"
      ],
      metaDescription: "Elephanta Caves with AK Tours: ferry from the Gateway of India to the six-metre Trimurti. Group tours from ₹4,000, speedboat option available. Closed Mondays."
    },

    {
      slug: "dadar-flower-market",
      name: "Dadar Flower Market at Dawn",
      tagline: "Mumbai's colours, before the city wakes up",
      duration: "Early morning, about 2–3 hours",
      priceFrom: "₹1,500",
      pricing: [
        { label: "Group tour", price: "₹1,500" },
        { label: "Private tour", price: "₹2,500" },
        { label: "Group tour, with pick-up & drop", price: "₹3,300" },
        { label: "Private tour, with pick-up & drop", price: "₹4,300" }
      ],
      image: "dadar-flower-market-1",
      imageAlt: "Flower sellers at Dadar market with baskets of roses against a brightly painted wall",
      card: "Experience Mumbai waking up. Before sunrise, the lanes around Dadar station fill with flowers arriving fresh from across Maharashtra — marigolds by the sack, roses by the thousand, jasmine strung by hand at speed. Temples, weddings and half the city's flower stalls buy here before most people's alarms go off. Walk it with Pooja while the light comes up, then finish with chai as the market empties. The city's best-smelling hour.",
      paragraphs: [
        "The flowers get to Dadar before the sun does. Trucks and train-loads arrive through the small hours from growers across Maharashtra, and by five in the morning the lanes beside the station are ankle-deep in colour — marigolds in tumbling heaps, roses stacked in tight paper bundles, tuberoses, lotus buds, jasmine being threaded into garlands by hands that never seem to stop.",
        "This is a working wholesale market, not a show. The buyers are temple suppliers, wedding decorators and stallholders from all over the city, and the bargaining is quick and loud. Pooja walks you through it at the market's own pace — who grows what, why the marigold matters to every Indian doorway, what a day's trade looks like — while porters swing past with baskets on their heads.",
        "It's an early alarm, and it earns you the best light of the day. By the time the ordinary city is having breakfast, you've seen it at its most alive. Chai afterwards, obviously."
      ],
      itinerary: [
        { title: "Early meeting", detail: "Meet near Dadar station before sunrise — or be collected from your hotel on the with-pickup option." },
        { title: "The wholesale lanes", detail: "Sacks of marigolds, bundles of roses, and fast, loud trading as the city's buyers arrive." },
        { title: "The garland makers", detail: "Watch jasmine and marigold strung into garlands at astonishing speed." },
        { title: "The light coming up", detail: "The market at sunrise — the hour photographers get up early for." },
        { title: "Chai to finish", detail: "A hot glass at a stall as the market begins to empty out." }
      ],
      included: [
        "Pooja as your guide",
        "Bottled water",
        "Pick-up and drop-off, on the with-pickup options"
      ],
      excluded: [
        "Any flowers you can't resist buying",
        "Breakfast, if you add one after"
      ],
      bring: [
        "Shoes you don't mind getting wet — market floors are hosed and strewn with stems",
        "A light layer; it's the coolest hour of the day",
        "Your camera — but ask before photographing vendors up close"
      ],
      goodToKnow: [
        "Group departures or private — all four prices above, per person",
        "This means a genuinely early start — roughly with the sunrise; exact time agreed on WhatsApp",
        "It's a working market: stay nimble and keep clear of the porters",
        "Pairs well with a same-morning Dhobi Ghat visit — ask Pooja"
      ],
      specialBox: null,
      needsConfirmation: [
        "Exact start time and duration",
        "Meeting point when guests don't take pick-up"
      ],
      metaDescription: "Walk Dadar's wholesale flower market at dawn with a local guide — marigolds, roses and garland-makers before Mumbai wakes. Group tours from ₹1,500."
    },

    {
      slug: "mumbai-food-tour",
      name: "Street Food Tour",
      tagline: "Eat where Pooja eats, one stall at a time",
      duration: "About 3–4 hours, usually in the evening",
      priceFrom: "₹2,200",
      pricing: [
        { label: "By local train — group tour", price: "₹2,200" },
        { label: "By local train — private tour", price: "₹3,500" },
        { label: "By taxi — group tour", price: "₹2,500" },
        { label: "By taxi — private tour", price: "₹4,000" },
        { label: "By private car — group tour", price: "₹4,500" },
        { label: "By private car — private tour", price: "₹5,500" }
      ],
      image: "mumbai-food-tour-1",
      imageAlt: "Vada pav on a paper plate with a fried green chilli and red garlic chutney, soft pav buns behind",
      card: "An evening eating your way through Mumbai with Pooja, who knows which vada pav stall is worth the queue. Start with the fried-potato pav the city eats on the way to work, watch pav bhaji get mashed on a hot tawa, work through bhel and sev puri with cutting chai, then head for the kebab and sweet lanes around Mohammed Ali Road. Travel between stops by local train, taxi or private car — your pick. Tastings and water included.",
      paragraphs: [
        "The vada goes into the oil, puffs up, comes out golden, and lands in a split pav with green chutney and a smear of dry garlic. Pooja will tell you to eat it in three bites while it's still too hot, fried green chilli on the side if you're feeling brave. That's your first stop. It's how Mumbai eats on the way to work, and it's the right way to start an evening of eating.",
        "From there the pace is easy. You'll stand at a tawa the size of a table while pav bhaji is mashed and folded through butter, then move on to bhel and sev puri, mixed in front of you and made to your spice level — Pooja will ask before the first chutney goes in. Cutting chai in between: half a glass, strong and sweet, the pause this city runs on.",
        "Later you'll head for the lanes around Mohammed Ali Road, where kebab griddles and sweet shops run into the night. They're at their fullest during Ramzan, but the food is there all year. The evening ends the way Pooja likes it to: kulfi cut into slices, or a tall glass of falooda, rose syrup sinking through the milk.",
        "How you travel between stops is up to you: squeeze onto the local train and eat like a commuter, hop between areas by taxi, or keep a private car and driver for the evening. Vegetarian, Jain, easy on the chilli, a stall you've read about: say so. Every stop is somewhere Pooja eats herself, picked because the food moves fast and never sits. Message with your dates and any allergies, and she'll plan the evening around them."
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
        "Food tastings at the stops",
        "Bottled water throughout",
        "A route planned around your diet, allergies and spice level",
        "Train tickets, taxi or car — per the option you choose"
      ],
      excluded: [
        "Anything you order beyond the planned tastings"
      ],
      bring: [
        "Comfortable closed shoes — pavements are uneven, and wet in monsoon",
        "An appetite: come hungry, the portions add up across seven stops",
        "Hand wipes or sanitiser if you like having your own",
        "A little cash in case something extra catches your eye"
      ],
      goodToKnow: [
        "Pick your transport: local train (the full Mumbai experience), taxi, or private car — prices above, per person",
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
          "Tastings and bottled water are included in the price — no tap water, no ice of unknown origin",
          "Sensitive stomach? Go easy on raw garnishes early in your trip — Pooja will steer you towards the cooked, hot things first",
          "Vegetarian and Jain-friendly routes are easy in Mumbai; tell us what you eat when you book",
          "Message any allergies on WhatsApp when booking and the whole route is planned around them"
        ]
      },
      needsConfirmation: [
        "Roughly how many tastings the fee covers",
        "Typical group size on group departures"
      ],
      metaDescription: "An evening street food tour with a Mumbai local: vada pav, pav bhaji, Mohammed Ali Road. By train, taxi or car — from ₹2,200 with tastings included."
    },

    {
      slug: "tuk-tuk-tour",
      name: "Tuk Tuk Tour",
      tagline: "Three wheels into the lanes cars can't enter",
      duration: "About 3–4 hours, up to 60 km of riding",
      priceFrom: "₹600",
      pricing: [
        { label: "Tuk tuk ride (up to 60 km), with Pooja as guide", price: "₹800" },
        { label: "Tuk tuk ride (up to 60 km), driver only", price: "₹600" },
        { label: "Tuk tuk food tour — ride plus street-food stops", price: "₹2,000" }
      ],
      image: "tuk-tuk-tour-1",
      imageAlt: "A driver at the handlebars of a black-and-yellow Mumbai auto-rickshaw with a teal canopy, seen from the side",
      card: "Autos aren't allowed in south Mumbai — and that's the point. This tour belongs to the northern suburbs, where the three-wheeler is king. Climb in and rattle through Bandra's old villages, Ranwar and Chuim, down lanes no car can enter. Stop for film-star murals on Chapel Road, bazaar lanes stacked with fruit and fish, and chaat by the sea. Add the food edition and the auto hops between Pooja's favourite stalls. Doors open, street level, three passengers to an auto.",
      paragraphs: [
        "The driver tips the auto into a lane off Hill Road that no car could manage, and there's nothing between you and the street — no door, no window, just air. A handcart of okra passes close enough to count the pods. That's the whole idea. Auto-rickshaws are banned from Mumbai's island-city core, so this tour lives where the auto lives: the northern suburbs, where three wheels beat four.",
        "Bandra's old villages are where Pooja slows the ride down. Ranwar and Chuim were villages long before the high-rises grew around them; their lanes double back past low bungalows, wooden balconies and crosses at the corners. On Chapel Road you hop out and walk — the house walls carry murals, film stars painted two storeys tall, and the street reads like a family album left open.",
        "Then the bazaar lanes, taken at walking pace with the engine puttering: fish on ice, marigolds sold by the string, a tailor at his machine in an open doorway. Somewhere along the way there's a pause at a chai stall the drivers use — engine off, street still going past. And the finish is the sea: chaat where the stalls meet the sand, sev puri sharp with tamarind, pav bhaji straight off the tawa, crows negotiating for scraps.",
        "Three ways to ride: with Pooja aboard as your guide, ride-only with a trusted driver if you just want the wind and the streets, or the food edition — the auto becomes your table-hopper between Pooja's favourite stalls. Each auto takes three passengers, so a bigger group simply becomes a small convoy. Message with what you're curious about — food, murals, old Bandra — and the ride is built around it."
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
        "Auto-rickshaw and driver for up to 60 km",
        "Pooja as your guide, on the guided and food options",
        "Bottled water",
        "Street-food stops on the food edition"
      ],
      excluded: [
        "Food and drink, except on the food edition",
        "Tips for drivers (optional, always appreciated)"
      ],
      bring: [
        "Sunglasses and sunscreen — the auto is open to the street",
        "Cash for anything extra; small stalls rarely take foreign cards",
        "A scarf or buff if road dust bothers you",
        "A firm grip on your phone — there are no doors"
      ],
      goodToKnow: [
        "Prices above are per person; up to 3 passengers per auto, larger groups ride as a small convoy",
        "Autos are open-sided and the ride is part of the fun — expect honking, close traffic and the odd pothole",
        "You'll climb in and out of a low bench seat several times — mention any mobility concerns when you book",
        "Monsoon rain (roughly June to September) can reroute or shorten the ride",
        "Mornings are cooler; late afternoon catches the beach at its liveliest"
      ],
      specialBox: null,
      needsConfirmation: [
        "What food is included in the ₹2,000 food edition",
        "Pickup coverage for the suburbs",
        "Duration for each option"
      ],
      metaDescription: "Ride an auto-rickshaw through Bandra's old villages, murals and bazaars — with a guide from ₹800, or the tuk tuk food tour at ₹2,000 per person."
    },

    {
      slug: "dhobi-ghat-dharavi-henna",
      name: "Dhobi Ghat, Dharavi & Henna",
      tagline: "By local train — laundry, lanes and mehndi",
      duration: "About half a day",
      priceFrom: "₹2,500",
      pricing: [
        { label: "Group tour", price: "₹2,500" },
        { label: "Private tour", price: "₹3,500" },
        { label: "Group tour, with pick-up & drop", price: "₹4,300" },
        { label: "Private tour, with pick-up & drop", price: "₹5,300" }
      ],
      image: "dhobi-ghat-dharavi-henna-1",
      imageAlt: "Henna being applied by hand in a delicate pattern onto a woman's palm",
      card: "Ride the local train the way the city does, look down over Dhobi Ghat — the open-air laundry that washes Mumbai by hand — then walk Dharavi's working lanes with Pooja, meeting the artisans behind its pottery, leather and textiles. The day ends gently: a mehndi session, traditional henna patterns drawn on your hands while the street goes by. Real Mumbai, from its people to its traditions, finished with a flourish.",
      paragraphs: [
        "This one is Mumbai at ground level. It starts on the local train — the city's bloodstream, seven and a half million passengers a day — riding a few stops the way everyone here rides them. Pooja picks the right carriage, the right time, and suddenly you're not watching Mumbai through a car window any more; you're in it.",
        "First stop, the viewing deck above Dhobi Ghat: the great open-air laundry where washing is beaten clean in concrete pens, spun in vast drums, and hung out in colour-sorted rows — a system running on muscle and memory for over a century. Then on to Dharavi, where Pooja was born and raised, for the working lanes: potters' kilns, leather workshops, the small industries most visitors never hear about. Her rules apply here — no photographs of people, workshops not homes, come as a guest.",
        "The finish is the gentle part. You sit down with a mehndi artist and have traditional henna drawn onto your hands — cones of ground henna leaf, patterns that have been passed down for generations, and half an hour of sitting still while the street carries on around you. The stain deepens overnight; it's the souvenir you wear home."
      ],
      itinerary: [
        { title: "The local train", detail: "Ride a few stops on Mumbai's suburban railway, the way seven million people do every day." },
        { title: "Dhobi Ghat viewing deck", detail: "Look down over the open-air laundry — washing pens, drying lines, and a century-old system at full tilt." },
        { title: "Dharavi's working lanes", detail: "Pottery, leather and textiles with Pooja, who grew up here — no photography of people, ever." },
        { title: "Meet the artisans", detail: "Watch craftspeople at work and hear how the trades pass down through families." },
        { title: "Mehndi to finish", detail: "Traditional henna patterns drawn on your hands — sit back and let the artist work." }
      ],
      included: [
        "Pooja as your guide throughout",
        "Local train tickets",
        "The mehndi (henna) session",
        "Bottled water",
        "Pick-up and drop-off, on the with-pickup options"
      ],
      excluded: [
        "Meals and drinks",
        "Anything you buy from a workshop"
      ],
      bring: [
        "Closed, comfortable shoes for the lanes",
        "Light, modest clothing",
        "Patience for the henna to dry — plan nothing hands-on straight after",
        "A little cash for chai or workshop purchases"
      ],
      goodToKnow: [
        "Group departures or private — all four prices above, per person",
        "The Dharavi ground rules apply: no photography of people, workshops not homes",
        "Henna is plant-based and temporary — the stain deepens over a day and fades in one to three weeks",
        "Tell Pooja if you'd like the henna simple or elaborate — both are traditional",
        "Trains are quieter outside rush hours; the route is timed accordingly"
      ],
      specialBox: null,
      needsConfirmation: [
        "Duration — stated as about half a day",
        "Whether the mehndi session is included for every guest in a group",
        "Meeting point when guests don't take pick-up"
      ],
      metaDescription: "By local train to Dhobi Ghat and Dharavi with a guide born there, finishing with a traditional mehndi session. Group tours from ₹2,500 per person."
    },

    {
      slug: "shopping-tour",
      name: "Shopping Tour",
      tagline: "Four markets, one guide who knows the fair stalls",
      duration: "About 6–8 hours (shorter if you skip a market)",
      priceFrom: "₹3,800",
      pricing: [
        { label: "With pick-up & drop", price: "₹3,800" }
      ],
      image: "shopping-tour-1",
      imageAlt: "A crowded market lane near Zaveri Bazaar lined with stalls and bright umbrellas, mosque domes rising behind",
      card: "Shop the way Pooja shops. Start among the pavement stalls of Colaba Causeway, move through Crawford Market's spice and dry-fruit lanes, walk the gold lanes of Zaveri Bazaar, then finish with shoes and streetwear on Linking Road in Bandra. Pooja knows which stalls charge a fair price and which are set up for tourists — and the only shopping list that matters is yours. Unhurried, and planned around what you actually want to buy.",
      paragraphs: [
        "The first number you hear on Colaba Causeway is an invitation, not a price. Pooja will show you what to do with it — how to counter, when to smile and walk away, and when a stall is simply fair and haggling would be rude. She has shopped these streets all her life; she knows which sellers she would send her own family to.",
        "The day runs south to north. Colaba Causeway first: pavement stalls of scarves, sandals, brass and bags, with small boutiques tucked in behind them. Then Crawford Market, a Victorian market hall where you can buy whole spices by weight, dry fruit by the handful, and the steel and copper homewares Mumbai kitchens actually use. A short hop away is Zaveri Bazaar, the jewellery district — lane after lane of gold and silver dealers, where pieces are still sold by weight at the day's rate.",
        "After lunch — Pooja knows where to stop, and you eat what you fancy — the car takes you north to Bandra for Linking Road: trainers, bags and streetwear stacked shoulder-high, and the best spot of the day to put your new haggling skills to work. Buy plenty or buy nothing; the only list that matters is yours.",
        "The route bends to you. Serious about jewellery? Give Zaveri Bazaar the whole afternoon. Only after spices and fabric? Linger at Crawford Market and skip Bandra. Message Pooja on WhatsApp and tell her what you're hunting for."
      ],
      itinerary: [
        { title: "Hotel pickup", detail: "The car collects you and Pooja goes over your shopping list before you set off." },
        { title: "Colaba Causeway", detail: "Pavement stalls of scarves, sandals, brass and bags, with small boutiques behind them — and your first lesson in reading an opening price." },
        { title: "Crawford Market", detail: "Whole spices, dry fruit and everyday homewares under the roof of a Victorian market hall." },
        { title: "Zaveri Bazaar", detail: "The jewellery district — lane after lane of gold and silver dealers, where pieces are sold by weight at the day's rate." },
        { title: "Lunch break", detail: "Pooja suggests a spot near the bazaars; you choose, and meals are at your own expense." },
        { title: "Drive to Bandra", detail: "The car covers the hop north across the city." },
        { title: "Linking Road", detail: "Shoes, bags and streetwear stalls — the best place of the day to practise your bargaining." },
        { title: "Drop-off", detail: "Back to your hotel with your haul, or stay on in Bandra for the evening — your call." }
      ],
      included: [
        "Pooja as your guide for the day",
        "Pick-up, drop-off and the car between markets",
        "Bottled water",
        "Bargaining help at the stalls — as much or as little as you want"
      ],
      excluded: [
        "Your purchases — what you buy is yours to pay for",
        "Meals and drinks beyond the water provided"
      ],
      bring: [
        "A roomy, empty bag — you will fill it",
        "Cash in smaller notes for the street stalls",
        "Comfortable shoes — pavements are uneven and you'll be on your feet",
        "A photo of anything specific you're hunting for — it helps Pooja plan"
      ],
      goodToKnow: [
        "Timings are flexible; mornings are cooler and the lanes are quieter",
        "Crawford Market and Zaveri Bazaar close on Sundays, so this tour runs best Monday to Saturday — if Sunday is your only day, Pooja will replan the route",
        "If you don't want to buy, you don't buy — there's no pressure at any stop",
        "One honest exception below — read the tips box"
      ],
      specialBox: {
        title: "Pooja's bargaining tips — and one honest note",
        items: [
          "Haggle at street stalls, not fixed-price shops — if the price is on a tag, that's the price.",
          "Open at about half the first quote and meet somewhere in the middle.",
          "Walking away politely often brings the price down — and you can always walk back.",
          "Two or three items from one stall earns a better rate than one item from three.",
          "Carry smaller notes; exact change closes a deal faster.",
          "Locals pay by UPI everywhere, but as a visitor you'll mostly be using cash — and cash bargains harder anyway.",
          "Keep it friendly — it's a game both sides enjoy, not a fight.",
          "Full transparency: one long-standing antiques shop on the route pays Pooja a small commission. She takes guests there because the pieces are genuinely good — and you're always free to skip it. No other stop involves any arrangement."
        ]
      },
      needsConfirmation: [
        "Whether group and without-pickup prices should also be offered",
        "The antiques shop disclosure — confirm the wording and the shop's name"
      ],
      metaDescription: "A Mumbai shopping tour with a local guide: Colaba Causeway, Crawford Market, Zaveri Bazaar and Linking Road. ₹3,800 per person with pick-up and drop."
    },

    {
      slug: "religious-tour",
      name: "Religious Tour",
      tagline: "Temples, a dargah, a basilica — one city, one day",
      duration: "About 6–7 hours, depending on traffic and the tide",
      priceFrom: "₹5,800",
      pricing: [
        { label: "Group tour, with pick-up & drop", price: "₹5,800" },
        { label: "Private tour, with pick-up & drop", price: "₹7,600" }
      ],
      image: "religious-tour-1",
      imageAlt: "Haji Ali Dargah on its islet in the Arabian Sea at sunset, framed by the silhouette of a palm tree",
      card: "Mumbai prays in every direction. In one day you'll queue with Ganesha devotees at Siddhivinayak, walk the sea causeway to Haji Ali Dargah at low tide, climb the Bandra hilltop to Mount Mary Basilica, and find Mumba Devi — the goddess the city is named after — deep in the Bhuleshwar bazaar lanes. Babulnath's old Shiva temple rounds it off. Pooja plans the route around the tide and explains what to wear at every door.",
      paragraphs: [
        "Twice a day, the sea decides who reaches Haji Ali. The dargah — a mosque and a saint's tomb — stands on an islet off the shoreline, and the only way over is a causeway that goes under water at high tide. So this tour starts with a tide table. Pooja checks it before your day and plans the route around that walk — the Arabian Sea on both sides, qawwali sometimes drifting from the courtyard.",
        "The rest of the day moves between faiths the way Mumbai does — without fuss. At Siddhivinayak in Prabhadevi, one of the city's most visited temples, stalls outside sell marigold garlands and coconuts for Ganesha. Mumba Devi, the goddess the city takes its name from, sits deep in the Bhuleshwar bazaar lanes, past flower sellers and silver shops. Babulnath, an old Shiva temple near Girgaon Chowpatty, is a climb of stone steps that ends in quiet.",
        "Bandra changes the key: Mount Mary Basilica on its hilltop, where stalls sell wax candles shaped like hands, hearts and houses — you offer the shape of the thing you're praying for. Pooja grew up with neighbours who kept every one of these festivals, and she'll tell you what to wear at each door, when shoes come off, and what the coconut in your hand is for. The car covers the stretches between, so the day flows."
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
        "Pick-up, drop-off and the car between sites",
        "Bottled water",
        "Route planned around tide timings for Haji Ali"
      ],
      excluded: [
        "Donations and offerings at any site (always optional)",
        "Camera or entry fees where a site charges them",
        "Meals and drinks beyond the water provided"
      ],
      bring: [
        "Easy slip-on shoes — you'll be taking them off a lot",
        "Clothes that cover shoulders and knees",
        "A scarf of your own for Haji Ali's inner sanctum",
        "Socks, in case marble floors are hot"
      ],
      goodToKnow: [
        "Group departures or private — both prices above, per person",
        "Haji Ali's causeway floods at high tide — access is tide-dependent, so the running order may change on the day",
        "Tuesdays are the busiest day at Siddhivinayak and queues can be long",
        "These are working places of worship, not museums — areas can close for prayers or rituals without notice",
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
        "Typical group size on group departures",
        "Scarf availability at Haji Ali's inner sanctum (stated as 'usually available')"
      ],
      metaDescription: "A day across Mumbai's places of faith: Siddhivinayak, Haji Ali at low tide, Mount Mary, Mumba Devi and Babulnath. Group tours from ₹5,800 with pick-up."
    },

    {
      slug: "kanheri-caves-tour",
      name: "Kanheri Caves Tour",
      tagline: "A forest in the city, caves in the rock",
      duration: "About 5–6 hours door to door",
      priceFrom: "₹7,135",
      pricing: [
        { label: "Group tour", price: "₹7,135" },
        { label: "Private tour", price: "₹11,895" },
        { label: "Group tour, with pick-up & drop", price: "₹9,000" },
        { label: "Private tour, with pick-up & drop", price: "₹13,000" }
      ],
      image: "kanheri-caves-tour-1",
      imageAlt: "The dark basalt rock face of the Kanheri Caves rising above a sunlit forecourt in Sanjay Gandhi National Park",
      card: "A forest the size of a small city sits inside Mumbai, and cut into its black basalt hill are more than 100 Buddhist caves — the oldest about 2,000 years old. Pooja walks you through the grand chaitya prayer hall, past monastic cells, ancient inscriptions and rock-cut cisterns, up staircases carved by hand. Watch for spotted deer and langurs on the way in. Best in or just after the monsoon, when streams run down the hillside.",
      paragraphs: [
        "The great chaitya hall at Kanheri was not built. It was cut — the tall pillars, the stupa at the far end, the whole prayer hall carved into a hill of black basalt by hand. Monks began this work about 2,000 years ago and kept at it for close to a thousand years. What they left behind is more than 100 caves: prayer halls, sleeping cells, rainwater cisterns, inscriptions from donors two millennia gone, and staircases chiselled into the rock to link them all together.",
        "To reach them you pass through Sanjay Gandhi National Park in Borivali — a proper forest, protected, inside Mumbai's city limits. Spotted deer often cross the road ahead of the car; langurs watch from the trees. Come in or just after the monsoon and the hillside runs with streams; the cisterns the monks cut still fill with rain, the same way they have for centuries.",
        "Pooja has guided travellers around Mumbai for years, and she treats Kanheri as a walk, not a checklist. The steps are uneven and the outcrop climbs, so you take it at your pace — pause in the shade, sit in a quiet cell away from the main hall, let the forest do its thing. Group departure or private, the day is planned around you."
      ],
      itinerary: [
        { title: "Morning pickup", detail: "On the with-pickup options the car collects you; otherwise meet at the park — details settled on WhatsApp." },
        { title: "Into the national park", detail: "Entry tickets at the gate, then the forest closes over the road." },
        { title: "The forest road", detail: "Watch the verges for spotted deer, and the branches above for langurs." },
        { title: "The great chaitya hall", detail: "Kanheri's grand prayer hall: rows of tall carved pillars leading to a rock-cut stupa." },
        { title: "The monks' cells", detail: "Plain little rooms with stone benches, home to generations of Buddhist monks." },
        { title: "Cisterns and water channels", detail: "Rainwater tanks cut into the basalt, still filling every monsoon after centuries." },
        { title: "Steps to the upper caves", detail: "Hand-cut staircases climb the outcrop, linking cave to cave, with forest views opening as you rise." },
        { title: "Back through the forest", detail: "Down to the gate and home — or a drop-off somewhere else if you fancy, just say." }
      ],
      included: [
        "Pooja as your guide throughout",
        "Bottled water",
        "Pick-up and drop-off, on the with-pickup options"
      ],
      excluded: [
        "Park and cave entry tickets (bought at the gate)",
        "Meals, snacks and drinks beyond the water provided"
      ],
      bring: [
        "Shoes with grip — the rock steps are uneven and slick in the rains",
        "A hat",
        "A light raincoat or umbrella in monsoon season",
        "Insect repellent",
        "Cash for entry tickets"
      ],
      goodToKnow: [
        "Group departures or private — all four prices above, per person",
        "Kanheri Caves are closed on Mondays",
        "Best in and just after the monsoon, roughly June to October, when the streams run",
        "There is real walking here — rock-cut steps and slopes; tell Pooja if you'd like a gentler pace",
        "Monkeys are quick — keep food and loose items zipped away",
        "It's a protected forest: whatever you carry in, carry out"
      ],
      specialBox: null,
      needsConfirmation: [
        "Prices as dictated (group ₹7,135 / private ₹11,895 without pickup) — double-check these figures and what they include",
        "Whether the car can drive inside the park up to the caves, or the park shuttle is used"
      ],
      metaDescription: "More than 100 Buddhist caves in a forest inside Mumbai. Kanheri Caves with a local guide — rock-cut halls, spotted deer and monsoon streams."
    },

    {
      slug: "lonavala-day-trip",
      name: "Lonavala Day Trip",
      tagline: "Hill air, ancient caves, chikki for the ride home",
      duration: "Full day, about 10–12 hours",
      priceFrom: "₹7,500",
      pricing: [
        { label: "Private tour, with pick-up & drop", price: "₹7,500" }
      ],
      image: "lonavala-day-trip-1",
      imageAlt: "The expressway winding through green Western Ghats valleys near Khandala, hills rising on both sides",
      card: "Swap sea air for hill air. Pooja and a driver collect you from your hotel and take the expressway into the Western Ghats — about two to two and a half hours to Lonavala. Climb the steps to Karla Caves, a Buddhist prayer hall cut into rock about 2,000 years ago, stand over the valleys at Lion's Point, and buy chikki, the local nut brittle, for the trip home. In monsoon the hills run with waterfalls and mist — and the crowds come out to meet them.",
      paragraphs: [
        "In the last stretch before Lonavala, the expressway starts to climb, the air cools, and Mumbai's flat sprawl gives way to green ridges. A short drive out of town, at the top of a long stepped path, waits the reason to make this trip: Karla Caves, a Buddhist chaitya hall cut into the rock about 2,000 years ago, one of the largest of its kind in India. Look up when you get inside. The ribs across the vaulted ceiling are teak, and they are original. Pooja will give you time to simply stand there.",
        "This is a proper day out — about 83 km each way on the expressway, roughly two to two and a half hours depending on traffic — so Pooja suggests an early start. The car and driver are yours for the day, and because the tour is private, the day is yours to rearrange: linger at the caves, skip a stop, add one. Lunch is in town; if you let Pooja order, expect a Maharashtrian thali and no regrets.",
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
        "Private car with driver, pick-up to drop-off",
        "Bottled water"
      ],
      excluded: [
        "Entry tickets at Karla Caves",
        "Meals and drinks beyond the water provided",
        "Chikki and other shopping"
      ],
      bring: [
        "Shoes with grip for the cave steps",
        "Rain jacket or umbrella in monsoon (June–September)",
        "Sun hat and sunscreen in the dry months",
        "Cash in small notes for tickets and chikki"
      ],
      goodToKnow: [
        "Private only, priced per person, with the car included",
        "The climb to Karla Caves is a steady flight of steps — take it at your own pace; there are stalls along the way",
        "Bhushi Dam only really flows during and just after monsoon — and entering the water there is periodically prohibited; treat it as a viewpoint and follow the rules on the day",
        "Monsoon weekends are the busiest time across Lonavala — go midweek if your dates allow",
        "It is a long day with about 4–5 hours of driving in total"
      ],
      specialBox: null,
      needsConfirmation: [
        "Whether a group-rate version is offered",
        "Vehicle type and whether tolls and parking are included"
      ],
      metaDescription: "A private full-day trip from Mumbai: the 2,000-year-old Karla Caves, valley viewpoints, monsoon waterfalls and chikki. ₹7,500 per person with car."
    },

    {
      slug: "bollywood-tour",
      name: "Bollywood Tour",
      tagline: "Inside a real working film studio",
      duration: "About 5–6 hours",
      priceFrom: "₹5,500",
      pricing: [
        { label: "Group tour", price: "₹5,500" },
        { label: "Private tour", price: "₹6,500" },
        { label: "Group tour, with pick-up & drop", price: "₹7,500" },
        { label: "Private tour, with pick-up & drop", price: "₹8,500" }
      ],
      image: "bollywood-tour-1",
      imageAlt: "A film clapperboard held up on a set, crew members blurred in the background",
      card: "Step inside a real working Bollywood studio. Through AK Tours' partner experience at A to Z Studios, you walk sets used in films like Jawan and Singham 3 — a police station, a courtroom, a hospital, a whole middle-class flat — then act a scene yourself, record a Bollywood song in a professional booth, try the green-screen VFX zone, and catch a live dance show with a workshop to follow. Finish, if you like, past the star homes of Bandra. No fake promises of celebrity sightings — this is the real machinery of make-believe.",
      paragraphs: [
        "There's a police station in Goregaon that has arrested half of Bollywood — it's a set, inside A to Z Studios, and it's been in more films than most actors. That's where this tour goes: not a bus window and a studio gate, but inside a real working film studio, through the Bollywood Safari partner experience. You walk the standing sets — police station, courtroom, hospital, corporate office, a complete 3BHK family flat — used in productions like Jawan, Singham 3, War 2 and Sky Force, and see how a dry afternoon becomes a monsoon scene.",
        "Then you stop watching and join in. Scene recreation zones put you on the actual sets, script in hand. A professional recording booth lets you sing a Bollywood number or deliver a famous line — you take the recording home. There's a costume and culture gallery of sarees, bridal wear and cinema-era pieces, an awards gallery for red-carpet photos, a green-screen zone where technicians drop you into a blockbuster, and yes, the three chairs from 3 Idiots.",
        "The visit builds to a one-hour live dance show — retro hits, folk numbers, a big finale — followed by a workshop where choreographers teach you a hook step and you perform it, imperfectly and happily, on stage. Depending on the day, the tour can finish across town at the star gates: Mannat on Bandstand and Jalsa in Juhu, where the crowds themselves are worth watching. One honest note, as always: it's a working studio, and live shoots and celebrity sightings are never guaranteed — what's guaranteed is the machinery, and it's better than the myth."
      ],
      itinerary: [
        { title: "Meeting or pick-up", detail: "Meet at the studio in Goregaon, or take the with-pickup option and be collected from your hotel." },
        { title: "The standing sets", detail: "Police station, courtroom, hospital, family flat and more — the sets behind films like Jawan and Singham 3." },
        { title: "Scene recreation", detail: "Step onto the sets yourself and play a scene where the actors played theirs." },
        { title: "The recording booth", detail: "Sing a Bollywood song or perform a famous dialogue in a professional booth — the recording is yours to keep." },
        { title: "Costume & culture gallery", detail: "Sarees, bridal and festive wear, and original and replica film costumes." },
        { title: "Selfie zones & green screen", detail: "Awards gallery, magazine covers, the 3 Idiots chairs, a horror zone, and VFX that drops you into a blockbuster." },
        { title: "Live dance show & workshop", detail: "A one-hour stage show, then choreographers teach you a hook step to perform yourself." },
        { title: "Star homes (time permitting)", detail: "Drive past Mannat and Jalsa, where the crowds at the gates are a show of their own." }
      ],
      included: [
        "Pooja as your guide",
        "The Bollywood Safari studio experience with all its zones",
        "The live dance show and dance workshop",
        "Your souvenir audio recording",
        "Bottled water",
        "Pick-up and drop-off, on the with-pickup options"
      ],
      excluded: [
        "Meals and drinks beyond the water provided",
        "Personal expenses and extra photo prints"
      ],
      bring: [
        "Comfortable shoes — you're on your feet through the sets",
        "Your phone or camera — follow the studio's photography rules on the day",
        "A little courage for the recording booth; nobody sings it perfectly"
      ],
      goodToKnow: [
        "Group departures or private — all four prices above, per person",
        "Live shoots and celebrity sightings are never guaranteed — the sets, shows and zones are",
        "The studio experience runs to a schedule, so start times can shift — Pooja confirms on WhatsApp",
        "Star homes are private residences, seen from outside the gates only"
      ],
      specialBox: null,
      needsConfirmation: [
        "Whether studio experience tickets are included in the prices above",
        "Whether the star-homes drive is part of every option or only with-pickup ones"
      ],
      metaDescription: "Inside a real working Bollywood studio: film sets, scene recreation, a recording booth, live dance show and workshop. Group tours from ₹5,500 per person."
    },

    {
      slug: "cooking-class",
      name: "Cooking Class",
      tagline: "Cook it, eat it, take the recipes home",
      duration: "About half a day",
      priceFrom: "₹4,000",
      pricing: [
        { label: "With Pooja as your guide", price: "₹4,000" }
      ],
      image: "cooking-class-1",
      imageAlt: "Indian spices laid out on a dark surface — turmeric, chillies, cardamom, curry leaves and spice-laden spoons",
      card: "Learn to make the food you've been eating all week. A hands-on class built around real home cooking: how a masala is layered, why the tadka goes in last, what all those spices in the market actually do. You cook, you taste as you go, and you sit down to eat what you made — then carry the recipes home. Come hungry and curious; leave able to make dal that tastes like Mumbai.",
      paragraphs: [
        "Every Indian kitchen runs on a spice box — a round steel tin with seven small bowls, and a logic to which seven earn a place. That's where this class starts. Before anything touches a pan you'll smell and taste your way through the essentials: cumin and mustard seed, turmeric, chillies that bring heat and chillies that bring colour, and the curry leaves that make a kitchen smell like home.",
        "Then you cook — hands in, aprons on. The menu is built around what you like to eat: classic dals and sabzis, a curry layered properly from onions up, soft rotis or rice done right, and the small tricks that never make it into recipe books, like when to add the tadka and how to rescue an over-salted pot. Vegetarian is easy; so are most diets — say so when you book.",
        "The best part is the obvious one: you sit down and eat your own cooking, and it's good. You'll leave with the recipes, a feel for the spice box, and the ability to bring a little of Mumbai home in a pan. Message Pooja with your dates and what you'd love to learn to make."
      ],
      itinerary: [
        { title: "The spice box", detail: "Smell and taste your way through the essential spices and learn what each actually does." },
        { title: "Prep together", detail: "Chop, grind and marinate — the unglamorous ten minutes that make the next hour easy." },
        { title: "At the stove", detail: "Build a masala from onions up, layer a curry, and get the tadka moment right." },
        { title: "Breads or rice", detail: "Soft rotis rolled by hand, or rice done properly — your choice." },
        { title: "Eat what you made", detail: "Sit down to your own thali, and go back for seconds." },
        { title: "Recipes to go", detail: "Leave with the recipes and the confidence to repeat them at home." }
      ],
      included: [
        "The full hands-on class with Pooja",
        "All ingredients",
        "The meal you cook, eaten together",
        "Recipes to take home",
        "Bottled water"
      ],
      excluded: [
        "Transport to the venue (pick-up can be arranged — ask when booking)"
      ],
      bring: [
        "An appetite — you eat everything you make",
        "Any dietary needs or allergies, mentioned when you book",
        "A notebook if you like your recipes on paper"
      ],
      goodToKnow: [
        "₹4,000 per person, with Pooja guiding the session",
        "Vegetarian and Jain-friendly menus are easy — say so when you book",
        "Timing is flexible; the class takes about half a day including the meal"
      ],
      specialBox: null,
      needsConfirmation: [
        "Venue and exact duration",
        "Whether pick-up to the venue is available and at what cost"
      ],
      metaDescription: "A hands-on Indian cooking class in Mumbai: spices, real home dishes, and a meal you cook yourself. ₹4,000 per person including ingredients."
    },

    {
      slug: "northeast-india-tours",
      name: "Northeast India Tours",
      tagline: "Assam, Meghalaya and the Darjeeling hills — arranged end to end",
      duration: "Multi-day trips, planned around you",
      priceFrom: "₹20,000",
      pricing: [
        { label: "Guwahati", price: "₹20,000" },
        { label: "Shillong", price: "₹20,000" },
        { label: "Meghalaya", price: "₹20,000" },
        { label: "Dhubri", price: "₹20,000" },
        { label: "Darjeeling", price: "₹20,000" },
        { label: "Kaziranga", price: "₹25,000" },
        { label: "Homestay add-on: local house, all meals included, per day", price: "₹7,000" }
      ],
      image: "northeast-india-1",
      imageAlt: "A one-horned rhinoceros in the wetland grasses of Kaziranga National Park, hazy mountains on the horizon",
      card: "Mumbai isn't the only India Pooja can show you. AK Tours arranges multi-day trips to the Northeast — Guwahati and the Kamakhya temple, Shillong and Meghalaya's waterfalls and living root bridges, Kaziranga's one-horned rhinos, the tea gardens and mountain views of Darjeeling — with a private car and pick-up and drop throughout. Stay in hotels, or add a homestay in a local house with every meal cooked for you. Tell her where you're dreaming of.",
      paragraphs: [
        "The far Northeast is a different India: hills that stay green all year, waterfalls that drop off the edge of plateaus, tea gardens combed across whole valleys, and a pace that makes Mumbai feel like another planet. It's a part of the country most visitors never reach — which is exactly the reason to go.",
        "AK Tours arranges the whole trip: a private car with pick-up and drop throughout, the route planned around what you want — the Kamakhya temple above Guwahati, Shillong's hills and Meghalaya's living root bridges and falls, jeep and elephant-back safaris past Kaziranga's one-horned rhinos, Dhubri on the great Brahmaputra, or Darjeeling's tea gardens with the high Himalaya on the horizon. Trips can cover one destination slowly or string several together.",
        "For the real thing, add the homestay: a local house, a family table, and every meal — breakfast, lunch and dinner — cooked for you, at ₹7,000 per day all in. Prices above are per person per destination; trip length and the exact plan are agreed on WhatsApp, so start with your dates and wishlist and Pooja will build the route."
      ],
      itinerary: [
        { title: "Guwahati", detail: "Gateway to the Northeast, on the Brahmaputra — home of the hilltop Kamakhya temple." },
        { title: "Shillong", detail: "Pine hills, lakes and waterfalls in the capital of Meghalaya." },
        { title: "Meghalaya", detail: "Living root bridges, plunging falls and some of the wettest, greenest country on Earth." },
        { title: "Kaziranga", detail: "UNESCO-listed national park, home of the one-horned rhinoceros — safaris by jeep and elephant." },
        { title: "Dhubri", detail: "River-town life on the vast Brahmaputra, far off the tourist trail." },
        { title: "Darjeeling", detail: "Tea gardens, toy-train country and Kanchenjunga views in the eastern Himalaya." }
      ],
      included: [
        "Private car with pick-up and drop throughout",
        "Trip planning end to end",
        "All meals, on homestay days",
        "Bottled water"
      ],
      excluded: [
        "Flights or trains to the Northeast",
        "Hotels (arranged for you; homestay priced separately above)",
        "Park fees and safari tickets"
      ],
      bring: [
        "Layers — hill weather turns quickly, even in warm months",
        "Rain protection, especially for Meghalaya",
        "Binoculars for Kaziranga if you have them",
        "A little more time than you think you need"
      ],
      goodToKnow: [
        "Prices are per person per destination; trip length and the full plan are agreed on WhatsApp",
        "The homestay add-on is ₹7,000 per person per day with all meals included",
        "Kaziranga's safari season generally runs from autumn to spring — the park largely closes in monsoon",
        "Multiple destinations combine well into one trip — ask Pooja what fits your dates"
      ],
      specialBox: null,
      needsConfirmation: [
        "What trip length each per-destination price covers",
        "Whether Pooja accompanies these trips personally or hosts through local partners",
        "What exactly is included per destination (hotels, safaris, entry fees)"
      ],
      metaDescription: "Multi-day Northeast India trips arranged end to end: Guwahati, Shillong, Meghalaya, Kaziranga, Dhubri and Darjeeling, with private car throughout."
    }
  ]
};

/* Make the content usable both in the browser and by the page generator. */
if (typeof module !== "undefined" && module.exports) { module.exports = CONTENT; }
