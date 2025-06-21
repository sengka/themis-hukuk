import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hizmetlerimiz: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-light-gray">
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gold mb-6">Hizmetlerimiz</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-mid-blue rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gold">İş Hukuku</h3>
              <p className="text-gold mt-2">Çalışma sözleşmeleri ve iş uyuşmazlıkları konusunda uzmanlık.</p>
            </div>
            <div className="p-6 bg-mid-blue rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gold">Aile Hukuku</h3>
              <p className="text-gold mt-2">Boşanma, nafaka ve velayet davaları için profesyonel destek.</p>
            </div>
            <div className="p-6 bg-mid-blue rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gold">Ceza Hukuku</h3>
              <p className="text-gold mt-2">Suç ve cezai kovuşturmalarla ilgili hukuki savunma.</p>
            </div>
            <div className="p-6 bg-mid-blue rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gold">Ticaret Hukuku</h3>
              <p className="text-gold mt-2">Şirket birleşmeleri ve ticari anlaşmazlıklar için çözümler.</p>
            </div>
            <div className="p-6 bg-mid-blue rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gold">Miras Hukuku</h3>
              <p className="text-gold mt-2">Miras paylaşımı ve vasiyetname davaları konusunda hizmet.</p>
            </div>
            <div className="p-6 bg-mid-blue rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gold">İdare Hukuku</h3>
              <p className="text-gold mt-2">Kamu kurumlarıyla ilgili hukuki süreçlerde danışmanlık.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hizmetlerimiz;