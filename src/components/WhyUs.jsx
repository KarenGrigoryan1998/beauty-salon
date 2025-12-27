import { useTranslation } from 'react-i18next';
import { Award, Gem, Building2, UserCheck } from 'lucide-react';

const WhyUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 'professional',
      icon: Award,
      color: 'text-primary-500',
      bgColor: 'bg-primary-100'
    },
    {
      key: 'quality',
      icon: Gem,
      color: 'text-gold-500',
      bgColor: 'bg-gold-100'
    },
    {
      key: 'modern',
      icon: Building2,
      color: 'text-rose-500',
      bgColor: 'bg-rose-100'
    },
    {
      key: 'individual',
      icon: UserCheck,
      color: 'text-nude-600',
      bgColor: 'bg-nude-100'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-rose-50 to-gold-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm text-primary-600 rounded-full text-sm font-medium mb-4 shadow-sm">
            ✨ {t('whyUs.title')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('whyUs.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                      {t(`whyUs.${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`whyUs.${feature.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
