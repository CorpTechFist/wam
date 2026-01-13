
// ===================================================
// WAM ALLIANCE CHATBOT DATA (GRANULAR FAQ SET)
// ===================================================

/**
 * This file defines a detailed FAQ knowledge base for the We All Matter Alliance.
 * Questions are written in natural language and cover all publicly available
 * information from the WAM Alliance website (mission, vision, programs,
 * leadership, volunteers, partnerships, testimonials, donors, crisis support,
 * and contact details). Each entry includes a short answer, a list of keywords
 * to help simple keyword‑based intent matching, and (where applicable) a
 * relative sourcePath pointing to the relevant section of the website.  This
 * dataset intentionally uses granular questions so that the chatbot can answer
 * very specific inquiries without hallucination.  Information is valid as of
 * early‑2026.  Note: this file only exports the FAQ data; other structures
 * (programs, resources, communityNeeds) may live in separate files.
 */

export interface FAQData {
  /**
   * The user‑facing question this answer applies to.  Questions are phrased
   * naturally and can often be matched to similar user queries via keyword
   * matching.  Each question should be unique.
   */
  question: string;
  /** A succinct answer to the question, written in a friendly tone but
   * focused on facts. Answers do not include personal opinions or advice.
   */
  answer: string;
  /** Keywords used to match user input.  Include singular/plural forms and
   * synonyms.  Avoid overlapping keywords across unrelated entries to reduce
   * false positives.  Keep keywords lower‑cased.
   */
  keywords: string[];
  /** Optional relative path to the section of the WAM Alliance site where
   * this information was found.  Use `/#section` fragments so that callers
   * can resolve the full URL at runtime.  Omit for general wellness FAQ
   * entries that are not directly sourced from the site.
   */
  sourcePath?: string;
  /** Baseline confidence score.  This number (0.4–0.9) provides a hint
   * about how confident the chatbot should be when selecting this answer.
   */
  confidenceBase?: number;
}

//
// GRANULAR FAQ DATA
//
// Each entry below references a specific aspect of the WAM Alliance website.
// Use meaningful keywords so that user queries can be matched accurately.
// The order of entries is not important; however grouping by theme makes
// maintenance easier.  Feel free to reorganize into sections if needed.

export const faqData: FAQData[] = [
  // Mission and vision
  {
    question: 'What is the mission of We All Matter Alliance?',
    answer:
      'The mission of WAM Alliance is to affirm the dignity, healing and potential of every individual regardless of circumstance.  The organisation walks alongside those impacted by suicide loss, trauma, domestic violence, injustice and systemic marginalisation.  It provides essential resources, refuge, legal advocacy, trauma‑informed care and practical tools for rebuilding and partners with technology innovators to bridge gaps and champion equity and justice.',
    keywords: [
      'mission',
      'purpose',
      'why',
      'dignity',
      'heal',
      'potential',
      'affirm'
    ],
    sourcePath: '/#about',
    confidenceBase: 0.9
  },
  {
    question: 'What is the vision of We All Matter Alliance?',
    answer:
      'WAM Alliance envisions a world where trauma survivors feel seen, heard and equipped to heal themselves.  It champions understanding of many paths to recovery—from peer support circles and holistic practices to evidence‑based therapies.  The organisation broadens awareness and knowledge to ignite hope, spark transformation and nurture a culture of lasting resilience, civic engagement and justice for all.',
    keywords: [
      'vision',
      'envision',
      'future',
      'survivor',
      'paths to recovery',
      'resilience',
      'justice'
    ],
    sourcePath: '/#about',
    confidenceBase: 0.9
  },
  {
    question: 'What are the core values of WAM Alliance?',
    answer:
      'WAM Alliance is guided by the values of Community, Independence, Compassion, Growth Mindset, Worthiness and Advocacy.  Community means cultivating inclusive circles where every voice is heard.  Independence focuses on equipping people with skills and confidence to navigate challenges.  Compassion emphasises empathy and respect.  Growth Mindset encourages continuous learning and unlearning.  Worthiness reminds individuals they are already worthy of love and joy.  Advocacy champions constitutional rights, due process and systemic change for every survivor.',
    keywords: [
      'values',
      'core values',
      'community',
      'independence',
      'compassion',
      'growth mindset',
      'worthiness',
      'advocacy'
    ],
    sourcePath: '/#about',
    confidenceBase: 0.85
  },
  {
    question: 'How can I join the movement with WAM Alliance?',
    answer:
      'WAM Alliance invites you to join the movement by following and sharing tip‑offs, advocating for justice and dignity and refusing to be silent.  The organisation emphasises that silence is complicity and encourages all to help build communities where every voice matters.',
    keywords: [
      'join',
      'movement',
      'be the change',
      'how to help',
      'silence',
      'justice',
      'dignity'
    ],
    sourcePath: '/#about',
    confidenceBase: 0.8
  },
  // Who WAM serves and why
  {
    question: 'Who does WAM Alliance serve?',
    answer:
      'WAM Alliance supports individuals and families impacted by suicide loss, trauma, domestic violence, injustice and systemic marginalisation.  The organisation serves unhoused and low‑income individuals, people ordered to community service or silenced by circumstance, trauma survivors, LGBTQ2a2S+ individuals and those wrongfully accused.',
    keywords: [
      'who',
      'serve',
      'supports',
      'survivors',
      'families',
      'community members',
      'LGBTQ',
      'wrongly accused'
    ],
    sourcePath: '/#about',
    confidenceBase: 0.85
  },
  {
    question: 'Why does WAM Alliance focus on trauma survivors?',
    answer:
      'WAM Alliance believes that trauma survivors deserve to be seen, heard and supported in their healing.  The organisation recognises the lasting impact of trauma and aims to provide resources and advocacy that honour each person’s dignity and autonomy while promoting resilience and recovery.',
    keywords: ['trauma', 'survivor', 'healing', 'impact', 'support'],
    sourcePath: '/#about',
    confidenceBase: 0.8
  },
  // Programs and services – general
  {
    question: 'What programs does WAM Alliance offer?',
    answer:
      'WAM Alliance offers a range of programs including the No Strings Attached Program for emergency assistance, the Community Safety Watch Program to enhance neighbourhood resilience, the Talent Recruitment Program to engage volunteers and professionals, the Techfist Global STEM Program Support for accessible technology education, Aden’s Roots Program for humanitarian support and a Get Involved Program to mobilise volunteers, donations and partnerships.',
    keywords: [
      'programs',
      'services',
      'support programs',
      'what do you offer',
      'assistance',
      'projects'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  // No Strings Attached Program
  {
    question: 'What is the No Strings Attached Program?',
    answer:
      'The No Strings Attached Program provides dignified, no‑obligation assistance to individuals and families facing unexpected hardship.  It covers essential expenses such as utilities, gas cards, transportation passes, fees for legal documents, medical costs, application fees, housing deposits and other urgent needs.  Funds are delivered without conditions so recipients can stabilise and rebuild their lives.',
    keywords: [
      'no strings attached',
      'emergency assistance',
      'help program',
      'no obligation',
      'financial aid',
      'utility assistance',
      'gas cards',
      'bus pass'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.9
  },
  {
    question: 'Who can receive support from the No Strings Attached Program?',
    answer:
      'This program is designed for individuals and families experiencing financial crises, unhoused or low‑income community members and anyone needing assistance with basic documents, medical costs, transportation or housing‑related expenses.',
    keywords: [
      'eligibility',
      'who',
      'qualified',
      'financial crisis',
      'low income',
      'unhoused',
      'documents'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  {
    question: 'Do I have to pay back assistance from the No Strings Attached Program?',
    answer:
      'No.  The No Strings Attached Program provides aid without obligations or repayment requirements.  Its goal is to help recipients stabilise without adding financial burden.',
    keywords: ['repay', 'loan', 'pay back', 'repayment'],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.9
  },
  // Community Safety Watch Program
  {
    question: 'What is the Community Safety Watch Program?',
    answer:
      'The Community Safety Watch Program is a neighbourhood‑led, non‑confrontational initiative that focuses on observation, reporting, prevention and community support in areas experiencing crime or suspicious activity.  It partners with local law enforcement and service providers and emphasises de‑escalation, legal compliance and the dignity of all residents.',
    keywords: [
      'community safety watch',
      'safety program',
      'neighbourhood',
      'crime',
      'watch',
      'de escalation',
      'reporting'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  {
    question: 'How does the Community Safety Watch Program support residents?',
    answer:
      'This program trains residents on safe observation and reporting techniques, collaborates with local law enforcement and service providers, provides community support resources and emphasises prevention, de‑escalation and respect for everyone’s rights.',
    keywords: [
      'support residents',
      'training',
      'report suspicious',
      'law enforcement',
      'resources',
      'prevention'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  // Talent Recruitment Program
  {
    question: 'What is the Talent Recruitment Program?',
    answer:
      'The Talent Recruitment Program seeks volunteers and professionals to amplify WAM Alliance’s mission.  Participants assist with social media marketing, donor engagement and sponsorship campaigns.  By bringing in fresh talent, the programme strengthens capacity to advocate for and build inclusive communities.',
    keywords: [
      'talent recruitment',
      'volunteer recruitment',
      'social media',
      'donor engagement',
      'sponsorship',
      'get involved',
      'volunteer opportunities'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  {
    question: 'What kind of skills are needed for the Talent Recruitment Program?',
    answer:
      'Individuals with skills in marketing, communication, fundraising or advocacy are encouraged to join.  The program provides opportunities to contribute expertise in social media, donor relations and outreach.',
    keywords: [
      'skills',
      'volunteer skills',
      'marketing',
      'fundraising',
      'communications',
      'outreach'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.8
  },
  // Techfist Global STEM Program Support
  {
    question: 'What is Techfist Global STEM Program Support?',
    answer:
      'Through a partnership with Techfist Global Inc, WAM Alliance is developing a digital ecosystem for its STEM program.  Techfist provides learning platforms, student engagement portals, data analytics, automation and scalable cloud infrastructure to democratise access to STEM education and support technology‑driven growth across communities.',
    keywords: [
      'techfist',
      'STEM program',
      'technology',
      'education',
      'digital platform',
      'data analytics'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  {
    question: 'Who benefits from Techfist Global STEM Program Support?',
    answer:
      'Students seeking accessible STEM education, community members interested in technology‑driven learning and educators participating in WAM’s STEM initiatives benefit from this program.  It helps democratise access to technology and supports growth through digital platforms.',
    keywords: ['students', 'learners', 'educators', 'STEM benefits', 'who benefits'],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.8
  },
  // Aden’s Roots Program
  {
    question: 'What is Aden’s Roots Program?',
    answer:
      'Aden’s Roots Program is a humanitarian initiative led by advocate Sireen Hamdi Beseiso in honour of her son Aden.  It supports displaced and injured Palestinians, especially children and families affected by war, through resources, advocacy and educational programmes.  The program emphasises compassion, resilience and empowerment.',
    keywords: [
      'aden',
      'adens roots',
      'roots program',
      'humanitarian',
      'palestine',
      'support displaced'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.9
  },
  {
    question: 'Who leads Aden’s Roots Program?',
    answer:
      'The programme is led by Palestinian American advocate Sireen Hamdi Beseiso, who named the initiative in honour of her son Aden and champions humanitarian support for displaced Palestinians.',
    keywords: ['sireen', 'hamdi', 'beseiso', 'lead', 'aden'],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  // Get Involved Program
  {
    question: 'What is the Get Involved Program?',
    answer:
      'The Get Involved Program encourages individuals to support WAM Alliance through volunteering, donating funds or supplies, partnering with the organisation or providing clothing and food donations.  It helps channel contributions into tangible impact and underscores that everyone can be part of change.',
    keywords: [
      'get involved',
      'donate',
      'volunteer',
      'partner',
      'food donation',
      'clothing donation'
    ],
    sourcePath: '/#programs-and-projects',
    confidenceBase: 0.85
  },
  // Trusted partners
  {
    question: 'Who are the trusted partners of WAM Alliance?',
    answer:
      'WAM Alliance partners with organisations such as the 2ND % 2ND Coalition, Restorative Health and Techfist Global Inc.  These partners offer specialised support—2ND % 2ND Coalition assists those in the Salt Lake City area, Restorative Health provides healthcare for the LGBTQ+ community and those seeking to improve quality of life and Techfist supplies technological solutions to amplify change and empower people.',
    keywords: [
      'trusted partners',
      'partners',
      'collaboration',
      '2ND % 2ND',
      'restorative health',
      'techfist',
      'coalition'
    ],
    sourcePath: '/#trusted-partners',
    confidenceBase: 0.85
  },
  {
    question: 'What is Techfist Global Inc. and how does it partner with WAM?',
    answer:
      'Techfist Global Inc. is a technology and innovation company that partners with WAM Alliance to drive digital solutions, build learning platforms, provide automation and data analytics and design scalable cloud infrastructure.  Through this partnership WAM can better deliver its STEM program and technology‑driven growth across communities.',
    keywords: ['techfist', 'techfist global', 'partner', 'technology partner'],
    sourcePath: '/#trusted-partners',
    confidenceBase: 0.85
  },
  {
    question: 'What is Restorative Health’s role with WAM Alliance?',
    answer:
      'Restorative Health is a healthcare provider that offers inclusive healthcare options for the LGBTQ+ community and those seeking to improve their quality of life.  It partners with WAM Alliance to support community members’ health and wellness.',
    keywords: [
      'restorative health',
      'partner',
      'healthcare',
      'LGBTQ',
      'quality of life'
    ],
    sourcePath: '/#trusted-partners',
    confidenceBase: 0.8
  },
  {
    question: 'What is the 2ND % 2ND Coalition?',
    answer:
      'The 2ND % 2ND Coalition is a nonprofit organisation that assists individuals in the Salt Lake City area.  It is one of WAM Alliance’s trusted partners, helping to provide localised support.',
    keywords: ['2nd % 2nd', 'second coalition', 'partner', 'salt lake'],
    sourcePath: '/#trusted-partners',
    confidenceBase: 0.75
  },
  // Leadership and board
  {
    question: 'Who leads WAM Alliance?',
    answer:
      'WAM Alliance is led by a Board of Directors composed of dedicated community advocates and professionals who contribute expertise in wellness, finance, advocacy and technology.  Board members include Tonya Jones Smith (President), Robert Smith (Vice President/CFO), Diane Jones (Director/Secretary) and Wajid Bhat (Engineering and technology leadership).',
    keywords: ['lead', 'board', 'directors', 'leadership', 'who runs'],
    sourcePath: '/#board-of-directors',
    confidenceBase: 0.85
  },
  {
    question: 'Who is Tonya Jones Smith and what is her role?',
    answer:
      'Tonya Jones Smith is the President of WAM Alliance and an accomplished nonprofit leader and suicide‑loss survivor.  With 30 years of multidisciplinary experience in behavioural health, holistic wellness, psychology, law, finance and software engineering, she founded WAM Alliance and develops trauma‑informed programs and strategic partnerships.  She also created the Love Me Teas herbal wellness brand and is authoring a memoir on trauma recovery.',
    keywords: ['tonya', 'tonya jones', 'president', 'founder', 'leader'],
    sourcePath: '/#tonya-bio',
    confidenceBase: 0.9
  },
  {
    question: 'What are Tonya Jones Smith’s qualifications and beliefs?',
    answer:
      'Tonya holds a BS in Computer Science and Mathematics from Westminster College, a Harvard Certificate in Constitutional Law and a Medicinal Herbalism certification.  She is pursuing a PTSD Hypnotherapy licence and is an Akashic Record Reader.  Her leadership philosophy is that every life holds intrinsic value and that holistic, evidence‑based approaches transform trauma into resilience.  She emphasises autonomy and self‑love.',
    keywords: ['tonya qualifications', 'education', 'certifications', 'philosophy'],
    sourcePath: '/#tonya-bio',
    confidenceBase: 0.9
  },
  {
    question: 'Who is Robert Smith and what is his role?',
    answer:
      'Robert Smith is the Vice President and Chief Financial Officer (CFO) of WAM Alliance.  He is an empathetic healer who uses personal experiences to help others and has lived in diverse cultures that taught him multiple paths to healing and happiness.  He leads with empathy and encourages others to find their own path to recovery.',
    keywords: ['robert', 'robert smith', 'vice president', 'cfo', 'leader'],
    sourcePath: '/#rob-bio',
    confidenceBase: 0.85
  },
  {
    question: 'What are Robert Smith’s areas of expertise?',
    answer:
      'Robert specialises in empathy and cross‑cultural healing, addiction recovery, trauma and self‑healing, suicide‑loss support and personalised healing methodologies.  He believes in collaboration and using knowledge to benefit all humans.',
    keywords: ['robert expertise', 'skills', 'addiction', 'empathy', 'healing'],
    sourcePath: '/#rob-bio',
    confidenceBase: 0.85
  },
  {
    question: 'Who is Diane Jones and what is her role?',
    answer:
      'Diane Jones serves as a Director and Secretary of WAM Alliance.  She is a suicide‑loss survivor, empath and energy reader.  Her background includes management studies and she is completing a BA in Business Management.  Diane emphasises self‑love and uses her lived experiences to help others navigate trauma and healing.',
    keywords: ['diane', 'diane jones', 'director', 'secretary'],
    sourcePath: '/#diane-bio',
    confidenceBase: 0.85
  },
  {
    question: 'What are Diane Jones’s philosophies on trauma and healing?',
    answer:
      'Diane believes trauma treatment should address the root causes rather than only symptoms.  She emphasises that medications alone do not heal and that people need choices and tools tailored to their lives.  She advocates removing stigma around suicide loss and addressing embedded trauma that leads to addiction and homelessness.',
    keywords: ['diane philosophy', 'trauma', 'healing', 'root causes'],
    sourcePath: '/#diane-bio',
    confidenceBase: 0.85
  },
  {
    question: 'Who is Wajid Bhat and what does he do?',
    answer:
      'Wajid Bhat is a Board Member specialising in engineering and technology leadership at WAM Alliance.  He is known for visionary and pragmatic leadership, bridging communication between stakeholders and delivering technology solutions.  His expertise includes strategic foresight, digital transformation, team development, emerging technology trends, problem solving and value delivery.',
    keywords: ['wajid', 'wajid bhat', 'engineering', 'technology leader'],
    sourcePath: '/#wajid-bio',
    confidenceBase: 0.9
  },
  // Volunteers
  {
    question: 'Who is Sireen Beseiso and what does she do at WAM Alliance?',
    answer:
      'Sireen Beseiso is a devoted mother, volunteer and humanitarian advocate originally from Gaza who lives in Utah with her son Aden and parents.  She is the project coordinator for the Aden’s Roots Program.  Sireen balances parenting with her commitment to justice, delivering life‑saving aid to families in Gaza and Egypt and raising awareness about the need for peace and compassion.  She leads with empathy, resilience and purpose and brings lived experience and cultural insight to WAM Alliance.',
    keywords: ['sireen', 'beseiso', 'volunteer', 'advocate', 'aden roots', 'gaza'],
    sourcePath: '/#volunteers',
    confidenceBase: 0.9
  },
  // Testimonials and success stories
  {
    question: 'Who are Staci and Mike and how did WAM Alliance help them?',
    answer:
      'Staci and her partner Mike were facing homelessness and needed a birth certificate for a housing application.  WAM Alliance ordered the certificate, covered application fees for several housing options and provided food support.  With this help they secured a home, and WAM continues to assist with dental care and food.  Staci and Mike credit WAM Alliance and founder Tonya for transforming their lives.',
    keywords: ['staci', 'mike', 'testimonial', 'success story', 'housing'],
    sourcePath: '/#testimonials',
    confidenceBase: 0.85
  },
  {
    question: 'What is Jamey and her family’s story?',
    answer:
      'Jamey and her family, residents of Salt Lake City and advocates for unhoused individuals, received cleaning and sanitation services from WAM Alliance during difficult times.  The organisation also provided legal support and helped prepare court documents.  Jamey now refers others to WAM Alliance and donates clothing in gratitude for the assistance.',
    keywords: ['jamey', 'family', 'success', 'cleaning', 'sanitation', 'legal support'],
    sourcePath: '/#testimonials',
    confidenceBase: 0.8
  },
  {
    question: 'What happened to Tyrell (Ty) and how did WAM Alliance support him?',
    answer:
      'Tyrell was found by WAM Alliance at age 17 living on the streets.  After experiencing neglect at a youth shelter, WAM provided temporary housing, clothes and necessities.  They helped him obtain a birth certificate, social security card and ID so he could work and complete his GED.  Tyrell saved up for driving school, gained a driver’s licence and passport, and now lives independently with a renewed sense of purpose.',
    keywords: ['tyrell', 'ty', 'testimonial', 'youth', 'shelter', 'identification'],
    sourcePath: '/#testimonials',
    confidenceBase: 0.85
  },
  {
    question: 'Who is Jay and how did WAM Alliance assist him?',
    answer:
      'Jay is a recovering addict and suicide survivor, an amputee with multiple medical conditions who had been homeless for over 20 years.  WAM Alliance helped him enter a medically vulnerable shelter in Sandy, Utah, provided food, clothes and assistance renewing his medical card and continues to support his journey off the streets.',
    keywords: ['jay', 'testimonial', 'recovering addict', 'amputee', 'medical card'],
    sourcePath: '/#testimonials',
    confidenceBase: 0.85
  },
  {
    question: 'What is Mercedes’s story and how did WAM Alliance help her?',
    answer:
      'Mercedes was staying in a youth shelter with absent parents and an abusive caretaker.  WAM Alliance provided her with a safe environment, care and support.  The organisation gave her the care she needed and continues to support her recovery.',
    keywords: ['mercedes', 'youth shelter', 'care', 'abusive', 'safe'],
    sourcePath: '/#testimonials',
    confidenceBase: 0.75
  },
  {
    question: 'What happened to Sean from Ohio and how did WAM Alliance assist him?',
    answer:
      'WAM Alliance found Sean in Ohio after he had been robbed and left with nothing.  Tonya and Rob provided him with a warm meal, a tent and essential items.  Their support inspired him to rebuild his life and regain his business and home.  Sean is grateful for their guidance and now moves forward with renewed hope.',
    keywords: ['sean', 'ohio', 'robbed', 'tent', 'helped'],
    sourcePath: '/#testimonials',
    confidenceBase: 0.8
  },
  {
    question: 'Who is Carter and how did WAM Alliance help him?',
    answer:
      'Carter was a young man struggling with PTSD and homelessness.  WAM Alliance offered him a safe space during his first winter in Utah, provided counselling, mentorship, resume assistance and gas money.  This support enabled Carter to secure employment and heal emotionally, allowing him to move forward with confidence.',
    keywords: ['carter', 'testimonial', 'PTSD', 'mentor', 'gas money'],
    sourcePath: '/#testimonials',
    confidenceBase: 0.75
  },
  // Additional general FAQs about donors and donations
  {
    question: 'How are donations used by WAM Alliance?',
    answer:
      'Donations to WAM Alliance directly support programmes such as emergency assistance, community safety initiatives, technology education and humanitarian aid.  The organisation emphasises that 100% of donations go directly to the people they help and there are no paid Board Directors.  Contributions help provide essential services and advocacy without conditions.',
    keywords: [
      'donations',
      'funds',
      'what for',
      'money used',
      'tax deductible'
    ],
    sourcePath: '/#donate-now',
    confidenceBase: 0.85
  },
  {
    question: 'Are donations to WAM Alliance tax deductible?',
    answer:
      'Yes.  WAM Alliance is a registered 501(c)(3) nonprofit and all donations are tax‑deductible to the fullest extent of the law.  The organisation does not have paid board directors and commits 100% of every donation to support individuals in need.',
    keywords: ['tax deductible', '501c3', 'nonprofit', 'donations'],
    sourcePath: '/#donate-now',
    confidenceBase: 0.85
  },
  {
    // CHANGED: new FAQ directing users to Donate Now.
    question: 'How can I donate to WAM Alliance?',
    answer:
      'You can donate by clicking the “Donate Now” button on the WAM Alliance website to reach the donation page.  WAM Alliance accepts donations to support its mission and community programs.',
    keywords: ['donate', 'donate now', 'donation button', 'give', 'support'],
    sourcePath: '/#donate-now',
    confidenceBase: 0.9
  },
  {
    question: 'Who are WAM Alliance’s donors?',
    answer:
      'WAM Alliance relies largely on personal donations and company sponsors.  Personal donors play a crucial role in sustaining the organisation, and WAM honours each supporter’s contribution.  There is also a partners section recognising companies that support WAM.',
    keywords: ['donors', 'who donates', 'sponsors', 'partners', 'donor list'],
    sourcePath: '/#donors',
    confidenceBase: 0.75
  },
  // Need help now (crisis page)
  {
    question: 'What should I do if I need help right now?',
    answer:
      'If you need help right now, WAM Alliance encourages you to call 385‑414‑4144 and a team member will reply within 24–48 hours.  If you are in immediate danger, call 911 for emergency services or dial 988 for the National Suicide Prevention Lifeline.  WAM Alliance offers compassionate support and will connect you with resources when it is safe.',
    keywords: [
      'help now',
      'immediate',
      'crisis',
      'need help',
      '911',
      '988',
      'support'
    ],
    sourcePath: '/#need-help-now',
    confidenceBase: 0.9
  },
  {
    question: 'How long does it take for WAM Alliance to respond to requests?',
    answer:
      'When you reach out to WAM Alliance via phone or the contact form, a team member will typically respond within 24–48 hours.  In urgent situations you should contact emergency services directly.',
    keywords: ['response time', 'how long', 'reply', 'wait time'],
    sourcePath: '/#need-help-now',
    confidenceBase: 0.8
  },
  {
    question: 'What information do I need to provide when requesting help?',
    answer:
      'When you fill out the contact form, you will be asked for your name, age, email, phone number, location and subject.  You can describe what you need in detail and must acknowledge consent for WAM Alliance to contact you.  Providing accurate information helps the team connect you to appropriate resources.',
    keywords: ['information', 'what needed', 'contact form', 'name', 'age'],
    sourcePath: '/#need-help-now',
    confidenceBase: 0.8
  },
  {
    question: 'Does WAM Alliance provide crisis or emergency services?',
    answer:
      'WAM Alliance provides guidance, compassionate support and referrals but is not a substitute for emergency services.  If you are in immediate danger or need urgent medical assistance, call 911 or another emergency number.  WAM Alliance responds to non‑emergency inquiries within 24–48 hours.',
    keywords: ['crisis services', 'emergency', '911', 'urgent', 'medical assistance'],
    sourcePath: '/#need-help-now',
    confidenceBase: 0.85
  },
  // Contact information and general inquiries
  {
    question: 'How can I contact WAM Alliance?',
    answer:
      'You can contact WAM Alliance through the website contact form or by calling 385‑414‑4144.  The contact form asks for basic information and a message describing your needs.  A team member will respond within 24–48 hours.',
    keywords: ['contact', 'reach out', 'phone', 'email', 'form'],
    sourcePath: '/#contact',
    confidenceBase: 0.85
  },
  {
    question: 'What is the address of WAM Alliance?',
    answer:
      'WAM Alliance is based in Sandy, Utah, United States.  Mailing and office addresses may vary; check the website for current contact information.',
    keywords: ['address', 'location', 'where'],
    sourcePath: '/#contact',
    confidenceBase: 0.7
  },
  // General wellness and emotional support
  {
    question: 'What can I do if I feel lonely or isolated?',
    answer:
      'Feeling lonely or isolated is valid.  Try reaching out to someone you trust, joining a community group, engaging in meaningful activities or talking about how you feel.  Connecting with others and building supportive relationships can help you feel less alone.',
    keywords: ['lonely', 'isolated', 'alone', 'what to do'],
    confidenceBase: 0.75
  },
  {
    question: 'What should I do when I feel overwhelmed or stressed?',
    answer:
      'If you feel overwhelmed or stressed, slow down and focus on your breathing, break tasks into small steps and ask for support.  It’s okay to take a moment for yourself and seek help from friends, family or professionals.',
    keywords: ['overwhelmed', 'stressed', 'stress', 'what to do'],
    confidenceBase: 0.75
  },
  {
    question: 'What is self‑determination and why is it important?',
    answer:
      'Self‑determination is the ability to make choices about your own life, express your needs and pursue goals that matter to you.  It’s important because it empowers you to take control of your path and make decisions that align with your values and wellbeing.',
    keywords: ['self determination', 'empowerment', 'control', 'choices'],
    confidenceBase: 0.7
  },
  {
    question: 'Where can I find food if I’m struggling with hunger?',
    answer:
      'If you’re facing hunger or food insecurity, contact WAM Alliance for guidance.  They can connect you to local food assistance programmes.  Additionally, community food pantries and public assistance programmes may provide immediate support.',
    keywords: ['hunger', 'food insecurity', 'hungry', 'need food'],
    confidenceBase: 0.8
  }
];
