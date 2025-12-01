"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./logo";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navItems = [
    { 
      label: "Services", 
      hasDropdown: true,
      href: "/",
      // dropdownItems: [
      //   { label: "Market Research", href: "/solutions/market-research" },
      //   { label: "GTM Strategy", href: "/solutions/gtm-strategy" },
      //   { label: "Pitch Deck", href: "/solutions/pitch-deck" },
      // ]
    },
    { 
      label: "About", 
      hasDropdown: true,
      href: "/about-us",
      // dropdownItems: [
      //   { label: "Our Story", href: "/about/our-story" },
      //   { label: "Team", href: "/about/team" },
      //   { label: "Careers", href: "/about/careers" },
      // ]
    },
    // { 
    //   label: "Porfolio", 
    //   hasDropdown: true,
    //   href: "/learn",
    //   // dropdownItems: [
    //   //   { label: "Blog", href: "/learn/blog" },
    //   //   { label: "Resources", href: "/learn/resources" },
    //   //   { label: "Case Studies", href: "/learn/case-studies" },
    //   // ]
    // },
    { label: "Contact", hasDropdown: false, href: "/contact" },
  ];

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <header className="bg-[#0A0A0A] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1">
            <a href="/" className="flex items-center space-x-2 w-fit">
              <Logo/>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-sm font-medium hover:text-[#00D17A] transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </a>
                  
                  {/* Desktop Dropdown */}
                  {/* {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#1A1A1A] rounded-lg shadow-xl py-2 border border-gray-800">
                      {item.dropdownItems.map((dropItem) => (
                        <a
                          key={dropItem.label}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-[#00FF94] hover:bg-[#252525] transition-colors"
                        >
                          {dropItem.label}
                        </a>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}
            </nav>
          </div>

          {/* CTA Button - Desktop */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <a 
              href="/contact"
              className="hidden md:block bg-[#00FF94] hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Book a Consultation
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-[#00FF94] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`md:hidden fixed inset-0 top-16 bg-black/80 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="h-full px-6 py-6 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-800 last:border-b-0">
              <a
                href={item.href}
                className="block py-4 font-medium text-lg text-white hover:text-[#00FF94] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </div>
          ))}
          
          {/* Mobile CTA Button */}
          <a 
            href="/contact"
            className="block w-full mt-6 bg-[#00FF94] hover:bg-green-600 text-black font-semibold px-6 py-4 rounded-lg transition-colors text-center text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}