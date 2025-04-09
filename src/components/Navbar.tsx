'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">WorldView</Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
