import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaTelegram, FaViber, FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
  content?: {
    company: string;
    description: string;
    copyright: string;
  };
  contact?: {
    phone: string;
    email: string;
    address: string;
    workingHours: string;
    socials: {
      telegram: string;
      viber: string;
      whatsapp: string;
    };
  };
}

export const Footer = ({ content, contact }: FooterProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-darker py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img
                src="/ARBO PNG.png"
                alt="АрбоСфера"
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              {content?.description || 'Профессиональные услуги по уходу за деревьями'}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-accent-green-light">Навигация</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Главная', 'Услуги', 'О нас', 'Портфолио', 'Контакты'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase().replace(' ', '-')}`)}
                    className="text-sm sm:text-base text-gray-400 hover:text-accent-green-light transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 md:col-span-1"
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-accent-green-light">Контакты</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <FiPhone className="text-accent-green-light mt-0.5 sm:mt-1 shrink-0 text-sm sm:text-base" />
                <a
                  href={`tel:${contact?.phone?.replace(/\D/g, '') || ''}`}
                  className="text-sm sm:text-base text-gray-400 hover:text-accent-green-light transition-colors break-all"
                >
                  {contact?.phone || '+375 (29) 123-45-67'}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiMail className="text-accent-green-light mt-0.5 sm:mt-1 shrink-0 text-sm sm:text-base" />
                <a
                  href={`mailto:${contact?.email || ''}`}
                  className="text-sm sm:text-base text-gray-400 hover:text-accent-green-light transition-colors break-all"
                >
                  {contact?.email || 'info@arborist.by'}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="text-accent-green-light mt-0.5 sm:mt-1 shrink-0 text-sm sm:text-base" />
                <span className="text-sm sm:text-base text-gray-400 break-all">
                  {contact?.address || 'г. Минск, ул. Лесная, 15'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FiClock className="text-accent-green-light mt-0.5 sm:mt-1 shrink-0 text-sm sm:text-base" />
                <span className="text-sm sm:text-base text-gray-400">
                  {contact?.workingHours || 'Пн-Вс: 8:00 - 20:00'}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-accent-green-light">Мы в соцсетях</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href={contact?.socials?.telegram || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 hover:bg-accent-green transition-colors flex items-center justify-center"
              >
                <FaTelegram className="text-xl sm:text-2xl" />
              </a>
              <a
                href={contact?.socials?.viber || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 hover:bg-accent-green transition-colors flex items-center justify-center"
              >
                <FaViber className="text-xl sm:text-2xl" />
              </a>
              <a
                href={contact?.socials?.whatsapp || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 hover:bg-accent-green transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 pt-6 sm:pt-8 text-center text-gray-400"
        >
          <p className="text-xs sm:text-sm">{content?.copyright || '© 2026 АрбоСфера. Все права защищены.'}</p>
        </motion.div>
      </div>
    </footer>
  );
};
