import React, { useState } from 'react'
import { Link } from 'react-router'

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="px-4 py-2 md:px-6">
        <div className="flex items-center justify-between">
          {/* Left Section - Menu & Logo */}
          <div className="flex items-center gap-4 md:gap-6 min-w-fit">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">▶</span>
              </div>
              <span className="hidden md:inline font-bold text-lg dark:text-white">
                VidStream
              </span>
            </Link>
          </div>

          {/* Center Section - Search Bar */}
          <div className="hidden md:flex flex-1 mx-4 md:mx-8 max-w-96">
            <form
              onSubmit={handleSearch}
              className="w-full flex items-center"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-full focus:outline-none focus:border-blue-500 dark:text-white"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-gray-100 dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
            aria-label="Search"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Upload Button */}
            <button
              className="hidden md:flex items-center gap-1 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
              aria-label="Upload video"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h-2.96l4.24-5.18L9 5h3l1.89 2.15L16.75 5h2.96l-4.24 5.13L19 13h-3l-2.04-2.71z" />
              </svg>
            </button>

            {/* Notifications Button */}
            <button
              className="hidden md:flex relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
              aria-label="Notifications"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm hover:shadow-lg transition"
              aria-label="User profile"
            >
              A
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <form onSubmit={handleSearch} className="md:hidden mt-3 pb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-l-full focus:outline-none focus:border-blue-500 dark:text-white text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 dark:border-gray-700 mt-2 pt-2 pb-2">
            <Link
              to="/upload"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
            >
              Upload
            </Link>
            <Link
              to="/notifications"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
            >
              Notifications
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition"
            >
              Settings
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
