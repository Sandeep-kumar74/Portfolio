"use client";

import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      if (newTheme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  };

  const toggleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItem = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="fixed w-full bg-gray-100 dark:bg-gray-800 z-50 shadow-md">
      <div className="container max-w-7xl mx-auto px-4">
        {/* 🖥️ Desktop Navbar */}
        <div className="flex items-center justify-between h-16">
          {/* 🌟 Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Portfolio
          </Link>

          {/* 📁 Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItem.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${isActive ? "text-primary" : "text-white"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* 🌗 Desktop Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-700 text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>

          {/* 📱 Mobile menu toggle button */}
          <button
            onClick={toggleMobileMenuOpen}
            className="md:hidden p-2 rounded-lg dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* 📱 Mobile Menu Items with Logo & Dark/Light Toggle */}
        <div
          className={`fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* 🌟 Mobile Logo - same background as desktop navbar */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6">
            <Link href="/" className="text-2xl font-bold text-primary block">
              Portfolio
            </Link>
          </div>

          {/* Remaining mobile menu items - slightly darker than desktop navbar */}
          <div className="bg-gray-200 dark:bg-gray-700 h-full p-6 flex flex-col space-y-4">
            {menuItem.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-medium ${isActive ? "text-primary" : "text-white"
                    } hover:text-primary`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* 🌗 Mobile Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="mt-4 flex items-center gap-2 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-primary transition-colors cursor-pointer"            >
              {theme === "dark" ? (<><SunIcon className="w-5 h-5" />Light Mode</>) : (<><MoonIcon className="w-5 h-5" />Dark Mode</>)}
            </button>
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
