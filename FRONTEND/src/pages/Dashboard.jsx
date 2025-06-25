import React from "react";
import UserUrl from "../components/UserUrl";
import UrlForm from "../components/UrlForm";

const Dashboard = () => {
  return (
    <div className="h-screen -mt-25 bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white border border-blue-600 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
        <UserUrl />
      </div>
    </div>
  );
};

export default Dashboard;
