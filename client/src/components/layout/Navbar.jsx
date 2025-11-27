import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-black via-neutral-900 to-black text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50 border-b border-white/10">
      {/* 🌌 Logo with gradient text */}
      <Link
        to="/"
        className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 
                   text-transparent bg-clip-text hover:opacity-90 
                   transition duration-300 ease-in-out"
      >
        DevSpace
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {["home", "about", "projects", "contact"].map((id) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className="hover:text-blue-400 transition tracking-wide"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}

        {token ? (
          <>
            <Link to="/admin" className="hover:text-blue-400 transition">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-medium transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm font-medium transition"
          >
            Admin Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-black via-neutral-950 to-black text-center py-4 space-y-3 md:hidden shadow-md border-t border-white/10">
          {["home", "about", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="block w-full text-white hover:text-blue-400 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}

          {token ? (
            <>
              <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-white hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-medium transition mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm font-medium transition mt-2"
            >
              Admin Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
