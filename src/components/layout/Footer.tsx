import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-navy-dark pt-20 pb-10 text-on-primary">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-on-primary/10 pb-20">
          
          <div className="col-span-1">
            <h2 className="text-3xl font-serif font-semibold tracking-tight text-white mb-6">
              Legal Partners.
            </h2>
            <p className="text-on-primary/50 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-primary/40 mb-6">{t('footer.firm')}</h4>
             <ul className="space-y-4 text-sm text-on-primary/70">
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.about')}</a></li>
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.team')}</a></li>
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.news')}</a></li>
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.careers')}</a></li>
                <li><a href="#booking-modal" className="text-sand mt-4 inline-block hover:text-white transition-colors">{t('footer.contact')}</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-primary/40 mb-6">{t('footer.services')}</h4>
             <ul className="space-y-4 text-sm text-on-primary/70">
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.corporate')}</a></li>
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.finance')}</a></li>
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.litigation')}</a></li>
                <li><a href="#" className="hover:text-sand transition-colors">{t('footer.ip')}</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-primary/40 mb-6">{t('footer.offices')}</h4>
             <ul className="space-y-4 text-sm text-on-primary/70">
                <li>
                  <p className="font-semibold text-white mb-1">Madrid</p>
                  <p className="text-on-primary/50">Paseo de la Castellana 15<br/>28046 Madrid, {t('footer.spain')}</p>
                </li>
                <li className="pt-2">
                  <p className="font-semibold text-white mb-1">Londres</p>
                  <p className="text-on-primary/50">123 Business Road<br/>London EC1A 1BB, UK</p>
                </li>
             </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold tracking-widest uppercase text-on-primary/40">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center">
            <p>© {new Date().getFullYear()} Legal Partners.</p>
            <p>{t('footer.madeby')} <a href="https://houstonwebexpress.com/" target="_blank" rel="noopener noreferrer" className="text-sand hover:text-white transition-colors">Houston Web Express</a></p>
          </div>
          <div className="flex items-center gap-8">
             <a href="#" className="hover:text-on-primary transition-colors">{t('footer.privacy')}</a>
             <a href="#" className="hover:text-on-primary transition-colors">{t('footer.legal')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
