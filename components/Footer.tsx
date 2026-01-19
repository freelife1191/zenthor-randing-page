import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zenthor-900 text-white pt-24 pb-12 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            <div className="max-w-sm">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">ZENTHOR</h2>
                <p className="text-gray-400 mb-8">
                    Building the physical intelligence layer for the next industrial revolution.
                </p>
                <div className="flex gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/50 w-full"
                    />
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                        Join
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Product</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">Z-1 Robot</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Skill Library</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Studio</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Resources</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Social</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Twitter <ArrowUpRight className="w-3 h-3"/></a></li>
                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3"/></a></li>
                        <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3"/></a></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>© 2025 Zenthor Inc. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>All systems operational</span>
            </div>
        </div>
      </div>
    </footer>
  );
};