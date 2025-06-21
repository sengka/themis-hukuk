import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(data.message);
        setFormData({ name: '', email: '', message: '' }); // Formu temizle
      } else {
        setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
      }
    } catch (error) {
      setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue">
      <Navbar />
      <div className="flex-grow pt-16">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-gold mb-6 text-center">İletişim</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <form onSubmit={handleSubmit} className="bg-mid-blue p-6 rounded-lg shadow-md">
                <div className="mb-4 text-left">
                  <label className="block text-gold mb-2" htmlFor="name">Adınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-light-gray text-dark-blue"
                    required
                  />
                </div>
                <div className="mb-4 text-left">
                  <label className="block text-gold mb-2" htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-light-gray text-dark-blue"
                    required
                  />
                </div>
                <div className="mb-4 text-left">
                  <label className="block text-gold mb-2" htmlFor="message">Mesajınız</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-light-gray text-dark-blue h-32"
                    required
                  />
                </div>
                <button type="submit" className="btn bg-gold text-dark-blue hover:bg-light-gold px-6 py-3 w-full transition duration-300">
                  Gönder
                </button>
                {status && <p className="mt-4 text-center text-gold">{status}</p>}
              </form>
            </div>
            <div className="bg-mid-blue p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gold mb-4">Konumumuz</h2>
              <div className="mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12042.183272002965!2d36.17228325!3d41.28763285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4060e6f0f0f0f0f0%3A0x1234567890abcdef!2sSamsun%2C%20Türkiye!5e0!3m2!1str!2str!4v1624200000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Samsun Konum Haritası"
                ></iframe>
              </div>
              <p className="text-gold">
                Adres: Cumhuriyet Mahallesi, Atatürk Bulvarı No: 50, 55030 İlkadım/Samsun, Türkiye<br />
                Telefon: (0362) 258 20 20 
                Email: info@themis.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;