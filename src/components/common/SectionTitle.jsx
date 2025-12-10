import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default SectionTitle;

