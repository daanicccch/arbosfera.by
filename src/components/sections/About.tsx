import { motion } from 'framer-motion';
import { FiShield, FiAward, FiTool, FiCheckCircle } from 'react-icons/fi';

interface AboutProps {
  content?: {
    title: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
    principles: Array<{ title: string; description: string }>;
  };
}

const principleIcons = [FiShield, FiAward, FiTool, FiCheckCircle];

export const About = ({ content }: AboutProps) => {
  const stats = content?.stats || [];
  const principles = content?.principles || [];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-darker to-primary-dark">
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
            {content?.title?.split(' ').slice(0, -2).join(' ') || 'Почему выбирают'}{' '}
            <span className="gradient-text">{content?.title?.split(' ').slice(-2).join(' ') || 'нас'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {content?.subtitle || 'Мы предоставляем профессиональные услуги высочайшего качества'}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-8 rounded-2xl text-center cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: 'spring' }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const Icon = principleIcons[index] || FiShield;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-effect p-8 rounded-2xl h-full hover-lift cursor-pointer">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-accent-green/30 group-hover:shadow-accent-green/50 transition-shadow"
                    >
                      <Icon className="text-2xl" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent-green-light transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Работаем с <span className="gradient-text">любыми объектами</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Частные дома, коттеджные поселки, парки, скверы, производственные территории,
              городские улицы. Выполняем работы любой сложности с применением современного оборудования.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Частные участки', 'Парки', 'Производства', 'Городские территории'].map(
                (tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm text-accent-green-light border border-accent-green/30"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
