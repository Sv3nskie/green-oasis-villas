/* Green Oasis Villas Borobudur — page logic
   All copy for NL / EN / ID lives in T below. Edit text there. */

(function () {
  'use strict';

  // ---------- Settings (placeholders — replace before launch) ----------
  var WA_NUMBER = '620000000000';
  var LANG_KEY = 'goav-lang';
  var RATE = 1100000;
  var DEFAULT_LANG = 'nl';

  // ---------- Content ----------
  var PHOTOS = [
    { src: 'assets/hd/deck.jpg', c: 1, r: 3, cat: 'out', alt: { nl: 'Houten terras en centrale keuken aan het zwembad', en: 'Teak deck and central kitchen by the pool', id: 'Dek kayu dan dapur bersama di tepi kolam' } },
    { src: 'assets/hd/villa-day.jpg', c: 1, r: 3, cat: 'out', alt: { nl: 'Villa met bougainville en zwembad', en: 'Villa with bougainvillea and pool', id: 'Vila dengan bugenvil dan kolam renang' } },
    { src: 'assets/hd/living.jpg', c: 1, r: 2, cat: 'in', alt: { nl: 'Lichte woonkamer met houten nokplafond', en: 'Bright living room under a timber ceiling', id: 'Ruang tamu terang dengan plafon kayu' } },
    { src: 'assets/hd/pool-night.jpg', c: 2, r: 2, cat: 'eve', alt: { nl: 'Verlicht zwembad in de avond', en: 'The pool lit up at night', id: 'Kolam renang di malam hari' } },
    { src: 'assets/hd/bedroom.jpg', c: 1, r: 2, cat: 'in', alt: { nl: 'Slaapkamer met tuinzicht', en: 'Bedroom opening onto the garden', id: 'Kamar tidur menghadap taman' } },
    { src: 'assets/hd/orchid.jpg', c: 1, r: 2, cat: 'in', alt: { nl: 'Koffie- en theehoek met zicht op het zwembad', en: 'Coffee & tea corner with pool view', id: 'Sudut kopi & teh dengan pemandangan kolam' } },
    { src: 'assets/hd/lounge.jpg', c: 1, r: 3, cat: 'eve', alt: { nl: 'Panoramaterras op de bovenverdieping', en: 'Upper-floor panorama terrace', id: 'Teras panorama di lantai atas' } },
    { src: 'assets/hd/bathroom.jpg', c: 1, r: 2, cat: 'in', alt: { nl: 'Badkamer met daglicht en terrazzo', en: 'Daylit terrazzo bathroom', id: 'Kamar mandi terrazzo yang terang' } },
    { src: 'assets/hd/bar.jpg', c: 1, r: 2, cat: 'in', alt: { nl: 'Minibar en glaswerk', en: 'Mini bar and glassware', id: 'Mini bar dan gelas' } },
    { src: 'assets/hd/garden-night.jpg', c: 1, r: 2, cat: 'eve', alt: { nl: 'Tropische tuin met stapstenen', en: 'Tropical garden with stepping stones', id: 'Taman tropis dengan batu pijakan' } },
    { src: 'assets/hd/pool-blue.jpg', c: 1, r: 2, cat: 'eve', alt: { nl: 'Zwembad en villa bij avond', en: 'Pool and villa after dark', id: 'Kolam dan vila di malam hari' } },
    { src: 'assets/hd/balcony.jpg', c: 1, r: 2, cat: 'eve', alt: { nl: 'Loungeterras bij avondlicht', en: 'Lounge terrace in evening light', id: 'Teras santai di sore hari' } }
  ];
  var CATS = ['all', 'in', 'out', 'eve'];

  var AMENITIES = [
    { title: { nl: 'Ochtend', en: 'Mornings', id: 'Pagi hari' }, img: 'assets/hd/orchid.jpg', items: [
      ['coffee', 'Ontbijt inbegrepen', 'Breakfast included', 'Sarapan termasuk'],
      ['bowl-food', 'Floating breakfast in het zwembad', 'Floating breakfast in the pool', 'Floating breakfast di kolam'],
      ['orange-slice', 'Welkomstdrankje', 'Welcome drink', 'Minuman selamat datang'],
      ['drop', 'Koffie, thee & mineraalwater', 'Coffee, tea & mineral water', 'Kopi, teh & air mineral']
    ] },
    { title: { nl: 'Verblijf', en: 'Your room', id: 'Kamar' }, img: 'assets/hd/bedroom.jpg', items: [
      ['snowflake', 'Airconditioning', 'Air conditioning', 'AC'],
      ['mountains', 'Panorama-gastenkamer', 'Panorama guest room', 'Kamar tamu panorama'],
      ['wine', 'Minibar', 'Mini bar', 'Mini bar'],
      ['coffee-bean', 'Waterkoker', 'Water kettle', 'Ketel listrik']
    ] },
    { title: { nl: 'Buiten', en: 'Outdoors', id: 'Luar ruang' }, img: 'assets/hd/deck.jpg', items: [
      ['swimming-pool', 'Privézwembad', 'Private swimming pool', 'Kolam renang pribadi'],
      ['plant', 'Weelderige tropische tuin', 'Lush tropical garden', 'Taman tropis yang rimbun'],
      ['cooking-pot', 'Centrale keuken', 'Central kitchen', 'Dapur bersama'],
      ['bicycle', 'Gratis fietsen', 'Free bicycles', 'Sepeda gratis']
    ] },
    { title: { nl: 'Service', en: 'Service', id: 'Layanan' }, img: 'assets/hd/lounge.jpg', items: [
      ['airplane-landing', 'Chauffeur voor vliegveld-shuttle', 'Driver for airport shuttle', 'Sopir antar-jemput bandara'],
      ['steering-wheel', 'Chauffeur voor uitstapjes', 'Driver for day trips', 'Sopir untuk wisata'],
      ['bed', 'Extra bed (op aanvraag)', 'Extra bed (on request)', 'Extra bed (berbayar)']
    ] }
  ];

  var SLIDES = [
    { src: 'assets/hd/pool-day.jpg', pos: 'center 62%', cap: { nl: 'Het privézwembad', en: 'The private pool', id: 'Kolam renang pribadi' } },
    { src: 'assets/hd/villa-day.jpg', pos: 'center 45%', cap: { nl: 'Villa & tuin', en: 'Villa & garden', id: 'Vila & taman' } },
    { src: 'assets/hd/deck.jpg', pos: 'center 70%', cap: { nl: 'Terras en centrale keuken', en: 'Deck and central kitchen', id: 'Dek dan dapur bersama' } },
    { src: 'assets/hd/pool-night.jpg', pos: 'center 60%', cap: { nl: 'Zwembad bij avond', en: 'The pool at night', id: 'Kolam di malam hari' } }
  ];

  var TRIP_ICONS = ['sun-horizon', 'van', 'waves', 'bicycle', 'storefront', 'basket'];
  var TRIP_SLOT_LABELS = ['Sunrise at the temple', 'VW Safari tour', 'Waterfalls', 'Cycling', 'Local markets', 'Pottery village (Klipoh)'];

  var T = {
    nl: {
      htmlLang: 'nl',
      title: 'Green Oasis Villas Borobudur — Luxe villa’s met privézwembad bij de tempel van Borobudur',
      metaDesc: 'Twee luxe villa’s met privézwembad en weelderige tropische tuin bij de tempel van Borobudur, Magelang, Midden-Java. Ontbijt inbegrepen, floating breakfast, gratis fietsen, vliegveld-shuttle. Vanaf IDR 1.100.000 per nacht.',
      navExp: 'Your villa experience', navDest: 'Destination Borobudur', navStory: 'Ons verhaal', navContact: 'Contact', book: 'Reserveren',
      heroKicker: 'Twee luxe villa’s · Borobudur, Midden-Java',
      heroL1: 'Rust, natuur en je eigen zwembad.', heroL2: 'Dichtbij de tempel van Borobudur.',
      from: 'Vanaf', perNightBf: 'per nacht · ontbijt inbegrepen',
      welcome: 'Welkom',
      introStatement: 'Twee villa’s, één weelderige tuin en de stilte van het Javaanse platteland — op een steenworp van Borobudur. Hier vertraagt de tijd vanzelf.',
      stats: [
        { icon: 'house-line', title: '2 luxe villa’s', label: 'Privé en rustig gelegen' },
        { icon: 'swimming-pool', title: 'Privézwembad', label: 'In een tropische tuin' },
        { icon: 'coffee', title: 'Ontbijt inbegrepen', label: 'Ook floating breakfast' },
        { icon: 'sun-horizon', title: 'Bij Borobudur', label: 'Tempel, vulkanen, sawa’s' }
      ],
      expKicker: 'Your villa experience', expTitle: 'Alles is geregeld, zodat jij niets hoeft.',
      expBody: 'Ruime, lichte kamers met airco, een panoramakamer boven, een centrale keuken en een terras aan het water. Koffie, thee en mineraalwater staan klaar; fietsen staan bij de deur.',
      villaA: 'Villa 1', villaADesc: 'Begane grond, direct aan het zwembad', villaB: 'Villa 2', villaBDesc: 'Met panoramaterras op de verdieping', both: 'Beide villa’s',
      splitAlt: 'Zwembad en tuin overdag',
      dayL: 'Dag', nightL: 'Avond',
      morningKicker: 'Overdag · floating breakfast', morningTitle: 'De dag begint in het water.',
      morningBody: 'Het ontbijt is bij je verblijf inbegrepen. Liever op het terras of drijvend in het zwembad? Zeg het ons de avond ervoor. Overdag hoor je alleen vogels en de wind door de palmen.',
      eveningKicker: 'Avond · zwemmen onder de sterren', eveningTitle: 'Als de tuin oplicht.',
      eveningBody: 'Na zonsondergang gaan de lampen in de tuin aan en gloeit het zwembad. Een duik onder de sterren, een drankje uit de minibar op het terras — en dan alleen nog de krekels.',
      galleryTitle: 'Rondkijken', galleryHint: 'Klik op een foto om te vergroten',
      filters: ['Alles', 'Interieur', 'Buiten', 'Avond'],
      destKicker: 'Destination Borobudur', destTitle: 'Het grootste boeddhistische monument ter wereld ligt om de hoek.',
      destBody: 'Borobudur is meer dan de tempel. De streek is groen, schoon en dorps — met vulkanen aan de horizon, de Menoreh-heuvels in de rug en volop mogelijkheden om er op uit te gaan.',
      destMore: 'Uitstapjes vanuit de villa',
      trips: [
        { title: 'Zonsopkomst bij de tempel', body: 'Zie Merapi en Merbabu oplichten boven de mist.' },
        { title: 'VW Safari-tour', body: 'In een klassieke VW door dorpen en langs sawa’s.' },
        { title: 'Watervallen', body: 'Verkoeling in de jungle van de Menoreh-heuvels.' },
        { title: 'Fietstour', body: 'Met onze gratis fietsen over rustige dorpswegen.' },
        { title: 'Lokale markten', body: 'Tropisch fruit, jamu en Javaanse snacks.' },
        { title: 'Pottenbakkersdorp', body: 'Kijk mee en draai zelf aan de schijf in Klipoh.' }
      ],
      storyKicker: 'Ons verhaal', storyTitle: 'Van een droom aan de keukentafel naar een oase in Java.',
      storyP1: 'Jan en Maria vielen jaren geleden voor de rust van het land rond Borobudur: de ochtendmist boven de sawa’s, de vriendelijkheid van de dorpen, het groen dat overal doorheen groeit.',
      storyP2: 'Daar ontstond het plan voor Green Oasis — een plek waar gasten uit Indonesië en de rest van de wereld zich meteen thuis voelen. Met aandacht gebouwd, met een tuin die elk jaar weelderiger wordt.',
      storyQuote: 'We wilden een plek maken waar je vanzelf langzamer gaat ademen.',
      rateKicker: 'Tarief', rateSub: 'per villa per nacht · feestdagen afwijkend tarief',
      rateItems: ['Ontbijt, welkomstdrankje, koffie, thee en mineraalwater inbegrepen', 'Gratis fietsen en gebruik van het privézwembad', 'Extra bed tegen betaling', 'Chauffeur voor vliegveld en uitstapjes op aanvraag'],
      calcTitle: 'Bereken je verblijf', calcNights: 'Nachten', calcVillas: 'Villa’s', calcExtra: 'Extra bed', calcTotal: 'Indicatie totaal', calcCta: 'Vraag beschikbaarheid aan',
      calcNoteBase: 'Inclusief ontbijt. Feestdagen hebben een afwijkend tarief.', calcNoteExtra: ' Extra bed wordt apart berekend.', villaWord: 'villa', nightWord: 'nachten',
      faqTitle: 'Goed om te weten',
      faqs: [
        ['Waar liggen de villa’s?', 'In Borobudur, Magelang (Midden-Java), dichtbij de tempel van Borobudur en de Menoreh-heuvels. Het vliegveld van Yogyakarta (YIA) is bereikbaar per auto; onze chauffeur haalt je op aanvraag op.'],
        ['Wat kost een overnachting?', 'IDR 1.100.000 per villa per nacht, inclusief ontbijt. Tijdens feestdagen geldt een afwijkend tarief.'],
        ['Heeft elke villa een eigen zwembad?', 'Ja, je hebt een privézwembad in een weelderige tropische tuin. Floating breakfast in het zwembad is mogelijk.'],
        ['Kan ik een extra bed krijgen?', 'Ja, een extra bed is beschikbaar tegen betaling. Vermeld het bij je aanvraag.'],
        ['Helpen jullie met uitstapjes?', 'Graag. We regelen een chauffeur voor zonsopkomst bij de tempel, VW-tours, watervallen, markten en het pottenbakkersdorp.']
      ],
      contactTitle: 'Kom tot rust in Borobudur.', contactBody: 'Stuur ons je data en we laten snel weten welke villa beschikbaar is. Je krijgt antwoord van ons persoonlijk.',
      formTitle: 'Beschikbaarheid aanvragen', fName: 'Naam', fIn: 'Aankomst', fOut: 'Vertrek', fGuests: 'Gasten', fVilla: 'Villa', fMsg: 'Bericht', fMsgPh: 'Extra bed, vliegveld-shuttle, wensen…', send: 'Verstuur via WhatsApp', formNote: 'Opent WhatsApp met je aanvraag ingevuld.',
      footerLine: 'Luxe villa’s met privézwembad bij de tempel van Borobudur',
      waIntro: 'Hallo Green Oasis, ik wil graag beschikbaarheid aanvragen.'
    },
    en: {
      htmlLang: 'en',
      title: 'Green Oasis Villas Borobudur — Luxury private pool villas near Borobudur Temple',
      metaDesc: 'Two luxury villas with private swimming pool and lush tropical garden near Borobudur Temple, Magelang, Central Java. Breakfast included, floating breakfast, free bicycles, airport shuttle. From IDR 1.100.000 per night.',
      navExp: 'Your villa experience', navDest: 'Destination Borobudur', navStory: 'Our story', navContact: 'Contact', book: 'Book',
      heroKicker: 'Two luxury villas · Borobudur, Central Java',
      heroL1: 'Quiet, nature and your own pool.', heroL2: 'Minutes from Borobudur Temple.',
      from: 'From', perNightBf: 'per night · breakfast included',
      welcome: 'Welcome',
      introStatement: 'Two villas, one lush garden and the quiet of the Javanese countryside — a stone’s throw from Borobudur. Here, time slows down on its own.',
      stats: [
        { icon: 'house-line', title: '2 luxury villas', label: 'Private and peaceful' },
        { icon: 'swimming-pool', title: 'Private pool', label: 'In a tropical garden' },
        { icon: 'coffee', title: 'Breakfast included', label: 'Floating breakfast too' },
        { icon: 'sun-horizon', title: 'Near Borobudur', label: 'Temple, volcanoes, sawah' }
      ],
      expKicker: 'Your villa experience', expTitle: 'Everything’s taken care of, so you don’t have to.',
      expBody: 'Spacious, light rooms with air conditioning, a panorama room upstairs, a central kitchen and a deck on the water. Coffee, tea and mineral water are ready; bicycles wait at the door.',
      villaA: 'Villa 1', villaADesc: 'Ground floor, straight onto the pool', villaB: 'Villa 2', villaBDesc: 'With an upstairs panorama terrace', both: 'Both villas',
      splitAlt: 'Pool and garden by day',
      dayL: 'Day', nightL: 'Evening',
      morningKicker: 'By day · floating breakfast', morningTitle: 'The day begins in the water.',
      morningBody: 'Breakfast is included with your stay. On the terrace, or floating in the pool? Tell us the night before. By day, all you hear are birds and the wind in the palms.',
      eveningKicker: 'Evening · a swim under the stars', eveningTitle: 'When the garden lights up.',
      eveningBody: 'After sunset the garden lights come on and the pool begins to glow. A swim under the stars, a drink from the mini bar on the terrace — then nothing but crickets.',
      galleryTitle: 'Look around', galleryHint: 'Click a photo to enlarge',
      filters: ['All', 'Interior', 'Outdoors', 'Evening'],
      destKicker: 'Destination Borobudur', destTitle: 'The world’s largest Buddhist monument is just around the corner.',
      destBody: 'Borobudur is more than its temple. The region is green, clean and rural — volcanoes on the horizon, the Menoreh Hills behind you, and plenty of ways to get out and explore.',
      destMore: 'Day trips from the villa',
      trips: [
        { title: 'Temple sunrise', body: 'Watch Merapi and Merbabu glow above the morning mist.' },
        { title: 'VW Safari tour', body: 'Classic VW rides through villages and rice fields.' },
        { title: 'Waterfalls', body: 'Cool off in the jungle of the Menoreh Hills.' },
        { title: 'Cycling tour', body: 'Take our free bikes along quiet village roads.' },
        { title: 'Local markets', body: 'Tropical fruit, jamu and Javanese snacks.' },
        { title: 'Pottery village', body: 'Watch the potters of Klipoh — then try the wheel.' }
      ],
      storyKicker: 'Our story', storyTitle: 'From a kitchen-table dream to an oasis in Java.',
      storyP1: 'Years ago, Jan and Maria fell for the calm of the countryside around Borobudur: morning mist over the rice fields, the warmth of the villages, the green that grows through everything.',
      storyP2: 'That’s where the plan for Green Oasis began — a place where guests from Indonesia and around the world feel at home from the first moment. Built with care, with a garden that grows lusher every year.',
      storyQuote: 'We wanted to make a place where you start breathing slower without trying.',
      rateKicker: 'Rate', rateSub: 'per villa per night · different rate on public holidays',
      rateItems: ['Breakfast, welcome drink, coffee, tea and mineral water included', 'Free bicycles and use of the private pool', 'Extra bed available at a charge', 'Driver for airport transfers and day trips on request'],
      calcTitle: 'Plan your stay', calcNights: 'Nights', calcVillas: 'Villas', calcExtra: 'Extra bed', calcTotal: 'Estimated total', calcCta: 'Request availability',
      calcNoteBase: 'Breakfast included. Public holidays have a different rate.', calcNoteExtra: ' Extra bed is charged separately.', villaWord: 'villa', nightWord: 'nights',
      faqTitle: 'Good to know',
      faqs: [
        ['Where are the villas?', 'In Borobudur, Magelang (Central Java), close to Borobudur Temple and the Menoreh Hills. Yogyakarta International Airport (YIA) is reachable by car; our driver can pick you up on request.'],
        ['How much is a night?', 'IDR 1,100,000 per villa per night, breakfast included. A different rate applies on public holidays.'],
        ['Is there a private pool?', 'Yes — a private swimming pool in a lush tropical garden. Floating breakfast in the pool is available.'],
        ['Can I get an extra bed?', 'Yes, an extra bed is available at a charge. Just mention it in your request.'],
        ['Can you arrange trips?', 'Happily. We arrange a driver for temple sunrise, VW tours, waterfalls, markets and the pottery village.']
      ],
      contactTitle: 'Come and unwind in Borobudur.', contactBody: 'Send us your dates and we’ll quickly let you know which villa is free. You’ll hear back from us personally.',
      formTitle: 'Check availability', fName: 'Name', fIn: 'Check-in', fOut: 'Check-out', fGuests: 'Guests', fVilla: 'Villa', fMsg: 'Message', fMsgPh: 'Extra bed, airport shuttle, wishes…', send: 'Send via WhatsApp', formNote: 'Opens WhatsApp with your request filled in.',
      footerLine: 'Luxury private pool villas near Borobudur Temple',
      waIntro: 'Hello Green Oasis, I would like to check availability.'
    },
    id: {
      htmlLang: 'id',
      title: 'Green Oasis Villas Borobudur — Vila mewah dengan kolam pribadi dekat Candi Borobudur',
      metaDesc: 'Dua vila mewah dengan kolam renang pribadi dan taman tropis yang rimbun dekat Candi Borobudur, Magelang, Jawa Tengah. Termasuk sarapan, floating breakfast, sepeda gratis, antar-jemput bandara. Mulai IDR 1.100.000 per malam.',
      navExp: 'Your villa experience', navDest: 'Destination Borobudur', navStory: 'Kisah kami', navContact: 'Kontak', book: 'Pesan',
      heroKicker: 'Dua vila mewah · Borobudur, Jawa Tengah',
      heroL1: 'Tenang, alami, dengan kolam pribadi.', heroL2: 'Dekat Candi Borobudur.',
      from: 'Mulai', perNightBf: 'per malam · termasuk sarapan',
      welcome: 'Selamat datang',
      introStatement: 'Dua vila, satu taman yang rimbun, dan ketenangan pedesaan Jawa — selangkah dari Borobudur. Di sini, waktu melambat dengan sendirinya.',
      stats: [
        { icon: 'house-line', title: '2 vila mewah', label: 'Privat dan tenang' },
        { icon: 'swimming-pool', title: 'Kolam pribadi', label: 'Di taman tropis' },
        { icon: 'coffee', title: 'Termasuk sarapan', label: 'Juga floating breakfast' },
        { icon: 'sun-horizon', title: 'Dekat Borobudur', label: 'Candi, gunung, sawah' }
      ],
      expKicker: 'Your villa experience', expTitle: 'Semua sudah kami siapkan, Anda tinggal bersantai.',
      expBody: 'Kamar luas dan terang ber-AC, kamar panorama di lantai atas, dapur bersama, dan dek di tepi kolam. Kopi, teh, dan air mineral tersedia; sepeda siap di depan pintu.',
      villaA: 'Vila 1', villaADesc: 'Lantai dasar, langsung ke kolam', villaB: 'Vila 2', villaBDesc: 'Dengan teras panorama di lantai atas', both: 'Kedua vila',
      splitAlt: 'Kolam dan taman di siang hari',
      dayL: 'Siang', nightL: 'Malam',
      morningKicker: 'Siang · floating breakfast', morningTitle: 'Hari dimulai di dalam air.',
      morningBody: 'Sarapan sudah termasuk. Ingin di teras, atau terapung di kolam? Kabari kami malam sebelumnya. Di siang hari, hanya terdengar suara burung dan angin di pohon kelapa.',
      eveningKicker: 'Malam · berenang di bawah bintang', eveningTitle: 'Saat taman mulai bercahaya.',
      eveningBody: 'Setelah matahari terbenam, lampu taman menyala dan kolam mulai berpendar. Berenang di bawah bintang, minuman dari mini bar di teras — lalu hanya suara jangkrik.',
      galleryTitle: 'Lihat-lihat', galleryHint: 'Klik foto untuk memperbesar',
      filters: ['Semua', 'Interior', 'Luar ruang', 'Malam'],
      destKicker: 'Destination Borobudur', destTitle: 'Monumen Buddha terbesar di dunia ada di dekat Anda.',
      destBody: 'Borobudur lebih dari sekadar candi. Daerahnya hijau, bersih, dan asri — gunung di cakrawala, Perbukitan Menoreh di belakang, dan banyak pilihan untuk berjalan-jalan.',
      destMore: 'Wisata dari vila',
      trips: [
        { title: 'Sunrise di candi', body: 'Saksikan Merapi dan Merbabu bersinar di atas kabut pagi.' },
        { title: 'VW Safari tour', body: 'Berkeliling desa dan sawah dengan VW klasik.' },
        { title: 'Air terjun', body: 'Menyegarkan diri di hutan Perbukitan Menoreh.' },
        { title: 'Tur sepeda', body: 'Gunakan sepeda gratis kami di jalan desa yang tenang.' },
        { title: 'Pasar lokal', body: 'Buah tropis, jamu, dan jajanan Jawa.' },
        { title: 'Desa gerabah', body: 'Lihat pengrajin Klipoh — lalu coba sendiri.' }
      ],
      storyKicker: 'Kisah kami', storyTitle: 'Dari mimpi di meja makan menjadi oase di Jawa.',
      storyP1: 'Bertahun-tahun lalu, Jan dan Maria jatuh cinta pada ketenangan pedesaan di sekitar Borobudur: kabut pagi di atas sawah, keramahan desa, dan hijau yang tumbuh di mana-mana.',
      storyP2: 'Dari situlah rencana Green Oasis lahir — tempat di mana tamu dari Indonesia dan seluruh dunia langsung merasa di rumah. Dibangun dengan sepenuh hati, dengan taman yang makin rimbun setiap tahun.',
      storyQuote: 'Kami ingin membuat tempat di mana Anda bernapas lebih pelan dengan sendirinya.',
      rateKicker: 'Harga', rateSub: 'per vila per malam · harga berbeda saat hari libur',
      rateItems: ['Termasuk sarapan, minuman selamat datang, kopi, teh, dan air mineral', 'Sepeda gratis dan kolam renang pribadi', 'Extra bed dengan biaya tambahan', 'Sopir untuk antar-jemput bandara dan wisata atas permintaan'],
      calcTitle: 'Rencanakan menginap', calcNights: 'Malam', calcVillas: 'Vila', calcExtra: 'Extra bed', calcTotal: 'Perkiraan total', calcCta: 'Cek ketersediaan',
      calcNoteBase: 'Termasuk sarapan. Harga berbeda saat hari libur.', calcNoteExtra: ' Extra bed dikenakan biaya terpisah.', villaWord: 'vila', nightWord: 'malam',
      faqTitle: 'Perlu diketahui',
      faqs: [
        ['Di mana lokasi vila?', 'Di Borobudur, Magelang (Jawa Tengah), dekat Candi Borobudur dan Perbukitan Menoreh. Bandara YIA Yogyakarta dapat dicapai dengan mobil; sopir kami bisa menjemput atas permintaan.'],
        ['Berapa harga per malam?', 'IDR 1.100.000 per vila per malam, termasuk sarapan. Harga berbeda berlaku saat hari libur.'],
        ['Apakah ada kolam renang pribadi?', 'Ya — kolam renang pribadi di taman tropis yang rimbun. Floating breakfast di kolam tersedia.'],
        ['Bisa menambah extra bed?', 'Bisa, extra bed tersedia dengan biaya tambahan. Sebutkan saat Anda memesan.'],
        ['Bisa bantu atur wisata?', 'Tentu. Kami siapkan sopir untuk sunrise di candi, VW tour, air terjun, pasar, dan desa gerabah.']
      ],
      contactTitle: 'Bersantai di Borobudur.', contactBody: 'Kirimkan tanggal Anda dan kami segera kabari vila mana yang tersedia. Kami akan membalas secara pribadi.',
      formTitle: 'Cek ketersediaan', fName: 'Nama', fIn: 'Check-in', fOut: 'Check-out', fGuests: 'Tamu', fVilla: 'Vila', fMsg: 'Pesan', fMsgPh: 'Extra bed, antar-jemput bandara, permintaan…', send: 'Kirim via WhatsApp', formNote: 'Membuka WhatsApp dengan permintaan Anda.',
      footerLine: 'Vila mewah dengan kolam pribadi dekat Candi Borobudur',
      waIntro: 'Halo Green Oasis, saya ingin cek ketersediaan.'
    }
  };

  // ---------- State ----------
  var S = { lang: DEFAULT_LANG, slide: 0, exp: 0, dn: 'day', filter: 'all', lb: -1, faq: 0, nights: 2, villas: 1, extra: false };
  var t = T[S.lang];
  var slideTimer = null;

  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  };
  var fmt = function (n) { return n.toLocaleString('id-ID'); };
  var openWa = function (lines) {
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  };
  var filtered = function () {
    return PHOTOS.filter(function (p) { return S.filter === 'all' || p.cat === S.filter; });
  };
  var isWide = function () { return window.innerWidth > 1080; };

  // ---------- Renderers ----------
  function applyStaticText() {
    document.documentElement.lang = t.htmlLang;
    document.title = t.title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t.metaDesc);

    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var v = t[n.getAttribute('data-i18n')];
      if (typeof v === 'string') n.textContent = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (n) {
      var v = t[n.getAttribute('data-i18n-ph')];
      if (typeof v === 'string') n.placeholder = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (n) {
      var v = t[n.getAttribute('data-i18n-alt')];
      if (typeof v === 'string') n.alt = v;
    });
    document.querySelectorAll('#langSwitch button').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === S.lang);
    });
  }

  function renderSlides() {
    var wrap = $('heroSlides');
    if (!wrap.children.length) {
      SLIDES.forEach(function (s) {
        var img = el('img');
        img.src = s.src;
        img.style.objectPosition = s.pos;
        wrap.appendChild(img);
      });
      var dots = $('heroDots');
      SLIDES.forEach(function (s, i) {
        var b = el('button', '', '<span class="num">0' + (i + 1) + '</span><span class="bar"></span>');
        b.type = 'button';
        b.setAttribute('aria-label', '0' + (i + 1));
        b.addEventListener('click', function () { goSlide(i); });
        dots.appendChild(b);
      });
    }
    Array.prototype.forEach.call(wrap.children, function (img, i) {
      img.classList.toggle('is-active', i === S.slide);
      img.alt = SLIDES[i].cap[S.lang];
    });
    Array.prototype.forEach.call($('heroDots').children, function (b, i) {
      b.classList.toggle('is-active', i === S.slide);
    });
    $('heroCaption').textContent = SLIDES[S.slide].cap[S.lang];
  }
  function startSlideTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(function () { S.slide = (S.slide + 1) % SLIDES.length; renderSlides(); }, 6500);
  }
  function goSlide(i) { S.slide = i; renderSlides(); startSlideTimer(); }

  function renderStats() {
    var wrap = $('stats');
    wrap.innerHTML = '';
    t.stats.forEach(function (s) {
      var d = el('div', 'stat',
        '<i class="ph-thin ph-' + s.icon + '"></i><div><p class="stat-title">' + esc(s.title) + '</p><p class="stat-label">' + esc(s.label) + '</p></div>');
      d.setAttribute('data-reveal', '');
      wrap.appendChild(d);
    });
  }

  function renderExp() {
    var li = { nl: 1, en: 2, id: 3 }[S.lang];
    var wrap = $('expGroups');
    wrap.innerHTML = '';
    AMENITIES.forEach(function (g, i) {
      var group = el('div', 'exp-group');
      var row = el('button', 'exp-row',
        '<span class="exp-num">0' + (i + 1) + '</span><span class="exp-name">' + esc(g.title[S.lang]) + '</span><span class="exp-icon"><i class="ph-light ph-plus"></i><i class="ph-light ph-minus"></i></span>');
      row.type = 'button';
      var select = function () { if (S.exp !== i) { S.exp = i; updateExp(); } };
      row.addEventListener('click', select);
      group.addEventListener('mouseenter', select);
      var ul = el('ul', 'exp-items');
      g.items.forEach(function (it) {
        ul.appendChild(el('li', '', '<i class="ph-light ph-' + it[0] + '"></i>' + esc(it[li])));
      });
      var inner = el('div', 'exp-body-inner');
      inner.appendChild(ul);
      var bodyWrap = el('div', 'exp-body-wrap');
      bodyWrap.appendChild(inner);
      group.appendChild(row);
      group.appendChild(bodyWrap);
      wrap.appendChild(group);
    });

    var photos = $('expImgs');
    if (!photos.children.length) {
      AMENITIES.forEach(function (g) { var img = el('img'); img.src = g.img; photos.appendChild(img); });
    }
    updateExp();
  }

  function updateExp() {
    Array.prototype.forEach.call($('expGroups').children, function (group, i) {
      group.classList.toggle('is-active', i === S.exp);
      group.querySelector('.exp-row').setAttribute('aria-expanded', i === S.exp ? 'true' : 'false');
    });
    var photos = $('expImgs');
    Array.prototype.forEach.call(photos.children, function (img, i) {
      img.classList.toggle('is-active', i === S.exp);
      img.alt = AMENITIES[i].title[S.lang];
    });
    $('expCaption').textContent = AMENITIES[S.exp].title[S.lang];
  }

  function renderDayNight() {
    var day = S.dn === 'day';
    $('daynight').classList.toggle('is-night', !day);
    document.querySelectorAll('#dnToggle .pill').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-dn') === S.dn);
    });
    $('dnKicker').textContent = day ? t.morningKicker : t.eveningKicker;
    $('dnTitle').textContent = day ? t.morningTitle : t.eveningTitle;
    $('dnBody').textContent = day ? t.morningBody : t.eveningBody;
  }

  function renderGallery() {
    var fwrap = $('galleryFilters');
    fwrap.innerHTML = '';
    t.filters.forEach(function (label, i) {
      var b = el('button', 'pill' + (S.filter === CATS[i] ? ' is-active' : ''), esc(label));
      b.type = 'button';
      b.addEventListener('click', function () { S.filter = CATS[i]; renderGallery(); });
      fwrap.appendChild(b);
    });

    var list = filtered();
    var wide = isWide();
    var grid = $('gallery');
    grid.innerHTML = '';
    list.forEach(function (p, i) {
      var b = el('button');
      b.type = 'button';
      b.setAttribute('aria-label', p.alt[S.lang]);
      b.style.gridColumn = (wide && S.filter === 'all') ? 'span ' + p.c : 'span 1';
      b.style.gridRow = 'span ' + p.r;
      var img = el('img');
      img.src = p.src;
      img.alt = p.alt[S.lang];
      img.loading = 'lazy';
      b.appendChild(img);
      b.addEventListener('click', function () { openLb(i); });
      grid.appendChild(b);
    });
  }

  function renderTrips() {
    var wrap = $('trips');
    wrap.innerHTML = '';
    t.trips.forEach(function (tr, i) {
      var a = el('article', 'trip',
        '<div class="slot ratio-4-5"><span>' + esc(TRIP_SLOT_LABELS[i]) + '</span></div>' +
        '<div class="trip-text"><i class="ph-thin ph-' + TRIP_ICONS[i] + '"></i><div><p class="trip-title">' + esc(tr.title) + '</p><p class="trip-body">' + esc(tr.body) + '</p></div></div>');
      wrap.appendChild(a);
    });
  }

  function renderRateItems() {
    var ul = $('rateItems');
    ul.innerHTML = '';
    t.rateItems.forEach(function (s) { ul.appendChild(el('li', '', '<i class="ph ph-check"></i>' + esc(s))); });
  }

  function renderCalc() {
    var total = S.nights * S.villas * RATE;
    $('nightsNum').textContent = S.nights;
    $('totalFmt').textContent = fmt(total);
    document.querySelectorAll('#villaOpts .pill').forEach(function (b) {
      b.classList.toggle('is-active', Number(b.getAttribute('data-villas')) === S.villas);
    });
    $('extraToggle').setAttribute('aria-pressed', S.extra ? 'true' : 'false');
    $('calcNote').textContent = S.nights + ' ' + t.nightWord + ' × ' + S.villas + ' ' + t.villaWord + ' × IDR 1.100.000. ' + t.calcNoteBase + (S.extra ? t.calcNoteExtra : '');
  }

  function renderFaqs() {
    var wrap = $('faqs');
    wrap.innerHTML = '';
    t.faqs.forEach(function (f, i) {
      var open = S.faq === i;
      var item = el('div', 'faq-item' + (open ? ' is-open' : ''));
      var q = el('button', 'faq-q', esc(f[0]) + '<i class="ph-light ph-' + (open ? 'minus' : 'plus') + '"></i>');
      q.type = 'button';
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      q.addEventListener('click', function () { S.faq = S.faq === i ? -1 : i; renderFaqs(); });
      item.appendChild(q);
      item.appendChild(el('p', 'faq-a', esc(f[1])));
      wrap.appendChild(item);
    });
  }

  // ---------- Lightbox ----------
  function openLb(i) { S.lb = i; renderLb(); }
  function closeLb() { S.lb = -1; renderLb(); }
  function stepLb(d) { var n = filtered().length; S.lb = (S.lb + d + n) % n; renderLb(); }
  function renderLb() {
    var box = $('lightbox');
    var list = filtered();
    var cur = S.lb >= 0 ? list[S.lb] : null;
    if (!cur) { box.hidden = true; document.body.style.overflow = ''; return; }
    $('lbImg').src = cur.src;
    $('lbImg').alt = cur.alt[S.lang];
    $('lbCaption').textContent = cur.alt[S.lang] + ' · ' + (S.lb + 1) + ' / ' + list.length;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  // ---------- Language ----------
  function setLang(l) {
    if (!T[l]) l = DEFAULT_LANG;
    S.lang = l;
    t = T[l];
    try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
    renderAll();
  }
  function renderAll() {
    applyStaticText();
    renderSlides();
    renderStats();
    renderExp();
    renderDayNight();
    renderGallery();
    renderTrips();
    renderRateItems();
    renderCalc();
    renderFaqs();
    renderLb();
  }

  // ---------- Scroll reveal ----------
  function setupReveal() {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    var vh = window.innerHeight;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (n) {
      if (n.getBoundingClientRect().top < vh * 0.92) return;
      n.classList.add('reveal-hidden');
      io.observe(n);
    });
  }

  // ---------- Wiring ----------
  function init() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    S.lang = T[saved] ? saved : DEFAULT_LANG;
    t = T[S.lang];
    renderAll();
    startSlideTimer();

    document.querySelectorAll('#langSwitch button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });

    // Nav + hero parallax
    var nav = $('nav');
    var hero = $('heroSlides');
    var onScroll = function () {
      var y = window.scrollY || window.pageYOffset;
      nav.classList.toggle('is-scrolled', y > 40);
      if (y < 1200) hero.style.transform = 'translate3d(0,' + (y * 0.28) + 'px,0)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var wasWide = isWide();
    window.addEventListener('resize', function () {
      var w = isWide();
      if (w !== wasWide) { wasWide = w; renderGallery(); }
    });

    // Day / Evening
    document.querySelectorAll('#dnToggle .pill').forEach(function (b) {
      b.addEventListener('click', function () { S.dn = b.getAttribute('data-dn'); renderDayNight(); });
    });

    // Destination carousel
    $('destPrev').addEventListener('click', function () { $('trips').scrollBy({ left: -360, behavior: 'smooth' }); });
    $('destNext').addEventListener('click', function () { $('trips').scrollBy({ left: 360, behavior: 'smooth' }); });

    // Calculator
    $('decNights').addEventListener('click', function () { S.nights = Math.max(1, S.nights - 1); renderCalc(); });
    $('incNights').addEventListener('click', function () { S.nights = Math.min(30, S.nights + 1); renderCalc(); });
    document.querySelectorAll('#villaOpts .pill').forEach(function (b) {
      b.addEventListener('click', function () { S.villas = Number(b.getAttribute('data-villas')); renderCalc(); });
    });
    $('extraToggle').addEventListener('click', function () { S.extra = !S.extra; renderCalc(); });
    $('calcSend').addEventListener('click', function () {
      var total = S.nights * S.villas * RATE;
      openWa([t.waIntro, t.calcNights + ': ' + S.nights, t.calcVillas + ': ' + S.villas, t.calcExtra + ': ' + (S.extra ? '✓' : '—'), t.calcTotal + ': IDR ' + fmt(total)]);
    });

    // Contact form
    $('waLink').href = 'https://wa.me/' + WA_NUMBER;
    $('enquiryForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(e.target);
      openWa([t.waIntro, t.fName + ': ' + (f.get('name') || ''), t.fIn + ': ' + (f.get('in') || '-'), t.fOut + ': ' + (f.get('out') || '-'),
        t.fGuests + ': ' + (f.get('guests') || ''), t.fVilla + ': ' + (f.get('villa') || ''), f.get('msg') || '']);
    });

    // Lightbox
    var box = $('lightbox');
    box.addEventListener('click', function (e) { if (e.target === box) closeLb(); });
    $('lbClose').addEventListener('click', closeLb);
    $('lbPrev').addEventListener('click', function () { stepLb(-1); });
    $('lbNext').addEventListener('click', function () { stepLb(1); });
    window.addEventListener('keydown', function (e) {
      if (S.lb < 0) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowRight') stepLb(1);
      if (e.key === 'ArrowLeft') stepLb(-1);
    });

    setTimeout(setupReveal, 60);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
