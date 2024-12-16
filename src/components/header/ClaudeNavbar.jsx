import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { 
    faHome, 
    faInfoCircle, 
    faTools, 
    faEnvelope 
  } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md">
      {/* Main navbar container */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo area */}
          <div className="flex items-center">
            <span className="text-xl font-bold">Logo</span>
          </div>

          {/* Desktop menu - hidden on mobile, flex on md screens */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600"><FontAwesomeIcon icon={faHome} className="h-4 w-4" />Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600"><FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4" />About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600"><FontAwesomeIcon icon={faTools} className="h-4 w-4" />Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600"><FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />Contact</a>
          </div>

          {/* Mobile menu button - shown on mobile, hidden on md screens */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon 
              icon={isOpen ? faXmark : faBars} 
              className="h-6 w-6" // Equivalent to size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel - absolute positioned dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="space-y-1 px-4 py-4">
            <a href="#" className="block p-2 text-gray-700 hover:bg-gray-50"><FontAwesomeIcon icon={faHome} className="h-4 w-4" />Home</a>
            <a href="#" className="block p-2 text-gray-700 hover:bg-gray-50"><FontAwesomeIcon icon={faInfoCircle} className="h-4 w-4" />About</a>
            <a href="#" className="block p-2 text-gray-700 hover:bg-gray-50"><FontAwesomeIcon icon={faTools} className="h-4 w-4" />Services</a>
            <a href="#" className="block p-2 text-gray-700 hover:bg-gray-50"><FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;