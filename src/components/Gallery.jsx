import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import salonConfig from '../config/salon';

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('gallery');

  const placeholderImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
  ];

  const beforeAfterPlaceholders = [
    {
      before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=500&fit=crop',
      title: t('gallery.beforeAfter.hairTransformation')
    },
    {
      before: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop',
      after: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=500&fit=crop',
      title: t('gallery.beforeAfter.hairColoring')
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-600 rounded-full text-sm font-medium mb-4">
            {t('gallery.title')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('gallery.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'gallery'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('gallery.title')}
          </button>
          <button
            onClick={() => setActiveTab('beforeAfter')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeTab === 'beforeAfter'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('gallery.before')} / {t('gallery.after')}
          </button>
        </div>

        {/* Gallery Grid */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {placeholderImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(src)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Before/After */}
        {activeTab === 'beforeAfter' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {beforeAfterPlaceholders.map((item, index) => (
              <div key={index} className="bg-nude-50 rounded-3xl p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-center mb-4 text-gray-900">
                  {item.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <span className="absolute top-3 left-3 px-3 py-1 bg-gray-900/70 text-white text-xs rounded-full">
                      {t('gallery.before')}
                    </span>
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full aspect-[3/4] object-cover rounded-xl"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary-500 text-white text-xs rounded-full">
                      {t('gallery.after')}
                    </span>
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full aspect-[3/4] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
