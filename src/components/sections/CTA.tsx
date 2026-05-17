import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Scale, TrendingUp, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function CTA() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress: scrollY1 } = useScroll({ target: ref1, offset: ["start end", "end start"] });
  const { scrollYProgress: scrollY2 } = useScroll({ target: ref2, offset: ["start end", "end start"] });
  
  const y1 = useTransform(scrollY1, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollY2, [0, 1], ["0%", "20%"]);
  const { t, language } = useLanguage();

  return (
    <section className="w-full bg-background overflow-hidden relative" id="contacto">
      
      {/* Featured Articles Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh]">
        {/* Dark Block - Strategic Advisory */}
        <div className="bg-primary text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group">
            {/* Animated Background Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] rounded-full border border-white/5 pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[20%] -left-[20%] w-[60%] h-[60%] rounded-full border border-white/5 pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-[1px] bg-sand"></div>
                 <span className="text-sand text-[10px] font-bold uppercase tracking-[0.2em]">{t('cta.kicker1')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                {t('cta.title1')}
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed max-w-md">
                {t('cta.desc1')}
              </p>
              <a href="#booking-modal" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-sand hover:text-white transition-colors group/btn">
                {t('cta.link1')} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-12 bottom-12 bg-white/10 backdrop-blur-md border border-white/10 p-5 items-center gap-4 rounded-lg hidden lg:flex shadow-2xl"
            >
              <div className="bg-sand text-primary p-3 rounded-full">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs text-white/70 uppercase tracking-wider">{language === 'en' ? 'Long-term' : 'A largo plazo'}</p>
                <p className="text-sm font-bold text-white">{language === 'en' ? 'Value Creation' : 'Creación de Valor'}</p>
              </div>
            </motion.div>
        </div>
        {/* Parallax Image */}
        <div ref={ref1} className="relative overflow-hidden min-h-[400px] md:min-h-full">
           <motion.img 
             style={{ y: y1, scale: 1.1 }}
             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2560"
             alt="Cierre de acuerdo corporativo"
             className="absolute inset-0 -top-20 -bottom-20 w-full h-[140%] object-cover object-center filter brightness-90 group-hover:brightness-100 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] flex-col-reverse md:flex-row min-h-[60vh]">
        {/* Parallax Image Left */}
        <div ref={ref2} className="relative overflow-hidden min-h-[400px] md:min-h-full order-2 lg:order-1 group">
           <motion.img 
             style={{ y: y2, scale: 1.1 }}
             src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2560"
             alt="Asesoría legal confidencial"
             className="absolute inset-0 -top-20 -bottom-20 w-full h-[140%] object-cover object-center filter grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-sand/10 mix-blend-overlay pointer-events-none" />
        </div>
        {/* Sand Block - Immediate Resolution */}
        <div className="bg-sand text-primary p-12 md:p-24 flex flex-col justify-center order-1 lg:order-2 relative overflow-hidden">
            {/* Animated lines background */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-primary/10" />
            <motion.div 
              style={{ y: useTransform(scrollY2, [0, 1], ["0%", "500%"]) }}
              className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-primary/10 hidden md:block" 
            />
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-[1px] bg-primary"></div>
                 <span className="text-primary/70 text-[10px] font-bold uppercase tracking-[0.2em]">{t('cta.kicker2')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                {t('cta.title2')}
              </h2>
              
              <a href="#booking-modal" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-primary hover:text-primary/70 transition-colors group/btn mb-12">
                {t('cta.link2')} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>

              {/* Action Pulse feature */}
              <div className="mt-8 pt-8 border-t border-primary/20 flex items-center gap-6">
                 <div className="relative flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-12 h-12 bg-primary/20 rounded-full"
                    />
                    <div className="w-10 h-10 bg-primary text-sand rounded-full flex items-center justify-center relative z-10">
                      <ShieldAlert size={18} />
                    </div>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm tracking-tight">{language === 'en' ? '24/7 Rapid Response' : 'Respuesta Rápida 24/7'}</h5>
                    <p className="text-xs text-primary/70">{language === 'en' ? 'For urgent corporate matters' : 'Para asuntos corporativos urgentes'}</p>
                 </div>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Main CTA Section for Lead Gen */}
      <div id="contacto-form" className="bg-primary-container text-on-primary py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-headline-sm md:text-headline-md font-serif mb-6 text-white">
              {t('cta.final.title')}
            </h2>
            <div className="w-16 h-1 bg-sand mx-auto mb-8" />
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 font-light">
              {t('cta.final.desc')}
            </p>
            
            <a
              href="#booking-modal"
              className="inline-flex items-center justify-center gap-3 bg-sand text-primary text-xs font-bold uppercase tracking-[0.15em] px-12 py-5 rounded-full hover:bg-sand-hover active:bg-sand/90 hover:scale-[1.05] active:scale-95 transition-all mb-8 shadow-2xl hover:shadow-xl duration-300"
            >
              {t('cta.final.cta')} <ArrowRight size={16} />
            </a>
            
            <p className="text-sand/60 mt-4 tracking-widest font-bold text-xs uppercase">
              {t('cta.final.note')}
            </p>
          </motion.div>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <Scale size={400} />
        </div>
      </div>

    </section>
  );
}
