import React from 'react';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
  import ServiceCard from '../components/ServiceCard';
  import { useEffect, useState } from 'react';
  import { getServices } from '../services/api';

  const Services: React.FC = () => {
    const [services, setServices] = useState<{ title: string; description: string }[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await getServices();
        setServices(data);
      };
      fetchData();
    }, []);

    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          <div className="container mx-auto py-16 px-4">
            <h1 className="section-title">Hizmetlerimiz</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Services;