import React from 'react';
import { motion } from 'framer-motion';
import { FiScissors, FiTool } from 'react-icons/fi';
import { GiTreeBranch, GiHealing, GiLeafSwirl, GiTruck } from 'react-icons/gi';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

interface ServicesProps {
  content?: {
    title: string;
    subtitle: string;
    items: Service[];
  };
}

const iconMap: Record<string, React.JSX.Element> = {
  scissors: <FiScissors className="text-4xl" />,
  tree: <GiTreeBranch className="text-4xl" />,
  tool: <FiTool className="text-4xl" />,
  heart: <GiHealing className="text-4xl" />,
  leaf: <GiLeafSwirl className="text-4xl" />,
  truck: <GiTruck className="text-4xl" />,
};

export const Services = ({ content }: ServicesProps) => {
  const services = content?.items || [];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
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
            {content?.title || 'Наши'} <span className="gradient-text">{content?.title ? '' : 'услуги'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {content?.subtitle || 'Полный спектр работ по уходу за деревьями'}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-effect p-8 rounded-2xl h-full hover-lift cursor-pointer">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-accent-green/30 group-hover:shadow-accent-green/50 transition-shadow"
                >
                  {iconMap[service.icon] || <FiScissors className="text-4xl" />}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-green-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-accent-green-light font-semibold text-lg">
                    {service.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-white hover:text-accent-green-light transition-colors"
                  >
                    Подробнее →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Не нашли нужную услугу? Свяжитесь с нами, и мы подберем решение для вас!
          </p>
          <a
            href="#contact"
            className="inline-block gradient-bg px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-accent-green/30 hover:shadow-accent-green/50 transition-all duration-300"
          >
            Связаться с нами
          </a>
        </motion.div>
      </div>
    </section>
  );
};
