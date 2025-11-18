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