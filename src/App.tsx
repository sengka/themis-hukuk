import React from 'react';
  import { Route, Routes } from 'react-router-dom';
  import Home from './pages/Home';
  import Services from './pages/Services';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Appointments from './pages/Appointments';
  import Hizmetlerimiz from './pages/Hizmetlerimiz';
  import { AppProvider } from './context/AppContext';

  const App: React.FC = () => {
    return (
      <AppProvider>
        <div className="flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
          </Routes>
        </div>
      </AppProvider>
    );
  };

  export default App;