import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-md bg-white px-4 py-2 
                   text-gray-700 shadow-sm hover:bg-gray-50
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>{label}</span>
        <FontAwesomeIcon 
          icon={faChevronDown}
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.icon && (
                <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
              )}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage with icons
import { 
  faHome, 
  faUser, 
  faCog, 
  faSignOut 
} from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  const menuItems = [
    { label: 'Home', href: '#', icon: faHome },
    { label: 'Profile', href: '#', icon: faUser },
    { label: 'Settings', href: '#', icon: faCog },
    { label: 'Logout', href: '#', icon: faSignOut }
  ];

  return (
    <DropdownMenu 
      label="Menu" 
      items={menuItems} 
    />
  );
};

export default Dropdown;