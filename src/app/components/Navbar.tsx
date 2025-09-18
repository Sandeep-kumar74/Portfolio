"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItem = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container max-w-7xl mx-auto px-4">
          {/* 🖥️ Desktop Navbar */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              Portfolio
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {menuItem.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-primary transition-colors font-medium ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-200"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="md:hidden p-2 rounded-lg dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Menu + Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* 🔳 Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* 📋 Menu */}
          <div className="fixed top-16 left-0 right-0 md:hidden flex flex-col space-y-2 
                bg-white/80 dark:bg-dark/80 backdrop-blur-sm px-4 py-4 z-50">
            {menuItem.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full px-2 py-2 rounded-md text-base font-medium transition-colors
          ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-200"} hover:text-primary`}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              onClick={toggleTheme}
              className="flex w-full items-center justify-start gap-2 px-2 py-2 rounded-md text-base font-medium 
    text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? (
                <>
                  <SunIcon className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

        </>
      )}
    </>
  );
};

export default Navbar;
