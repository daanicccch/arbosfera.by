import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaTelegram, FaViber, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

interface ContactProps {
  content?: {
    title: string;
    subtitle: string;
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

export const Contact = ({ content }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-dark to-primary-darker">
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
            {content?.title?.split(' ').slice(0, -2).join(' ') || 'Связаться с'}{' '}
            <span className="gradient-text">{content?.title?.split(' ').slice(-2).join(' ') || 'нами'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {content?.subtitle || 'Ответим на все ваши вопросы и рассчитаем стоимость работ'}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: FiPhone,
                  title: 'Телефон',
                  value: content?.phone || '+375 (29) 123-45-67',
                  href: `tel:${content?.phone?.replace(/\D/g, '') || ''}`,
                },
                {
                  icon: FiMail,
                  title: 'Email',
                  value: content?.email || 'info@arborist.by',
                  href: `mailto:${content?.email || ''}`,
                },
                {
                  icon: FiMapPin,
                  title: 'Адрес',
                  value: content?.address || 'г. Минск, ул. Лесная, 15',
                },
                {
                  icon: FiClock,
                  title: 'Режим работы',
                  value: content?.workingHours || 'Пн-Вс: 8:00 - 20:00',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="glass-effect p-6 rounded-xl flex items-start gap-4 group cursor-pointer hover-lift">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-accent-green/30 group-hover:shadow-accent-green/50 transition-shadow">
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-accent-green-light">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-effect p-6 rounded-xl"
            >
              <h3 className="font-semibold mb-4 text-accent-green-light">
                Свяжитесь с нами в мессенджерах
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: FaTelegram, href: content?.socials?.telegram || '#', color: 'hover:bg-[#0088cc]' },
                  { icon: FaViber, href: content?.socials?.viber || '#', color: 'hover:bg-[#665CAC]' },
                  { icon: FaWhatsapp, href: content?.socials?.whatsapp || '#', color: 'hover:bg-[#25D366]' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 rounded-xl bg-white/10 ${social.color} transition-all duration-300 flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-2xl" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-green focus:outline-none transition-colors"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-green focus:outline-none transition-colors"
                  placeholder="+375 (29) 123-45-67"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-green focus:outline-none transition-colors resize-none"
                  placeholder="Опишите вашу задачу..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-bg py-4 rounded-xl font-semibold shadow-lg shadow-accent-green/30 hover:shadow-accent-green/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiSend className="text-lg" />
                Отправить заявку
              </motion.button>

              <p className="text-sm text-gray-400 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
