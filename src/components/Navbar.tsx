"use client";

import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Doctors", href: "#" },
  { label: "News", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0c1559]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="text-xl font-bold text-white">
          MEDDICAL
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            aria-label="Search"
            className="text-white/90 transition hover:text-sky-300"
          >
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#appointment"
            className="rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-[#0c1559] transition hover:bg-sky-300"
          >
            Appointment
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-sky-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              className="mt-2 inline-block w-fit rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-[#0c1559]"
            >
              Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}