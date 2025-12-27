# Beauty Salon Landing Page

A modern, premium landing page template for beauty salons built with React.js and Tailwind CSS.

## Features

- **Elegant Design**: Feminine, modern UI with soft gradients (pink, nude, gold)
- **Multi-language Support**: Armenian (default), English, Russian with language switcher
- **Mobile-First**: Fully responsive design optimized for all devices
- **Smooth Animations**: Engaging user experience with tasteful animations
- **SEO-Friendly**: Semantic HTML structure with meta tags
- **Fast Loading**: Optimized with Vite for quick load times
- **Easy Customization**: Single configuration file for all salon-specific content

## Sections

1. **Hero** - Eye-catching headline with CTA buttons (WhatsApp, Call)
2. **Services** - Hair styling, coloring, manicure, makeup, cosmetology
3. **Why Choose Us** - Professional masters, quality products, modern salon, individual approach
4. **Gallery** - Image gallery with Before/After comparisons
5. **Testimonials** - Client reviews carousel
6. **About Us** - Salon history and statistics
7. **Contact** - Phone, WhatsApp, address, working hours, Google Maps

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Customization

Edit the `src/config/salon.js` file to customize:

- Salon name and logo
- Phone number and WhatsApp
- Address and working hours
- Social media links
- Google Maps embed URL
- Testimonials
- Gallery images

### Example Configuration

```javascript
export const salonConfig = {
  name: 'Your Salon Name',
  phone: '+374 XX XXX XXX',
  whatsapp: '+374XXXXXXXX',
  address: {
    hy: 'Ձdelays delays, delays 1',
    en: 'Your Address, Street 1',
    ru: 'Ваш адрес, улица 1'
  },
  // ... more options
};
```

## Creating a New Salon Instance

To create a landing page for a new salon:

1. Duplicate the entire project folder
2. Update `src/config/salon.js` with the new salon's information
3. Replace images in `public/gallery/` folder
4. Update meta tags in `index.html`
5. Deploy

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **i18next** - Internationalization
- **Lucide React** - Icons

## Project Structure

```
beauty-salon/
├── public/
│   ├── favicon.svg
│   └── gallery/           # Add salon images here
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── salon.js       # ⭐ Main configuration file
│   ├── i18n/
│   │   ├── index.js
│   │   └── translations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## License

MIT
