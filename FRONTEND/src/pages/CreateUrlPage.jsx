import React from "react";
import UrlForm from "../components/UrlForm";

const CreateUrlPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Hero section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Create Short URL
          </h1>
          <p className="text-gray-600 text-lg">
            Transform your long URLs into short, shareable links
          </p>
        </div>
        
        {/* Form container */}
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <UrlForm />
        </div>
        
        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm font-medium text-gray-700">Fast</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-sm font-medium text-gray-700">Secure</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm font-medium text-gray-700">Analytics</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUrlPage;
