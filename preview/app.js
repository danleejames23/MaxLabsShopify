// Max Labs Preview - Complete JavaScript (Matches theme exactly)

// Products Data - Real products from UK SARMs / Max Labs
const products = [
  { 
    id: 1, 
    title: "Post Cycle Therapy", 
    price: 38.99, 
    comparePrice: 49.99, 
    image: "assets/pct-1.jpg",
    images: ["assets/pct-1.jpg", "assets/pct-2.jpg", "assets/pct-3.jpg", "assets/pct-4.jpg"], 
    badge: "-22%", 
    reviews: 20, 
    sold: 437, 
    rating: 5.0,
    quickBenefits: [
      "Free Next Day Delivery (UK) / International Shipping ✅",
      "Natural Post Cycle Therapy ✅",
      "Restores Hormonal Imbalances ✅",
      "Support Supplement ✅",
      "Highest Rated Supplier ✅"
    ],
    bulkDiscounts: [
      { qty: 3, discount: 10 },
      { qty: 6, discount: 15 },
      { qty: 9, discount: 20 }
    ],
    descriptionShort: "You've invested time, dedication, and intense effort into your training cycle. Now, as you transition off-cycle, the critical step is protecting your progress and restoring your body's natural balance. Max Labs Post Cycle Therapy (PCT) is expertly crafted to help you smoothly navigate post-cycle recovery.",
    fullDescription: `
      <h3>Post Cycle Therapy (Max Labs)</h3>
      <h4>Rebalance, Recover, and Revitalize</h4>
      <p>You've invested time, dedication, and intense effort into your training cycle. Now, as you transition off-cycle, the critical step is protecting your progress and restoring your body's natural balance. Max Labs Post Cycle Therapy (PCT) is expertly crafted to help you smoothly navigate post-cycle recovery, ensuring that your body returns to its optimal hormonal and physiological state, ready for your next breakthrough.</p>
      
      <h3>Why Post Cycle Therapy Matters</h3>
      <p>After a rigorous supplement cycle, especially one involving powerful prohormones or SARMs, your body's hormonal equilibrium can be significantly disrupted. Testosterone levels may drop, estrogen could spike, and your body might struggle to maintain the muscle gains and strength you've achieved. Effective Post Cycle Therapy is vital—it helps restore hormonal balance, safeguards muscle gains, prevents side effects, and promotes overall well-being.</p>
      
      <h3>The Max Labs PCT Difference</h3>
      <p>Max Labs Post Cycle Therapy is not merely another supplement—it's a precise, science-backed formula that leverages potent, natural ingredients. Each ingredient works synergistically to support your hormonal system, boost testosterone levels naturally, and maintain the muscle and strength you've worked tirelessly to build.</p>
      
      <h3>What's Inside Max Labs PCT?</h3>
      <ul>
        <li><strong>Tribulus Terrestris (250 mg):</strong> Tribulus terrestris is renowned for its natural testosterone-boosting properties. It stimulates your body's hormone production, helping to increase testosterone levels naturally after a cycle. Higher testosterone levels mean enhanced strength, improved muscle retention, increased libido, and greater overall vitality.</li>
        <li><strong>Maca Root 4:1 (100 mg):</strong> Maca root, a powerful adaptogenic herb, is known for its ability to enhance endurance, energy, and libido. Its adaptogenic properties assist in balancing hormone levels, alleviating post-cycle stress, and stabilizing mood fluctuations.</li>
        <li><strong>DHEA (100 mg):</strong> Dehydroepiandrosterone (DHEA) plays a pivotal role in hormone production and balance. Supplementing with DHEA post-cycle supports hormonal equilibrium, revitalizes your energy levels, and accelerates your recovery process.</li>
        <li><strong>DIM (Diindolylmethane – 200 mg):</strong> DIM is an essential compound derived from cruciferous vegetables, recognized for its role in estrogen metabolism. It modulates estrogen levels effectively, preventing estrogen dominance and related side effects such as gynecomastia and water retention.</li>
      </ul>
      
      <h3>Comprehensive Benefits of Max Labs PCT</h3>
      
      <h4>Restores Natural Testosterone Levels</h4>
      <p>Max Labs PCT is specifically engineered to quickly reboot your body's natural testosterone production. By supporting optimal hormone levels, it preserves your muscle gains and helps maintain strength and physical performance.</p>
      
      <h4>Efficient Estrogen Management</h4>
      <p>Managing estrogen is crucial post-cycle. The DIM in Max Labs PCT expertly moderates estrogen metabolism, keeping levels balanced and reducing unwanted side effects. This results in a leaner physique, fewer mood swings, and increased overall well-being.</p>
      
      <h4>Prostate Health Support</h4>
      <p>Prostate health can often be compromised during intense supplement cycles. Max Labs PCT provides crucial herbal support, notably from Tribulus and DIM, ingredients known for their positive impact on male reproductive and prostate health.</p>
      
      <h4>Enhances Libido and Mood</h4>
      <p>Hormonal fluctuations post-cycle can negatively affect your mood and libido. Ingredients like Tribulus Terrestris and Maca Root work harmoniously to revive your energy, enhance libido, and stabilize your mood.</p>
      
      <h3>Ideal for Every Athlete</h3>
      <p>Max Labs Post Cycle Therapy is an essential supplement for:</p>
      <ul>
        <li>Bodybuilders completing SARMs, prohormone, or anabolic supplement cycles</li>
        <li>Athletes aiming to maintain lean muscle and strength post-cycle</li>
        <li>Individuals seeking optimal hormonal balance and enhanced well-being post-cycle</li>
      </ul>
      
      <h3>How to Use Max Labs PCT</h3>
      <p>For optimal results, take two capsules of Max Labs PCT daily, ideally with meals. Continue using it throughout your post-cycle phase to ensure complete hormonal recovery and maintenance of muscle gains. Consistency is key to achieving the maximum benefits.</p>
      
      <p><strong>Max Labs—Rebalance. Recover. Revitalize.</strong></p>
    `,
    faqs: [
      { q: "How long should I use Max Labs PCT?", a: "We recommend using Max Labs PCT throughout your entire post-cycle recovery phase, typically 4-8 weeks, depending on your cycle duration and intensity." },
      { q: "Can I combine Max Labs PCT with other supplements?", a: "Yes, Max Labs PCT is designed to complement your overall supplementation strategy, and it safely pairs with most general wellness and recovery supplements." },
      { q: "Are there any side effects?", a: "Max Labs PCT uses natural, safe ingredients. However, consult with your healthcare provider if you have specific health concerns or are currently taking medication." }
    ],
    guarantee: ["Pharmaceutical grade", "Manufactured in the UK", "HPLC Tested", "Free Next Day Delivery UK / Free International Shipping", "Scientific-backed advice and assistance"]
  },
  { 
    id: 2, 
    title: "Alpha GPC", 
    price: 39.99, 
    comparePrice: 49.99, 
    image: "assets/alpha-gpc-1.jpg",
    images: ["assets/alpha-gpc-1.jpg", "assets/alpha-gpc-2.jpg", "assets/alpha-gpc-3.jpg"], 
    badge: "-20%", 
    reviews: 99, 
    sold: 210, 
    rating: 5.0,
    quickBenefits: [
      "Increases growth hormones",
      "Increases power",
      "Improved strength",
      "Boosts fat loss",
      "Improved body composition",
      "Boosts energy",
      "Improves memory and mental focus"
    ],
    bulkDiscounts: [
      { qty: 3, discount: 10 },
      { qty: 6, discount: 15 },
      { qty: 9, discount: 20 }
    ],
    descriptionShort: "Increase your endurance performance and growth hormone production with Max Labs Alpha-GPC. Athletes looking for more power use Alpha-GPC, one of the world's most popular nootropics.",
    fullDescription: `
      <h3>Alpha GPC Supplements</h3>
      <p>Increase your endurance performance and growth hormone production with Max Labs Alpha-GPC.</p>
      <p>Athletes looking for more power use Alpha-GPC, one of the world's most popular nootropics. Most people use it for the mind and muscles, but some claim it can help you lose fat and live longer. Alpha-GPC is great if you want an extra push in the gym without the side effects of classical stimulants like caffeine.</p>
      
      <h3>Boost Your Power Output</h3>
      <p>Alpha-GPC initially came onto the scene when studies showed a <strong>14% increase in power output</strong> assessed by bench throws.</p>
      <p>Using caffeine and placebo as controls, researchers compared 250 mg Alpha-GPC to 500 mg Alpha-GPC. Using isometric mid-thigh pulls (among other tests), 250 mg Alpha-GPC increased power and velocity the most compared to the placebo.</p>
      
      <h3>Prevent Cognitive Decline</h3>
      <p>Alpha-GPC has been shown to improve cognitive functions like memory, learning, recall, focus, and repetitive tasks, as well as physical functions like power output, force development, strength, jumping, and agility.</p>
      <p>It's even proven to help you play video games better.</p>
      
      <h3>Burn Fat Fast</h3>
      <p>The benefits of A-GPC go beyond cognition and workout performance. They also affect body composition.</p>
      <p>A single dose of Alpha-GPC increases growth hormone secretion and fat-burning within an hour in healthy young men. Studies show that in 60 minutes, <strong>growth hormone levels had risen by 290%</strong>. Higher growth hormone means faster muscle recovery and increased fat burning.</p>
      <p>Take Alpha-GPC 30-60 minutes before working out for faster results.</p>
      
      <h3>Benefits of Alpha GPC</h3>
      <ul>
        <li>✅ Increases growth hormones</li>
        <li>✅ Increases power</li>
        <li>✅ Improved strength</li>
        <li>✅ Boosts fat loss</li>
        <li>✅ Improved body composition</li>
        <li>✅ Boosts energy</li>
        <li>✅ Improves memory and mental focus</li>
      </ul>
    `,
    faqs: [],
    guarantee: ["Pharmaceutical grade", "Manufactured in the UK", "HPLC Tested", "Free Next Day Delivery UK / Free International Shipping", "Scientifically backed advice and assistance"]
  },
  { 
    id: 3, 
    title: "Ashwagandha", 
    price: 39.99, 
    comparePrice: 49.99, 
    image: "assets/ashwagandha-1.jpg",
    images: ["assets/ashwagandha-1.jpg", "assets/ashwagandha-2.png", "assets/ashwagandha-3.jpg", "assets/ashwagandha-4.jpg"], 
    badge: "-20%", 
    reviews: 93, 
    sold: 180, 
    rating: 4.99,
    quickBenefits: [
      "Increases muscle strength",
      "Boosts testosterone and fertility in men",
      "Reduces stress and anxiety",
      "Relieves depression",
      "Reduces blood sugar levels",
      "Improves sleep"
    ],
    bulkDiscounts: [
      { qty: 3, discount: 10 },
      { qty: 6, discount: 15 },
      { qty: 9, discount: 20 }
    ],
    descriptionShort: "Max Labs Ashwagandha increases energy levels, boosts muscle strength, relieves stress, and improves concentration. In Ayurvedic medicine, ashwagandha is traditionally used for its adaptogenic properties to increase energy, improve overall health, and reduce inflammation.",
    fullDescription: `
      <h3>Ashwagandha Supplements</h3>
      <p>Max Labs Ashwagandha increases energy levels, boosts muscle strength, relieves stress, and improves concentration.</p>
      <p>In Ayurvedic medicine, ashwagandha is traditionally used for its adaptogenic properties to increase energy, improve overall health, and reduce inflammation.</p>
      
      <h3>Improve Muscle Mass And Strength</h3>
      <p>As an adaptogen, ashwagandha reduces stress and anxiety by adjusting your body's response to stress. Physically and mentally, lessening stress and anxiety in relation to athletic performance can have a massive impact on performance.</p>
      <p>Ashwagandha supplements are shown to promote muscle mass and benefit health. Several studies suggest that the herb enhances physical performance, muscle strength, and oxygen use during exercise.</p>
      
      <h3>Naturally Boost Testosterone</h3>
      <p>A low testosterone level can result in irritability, fatigue, loss of muscle mass, and decreased sex drive. According to research, ashwagandha may increase testosterone levels significantly.</p>
      <p>During an 8-week study, 43 men ages 40–70 took tablets containing ashwagandha extract or a placebo daily. <strong>Participants who took the herb had a 14.7% higher testosterone level than those who took a placebo.</strong></p>
      
      <h3>Improve Your Sleep</h3>
      <p>Ashwagandha may be an effective natural remedy to improve sleep, especially for people with insomnia, according to recent scientific evidence.</p>
      <p>For bigger gains and better performance, you need to improve the quality and duration of your sleep to help your body recover and rebuild muscle mass.</p>
      
      <h3>Benefits of Ashwagandha</h3>
      <ul>
        <li>✅ Increases muscle strength</li>
        <li>✅ Boosts testosterone and fertility in men</li>
        <li>✅ Reduces stress and anxiety</li>
        <li>✅ Relieves depression</li>
        <li>✅ Reduces blood sugar levels</li>
        <li>✅ Improves sleep</li>
      </ul>
      <p>Ashwagandha is generally considered safe for most people. It's essential to consult a healthcare professional before adding any supplement to your daily routine.</p>
    `,
    faqs: [],
    guarantee: ["Pharmaceutical grade", "Manufactured in the UK", "HPLC Tested", "Free Next Day Delivery UK / Free International Shipping", "Scientifically backed advice and assistance"]
  },
  { 
    id: 4, 
    title: "Tongkat Ali Supplements", 
    price: 39.99, 
    comparePrice: 49.99, 
    image: "assets/tongkat-ali-1.jpg",
    images: ["assets/tongkat-ali-1.jpg", "assets/tongkat-ali-2.jpg", "assets/tongkat-ali-3.jpg", "assets/tongkat-ali-4.jpg"], 
    badge: "-20%", 
    reviews: 87, 
    sold: 344, 
    rating: 5.0,
    quickBenefits: [
      "Increases the production of testosterone",
      "Improves sexual health & libido",
      "Boosts strength and muscle",
      "Burns fat",
      "Reduces stress and anger & improves mood"
    ],
    bulkDiscounts: [
      { qty: 3, discount: 10 },
      { qty: 6, discount: 15 },
      { qty: 9, discount: 20 }
    ],
    descriptionShort: "Get stronger, have more energy, and boost your libido without risking your health. Tongkat Ali has been used for centuries to boost testosterone, build muscle, improve your libido and increase energy.",
    fullDescription: `
      <h3>Benefits of Tongkat Ali</h3>
      <p>Tongkat Ali is a popular herbal supplement used to support testosterone, energy, and overall vitality, making it a go-to choice for men's health and fitness. Here's what makes it so effective:</p>
      <ul>
        <li>✅ Naturally boosts testosterone levels to support hormonal balance</li>
        <li>✅ Enhances muscle growth, stamina, and physical performance</li>
        <li>✅ Increases energy and supports overall wellbeing</li>
        <li>✅ Ideal for men's health, fitness, and vitality goals</li>
        <li>✅ Premium Tongkat Ali testosterone booster backed by quality and testing</li>
      </ul>
      
      <h3>Athletic Performance</h3>
      <p>Testosterone is an anabolic hormone. It helps build and strengthen muscle mass. Max Labs Tongkat Ali will increase testosterone and help you build muscle, so your workouts and exercises will be more effective. Once you have muscle, testosterone will also help you maintain it. Tongkat Ali testosterone supplements can aid in losing body fat while improving the ability to gain lean body mass.</p>
      <p>Tongkat Ali has been shown to increase lean body mass in a promising Malaysian study published in 2002. Over five weeks, seven men were given Tongkat Ali extract every day, and the other seven were given a placebo. <strong>Men in the Tongkat Ali group experienced a 5% increase in lean body mass and a significant reduction in body fat.</strong></p>
      
      <h3>Traditional Use</h3>
      <p>In Malaysia, lower Burma, Thailand, and Indonesia, Tongkat Ali means "Ali's walking stick". It is used to treat malaria, high blood pressure, fevers, fatigue, loss of sexual desire, and impotence as a traditional remedy. There is a long history of the traditional use of Tongkat Ali and a growing body of scientific evidence that it is effective.</p>
      <p>The ingredients of Tongkat Ali are 100% natural and plant-based. Contrary to anabolic steroids, Tongkat Ali testosterone supplements help your body to produce more testosterone.</p>
      
      <h3>How Tongkat Ali Supplements Work</h3>
      <p>Tongkat Ali helps boost natural testosterone production by increasing free testosterone levels and lowering stress hormones like cortisol. This supports muscle growth, energy, libido, and overall performance. Ideal for those looking to improve vitality and strength.</p>
      
      <h3>Why Buy Tongkat Ali from Us?</h3>
      <ul>
        <li>✅ Premium-grade Tongkat Ali testosterone supplements sourced for maximum potency</li>
        <li>✅ Fully lab-tested for purity, safety, and effectiveness</li>
        <li>✅ Fast, reliable UK delivery with discreet packaging</li>
        <li>✅ Expert customer support and guidance</li>
        <li>✅ Trusted UK supplier with thousands of satisfied customers</li>
      </ul>
    `,
    faqs: [
      { q: "What is Tongkat Ali and how does it support testosterone levels?", a: "Tongkat Ali is a natural herbal extract known for its potential to boost testosterone levels, which can improve energy, stamina, and muscle growth. Many users turn to a trusted Tongkat Ali testosterone supplement to safely enhance their hormonal balance and overall performance." },
      { q: "Is Tongkat Ali safe to use as a supplement in the UK?", a: "Yes, Tongkat Ali is a natural and legal supplement in the UK. Buying a premium Tongkat Ali supplement allows you to experience its benefits safely and effectively." },
      { q: "How quickly can I expect results from using Tongkat Ali supplements?", a: "Results can vary depending on the dosage, but many users report noticeable improvements in energy, mood, and testosterone levels within a few weeks of consistent use." }
    ],
    guarantee: ["Pharmaceutical grade", "Manufactured in the UK", "HPLC Tested", "Free Next Day Delivery UK / Free International Shipping", "Scientific-backed advice and assistance"]
  },
  { 
    id: 5, 
    title: "Max Strength Turkesterone 1400mg", 
    price: 39.99, 
    comparePrice: 75.99, 
    image: "assets/turkesterone-1.jpg",
    images: ["assets/turkesterone-1.jpg", "assets/turkesterone-2.png", "assets/turkesterone-3.jpg", "assets/turkesterone-4.jpg"], 
    badge: "-47%", 
    reviews: 90, 
    sold: 468, 
    rating: 4.99,
    quickBenefits: [
      "Promotes Muscle Growth",
      "Increased Strength",
      "Natural Testosterone Booster",
      "700 MG / 90 Caps / 10x Strength"
    ],
    bulkDiscounts: [
      { qty: 3, discount: 10 },
      { qty: 6, discount: 15 },
      { qty: 9, discount: 20 }
    ],
    descriptionShort: "Buy Turkesterone from Max Labs - the UK and Europe's #1 supplier, offering maximum strength for maximum results. Our Turkesterone is 1400mg — the highest dose available on the market.",
    fullDescription: `
      <h3>Max Strength – Turkesterone Supplements (1400mg)</h3>
      <p>Buy Turkesterone from Max Labs - the UK and Europe's #1 supplier, offering maximum strength for maximum results. Our Turkesterone is 1400mg — the highest dose available on the market.</p>
      <p>Turkesterone supplements are a natural steroid found in plants and insects that helps improve muscle growth and strength. It has gained significant attention in the bodybuilding community for its ability to enhance performance, promote muscle gains, and improve body composition.</p>
      
      <h3>Benefits of Turkesterone</h3>
      <ul>
        <li>✅ Increases muscle mass</li>
        <li>✅ Strengthens your body</li>
        <li>✅ Increases the ratio of muscle to fat</li>
        <li>✅ An increase in muscular endurance</li>
        <li>✅ Recovery time improved</li>
        <li>✅ Improves sleep, cholesterol, and glucose levels</li>
        <li>✅ Benefits of steroids without cycling or PCT</li>
      </ul>
      <p>Take your Turkesterone dose in the morning with food, as taking it on an empty stomach may cause mild discomfort for some users. When used at the recommended dosage, Turkesterone typically has limited side effects, especially when compared to the benefits it brings.</p>
      
      <h3>Key Features of Turkesterone</h3>
      
      <h4>Boosts Muscle Growth & Strength</h4>
      <p>Research has shown that Turkesterone supplements help to increase strength and muscle mass in humans. The efficacy of Turkesterone products has been compared to small doses of anabolic steroids but without the androgenic side effects. Additionally, WADA does not consider Turkesterone supplements a prohibited substance. This ruling makes it a safe and legal option for those seeking effective muscle and strength gains.</p>
      
      <h4>Promotes Muscle Repair & Recovery</h4>
      <p>During unfamiliar or intense exercise, muscle damage is repaired through protein synthesis. A Turkesterone supplement is likely to aid exercise recovery, as ecdysteroids like Turkesterone have been shown to <strong>increase protein synthesis by up to 20%</strong>. This makes it a popular choice for those looking to enhance recovery and muscle growth.</p>
      
      <h4>Starts Working Fast</h4>
      <p>A supplement needs to show results quickly, or users may stop taking it. That's why <strong>68% of people using Turkesterone reported feeling the benefits within the first four weeks</strong>. You can expect noticeable increases in strength and performance fast.</p>
      
      <h3>How Turkesterone Supplements Work</h3>
      <p>Turkesterone supplements support muscle growth, strength, and recovery by promoting protein synthesis without affecting hormone levels. Unlike steroids, they're non-hormonal and don't require PCT. That's why so many choose Turkesterone as a safe, natural way to boost performance. For bodybuilders, gym goers or anyone looking to gain muscle, Max Labs offers high-purity products.</p>
      
      <h3>Why Buy Turkesterone Supplements from Us?</h3>
      <ul>
        <li>✅ <strong>Premium-Grade Quality</strong> – Our Turkesterone products are lab-tested for purity and potency to ensure maximum effectiveness.</li>
        <li>✅ <strong>No Fillers or Banned Substances</strong> – 100% natural, with no hidden additives or illegal compounds.</li>
        <li>✅ <strong>Fast UK Shipping</strong> – Get your Turkesterone supplement quickly and reliably, wherever you are in the UK.</li>
        <li>✅ <strong>Trusted by the Fitness Community</strong> – Thousands of satisfied customers choose Max Labs for proven performance.</li>
        <li>✅ <strong>Excellent Customer Support</strong> – Our expert team is on hand to help with any queries.</li>
      </ul>
      <p>When it comes to finding the best Turkesterone supplement customers can trust, Max Labs deliver on quality, service, and results. Experience the benefits of Turkesterone today.</p>
    `,
    faqs: [
      { q: "What is Turkesterone and why should I choose a Turkesterone supplement?", a: "Turkesterone is a natural ecdysteroid compound found in certain plants that supports muscle growth, recovery, and performance. Choosing a high-quality Turkesterone supplement ensures you get a pure and effective product that can help you achieve your muscle building goals." },
      { q: "Where can I buy Turkesterone safely and reliably?", a: "You can buy Turkesterone from trusted suppliers like Max Labs, who offer lab-tested, premium-grade supplements with fast shipping. Always choose reputable sellers to ensure you get a Turkesterone supplement that's pure, potent, and free from banned substances." },
      { q: "How do I know which is the best Turkesterone supplement?", a: "The best Turkesterone supplement will be third-party tested, have clear ingredient transparency, and provide a high dosage per serving. At Max Labs we have positive reviews and offer reliable UK delivery to guarantee you're investing in an effective and safe product." }
    ],
    guarantee: ["Pharmaceutical grade", "Manufactured in the UK", "HPLC Tested", "Free Next Day Delivery UK / Free International Shipping", "Scientific-backed advice and assistance"]
  },
  { 
    id: 6, 
    title: "On Cycle Support", 
    price: 38.99, 
    comparePrice: 49.99, 
    image: "assets/on-cycle-support-1.jpg",
    images: ["assets/on-cycle-support-1.jpg", "assets/on-cycle-support-2.jpg", "assets/on-cycle-support-3.jpg", "assets/on-cycle-support-4.jpg"], 
    badge: "-22%", 
    reviews: 20, 
    sold: 195, 
    rating: 5.0,
    quickBenefits: [
      "Free Next Day Delivery (UK) / International Shipping ✅",
      "Natural On Cycle Support ✅",
      "Maintain Liver Health ✅",
      "Support Supplement ✅",
      "Highest Rated Supplier ✅"
    ],
    bulkDiscounts: [
      { qty: 3, discount: 10 },
      { qty: 6, discount: 15 },
      { qty: 9, discount: 20 }
    ],
    descriptionShort: "When you're pushing your limits to build your ideal physique, your body's health must remain your top priority. MAX Labs On Cycle Support (OCS) is specifically formulated to protect and enhance your health during intense supplement cycles.",
    fullDescription: `
      <h3>On Cycle Support (Max Labs) – 60 caps</h3>
      <h4>Introducing Your Ultimate Bodyguard During Any Supplement Cycle</h4>
      <p>When you're pushing your limits to build your ideal physique, your body's health must remain your top priority. MAX Labs On Cycle Support (OCS) is specifically formulated to protect and enhance your health during intense supplement cycles. Combining potent, scientifically backed ingredients, OCS promotes overall wellness, allowing you to achieve your goals safely and effectively.</p>
      
      <h3>Comprehensive Wellness Formula</h3>
      <p>Max Labs On Cycle Support combines an array of premium, natural ingredients carefully chosen to safeguard your organs, support optimal bodily functions, and ensure you stay in peak condition throughout your supplement regimen. With each serving (2 capsules), you'll get:</p>
      <ul>
        <li><strong>Glucosamine Sulphate (150 mg):</strong> Known for supporting joint health and flexibility, glucosamine sulphate can enhance comfort and performance, reducing the stress placed on your joints during heavy training.</li>
        <li><strong>Pomegranate Extract (140 mg):</strong> Rich in antioxidants, pomegranate extract supports cardiovascular health, fights oxidative stress, and promotes healthy circulation, crucial during intensive supplementation phases.</li>
        <li><strong>Hawthorn Berry Extract (100 mg):</strong> This botanical extract is widely recognized for its heart-health benefits. Hawthorn helps manage healthy blood pressure and strengthens cardiovascular health, protecting your heart during strenuous physical activity.</li>
        <li><strong>Turmeric Root Extract (100 mg):</strong> With powerful anti-inflammatory properties, turmeric supports liver function and reduces inflammation, assisting your body in managing the strain caused by supplement cycling.</li>
        <li><strong>Celery Seed Extract (30 mg):</strong> Traditionally used to promote kidney health and blood pressure regulation, celery seed helps maintain fluid balance and reduces bloating, keeping you lean and feeling great.</li>
        <li><strong>Artichoke Powder (30 mg):</strong> Artichoke supports liver detoxification, bile production, and digestive health, aiding the body's natural detox processes.</li>
        <li><strong>Milk Thistle Extract (25 mg):</strong> Renowned for its liver-protective effects, milk thistle contains silymarin, which supports healthy liver enzyme levels and encourages natural detoxification processes, essential during supplement cycling.</li>
        <li><strong>Grape Seed Extract (20 mg):</strong> A potent antioxidant, grape seed extract combats oxidative stress and inflammation, promoting cellular health and protecting vital organs from oxidative damage.</li>
        <li><strong>NAC (N-Acetyl Cysteine) 200 mg:</strong> NAC is a powerhouse ingredient supporting liver detoxification and antioxidant protection. It helps maintain healthy liver function and overall immune system performance, vital during intense training periods.</li>
      </ul>
      
      <h3>Key Benefits of Choosing Max Labs On Cycle Support</h3>
      <p>When it comes to cycling supplements, protection and prevention are key. Here's why athletes and fitness enthusiasts choose Max Labs OCS:</p>
      
      <h4>Promotes Liver Detox & Healthy Enzyme Function</h4>
      <p>OCS's potent blend, including milk thistle and NAC, supports liver detoxification pathways. These ingredients help maintain optimal liver enzyme levels, crucial for detoxifying and neutralizing harmful compounds during your supplement cycle.</p>
      
      <h4>Enhances Heart & Blood Pressure Health</h4>
      <p>With powerful botanicals like hawthorn berry and pomegranate extract, OCS aids cardiovascular health by supporting heart function, improving circulation, and maintaining healthy blood pressure levels.</p>
      
      <h4>Supports Hormonal Balance & Recovery</h4>
      <p>OCS provides essential nutrients and antioxidants, such as turmeric and grape seed extract, to support hormonal balance. This helps your body recover efficiently from intense training and supplementation, reducing downtime between cycles.</p>
      
      <h4>Ideal During Any Supplement Cycle</h4>
      <p>No matter your specific fitness goals, Max Labs OCS complements your regimen. Whether bulking, cutting, or enhancing athletic performance, this comprehensive support ensures your body remains protected and primed for peak performance.</p>
      
      <h3>Athlete Trusted—Science Driven</h3>
      <p>MAX Labs is dedicated to scientific integrity and athlete-centric formulations. Each ingredient in On Cycle Support is meticulously chosen based on clinical evidence and proven efficacy. Every capsule is formulated to meet stringent quality standards, delivering consistent, reliable support you can trust.</p>
      
      <h3>How to Use Max Labs OCS for Best Results</h3>
      <p>For optimal results, take two capsules daily, preferably with food. Consistent usage throughout your entire supplement cycle will yield the best protective and health-supporting benefits. Always combine Max Labs OCS with a balanced diet, regular exercise, and proper hydration for peak performance.</p>
      
      <h3>Who Should Use Max Labs OCS?</h3>
      <p>Max Labs On Cycle Support is ideal for:</p>
      <ul>
        <li>Bodybuilders and athletes undergoing supplement cycles</li>
        <li>Fitness enthusiasts aiming to maintain optimal organ health</li>
        <li>Individuals seeking comprehensive wellness support during intensive training periods</li>
      </ul>
      
      <h3>MAX Labs' Commitment to Quality</h3>
      <p>At MAX Labs, quality assurance is our highest priority. Our supplements undergo rigorous third-party testing, ensuring purity, potency, and safety. When you choose MAX Labs, you're selecting a trusted brand dedicated to your health and performance.</p>
      
      <h3>Conclusion: Protect Your Progress, Choose MAX Labs</h3>
      <p>Your body deserves the best protection as you push towards your physical goals. Max Labs On Cycle Support offers comprehensive protection, helping you to achieve your ambitions safely and effectively. Keep your body in peak health and performance-ready throughout your supplement cycles.</p>
      <p><strong>Trust MAX Labs On Cycle Support—fuel your progress and protect your body.</strong></p>
      <p><em>MAX Labs—Science Driven. Athlete Trusted.</em></p>
      <p>Stack On Cycle Support with <a href="product.html?id=1" style="color: #00FF7F;">Max Labs – Post Cycle Therapy</a></p>
    `,
    faqs: [
      { q: "Is Max Labs OCS suitable for daily use?", a: "Yes, it's designed for consistent daily use throughout your entire supplement cycle to maintain optimal protection." },
      { q: "Can Max Labs OCS be used with other supplements?", a: "Absolutely! OCS is specifically formulated to support your body during cycles involving other supplements." },
      { q: "Are there any side effects associated with Max Labs OCS?", a: "Max Labs OCS uses natural, high-quality ingredients generally considered safe. Always consult with a healthcare provider if you have pre-existing conditions or are taking medication." }
    ],
    guarantee: ["Pharmaceutical grade", "Manufactured in the UK", "HPLC Tested", "Free Next Day Delivery UK / Free International Shipping", "Scientific-backed advice and assistance"]
  }
];

// Cart
let cart = JSON.parse(localStorage.getItem('maxlabs_cart')) || [];

// Age Verification
function confirmAge() {
  localStorage.setItem('maxlabs_age_verified', 'true');
  document.getElementById('ageModal').classList.add('hidden');
}

function denyAge() {
  window.location.href = 'https://www.google.com';
}

// Chat Widget
function toggleMaxLabsChat() {
  var popup = document.getElementById('chat-popup-box');
  var btn = document.getElementById('chat-toggle-btn');
  if (popup && btn) {
    if (popup.style.display === 'none' || popup.style.display === '') {
      popup.style.display = 'block';
      btn.style.transform = 'scale(0.9)';
    } else {
      popup.style.display = 'none';
      btn.style.transform = 'scale(1)';
    }
  }
}

function sendMaxLabsMessage(e) {
  e.preventDefault();
  var input = document.getElementById('chat-input');
  if (input && input.value.trim()) {
    alert('Thanks for your message! In the live store, this will connect to our support team via Tidio.');
    input.value = '';
  }
}

// Add Chat Widget to page
function addChatWidget() {
  if (document.getElementById('maxlabs-chat-widget')) {
    document.getElementById('maxlabs-chat-widget').innerHTML = `
      <button id="chat-toggle-btn" onclick="toggleMaxLabsChat()" style="width: 60px; height: 60px; border-radius: 50%; background: #00FF7F; border: none; cursor: pointer; box-shadow: 0 4px 20px rgba(0,255,127,0.4); display: flex; align-items: center; justify-content: center; transition: transform 0.2s ease; position: fixed; bottom: 20px; right: 20px; z-index: 9999;">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#000" stroke="#000" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      <div id="chat-popup-box" style="display: none; position: fixed; bottom: 90px; right: 20px; width: 350px; background: #0d0d0d; border: 1px solid #2a2a2a; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.5); z-index: 9999;">
        <div style="background: #00FF7F; color: #000; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700;">💬 Max Labs Support</span>
            <button onclick="toggleMaxLabsChat()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #000;">×</button>
          </div>
          <div style="font-size: 0.85rem; margin-top: 5px;">We typically reply within minutes</div>
        </div>
        <div style="padding: 20px; height: 200px; overflow-y: auto;">
          <div style="background: #1a1a1a; padding: 12px 15px; border-radius: 12px; margin-bottom: 15px; max-width: 85%;">
            <p style="margin: 0; font-size: 0.9rem; color: #fff;">👋 Hi there! Welcome to Max Labs. How can we help you today?</p>
            <span style="font-size: 0.7rem; color: #666; margin-top: 5px; display: block;">Just now</span>
          </div>
        </div>
        <div style="padding: 15px; border-top: 1px solid #2a2a2a;">
          <form onsubmit="sendMaxLabsMessage(event)" style="display: flex; gap: 10px;">
            <input type="text" id="chat-input" placeholder="Type a message..." style="flex: 1; padding: 12px 15px; background: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; color: #fff; font-size: 0.9rem;">
            <button type="submit" style="padding: 12px 20px; background: #00FF7F; border: none; border-radius: 8px; color: #000; font-weight: 600; cursor: pointer;">Send</button>
          </form>
        </div>
      </div>
    `;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Check age verification
  if (localStorage.getItem('maxlabs_age_verified') === 'true') {
    const modal = document.getElementById('ageModal');
    if (modal) modal.classList.add('hidden');
  }

  // Define product categories
  const rawProductIds = [2, 3, 4, 5]; // Alpha GPC, Ashwagandha, Tongkat Ali, Turkesterone
  const cycleProductIds = [1, 6]; // PCT, OCS

  // Helper function to render a product card
  function renderProductCard(p, category) {
    const stars = p.rating ? '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') : '★★★★★';
    const categoryLabel = category === 'raw' ? 'Max Labs - RAW Supplement' : 'Cycle Support';
    const categoryStyle = category === 'raw' 
      ? 'background: rgba(0, 255, 127, 0.1); color: #00FF7F;'
      : 'background: rgba(255, 165, 0, 0.15); color: #FFA500;';
    
    return `
      <div class="product-card">
        <div class="product-card-image">
          <img src="${p.image}" alt="${p.title}">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        </div>
        <div class="product-card-content">
          <span style="display: inline-block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; padding: 4px 10px; border-radius: 4px; ${categoryStyle}">${categoryLabel}</span>
          <h3 class="product-card-title"><a href="product.html?id=${p.id}">${p.title}</a></h3>
          <div class="product-card-rating">
            <div class="stars">${stars}</div>
            <span class="rating-count">${p.rating ? p.rating.toFixed(2) : '5.00'} (${p.reviews} reviews)</span>
          </div>
          <div class="product-card-meta">
            <span class="product-sold">${p.sold} sold</span>
            <span class="product-stock" style="color: #00FF7F;">In stock</span>
          </div>
          <div class="product-card-price">
            <span class="product-price">£${p.price.toFixed(2)}</span>
            ${p.comparePrice ? `<span class="product-compare-price">£${p.comparePrice.toFixed(2)}</span>` : ''}
          </div>
          ${p.bulkDiscounts ? `
          <div class="bulk-discounts" style="font-size: 0.75rem; color: #a0a0a0; margin-bottom: 10px;">
            Buy 3: 10% Off | Buy 6+: 15% Off | Buy 9+: 20% Off
          </div>
          ` : ''}
          <button class="product-card-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    `;
  }

  // Render RAW products grid
  const rawGrid = document.getElementById('rawProductGrid');
  if (rawGrid) {
    const rawProducts = products.filter(p => rawProductIds.includes(p.id));
    rawGrid.innerHTML = rawProducts.map(p => `<div style="flex: 0 1 280px; max-width: 320px;">${renderProductCard(p, 'raw')}</div>`).join('');
  }

  // Render Cycle Support products grid
  const cycleGrid = document.getElementById('cycleProductGrid');
  if (cycleGrid) {
    const cycleProducts = products.filter(p => cycleProductIds.includes(p.id));
    cycleGrid.innerHTML = cycleProducts.map(p => renderProductCard(p, 'cycle')).join('');
  }

  // Render all products on shop page
  const grid = document.getElementById('productGrid');
  if (grid) {
    grid.innerHTML = products.map(p => {
      const category = rawProductIds.includes(p.id) ? 'raw' : 'cycle';
      return `<div style="flex: 0 1 280px; max-width: 320px;">${renderProductCard(p, category)}</div>`;
    }).join('');
  }

  // Render product detail page
  const productDetail = document.getElementById('productDetail');
  if (productDetail) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = products.find(p => p.id === productId) || products[0];
    const stars = product.rating ? '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '') : '★★★★★';
    
    const productImages = product.images || [product.image];
    
    // Set global variables for image gallery navigation
    window.productImages = productImages;
    window.currentImageIndex = 0;
    
    productDetail.innerHTML = `
      <div class="product-layout">
        <div class="product-gallery">
          <div class="product-main-image" style="position: relative; background: #0d0d0d; border-radius: 12px; overflow: hidden;">
            <img id="mainProductImage" src="${productImages[0]}" alt="${product.title}" style="width: 100%; height: auto; display: block;">
            ${productImages.length > 1 ? `
              <button onclick="changeImage(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.7); border: 1px solid #2a2a2a; color: #fff; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center;">‹</button>
              <button onclick="changeImage(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.7); border: 1px solid #2a2a2a; color: #fff; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center;">›</button>
            ` : ''}
          </div>
          ${productImages.length > 1 ? `
          <div class="product-thumbnails" style="display: flex; gap: 10px; margin-top: 15px; overflow-x: auto;">
            ${productImages.map((img, idx) => `
              <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="selectImage(${idx})" style="width: 80px; height: 80px; border-radius: 8px; overflow: hidden; cursor: pointer; border: 2px solid ${idx === 0 ? '#00FF7F' : '#2a2a2a'}; flex-shrink: 0;">
                <img src="${img}" alt="${product.title} ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            `).join('')}
          </div>
          ` : ''}
        </div>
        <div class="product-info">
          ${product.badge ? `<span style="background: #00FF7F; color: #000; padding: 6px 15px; border-radius: 4px; font-size: 0.85rem; font-weight: 700; display: inline-block; margin-bottom: 15px;">${product.badge}</span>` : ''}
          <h1 style="font-family: 'Orbitron', sans-serif; font-size: 2rem; margin-bottom: 15px;">${product.title}</h1>
          
          <div class="product-price-large" style="margin-bottom: 10px;">
            <span style="text-decoration: line-through; color: #a0a0a0; font-size: 1.3rem;">£${product.comparePrice ? product.comparePrice.toFixed(2) : ''}</span>
            <span style="color: #00FF7F; font-size: 2.2rem; font-weight: 700; margin-left: 15px;">£${product.price.toFixed(2)}</span>
          </div>
          <p style="font-size: 0.85rem; color: #a0a0a0; margin-bottom: 20px;">All taxes included</p>
          
          ${product.quickBenefits ? `
          <div class="product-quick-benefits" style="margin-bottom: 20px; padding: 15px; background: #0d0d0d; border-radius: 8px; border-left: 3px solid #00FF7F;">
            ${product.quickBenefits.map(b => `<div style="padding: 5px 0; color: #fff;">${b}</div>`).join('')}
          </div>
          ` : ''}
          
          <div class="product-meta" style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
            <span class="stars" style="color: #FFD700; font-size: 1.2rem;">${stars}</span>
            <span style="color: #a0a0a0;">Rated <strong style="color: #fff;">${product.rating ? product.rating.toFixed(2) : '5.00'}</strong> out of 5 based on <strong style="color: #fff;">${product.reviews}</strong> customer ratings</span>
          </div>
          <div style="color: #a0a0a0; font-size: 0.9rem; margin-bottom: 20px;">
            <span>${product.reviews} customer reviews</span> | 
            <span style="color: #00FF7F; font-weight: 600;">In stock</span> | 
            <span>Products sold: <strong>${product.sold}</strong></span>
          </div>
          
          ${product.bulkDiscounts ? `
          <div class="bulk-discount-table" style="background: #0d0d0d; border: 1px solid #2a2a2a; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
              <span style="font-weight: 600;">QTY</span>
              <span style="font-weight: 600; color: #00FF7F;">Additional Discount</span>
            </div>
            <div style="display: flex; gap: 15px;">
              ${product.bulkDiscounts.map(d => `
                <div style="flex: 1; text-align: center; padding: 15px; background: #1a1a1a; border-radius: 8px; border: 1px solid #2a2a2a;">
                  <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 5px;">Buy ${d.qty}${d.qty >= 6 ? '+' : ''}</div>
                  <div style="color: #00FF7F; font-weight: 700; font-size: 1.2rem;">${d.discount}% Off</div>
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}
          
          <div class="product-form" style="margin-bottom: 30px;">
            <div class="quantity-selector" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
              <label style="font-weight: 600;">Quantity:</label>
              <div class="quantity-input" style="display: flex; border: 1px solid #2a2a2a; border-radius: 8px; overflow: hidden;">
                <button onclick="updateQty(-1)" style="width: 45px; height: 45px; background: #1a1a1a; border: none; color: #fff; font-size: 1.3rem; cursor: pointer;">−</button>
                <input type="number" id="productQty" value="1" min="1" max="10" style="width: 60px; height: 45px; background: #0d0d0d; border: none; color: #fff; text-align: center; font-size: 1.1rem;">
                <button onclick="updateQty(1)" style="width: 45px; height: 45px; background: #1a1a1a; border: none; color: #fff; font-size: 1.3rem; cursor: pointer;">+</button>
              </div>
            </div>
            <button class="btn btn-primary add-to-cart-btn" onclick="addToCartWithQty(${product.id})" style="width: 100%; padding: 18px; font-size: 1.1rem; font-weight: 700;">Add to Cart</button>
          </div>
          
          ${product.guarantee ? `
          <div class="product-guarantee" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 20px; background: #0d0d0d; border-radius: 8px; margin-bottom: 30px;">
            <div style="grid-column: 1 / -1; font-weight: 700; color: #00FF7F; margin-bottom: 10px;">Our Guarantee:</div>
            ${product.guarantee.map(g => `
              <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem;">
                <span style="color: #00FF7F;">✓</span>
                <span>${g}</span>
              </div>
            `).join('')}
          </div>
          ` : `
          <div class="product-trust" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 20px; background: #0d0d0d; border-radius: 8px; margin-bottom: 30px;">
            <div style="display: flex; align-items: center; gap: 10px;"><span style="color: #00FF7F;">✓</span><span>Pharmaceutical grade</span></div>
            <div style="display: flex; align-items: center; gap: 10px;"><span style="color: #00FF7F;">✓</span><span>Manufactured in the UK</span></div>
            <div style="display: flex; align-items: center; gap: 10px;"><span style="color: #00FF7F;">✓</span><span>HPLC Tested</span></div>
            <div style="display: flex; align-items: center; gap: 10px;"><span style="color: #00FF7F;">✓</span><span>Free Next Day Delivery UK</span></div>
          </div>
          `}
        </div>
      </div>
      
      <!-- Description Tabs -->
      <div class="product-tabs" style="margin-top: 60px;">
        <div class="tab-buttons" style="display: flex; border-bottom: 2px solid #2a2a2a; margin-bottom: 30px;">
          <button class="tab-btn active" onclick="showTab('description')" style="padding: 15px 30px; background: none; border: none; color: #00FF7F; font-weight: 600; font-size: 1rem; cursor: pointer; border-bottom: 2px solid #00FF7F; margin-bottom: -2px;">Description</button>
          <button class="tab-btn" onclick="showTab('reviews')" style="padding: 15px 30px; background: none; border: none; color: #a0a0a0; font-weight: 600; font-size: 1rem; cursor: pointer;">Reviews (${product.reviews})</button>
        </div>
        
        <div id="tab-description" class="tab-content" style="color: #d0d0d0; line-height: 1.8;">
          ${product.fullDescription || `<p>${product.descriptionShort || product.description}</p>`}
          
          ${product.faqs ? `
          <div class="product-faqs" style="margin-top: 40px;">
            <h3 style="font-family: 'Orbitron', sans-serif; margin-bottom: 20px; color: #fff;">Frequently Asked Questions (FAQ)</h3>
            ${product.faqs.map(faq => `
              <div style="margin-bottom: 20px; padding: 20px; background: #0d0d0d; border-radius: 8px; border-left: 3px solid #00FF7F;">
                <h4 style="color: #fff; margin-bottom: 10px;">${faq.q}</h4>
                <p style="color: #a0a0a0; margin: 0;">${faq.a}</p>
              </div>
            `).join('')}
          </div>
          ` : ''}
          
          <div style="margin-top: 40px; padding: 25px; background: linear-gradient(135deg, rgba(0,255,127,0.1) 0%, rgba(0,0,0,0.9) 100%); border-radius: 12px; border: 1px solid #00FF7F;">
            <p style="margin: 0; font-size: 0.95rem;">If you don't have a positive experience for ANY reason, we will do WHATEVER it takes to ensure you are 100% satisfied with your purchase.</p>
          </div>
        </div>
        
        <div id="tab-reviews" class="tab-content" style="display: none;">
          <div style="text-align: center; padding: 40px;">
            <div style="font-size: 3rem; color: #FFD700; margin-bottom: 10px;">${stars}</div>
            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 5px;">${product.rating ? product.rating.toFixed(2) : '5.00'} out of 5</div>
            <div style="color: #a0a0a0;">Based on ${product.reviews} reviews</div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Tab switching function
  window.showTab = function(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.style.color = '#a0a0a0';
      btn.style.borderBottom = 'none';
    });
    document.getElementById('tab-' + tabName).style.display = 'block';
    event.target.style.color = '#00FF7F';
    event.target.style.borderBottom = '2px solid #00FF7F';
  };
  
  // Image gallery functions  
  window.selectImage = function(index) {
    window.currentImageIndex = index;
    const mainImg = document.getElementById('mainProductImage');
    if (mainImg && window.productImages[index]) {
      mainImg.src = window.productImages[index];
    }
    // Update thumbnail borders
    document.querySelectorAll('.thumbnail').forEach((thumb, idx) => {
      thumb.style.border = idx === index ? '2px solid #00FF7F' : '2px solid #2a2a2a';
    });
  };
  
  window.changeImage = function(direction) {
    const newIndex = window.currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < window.productImages.length) {
      window.selectImage(newIndex);
    } else if (newIndex < 0) {
      window.selectImage(window.productImages.length - 1);
    } else {
      window.selectImage(0);
    }
  };

  // Render cart page
  const cartContainer = document.getElementById('cartContainer');
  if (cartContainer) {
    renderCart();
  }

  // Update cart count
  updateCartCount();

  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.getElementById('siteHeader');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileNavClose');
  
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function() {
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const isActive = this.classList.contains('active');
      document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
      if (!isActive) {
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');
      }
    });
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you within 24 hours.');
      this.reset();
    });
  }

  // Add chat widget
  addChatWidget();
});

// Quantity functions
function updateQty(change) {
  const input = document.getElementById('productQty');
  if (input) {
    let val = parseInt(input.value) + change;
    if (val < 1) val = 1;
    if (val > 10) val = 10;
    input.value = val;
  }
}

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  localStorage.setItem('maxlabs_cart', JSON.stringify(cart));
  updateCartCount();
  
  // Visual feedback
  if (event && event.target) {
    event.target.textContent = 'Added!';
    event.target.style.background = '#00FF7F';
    event.target.style.color = '#000';
    setTimeout(() => {
      event.target.textContent = 'Add to Cart';
      event.target.style.background = '';
      event.target.style.color = '';
    }, 1500);
  }
}

function addToCartWithQty(id) {
  const product = products.find(p => p.id === id);
  const qty = parseInt(document.getElementById('productQty')?.value) || 1;
  if (!product) return;
  
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...product, quantity: qty });
  }
  
  localStorage.setItem('maxlabs_cart', JSON.stringify(cart));
  updateCartCount();
  alert(`Added ${qty} x ${product.title} to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('maxlabs_cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function renderCart() {
  const container = document.getElementById('cartContainer');
  if (!container) return;
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any products yet.</p>
        <a href="shop.html" class="btn btn-primary">Start Shopping</a>
      </div>
    `;
    return;
  }
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const total = subtotal + shipping;
  
  container.innerHTML = `
    <div class="cart-layout">
      <div class="cart-items">
        ${cart.map(item => `
          <div class="cart-item">
            <div class="cart-item-image">
              <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
              <h4 class="cart-item-title">${item.title}</h4>
              <p class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</p>
            </div>
            <div class="cart-item-total" style="font-weight: 700; color: #00FF7F;">
              $${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
          </div>
        `).join('')}
      </div>
      <div class="cart-summary">
        <h3>Order Summary</h3>
        <div class="cart-summary-row">
          <span>Subtotal</span>
          <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="cart-summary-row">
          <span>Shipping</span>
          <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
        </div>
        ${subtotal < 75 ? `<p style="font-size: 0.8rem; color: #a0a0a0; margin: 10px 0;">Add $${(75 - subtotal).toFixed(2)} more for free shipping!</p>` : ''}
        <div class="cart-summary-row cart-summary-total">
          <span>Total</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <button class="btn btn-primary checkout-btn" onclick="alert('Checkout would proceed in the live Shopify store.')">Proceed to Checkout</button>
      </div>
    </div>
  `;
}
