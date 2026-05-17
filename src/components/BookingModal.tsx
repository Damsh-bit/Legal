import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#booking-modal') {
        setIsOpen(true);
        setStep(1);
        setSelectedDate(null);
        setSelectedTime(null);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeModal = () => {
    window.location.hash = '';
  };

  const handleNextStep = () => {
    if (selectedDate && selectedTime) setStep(2);
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy-dark/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-3xl rounded-sm shadow-2xl relative flex flex-col md:flex-row my-auto overflow-hidden h-[600px]"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-[110] p-2 text-primary/50 hover:text-primary transition-colors bg-white/80 rounded-full"
            >
              <X size={20} />
            </button>

            {/* Left Sidebar */}
            <div className="w-full md:w-1/3 bg-primary text-white p-8 flex flex-col hidden md:flex">
              <h3 className="text-xl font-serif mb-2">Legal Partners.</h3>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-8">
                {language === 'en' ? 'Strategy Session' : 'Sesión Estratégica'}
              </p>
              
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <Clock size={16} className="text-sand" />
                  30 min
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <CalendarIcon size={16} className="text-sand" />
                  Google Meet / Zoom
                </div>
                {selectedDate && (
                   <div className="flex items-center gap-3 text-sm text-white/80 mt-4 pt-4 border-t border-white/20">
                     <CalendarIcon size={16} className="text-transparent" />
                     {selectedDate} {language === 'en' ? 'May, 2026' : 'Mayo, 2026'}
                   </div>
                )}
                {selectedTime && (
                   <div className="flex items-center gap-3 text-sm text-white/80">
                     <Clock size={16} className="text-transparent" />
                     {selectedTime}
                   </div>
                )}
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col h-full bg-white relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col h-full"
                  >
                    <h4 className="text-xl font-serif text-primary mb-6">
                      {language === 'en' ? 'Select Date & Time' : 'Seleccionar Fecha y Hora'}
                    </h4>
                    
                    <div className="border border-primary/10 rounded-sm p-4 mb-4 flex-grow flex flex-col">
                       <div className="flex justify-between items-center mb-4">
                         <span className="font-semibold text-primary">{language === 'en' ? 'May 2026' : 'Mayo 2026'}</span>
                         <div className="flex gap-2">
                           <button type="button" className="p-1 hover:bg-primary/5 rounded">&lt;</button>
                           <button type="button" className="p-1 hover:bg-primary/5 rounded">&gt;</button>
                         </div>
                       </div>
                       <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-primary/50 font-bold">
                         <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                       </div>
                       <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
                         {/* Empty spaces */}
                         <div className="p-1 sm:p-2"></div><div className="p-1 sm:p-2"></div><div className="p-1 sm:p-2"></div><div className="p-1 sm:p-2"></div><div className="p-1 sm:p-2"></div>
                         {/* Days */}
                         {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d => (
                           <button 
                             key={d} 
                             type="button"
                             onClick={() => setSelectedDate(d)}
                             className={`p-1 sm:p-2 rounded-sm cursor-pointer transition-colors outline-none ${selectedDate === d ? 'bg-primary text-white font-bold' : 'hover:bg-primary/5 text-primary'}`}
                           >
                             {d}
                           </button>
                         ))}
                       </div>
                       
                       <AnimatePresence>
                         {selectedDate && (
                           <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="mt-auto border-t border-primary/10 pt-4"
                           >
                             <div className="grid grid-cols-4 gap-2">
                                {['10:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'].map(time => (
                                  <button 
                                    type="button" 
                                    key={time} 
                                    onClick={() => setSelectedTime(time)}
                                    className={`w-full p-2 border rounded-sm outline-none text-xs transition-colors ${selectedTime === time ? 'bg-primary text-white border-primary' : 'border-primary/20 bg-transparent hover:border-primary text-primary'}`}
                                  >
                                    {time}
                                  </button>
                                ))}
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                    </div>

                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!selectedDate || !selectedTime} 
                      className="w-full bg-sand text-primary font-bold uppercase tracking-widest text-xs py-4 hover:bg-sand-hover transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                    >
                      {language === 'en' ? 'Continue' : 'Continuar'}
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.form 
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleBook} 
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <button type="button" onClick={() => setStep(1)} className="p-2 -ml-2 text-primary/50 hover:text-primary transition-colors">
                        <ArrowLeft size={20} />
                      </button>
                      <h4 className="text-xl font-serif text-primary">
                        {language === 'en' ? 'Your Details' : 'Sus Datos'}
                      </h4>
                    </div>
                    
                    <div className="space-y-4 mb-4 flex-grow">
                       <div className="flex flex-col gap-1">
                         <label className="text-xs font-bold text-primary uppercase tracking-widest">{language === 'en' ? 'Full Name' : 'Nombre Completo'}</label>
                         <input required type="text" className="w-full border border-primary/20 p-3 text-sm rounded-sm outline-none focus:border-primary transition-colors bg-surface-container-lowest" />
                       </div>
                       <div className="flex flex-col gap-1">
                         <label className="text-xs font-bold text-primary uppercase tracking-widest">{language === 'en' ? 'Work Email' : 'Correo Corporativo'}</label>
                         <input required type="email" className="w-full border border-primary/20 p-3 text-sm rounded-sm outline-none focus:border-primary transition-colors bg-surface-container-lowest" />
                       </div>
                       <div className="flex flex-col gap-1">
                         <label className="text-xs font-bold text-primary uppercase tracking-widest">{language === 'en' ? 'Company' : 'Empresa'}</label>
                         <input required type="text" className="w-full border border-primary/20 p-3 text-sm rounded-sm outline-none focus:border-primary transition-colors bg-surface-container-lowest" />
                       </div>
                    </div>

                    <button type="submit" className="w-full bg-sand text-primary font-bold uppercase tracking-widest text-xs py-4 hover:bg-sand-hover transition-colors rounded-sm flex-shrink-0">
                      {language === 'en' ? 'Confirm Booking' : 'Confirmar Reserva'}
                    </button>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                     <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                       <CheckCircle size={32} />
                     </div>
                     <h4 className="text-2xl font-serif text-primary mb-4">
                       {language === 'en' ? 'Booking Confirmed' : 'Reserva Confirmada'}
                     </h4>
                     <p className="text-primary/70 text-sm mb-8 leading-relaxed max-w-sm">
                       {language === 'en' 
                          ? 'We have sent an invitation with the meeting details to your email. We look forward to speaking with you.' 
                          : 'Hemos enviado una invitación con los detalles de la reunión a su correo. Esperamos hablar pronto con usted.'}
                     </p>
                     <button onClick={closeModal} className="text-xs uppercase tracking-widest font-bold text-sand hover:text-sand-hover transition-colors">
                       {language === 'en' ? 'Close Window' : 'Cerrar Ventana'}
                     </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
