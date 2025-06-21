import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import themisImage from './assets/logo1.jpg'; // Themis heykeli resmini ekle

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-light-gray">
      <Navbar />
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${themisImage})`, height: '700px' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Themis Hukuk</h1>
            <h2 className="text-2xl font-semibold text-light-gray mb-6">Hakkınız İçin Buradayız, Adalet İçin Yanınızdayız.</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6 text-light-gray">
              Çalışma ilişkileri ve bu ilişkilerde davalar, çalışma statülerinin tarihi insanlık tarihi kadar eskidir. Tarihin her döneminde insan, değişik statülerle çalışmış, kadardır eskidir. Sanayi Devrimi ile birlikte olgunlaşmıştır.
            </p>
            <a href="/contact" className="btn bg-gold text-dark-blue hover:bg-light-gold px-6 py-3">
              İLETİŞİM
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 px-4 bg-dark-blue">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-mid-blue rounded-lg shadow-md">
            <div className="mx-auto w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mb-4">
              {/* İkon placeholder (örneğin, thumbs-up) */}
            </div>
            <h3 className="text-xl font-semibold text-gold">Uzman Avukatlar</h3>
            <p className="text-light-gray mt-2">
              Her biri kendi alanında uzman olan ekibimizle Samsun’un en iyi avukat ve hukuk bürosu olma yolunda ilerliyoruz.
            </p>
          </div>
          <div className="p-6 bg-mid-blue rounded-lg shadow-md">
            <div className="mx-auto w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mb-4">
              {/* İkon placeholder (örneğin, shield) */}
            </div>
            <h3 className="text-xl font-semibold text-gold">Hukuki Danışmanlık</h3>
            <p className="text-light-gray mt-2">
              Her ne kadar asli görevimiz savunmak olsa da, bir avukatın görevi sadece müvekkilini mahkemede ve yargı önünde savunmak değildir.
            </p>
          </div>
          <div className="p-6 bg-mid-blue rounded-lg shadow-md">
            <div className="mx-auto w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mb-4">
              {/* İkon placeholder (örneğin, clock) */}
            </div>
            <h3 className="text-xl font-semibold text-gold">Yüksek Performans</h3>
            <p className="text-light-gray mt-2">
              Genç ve dinamik avukat kadromuz ile “Çalışma Alanlarımız” dahilinde ki konularda yardımıcı olmaya hazırız.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;