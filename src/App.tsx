import { useContent } from './hooks/useContent';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  const { content, loading, error } = useContent();

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-primary-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400">Ошибка загрузки контента</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-dark text-white font-sans antialiased">
      <Navbar phone={content?.hero.phone} />
      <main>
        <Hero content={content?.hero} stats={content?.about.stats} />
        <Services content={content?.services} />
        <About content={content?.about} />
        <Portfolio content={content?.portfolio} />
        <Contact content={content?.contact} />
      </main>
      <Footer content={content?.footer} contact={content?.contact} />
    </div>
  );
}

export default App;
