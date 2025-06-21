import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useAppContext();
  return (
    <nav className="bg-dark-blue text-light-gray p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-gold">Themis Hukuk</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="inline-block p-2 rounded-lg hover:bg-light-gold hover:text-dark-blue hover:shadow-md transition duration-300">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/about" className="inline-block p-2 rounded-lg hover:bg-light-gold hover:text-dark-blue hover:shadow-md transition duration-300">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/hizmetlerimiz" className="inline-block p-2 rounded-lg hover:bg-light-gold hover:text-dark-blue hover:shadow-md transition duration-300">Hizmetlerimiz</Link>
          </li>
          <li>
            <Link to="/contact" className="inline-block p-2 rounded-lg hover:bg-light-gold hover:text-dark-blue hover:shadow-md transition duration-300">İletişim</Link>
          </li>
          <li>
            <Link to="/appointments" className="inline-block p-2 rounded-lg hover:bg-light-gold hover:text-dark-blue hover:shadow-md transition duration-300">Randevu</Link>
          </li>
        </ul>
        <button onClick={toggleTheme} className="btn bg-gold text-dark-blue hover:bg-light-gold">
          {theme === 'light' ? 'Koyu Mod' : 'Açık Mod'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;