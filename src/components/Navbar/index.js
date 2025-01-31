import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = ({ toggle }) => {
  return (
    <nav className="bg-gradient-to-r from-red-500 to-yellow-500 shadow-lg p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2">
        🍕 <span>PizzaHub</span>
      </Link>
      
      {/* Menu Icon */}
      <button onClick={toggle} className="text-white text-lg flex items-center gap-2 px-4 py-2 bg-black rounded-lg hover:bg-opacity-80 transition-all">
        <span>Menu</span>
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
