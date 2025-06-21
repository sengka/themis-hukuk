import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import foto1 from '../assets/avuakte1.jpeg';
import foto2 from '../assets/avukatk2.jpeg';
import foto3 from '../assets/avukate3.jpeg';
import foto4 from '../assets/memurk2.jpeg';
import foto5 from '../assets/memure2.jpeg';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-light-gray">
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gold mb-6">Hakkımızda</h1>
          <p className="text-lg text-light-gray mb-6">
            Themis Hukuk Bürosu olarak, hukukun evrensel ilkelerini temel alan, müvekkillerimizin haklarını kararlılıkla savunan ve çözüm odaklı yaklaşımı benimseyen bir anlayışla hizmet sunmaktayız...
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Uzmanlık alanlarımız arasında ticaret hukuku, iş hukuku, ceza hukuku, aile hukuku, idare hukuku ve sözleşmeler hukuku başta olmak üzere geniş bir yelpazede profesyonel destek sunuyoruz. Her bir dava veya hukuki süreç, titizlikle ele alınmakta; etik ilkelere bağlı kalarak en etkili ve en hızlı şekilde sonuca ulaşmak hedeflenmektedir.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Themis Hukuk Bürosu, adını adaletin simgesi olan tanrıçadan alır. Biz de bu sorumluluğun bilinciyle, her koşulda adil, şeffaf ve güvenilir bir hukuk hizmeti sunmayı ilke edindik. Müvekkillerimizin her birine özel çözümler sunarak, onların yanında olduğumuzu hissettirmek bizim için yalnızca bir görev değil, aynı zamanda bir ilkedir.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Günümüzün değişen ve karmaşıklaşan hukuk dünyasında, yalnızca bilgiyle değil; aynı zamanda stratejik düşünme, hızlı aksiyon alma ve insana değer verme prensipleriyle hareket ediyoruz. Hukuki süreçlerinizde yanınızda güvenebileceğiniz bir ekip arıyorsanız, Themis Hukuk Bürosu her zaman bir telefon kadar yakınınızda.
          </p>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gold mb-8">Ekibimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-mid-blue rounded-lg shadow-md text-center">
                <img src={foto1} alt="Av. Ahmet Yılmaz" className="mx-auto rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gold">Av. Ahmet Yılmaz</h3>
                <p className="text-gold">İş Hukuku Uzmanı, 15 yıl deneyim</p>
              </div>
              <div className="p-4 bg-mid-blue rounded-lg shadow-md text-center">
                <img src={foto2} alt="Av. Elif Kaya" className="mx-auto rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gold">Av. Elif Kaya</h3>
                <p className="text-gold">Aile Hukuku Uzmanı, 10 yıl deneyim</p>
              </div>
              <div className="p-4 bg-mid-blue rounded-lg shadow-md text-center">
                <img src={foto3} alt="Av. Mehmet Demir" className="mx-auto rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gold">Av. Mehmet Demir</h3>
                <p className="text-gold">Ceza Hukuku Uzmanı, 12 yıl deneyim</p>
              </div>
              <div className="p-4 bg-mid-blue rounded-lg shadow-md text-center">
                <img src={foto4} alt="Memur Ayşe Çelik" className="mx-auto rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gold">Ayşe Çelik</h3>
                <p className="text-gold">Sekreter, 8 yıl deneyim</p>
              </div>
              <div className="p-4 bg-mid-blue rounded-lg shadow-md text-center">
                <img src={foto5} alt="Memur Ali Korkmaz" className="mx-auto rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gold">Ali Korkmaz</h3>
                <p className="text-gold">Muhasebeci, 6 yıl deneyim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;