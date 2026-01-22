import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Electrical Services', path: '/electrical-services' },
    { name: 'New Construction', path: '/new-construction' },
    { name: 'Home Security Services', path: '/security-services' },
    { name: 'Generator Services', path: '/generator-services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="GSE Integrated" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-primary-500 text-white font-medium rounded-md hover:bg-primary-600 transition-colors duration-200"
            >
              Submit Request
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-md hover:bg-primary-600 transition-colors duration-200"
            >
              Submit Request
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              {isOpen ? 'Close' : 'Services'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-base font-medium rounded-md ${
                    isActive(link.path)
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
