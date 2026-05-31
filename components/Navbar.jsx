"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      
      <div className="flex justify-between items-center h-16 px-6 md:px-12 max-w-screen-2xl mx-auto">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-cyan-400">
            terminal
          </span>

          <span className="text-cyan-400 font-mono font-bold tracking-tighter text-lg md:text-xl">
            {profile.name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-mono uppercase tracking-widest text-xs">

          <Link
            href="/"
            className={`${
                pathname === "/"
                  ? "text-cyan-400 border-b border-cyan-400 pb-1"
                  : "text-slate-400 hover:text-cyan-300"
              } transition-colors`}
          >
            Home
          </Link>

          {/* <Link
            href="/blogs"
            className={`${
                pathname === "/blogs"
                  ? "text-cyan-400 border-b border-cyan-400 pb-1"
                  : "text-slate-400 hover:text-cyan-300"
              } transition-colors`}
          >
            Blogs
          </Link> */}

          <Link
            href="/projects"
            className={`${
                pathname === "/projects"
                  ? "text-cyan-400 border-b border-cyan-400 pb-1"
                  : "text-slate-400 hover:text-cyan-300"
              } transition-colors`}
          >
            Projects
          </Link>

          <Link
            href="/experience"
            className={`${
                pathname === "/experience"
                  ? "text-cyan-400 border-b border-cyan-400 pb-1"
                  : "text-slate-400 hover:text-cyan-300"
              } transition-colors`}
          >
            Experience
          </Link>

          <Link
            href="/contact"
            className={`${
                pathname === "/contact"
                  ? "text-cyan-400 border-b border-cyan-400 pb-1"
                  : "text-slate-400 hover:text-cyan-300"
              } transition-colors`}
          >
            Contact
          </Link>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          {/* Resume Button */}
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            <button className="hidden sm:block bg-cyan-300 text-black px-6 py-2 font-mono uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all active:scale-95 cursor-pointer">
              Resume
            </button>
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-1 cursor-pointer active:scale-95 transition-transform"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              menu
            </span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden font-mono text-xs uppercase tracking-widest bg-slate-900 border-b border-slate-800 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >

        <Link
          href="/"
            className={`${
                pathname === "/"
                  ? "block px-6 py-4 border-b border-slate-800 text-cyan-400"
                  : "block px-6 py-4 border-b border-slate-800 text-slate-400"
              } transition-colors`}
        >
          Home
        </Link>

        {/* <Link
          href="/blogs"
            className={`${
                pathname === "/blogs"
                  ? "block px-6 py-4 border-b border-slate-800 text-cyan-400"
                  : "block px-6 py-4 border-b border-slate-800 text-slate-400"
              } transition-colors`}
        >
          Blogs
        </Link> */}

        <Link
          href="/projects"
            className={`${
                pathname === "/projects"
                  ? "block px-6 py-4 border-b border-slate-800 text-cyan-400"
                  : "block px-6 py-4 border-b border-slate-800 text-slate-400"
              } transition-colors`}
        >
          Projects
        </Link>

        <Link
          href="/experience"
            className={`${
                pathname === "/experience"
                  ? "block px-6 py-4 border-b border-slate-800 text-cyan-400"
                  : "block px-6 py-4 border-b border-slate-800 text-slate-400"
              } transition-colors`}
        >
          Experience
        </Link>

        <Link
          href="/contact"
            className={`${
                pathname === "/contact"
                  ? "block px-6 py-4 border-b border-slate-800 text-cyan-400"
                  : "block px-6 py-4 border-b border-slate-800 text-slate-400"
              } transition-colors`}
        >
          Contact
        </Link>

        <div className="px-6 py-4">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
            <button className="w-full bg-cyan-300 text-black py-3 font-mono uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all active:scale-95 cursor-pointer">
              Resume
            </button>
          </a>
        </div>

      </div>

    </nav>
  );
}