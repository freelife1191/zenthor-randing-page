import React from 'react';
import { Play } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section id="vision" className="bg-white py-24">
       {/* Section 1 */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
                <span className="text-zenthor-accent font-bold tracking-widest uppercase text-sm mb-4 block">Deployment</span>
                <h2 className="text-4xl md:text-6xl font-semibold text-zenthor-900 mb-8 leading-tight">
                    Works where <br/>
                    others <span className="text-gray-400">won't.</span>
                </h2>
                <p className="text-xl text-zenthor-600 mb-8 leading-relaxed">
                    Traditional robots require structured environments. Zenthor thrives in chaos. From messy assembly lines to unpredictable logistics centers, the Z-1 perceives depth and texture to handle unique objects with delicate precision.
                </p>
                <div className="pl-6 border-l-4 border-zenthor-accent">
                    <p className="text-lg italic text-zenthor-800 font-medium">"It’s not just about repetition. It’s about adaptation. We dropped Z-1 into our sorting facility and it learned the workflow in 4 hours."</p>
                    <p className="text-sm text-gray-500 mt-2">— CTO, Global Logistics Partner</p>
                </div>
            </div>
            <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
                    <img 
                        src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1600" 
                        alt="Robot in warehouse" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 transition-transform group-hover:scale-110">
                            <Play className="w-8 h-8 text-white fill-current ml-1" />
                        </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs font-mono">
                        Autonomous • 4x Speed
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Section 2 - Wide Video/Image */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] bg-zenthor-900">
             <img 
                src="https://images.unsplash.com/photo-1535378437321-125c1b63309a?auto=format&fit=crop&q=80&w=2400"
                alt="Robot close up"
                className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
             <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 max-w-2xl">
                <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">Designed for real use.</h3>
                <p className="text-lg text-gray-300 mb-8">
                    Privacy protected. Safety certified. Built with a low center of gravity and a lightweight magnesium alloy body, Zenthor is safe for small workshops and massive factories alike.
                </p>
                <button className="bg-white text-zenthor-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    View Full Specifications
                </button>
             </div>
        </div>
      </div>
    </section>
  );
};