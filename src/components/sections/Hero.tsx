import { motion } from 'framer-motion';
import { FiPhone, FiArrowDown } from 'react-icons/fi';

interface HeroProps {
  content?: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    phone: string;
  };
}

export const Hero = ({ content }: HeroProps) => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary-dark" />
      </div>

      {/* Animated Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent-green/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent-green-light/20 blur-3xl"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="glass-effect px-6 py-2 rounded-full">
              <span className="text-accent-green-light font-medium">
                {content?.subtitle || 'Обрезка, удаление и лечение деревьев'}
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          >
            {content?.title?.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={index === content.title.split(' ').length - 1 ? 'gradient-text' : ''}
              >
                {word}{' '}
              </motion.span>
            )) || (
              <>
                Профессиональный <span className="gradient-text">уход</span>
                <br />
                за деревьями
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {content?.description || 'Более 10 лет опыта в арбористике. Безопасно, быстро, качественно.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`tel:${content?.phone?.replace(/\D/g, '') || ''}`}
              className="gradient-bg px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-accent-green/30 hover:shadow-accent-green/50 transition-all duration-300 flex items-center gap-3 group"
            >
              <FiPhone className="text-xl group-hover:rotate-12 transition-transform" />
              {content?.cta || 'Получить консультацию'}
            </a>
            <button
              onClick={scrollToServices}
              className="glass-effect px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              Наши услуги
              <FiArrowDown className="text-xl" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '10+', label: 'лет опыта' },
              { value: '1500+', label: 'проектов' },
              { value: '30+', label: 'специалистов' },
              { value: '20+', label: 'ед. техники' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl hover-lift"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToServices}
          className="text-accent-green-light hover:text-accent-green transition-colors"
        >
          <FiArrowDown className="text-3xl" />
        </button>
      </motion.div>
    </section>
  );
};
