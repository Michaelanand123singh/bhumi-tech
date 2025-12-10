import React from 'react';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">Coming Soon</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@bhumitech.com</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 XXX XXX XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

