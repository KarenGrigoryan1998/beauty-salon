import { useTranslation } from 'react-i18next';
import { Scissors, Sparkles, Palette, Hand, Footprints, Heart, Flower2, Zap } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();

  const mainServices = [
    {
      key: 'haircutWomen',
      icon: Scissors,
      price: '5,000 - 15,000',
      gradient: 'from-primary-500 to-rose-500'
    },
    {
      key: 'haircutMen',
      icon: Scissors,
      price: '3,000 - 7,000',
      gradient: 'from-rose-500 to-primary-400'
    },
    {
      key: 'hairStyling',
      icon: Sparkles,
      price: '5,000 - 20,000',
      gradient: 'from-gold-500 to-gold-400'
    },
    {
      key: 'hairColoring',
      icon: Palette,
      price: '15,000 - 80,000',
      gradient: 'from-rose-500 to-gold-500'
    },
    {
      key: 'manicure',
      icon: Hand,
      price: '5,000 - 12,000',
      gradient: 'from-primary-400 to-rose-400'
    },
    {
      key: 'pedicure',
      icon: Footprints,
      price: '7,000 - 15,000',
      gradient: 'from-nude-500 to-primary-400'
    },
    {
      key: 'makeup',
      icon: Heart,
      price: '10,000 - 35,000',
      gradient: 'from-rose-400 to-primary-500'
    },
    {
      key: 'cosmetology',
      icon: Flower2,
      price: '8,000 - 50,000',
      gradient: 'from-gold-400 to-rose-400'
    }
  ];

  const laserServices = [
    { key: 'upperLip', price: '3,000 - 5,000' },
    { key: 'chin', price: '3,000 - 5,000' },
    { key: 'underarms', price: '5,000 - 8,000' },
    { key: 'arms', price: '15,000 - 25,000' },
    { key: 'legs', price: '25,000 - 45,000' },
    { key: 'bikini', price: '10,000 - 20,000' },
    { key: 'fullBody', price: '80,000 - 150,000' }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-nude-50 via-white to-nude-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-gold-100 to-primary-100 text-gold-700 rounded-full text-sm font-medium mb-4">
            {t('pricing.badge')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-20">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Decorative top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {t(`pricing.services.${service.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed min-h-[40px]">
                  {t(`pricing.services.${service.key}.description`)}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </span>
                  <span className="text-gray-400 text-sm">AMD</span>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
              </div>
            );
          })}
        </div>

        {/* Aesthetic Procedures Section */}
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-rose-50 to-gold-50 rounded-[2.5rem] opacity-50" />
          
          <div className="relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-white shadow-xl">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t('pricing.aesthetic.title')}
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t('pricing.aesthetic.subtitle')}
              </p>
            </div>

            {/* Laser Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {laserServices.map((service, index) => (
                <div
                  key={service.key}
                  className="group relative bg-white rounded-2xl p-5 border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-gold-700 transition-colors">
                        {t(`pricing.aesthetic.services.${service.key}`)}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="font-display font-bold text-gold-600">
                        {service.price}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">AMD</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Special full body highlight */}
            <div className="mt-6 p-6 bg-gradient-to-r from-gold-50 via-primary-50 to-rose-50 rounded-2xl border border-gold-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900">{t('pricing.aesthetic.fullBodyPackage')}</h4>
                    <p className="text-gray-500 text-sm">{t('pricing.aesthetic.fullBodyDescription')}</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <span className="font-display text-2xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
                    80,000 - 150,000
                  </span>
                  <span className="text-gray-400 ml-1">AMD</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-nude-100/80 text-gray-600 text-sm rounded-full border border-nude-200">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
            {t('pricing.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
