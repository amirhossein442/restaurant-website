import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white w-full py-6  border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* لوگو */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12h.01M12 12h.01M18 12h.01M9 16.5C9 17.88 10.12 19 11.5 19h1c1.38 0 2.5-1.12 2.5-2.5V9a6 6 0 00-12 0v7.5C3 17.88 4.12 19 5.5 19h1c1.38 0 2.5-1.12 2.5-2.5V9"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-rose-400">RESTAURANT</h1>
        </div>

        {/* متن پایینی */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyRestaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
