import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zenthor-900 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-zenthor-accent rounded-full"></div>
            </div>
          <span className="text-xl font-bold tracking-tighter text-zenthor-900">
            ZENTHOR
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#vision" className="text-sm font-medium text-zenthor-700 hover:text-zenthor-900 transition-colors">Vision</a>
          <a href="#capabilities" className="text-sm font-medium text-zenthor-700 hover:text-zenthor-900 transition-colors">Capabilities</a>
          <a href="#specs" className="text-sm font-medium text-zenthor-700 hover:text-zenthor-900 transition-colors">Specs</a>
          <a href="#careers" className="text-sm font-medium text-zenthor-700 hover:text-zenthor-900 transition-colors">Careers</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-zenthor-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zenthor-700 transition-colors flex items-center gap-2">
            Pre-order Z-1
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zenthor-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 md:hidden">
           <a href="#vision" className="text-lg font-medium text-zenthor-900">Vision</a>
          <a href="#capabilities" className="text-lg font-medium text-zenthor-900">Capabilities</a>
          <a href="#specs" className="text-lg font-medium text-zenthor-900">Specs</a>
          <button className="bg-zenthor-900 text-white w-full py-3 rounded-lg text-center font-medium">
            Pre-order Z-1
          </button>
        </div>
      )}
    </nav>
  );
};