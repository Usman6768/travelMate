import React, { useState } from 'react';

const AgentNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showSection = (section) => {
    console.log(`Show section: ${section}`);
    // You can use React Router or state to change sections
    // e.g., setCurrentSection(section);
  };

  return (
    <div className="flex justify-between h-16 bg-neutral-900 px-4 rounded-2xl">
      {/* Logo + Navigation Links */}
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <span className="text-xl font-bold text-white">TravelMate</span>
        </div>
        <nav className="hidden lg:ml-10 lg:flex items-center space-x-8">
          <button
            onClick={() => showSection('dashboard-overview')}
            className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Overview
          </button>
          <button
            onClick={() => showSection('booking-requests')}
            className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Booking Requests
          </button>
          <button
            onClick={() => showSection('packages')}
            className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Packages
          </button>
          <button
            onClick={() => showSection('chat')}
            className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Chat
          </button>
          <button
            onClick={() => showSection('analytics')}
            className="text-neutral-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Analytics
          </button>
        </nav>
      </div>

      {/* Notification + Profile + Mobile Button */}
      <div className="flex items-center">
        <div className="hidden lg:flex items-center space-x-4">
          {/* Notification Bell */}
          <button
            type="button"
            className="inline-flex items-center px-3 py-1 border border-neutral-400/30 rounded-md text-sm font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="relative">
              <span>3</span>
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center border-l border-neutral-700/30 pl-4">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://avatar.iran.liara.run/public"
                alt="User avatar"
              />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-white">Usman</div>
              <div className="text-xs text-neutral-400">Local Agent</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden ml-auto inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            // Close icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default AgentNavbar;
