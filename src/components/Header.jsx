import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe, Sparkles } from 'lucide-react';
import salonConfig from '../config/salon';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'hy', name: 'Հայ', flag: '🇦🇲' },
    { code: 'en', name: 'Eng', flag: '🇬🇧' },
    { code: 'ru', name: 'Рус', flag: '🇷🇺' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'pricing', href: '#pricing' },
    { key: 'gallery', href: '#gallery' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            {salonConfig.logo ? (
              <img 
                src={salonConfig.logo} 
                alt={salonConfig.name}
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            ) : (
              <Sparkles className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`} />
            )}
            <div 
              className={`font-display text-2xl font-bold transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-white'
              }`}
              style={{ display: salonConfig.logo ? 'none' : 'block' }}
            >
              {salonConfig.name}
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Right side - Language & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{currentLang.flag} {currentLang.name}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[120px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-primary-50 transition-colors flex items-center gap-2 ${
                        i18n.language === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Call Button */}
            <a
              href={`tel:${salonConfig.phone}`}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-700 font-medium hover:text-primary-500 transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex gap-2 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      i18n.language === lang.code 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>

              <a
                href={`tel:${salonConfig.phone}`}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {t('nav.bookNow')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
