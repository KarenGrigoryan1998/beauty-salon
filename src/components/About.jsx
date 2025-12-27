import { useTranslation } from 'react-i18next';
import { Heart, Sparkles, Users, Clock } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Clock, value: '10+', label: t('hero.stats.yearsExperience') },
    { icon: Users, value: '5000+', label: t('hero.stats.happyClients') },
    { icon: Heart, value: '15+', label: t('about.stats.teamMembers') },
    { icon: Sparkles, value: '20+', label: t('about.stats.services') }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e54d6d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop"
                alt="About our salon"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <div className="text-4xl font-bold gradient-text mb-1">10+</div>
              <div className="text-gray-600 text-sm">
                {t('about.yearsOfExcellence')}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-gold-100 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              {t('about.subtitle')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-rose-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
