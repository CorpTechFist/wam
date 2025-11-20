import React, { createContext, useContext, useState } from 'react';

interface TranslationContextType {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
  translations: any; // For backward compatibility
}

const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
  translations: {},
});

// Translation dictionary for the new system
const translationDict = {
  en: {
    // Header
    'nav.home': 'WAM Alliance',
    'nav.about': 'About Us',
    'nav.progress': 'Our Progress',
    'nav.contact': 'Contact Us',
    'nav.partners': 'Trusted Partners',
    'nav.board': 'Board of Directors',
    'nav.volunteers': 'Volunteers',
    'nav.testimonials': 'Testimonials',
    'nav.donors': 'Donors',
    'nav.donate': 'Donate Now',
    'nav.call': 'Call',
    'nav.reachout': 'REACH OUT!',
    'nav.helpnow': 'Get Help Now',
    'nav.callnow': 'Call Now',
    
    // Footer
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.resources': 'Resources',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2024 Techfist Global. All rights reserved.',
    'footer.followus': 'Follow Us',
    
    // Common
    'common.learnmore': 'Learn More',
    'common.readmore': 'Read More',
    'common.submit': 'Submit',
    'common.close': 'Close',
    
    // Hero Section
    'hero.standWithYou': 'We Stand With You',
    'hero.supportMessage': 'You are not alone in your journey. Our compassionate team is here to provide immediate support and resources tailored to your needs.',
    'hero.dontGiveUp': "Don't Give Up",
    'hero.notAlone': 'You Are Not Alone',
    'hero.youMatter': 'You Matter',
    'hero.getSupport': 'Get Support Now',
    'hero.available247': 'Available 24/7',
    'hero.confidential': 'Confidential Support',
    'hero.compassionateCare': 'Compassionate Care',
    'hero.ourPromise': 'Our Promise — You Matter',
    'hero.promiseText': 'You do not have to walk this road alone. Together, we\'ll rewrite the narrative of your life — from surviving to thriving. You are good enough. You are loved. You are powerful beyond measure. Change the world, one soul at a time.',
    
    // Hero Action Cards
    'hero.card.donate.title': 'Donate',
    'hero.card.donate.subtitle': 'Support our mission',
    'hero.card.volunteer.title': 'Volunteer',
    'hero.card.volunteer.subtitle': 'Join our team',
    'hero.card.clothing.title': 'Clothing & Food Supplies',
    'hero.card.clothing.subtitle': 'Donate necessities',
    'hero.card.resources.title': 'Resources / Partnering Agencies',
    'hero.card.resources.subtitle': 'Partner with us',
    'hero.card.donors.title': 'Donors',
    'hero.card.donors.subtitle': 'Support our cause',
    
    // About Section - Core Values
    'about.coreValues': 'OUR CORE VALUES',
    'about.communityTitle': 'Community',
    'about.communityDescription': 'We cultivate inclusive circles where every voice is heard, every story honored, and collective strength lifts us all',
    'about.empowermentTitle': 'Independence',
    'about.empowermentDescription': 'We equip you with the skills and confidence to navigate challenges on your own terms, fostering resilience and self-reliance.',
    'about.inclusionTitle': 'Compassion',
    'about.inclusionDescription': 'We meet you with empathy and respect, recognizing the courage it takes to confront pain and the power of shared humanity.',
    'about.missionTitle': 'Growth Mindset',
    'about.missionDescription': 'We believe in continuous learning and unlearning—embracing curiosity, adaptability, and the freedom to rewrite your narrative.',
    'about.visionTitle': 'Worthiness',
    'about.visionDescription': 'We remind you daily that you are already worthy of love, belonging, and joy, just as you are.',
    'about.integrityTitle': 'Advocacy',
    'about.integrityDescription': 'Justice & Democracy We champion constitutional rights, due process, and democratic freedoms, advocating for systemic change and equal protection under the law for every survivor.',
    
    // Mission Vision Section
    'mission.weAreTheChange': 'We Are The Change!',
    'mission.tagline': 'Elevating lives, advocates for humanity and FREEDOM for ALL',
    'mission.ourMission': 'Our Mission',
    'mission.ourVision': 'Our Vision',
    'mission.readMore': 'Read More',
    'mission.showLess': 'Show Less',
    'mission.text': `At We All Matter Alliance, we believe that every soul—no matter their story—deserves dignity, healing, and a chance to thrive.

Born from lived experience and boundless compassion, our mission is to walk beside those navigating the shadows of suicide loss, trauma, domestic violence, injustice, and systemic marginalization. We serve individuals and families who are unhoused, low-income, court-ordered for community service, or silenced by circumstance—offering not just resources, but refuge.

Through legal advocacy, trauma-informed support, and practical tools for rebuilding, we create pathways to empowerment. And in partnership with TechFistGlobal.com, we extend our reach through intelligent automation and accessible digital services—bridging the gap between need and opportunity with innovation and care.

We are defenders of justice, champions of equity, and architects of change. From surviving to thriving, we walk with our community—one step, one story, one triumph at a time.

Because at We All Matter Alliance, healing isn't just possible—it's sacred.

WE ARE THE CHANGE!`,
    'vision.text': 'We envision a world where trauma survivors feel seen, heard, and equipped to heal themselves. We champion understanding of the many paths to recovery—from peer support circles and holistic practices to evidence-based therapies. We provide resources, support, skills, and training to suicide loss survivors, trauma survivors, LGBTQa2s+ individuals, and those wrongfully accused. By broadening awareness and knowledge, we ignite hope, spark transformation, and nurture a culture of enduring resilience, civic engagement, and justice for all.',
    
    // About Page - Join the Movement
    'aboutPage.joinMovement': 'JOIN THE MOVEMENT',
    'aboutPage.movementDescription': 'Because silence is complicity. Follow us, share your tip-offs, and help build a nation where every person—regardless of race, status, or background—enjoys true justice and dignity.',
    'aboutPage.beTheChange': 'Be The Change',
    'aboutPage.boardOfDirectors': 'BOARD OF DIRECTORS',
    
    // Volunteers Page
    'volunteers.title': 'Our Amazing Volunteers',
    'volunteers.description': 'Meet the dedicated volunteers who make WAM Alliance\'s mission possible!',
    'volunteers.subtitle': 'These compassionate individuals donate their time, skills, and hearts to help our community thrive.',
    'volunteers.featuredVolunteer': 'Featured Volunteer',
    'volunteers.projectCoordinator': 'Project Coordinator',
    
    // Board of Directors
    'board.title': 'Board of Directors',
    'board.description': 'Our certified Board of Directors are driven by the passion to make our world a better place.',
    'board.joinTeam': 'Join Our Team',
    'board.joinMessage': 'Join We All Matter Alliance Team by applying through email with your resume and biography.',
    'board.ourValues': 'Our Values',
    'board.welcomeMessage': 'We are a welcoming, loving, passionate, and innovative group who believes loving yourself is the beginning to a better world!',
    'board.viewProfile': 'View Profile',
    
    // HomePage
    'home.loading': 'Loading WAM Alliance...',
    'home.error': 'Something went wrong',
    'home.tryAgain': 'Try Again',
    
    // Contact & Donate
    'contact.title': 'Contact Us',
    'contact.getInTouch': 'Get In Touch',
    'contact.reachOut': 'Reach Out to WAM Alliance',
    
    // Common UI
    'ui.readMore': 'Read More',
    'ui.showLess': 'Show Less',
    'ui.loading': 'Loading...',
    
    // Donors Page (Services component)
    'donors.title': 'DONORS',
    'donors.intro1': 'WAM works with mainly personal donations, and company sponsors.',
    'donors.intro2': 'WAM Alliance welcomes and accepts all donations with the utmost gratitude, and we are thankful to all those that contribute to our cause.',
    'donors.weAreTheChange': 'WE ARE THE CHANGE!',
    'donors.personalDonorsTitle': 'PERSONAL DONORS',
    'donors.personalDonorsDesc': 'We have some personal donors that WAM could not exist without.',
    'donors.partnersTitle': 'PARTNERS',
    'donors.partnersDesc': 'Discover our valued sponsors who support WAM Alliance in making a difference in our communities.',
    
    // Donate Now Page (Contact component)
    'donate.title': 'DONATIONS',
    'donate.intro1': 'WAM welcomes and accepts all donations. We are a 501(c)(3) organization registered with the IRS and all donations are tax deductible.',
    'donate.promise': '100% of every donation goes directly to those we help - This is our promise to you!',
    'donate.intro2': 'WAM does not have paid Board Directors, we serve others unconditionally and ask nothing in return except that you love yourself!',
    'donate.cashDonations': 'CASH DONATIONS',
    'donate.allOtherDonations': 'ALL OTHER DONATIONS',
    'donate.donateNow': 'Donate Now',
    
    // Testimonials Page
    'testimonials.title': 'Testimonials & Success Stories',
    'testimonials.subtitle': 'These are just some of the people WAM has helped journey from barely surviving to thriving!',
    'testimonials.description': 'We help by providing love, support, and resources to those in need, with real results and without',
    'testimonials.client': 'WAM Alliance Client',
    'testimonials.readMore': 'Reed More',
    'testimonials.readLess': 'Reed  Less',
    'testimonials.verified': 'Verified Impact Story',
     // Testimonial Types
    'testimonials.type.testimonial': 'testimonial',
    'testimonials.type.successStory': 'success story',
    
    // Testimonial Stories (English)
    'testimonials.stories.staciMike': "My name is Staci & my life partner Mike. We want to express a huge appreciation to the founder of WAM (Tonya). I first needed help obtaining my birth certificate from Mississippi which needed to be included with our Section 8 housing application. WAM was able to order it & have it delivered. I now had everything to qualify for housing. Which was in need considering we were homeless & living in a tent. Once qualified we received a Section 8 housing voucher, but application fees & deposits were not included. WAM was able to cover 3 application fees which one of those included the place we now live in, as of February 7 we signed our lease with Housing Connect and now have a home. While we had our struggles, we kept our heads up & stayed positive. Tonya was a great friend when I needed someone to just talk with about my emotions surrounding our situation. WAM was also able to help with a few food orders from Walmart pickup. She is currently helping me find a dental surgeon to do dental implants discounted or pro bono, (crossing my fingers), and continues to help us with food when needed. Staci & Mike are now thriving!",
    'testimonials.stories.carter': "I'm blessed to have met Tonya , the founder of WAM, back in 2010. I was a scrappy kid traveling the states trying to deal with the hand life dealt - a diagnosis of PTSD at a young age. It was my first winter in Utah and I didn't know many folks. She took me in and helped me have a safe space to stay til I was able to continue on with my travels. Fast forward over a decade to recently. I found myself in a rough patch when life happened. Tonya reached out to me telling me about WAM. They have provided me with counseling, a solid mentorship, and inspiration to keep going. I was able to receive resume assistance through WAM, which led to a good job. They even helped me with gas when I exhausted my savings to make it to the new job in my truck. When I called Tonya after my first setback at the new job and she spent 3 hours talking to me on the phone with a variety of pointers, good conversation, and even philosophy. My employer was impressed with the results of having a solid mentor like Tonya and WAM. I have never been one to reach out to agencies or non-profits, but what WAM is doing is something unique, helpful, and basically a lifesaver. They say it takes a village to raise a child. I prefer to think it takes a village to heal a wounded inner child. WAM and her team are eager to help and not in a judgmental way. I can't say thanks enough and look forward to the bright future ahead between my drive to succeed and the solid assistance from WAM!",
    'testimonials.stories.jameyFamily': "Jamey is a resident of SLC and a loyal advocate for the unhoused and underprivileged. Her and her family have endured trauma and hard times over the decades, however, continue to manage life and remain housed. Jamey is an individual who qualified for our WAM Cleaning/Sanitation Service, and our team was able to offer this to her twice in the past year. The WAM Team also provided Jamey with legal support services and worked with her to gather all necessary information and prepare final documents to file in court. Jamey has donated clothing along with other items to WAM, to show her appreciation, and we greatly appreciate it! Jamey also refers others, like Staci & Mike, to our organization. Helping people go from striving to thriving!",
    'testimonials.stories.tyrell': "I am Ty, WAM found me during 2020, at 17 years old, on the streets, I was alone and scared. My family was broken, mother mentally ill and an addict, father in Iraq and I have never met, my brothers involved in gangs, or incarcerated. WAM helped me find a youth shelter in Ogden, where I stayed for about a month, while they had been supplying me with clothes and other necessities. The shelter was locking me out in 19-degree weather without a coat for punishment, keeping me outside in dead winter until 10:00 p.m. for touching a computer and not apologizing for it. This is when WAM took me in and housed me temporarily. They helped me obtain BC, SS Card, and ID so I was able to gain employment and go back to high school and get my GED. I had employment within a week and saved up to get my DL, needed to take driving school and pass. I successfully did and was granted a DL. I enrolled in school to finish my GED and got me a passport! I am now living on my own and have traveled to Florida and Colorado and have been THRIVING! I left WAM loving myself and ability to be self-sufficient and a contributing citizen! update: Ty has since connected with his father and is becoming familiar with his heritage, happy and living his life!",
    'testimonials.stories.jay': "I am Jay, I am a recovering addict and suicide survivor. I am an amputee from the knees down and have many other debilitating medical issues. I have been homeless for over 20 years and am finally off the streets and into temporary shelter for medically vulnerable people, while I wait for permanent housing. WAM found me in Sandy with a sign asking for help. They gave me a card, and after looking at the card, it inspired me to call them, so I did. They were able to get me into the shelter the next day. They transported me from downtown and successfully got me admitted. They have provided me with food, clothes, other items to get along while in the shelter, as well as funded my renewal for my medical card and cost of the doctor appointment, as it is not covered by Medicaid. WAM saved me and has helped me in more ways than any other has. They mean what they say and come through. WAM Team is helping me get off the streets, and the help I need.",
    'testimonials.stories.mercedes': "Mercedes was a young girl in a youth shelter being treated poorly. She was with Ty, another boy WAM helped and housed temporarily. Mercedes had come from a home where her mother was absent, father absent, and an abusive caretaker. WAM provided her with rides, safety, temporary shelter, food and guidance. We hope Mercedes is back in school and with people who love her.",
    'testimonials.stories.seanFromOh': "WAM found me in a graveyard in OH one afternoon. I was not well, and the weather was heading for rain. I was robbed and just trying to figure out what I was going to do, feeling down and worthless. When Tonya and Rob approached me, I was tired and hungry, and they kindly provided me with a warm meal and drink. They later brought back a tent and other items to help me while I found housing. They gave me inspiration to go on and to keep moving forward, back to owning my own business and having my own home. I am thankful for all their support and for answering the phone when I called. I am finding my way back and they have given me guidance along the way.",
  
   // Programs and Projects Page (OurProgress)
   'ourProgress.title': 'Programs and Future Projects',
    'ourProgress.disclaimer': 'Each program is subject to changes. Each qualified person must be accepted into the program before they receive funds and/or services.',
    'ourProgress.established': 'FORMALLY ESTABLISHED ORGANIZATION & BOARD OF DIRECTORS',
    'ourProgress.year2023': '2023',
    'ourProgress.year2024': '2024',
    'ourProgress.establishedDesc': 'WAM Alliance formally established in the state of Utah and with the IRS as a 501(c)(3) organization.',
    'ourProgress.talentRecruitment': 'TALENT RECRUITMENT',
    'ourProgress.talentRecruitmentPeriod': '2024 - Present',
    'ourProgress.talentRecruitmentDesc': 'WAM will be recruiting talent to assist with social media marketing, as well as donor/sponsorship campaigning.',
    'ourProgress.noStringsProgram': 'NO STRINGS ATTACHED PROGRAM',
    'ourProgress.noStringsProgramDesc': 'This program is funded solely by donations and grant support and provides Emergency Essentials — including utility assistance, gas cards, and train/bus passes — as well as direct financial help for legal documentation, qualified medical costs, application fees, and other necessary expenses associated with securing required documents, medical evaluations, housing, and access to state benefits; all assistance is delivered with dignity and no obligation to recipients.',
    'ourProgress.techfistTitle': 'Techfist Global Inc - A Proud Sponsor of WAM Alliance',
    'ourProgress.techfistDesc': 'Techfist Global stands as a proud sponsor and technological partner of WAM Alliance. Providing advanced digital solutions, strategic design, and scalable systems to amplify impact across global networks — bridging innovation with purpose to inspire sustainability, inclusion, and growth. Together, we empower communities to build a smarter, more connected future.',
    'ourProgress.cswTitle' : 'Community Safety Watch - CSW',
    'ourProgress.cswDesc':'The Community Safety Watch (CSW) is a neighborhood-led, non-confrontational initiative designed to increase safety, awareness, and community resilience in neighborhoods experiencing suspicious activity by masked individuals. CSW focuses on observation, reporting, prevention, and community support—working in partnership with local law enforcement and service providers while prioritizing de-escalation, legal compliance, and the dignity of all residents.',
    
    'ourProgress.adenRootsTitle': "Aden's Roots Program",
    'ourProgress.adenRootsFull': "Aden's Roots is a humanitarian initiative led by Palestinian American advocate Sireen Hamdi Beseiso, under the umbrella of WAM Alliance. Named in honor of her son, Aden, this project is rooted in compassion, resilience, and the urgent call to support displaced and injured Palestinians—especially children and families affected by war. Born from lived experience and a survivor's heart, Aden's Roots provides direct aid to those in crisis, including food, clean water, shelter, clothing, medical treatment, and educational support. Over the past two years, Sireen has helped coordinate the evacuation of injured children from Gaza to Egypt and the United States, working with organizations like PCRF and Heal Palestine to secure visas, transportation, and life-saving care. Through Aden's Roots, Sireen has helped deliver tents, parcels, and safe housing to families who fled with nothing. She's personally assisted in the evacuation and treatment of her cousins Sara and Ahd—both severely injured—ensuring they received urgent medical attention in New York, South Carolina, and Colorado. This project is more than aid—it's advocacy. Aden's Roots calls for ceasefire, healing, and global solidarity. It mobilizes volunteers, amplifies survivor stories, and builds bridges between communities in Utah, Egypt, and Gaza. At its core, Aden's Roots is a mother's mission to protect, uplift, and never forget. It's a lifeline for those who remain and a beacon for those who've fled.",
    
    'ourProgress.readMore': 'Read More ↓',
    'ourProgress.readLess': 'Read Less ↑',
    'ourProgress.year2025': '2025',
    
  'partners.title': 'Trusted Partners',
    'partners.communityResources': 'COMMUNITY RESOURCES',
    'partners.intro1': 'This is a page where you can find additional resources in the local SLC, Utah area. These are resources we feel are truly helping and serving others, with success and love.',
    'partners.intro2': 'We do not want to send those in need to a place where they go unheard and are poorly treated by the staff.',
    'partners.resourceSpace': 'WAM is currently working on building a Resource Space privately funded, to help those get off the street and into a safe environment, without the Federal Government regulating where funds are spent.',
    'partners.values': 'We value and believe everyone has the right to love, shelter & food, alternative mental health care to aid in personal growth, and a pursuit of one\'s own happiness.',
    'partners.support': 'Here at WAM we support and guide those in need, from barely surviving to thriving.',
    'partners.lovingYourself': 'Loving yourself is the first step in recovering from any event.',
    'partners.ourTrustedPartners': 'Our Trusted Partners',
    'partners.secondSecondDesc': 'Nonprofit Helping those in the SLC Area.',
    'partners.restorativeHealthDesc': 'World class health care with options for our LGBTQ+ community and those looking to improve quality of life.',
    'partners.techfist':'In partnership with TechFist Global, We All Matter drives the power of technology to amplify change, empower people, and build a better tomorrow.',
    
    // Tonya Bio Page
    'bio.tonya.role': 'PRESIDENT',
    'bio.tonya.name': 'TONYA JONES SMITH',
    'bio.tonya.overview': 'Tonya Jones-Smith is an accomplished nonprofit leader and suicide-loss survivor dedicated to advancing holistic healing and trauma recovery. With 30 years of multidisciplinary experience spanning behavioral health, holistic wellness, psychology, law, finance, and software engineering, she combines technical rigor, compassionate leadership, and evidence-based practice to drive organizational impact.',
    'bio.tonya.professionalBackground': 'Professional Background',
    'bio.tonya.background': 'Her professional background spans many areas. She founded We All Matter Alliance, a 501(c)(3) nonprofit offering trauma-informed support and resources for individuals affected by suicide loss, injustice, PTSD, mental illness, and homelessness. She developed inclusive programs and strategic partnerships that address service gaps creating safe healing environments.',
    'bio.tonya.keyAccomplishments': 'Key Accomplishments',
    'bio.tonya.accomplishments': 'Tonya Launched Love Me Teas, an herbal wellness brand crafting organic blends to alleviate symptoms of PTSD and anxiety. She is an Author of an upcoming memoir series on surviving trauma, weaving personal narrative with natural healing modalities, slated for publication in the near future. She has led enterprise-level initiatives in quality assurance, Agile project management, cloud infrastructure, and SDLC.',
    'bio.tonya.educationCertifications': 'Education & Certifications',
    'bio.tonya.education': 'Tonya\'s education started in the computer sciences and progressed into neuroscience, nutrition, psychology and law. She has a BS from Westminster College in Computer Science and Mathematics. Her desire for continued learning and education is why she now holds a Harvard Certificate in Constitutional Law, as well as Medicinal Herbalism Certification, while she continues to pursue PTSD Hypnotherapy License. Tonya also has the gift of being an Akashic Record Reader.',
    'bio.tonya.leadershipPhilosophy': 'Leadership Philosophy',
    'bio.tonya.philosophy': 'Tonya\'s leadership philosophy centers on the belief that every life holds intrinsic value and that holistic, evidence-based approaches can transform trauma into resilience. She empowers individuals to reclaim autonomy, cultivate self-love, and build sustainable pathways to wellness.',
    'bio.tonya.skill1': 'Trauma-Informed Program Design & Implementation',
    'bio.tonya.skill2': 'Holistic Healing & Herbal Medicine',
    'bio.tonya.skill3': 'Behavioral Health Strategies & Hypnotherapy',
    'bio.tonya.skill4': 'Strategic Partnerships & Resource Development',
    'bio.tonya.skill5': 'Scalable Systems Architecture & Quality Assurance',
    
    // Rob Bio Page
    'bio.rob.role': 'VICE PRESIDENT',
    'bio.rob.cfo': 'CFO',
    'bio.rob.name': 'ROBERT SMITH',
    'bio.rob.overview': 'My name is Rob, and I am an empathetic healer who uses my personal experiences to help and heal others. Living in different cultures around the globe, I have learned to understand other beings and walks of life, and that there are different paths to healing and happiness. Sharing that knowledge is important, it\'s a collaboration for the benefit of all humans.',
    'bio.rob.journeyAddiction': 'Journey with Addiction & Recovery',
    'bio.rob.addiction': 'At age 23 I spearheaded an intervention to help my father to become sober from abuse of alcohol and substances. Over 29 years I would learn first-hand about addiction, addict behavior, how to manage relationships steeped in addiction, and the long journey of treating addiction. I participated in AA, NA and CA with my father, and Al-Anon on my own. While the step-programs are effective in the beginning, I believe that the real healing occurs when we confront the truth of our own traumas and work through them. Loving ourselves is paramount, especially if we are to love others.',
    'bio.rob.personalTransformation': 'Personal Transformation',
    'bio.rob.transformation': 'In 2008 I nearly lost my life and while the experience was physically very traumatic, the spiritual experience is unparalleled. I wouldn\'t trade it for the world!',
    'bio.rob.understandingSuicide': 'Understanding Suicide Loss',
    'bio.rob.suicide': 'A few years later I met my wife and my stepchildren and learned they are Suicide Loss Survivors – a complex topic and largely misunderstood. Attending workshops, reading blogs and books about Suicide and Suicide Loss Survivors, I endeavor to learn as much as I can. Regardless of the source, PTSD is real, and it can be debilitating as it\'s uncontrollable by the one who suffers.',
    'bio.rob.healingPhilosophy': 'Healing Philosophy',
    'bio.rob.philosophy1': 'The goal of helping those suffering trauma is to empower people to find their path to healing, and each human is unique. The key is to learn the individual and their story – this spawns a more effective treatment – enabling them to heal and move forward with their life goals.',
    'bio.rob.philosophy2': 'All I ask is that they help others in turn, to share what they have learned and accomplished –and the ripple moves forward!',
    'bio.rob.skill1': 'Empathy and Cross-Cultural Healing',
    'bio.rob.skill2': 'Addiction and Recovery',
    'bio.rob.skill3': 'Trauma and Self-Healing',
    'bio.rob.skill4': 'Suicide Loss and PTSD',
    'bio.rob.skill5': 'Personalized Healing Methodology',
    
    // Wajid Bio Page
    'bio.wajid.role': 'Board of Directors',
    'bio.wajid.department': 'ENGINEERING',
    'bio.wajid.name': 'WAJID BHAT',
    'bio.wajid.visionaryLeadership': 'Visionary Leadership',
    'bio.wajid.leadership': 'Widely recognized for his visionary approach and pragmatic leadership, Wajid Bhat stands at the forefront of digital innovation, empowering organizations to excel in an ever-evolving technological landscape. His reputation is built upon a foundation of strategic foresight, exceptional problem-solving abilities, and an unwavering commitment to excellence.',
    'bio.wajid.collaborativeExcellence': 'Collaborative Excellence',
    'bio.wajid.collaboration': 'Wajid\'s collaborative spirit and keen understanding of business objectives allow him to bridge communication between executive stakeholders, IT teams, and operational divisions, ensuring every transformation journey is aligned with measurable outcomes.',
    'bio.wajid.technicalMastery': 'Technical Mastery & Team Development',
    'bio.wajid.mastery': 'His dynamic skill set combines technical mastery with a passion for mentoring and talent development, fostering high-performing teams that thrive in complex enterprise environments.',
    'bio.wajid.innovation': 'Innovation & Continuous Learning',
    'bio.wajid.innovationDesc': 'Wajid\'s analytical acumen and creativity shine in architecting bespoke solutions tailored for unique business challenges, while his dedication to continuous learning keeps him ahead of emerging trends in AI, data science, cybersecurity, and cloud ecosystem evolution.',
    'bio.wajid.strategicImpact': 'Strategic Impact',
    'bio.wajid.impact': 'Through his resilience, adaptability, and drive to deliver value, Wajid inspires trust and confidence, making him an indispensable strategic partner for our organizations as we seek lasting growth.',
    'bio.wajid.skill1': 'Strategic Foresight and Pragmatic Leadership',
    'bio.wajid.skill2': 'Digital Transformation and Business Alignment',
    'bio.wajid.skill3': 'Technical Mastery and Solution Architecture',
    'bio.wajid.skill4': 'Team and Talent Development',
    'bio.wajid.skill5': 'Emerging Technology Trends',
    'bio.wajid.skill6': 'Problem-Solving and Value Delivery',
    
    // Danielle Bio Page
    'bio.danielle.role': 'Board of Directors',
    'bio.danielle.department': 'Paralegal',
    'bio.danielle.name': 'DANIELLE ORTEGA',
    'bio.danielle.earlyLife': 'Early Life & Foundation',
    'bio.danielle.early': 'My name is Danielle, and I have always been an attentive observer, sensitive to subtle details and the emotional effects of traumatic experiences on those around me. My own childhood was marked by hardship: my father was incarcerated throughout my life, we lived in poverty, and my stepfather was distant and unwelcoming. Yet, my mother was a source of unwavering love and support, valuing each of us deeply. Thanks to her, I learned to appreciate my own worth, which empowered me to strive for a better future when I faced my own struggles as an adult.',
    'bio.danielle.personalStruggles': 'Personal Struggles & Awakening',
    'bio.danielle.struggles': 'As a young adult, I began college and became actively involved in my church, but I was still haunted by a sense of emptiness. My battles with an eating disorder eventually led to a drug addiction and a period of incarceration. During my time in jail, I witnessed the inhumanity of some guards, inspiring me to seek out legal resources, and with the help of a kind staff member, I obtained printed copies of our constitutional rights for everyone in my unit.',
    'bio.danielle.transformation': 'Transformation & Career Path',
    'bio.danielle.transformationDesc': 'Upon my release, I soon became pregnant and resolved to pursue a career in law. I earned a degree in paralegal studies focused on social sciences and began working in addiction recovery as a peer support specialist, as well as with unsheltered individuals. While my involvement has been intermittent due to having children, my commitment to peer support remains strong. The encouragement and guidance I received from others helped me build a life richer than I could have imagined, and I believe everyone deserves that same opportunity.',
    'bio.danielle.philosophyCommitment': 'Philosophy & Commitment',
    'bio.danielle.philosophy': 'Self-compassion and self-love are lifelong pursuits that often require continual encouragement. I am passionate about helping others on their journeys, knowing firsthand the transformative power of support and grace.',
    'bio.danielle.skill1': 'Attentive Observation and Sensitivity',
    'bio.danielle.skill2': 'Addiction, Eating Disorders, and Recovery',
    'bio.danielle.skill3': 'Peer Support and Mentorship',
    'bio.danielle.skill4': 'Constitutional and Legal Advocacy',
    'bio.danielle.skill5': 'Self-Compassion and Transformation',
    
    // Diane Bio Page
    'bio.diane.role': 'DIRECTOR',
    'bio.diane.secretary': 'SECRETARY',
    'bio.diane.name': 'DIANE JONES',
    'bio.diane.overview': 'I am Diane Jones and have been a Suicide Loss Survivor from 10 years of age. I was born an empath and have always been able to feel and read others\' energy. I have been in abusive relationships that have almost taken my life, which gives me a deep understanding of PTSD, Anxiety and Depression.',
    'bio.diane.personalBackground': 'Personal Background & Education',
    'bio.diane.background': 'I am currently in management and attending college, completing my BA in Business Management, and recently purchased my first home here in Utah. I\'m highly motivated. goal driven. I grew up hunting, camping, and being a part of many extra calicular academic activities as a child. I attended Waterford for 2 years, after my father passed, any stigma around suicide loss was removed for me by attending Waterford, and my experience was significant, and I received some of the best education while there.',
    'bio.diane.understandingTrauma': 'Understanding Trauma & Healing',
    'bio.diane.trauma': 'Although my life has been filled with challenges since a young age, they have brought great lessons and knowledge with them. Learning to love yourself is essential in healing and moving forward in life and love. This is one of the things I continuously work on within myself and learn more about to help others along my way.',
    'bio.diane.navigatingTreatment': 'Navigating Treatment Systems',
    'bio.diane.treatment1': 'Navigating western medicine and the system has taught me the different methods and tools for PTSD and trauma survivors. I learned that each of us are individuals and no one method or pill fits all. We have a choice, options available to morph into what we need for our own life. I have found a few things that work for me and have catered them to my life to help me incorporate and heal my traumas which cause PTSD, Anxiety, etc.',
    'bio.diane.treatment2': 'Hard lessons are some of our biggest challenges, and understanding that we are not mentally ill, that we suffer a trauma, and no pill is going to fix that, will alleviate some of the difficulty and depression in dealing with the symptoms and behaviors.',
    'bio.diane.missionVision': 'Mission & Vision',
    'bio.diane.mission1': 'The many services out there today still do not address Suicide Loss or aggravated trauma aka root cause. Here we simply treat the symptoms (depression, drug use, alcohol abuse, dysmorphia, homelessness) with pills, hospitals, & shame. I want to try to change that ~ WE ARE MUCH MORE THAN OUR TRAUMA!',
    'bio.diane.mission2': 'Trauma is at the root of addiction and homelessness, without recognizing that we will never come up with a solution to resolve the way we treat our children, what we expose them to, and the fate of their futures here, if we do not help the healing and addressing the embedded trauma they survived. I hope to help others see and know healing is possible, and each of us are deserving.',
    'bio.diane.skill1': 'Suicide Loss Survivorship',
    'bio.diane.skill2': 'Empathy and Energy Reading',
    'bio.diane.skill3': 'Trauma, Abuse, and Mental Health',
    'bio.diane.skill4': 'Western Medicine Navigation',
    'bio.diane.skill5': 'Self-Healing and Empowerment',
    'bio.diane.skill6': 'Corporate/Academic Skills (Demonstrated Motivation)',
  
  },
  es: {
    // Header
    'nav.home': 'Alianza WAM',
    'nav.about': 'Sobre Nosotros',
    'nav.progress': 'Nuestro Progreso',
    'nav.contact': 'Contáctenos',
    'nav.partners': 'Socios de Confianza',
    'nav.board': 'Junta Directiva',
    'nav.volunteers': 'Voluntarios',
    'nav.testimonials': 'Testimonios',
    'nav.donors': 'Donantes',
    'nav.donate': 'Donar Ahora',
    'nav.call': 'Llamar',
    'nav.reachout': '¡CONTÁCTANOS!',
    'nav.helpnow': 'Obtener Ayuda Ahora',
    'nav.callnow': 'Llamar Ahora',
    
    // Footer
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.connect': 'Conectar',
    'footer.resources': 'Recursos',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.copyright': '© 2024 Techfist Global. Todos los derechos reservados.',
    'footer.followus': 'Síguenos',
    
    // Common
    'common.learnmore': 'Aprende Más',
    'common.readmore': 'Leer Más',
    'common.submit': 'Enviar',
    'common.close': 'Cerrar',
    
    // Hero Section
    'hero.standWithYou': 'Estamos Contigo',
    'hero.supportMessage': 'No estás solo en tu camino. Nuestro equipo compasivo está aquí para brindarte apoyo inmediato y recursos adaptados a tus necesidades.',
    'hero.dontGiveUp': 'No Te Rindas',
    'hero.notAlone': 'No Estás Solo',
    'hero.youMatter': 'Tú Importas',
    'hero.getSupport': 'Obtén Apoyo Ahora',
    'hero.available247': 'Disponible 24/7',
    'hero.confidential': 'Apoyo Confidencial',
    'hero.compassionateCare': 'Cuidado Compasivo',
    'hero.ourPromise': 'Nuestra Promesa — Tú Importas',
    'hero.promiseText': 'No tienes que caminar este camino solo. Juntos, reescribiremos la narrativa de tu vida — de sobrevivir a prosperar. Eres lo suficientemente bueno. Eres amado. Eres poderoso más allá de toda medida. Cambia el mundo, un alma a la vez.',
    
    // Hero Action Cards
    'hero.card.donate.title': 'Donar',
    'hero.card.donate.subtitle': 'Apoya nuestra misión',
    'hero.card.volunteer.title': 'Voluntario',
    'hero.card.volunteer.subtitle': 'Únete a nuestro equipo',
    'hero.card.clothing.title': 'Ropa y Suministros de Alimentos',
    'hero.card.clothing.subtitle': 'Dona necesidades',
    'hero.card.resources.title': 'Recursos / Agencias Asociadas',
    'hero.card.resources.subtitle': 'Asóciate con nosotros',
    'hero.card.donors.title': 'Donantes',
    'hero.card.donors.subtitle': 'Apoya nuestra causa',
    
    // About Section - Core Values
    'about.coreValues': 'NUESTROS VALORES FUNDAMENTALES',
    'about.communityTitle': 'Comunidad',
    'about.communityDescription': 'Cultivamos círculos inclusivos donde cada voz es escuchada, cada historia es honrada, y la fuerza colectiva nos eleva a todos',
    'about.empowermentTitle': 'Independencia',
    'about.empowermentDescription': 'Te equipamos con las habilidades y la confianza para navegar los desafíos en tus propios términos, fomentando la resiliencia y la autosuficiencia.',
    'about.inclusionTitle': 'Compasión',
    'about.inclusionDescription': 'Te recibimos con empatía y respeto, reconociendo el coraje que se necesita para enfrentar el dolor y el poder de la humanidad compartida.',
    'about.missionTitle': 'Mentalidad de Crecimiento',
    'about.missionDescription': 'Creemos en el aprendizaje y desaprendizaje continuo—abrazando la curiosidad, la adaptabilidad y la libertad de reescribir tu narrativa.',
    'about.visionTitle': 'Valía',
    'about.visionDescription': 'Te recordamos diariamente que ya eres digno de amor, pertenencia y alegría, tal como eres.',
    'about.integrityTitle': 'Defensa',
    'about.integrityDescription': 'Justicia y Democracia Defendemos los derechos constitucionales, el debido proceso y las libertades democráticas, abogando por el cambio sistémico y la protección igualitaria bajo la ley para cada sobreviviente.',
    
    // Mission Vision Section
    'mission.weAreTheChange': '¡Somos El Cambio!',
    'mission.tagline': 'Elevando vidas, defensores de la humanidad y LIBERTAD para TODOS',
    'mission.ourMission': 'Nuestra Misión',
    'mission.ourVision': 'Nuestra Visión',
    'mission.readMore': 'Leer Más',
    'mission.showLess': 'Mostrar Menos',
    'mission.text': `En We All Matter Alliance, creemos que cada alma—sin importar su historia—merece dignidad, sanación y una oportunidad para prosperar.

Nacida de la experiencia vivida y la compasión ilimitada, nuestra misión es caminar junto a aquellos que navegan las sombras de la pérdida por suicidio, el trauma, la violencia doméstica, la injusticia y la marginalización sistémica. Servimos a individuos y familias sin hogar, de bajos ingresos, ordenados por la corte para servicio comunitario, o silenciados por las circunstancias—ofreciendo no solo recursos, sino refugio.

A través de la defensa legal, el apoyo informado en trauma y herramientas prácticas para la reconstrucción, creamos caminos hacia el empoderamiento. Y en asociación con TechFistGlobal.com, extendemos nuestro alcance a través de la automatización inteligente y servicios digitales accesibles—cerrando la brecha entre la necesidad y la oportunidad con innovación y cuidado.

Somos defensores de la justicia, campeones de la equidad y arquitectos del cambio. De sobrevivir a prosperar, caminamos con nuestra comunidad—un paso, una historia, un triunfo a la vez.

Porque en We All Matter Alliance, la sanación no solo es posible—es sagrada.

¡SOMOS EL CAMBIO!`,
    'vision.text': 'Imaginamos un mundo donde los sobrevivientes de trauma se sientan vistos, escuchados y equipados para sanarse a sí mismos. Defendemos la comprensión de los muchos caminos hacia la recuperación—desde círculos de apoyo entre pares y prácticas holísticas hasta terapias basadas en evidencia. Proporcionamos recursos, apoyo, habilidades y capacitación a sobrevivientes de pérdida por suicidio, sobrevivientes de trauma, individuos LGBTQa2s+ y aquellos acusados injustamente. Al ampliar la conciencia y el conocimiento, encendemos la esperanza, provocamos la transformación y nutrimos una cultura de resiliencia duradera, compromiso cívico y justicia para todos.',
    
    // About Page - Join the Movement
    'aboutPage.joinMovement': 'ÚNETE AL MOVIMIENTO',
    'aboutPage.movementDescription': 'Porque el silencio es complicidad. Síguenos, comparte tus pistas y ayuda a construir una nación donde cada persona—independientemente de su raza, estatus o antecedentes—disfruta de una justicia y dignidad verdaderas.',
    'aboutPage.beTheChange': 'Sé El Cambio',
    'aboutPage.boardOfDirectors': 'DIRECTORIO DE LA JUNTA',
    
    // Volunteers Page
    'volunteers.title': 'Nuestros Increíbles Voluntarios',
    'volunteers.description': 'Conoce a los voluntarios dedicados que hacen posible la misión de WAM Alliance!',
    'volunteers.subtitle': 'Estos individuos compasivos donan su tiempo, habilidades y corazones para ayudar a nuestra comunidad a prosperar.',
    'volunteers.featuredVolunteer': 'Voluntario Destacado',
    'volunteers.projectCoordinator': 'Coordinador de Proyectos',
    
    // Board of Directors
    'board.title': 'Directorio de la Junta',
    'board.description': 'Nuestro directorio certificado de la junta está motivado por la pasión de hacer que nuestro mundo sea un lugar mejor.',
    'board.joinTeam': 'Únete a Nuestro Equipo',
    'board.joinMessage': 'Únete al equipo de We All Matter Alliance enviando un correo electrónico con tu currículum y biografía.',
    'board.ourValues': 'Nuestros Valores',
    'board.welcomeMessage': 'Somos un grupo acogedor, amoroso, apasionado e innovador que cree que amarte a ti mismo es el comienzo de un mundo mejor!',
    'board.viewProfile': 'Ver Perfil',
    
    // HomePage
    'home.loading': 'Cargando WAM Alliance...',
    'home.error': 'Algo salió mal',
    'home.tryAgain': 'Intenta de nuevo',
    
    // Contact & Donate
    'contact.title': 'Contáctanos',
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.reachOut': 'Contáctanos a WAM Alliance',
    
    // Common UI
    'ui.readMore': 'Leer Más',
    'ui.showLess': 'Mostrar Menos',
    'ui.loading': 'Cargando...',
    
    // Donors Page (Services component)
    'donors.title': 'DONANTES',
    'donors.intro1': 'WAM trabaja principalmente con donaciones personales y patrocinadores de empresas.',
    'donors.intro2': 'WAM Alliance da la bienvenida y acepta todas las donaciones con la máxima gratitud, y estamos agradecidos con todos aquellos que contribuyen a nuestra causa.',
    'donors.weAreTheChange': '¡SOMOS EL CAMBIO!',
    'donors.personalDonorsTitle': 'DONANTES PERSONALES',
    'donors.personalDonorsDesc': 'Tenemos algunos donantes personales sin los cuales WAM no podría existir.',
    'donors.partnersTitle': 'SOCIOS',
    'donors.partnersDesc': 'Descubre nuestros valiosos patrocinadores que apoyan a WAM Alliance para hacer una diferencia en nuestras comunidades.',
    
    // Donate Now Page (Contact component)
    'donate.title': 'DONACIONES',
    'donate.intro1': 'WAM da la bienvenida y acepta todas las donaciones. Somos una organización 501(c)(3) registrada con el IRS y todas las donaciones son deducibles de impuestos.',
    'donate.promise': '¡El 100% de cada donación va directamente a aquellos a quienes ayudamos - Esta es nuestra promesa para ti!',
    'donate.intro2': '¡WAM no tiene Directores de Junta pagados, servimos a otros sin condiciones y no pedimos nada a cambio excepto que te ames a ti mismo!',
    'donate.cashDonations': 'DONACIONES EN EFECTIVO',
    'donate.allOtherDonations': 'TODAS LAS DEMÁS DONACIONES',
    'donate.donateNow': 'Donar Ahora',

    // TestimonialsPage
    'testimonials.title': 'Testimonios e Historias de Éxito',
    'testimonials.subtitle': '¡Estas son solo algunas de las personas a las que WAM ha ayudado a pasar de apenas sobrevivir a prosperar!',
    'testimonials.description': 'Ayudamos brindando amor, apoyo y recursos a quienes lo necesitan, con resultados reales y sin abandono.',
    'testimonials.client': 'Cliente de WAM Alliance',
    'testimonials.readMore': 'Leer Más',
    'testimonials.readLess': 'Leer Menos',
    'testimonials.verified': 'Historia de Impacto Verificada',

    // Testimonial Types
    'testimonials.type.testimonial': 'testimonio',
    'testimonials.type.successStory': 'historia de éxito',
    
    // Testimonial Stories (Spanish)
    'testimonials.stories.staciMike': "Mi nombre es Staci y mi pareja de vida Mike. Queremos expresar un enorme agradecimiento a la fundadora de WAM (Tonya). Primero necesité ayuda para obtener mi certificado de nacimiento de Mississippi que necesitaba incluirse con nuestra solicitud de vivienda de la Sección 8. WAM pudo pedirlo y entregarlo. Ahora tenía todo para calificar para vivienda. Lo cual era necesario considerando que estábamos sin hogar y viviendo en una tienda de campaña. Una vez calificados, recibimos un cupón de vivienda de la Sección 8, pero las tarifas de solicitud y depósitos no estaban incluidos. WAM pudo cubrir 3 tarifas de solicitud, una de las cuales incluía el lugar donde ahora vivimos. El 7 de febrero firmamos nuestro contrato de arrendamiento con Housing Connect y ahora tenemos un hogar. Aunque tuvimos nuestras luchas, mantuvimos la cabeza en alto y nos mantuvimos positivos. Tonya fue una gran amiga cuando necesité a alguien con quien hablar sobre mis emociones en torno a nuestra situación. WAM también pudo ayudar con algunos pedidos de comida de la recogida de Walmart. Actualmente me está ayudando a encontrar un cirujano dental para hacer implantes dentales con descuento o pro bono (cruzo los dedos), y continúa ayudándonos con comida cuando es necesario. ¡Staci y Mike ahora están prosperando!",
    'testimonials.stories.carter': "Tengo la bendición de haber conocido a Tonya, la fundadora de WAM, en 2010. Era un niño luchador que viajaba por los estados tratando de lidiar con lo que la vida me dio: un diagnóstico de TEPT a una edad temprana. Era mi primer invierno en Utah y no conocía a muchas personas. Ella me acogió y me ayudó a tener un espacio seguro para quedarme hasta que pude continuar con mis viajes. Avanzando más de una década hasta hace poco. Me encontré en un momento difícil cuando sucedió la vida. Tonya se acercó a mí para contarme sobre WAM. Me han proporcionado asesoramiento, una mentoría sólida e inspiración para seguir adelante. Pude recibir asistencia con el currículum a través de WAM, lo que me llevó a un buen trabajo. Incluso me ayudaron con gasolina cuando agote mis ahorros para llegar al nuevo trabajo en mi camión. Cuando llamé a Tonya después de mi primer revés en el nuevo trabajo, pasó 3 horas hablando conmigo por teléfono con una variedad de consejos, buenas conversaciones e incluso filosofía. Mi empleador quedó impresionado con los resultados de tener un mentor sólido como Tonya y WAM. Nunca he sido alguien que se acerque a agencias u organizaciones sin fines de lucro, pero lo que WAM está haciendo es algo único, útil y básicamente un salvavidas. Dicen que se necesita una aldea para criar a un niño. Prefiero pensar que se necesita una aldea para sanar a un niño interior herido. WAM y su equipo están ansiosos por ayudar y no de una manera crítica. No puedo agradecer lo suficiente y espero con ansias el futuro brillante que tengo por delante entre mi impulso para tener éxito y la sólida asistencia de WAM!",
    'testimonials.stories.jameyFamily': "Jamey es residente de SLC y una defensora leal de las personas sin hogar y desfavorecidas. Ella y su familia han soportado trauma y tiempos difíciles durante décadas, sin embargo, continúan manejando la vida y permaneciendo alojados. Jamey es una persona que calificó para nuestro Servicio de Limpieza/Sanitización de WAM, y nuestro equipo pudo ofrecerle esto dos veces en el último año. El equipo de WAM también proporcionó a Jamey servicios de apoyo legal y trabajó con ella para recopilar toda la información necesaria y preparar los documentos finales para presentar en el tribunal. Jamey ha donado ropa junto con otros artículos a WAM, para mostrar su agradecimiento, ¡y lo agradecemos mucho! Jamey también refiere a otros, como Staci y Mike, a nuestra organización. ¡Ayudando a las personas a pasar de esforzarse a prosperar!",
    'testimonials.stories.tyrell': "Soy Ty, WAM me encontró durante 2020, a los 17 años, en las calles, estaba solo y asustado. Mi familia estaba rota, madre mentalmente enferma y adicta, padre en Irak y nunca lo he conocido, mis hermanos involucrados en pandillas o encarcelados. WAM me ayudó a encontrar un refugio juvenil en Ogden, donde me quedé durante aproximadamente un mes, mientras me habían estado proporcionando ropa y otras necesidades. El refugio me estaba dejando afuera en un clima de 19 grados sin abrigo como castigo, manteniéndome afuera en pleno invierno hasta las 10:00 p.m. por tocar una computadora y no disculparme por ello. Fue entonces cuando WAM me acogió y me alojó temporalmente. Me ayudaron a obtener BC, tarjeta SS e identificación para poder obtener empleo y volver a la escuela secundaria y obtener mi GED. Tuve empleo en una semana y ahorré para obtener mi licencia de conducir, necesitaba tomar una escuela de manejo y aprobar. Lo hice con éxito y me otorgaron una licencia de conducir. ¡Me inscribí en la escuela para terminar mi GED y conseguí un pasaporte! ¡Ahora vivo solo y he viajado a Florida y Colorado y he estado PROSPERANDO! ¡Dejé WAM amándome a mí mismo y mi capacidad de ser autosuficiente y un ciudadano contribuyente! Actualización: Ty se ha conectado desde entonces con su padre y se está familiarizando con su herencia, ¡feliz y viviendo su vida!",
    'testimonials.stories.jay': "Soy Jay, soy un adicto en recuperación y sobreviviente de suicidio. Soy amputado de las rodillas hacia abajo y tengo muchos otros problemas médicos debilitantes. He estado sin hogar durante más de 20 años y finalmente estoy fuera de las calles y en un refugio temporal para personas médicamente vulnerables, mientras espero una vivienda permanente. WAM me encontró en Sandy con un cartel pidiendo ayuda. Me dieron una tarjeta, y después de mirarla, me inspiró a llamarlos, así que lo hice. Pudieron conseguirme en el refugio al día siguiente. Me transportaron desde el centro y me admitieron con éxito. Me han proporcionado comida, ropa, otros artículos para sobrellevar mientras estoy en el refugio, además de financiar la renovación de mi tarjeta médica y el costo de la cita con el médico, ya que no está cubierto por Medicaid. WAM me salvó y me ha ayudado de más maneras que cualquier otro. Significan lo que dicen y cumplen. El equipo de WAM me está ayudando a salir de las calles y la ayuda que necesito.",
    'testimonials.stories.mercedes': "Mercedes era una joven en un refugio juvenil siendo tratada mal. Estaba con Ty, otro niño que WAM ayudó y alojó temporalmente. Mercedes venía de un hogar donde su madre estaba ausente, el padre ausente y un cuidador abusivo. WAM le proporcionó transporte, seguridad, refugio temporal, comida y orientación. Esperamos que Mercedes esté de vuelta en la escuela y con personas que la aman.",
    'testimonials.stories.seanFromOh': "WAM me encontró en un cementerio en OH una tarde. No me sentía bien y el clima se dirigía hacia la lluvia. Me robaron y solo estaba tratando de descubrir qué iba a hacer, sintiéndome deprimido e inútil. Cuando Tonya y Rob se acercaron a mí, estaba cansado y hambriento, y amablemente me proporcionaron una comida caliente y una bebida. Más tarde trajeron de vuelta una tienda de campaña y otros artículos para ayudarme mientras encontraba vivienda. Me dieron inspiración para seguir adelante y continuar avanzando, de vuelta a ser dueño de mi propio negocio y tener mi propia casa. Estoy agradecido por todo su apoyo y por contestar el teléfono cuando llamé. Estoy encontrando mi camino de regreso y me han dado orientación en el camino.",
  
     // Programs and Projects Page (OurProgress)
    'ourProgress.title': 'Programas y Proyectos Futuros',
    'ourProgress.disclaimer': 'Cada programa está sujeto a cambios. Cada persona calificada debe ser aceptada en el programa antes de recibir fondos y/o servicios.',
    'ourProgress.established': 'ORGANIZACIÓN FORMALMENTE ESTABLECIDA Y JUNTA DIRECTIVA',
    'ourProgress.year2023': '2023',
    'ourProgress.year2024': '2024',
    'ourProgress.establishedDesc': 'WAM Alliance se estableció formalmente en el estado de Utah y con el IRS como una organización 501(c)(3).',
    'ourProgress.talentRecruitment': 'RECLUTAMIENTO DE TALENTO',
    'ourProgress.talentRecruitmentPeriod': '2024 - Presente',
    'ourProgress.talentRecruitmentDesc': 'WAM reclutará talento para ayudar con el marketing en redes sociales, así como con campañas de donantes/patrocinadores.',
    'ourProgress.noStringsProgram': 'PROGRAMA SIN CONDICIONES',
    'ourProgress.noStringsProgramDesc': 'Este programa se financia únicamente mediante donaciones y subvenciones, y proporciona Artículos Esenciales de Emergencia —incluida asistencia para servicios públicos, tarjetas de gasolina y pases de tren/autobús—, además de ayuda financiera directa para documentación legal, costos médicos calificados, tarifas de solicitud y otros gastos necesarios asociados con la obtención de documentos requeridos, evaluaciones médicas, vivienda y acceso a beneficios estatales; toda la asistencia se ofrece con dignidad y sin ninguna obligación para los beneficiarios.',
    'ourProgress.techfistTitle': 'Techfist Global Inc - Un Orgulloso Patrocinador de WAM Alliance',
    'ourProgress.techfistDesc': 'Techfist Global se destaca como un orgulloso patrocinador y socio tecnológico de WAM Alliance. Brinda soluciones digitales avanzadas, diseño estratégico y sistemas escalables para amplificar el impacto en redes globales, uniendo innovación con propósito para inspirar sostenibilidad, inclusión y crecimiento. Juntos, empoderamos a las comunidades para construir un futuro más inteligente y mejor conectado.',
     'ourProgress.cswTitle': 'Vigilancia de Seguridad Comunitaria - CSW',
    'ourProgress.cswDesc': 'La Vigilancia de Seguridad Comunitaria (CSW) es una iniciativa liderada por vecindarios, no confrontativa, diseñada para aumentar la seguridad, la conciencia y la resiliencia comunitaria en vecindarios que experimentan actividad sospechosa por individuos enmascarados. CSW se enfoca en la observación, informes, prevención y apoyo comunitario—trabajando en asociación con las fuerzas del orden locales y proveedores de servicios mientras prioriza la desescalada, el cumplimiento legal y la dignidad de todos los residentes.',
    'ourProgress.adenRootsTitle': 'Programa Raíces de Aden',
    'ourProgress.adenRootsFull': 'Raíces de Aden es una iniciativa humanitaria liderada por la defensora palestino-estadounidense Sireen Hamdi Beseiso, bajo el paraguas de WAM Alliance. Nombrado en honor a su hijo Aden, este proyecto está arraigado en la compasión, la resiliencia y el llamado urgente a apoyar a palestinos desplazados y heridos, especialmente niños y familias afectados por la guerra. Nacido de la experiencia vivida y el corazón de un sobreviviente, Raíces de Aden proporciona ayuda directa a aquellos en crisis, incluyendo alimentos, agua potable, refugio, ropa, tratamiento médico y apoyo educativo. En los últimos dos años, Sireen ha ayudado a coordinar la evacuación de niños heridos de Gaza a Egipto y Estados Unidos, trabajando con organizaciones como PCRF y Heal Palestine para asegurar visas, transporte y atención que salva vidas. A través de Raíces de Aden, Sireen ha ayudado a entregar tiendas de campaña, paquetes y viviendas seguras a familias que huyeron sin nada. Ha asistido personalmente en la evacuación y tratamiento de sus primas Sara y Ahd—ambas gravemente heridas—asegurando que reciban atención médica urgente en Nueva York, Carolina del Sur y Colorado. Este proyecto es más que ayuda, es defensa. Raíces de Aden llama al alto el fuego, la sanación y la solidaridad global. Moviliza voluntarios, amplifica las historias de sobrevivientes y construye puentes entre comunidades en Utah, Egipto y Gaza. En su núcleo, Raíces de Aden es la misión de una madre para proteger, elevar y nunca olvidar. Es un salvavidas para aquellos que permanecen y un faro para aquellos que han huido.',
    'ourProgress.year2025': '2025',
    'ourProgress.aidensRootsTitle': "Raíces de Aiden - Un Proyecto de WAM Alliance",
    'ourProgress.readMore': 'Leer Más ↓',
    'ourProgress.readLess': 'Leer Menos ↑',

      // Trusted Partners Page
    'partners.title': 'Socios de Confianza',
    'partners.communityResources': 'RECURSOS COMUNITARIOS',
    'partners.intro1': 'Esta es una página donde puede encontrar recursos adicionales en el área local de SLC, Utah. Estos son recursos que sentimos que realmente ayudan y sirven a otros, con éxito y amor.',
    'partners.intro2': 'No queremos enviar a los necesitados a un lugar donde no sean escuchados y sean maltratados por el personal.',
    'partners.resourceSpace': 'WAM está trabajando actualmente en la construcción de un Espacio de Recursos financiado de forma privada, para ayudar a las personas a salir de la calle y entrar en un entorno seguro, sin que el Gobierno Federal regule dónde se gastan los fondos.',
    'partners.values': 'Valoramos y creemos que todos tienen derecho al amor, refugio y comida, atención de salud mental alternativa para ayudar en el crecimiento personal y la búsqueda de la propia felicidad.',
    'partners.support': 'Aquí en WAM apoyamos y guiamos a quienes lo necesitan, de apenas sobrevivir a prosperar.',
    'partners.lovingYourself': 'Amarte a ti mismo es el primer paso para recuperarte de cualquier evento.',
    'partners.ourTrustedPartners': 'Nuestros Socios de Confianza',
    'partners.secondSecondDesc': 'Organización sin fines de lucro que ayuda a las personas en el área de SLC.',
    'partners.restorativeHealthDesc': 'Atención médica de clase mundial con opciones para nuestra comunidad LGBTQ+ y aquellos que buscan mejorar la calidad de vida.',
    'partners.techfist':'En colaboración con TechFist Global, We All Matter impulsa el poder de la tecnología para amplificar el cambio, empoderar a las personas y construir un futuro mejor.',

     // Board of Directors Bio Pages - Common (Spanish)
    'bio.common.backToBoard': 'Volver a la Junta Directiva',
    'bio.common.overview': 'Descripción General',
    'bio.common.areasOfExpertise': 'Áreas de Experiencia',
    'bio.common.boardOfDirectors': 'Junta Directiva',
    
    // Tonya Bio Page (Spanish)
    'bio.tonya.role': 'PRESIDENTA',
    'bio.tonya.name': 'TONYA JONES SMITH',
    'bio.tonya.overview': 'Tonya Jones-Smith es una líder sin fines de lucro consumada y sobreviviente de pérdida por suicidio dedicada al avance de la sanación holística y la recuperación de traumas. Con 30 años de experiencia multidisciplinaria que abarca salud conductual, bienestar holístico, psicología, derecho, finanzas e ingeniería de software, combina rigor técnico, liderazgo compasivo y práctica basada en evidencia para impulsar el impacto organizacional.',
    'bio.tonya.professionalBackground': 'Experiencia Profesional',
    'bio.tonya.background': 'Su experiencia profesional abarca muchas áreas. Fundó We All Matter Alliance, una organización sin fines de lucro 501(c)(3) que ofrece apoyo informado en trauma y recursos para personas afectadas por pérdida por suicidio, injusticia, TEPT, enfermedades mentales y falta de vivienda. Desarrolló programas inclusivos y asociaciones estratégicas que abordan las brechas de servicio creando entornos de sanación seguros.',
    'bio.tonya.keyAccomplishments': 'Logros Clave',
    'bio.tonya.accomplishments': 'Tonya lanzó Love Me Teas, una marca de bienestar herbal que elabora mezclas orgánicas para aliviar los síntomas del TEPT y la ansiedad. Es autora de una próxima serie de memorias sobre sobrevivir al trauma, tejiendo narrativa personal con modalidades de sanación natural, programada para publicación en el futuro cercano. Ha liderado iniciativas a nivel empresarial en aseguramiento de calidad, gestión de proyectos Agile, infraestructura en la nube y SDLC.',
    'bio.tonya.educationCertifications': 'Educación y Certificaciones',
    'bio.tonya.education': 'La educación de Tonya comenzó en las ciencias de la computación y progresó hacia la neurociencia, nutrición, psicología y derecho. Tiene una licenciatura en Ciencias de Westminster College en Ciencias de la Computación y Matemáticas. Su deseo de aprendizaje y educación continua es la razón por la que ahora posee un Certificado de Harvard en Derecho Constitucional, así como Certificación en Herboristería Medicinal, mientras continúa buscando una Licencia de Hipnoterapia para TEPT. Tonya también tiene el don de ser Lectora de Registros Akáshicos.',
    'bio.tonya.leadershipPhilosophy': 'Filosofía de Liderazgo',
    'bio.tonya.philosophy': 'La filosofía de liderazgo de Tonya se centra en la creencia de que cada vida tiene un valor intrínseco y que los enfoques holísticos basados en evidencia pueden transformar el trauma en resiliencia. Ella empodera a las personas para reclamar la autonomía, cultivar el amor propio y construir caminos sostenibles hacia el bienestar.',
    'bio.tonya.skill1': 'Diseño e Implementación de Programas Informados en Trauma',
    'bio.tonya.skill2': 'Sanación Holística y Medicina Herbal',
    'bio.tonya.skill3': 'Estrategias de Salud Conductual e Hipnoterapia',
    'bio.tonya.skill4': 'Asociaciones Estratégicas y Desarrollo de Recursos',
    'bio.tonya.skill5': 'Arquitectura de Sistemas Escalables y Aseguramiento de Calidad',
    
    // Rob Bio Page (Spanish)
    'bio.rob.role': 'VICEPRESIDENTE',
    'bio.rob.cfo': 'CFO',
    'bio.rob.name': 'ROBERT SMITH',
    'bio.rob.overview': 'Mi nombre es Rob, y soy un sanador empático que usa mis experiencias personales para ayudar y sanar a otros. Viviendo en diferentes culturas alrededor del mundo, he aprendido a entender a otros seres y formas de vida, y que hay diferentes caminos hacia la sanación y la felicidad. Compartir ese conocimiento es importante, es una colaboración para el beneficio de todos los humanos.',
    'bio.rob.journeyAddiction': 'Viaje con la Adicción y Recuperación',
    'bio.rob.addiction': 'A los 23 años, encabecé una intervención para ayudar a mi padre a estar sobrio del abuso de alcohol y sustancias. Durante 29 años aprendería de primera mano sobre la adicción, el comportamiento adictivo, cómo manejar relaciones impregnadas de adicción y el largo viaje del tratamiento de la adicción. Participé en AA, NA y CA con mi padre, y Al-Anon por mi cuenta. Si bien los programas de pasos son efectivos al principio, creo que la verdadera sanación ocurre cuando confrontamos la verdad de nuestros propios traumas y los trabajamos. Amarnos a nosotros mismos es primordial, especialmente si vamos a amar a otros.',
    'bio.rob.personalTransformation': 'Transformación Personal',
    'bio.rob.transformation': 'En 2008 casi pierdo mi vida y aunque la experiencia fue físicamente muy traumática, la experiencia espiritual es incomparable. ¡No la cambiaría por nada del mundo!',
    'bio.rob.understandingSuicide': 'Comprendiendo la Pérdida por Suicidio',
    'bio.rob.suicide': 'Unos años después conocí a mi esposa y a mis hijastros y aprendí que son Sobrevivientes de Pérdida por Suicidio, un tema complejo y en gran parte malentendido. Asistiendo a talleres, leyendo blogs y libros sobre Suicidio y Sobrevivientes de Pérdida por Suicidio, me esfuerzo por aprender todo lo que pueda. Independientemente de la fuente, el TEPT es real, y puede ser debilitante ya que es incontrolable por quien lo sufre.',
    'bio.rob.healingPhilosophy': 'Filosofía de Sanación',
    'bio.rob.philosophy1': 'El objetivo de ayudar a quienes sufren trauma es empoderar a las personas para encontrar su camino hacia la sanación, y cada ser humano es único. La clave es aprender sobre el individuo y su historia: esto genera un tratamiento más efectivo, permitiéndoles sanar y avanzar con sus objetivos de vida.',
    'bio.rob.philosophy2': '¡Solo pido que ayuden a otros a su vez, que compartan lo que han aprendido y logrado, y que la onda se mueva hacia adelante!',
    'bio.rob.skill1': 'Empatía y Sanación Intercultural',
    'bio.rob.skill2': 'Adicción y Recuperación',
    'bio.rob.skill3': 'Trauma y Auto-Sanación',
    'bio.rob.skill4': 'Pérdida por Suicidio y TEPT',
    'bio.rob.skill5': 'Metodología de Sanación Personalizada',
    
    // Wajid Bio Page (Spanish)
    'bio.wajid.role': 'Junta Directiva',
    'bio.wajid.department': 'INGENIERÍA',
    'bio.wajid.name': 'WAJID BHAT',
    'bio.wajid.visionaryLeadership': 'Liderazgo Visionario',
    'bio.wajid.leadership': 'Ampliamente reconocido por su enfoque visionario y liderazgo pragmático, Wajid Bhat se encuentra a la vanguardia de la innovación digital, empoderando a las organizaciones para sobresalir en un panorama tecnológico en constante evolución. Su reputación se basa en una base de previsión estratégica, habilidades excepcionales de resolución de problemas y un compromiso inquebrantable con la excelencia.',
    'bio.wajid.collaborativeExcellence': 'Excelencia Colaborativa',
    'bio.wajid.collaboration': 'El espíritu colaborativo de Wajid y su profundo entendimiento de los objetivos empresariales le permiten cerrar la comunicación entre partes interesadas ejecutivas, equipos de TI y divisiones operativas, asegurando que cada viaje de transformación esté alineado con resultados medibles.',
    'bio.wajid.technicalMastery': 'Maestría Técnica y Desarrollo de Equipos',
    'bio.wajid.mastery': 'Su conjunto de habilidades dinámicas combina la maestría técnica con una pasión por la mentoría y el desarrollo del talento, fomentando equipos de alto rendimiento que prosperan en entornos empresariales complejos.',
    'bio.wajid.innovation': 'Innovación y Aprendizaje Continuo',
    'bio.wajid.innovationDesc': 'La agudeza analítica y creatividad de Wajid brillan al arquitectar soluciones personalizadas adaptadas para desafíos empresariales únicos, mientras que su dedicación al aprendizaje continuo lo mantiene a la vanguardia de las tendencias emergentes en IA, ciencia de datos, ciberseguridad y evolución del ecosistema en la nube.',
    'bio.wajid.strategicImpact': 'Impacto Estratégico',
    'bio.wajid.impact': 'A través de su resiliencia, adaptabilidad y impulso para entregar valor, Wajid inspira confianza y seguridad, convirtiéndolo en un socio estratégico indispensable para nuestras organizaciones mientras buscamos un crecimiento duradero.',
    'bio.wajid.skill1': 'Previsión Estratégica y Liderazgo Pragmático',
    'bio.wajid.skill2': 'Transformación Digital y Alineación Empresarial',
    'bio.wajid.skill3': 'Maestría Técnica y Arquitectura de Soluciones',
    'bio.wajid.skill4': 'Desarrollo de Equipos y Talento',
    'bio.wajid.skill5': 'Tendencias de Tecnología Emergente',
    'bio.wajid.skill6': 'Resolución de Problemas y Entrega de Valor',
    
    // Danielle Bio Page (Spanish)
    'bio.danielle.role': 'Junta Directiva',
    'bio.danielle.department': 'Asistente Legal',
    'bio.danielle.name': 'DANIELLE ORTEGA',
    'bio.danielle.earlyLife': 'Vida Temprana y Fundamento',
    'bio.danielle.early': 'Mi nombre es Danielle, y siempre he sido una observadora atenta, sensible a detalles sutiles y a los efectos emocionales de experiencias traumáticas en quienes me rodean. Mi propia infancia estuvo marcada por dificultades: mi padre estuvo encarcelado durante toda mi vida, vivimos en pobreza, y mi padrastro era distante y poco acogedor. Sin embargo, mi madre fue una fuente de amor y apoyo inquebrantable, valorando profundamente a cada uno de nosotros. Gracias a ella, aprendí a apreciar mi propio valor, lo que me empoderó para esforzarme por un futuro mejor cuando enfrenté mis propias luchas como adulta.',
    'bio.danielle.personalStruggles': 'Luchas Personales y Despertar',
    'bio.danielle.struggles': 'Como joven adulta, comencé la universidad y me involucré activamente en mi iglesia, pero todavía estaba atormentada por un sentimiento de vacío. Mis batallas con un trastorno alimentario eventualmente llevaron a una adicción a las drogas y un período de encarcelamiento. Durante mi tiempo en la cárcel, fui testigo de la inhumanidad de algunos guardias, inspirándome a buscar recursos legales, y con la ayuda de un miembro del personal amable, obtuve copias impresas de nuestros derechos constitucionales para todos en mi unidad.',
    'bio.danielle.transformation': 'Transformación y Trayectoria Profesional',
    'bio.danielle.transformationDesc': 'Después de mi liberación, pronto quedé embarazada y resolví seguir una carrera en derecho. Obtuve un título en estudios de asistente legal enfocado en ciencias sociales y comencé a trabajar en recuperación de adicciones como especialista en apoyo entre pares, así como con personas sin hogar. Si bien mi participación ha sido intermitente debido a tener hijos, mi compromiso con el apoyo entre pares permanece fuerte. El aliento y la guía que recibí de otros me ayudaron a construir una vida más rica de lo que podría haber imaginado, y creo que todos merecen esa misma oportunidad.',
    'bio.danielle.philosophyCommitment': 'Filosofía y Compromiso',
    'bio.danielle.philosophy': 'La autocompasión y el amor propio son búsquedas de por vida que a menudo requieren aliento continuo. Me apasiona ayudar a otros en sus viajes, conociendo de primera mano el poder transformador del apoyo y la gracia.',
    'bio.danielle.skill1': 'Observación Atenta y Sensibilidad',
    'bio.danielle.skill2': 'Adicción, Trastornos Alimentarios y Recuperación',
    'bio.danielle.skill3': 'Apoyo Entre Pares y Mentoría',
    'bio.danielle.skill4': 'Defensa Constitucional y Legal',
    'bio.danielle.skill5': 'Autocompasión y Transformación',
    
    // Diane Bio Page (Spanish)
    'bio.diane.role': 'DIRECTORA',
    'bio.diane.secretary': 'SECRETARIA',
    'bio.diane.name': 'DIANE JONES',
    'bio.diane.overview': 'Soy Diane Jones y he sido Sobreviviente de Pérdida por Suicidio desde los 10 años de edad. Nací empática y siempre he podido sentir y leer la energía de los demás. He estado en relaciones abusivas que casi me han quitado la vida, lo que me da una profunda comprensión del TEPT, la Ansiedad y la Depresión.',
    'bio.diane.personalBackground': 'Antecedentes Personales y Educación',
    'bio.diane.background': 'Actualmente estoy en gerencia y asistiendo a la universidad, completando mi licenciatura en Gestión Empresarial, y recientemente compré mi primera casa aquí en Utah. Estoy altamente motivada. Orientada a objetivos. Crecí cazando, acampando y siendo parte de muchas actividades académicas extracurriculares cuando era niña. Asistí a Waterford durante 2 años, después de que mi padre falleció, cualquier estigma alrededor de la pérdida por suicidio fue eliminado para mí al asistir a Waterford, y mi experiencia fue significativa, y recibí una de las mejores educaciones mientras estuve allí.',
    'bio.diane.understandingTrauma': 'Comprendiendo el Trauma y la Sanación',
    'bio.diane.trauma': 'Aunque mi vida ha estado llena de desafíos desde una edad temprana, han traído grandes lecciones y conocimientos con ellos. Aprender a amarte a ti mismo es esencial para sanar y avanzar en la vida y el amor. Esto es una de las cosas en las que trabajo continuamente dentro de mí misma y aprendo más para ayudar a otros en mi camino.',
    'bio.diane.navigatingTreatment': 'Navegando Sistemas de Tratamiento',
    'bio.diane.treatment1': 'Navegar la medicina occidental y el sistema me ha enseñado los diferentes métodos y herramientas para sobrevivientes de TEPT y trauma. Aprendí que cada uno de nosotros somos individuos y ningún método o píldora funciona para todos. Tenemos una elección, opciones disponibles para transformar en lo que necesitamos para nuestra propia vida. He encontrado algunas cosas que funcionan para mí y las he adaptado a mi vida para ayudarme a incorporar y sanar mis traumas que causan TEPT, Ansiedad, etc.',
    'bio.diane.treatment2': 'Las lecciones difíciles son algunos de nuestros mayores desafíos, y entender que no estamos mentalmente enfermos, que sufrimos un trauma, y que ninguna píldora va a arreglar eso, aliviará algo de la dificultad y depresión al lidiar con los síntomas y comportamientos.',
    'bio.diane.missionVision': 'Misión y Visión',
    'bio.diane.mission1': 'Los muchos servicios que existen hoy en día todavía no abordan la Pérdida por Suicidio o el trauma agravado, también conocido como causa raíz. Aquí simplemente tratamos los síntomas (depresión, uso de drogas, abuso de alcohol, dismorfia, falta de vivienda) con píldoras, hospitales y vergüenza. Quiero intentar cambiar eso ~ ¡SOMOS MUCHO MÁS QUE NUESTRO TRAUMA!',
    'bio.diane.mission2': 'El trauma está en la raíz de la adicción y la falta de vivienda, sin reconocer eso nunca encontraremos una solución para resolver la forma en que tratamos a nuestros niños, a qué los exponemos y el destino de sus futuros aquí, si no ayudamos a sanar y abordar el trauma incrustado que sobrevivieron. Espero ayudar a otros a ver y saber que la sanación es posible, y que cada uno de nosotros la merece.',
    'bio.diane.skill1': 'Supervivencia de Pérdida por Suicidio',
    'bio.diane.skill2': 'Empatía y Lectura de Energía',
    'bio.diane.skill3': 'Trauma, Abuso y Salud Mental',
    'bio.diane.skill4': 'Navegación de Medicina Occidental',
    'bio.diane.skill5': 'Auto-Sanación y Empoderamiento',
    'bio.diane.skill6': 'Habilidades Corporativas/Académicas (Motivación Demostrada)',
  },
  


};

// Empty translations object for backward compatibility
// Pages using translations.something will just use their fallback values
const emptyTranslations = {};

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translationDict[language][key as keyof typeof translationDict.en] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t, translations: emptyTranslations }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}