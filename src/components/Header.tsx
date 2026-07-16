/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenInbox?: () => void;
  unreadCount?: number;
}

export default function Header({ onOpenInbox, unreadCount = 0 }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracker on scroll
      const sections = ['inicio', 'quienes-somos', 'servicios', 'infraestructura', 'ubicacion', 'contacto', 'acceso-clientes'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos', id: 'quienes-somos' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Infraestructura', href: '#infraestructura', id: 'infraestructura' },
    { label: 'Ubicación', href: '#ubicacion', id: 'ubicacion' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-md py-4 border-b border-gray-100 backdrop-blur-md'
          : 'bg-white/90 shadow-sm py-5 border-b border-gray-100/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo ADG */}
          <a
            id="logo-link"
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center group"
          >
            <Logo lightBg={true} height={56} />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  id={`nav-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 ease-in-out hover:scale-[1.04] active:scale-95 ${
                    isActive
                      ? 'text-brand-green bg-brand-green-pale/90 shadow-[0_3px_12px_-4px_rgba(4,69,36,0.18)] border border-brand-green/10'
                      : 'text-gray-600 font-medium hover:bg-brand-green-pale/50 hover:text-brand-green'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Clients access action button */}
            <a
              id="header-client-access-btn"
              href="#acceso-clientes"
              onClick={(e) => handleNavClick(e, '#acceso-clientes')}
              className={`flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out border hover:scale-105 active:scale-95 hover:shadow-md ${
                activeSection === 'acceso-clientes'
                  ? 'bg-brand-green text-white border-brand-green shadow-sm'
                  : 'bg-white text-brand-green border-brand-green/30 hover:border-brand-green hover:bg-brand-green/5'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Acceso Clientes</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-brand-green focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                id={`mobile-nav-${item.id}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-base font-medium py-1.5 transition-colors ${
                  activeSection === item.id ? 'text-brand-green font-bold pl-2 border-l-2 border-brand-green' : 'text-gray-600'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              id="mobile-nav-acceso-clientes"
              href="#acceso-clientes"
              onClick={(e) => handleNavClick(e, '#acceso-clientes')}
              className={`flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all border ${
                activeSection === 'acceso-clientes'
                  ? 'bg-brand-green text-white border-brand-green'
                  : 'bg-brand-green-pale text-brand-green border-brand-green/20'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>Acceso Clientes</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
