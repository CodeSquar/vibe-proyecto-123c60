'use client';
import { useState } from 'react';
import { Pizza, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
          <Pizza size={32} />
          <span>LAUTI PIZZAS</span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <Link href="#inicio" className="hover:text-primary transition-colors">Inicio</Link>
          <Link href="#menu" className="hover:text-primary transition-colors">Menú</Link>
          <Link href="#nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
          <Link href="#contacto" className="hover:text-primary transition-colors">Contacto</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 font-medium">
          <Link href="#inicio" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link href="#menu" onClick={() => setIsOpen(false)}>Menú</Link>
          <Link href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link href="#contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      )}
    </nav>
  );
}