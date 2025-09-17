import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <img
            className="w-16 h-16 object-cover rounded-full border-2 border-rose-500 shadow-lg"
            src="/images/logo.webp"
            alt="Restaurant Logo"
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
};
