'use client'
import Link from 'next/link'
import React from 'react'
import {links } from "../variables"
import { usePathname } from 'next/navigation';



const Footer = () => {
  const currentPath = usePathname();
  return (
    <div className="md:flex justify-between items-center w-full md:w-auto px-4 bg-blue-400 py-10 ">
        <Link href="/" className="flex items-center gap-4">
          <img src="/checklist.png" alt="check-list-logo" className="w-10 h-10" />
          <p className="text-2xl font-extrabold text-white">TODO LIST</p>
        </Link>
        <div className="w-full md:w-auto justify-center mt-6 pb-6 px-12">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-24 md:mt-0 text-xl font-black text-green-900">
          {links.map((link) => (
            <li key={link.href} className="pb-2">
              <Link
                href={link.href}
                className={`${link.href === currentPath ? 'text-white' : 'text-green-800'} transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
Footer