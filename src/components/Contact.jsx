import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import salonConfig from '../config/salon';

const Contact = () => {
  const { t, i18n } = useTranslation();

  const whatsappUrl = `https://wa.me/${salonConfig.whatsapp}?text=${encodeURIComponent(
    salonConfig.whatsappMessage[i18n.language] || salonConfig.whatsappMessage.en
  )}`;

  const contactItems = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: salonConfig.phone,
      href: `tel:${salonConfig.phone}`,
      color: 'from-primary-500 to-rose-500'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: 'WhatsApp',
      href: whatsappUrl,
      color: 'from-green-500 to-green-600',
      external: true
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: salonConfig.address[i18n.language] || salonConfig.address.en,
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: salonConfig.workingHours[i18n.language] || salonConfig.workingHours.en,
      color: 'from-nude-500 to-nude-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-nude-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            📍 {t('contact.title')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const Component = item.href ? 'a' : 'div';
              
              return (
                <Component
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${item.href ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="font-semibold text-gray-900 text-lg">{item.value}</div>
                  </div>
                </Component>
              );
            })}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {salonConfig.social.instagram && (
                <a
                  href={salonConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {salonConfig.social.facebook && (
                <a
                  href={salonConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-3 shadow-xl">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <iframe
                  src={salonConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon location"
                  className="w-full h-full"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-100 rounded-full -z-10" />
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 via-rose-500 to-gold-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              {t('contact.ctaTitle')}
            </h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              {t('contact.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t('hero.bookAppointment')}
              </a>
              <a
                href={`tel:${salonConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                {t('hero.callNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
