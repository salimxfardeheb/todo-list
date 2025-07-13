'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname()
  const links = [
    { label: "work from home", href: "/home" },
    { label: "work from netbox", href: "/netbox" },
  ];
  return (
    <nav className="flex items-center justify-between p-4">
      {/* logo */}
      <Link href="/" className="flex md:justify-center items-center m-4 md:gap-4">
        <img src="/checklist.png" alt="check-list-logo" className="max-w-18" />
        <p className="text-4xl font-extrabold text-green-600">TODO LIST</p>
      </Link>
      <ul className="md:flex flex-col md:flex-row gap-8 mx-20 text-xl font-black hidden text-green-900">
        {links.map((link) => (
          <Link
          key={link.href} 
          href={link.href} className={`${link.href === currentPath ? 'text-green-500' : 'text-green-800'} hover:text-blue-700 transition-colors`}>{link.label}</Link>
        ))}
      </ul>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;
