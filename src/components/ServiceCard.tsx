import React from 'react';

  interface ServiceCardProps {
    title: string;
    description: string;
  }

  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-dark-green">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    );
  };

  export default ServiceCard;