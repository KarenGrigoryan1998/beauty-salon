import { useTranslation } from 'react-i18next';
import { Scissors, Palette, Sparkles, Heart, Flower2, Zap } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'hairStyling',
      icon: Scissors,
      gradient: 'from-primary-500 to-rose-500'
    },
    {
      key: 'hairColoring',
      icon: Palette,
      gradient: 'from-rose-500 to-gold-500'
    },
    {
      key: 'manicure',
      icon: Sparkles,
      gradient: 'from-gold-500 to-nude-500'
    },
    {
      key: 'makeup',
      icon: Heart,
      gradient: 'from-nude-500 to-primary-500'
    },
    {
      key: 'cosmetology',
      icon: Flower2,
      gradient: 'from-primary-400 to-rose-400'
    },
    {
      key: 'aesthetic',
      icon: Zap,
      gradient: 'from-gold-500 to-primary-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-nude-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            {t('services.title')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('services.subtitle')}
          </p>

          <div className="mt-6 flex justify-center">
            <a href="#pricing" className="btn-secondary">
              {t('services.ctaSeePrices')}
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>

                {/* Decorative corner */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
