import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you use React Router for navigation
import useAuth from "../Hook/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useAuth();
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Implement logout functionality
    logOut()
    console.log("Logout");
  };

  return (
    <nav className="bg-[#55AD9B] px-12 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white text-4xl font-bold">
            Task MNG
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white">
            Home
          </Link>

          {user ? (
            <>
              <div className="relative">
                <button
                  onClick={handleMenuToggle}
                  className="text-white flex items-center"
                >
                  <img title={user?.displayName}
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-2">{user.name}</span>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-gray-800  hover:bg-gray-200 w-full "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/signup" className="text-white">
                Register
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#51a393] py-2">
          <Link to="/" className="block px-4 py-2 text-white">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="block px-4 py-2 text-white">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-white w-full "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-4 py-2 text-white">
                Login
              </Link>
              <Link to="/signup" className="block px-4 py-2 text-white">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
