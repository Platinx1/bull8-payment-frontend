import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// Assuming the user has this image path set up
import authorizeImg from '../utils/images/unAuthorized.jpeg';

/**
 * A fancy, unauthorized access page component, specifically for payment-related
 * authorization failures. It includes a dynamic message and a visually appealing design.
 * 
 * @returns {JSX.Element} The UnauthorizedPage component.
 */
const UnauthorizedPage = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate a slight delay for the "fancy" entrance effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Redirect back to previous page after 5 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.history.back();
    }, 2000);
    return () => clearTimeout(redirectTimer);
  }, []);
  // You can pass a custom message via state from the navigation
  const state = location.state || {};
  const message = state.message || "You are not authorized to access this payment resource. Please log in with an account that has the necessary permissions.";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      
      {/* Container for the main content */}
      <div 
        className={`max-w-4xl w-full bg-white shadow-2xl rounded-xl overflow-hidden transition-all duration-1000 ease-out 
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex flex-col lg:flex-row">
          
          {/* Image Section - Visually appealing and large */}
          <div className="lg:w-1/2 p-6 flex items-center justify-center bg-indigo-50">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px]">
              <img 
                src={authorizeImg} 
                alt="Unauthorized Access" 
                className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 bg-indigo-900 bg-opacity-30 rounded-lg"></div>
            </div>
          </div>

          {/* Text and Action Section */}
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            
            {/* Header */}
            <h1 className="text-6xl font-extrabold text-red-600 mb-4 tracking-tight animate-pulse">
              403
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Access Denied
            </h2>
            
            {/* Main Message */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {message}
            </p>

            {/* Specific Callout for Payment */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-sm font-medium text-yellow-800">
                  <span className="font-bold">Payment Restriction:</span> This action requires a higher level of authorization.
                </p>
              </div>
            </div>

            
            
            {/* Footer/Support Link */}
            <p className="mt-8 text-sm text-gray-500">
              If you believe this is an error, please <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">contact support</a>.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background element for extra flair */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#4f46e5" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,208C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
