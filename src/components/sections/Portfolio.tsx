import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface PortfolioProps {
  content?: {
    title: string;
    subtitle: string;
    items: PortfolioItem[];
  };
}

export const Portfolio = ({ content }: PortfolioProps) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const items = content?.items || [];

  return (
    <>
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              {content?.title || 'Наши'} <span className="gradient-text">{content?.title ? '' : 'работы'}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              {content?.subtitle || 'Примеры выполненных проектов'}
            </motion.p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-black/20">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-primary-darker">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent flex items-end p-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-green rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <FiX className="text-2xl" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
