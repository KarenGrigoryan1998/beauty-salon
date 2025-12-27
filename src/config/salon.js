// ============================================
// SALON CONFIGURATION
// Edit these values for each salon instance
// ============================================

export const salonConfig = {
  // Basic Info
  name: 'Your Salon Name',
  logo: '', // Path to logo image (e.g., '/logo.png' or '/images/logo.svg'). Leave empty for text-only logo.
  
  // Contact Information
  phone: '+374 00 123 456',
  whatsapp: '+37400123456',
  email: 'info@yoursalon.am',
  
  // Address
  address: {
    hy: 'Ձեր հասցեն, փողոց 1',
    en: 'Your Address, Street 1',
    ru: 'Ваш адрес, улица 1'
  },
  
  // Working Hours
  workingHours: {
    hy: 'Երկ-Շաբ: 10:00 - 20:00',
    en: 'Mon-Sat: 10:00 - 20:00',
    ru: 'Пн-Сб: 10:00 - 20:00'
  },
  
  // Social Media Links
  social: {
    instagram: 'https://instagram.com/yoursalon',
    facebook: 'https://facebook.com/yoursalon',
  },
  
  // Google Maps Embed URL (replace with your salon's location)
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8830123456789!2d44.5!3d40.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzQ4LjAiTiA0NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890',
  
  // WhatsApp message template
  whatsappMessage: {
    hy: 'Բարև, ցանկանում եմ ամրագրել այց',
    en: 'Hello, I would like to book an appointment',
    ru: 'Здравствуйте, я хотел бы записаться на прием'
  },
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: {
        hy: 'Աննա Ա․',
        en: 'Anna A.',
        ru: 'Анна А.'
      },
      text: {
        hy: 'Հիանալի սպասարկում։ Թիմը շատ պրոֆեսիոնալ է, իսկ սրահի մթնոլորտը՝ շատ հաճելի։',
        en: 'Amazing service! The team is very professional and the salon atmosphere is wonderful.',
        ru: 'Потрясающий сервис! Команда очень профессиональная, а атмосфера салона замечательная.'
      },
      rating: 5
    },
    {
      id: 2,
      name: {
        hy: 'Մարիա Մ․',
        en: 'Maria M.',
        ru: 'Мария М.'
      },
      text: {
        hy: 'Տարիներ շարունակ այստեղ եմ գալիս։ Քաղաքում լավագույն մազերի ներկումն այստեղ է։',
        en: 'I have been coming here for years. Best hair coloring in the city!',
        ru: 'Хожу сюда уже много лет. Лучшее окрашивание волос в городе!'
      },
      rating: 5
    },
    {
      id: 3,
      name: {
        hy: 'Լիլիթ Լ․',
        en: 'Lilit L.',
        ru: 'Лилит Л.'
      },
      text: {
        hy: 'Մանիկյուրի ծառայությունը գերազանց է։ Մաքուր, ժամանակակից, և անձնակազմը շատ բարեհամբույր է։',
        en: 'The manicure service is exceptional. Clean, modern, and the staff is so friendly!',
        ru: 'Маникюр на высшем уровне. Чисто, современно, и персонал очень дружелюбный!'
      },
      rating: 5
    },
    {
      id: 4,
      name: {
        hy: 'Նարե Ն․',
        en: 'Nare N.',
        ru: 'Нарэ Н.'
      },
      text: {
        hy: 'Իդեալական դիմահարդարում իմ հարսանիքի համար։ Շատ շնորհակալ եմ, արդյունքը հրաշալի էր։',
        en: 'Perfect makeup for my wedding! I looked absolutely stunning. Thank you!',
        ru: 'Идеальный макияж для моей свадьбы! Я выглядела потрясающе. Спасибо!'
      },
      rating: 5
    }
  ]
};

export default salonConfig;
