import React from "react";
import UserUrl from "../components/UserUrl";
import UrlForm from "../components/UrlForm";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your shortened URLs and track their performance
          </p>
        </div>

        {/* URL Form Section */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-8">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-3">🔗</span>
            <h2 className="text-xl font-bold text-gray-800">
              Create New Short URL
            </h2>
          </div>
          <UrlForm />
        </div>

        {/* URLs List Section */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📊</span>
              <h2 className="text-xl font-bold text-gray-800">Your URLs</h2>
            </div>
          </div>
          <UserUrl />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
