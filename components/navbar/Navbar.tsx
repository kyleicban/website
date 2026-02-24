"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition-opacity rounded"
          >
            KYLE DRAKE ICBAN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/work-experience">Work</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/stickers">Stickers</NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-neutral-500"
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-neutral-900 dark:bg-neutral-100 transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-neutral-900 dark:bg-neutral-100 transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-neutral-900 dark:bg-neutral-100 transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-4">
            <MobileNavLink href="/about" onClick={() => setOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink
              href="/work-experience"
              onClick={() => setOpen(false)}
            >
              Work
            </MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </MobileNavLink>
            <MobileNavLink href="/stickers" onClick={() => setOpen(false)}>
              Stickers
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
