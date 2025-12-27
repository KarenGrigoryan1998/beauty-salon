import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import salonConfig from '../config/salon';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = salonConfig.testimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-nude-50 to-rose-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white text-primary-600 rounded-full text-sm font-medium mb-4 shadow-sm">
            💬 {t('testimonials.title')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote icon */}
            <div className="absolute -top-6 left-10">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center font-light leading-relaxed mb-8 font-display italic">
              "{testimonials[activeIndex].text[i18n.language] || testimonials[activeIndex].text.en}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {(testimonials[activeIndex].name[i18n.language] || testimonials[activeIndex].name.en).charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[activeIndex].name[i18n.language] || testimonials[activeIndex].name.en}
                </div>
                <div className="text-sm text-gray-500">
                  {t('testimonials.clientLabel')}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-500 hover:shadow-xl transition-all hover:-translate-x-1"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-500 hover:shadow-xl transition-all hover:translate-x-1"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
