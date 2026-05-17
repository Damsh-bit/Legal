import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ParallaxImage({ src, alt }: { src: string, alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="aspect-[4/5] w-full overflow-hidden bg-surface-variant relative">
      <motion.img
        style={{ y, scale: 1.2 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform origin-center mix-blend-multiply opacity-90 transition-opacity hover:opacity-100 duration-500"
      />
    </div>
  )
}

export function Team() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Carlos Mendoza',
      role: t('team.m1.role'),
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Ana Sofía Ríos',
      role: t('team.m2.role'),
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Javier Navarro',
      role: t('team.m3.role'),
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Elena Silva',
      role: t('team.m4.role'),
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Roberto Cárdenas',
      role: t('team.m5.role'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="equipo" className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-container-max mx-auto px-5 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-4 mb-4">
               <div className="w-8 h-[1px] bg-sand"></div>
               <span className="text-secondary-fixed-variant text-[10px] font-bold uppercase tracking-[0.2em]">{t('team.kicker')}</span>
            </div>
            <h2 className="text-headline-md text-primary">
              {t('team.title')}
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
               {t('team.subtitle')}
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group flex flex-col items-start cursor-pointer"
            >
              <div className="w-full mb-6">
                <ParallaxImage src={member.image} alt={`Abogado especialista: ${member.name}`} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {member.role}
              </p>
            </motion.div>
          ))}

          {/* Join the Team Block */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group flex flex-col items-center justify-center bg-primary text-white p-12 aspect-[4/5] md:aspect-auto"
          >
             <div className="w-12 h-12 rounded-full border border-sand/50 flex items-center justify-center mb-8">
                <ArrowRight size={20} className="text-sand group-hover:translate-x-1 transition-transform" />
             </div>
             <h3 className="text-2xl font-serif mb-4 text-center">{t('team.join.title')}</h3>
             <p className="text-white/70 text-center text-sm mb-8 leading-relaxed">
               {t('team.join.desc')}
             </p>
             <a
              href="#booking-modal"
              className="inline-flex items-center justify-center bg-sand text-primary text-xs font-bold uppercase tracking-[0.15em] px-8 py-3 rounded-full hover:bg-sand-hover focus:scale-95 transition-all shadow-md"
            >
              {t('team.join.cta')}
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
