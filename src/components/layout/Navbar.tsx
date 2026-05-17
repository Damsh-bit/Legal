import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'nav.services', href: '/servicios' },
    { name: 'nav.team', href: '/equipo' },
    { name: 'nav.contact', href: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-5 md:px-8">
        <Link
          to="/"
          className="text-2xl font-serif font-semibold tracking-tight text-primary"
        >
          Legal Partners.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs font-semibold uppercase tracking-[0.1em] text-primary/80 hover:text-primary transition-colors duration-300"
            >
              {t(link.name)}
            </Link>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary/80 hover:text-primary transition-colors duration-300"
            >
              <Globe size={14} /> {language.toUpperCase()}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-sm py-2 px-4 flex flex-col gap-2 min-w-[100px]"
                >
                  <button 
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`text-xs font-bold text-left ${language === 'en' ? 'text-primary' : 'text-primary/50'} hover:text-primary transition-colors`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => { setLanguage('es'); setIsLangMenuOpen(false); }}
                    className={`text-xs font-bold text-left ${language === 'es' ? 'text-primary' : 'text-primary/50'} hover:text-primary transition-colors`}
                  >
                    Español
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <a
          href="#booking-modal"
          className="hidden md:inline-flex items-center justify-center bg-primary text-white text-[11px] font-bold uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-300 shadow-sm"
        >
          {t('nav.schedule')}
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-primary hover:text-primary/70 transition-colors"
                >
                  {t(link.name)}
                </Link>
              ))}
              
              <div className="flex gap-4 items-center">
                <button 
                  onClick={() => { setLanguage('en'); setIsOpen(false); }}
                  className={`text-sm font-bold ${language === 'en' ? 'text-primary' : 'text-primary/50'}`}
                >
                  EN
                </button>
                <div className="w-[1px] h-4 bg-primary/20"></div>
                <button 
                  onClick={() => { setLanguage('es'); setIsOpen(false); }}
                  className={`text-sm font-bold ${language === 'es' ? 'text-primary' : 'text-primary/50'}`}
                >
                  ES
                </button>
              </div>

              <a
                href="#booking-modal"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-primary text-white text-xs font-bold uppercase tracking-widest px-8 py-4 mt-4 rounded-full shadow-sm active:scale-95 transition-all"
              >
                {t('nav.schedule')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
