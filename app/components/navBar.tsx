'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

   const links = [
    { label: "View all", href: "/" },
    { label: "work from home", href: "/home" },
    { label: "work from netbox", href: "/netbox" },
  ];

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between py-4 bg-white">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto px-4">
        <Link href="/" className="flex items-center gap-4">
          <img src="/checklist.png" alt="check-list-logo" className="w-10 h-10" />
          <p className="text-2xl font-extrabold text-green-600">TODO LIST</p>
        </Link>

        {/* Burger Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`${isOpen ? "flex" : "hidden"} md:block w-full md:w-auto justify-center mt-6 border-b md:border-0 pb-6 px-12`}>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 md:mt-0 text-xl font-black text-green-900">
          {links.map((link) => (
            <li key={link.href} className="pb-2">
              <Link
                href={link.href}
                className={`${link.href === currentPath ? 'text-green-500' : 'text-green-800'} hover:text-blue-700 transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
