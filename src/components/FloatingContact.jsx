import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle } from 'lucide-react';
import salonConfig from '../config/salon';

const FloatingContact = () => {
  const { i18n } = useTranslation();

  const whatsappUrl = `https://wa.me/${salonConfig.whatsapp}?text=${encodeURIComponent(
    salonConfig.whatsappMessage[i18n.language] || salonConfig.whatsappMessage.en
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative w-14 h-14 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl shadow-emerald-500/25 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/30"
      >
        <span className="absolute inset-0 rounded-2xl bg-emerald-400/25 animate-ping motion-reduce:animate-none" />
        <span className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute -inset-1 rounded-2xl border border-white/25 opacity-60" />
        <MessageCircle className="relative w-6 h-6 text-white" />
      </a>

      <a
        href={`tel:${salonConfig.phone}`}
        aria-label="Phone"
        className="group relative w-14 h-14 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-rose-500 shadow-xl shadow-primary-500/25 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/30"
      >
        <span className="absolute inset-0 rounded-2xl bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute -inset-1 rounded-2xl border border-white/25 opacity-60" />
        <Phone className="relative w-6 h-6 text-white" />
      </a>

      <div className="pointer-events-none absolute -z-10 right-2 bottom-2 w-16 h-16 rounded-full bg-gold-200/40 blur-2xl animate-float" />
    </div>
  );
};

export default FloatingContact;
