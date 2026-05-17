import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const testimonials = [
  {
    initial: 'A',
    nameKey: 'test1.name',
    contentKey: 'test1.content',
    color: 'bg-blue-600',
    dateKey: 'test1.date'
  },
  {
    initial: 'G',
    nameKey: 'test2.name',
    contentKey: 'test2.content',
    color: 'bg-green-600',
    dateKey: 'test2.date'
  },
  {
    initial: 'T',
    nameKey: 'test3.name',
    contentKey: 'test3.content',
    color: 'bg-purple-600',
    dateKey: 'test3.date'
  },
  {
    initial: 'E',
    nameKey: 'test4.name',
    contentKey: 'test4.content',
    color: 'bg-red-600',
    dateKey: 'test4.date'
  },
  {
    initial: 'C',
    nameKey: 'test5.name',
    contentKey: 'test5.content',
    color: 'bg-teal-600',
    dateKey: 'test5.date'
  }
];

export function Testimonials() {
  const { t, language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  return (
    <section className="bg-surface-container-lowest w-full py-24 md:py-32 border-t border-surface-container-high overflow-hidden">
      <div className="max-w-container-max mx-auto px-5 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-4">
              <GoogleLogo />
              <h2 className="text-xl md:text-3xl font-serif text-primary">
                {t('test.google')}
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">4.9</span>
              <div className="flex flex-col">
                <div className="flex gap-1 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                  <StarHalf size={20} className="fill-[#FBBC05] text-[#FBBC05]" />
                </div>
                <span className="text-sm text-on-surface-variant">
                  {t('test.based')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none hidden md:block" />
          
          <div 
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="snap-start flex-none w-[85vw] md:w-[400px] bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-primary/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-lg ${test.color}`}>
                        {test.initial}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm leading-tight">
                          {t(test.nameKey)}
                        </h4>
                        <span className="text-xs text-on-surface-variant mt-1 block">
                          {t(test.dateKey)}
                        </span>
                      </div>
                    </div>
                    <GoogleLogo />
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>

                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {t(test.contentKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
