import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaTelegram, FaViber, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const WORKER_URL = 'https://throbbing-moon-c354.typosharu.workers.dev';

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
      instagram: string;
    };
  };
}

export const Contact = ({ content }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Ошибка отправки');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Не удалось отправить заявку. Попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {content?.title?.split(' ').slice(0, -2).join(' ') || 'Связаться с'}{' '}
            <span className="gradient-text">{content?.title?.split(' ').slice(-2).join(' ') || 'нами'}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2"
          >
            {content?.subtitle || 'Ответим на все ваши вопросы и рассчитаем стоимость работ'}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
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
                    <div className="glass-effect p-4 sm:p-6 rounded-xl flex items-start gap-3 sm:gap-4 group cursor-pointer hover-lift">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-accent-green/30 group-hover:shadow-accent-green/50 transition-shadow">
                        <Icon className="text-lg sm:text-xl" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold mb-1 text-accent-green-light text-sm sm:text-base">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-300 text-sm sm:text-base break-words">{item.value}</p>
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
              className="glass-effect p-4 sm:p-6 rounded-xl"
            >
              <h3 className="font-semibold mb-3 sm:mb-4 text-accent-green-light text-sm sm:text-base">
                Свяжитесь с нами в мессенджерах
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { icon: FaTelegram, href: content?.socials?.telegram || '#', color: 'hover:bg-[#0088cc]' },
                  { icon: FaViber, href: content?.socials?.viber || '#', color: 'hover:bg-[#665CAC]' },
                  { icon: FaWhatsapp, href: content?.socials?.whatsapp || '#', color: 'hover:bg-[#25D366]' },
                  { icon: FaInstagram, href: content?.socials?.instagram || '#', color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]' },
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
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-white/10 ${social.color} transition-all duration-300 flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-xl sm:text-2xl" />
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
            className="h-full"
          >
            <form onSubmit={handleSubmit} className="glass-effect p-5 sm:p-8 rounded-xl sm:rounded-2xl h-full flex flex-col">
              <div className="flex-1 flex flex-col space-y-4 sm:space-y-6">
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

                <div className="flex-1 flex flex-col">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full flex-1 min-h-[120px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent-green focus:outline-none transition-colors resize-none"
                    placeholder="Опишите вашу задачу..."
                    required
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 space-y-4">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isLoading
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'gradient-bg shadow-accent-green/30 hover:shadow-accent-green/50'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Отправить заявку
                    </>
                  )}
                </motion.button>

                {/* Сообщение об успехе */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                  >
                    <FiCheck className="text-lg flex-shrink-0" />
                    <span>Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
                  </motion.div>
                )}

                {/* Сообщение об ошибке */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
                  >
                    <FiAlertCircle className="text-lg flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <p className="text-sm text-gray-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
