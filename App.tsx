import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Story } from './components/Story';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-zenthor-900 font-sans selection:bg-zenthor-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Story />
        
        {/* Simple Marquee Section */}
        <div className="bg-white py-12 overflow-hidden border-y border-gray-100">
             <div className="flex gap-16 animate-marquee whitespace-nowrap grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Logo Strip */}
                {['ACME Corp', 'Massive Dynamic', 'Cyberdyne', 'Stark Ind.', 'Wayne Ent.', 'Aperture', 'Black Mesa', 'Tyrell Corp'].map((company, i) => (
                    <span key={i} className="text-2xl font-bold text-gray-800 font-mono tracking-tighter">{company}</span>
                ))}
                 {['ACME Corp', 'Massive Dynamic', 'Cyberdyne', 'Stark Ind.', 'Wayne Ent.', 'Aperture', 'Black Mesa', 'Tyrell Corp'].map((company, i) => (
                    <span key={`dup-${i}`} className="text-2xl font-bold text-gray-800 font-mono tracking-tighter">{company}</span>
                ))}
             </div>
        </div>

        {/* FAQ Section */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
                {[
                    { q: "How much does Z-1 cost?", a: "Building a single Z-1 today costs approximately $25,000 at scale. We expect costs to drop significantly in 2026." },
                    { q: "Is the Z-1 safe to use around children?", a: "Yes. Z-1 is ISO 13482 compliant for personal care robots. Its sensors constantly map humans in 3D space to prevent collision." },
                    { q: "What is the battery life?", a: "Z-1 operates for 14 hours on a single charge and features hot-swappable battery packs for 24/7 operation." },
                    { q: "Can I program it with Python?", a: "Absolutely. We provide a full SDK for developers, though most users prefer our 'Show, Don't Code' imitation learning interface." }
                ].map((item, i) => (
                    <div key={i} className="border-b border-gray-200 pb-4">
                        <details className="group cursor-pointer">
                            <summary className="flex justify-between items-center font-medium list-none">
                                <span>{item.q}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-gray-600 mt-3 group-open:animate-fade-in">{item.a}</p>
                        </details>
                    </div>
                ))}
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;