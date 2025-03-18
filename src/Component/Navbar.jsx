import { Link } from "react-router-dom";
import { House } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="shadow-md">
      
      <div className="container mx-auto flex justify-between items-center p-4 fixed bg-amber-300">
        <div >
        <Link to="/">
                <House className="cursor-pointer w-8 h-8 text-black my-1 " />
        </Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
              <li>
              {/* <Link to="/">
                <House className="cursor-pointer w-8 h-8 text-black my-1 " />
              </Link> */}
            </li>
            <li>
              <Link to="/skills">
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">
                  Skills
                </button>
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">
                  Experience
                </button>
              </Link>
            </li>
            <li>
              <Link to="/project">
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link to="/education">
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">
                  Education
                </button>
              </Link>
            </li>
            <li>
              <Link to="/certificate">
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">
                  Certificates
                </button>
              </Link>
            </li>
            <li>
              <Link to="/contactus">
                <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-500 transition duration-300">
                  Contact Us
                </button>
              </Link>
            </li>
            

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
