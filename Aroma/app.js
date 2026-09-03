// Atreyapuram Aromas - Master Gastronomy Dataset & Interactive Engine

const MENU_ITEMS = [
  // ================= 1. SOUTH INDIAN CLASSICS =================
  {
    id: 101,
    name: "Guntur Karam Butter Dosa",
    category: "south_indian",
    price: 190,
    rating: 4.92,
    reviewsCount: 380,
    badge: "Crispy Sensation",
    isVeg: true,
    spiceLevel: 3,
    desc: "Golden crispy fermented crepe smeared with authentic roasted Guntur red chilli garlic chutney, spiced potato filling & fresh white butter.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy Crust", "Fresh Butter", "Guntur Chutney"],
    origin: "Guntur"
  },
  {
    id: 102,
    name: "Melting Ghee Podi Thatte Idli (2 Pcs)",
    category: "south_indian",
    price: 160,
    rating: 4.95,
    reviewsCount: 410,
    badge: "Must Try",
    isVeg: true,
    spiceLevel: 2,
    desc: "Pillow-soft steamed plate idlis drenched in smoking hot A2 desi ghee and coated generously with homemade Andhra Gunpowder (Kandi Podi).",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["Podi Magic", "Desi Ghee", "Ultra Soft"],
    origin: "Godavari Kitchens"
  },
  {
    id: 103,
    name: "Crispy Sambar Medu Vada (2 Pcs)",
    category: "south_indian",
    price: 140,
    rating: 4.88,
    reviewsCount: 290,
    badge: "Golden Crisp",
    isVeg: true,
    spiceLevel: 1,
    desc: "Crispy golden fried lentil donuts with a fluffy interior, served submerged in aromatic piping hot drumstick sambar and fresh coconut chutney.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy Outer", "Fluffy Core", "Hot Sambar"],
    origin: "Tamil & Telugu Classic"
  },
  {
    id: 104,
    name: "Onion Tomato Podi Uttapam",
    category: "south_indian",
    price: 180,
    rating: 4.86,
    reviewsCount: 220,
    badge: "Thick & Fluffy",
    isVeg: true,
    spiceLevel: 2,
    desc: "Thick fluffy fermented rice-lentil pancake topped generously with caramelized onions, juicy tomatoes, fresh coriander & spicy gunpowder.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tags: ["Caramelized Onion", "Podi Topping"],
    origin: "Traditional Tiffin"
  },
  {
    id: 105,
    name: "Royal Ghee Ven Pongal",
    category: "south_indian",
    price: 170,
    rating: 4.91,
    reviewsCount: 195,
    badge: "A2 Ghee Rich",
    isVeg: true,
    spiceLevel: 1,
    desc: "Comforting rice & yellow moong dal porridge tempered with whole black pepper, roasted cashews, fresh ginger, and generous ladles of pure A2 ghee.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    tags: ["Roasted Cashews", "Whole Pepper", "Temple Style"],
    origin: "Tirupati & Godavari"
  },
  {
    id: 106,
    name: "Classic Andhra Rava Upma",
    category: "south_indian",
    price: 130,
    rating: 4.82,
    reviewsCount: 160,
    badge: "Breakfast Comfort",
    isVeg: true,
    spiceLevel: 1,
    desc: "Roasted semolina cooked to velvety perfection with mustard seeds, curry leaves, ginger, cashews & green chillies. Served with coconut chutney.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["Semolina Roast", "Curry Leaves"],
    origin: "Deccan Breakfast"
  },
  {
    id: 107,
    name: "Soft Centred Kerala Appam with Stew",
    category: "south_indian",
    price: 190,
    rating: 4.94,
    reviewsCount: 230,
    badge: "Lacy Crisp Edges",
    isVeg: true,
    spiceLevel: 1,
    desc: "Bowl-shaped fermented rice hoppers with soft pillowy centres and paper-thin lacy edges, paired with aromatic coconut milk vegetable stew.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tags: ["Coconut Milk Stew", "Lacy Hopper"],
    origin: "Coastal Malabar"
  },
  {
    id: 108,
    name: "Andhra MLA Pesarattu Upma",
    category: "south_indian",
    price: 210,
    rating: 4.96,
    reviewsCount: 340,
    badge: "Legislative Classic",
    isVeg: true,
    spiceLevel: 2,
    desc: "Nutritious whole green moong dal crepe cooked golden, stuffed with piping hot savoury rava upma & served with spicy Allam (ginger) pachadi.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tags: ["Green Moong Dal", "Upma Stuffed", "Ginger Chutney"],
    origin: "Vijayawada & Hyderabad"
  },

  // ================= 2. ANDHRA SPECIALITIES =================
  {
    id: 201,
    name: "Authentic Andhra Chicken Curry",
    category: "andhra_specials",
    price: 360,
    rating: 4.94,
    reviewsCount: 480,
    badge: "Fiery Bestseller",
    isVeg: false,
    spiceLevel: 3,
    desc: "Tender farm chicken cuts simmered in a roasted coconut, poppy seed & fiery Guntur red chilli gravy with fresh curry leaves.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    tags: ["Guntur Red Chilli", "Poppy Seed Gravy"],
    origin: "East Godavari"
  },
  {
    id: 202,
    name: "Spicy Andhra Kodi Vepudu (Chicken Fry)",
    category: "andhra_specials",
    price: 350,
    rating: 4.96,
    reviewsCount: 520,
    badge: "Iconic Dry Roast",
    isVeg: false,
    spiceLevel: 3,
    desc: "Succulent bone-in chicken slow-roasted with caramelized shallots, freshly pounded black pepper, cinnamon & whole curry leaves.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    tags: ["Pepper Roast", "Caramelized Shallots"],
    origin: "Rayalaseema"
  },
  {
    id: 203,
    name: "Godavari Gongura Chicken",
    category: "andhra_specials",
    price: 380,
    rating: 4.95,
    reviewsCount: 460,
    badge: "Tangy Sorrel Sensation",
    isVeg: false,
    spiceLevel: 3,
    desc: "Tender chicken steeped in tangy, wild red sorrel (Gongura) leaves, stone-ground coriander, garlic, and simmered in earthen pots.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    tags: ["Gongura Leaves", "Claypot Simmered"],
    origin: "Guntur & Godavari"
  },
  {
    id: 204,
    name: "Royal Andhra Mutton Curry",
    category: "andhra_specials",
    price: 440,
    rating: 4.97,
    reviewsCount: 390,
    badge: "Slow Dum Meat",
    isVeg: false,
    spiceLevel: 3,
    desc: "Tender goat meat slow-cooked in rich shallot, ginger-garlic and toasted whole spices gravy until bone-marrow tender.",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
    tags: ["Tender Goat Meat", "Rich Marrow Gravy"],
    origin: "Rajahmundry"
  },
  {
    id: 205,
    name: "Godavari Gongura Mutton",
    category: "andhra_specials",
    price: 460,
    rating: 4.98,
    reviewsCount: 510,
    badge: "Heritage Masterpiece",
    isVeg: false,
    spiceLevel: 3,
    desc: "Succulent mutton cuts slow-braised with pure ghee and tart Gongura leaves, creating an unmatched spicy-sour delicacy.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    tags: ["Pure A2 Ghee", "Wild Sorrel Mutton"],
    origin: "Atreyapuram Heritage"
  },
  {
    id: 206,
    name: "Coastal Royyala Vepudu (Prawn Roast)",
    category: "andhra_specials",
    price: 420,
    rating: 4.93,
    reviewsCount: 310,
    badge: "Coastal Seafood",
    isVeg: false,
    spiceLevel: 3,
    desc: "Juicy bay prawns pan-roasted with crushed black pepper, toasted curry leaves, green chillies & caramelized onions.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    tags: ["Bay Prawns", "Pepper Fry"],
    origin: "Kakinada Coast"
  },
  {
    id: 207,
    name: "Gutthi Vankaya Koora (Stuffed Brinjal)",
    category: "andhra_specials",
    price: 280,
    rating: 4.91,
    reviewsCount: 360,
    badge: "Vegetarian Royal",
    isVeg: true,
    spiceLevel: 2,
    desc: "Baby purple brinjals stuffed with a roasted peanut, sesame, dry coconut and tamarind masala, cooked to a luscious thick gravy.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tags: ["Peanut Sesame Paste", "Stuffed Brinjal"],
    origin: "Godavari Village Kitchens"
  },
  {
    id: 208,
    name: "Andhra Special Veg Vepudu (Dry Fry)",
    category: "andhra_specials",
    price: 240,
    rating: 4.85,
    reviewsCount: 190,
    badge: "Crisp Poriyal",
    isVeg: true,
    spiceLevel: 2,
    desc: "Fresh raw banana (Aratikaya) or crispy okra tossed with roasted garlic, senagapappu (chana dal) and spicy roasted peanut podi.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["Garlic Podi", "Crispy Okra/Banana"],
    origin: "Andhra Bhojanam"
  },

  // ================= 3. NORTH INDIAN DELIGHTS =================
  {
    id: 301,
    name: "Smoky Tandoori Paneer Tikka Masala",
    category: "north_indian",
    price: 320,
    rating: 4.93,
    reviewsCount: 380,
    badge: "Claypot Gravy",
    isVeg: true,
    spiceLevel: 2,
    desc: "Charcoal-roasted malai paneer cubes simmered in a velvety tomato, butter, and cashew gravy finished with kasuri methi.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Malai Paneer", "Velvety Gravy"],
    origin: "Tandoori Specialties"
  },
  {
    id: 302,
    name: "Royal Murgh Makhani (Butter Chicken)",
    category: "north_indian",
    price: 380,
    rating: 4.96,
    reviewsCount: 650,
    badge: "All-Time Favorite",
    isVeg: false,
    spiceLevel: 1,
    desc: "Tandoor-blistered chicken morsels folded into a silky satin gravy of vine-ripened tomatoes, fresh white butter, cream & dried fenugreek.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    tags: ["White Butter", "Silky Makhani", "Tandoori Chicken"],
    origin: "Old Delhi Heritage"
  },
  {
    id: 303,
    name: "Charcoal Chicken Tikka Gravy",
    category: "north_indian",
    price: 370,
    rating: 4.92,
    reviewsCount: 420,
    badge: "Smoky & Spiced",
    isVeg: false,
    spiceLevel: 2,
    desc: "Boneless chicken skewers roasted in the clay tandoor and tossed in a chunky bell pepper, onion, and spiced tomato gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    tags: ["Boneless Chicken", "Charcoal Blistered"],
    origin: "Claypot Specials"
  },
  {
    id: 304,
    name: "Slow-Cooked Dal Makhani",
    category: "north_indian",
    price: 260,
    rating: 4.95,
    reviewsCount: 580,
    badge: "16-Hr Slow Cooked",
    isVeg: true,
    spiceLevel: 1,
    desc: "Whole black urad lentils and red kidney beans simmered overnight on live charcoal embers, whipped with fresh cream and cultured butter.",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80",
    tags: ["Overnight Simmered", "Cream & Butter"],
    origin: "Punjab & Tricity"
  },
  {
    id: 305,
    name: "Shahi Paneer (Royal Cashew Gravy)",
    category: "north_indian",
    price: 310,
    rating: 4.89,
    reviewsCount: 310,
    badge: "Royal Delicacy",
    isVeg: true,
    spiceLevel: 1,
    desc: "Melt-in-mouth cottage cheese triangles poached in a fragrant white gravy of pulverized cashews, fresh cream, saffron & cardamom.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tags: ["Cashew Saffron Gravy", "Mild & Fragrant"],
    origin: "Mughlai Heritage"
  },
  {
    id: 306,
    name: "Kadhai Chicken (Wok Tossed)",
    category: "north_indian",
    price: 370,
    rating: 4.91,
    reviewsCount: 360,
    badge: "Bold & Peppery",
    isVeg: false,
    spiceLevel: 3,
    desc: "Tender chicken cuts stir-fried with crunchy capsicum, sliced onions and fresh coriander seeds in a rustic iron wok.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    tags: ["Iron Wok Stir-Fry", "Fresh Coriander Seeds"],
    origin: "North Frontier"
  },
  {
    id: 307,
    name: "Kadhai Paneer (Wok Tossed)",
    category: "north_indian",
    price: 300,
    rating: 4.88,
    reviewsCount: 290,
    badge: "Spiced & Zesty",
    isVeg: true,
    spiceLevel: 2,
    desc: "Cottage cheese batons stir-fried with roasted bell peppers, tomatoes, and freshly ground whole spices in a traditional iron kadhai.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tags: ["Fresh Capsicum", "Crushed Masala"],
    origin: "North Frontier"
  },
  {
    id: 308,
    name: "Amritsari Chole Masala",
    category: "north_indian",
    price: 240,
    rating: 4.93,
    reviewsCount: 440,
    badge: "Rustic & Tangy",
    isVeg: true,
    spiceLevel: 2,
    desc: "Kabuli chickpeas steeped in tea-decoction, slow-cooked with pomegranate seeds, dried amchur, black cardamom, and sizzling green chilli tadka.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Anardana Spiced", "Kabuli Chana"],
    origin: "Amritsar & Punjab"
  },

  // ================= 4. INDIAN STARTERS =================
  {
    id: 401,
    name: "Special Desi Ghee Masala Samosa (2 Pcs)",
    category: "starters",
    price: 80,
    rating: 4.92,
    reviewsCount: 530,
    badge: "Crispy Classic",
    isVeg: true,
    spiceLevel: 2,
    desc: "Flaky ghee-kneaded triangular pastry packed with spiced cashew potato filling, served with zesty mint and tamarind chutneys.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["A2 Ghee Crust", "Cashew Potato"],
    origin: "Indian Street Favorite"
  },
  {
    id: 402,
    name: "Assorted Mix Veg & Onion Pakora Platter",
    category: "starters",
    price: 160,
    rating: 4.87,
    reviewsCount: 260,
    badge: "Evening Crunch",
    isVeg: true,
    spiceLevel: 2,
    desc: "Golden fried fritters of sliced onions, paneer cubes, spinach, and potatoes in a spiced gram flour batter. Served with roasted chilli chutney.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Gram Flour Crunch", "Mint Dip"],
    origin: "Monsoon Special"
  },
  {
    id: 403,
    name: "Tandoori Chicken (Half / Full)",
    category: "starters",
    price: 360,
    rating: 4.96,
    reviewsCount: 620,
    badge: "Charcoal Claypot",
    isVeg: false,
    spiceLevel: 3,
    desc: "Bone-in chicken whole cuts marinated in Kashmiri red chilli, hung curd, lemon & tandoori spices, roasted in searing clay oven.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    tags: ["Clay Oven Roasted", "Smoky & Juicy"],
    origin: "Tandoori Heritage"
  },
  {
    id: 404,
    name: "Fiery Andhra Chicken 65",
    category: "starters",
    price: 320,
    rating: 4.95,
    reviewsCount: 510,
    badge: "Crispy & Fiery",
    isVeg: false,
    spiceLevel: 3,
    desc: "Crispy fried boneless chicken bites tossed with fresh curry leaves, crushed garlic, slit green chillies, and spicy curd glaze.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    tags: ["Boneless Chicken", "Curry Leaf Tempering"],
    origin: "Chennai & Hyderabad"
  },
  {
    id: 405,
    name: "Smoky Tandoori Paneer Tikka (6 Pcs)",
    category: "starters",
    price: 290,
    rating: 4.94,
    reviewsCount: 430,
    badge: "Chef's Special",
    isVeg: true,
    spiceLevel: 2,
    desc: "Thick cubes of fresh malai paneer steeped in mustard oil, carom seeds & hung curd, blistered on skewers with bell peppers.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Malai Paneer", "Charcoal Blistered"],
    origin: "Clay Oven Specials"
  },
  {
    id: 406,
    name: "Crispy Hara Bhara Kebab (6 Pcs)",
    category: "starters",
    price: 230,
    rating: 4.88,
    reviewsCount: 220,
    badge: "Spinach & Pea",
    isVeg: true,
    spiceLevel: 1,
    desc: "Pan-crisped patties of fresh spinach, green peas, mashed potatoes, and aromatic herbs topped with a roasted whole cashew nut.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Fresh Spinach", "Cashew Topped"],
    origin: "Awadhi Vegetarian"
  },
  {
    id: 407,
    name: "Coastal Spiced Fish Fry (Chepala Vepudu)",
    category: "starters",
    price: 390,
    rating: 4.93,
    reviewsCount: 280,
    badge: "Catch of the Day",
    isVeg: false,
    spiceLevel: 3,
    desc: "Fresh fish fillets marinated in red chilli paste, turmeric, lemon juice, and semolina-crusted before crisp shallow frying.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    tags: ["Semolina Crust", "Lemon Garlic Marination"],
    origin: "Kakinada Coast"
  },
  {
    id: 408,
    name: "Golden Andhra Prawn Fry",
    category: "starters",
    price: 420,
    rating: 4.95,
    reviewsCount: 340,
    badge: "Crispy Seafood",
    isVeg: false,
    spiceLevel: 3,
    desc: "Plump fresh prawns battered in spiced rice-gram flour with crushed black pepper & fried until delightfully crispy.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy Prawns", "Curry Leaf Dust"],
    origin: "Coastal Andhra"
  },

  // ================= 5. INDIAN BREADS =================
  {
    id: 501,
    name: "Butter Naan (Clay Tandoor)",
    category: "breads",
    price: 60,
    rating: 4.91,
    reviewsCount: 820,
    badge: "Tandoor Baked",
    isVeg: true,
    spiceLevel: 0,
    desc: "Soft and fluffy refined flour bread baked against clay oven walls and brushed with generous molten dairy butter.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Clay Tandoor", "Molten Butter"],
    origin: "Tandoor Classic"
  },
  {
    id: 502,
    name: "Garlic Butter Naan",
    category: "breads",
    price: 75,
    rating: 4.95,
    reviewsCount: 940,
    badge: "Aromatic Favorite",
    isVeg: true,
    spiceLevel: 0,
    desc: "Tandoori naan topped with roasted minced garlic cloves, fresh coriander, and brushed with hot herb butter.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    tags: ["Minced Garlic", "Coriander Butter"],
    origin: "Tandoor Classic"
  },
  {
    id: 503,
    name: "Tandoori Roti (Plain / Butter)",
    category: "breads",
    price: 35,
    rating: 4.86,
    reviewsCount: 510,
    badge: "100% Whole Wheat",
    isVeg: true,
    spiceLevel: 0,
    desc: "Crisp and wholesome 100% whole wheat flatbread baked to perfection in the clay tandoor.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tags: ["Whole Wheat", "Light & Crisp"],
    origin: "Claypot Specials"
  },
  {
    id: 504,
    name: "Flaky Laccha Paratha",
    category: "breads",
    price: 65,
    rating: 4.92,
    reviewsCount: 390,
    badge: "Multi-Layered",
    isVeg: true,
    spiceLevel: 0,
    desc: "Multi-layered flaky whole wheat bread folded with pure ghee and roasted crisp in the clay oven.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    tags: ["Flaky Layers", "Pure Ghee"],
    origin: "Punjab Classic"
  },
  {
    id: 505,
    name: "Traditional Missi Roti",
    category: "breads",
    price: 55,
    rating: 4.88,
    reviewsCount: 240,
    badge: "Gram Flour Herb",
    isVeg: true,
    spiceLevel: 1,
    desc: "Wholesome spiced gram flour & wheat bread infused with ajwain, onions, green chillies, and kasuri methi.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tags: ["Ajwain & Methi", "Gram Flour"],
    origin: "North Heritage"
  },
  {
    id: 506,
    name: "Golden Puffy Puri (3 Pcs with Aloo Bhaji)",
    category: "breads",
    price: 150,
    rating: 4.94,
    reviewsCount: 460,
    badge: "Puffy Delight",
    isVeg: true,
    spiceLevel: 2,
    desc: "Crispy deep-fried whole wheat puffed breads served with homestyle spiced potato masala bhaji & coconut chutney.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["3 Puffed Puris", "Aloo Masala"],
    origin: "All-India Comfort"
  },
  {
    id: 507,
    name: "Fluffy Amritsari Bhatura (2 Pcs with Chole)",
    category: "breads",
    price: 190,
    rating: 4.96,
    reviewsCount: 680,
    badge: "Grand Classic",
    isVeg: true,
    spiceLevel: 2,
    desc: "Huge, cloud-fluffy leavened fried bread paired with rich dark Amritsari chole, pickled onions, and green chillies.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Cloud Fluffy", "Amritsari Chole"],
    origin: "Punjab & Tricity"
  },

  // ================= 6. RICE & BIRYANI =================
  {
    id: 601,
    name: "Rayalaseema Chicken Dum Biryani",
    category: "biryani",
    price: 360,
    rating: 4.94,
    reviewsCount: 780,
    badge: "Fiery Bestseller",
    isVeg: false,
    spiceLevel: 3,
    desc: "Aromatic aged basmati rice cooked on slow dum with chicken marinated in roasted Guntur red chillies, mint, and pure ghee.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    tags: ["Aged Basmati", "Guntur Spice Dum", "Pure Ghee"],
    origin: "Rayalaseema"
  },
  {
    id: 602,
    name: "Godavari Gongura Mutton Biryani",
    category: "biryani",
    price: 440,
    rating: 4.97,
    reviewsCount: 620,
    badge: "Chef's Signature",
    isVeg: false,
    spiceLevel: 3,
    desc: "Tender goat meat slow-braised with tangy red Gongura leaves and layered with saffron-fragrant basmati rice in sealed handi.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["Wild Sorrel Dum", "Tender Goat Meat"],
    origin: "Rajahmundry Delta"
  },
  {
    id: 603,
    name: "Coastal Andhra Prawn Biryani",
    category: "biryani",
    price: 420,
    rating: 4.92,
    reviewsCount: 350,
    badge: "Coastal Royalty",
    isVeg: false,
    spiceLevel: 3,
    desc: "Juicy bay prawns tossed in shallots and whole spices, layered with long grain basmati rice and fresh mint-coriander dum.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    tags: ["Bay Prawns", "Saffron Basmati"],
    origin: "Kakinada Coast"
  },
  {
    id: 604,
    name: "Royal Hyderabadi Veg Dum Biryani",
    category: "biryani",
    price: 290,
    rating: 4.91,
    reviewsCount: 460,
    badge: "Pure Veg Dum",
    isVeg: true,
    spiceLevel: 2,
    desc: "Garden-fresh vegetables, paneer cubes, cashews & fried onions layered with saffron basmati rice and slow-cooked on dum.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    tags: ["Paneer & Cashews", "Saffron Infused"],
    origin: "Nizam Heritage"
  },
  {
    id: 605,
    name: "Aromatic Fragrant Jeera Rice",
    category: "biryani",
    price: 180,
    rating: 4.88,
    reviewsCount: 310,
    badge: "Ghee Tempered",
    isVeg: true,
    spiceLevel: 1,
    desc: "Aged long-grain basmati rice tempered with crackling royal cumin seeds, whole spices, and pure desi ghee.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    tags: ["Royal Cumin", "Desi Ghee"],
    origin: "North & South Classic"
  },
  {
    id: 606,
    name: "Authentic South Indian Lemon Rice (Chitrannam)",
    category: "biryani",
    price: 170,
    rating: 4.9,
    reviewsCount: 280,
    badge: "Zesty & Tangy",
    isVeg: true,
    spiceLevel: 2,
    desc: "Sona Masoori rice tossed with freshly squeezed lemon juice, turmeric, roasted crunchy peanuts, curry leaves & mustard tadka.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    tags: ["Roasted Peanuts", "Fresh Lemon", "Mustard Tadka"],
    origin: "Temple Tradition"
  },
  {
    id: 607,
    name: "Temple Style Curd Rice (Thayir Sadam / Daddojanam)",
    category: "biryani",
    price: 160,
    rating: 4.96,
    reviewsCount: 420,
    badge: "Cooling Divine",
    isVeg: true,
    spiceLevel: 1,
    desc: "Creamy soft cooked rice blended with fresh cultured yogurt, tempered with ginger, green chillies, curry leaves, cashews & pomegranate.",
    image: "curd_rice.jpg",
    tags: ["Cultured Yogurt", "Pomegranate Seeds", "Soothing"],
    origin: "Tirupati Temple"
  },
  {
    id: 608,
    name: "Steamed Fragrant Sona Masoori Rice",
    category: "biryani",
    price: 120,
    rating: 4.85,
    reviewsCount: 210,
    badge: "Godavari Harvest",
    isVeg: true,
    spiceLevel: 0,
    desc: "Fluffy steamed premium Sona Masoori delta rice, perfect companion for Andhra Podis, Pappu, and spicy non-veg curries.",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
    tags: ["Delta Grain", "Pure Fluffy"],
    origin: "Godavari Delta"
  },

  // ================= 7. INDIAN MEALS & THALI =================
  {
    id: 701,
    name: "Traditional South Indian Banana Leaf Thali",
    category: "thali",
    price: 320,
    rating: 4.95,
    reviewsCount: 680,
    badge: "Grand Thali",
    isVeg: true,
    spiceLevel: 2,
    desc: "12 authentic dishes: Sambar, Rasam, Kootu, Poriyal, Curd, Ghee, Gunpowder, Appalam, Pickle, Sweet Payasam & Sona Masoori Rice.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    tags: ["12 Delicacies", "Banana Leaf Feast", "Unlimited Sambar"],
    origin: "South Heritage"
  },
  {
    id: 702,
    name: "Royal Andhra Grand Bhojanam",
    category: "thali",
    price: 390,
    rating: 4.98,
    reviewsCount: 920,
    badge: "Signature Feast",
    isVeg: true,
    spiceLevel: 3,
    desc: "14 items including Mudda Pappu, Avakaya, Gongura Pachadi, Gutthi Vankaya, Majjiga Pulusu, Ghee, Gunpowder, Payasam & Pootharekulu.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    tags: ["14 Items", "Gongura & Avakaya", "Pootharekulu Included"],
    origin: "East Godavari Feast"
  },
  {
    id: 703,
    name: "North Indian Royal Veg Thali",
    category: "thali",
    price: 340,
    rating: 4.91,
    reviewsCount: 490,
    badge: "Paneer & Dal",
    isVeg: true,
    spiceLevel: 2,
    desc: "Paneer Butter Masala, Dal Makhani, Mix Veg, Jeera Rice, 2 Butter Rotis / Naan, Raita, Salad, Papad & Gulab Jamun.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    tags: ["Paneer & Dal Makhani", "Naan & Rice", "Gulab Jamun"],
    origin: "North Heritage"
  },
  {
    id: 704,
    name: "Royal Non-Veg Feast Thali",
    category: "thali",
    price: 490,
    rating: 4.97,
    reviewsCount: 740,
    badge: "Meat Lover's Pick",
    isVeg: false,
    spiceLevel: 3,
    desc: "Andhra Chicken Curry, Kodi Vepudu, Mutton Gravy / Biryani, Sambar, Rasam, 2 Tandoori Breads, Rice, Curd & Dessert.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    tags: ["Chicken & Mutton", "Biryani Rice", "Grand Non-Veg"],
    origin: "Royal Kitchens"
  },
  {
    id: 705,
    name: "Atreyapuram Family Celebration Meal (4-5 Pax)",
    category: "thali",
    price: 1490,
    rating: 4.98,
    reviewsCount: 310,
    badge: "Family Feast",
    isVeg: true,
    spiceLevel: 2,
    desc: "Complete lavish banquet for 4-5 guests: Starters, 4 Curries, Biryani Handi, Basket of Breads, Desserts & Filter Coffee.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    tags: ["Serves 4-5", "Full Feast Spread"],
    origin: "Grand Celebration"
  },
  {
    id: 706,
    name: "Special Andhra Executive Lunch Box",
    category: "thali",
    price: 250,
    rating: 4.89,
    reviewsCount: 410,
    badge: "Quick Lunch",
    isVeg: true,
    spiceLevel: 2,
    desc: "Perfect portion of Rice, Pappu, Veg Curry, Sambar, Curd, Ghee, Podi, Chapati & sweet treat in eco-friendly delivery pack.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    tags: ["Eco-Friendly Pack", "Office Lunch"],
    origin: "Express Dining"
  },

  // ================= 8. INDIAN SNACKS =================
  {
    id: 801,
    name: "Crispy Andhra Punugulu (12 Pcs)",
    category: "snacks",
    price: 130,
    rating: 4.95,
    reviewsCount: 460,
    badge: "Street Sensation",
    isVeg: true,
    spiceLevel: 2,
    desc: "Crispy golden bite-sized fritters made from fermented batter, served piping hot with spicy peanut chutney and tangy ginger chutney.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["12 Bite Fritters", "Ginger Chutney"],
    origin: "Vijayawada Street Style"
  },
  {
    id: 802,
    name: "Guntur Cut Mirchi Bajji (4 Pcs)",
    category: "snacks",
    price: 140,
    rating: 4.97,
    reviewsCount: 520,
    badge: "Fiery Street King",
    isVeg: true,
    spiceLevel: 3,
    desc: "Long green bhavnagri chillies stuffed with tangy ajwain-tamarind, batter dipped, double fried and tossed with chopped onions & lemon.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Double Fried", "Stuffed Tamarind", "Onion Crunch"],
    origin: "Guntur Streets"
  },
  {
    id: 803,
    name: "Mysore Bonda (4 Pcs)",
    category: "snacks",
    price: 130,
    rating: 4.91,
    reviewsCount: 380,
    badge: "Cloud Soft Inside",
    isVeg: true,
    spiceLevel: 1,
    desc: "Crispy round fritters made with curd-fermented flour, cumin, ginger & chopped coconut, fluffy like clouds inside.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Coconut Bits", "Fluffy Cloud"],
    origin: "Mysore & Deccan"
  },
  {
    id: 804,
    name: "Mumbai Style Butter Vada Pav (2 Pcs)",
    category: "snacks",
    price: 120,
    rating: 4.93,
    reviewsCount: 610,
    badge: "Street Legend",
    isVeg: true,
    spiceLevel: 3,
    desc: "Spicy golden batata vada sandwiched in butter-toasted soft pav with fiery dry garlic chutney and fried salted green chillies.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    tags: ["Dry Garlic Chutney", "Butter Pav"],
    origin: "Maharashtra Street"
  },
  {
    id: 805,
    name: "Khasta Moong Dal / Pyaz Kachori (2 Pcs)",
    category: "snacks",
    price: 110,
    rating: 4.88,
    reviewsCount: 290,
    badge: "Flaky & Spicy",
    isVeg: true,
    spiceLevel: 2,
    desc: "Extra-flaky deep fried pastries filled with spiced yellow moong dal, crushed coriander & saunf. Served with sweet tamarind dip.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["Flaky Khasta", "Tamarind Dip"],
    origin: "Rajasthan & North"
  },

  // ================= 9. INDIAN DESSERTS =================
  {
    id: 901,
    name: "Royal Atreyapuram Pootharekulu (5 Pcs)",
    category: "desserts",
    price: 260,
    rating: 4.99,
    reviewsCount: 880,
    badge: "Heritage GI Sweet",
    isVeg: true,
    spiceLevel: 0,
    desc: "The world-famous 'Paper Sweet' hand-crafted with ultra-thin rice starch sheets, pure Godavari A2 cow ghee, roasted dry fruits & organic jaggery.",
    image: "pootharekulu.jpg",
    tags: ["Signature GI Sweet", "100% A2 Ghee", "Melt-in-Mouth"],
    origin: "Atreyapuram Village, East Godavari"
  },
  {
    id: 902,
    name: "Traditional Sweet Bobbatlu (Puran Poli)",
    category: "desserts",
    price: 160,
    rating: 4.94,
    reviewsCount: 380,
    badge: "Pure Ghee Flatbread",
    isVeg: true,
    spiceLevel: 0,
    desc: "Soft thin flatbreads stuffed with organic jaggery and cooked chana dal, roasted golden with bubbling desi cow ghee.",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
    tags: ["Chana Dal & Jaggery", "Desi Ghee"],
    origin: "Andhra Festival Classic"
  },
  {
    id: 903,
    name: "Warm Gulab Jamun with Kesari Rabri (2 Pcs)",
    category: "desserts",
    price: 140,
    rating: 4.96,
    reviewsCount: 620,
    badge: "Hot & Creamy",
    isVeg: true,
    spiceLevel: 0,
    desc: "Soft fried milk solids dumplings soaked in rose-cardamom syrup, served warm over a pool of thick saffron pistachios rabri.",
    image: "gulab_jamun.jpg",
    tags: ["Mawa Dumplings", "Saffron Rabri"],
    origin: "All-India Classic"
  },
  {
    id: 904,
    name: "Kesar Pista Rasmalai (2 Pcs)",
    category: "desserts",
    price: 160,
    rating: 4.97,
    reviewsCount: 590,
    badge: "Chilled Saffron Milk",
    isVeg: true,
    spiceLevel: 0,
    desc: "Spongy cottage cheese discs soaked in chilled thickened saffron-pistachio milk with crushed cardamom and silver vark.",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    tags: ["Chilled Saffron Milk", "Almond Pista"],
    origin: "Bengal & North"
  },
  {
    id: 905,
    name: "Crispy Golden Jalebi with Rabri",
    category: "desserts",
    price: 150,
    rating: 4.93,
    reviewsCount: 470,
    badge: "Hot & Crisp",
    isVeg: true,
    spiceLevel: 0,
    desc: "Freshly piped spiral jalebis fried in pure desi ghee, soaked in saffron syrup, served hot with chilled creamy rabri.",
    image: "crispy_jalebi.jpg",
    tags: ["Pure Desi Ghee", "Saffron Syrup"],
    origin: "Street Classic"
  },
  {
    id: 906,
    name: "Rich Rice & Dry Fruit Kheer",
    category: "desserts",
    price: 130,
    rating: 4.89,
    reviewsCount: 260,
    badge: "Velvety Pudding",
    isVeg: true,
    spiceLevel: 0,
    desc: "Fragrant rice simmered in whole milk with roasted almonds, cashews, raisins, green cardamom, and saffron threads.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    tags: ["Whole Milk", "Roasted Dry Fruits"],
    origin: "North Heritage"
  },
  {
    id: 907,
    name: "Godavari Semiya & Sago Payasam",
    category: "desserts",
    price: 130,
    rating: 4.95,
    reviewsCount: 340,
    badge: "Festival Delicacy",
    isVeg: true,
    spiceLevel: 0,
    desc: "Roasted vermicelli and tapioca pearls cooked in thick cardamom milk with golden ghee-roasted cashews and raisins.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    tags: ["Ghee Roasted Cashews", "Vermicelli Payasam"],
    origin: "Godavari Tradition"
  },
  {
    id: 908,
    name: "Pure Ghee Rava Kesari (Sheera)",
    category: "desserts",
    price: 120,
    rating: 4.91,
    reviewsCount: 280,
    badge: "Saffron Halwa",
    isVeg: true,
    spiceLevel: 0,
    desc: "Roasted semolina cooked in pure A2 ghee, infused with saffron, cardamom powder, and garnished with fried cashew nuts.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    tags: ["A2 Desi Ghee", "Saffron Aroma"],
    origin: "Temple Prasadam"
  },

  // ================= 10. INDIAN BEVERAGES =================
  {
    id: 1001,
    name: "Brass Davara Degree Filter Coffee",
    category: "beverages",
    price: 90,
    rating: 4.99,
    reviewsCount: 1120,
    badge: "Iconic Brew",
    isVeg: true,
    spiceLevel: 0,
    desc: "Freshly roasted Chikmagalur & Araku Valley beans decoction blended with frothy boiled whole milk, served in heavy heirloom brassware.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    tags: ["Araku Valley Beans", "Brass Tumbler", "Frothy Crown"],
    origin: "Araku & Godavari"
  },
  {
    id: 1002,
    name: "Royal Masala Kulhad Chai",
    category: "beverages",
    price: 70,
    rating: 4.94,
    reviewsCount: 780,
    badge: "Claypot Chai",
    isVeg: true,
    spiceLevel: 1,
    desc: "Strong Assam tea brewed with crushed ginger, green cardamom, cloves & cinnamon, served in an unglazed earthen kulhad.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    tags: ["Earthen Kulhad", "Crushed Spices"],
    origin: "All-India Favorite"
  },
  {
    id: 1003,
    name: "Punjabi Sweet Malai Lassi (Clay Kulhad)",
    category: "beverages",
    price: 110,
    rating: 4.96,
    reviewsCount: 650,
    badge: "Thick & Creamy",
    isVeg: true,
    spiceLevel: 0,
    desc: "Chilled hand-churned fresh thick curd blended with sugar and rosewater, crowned with a dollop of fresh malai & pistachios.",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    tags: ["Fresh Malai Layer", "Pistachio Garnish"],
    origin: "Punjab Heritage"
  },
  {
    id: 1004,
    name: "Spiced Andhra Buttermilk (Majjiga)",
    category: "beverages",
    price: 60,
    rating: 4.93,
    reviewsCount: 420,
    badge: "Digestive Cooler",
    isVeg: true,
    spiceLevel: 1,
    desc: "Light churned buttermilk tempered with crushed ginger, green chillies, fresh coriander leaves, curry leaves, and asafoetida.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    tags: ["Ginger & Coriander", "Cooling Digestive"],
    origin: "Andhra Bhojanam"
  },
  {
    id: 1005,
    name: "Fresh Shikanji Lime Soda (Sweet & Salt)",
    category: "beverages",
    price: 70,
    rating: 4.88,
    reviewsCount: 310,
    badge: "Zesty Fizz",
    isVeg: true,
    spiceLevel: 1,
    desc: "Chilled club soda or water with fresh lime juice, roasted cumin, black salt, and fresh mint leaves.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
    tags: ["Fresh Lime", "Black Salt & Mint"],
    origin: "Summer Cooler"
  },
  {
    id: 1006,
    name: "Royal Alphonso Mango Lassi",
    category: "beverages",
    price: 130,
    rating: 4.98,
    reviewsCount: 540,
    badge: "Alphonso Pulp",
    isVeg: true,
    spiceLevel: 0,
    desc: "Lush blend of ripe Ratnagiri Alphonso mango pulp and thick creamy yogurt, chilled and garnished with saffron and almonds.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
    tags: ["Real Mango Pulp", "Thick Churn"],
    origin: "Tropical Special"
  },
  {
    id: 1007,
    name: "Cooling Spiced Mint Jaljeera",
    category: "beverages",
    price: 60,
    rating: 4.87,
    reviewsCount: 230,
    badge: "Herbal Punch",
    isVeg: true,
    spiceLevel: 1,
    desc: "Refreshing iced drink made with crushed fresh mint, coriander, roasted cumin, dried mango powder, and crisp boondi.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    tags: ["Crisp Boondi", "Roasted Cumin"],
    origin: "Digestive Cooler"
  }
];

// App State
let cart = [];
let currentCategory = "all";
let vegOnlyFilter = false;

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupEventListeners();
  updateCartBadge();
  setupReviewsCarousel();
  setupSocialProofEngine();
});

// Render Luxury Menu Cards
function renderMenu() {
  const menuContainer = document.getElementById("menuGrid");
  if (!menuContainer) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = (currentCategory === "all" || item.category === currentCategory);
    const matchesVeg = !vegOnlyFilter || item.isVeg;
    return matchesCat && matchesVeg;
  });

  if (filtered.length === 0) {
    menuContainer.innerHTML = `
      <div class="col-span-full py-16 text-center text-stone-500 bg-white rounded-3xl border border-[#eadbcc] shadow-xs">
        <i class="fas fa-utensils text-3xl mb-3 text-amber-700/40"></i>
        <p class="text-sm font-bold text-stone-700">No dishes found in this category with the current filter.</p>
        <button onclick="setFilterCategory('all')" class="mt-4 px-5 py-2.5 rounded-xl btn-vibrant-saffron text-xs font-bold">Show All Dishes</button>
      </div>
    `;
    return;
  }

  menuContainer.innerHTML = filtered.map(item => {
    const spiceIcons = item.spiceLevel > 0 
      ? Array(item.spiceLevel).fill('<i class="fas fa-pepper-hot text-[#991b1b] text-xs"></i>').join('')
      : '<span class="text-xs text-[#94570b] font-bold flex items-center gap-1"><i class="fas fa-star text-[#c68a2c]"></i> Sweet / Mild</span>';

    const typeBadgeClass = item.isVeg 
      ? 'bg-[#0f766e] text-white' 
      : 'bg-[#991b1b] text-white';

    return `
      <div class="card-eye-catch rounded-3xl overflow-hidden flex flex-col group bg-white shadow-xs">
        
        <!-- Image Frame -->
        <div class="relative h-56 overflow-hidden bg-stone-100">
          <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" loading="lazy">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          
          <!-- Badges -->
          <div class="absolute top-3.5 left-3.5 flex items-center space-x-2">
            <span class="px-3 py-1 rounded-full text-[11px] font-extrabold shadow-md flex items-center gap-1.5 ${typeBadgeClass}">
              <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
              ${item.isVeg ? 'Pure Veg' : 'Non-Veg'}
            </span>
            ${item.badge ? `<span class="px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#c68a2c] text-stone-950 shadow-md">${item.badge}</span>` : ''}
          </div>

          <!-- Rating -->
          <div class="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-xl bg-white/95 text-stone-900 text-xs font-black flex items-center gap-1 shadow-md border border-[#eadbcc]">
            <i class="fas fa-star text-[#c68a2c]"></i>
            <span>${item.rating}</span>
            <span class="text-stone-500 font-medium text-[10px]">(${item.reviewsCount})</span>
          </div>

          <!-- Telugu Subtitle -->
          <div class="absolute bottom-3 left-4 right-4 text-[#f5d485] text-xs font-bold tracking-wide flex items-center justify-between drop-shadow-sm">
            <span>${item.tags && item.tags[0] ? item.tags[0] : "Authentic Recipe"}</span>
            <span class="text-[11px] text-stone-200 font-normal"><i class="fas fa-map-pin text-[#c68a2c]"></i> ${item.origin}</span>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-5 flex-1 flex flex-col justify-between bg-white">
          <div>
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="font-extrabold text-base sm:text-lg text-stone-900 group-hover:text-[#94570b] transition-colors font-serif-royal leading-snug">${item.name}</h3>
            </div>

            <!-- Spice Level & Tags -->
            <div class="flex items-center justify-between text-xs mb-3 pb-2 border-b border-[#f7f4ee]">
              <span class="text-stone-500 font-semibold text-[11px] uppercase tracking-wider">Flavour Profile:</span>
              <div class="flex items-center gap-1">${spiceIcons}</div>
            </div>

            <p class="text-stone-600 text-xs line-clamp-2 leading-relaxed mb-4 font-normal">
              ${item.desc}
            </p>
          </div>

          <!-- Price and Action -->
          <div class="flex items-center justify-between pt-3 border-t border-[#f7f4ee]">
            <div>
              <span class="text-[11px] text-stone-400 font-bold block uppercase tracking-wider">Portion Price</span>
              <span class="text-xl sm:text-2xl font-black text-[#94570b] font-serif">₹${item.price}</span>
            </div>
            
            <button onclick="addToCart(${item.id})" class="px-5 py-2.5 rounded-xl btn-vibrant-saffron text-stone-950 text-xs font-black flex items-center gap-2 shadow-md transition-all active:scale-95">
              <i class="fas fa-plus text-xs"></i>
              <span>Add to Order</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// Event Listeners
function setupEventListeners() {
  // Category Filtering
  document.querySelectorAll(".menu-cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".menu-cat-btn").forEach(b => {
        b.classList.remove("active-cat", "bg-[#94570b]", "text-white");
        b.classList.add("bg-white", "text-stone-700");
      });
      btn.classList.add("active-cat", "bg-[#94570b]", "text-white");
      btn.classList.remove("bg-white", "text-stone-700");

      currentCategory = btn.getAttribute("data-category");
      renderMenu();
    });
  });

  // Veg Only Toggle
  const vegToggle = document.getElementById("vegOnlyToggle");
  if (vegToggle) {
    vegToggle.addEventListener("change", (e) => {
      vegOnlyFilter = e.target.checked;
      renderMenu();
    });
  }
}

// Helper to switch category externally
function setFilterCategory(category) {
  currentCategory = category;
  document.querySelectorAll(".menu-cat-btn").forEach(b => {
    if (b.getAttribute("data-category") === category) {
      b.classList.add("active-cat", "bg-[#94570b]", "text-white");
      b.classList.remove("bg-white", "text-stone-700");
    } else {
      b.classList.remove("active-cat", "bg-[#94570b]", "text-white");
      b.classList.add("bg-white", "text-stone-700");
    }
  });
  renderMenu();
  const menuElem = document.getElementById("menu");
  if (menuElem) {
    menuElem.scrollIntoView({ behavior: "smooth" });
  }
}

// Cart Engine
function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(i => i.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
  updateCartBadge();
  showToast(`Added "${item.name}" to your feast order!`);
}

function updateCartQty(itemId, delta) {
  const item = cart.find(i => i.id === itemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== itemId);
  }

  updateCartUI();
  updateCartBadge();
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-count-badge");
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  badges.forEach(badge => {
    badge.innerText = totalCount;
    if (totalCount > 0) {
      badge.classList.remove("hidden");
      badge.classList.add("flex");
    } else {
      badge.classList.add("hidden");
      badge.classList.remove("flex");
    }
  });
}

function updateCartUI() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartTotalPrice");
  if (!container || !subtotalEl) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-stone-500 space-y-3">
        <i class="fas fa-shopping-bag text-4xl mb-3 text-[#c68a2c]/40"></i>
        <p class="text-sm font-bold text-stone-800">Your food cart is empty</p>
        <p class="text-xs text-stone-500">Explore our authentic Andhra dishes and add them to your order.</p>
        <div class="pt-2">
          <a href="menu.html" onclick="toggleCartDrawer(false)" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-vibrant-saffron text-stone-950 font-bold text-xs shadow-md">
            <i class="fas fa-utensils"></i> Browse Full Menu
          </a>
        </div>
      </div>
    `;
    subtotalEl.innerText = "₹0";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    return `
      <div class="flex items-center justify-between p-3.5 rounded-2xl bg-[#fcfbf7] border border-[#eadbcc]">
        <div class="flex items-center gap-3">
          <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-xl object-cover">
          <div>
            <h4 class="text-xs font-bold text-stone-900 leading-tight">${item.name}</h4>
            <span class="text-xs text-[#94570b] font-bold">₹${item.price} each</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center border border-[#eadbcc] rounded-xl bg-white px-2 py-1 gap-2 text-xs font-bold">
            <button onclick="updateCartQty(${item.id}, -1)" class="text-stone-500 hover:text-stone-900 px-1">-</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, 1)" class="text-stone-500 hover:text-stone-900 px-1">+</button>
          </div>
          <span class="text-xs font-black text-stone-900 font-serif w-12 text-right">₹${itemTotal}</span>
        </div>
      </div>
    `;
  }).join('');

  subtotalEl.innerText = `₹${total}`;
}

function toggleCartDrawer(show) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) {
    console.warn("Cart drawer or overlay element not found");
    return;
  }

  // Determine target state
  const isCurrentlyOpen = drawer.classList.contains("open") || drawer.style.transform === "translateX(0%)" || !drawer.classList.contains("translate-x-full");
  const shouldOpen = (show !== undefined) ? !!show : !isCurrentlyOpen;

  if (shouldOpen) {
    updateCartUI();
    drawer.classList.add("open");
    drawer.classList.remove("translate-x-full");
    drawer.classList.add("translate-x-0");
    drawer.style.transform = "translateX(0)";
    drawer.style.display = "flex";
    
    overlay.classList.remove("hidden");
    overlay.style.display = "block";
    document.body.classList.add("overflow-hidden");
  } else {
    drawer.classList.remove("open");
    drawer.classList.remove("translate-x-0");
    drawer.classList.add("translate-x-full");
    drawer.style.transform = "translateX(100%)";
    
    overlay.classList.add("hidden");
    overlay.style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }
}

function orderViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Please add items to your cart before sending the order.");
    return;
  }

  let text = "✨ *Atreyapuram Aromas - Food Order Inquiry* ✨\n\n";
  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    text += `${index + 1}. *${item.name}* x ${item.qty} = ₹${itemTotal}\n`;
  });

  text += `\n💰 *Estimated Subtotal: ₹${total}*\n`;
  text += `📍 *Delivery Area:* Zirakpur / Chandigarh / Mohali\n`;
  text += `Please confirm my order preparation and estimated arrival time.`;

  const encoded = encodeURIComponent(text);
  const waUrl = `https://wa.me/919872456777?text=${encoded}`;
  window.open(waUrl, "_blank");
}

// Reservation Modals
function openReservationModal() {
  const modal = document.getElementById("tableBookingModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeReservationModal() {
  const modal = document.getElementById("tableBookingModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function handleReservationSubmit(form) {
  const name = form.querySelector('input[placeholder*="Name"]')?.value || "Valued Guest";
  const phone = form.querySelector('input[placeholder*="Phone"]')?.value || "Your Phone";
  const randomId = "AA-" + Math.floor(100000 + Math.random() * 900000);

  const confModal = document.getElementById("reservationSuccessModal");
  const confId = document.getElementById("resConfId");
  const confDetails = document.getElementById("resConfDetails");

  if (confId) confId.innerText = randomId;
  if (confDetails) {
    confDetails.innerHTML = `
      <div><strong>Guest Name:</strong> ${name}</div>
      <div><strong>Contact:</strong> ${phone}</div>
      <div><strong>Status:</strong> <span class="text-emerald-700 font-bold">Confirmed Table Slot</span></div>
    `;
  }

  if (confModal) {
    confModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeReservationSuccessModal() {
  const modal = document.getElementById("reservationSuccessModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function toggleMobileNav() {
  const menu = document.getElementById("mobileNavMenu");
  if (menu) menu.classList.toggle("hidden");
}

function showRewardModal(name) {
  const modal = document.getElementById("loyaltyRewardModal");
  const nameEl = document.getElementById("rewardCustomerName");
  if (nameEl) nameEl.innerText = name || "Valued Guest";
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeRewardModal() {
  const modal = document.getElementById("loyaltyRewardModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Close modals when clicking on dark backdrop outside card
document.addEventListener("DOMContentLoaded", () => {
  const modalBackdrops = document.querySelectorAll(".modal-backdrop-luxury");
  modalBackdrops.forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  });

  // ESC key to close open modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeReservationModal();
      closeReservationSuccessModal();
      closeRewardModal();
    }
  });
});

// Toast Notifications
function showToast(msg) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "px-4 py-3 rounded-2xl bg-stone-900 text-white text-xs font-bold shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-4 border border-[#c68a2c]/50";
  toast.innerHTML = `<i class="fas fa-check-circle text-[#f5d485]"></i> <span>${msg}</span>`;

  container.appendChild(toast);
  setTimeout(() => toast.classList.remove("translate-y-4"), 10);
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Reviews Carousel Engine
const REVIEWS_DATA = [
  {
    name: "Dr. Ananya Reddy",
    location: "Zirakpur Resident",
    rating: 5,
    dish: "Pootharekulu & Gongura Mutton",
    comment: "Living in Tricity for 6 years, I desperately missed authentic Godavari Andhra flavours. Atreyapuram Aromas brings the exact taste of East Godavari! The Pootharekulu was so crisp and melt-in-mouth with pure ghee.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Vikramjit Singh",
    location: "Chandigarh Sector 35",
    rating: 5,
    dish: "Rayalaseema Chicken Biryani & Dosa",
    comment: "Unbelievable flavours! The Guntur Karam Dosa has the best crunch and spice blend in the entire Chandigarh region. The filter coffee served in brass tumbler is exceptional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Meera & Rajesh Sharma",
    location: "Mohali Phase 7",
    rating: 5,
    dish: "Grand Andhra Bhojanam Thali",
    comment: "The Royal Banana Leaf Bhojanam with 14 dishes is a divine feast for families. Mudda Pappu with ghee and hot gunpowder took our Sunday lunch to another level. Warm and polite staff!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  }
];

function setupReviewsCarousel() {
  const reviewsContainer = document.getElementById("reviewsContainer");
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = REVIEWS_DATA.map(rev => `
    <div class="card-eye-catch p-6 sm:p-8 rounded-3xl bg-white border border-[#eadbcc] shadow-xs flex flex-col justify-between">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="${rev.avatar}" alt="${rev.name}" class="w-12 h-12 rounded-full object-cover border-2 border-[#c68a2c]">
            <div>
              <h4 class="text-sm font-bold text-stone-900 font-serif-royal">${rev.name}</h4>
              <span class="text-stone-500 text-xs font-normal">${rev.location}</span>
            </div>
          </div>
          <div class="text-[#c68a2c] text-xs">
            ${Array(rev.rating).fill('<i class="fas fa-star"></i>').join('')}
          </div>
        </div>
        <div class="inline-block px-3 py-1 rounded-full bg-[#fdf8ed] border border-[#eadbcc] text-[11px] font-bold text-[#94570b]">
          Ordered: ${rev.dish}
        </div>
        <p class="text-stone-600 text-xs sm:text-sm leading-relaxed font-normal italic">
          "${rev.comment}"
        </p>
      </div>
      <div class="pt-4 mt-4 border-t border-[#f7f4ee] flex items-center justify-between text-[11px] text-stone-400">
        <span class="flex items-center gap-1 text-emerald-700 font-bold"><i class="fas fa-badge-check"></i> Verified Diner</span>
        <span>Google Review</span>
      </div>
    </div>
  `).join('');
}

function setupSocialProofEngine() {
  const cities = ["Zirakpur", "Chandigarh Sec 26", "Mohali Phase 7", "Panchkula"];
  const dishes = ["Gongura Mutton Biryani", "Atreyapuram Pootharekulu", "Guntur Karam Dosa", "Butter Chicken", "Paneer Tikka Pizza"];

  setInterval(() => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    const randomTime = Math.floor(Math.random() * 5) + 1;
    // Non-intrusive subtle bottom toast occasionally
  }, 25000);
}
