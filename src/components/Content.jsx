import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F0] py-12 px-8 md:px-16 lg:px-24">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Company Info */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <Logo color="#2D5A3D" width={120} height={90} />
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Empowering brands with creative marketing strategies, innovative campaigns, and data-driven insights to connect with audiences and drive growth.
            </p>
            <p className="text-gray-600 text-sm mb-8">
              123 Innovation Drive, Suite 100,<br />
              San Francisco, CA 94107
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#2D5A3D] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2D5A3D] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2D5A3D] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#2D5A3D] flex items-center justify-center hover:bg-[#1e3d29] transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#2D5A3D] uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#2D5A3D] uppercase tracking-wider mb-4">GTM Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">Market Research</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">Go-to-Market Strategy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">Pitch Deck & Messaging</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">Content Strategy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-[#2D5A3D] uppercase tracking-wider mb-4">Contact us</h3>
            <ul className="space-y-3">
              <li><a href="mailto:hello@gtmlabs.co" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">hello@gtmlabs.co</a></li>
              <li><a href="tel:+14155551234" className="text-gray-600 hover:text-[#2D5A3D] transition-colors">(415) 555-1234</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            Copyright 2025 © GTM Labs
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-[#2D5A3D] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-[#2D5A3D] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}