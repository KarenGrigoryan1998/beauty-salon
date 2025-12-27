import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import salonConfig from '../config/salon';

const Hero = () => {
  const { t, i18n } = useTranslation();

  const whatsappUrl = `https://wa.me/${salonConfig.whatsapp}?text=${encodeURIComponent(
    salonConfig.whatsappMessage[i18n.language] || salonConfig.whatsappMessage.en
  )}`;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-rose-900/70 to-gold-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              {salonConfig.name}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t('hero.bookAppointment')}
            </a>
            
            <a
              href={`tel:${salonConfig.phone}`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white hover:text-primary-600 transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {t('hero.callNow')}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-white/60 text-sm">
                {t('hero.stats.yearsExperience')}
              </div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">5K+</div>
              <div className="text-white/60 text-sm">
                {t('hero.stats.happyClients')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-white/60 text-sm">
                {t('hero.stats.experts')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
