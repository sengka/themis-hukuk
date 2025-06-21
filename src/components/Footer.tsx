import React from 'react';

  const Footer: React.FC = () => {
    return (
      <footer className="bg-black-anthracite text-light-beige p-4 text-center mt-auto">
        <p>© 2025 Themis Hukuk Bürosu. Tüm hakları saklıdır.</p>
        <div className="mt-2">
          <a href="mailto:info@themis.com" className="text-gold-500 hover:underline mx-2">info@themis.com</a>
          <a href="tel:+905551234567" className="text-gold-500 hover:underline mx-2">(0362) 258 20 20</a>
        </div>
      </footer>
    );
  };

  export default Footer;