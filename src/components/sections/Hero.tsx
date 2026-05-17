import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const { t } = useLanguage();

  return (
    <section ref={containerRef} className="w-full bg-background pt-32 md:pt-48 pb-16 md:pb-24 relative">
      <div className="max-w-container-max mx-auto px-5 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:w-[60%]"
          >
            <h1 className="text-display-lg text-primary">
              {t('hero.title')}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:w-[35%] flex flex-col items-start"
          >
            <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-sm overflow-hidden group">
          <motion.div 
            style={{ y: yParallax }} 
            className="absolute inset-0 -top-[20%] -bottom-[20%] w-full h-[140%]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2560"
              alt="Oficinas modernas del bufete de abogados corporativos"
              className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
          </motion.div>

          <motion.div 
             style={{ y: yParallaxFast }}
             className="absolute bottom-8 left-8 md:bottom-16 md:left-16 bg-white/95 backdrop-blur-md p-8 shadow-2xl max-w-xs border-l-4 border-sand"
          >
            <div className="text-4xl text-primary font-serif font-bold mb-2">{t('hero.stats.percentage')}</div>
            <h3 className="text-sm uppercase tracking-widest font-semibold text-primary mb-2">{t('hero.stats.title')}</h3>
            <p className="text-sm text-on-surface-variant">{t('hero.stats.subtitle')}</p>
          </motion.div>

          <div className="absolute right-8 bottom-8 flex">
             <a
              href="#booking-modal"
              className="group relative inline-flex items-center gap-3 bg-sand text-primary text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-sand-hover active:bg-sand/90 hover:scale-[1.02] active:scale-95 transition-all shadow-xl duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <Calendar size={16} className="relative z-10 group-hover:-rotate-12 transition-transform duration-300" />
              <span className="relative z-10">{t('hero.cta')}</span> 
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
      
      {/* Logos Strip Banner below Hero */}
      <div className="w-full bg-primary py-8 mt-16 overflow-hidden">
        <div className="max-w-container-max mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-sand/70 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
             {t('hero.trusted')}
           </div>
           <div className="flex gap-8 md:gap-16 items-center opacity-60">
             {/* Abstract tech/corp logos representations */}
             <div className="text-on-primary font-serif italic text-xl font-bold">AcmeCorp</div>
             <div className="text-on-primary font-sans font-black text-xl tracking-tighter">GLOBAL</div>
             <div className="text-on-primary font-serif text-xl border-b-2 border-on-primary">Synergy</div>
             <div className="text-on-primary font-sans font-bold text-xl uppercase tracking-widest">NEXUS</div>
           </div>
        </div>
      </div>
    </section>
  );
}
