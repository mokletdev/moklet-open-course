"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Branding */}
        <div>
          <Image src="/Logo.svg" alt="Moklet Open Course" className="h-8" width={140} height={1} />
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="text-gray-700 hover:text-blue-500">Beranda</Link>
              <Link href="/jelajahi" className="text-gray-700 hover:text-blue-500">Jelajahi</Link>
              <Link href="/tentang-kami" className="text-gray-700 hover:text-blue-500">Tentang Kami</Link>
              <Link
          href="/daftar"
          className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-white hover:text-blue-600 hover:border border-blue-600 transition">
          Daftar
              </Link>
              <Link
          href="/masuk"
          className="text-blue-600 px-4 py-2 rounded border border-blue-600 hover:bg-blue-600 hover:text-white transition">
          Masuk
              </Link>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Beranda</Link>
          <Link href="/jelajahi" className="text-gray-700 hover:text-blue-500">Jelajahi</Link>
          <Link href="/tentang-kami" className="text-gray-700 hover:text-blue-500">Tentang Kami</Link>
        </div>

        {/* Buttons for Login/Signup */}
        <div className="hidden md:flex space-x-4 font-semibold">
          <Link
            href="/daftar"
            className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-white hover:text-blue-600 hover:border border-blue-600 transition">
            Daftar
          </Link>
          <Link
            href="/masuk"
            className="text-blue-600 px-4 py-2 rounded border border-blue-600 hover:bg-blue-600 hover:text-white transition">
            Masuk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
