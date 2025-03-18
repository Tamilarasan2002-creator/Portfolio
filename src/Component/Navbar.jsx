import { useState } from "react";
import { Link } from "react-router-dom";
import { House, Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-amber-300 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Home Icon */}
        <Link to="/" className="flex items-center">
          <House className="cursor-pointer w-8 h-8 text-black" />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <nav className="hidden md:flex space-x-6">
          {["Skills", "Experience", "Project", "Education", "Certificate", "Contact Us"].map(
            (item, index) => (
              <Link key={index} to={`/${item.toLowerCase().replace(" ", "")}`}>
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">
                  {item}
                </button>
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-amber-300 flex flex-col items-center py-4 space-y-4">
          {["Skills", "Experience", "Project", "Education", "Certificate", "Contact Us"].map(
            (item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)}
              >
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300 w-full text-center">
                  {item}
                </button>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
