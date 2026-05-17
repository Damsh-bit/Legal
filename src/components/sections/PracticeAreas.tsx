import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Gavel, Scale, Handshake, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceAccordionItem: React.FC<{ item: { title: string, desc: string }, index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-surface-container-high relative"
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between py-4 group cursor-pointer hover:text-sand-hover transition-colors"
      >
        <span className="text-sm font-medium text-primary group-hover:text-sand-hover transition-colors">{item.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={14} className="text-sand" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-on-surface-variant pb-4 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PracticeAreas() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const { t } = useLanguage();

  const services = [
    {
      icon: Gavel,
      title: t('practice.card1.title'),
      description: t('practice.card1.desc'),
    },
    {
      icon: Scale,
      title: t('practice.card2.title'),
      description: t('practice.card2.desc'),
    },
    {
      icon: Handshake,
      title: t('practice.card3.title'),
      description: t('practice.card3.desc'),
    },
  ];

  const listServices = [
    { title: t('practice.list1'), desc: t('practice.list1.desc') },
    { title: t('practice.list2'), desc: t('practice.list2.desc') },
    { title: t('practice.list3'), desc: t('practice.list3.desc') },
    { title: t('practice.list4'), desc: t('practice.list4.desc') },
    { title: t('practice.list5'), desc: t('practice.list5.desc') },
    { title: t('practice.list6'), desc: t('practice.list6.desc') },
    { title: t('practice.list7'), desc: t('practice.list7.desc') },
    { title: t('practice.list8'), desc: t('practice.list8.desc') }
  ];

  return (
    <section ref={containerRef} id="servicios" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-container-max mx-auto px-5 md:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-4 mb-4">
               <div className="w-8 h-[1px] bg-sand"></div>
               <span className="text-secondary-fixed-variant text-[10px] font-bold uppercase tracking-[0.2em]">{t('practice.kicker')}</span>
            </div>
            <h2 className="text-headline-md text-primary">
              {t('practice.title')}
            </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:w-[40%] pt-6"
          >
             <p className="text-on-surface-variant leading-relaxed">
               {t('practice.subtitle')}
             </p>
          </motion.div>
        </div>

        {/* Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface-container-low p-10 flex flex-col items-start border border-surface-container-high hover:border-sand hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-white p-3 rounded-md shadow-sm mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 text-sm flex-grow">
                  {service.description}
                </p>
                <a href="#booking-modal" className="flex items-center gap-2 text-primary font-semibold text-xs tracking-widest uppercase hover:text-sand-hover transition-colors group-hover:gap-3">
                  {t('practice.readMore')} <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Parallax Divider Image */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden mb-24 rounded-sm">
           <motion.div 
             style={{ y: yParallax }}
             className="absolute inset-0 -top-[20%] -bottom-[20%] w-full h-[140%]"
           >
             <img 
               src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2560" 
               alt="Biblioteca legal y símbolos de justicia" 
               className="w-full h-full object-cover"
             />
           </motion.div>
           <div className="absolute inset-0 bg-primary/20"></div>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="text-white text-3xl md:text-5xl font-serif text-center px-4 drop-shadow-lg">{t('practice.divider')}</h3>
           </div>
        </div>

        {/* Expertise List Section */}
        <div className="text-center mb-16">
           <h3 className="text-headline-sm text-primary mb-2">{t('practice.vision')}</h3>
           <p className="text-xs uppercase tracking-widest text-on-surface-variant">{t('practice.areas')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 items-start">
          {listServices.map((item, index) => (
            <ServiceAccordionItem key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
