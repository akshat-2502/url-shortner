import React, { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
import { queryClient } from "../main";

const UrlForm = () => {
  //state variables
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const [customSlug, setCustomSlug] = useState("");
  const [error, setError] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.auth);

  //handle submit
  const handleSubmit = async () => {
    const shorttheurl = await createShortUrl(url, customSlug);
    setShortUrl(shorttheurl);
    queryClient.invalidateQueries({ queryKey: ["userUrls"] });
    setError(null);
  };
  //handle copy
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="url"
          className="block font-semibold text-sm text-gray-800 mb-2"
        >
          Enter Your URL
        </label>
        <div className="relative">
          <input
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
            type="url"
            id="url"
            value={url}
            onInput={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        ✨ Shorten URL
      </button>

      {/* {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )} */}
      {isAuthenticated && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200">
          <label
            htmlFor="customSlug"
            className="flex items-center text-sm font-semibold text-gray-800 mb-2"
          >
            <span className="mr-2">🎯</span>
            Custom URL (optional)
          </label>
          <div className="relative">
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(event) => setCustomSlug(event.target.value)}
              placeholder="my-awesome-link"
              className="w-full px-4 py-3 border-2 border-yellow-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 bg-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Create a memorable custom link for your URL
          </p>
        </div>
      )}

      {shortUrl && (
        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 animate-fadeIn">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-2">🎉</span>
            <h2 className="text-lg font-bold text-green-800">
              Success! Your URL is ready
            </h2>
          </div>
          <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-md border border-green-200">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-4 bg-transparent text-gray-800 font-mono text-sm focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className={`px-6 py-4 font-semibold transition-all duration-200 ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              } flex items-center space-x-2`}
            >
              {copied ? (
                <>
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
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
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    ></path>
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-green-700 mt-3 flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Share this link anywhere on the web
          </p>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
