import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.schedule': 'Schedule Consultation',
    
    // Hero
    'hero.title': 'Corporate Law Firm for your Company.',
    'hero.subtitle': 'Strategic and results-oriented legal advice. We protect the assets and regulatory future of your company through specialized legal services nationally and internationally.',
    'hero.stats.percentage': '+95%',
    'hero.stats.title': 'Legal Success Cases',
    'hero.stats.subtitle': 'We maximize corporate opportunities with legal risk mitigation.',
    'hero.cta': 'Schedule Consultation',
    'hero.trusted': 'Trusted by leaders',
    
    // Practice Areas
    'practice.kicker': 'Legal Services for Companies',
    'practice.title': 'Expert Corporate Law Firm',
    'practice.subtitle': 'Ensure the success of your operations. We offer comprehensive legal advice, preventing contingencies and facilitating the expansion of your business with tailored legal strategies.',
    'practice.card1.title': 'Corporate & M&A',
    'practice.card1.desc': 'Expert legal advice for restructuring, mergers, and acquisitions. Protect your investment with the best corporate lawyers.',
    'practice.card2.title': 'Strategic Litigation',
    'practice.card2.desc': 'Relentless defense in commercial disputes. We safeguard the interests and reputation of your company before any court.',
    'practice.card3.title': 'Contracts & Negotiations',
    'practice.card3.desc': 'Legal shielding through rigorous drafting and negotiation of highly complex commercial agreements.',
    'practice.readMore': 'Consult Case',
    'practice.divider': 'Guaranteed Legal Excellence',
    'practice.vision': 'Vision & Expertise',
    'practice.areas': 'Areas of Legal Specialization',
    'practice.list1': 'Intellectual Property',
    'practice.list1.desc': 'We protect and enforce your patents, trademarks, copyrights, and trade secrets to ensure your innovations remain secure and profitable.',
    'practice.list2': 'Corporate Labor Law',
    'practice.list2.desc': 'Guidance on labor compliance, executive compensation, employment contracts, and representation in employment-related disputes.',
    'practice.list3': 'Regulatory Compliance',
    'practice.list3.desc': 'Proactive advice to ensure your company meets all local and international regulatory frameworks and industry-specific standards.',
    'practice.list4': 'Capital Markets',
    'practice.list4.desc': 'Advising on equity and debt offerings, IPOs, and compliance with securities laws worldwide.',
    'practice.list5': 'Asset Protection',
    'practice.list5.desc': 'Structuring robust corporate governance and asset holding mechanisms to shield core assets against potential claims or disputes.',
    'practice.list6': 'Tax Planning',
    'practice.list6.desc': 'Strategic tax optimization and corporate structuring to reduce financial liabilities and ensure multijurisdictional compliance.',
    'practice.list7': 'Shareholder Disputes',
    'practice.list7.desc': 'Expert mediation and litigation regarding breach of fiduciary duty, minority shareholder rights, and partnership conflicts.',
    'practice.list8': 'Risk Mitigation',
    'practice.list8.desc': 'Comprehensive auditing and risk assessment services to pre-emptively identify and address potential legal and operational liabilities.',
    
    // Why Us
    'why.quote': 'The legal protection every company needs to grow with confidence and security.',
    'why.desc': 'Their team of corporate lawyers managed to resolve our most complex commercial disputes. The legal advice and level of commitment are truly exceptional. An invaluable strategic ally.',
    'why.authorRole': 'Regional CEO',
    'why.authorName': 'Carlos Mendoza',
    
    // Testimonials
    'test.google': 'Our Clients on Google',
    'test.based': 'Based on 128 reviews',
    'test1.name': 'Alberto Ruiz',
    'test1.content': '"Excellent corporate service. They advised us during a complex merger with complete professionalism and clarity. Highly recommended."',
    'test1.date': '2 weeks ago',
    'test2.name': 'Grupo Innova',
    'test2.content': '"The litigation team demonstrated absolute mastery of the case. Their strategy was brilliant and we achieved a favorable result in record time."',
    'test2.date': '1 month ago',
    'test3.name': 'Tech Solutions LA',
    'test3.content': '"Our go-to lawyers for all intellectual property matters. Fast, efficient, and always ready to resolve our doubts."',
    'test3.date': '1 month ago',
    'test4.name': 'Estudio G&A',
    'test4.content': '"The legal audit they performed prevented millionaire contingencies. Their long-term vision and attention to detail are exceptional."',
    'test4.date': '2 months ago',
    'test5.name': 'Constructora Litoral',
    'test5.content': '"They resolved a complex contractual dispute with one of our main suppliers without the need to go to court. All in an agile and efficient manner."',
    'test5.date': '3 months ago',
    
    // Team
    'team.kicker': 'Law Firm',
    'team.title': 'Legal Specialists at your Disposal',
    'team.subtitle': 'Our partners and associates combine decades of experience in corporate transactions and risk prevention. We protect your company\'s assets with rigor and exclusivity.',
    'team.m1.role': 'Managing Partner - Corporate',
    'team.m2.role': 'Partner - Complex Litigation',
    'team.m3.role': 'Partner - Labor Compliance',
    'team.m4.role': 'Senior Associate - IP',
    'team.m5.role': 'Associate - Contracts',
    'team.join.title': 'Protect your Company Today',
    'team.join.desc': 'Leave your legal matters in the hands of experts. Secure the future of your business.',
    'team.join.cta': 'Contact Lawyers',
    
    // CTA
    'cta.kicker1': 'Strategic Advisory',
    'cta.title1': 'Protecting the Interests and Assets of your Company',
    'cta.desc1': 'Anticipate legal risks and ensure the growth of your business with our team of experts in corporate legislation and conflict mitigation.',
    'cta.link1': 'Request Assessment',
    'cta.kicker2': 'Immediate Resolution',
    'cta.title2': 'Disputes and Litigation Resolved Efficiently',
    'cta.link2': 'Case Evaluation',
    'cta.final.title': 'Ready to Secure your Company\'s Future?',
    'cta.final.desc': 'Schedule an initial consultation without commitment. Our team of partners will analyze your situation to design a legal strategy tailored to your corporate goals.',
    'cta.final.cta': 'Schedule Free Consultation',
    'cta.final.note': 'Response in less than 24 hours | Maximum confidentiality',
    
    // Footer
    'footer.desc': 'Solving the most critical legal challenges for market-leading companies.',
    'footer.firm': 'Firm',
    'footer.about': 'About',
    'footer.team': 'Our Team',
    'footer.news': 'News',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.services': 'Services',
    'footer.corporate': 'Corporate',
    'footer.finance': 'Finance',
    'footer.litigation': 'Litigation & Disputes',
    'footer.ip': 'Intellectual Property',
    'footer.offices': 'Offices',
    'footer.spain': 'Spain',
    'footer.privacy': 'Privacy Policies',
    'footer.legal': 'Legal Terms',
    'footer.madeby': 'Made by'
  },
  es: {
    // Nav
    'nav.services': 'Servicios',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    'nav.schedule': 'Agendar Consulta',
    
    // Hero
    'hero.title': 'Despacho de Abogados Corporativos para su Empresa.',
    'hero.subtitle': 'Asesoría legal estratégica y orientada a resultados. Protegemos el patrimonio y el futuro normativo de su empresa mediante servicios jurídicos especializados a nivel nacional e internacional.',
    'hero.stats.percentage': '+95%',
    'hero.stats.title': 'Casos de Éxito Legal',
    'hero.stats.subtitle': 'Maximizamos oportunidades corporativas con mitigación de riesgos legales.',
    'hero.cta': 'Agendar Consulta',
    'hero.trusted': 'Con la confianza de líderes',
    
    // Practice Areas
    'practice.kicker': 'Servicios Legales para Empresas',
    'practice.title': 'Despacho de Abogados Expertos en Derecho Corporativo',
    'practice.subtitle': 'Asegure el éxito de sus operaciones. Ofrecemos asesoramiento legal integral, previniendo contingencias y facilitando la expansión de su negocio con estrategias jurídicas a medida.',
    'practice.card1.title': 'Corporativo y M&A',
    'practice.card1.desc': 'Asesoría legal experta para reestructuraciones, fusiones y adquisiciones. Proteja su inversión con los mejores abogados corporativos.',
    'practice.card2.title': 'Litigación Estratégica',
    'practice.card2.desc': 'Defensa implacable en disputas comerciales. Salvaguardamos los intereses y la reputación de su empresa ante cualquier tribunal.',
    'practice.card3.title': 'Contratos y Negociaciones',
    'practice.card3.desc': 'Blindaje legal mediante la redacción y negociación rigurosa de acuerdos comerciales de alta complejidad.',
    'practice.readMore': 'Consultar Caso',
    'practice.divider': 'Excelencia Legal Garantizada',
    'practice.vision': 'Visión y Experiencia',
    'practice.areas': 'Áreas de Especialización Jurídica',
    'practice.list1': 'Propiedad Intelectual',
    'practice.list1.desc': 'Protegemos y hacemos valer sus patentes, marcas registradas, derechos de autor y secretos comerciales para garantizar que sus innovaciones sigan siendo seguras y rentables.',
    'practice.list2': 'Derecho Laboral Empresarial',
    'practice.list2.desc': 'Asesoría en cumplimiento laboral, compensación de ejecutivos, contratos de trabajo y representación en disputas relacionadas con el empleo.',
    'practice.list3': 'Cumplimiento Normativo',
    'practice.list3.desc': 'Asesoramiento proactivo para garantizar que su empresa cumpla con todos los marcos regulatorios locales e internacionales y los estándares específicos de la industria.',
    'practice.list4': 'Mercados de Capitales',
    'practice.list4.desc': 'Asesoramiento en ofertas de acciones y deudas, OPI y cumplimiento de las leyes de valores a nivel mundial.',
    'practice.list5': 'Protección Patrimonial',
    'practice.list5.desc': 'Estructuración de mecanismos sólidos de gobierno corporativo y tenencia de activos para proteger los activos principales contra posibles reclamos o disputas.',
    'practice.list6': 'Planificación Fiscal',
    'practice.list6.desc': 'Optimización fiscal estratégica y estructuración corporativa para reducir pasivos financieros y garantizar el cumplimiento multijurisdiccional.',
    'practice.list7': 'Disputas Societarias',
    'practice.list7.desc': 'Mediación y litigio de expertos sobre el incumplimiento del deber fiduciario, los derechos de los accionistas minoritarios y los conflictos de asociación.',
    'practice.list8': 'Mitigación de Riesgos',
    'practice.list8.desc': 'Servicios integrales de auditoría y evaluación de riesgos para identificar y abordar de forma preventiva posibles responsabilidades legales y operativas.',
    
    // Why Us
    'why.quote': 'La protección legal que toda empresa necesita para crecer con confianza y seguridad.',
    'why.desc': 'Su equipo de abogados corporativos logró resolver nuestras disputas comerciales más complejas. La asesoría jurídica y el nivel de compromiso es verdaderamente excepcional. Un aliado estratégico invaluable.',
    'why.authorRole': 'CEO Regional',
    'why.authorName': 'Carlos Mendoza',
    
    // Testimonials
    'test.google': 'Nuestros Clientes en Google',
    'test.based': 'Basado en 128 reseñas',
    'test1.name': 'Alberto Ruiz',
    'test1.content': '"Excelente servicio en materia corporativa. Nos asesoraron durante una fusión compleja con total profesionalismo y claridad. Muy recomendables."',
    'test1.date': 'Hace 2 semanas',
    'test2.name': 'Grupo Innova',
    'test2.content': '"El equipo de litigación demostró un dominio absoluto del caso. Su estrategia fue brillante y logramos un resultado favorable en tiempo récord."',
    'test2.date': 'Hace 1 mes',
    'test3.name': 'Tech Solutions LA',
    'test3.content': '"Nuestros abogados de cabecera para todos los temas de propiedad intelectual. Rápidos, eficientes y siempre dispuestos a resolver nuestras dudas."',
    'test3.date': 'Hace 1 mes',
    'test4.name': 'Estudio G&A',
    'test4.content': '"La auditoría legal que realizaron previno contingencias millonarias. Su visión a largo plazo y atención al detalle son excepcionales."',
    'test4.date': 'Hace 2 meses',
    'test5.name': 'Constructora Litoral',
    'test5.content': '"Resolvieron una disputa contractual compleja con uno de nuestros principales proveedores sin necesidad de llegar a tribunales. Todo de forma ágil y eficiente."',
    'test5.date': 'Hace 3 meses',
    
    // Team
    'team.kicker': 'Bufete de Abogados',
    'team.title': 'Especialistas Legales a su Disposición',
    'team.subtitle': 'Nuestros socios y asociados combinan décadas de experiencia en transacciones corporativas y prevención de riesgos. Protegemos el patrimonio de su empresa con rigor y exclusividad.',
    'team.m1.role': 'Socio Director - Corporativo',
    'team.m2.role': 'Socia - Litigación Compleja',
    'team.m3.role': 'Socio - Cumplimiento Laboral',
    'team.m4.role': 'Asociada Mayor - Propiedad Intelectual',
    'team.m5.role': 'Asociado - Contratos y Negociaciones',
    'team.join.title': 'Proteja su Empresa Hoy',
    'team.join.desc': 'Deje sus asuntos jurídicos en manos de expertos. Asegure el futuro de su negocio.',
    'team.join.cta': 'Contactar Abogados',
    
    // CTA
    'cta.kicker1': 'Asesoría Estratégica',
    'cta.title1': 'Protegiendo los Intereses y el Patrimonio de su Empresa',
    'cta.desc1': 'Anticípese a los riesgos legales y asegure el crecimiento de su negocio con nuestro equipo de expertos en legislación corporativa y mitigación de conflictos.',
    'cta.link1': 'Solicitar Diagnóstico',
    'cta.kicker2': 'Resolución Inmediata',
    'cta.title2': 'Disputas y Litigios Resueltos con Eficiencia',
    'cta.link2': 'Evaluación de Caso',
    'cta.final.title': '¿Listo para Asegurar el Futuro de su Empresa?',
    'cta.final.desc': 'Agende una consulta inicial sin compromiso. Nuestro equipo de socios analizará su situación para diseñar una estrategia jurídica a la medida de sus objetivos corporativos.',
    'cta.final.cta': 'Agendar Consulta Gratuita',
    'cta.final.note': 'Respuesta en menos de 24 horas | Máxima confidencialidad',
    
    // Footer
    'footer.desc': 'Resolviendo los desafíos legales más críticos para las empresas que lideran el mercado.',
    'footer.firm': 'Firma',
    'footer.about': 'Acerca de',
    'footer.team': 'Nuestro Equipo',
    'footer.news': 'Noticias',
    'footer.careers': 'Carreras',
    'footer.contact': 'Contactar',
    'footer.services': 'Servicios',
    'footer.corporate': 'Corporativo',
    'footer.finance': 'Finanzas',
    'footer.litigation': 'Litigios y Disputas',
    'footer.ip': 'Propiedad Intelectual',
    'footer.offices': 'Oficinas',
    'footer.spain': 'España',
    'footer.privacy': 'Políticas de Privacidad',
    'footer.legal': 'Términos Legales',
    'footer.madeby': 'Creado por'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
