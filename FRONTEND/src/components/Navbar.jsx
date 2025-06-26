import React from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../api/user.api";
import { logout } from "../store/slice/authSlice";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: "/" });
    } catch (error) {
      console.error("Logout failed:", error);
      // Even if the API call fails, we should still clear the local state
      dispatch(logout());
      navigate({ to: "/" });
    }
  };

  const handleLogin = () => {
    navigate({ to: "/auth" });
  };

  const handleRegister = () => {
    navigate({ to: "/auth" });
  };

  const handleCreateUrl = () => {
    navigate({ to: "/create" });
  };

  const handleDashboard = () => {
    navigate({ to: "/dashboard" });
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-400 shadow-md relative">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              URL Shortener
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center space-x-3">
            {/* Create Short URL button - always visible */}
            <button
              onClick={handleCreateUrl}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 cursor-pointer transition-all duration-200 flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              <span>Create Short URL</span>
            </button>

            {isAuthenticated ? (
              <>
                <button
                  onClick={handleDashboard}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold hover:from-green-600 hover:to-emerald-600 cursor-pointer transition-all duration-200 flex items-center space-x-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-white px-4 py-2 rounded-lg font-bold hover:bg-gray-300 cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleRegister}
                  className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 cursor-pointer"
                >
                  Custom URLs
                </button>
                <button
                  onClick={handleLogin}
                  className="bg-white px-4 py-2 rounded-lg font-bold hover:bg-gray-300 cursor-pointer"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
