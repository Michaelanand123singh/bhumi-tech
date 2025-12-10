import React from 'react';

const CaseStudyCard = ({ title, description, results }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
      <p className="text-[#4a4a4a] mb-4">{description}</p>
      <div className="text-sm text-[#4a4a4a]">
        <p>Coming Soon</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;

