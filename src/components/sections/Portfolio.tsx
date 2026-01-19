import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlay } from 'react-icons/fi';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  src: string;
  type: 'image' | 'video';
  thumbnail?: string;
}

interface PortfolioProps {
  content?: {
    title: string;
    subtitle: string;
    items: PortfolioItem[];
  };
}

export const Portfolio = ({ content }: PortfolioProps) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const items = content?.items || [];

  const isVideo = (item: PortfolioItem) => item.type === 'video';

  return (
    <>
      <section id="portfolio" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              {content?.title || 'Наши'} <span className="gradient-text">{content?.title ? '' : 'работы'}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2"
            >
              {content?.subtitle || 'Примеры выполненных проектов'}
            </motion.p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg shadow-black/20">
                  {/* Media */}
                  <div className="aspect-[4/3] overflow-hidden bg-primary-darker">
                    {isVideo(item) ? (
                      <>
                        <video
                          src={item.src}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          muted
                          playsInline
                          preload="metadata"
                        />
                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FiPlay className="text-2xl sm:text-3xl text-white ml-1" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <motion.img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent flex items-end p-4 sm:p-6"
                  >
                    <div>
                      <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-green rounded-xl sm:rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedItem(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
            >
              <FiX className="text-xl sm:text-2xl" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo(selectedItem) ? (
                <video
                  src={selectedItem.src}
                  className="w-full max-h-[70vh] rounded-xl sm:rounded-2xl shadow-2xl object-contain bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full max-h-[70vh] rounded-xl sm:rounded-2xl shadow-2xl object-contain"
                />
              )}
              <div className="mt-3 sm:mt-4 text-center px-2">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{selectedItem.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
