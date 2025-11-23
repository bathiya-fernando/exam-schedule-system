import { useState } from "react";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/sessions", label: "Sessions" },
    { to: "/exam-map", label: "Map" },
  ];

  return (
    <nav className="bg-gray-800 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Bhathiya</h1>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {menuItems.map((item) => (
              <Navigation
                key={item.to}
                to={item.to}
                isActive={location.pathname === item.to}
              >
                {item.label}
              </Navigation>
            ))}
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((item) => (
              <Navigation
                key={item.to}
                to={item.to}
                isActive={location.pathname === item.to}
                isMobile={true}
              >
                {item.label}
              </Navigation>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
