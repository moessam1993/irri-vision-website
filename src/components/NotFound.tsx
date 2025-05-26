import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6">The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-[#195769] text-white rounded-lg hover:bg-[#134252] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;