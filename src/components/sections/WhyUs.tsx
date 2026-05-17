import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function WhyUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const { t } = useLanguage();

  return (
    <section ref={containerRef} className="w-full bg-primary overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        <div className="px-5 md:px-16 py-24 md:py-32 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sand text-6xl font-serif leading-none mb-6">"</div>
            <h2 className="text-headline-sm md:text-headline-md text-white mb-8">
              {t('why.quote')}
            </h2>
            <p className="text-white/70 font-light leading-relaxed mb-12 max-w-md">
              {t('why.desc')}
            </p>
            
            <div className="mt-8">
               <p className="text-sand text-xs font-bold uppercase tracking-widest mb-1">{t('why.authorRole')}</p>
               <p className="text-white font-serif text-xl">{t('why.authorName')}</p>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[60vh] lg:h-auto overflow-hidden">
          <motion.div 
            style={{ y: yParallax }}
            className="absolute inset-0 -top-20 -bottom-20 w-full h-[140%]"
          >
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=2560"
              alt="Cliente corporativo satisfecho"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
