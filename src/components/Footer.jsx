import { useTranslation } from 'react-i18next';
import { Heart, Instagram, Facebook, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import salonConfig from '../config/salon';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'gallery', href: '#gallery' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {salonConfig.logo ? (
                <img 
                  src={salonConfig.logo} 
                  alt={salonConfig.name}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <Sparkles className="w-8 h-8 text-primary-400" />
              )}
              <div className="font-display text-2xl font-bold gradient-text">
                {salonConfig.name}
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {salonConfig.social.instagram && (
                <a
                  href={salonConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {salonConfig.social.facebook && (
                <a
                  href={salonConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t('contact.title')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${salonConfig.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {salonConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  {salonConfig.address[i18n.language] || salonConfig.address.en}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${salonConfig.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {salonConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {salonConfig.name}. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-primary-500 fill-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
