import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-zenthor-900">
      {/* 3D Model Background */}
      {/* 
         Removed pointer-events-none from the container to allow user interaction (Orbit) with the 3D model.
      */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* @ts-ignore */}
        <spline-viewer 
          url="https://prod.spline.design/OZLlsHkQZsKQqIYv/scene.splinecode"
          className="w-full h-full" 
        ></spline-viewer>
        
        {/* Gradients to blend edges - updated to dark to match potential dark 3D scene */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 pb-12 pointer-events-none">
        
        {/* Main Headline */}
        <div className="max-w-3xl pointer-events-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/60 mb-6">
                <span className="w-2 h-2 rounded-full bg-zenthor-accent animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wide text-zenthor-800">Beta Launching Q4 2025</span>
            </div>
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white leading-[0.95] mb-6">
            Precision <br />
            <span className="text-gray-300">meets</span> Intuition.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
            Zenthor Z-1 isn't just a robot. It's an embodied intelligence designed to adapt, learn, and collaborate in dynamic industrial environments.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="group bg-white text-zenthor-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all flex items-center gap-2">
              Explore the Z-1
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all">
              Watch the Film
            </button>
          </div>
        </div>

        {/* Bottom Status / Scroll Indicator */}
        <div className="flex justify-between items-end pointer-events-auto">
            <div className="hidden md:flex gap-12">
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Payload</p>
                    <p className="text-2xl font-semibold text-white">12kg</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Reach</p>
                    <p className="text-2xl font-semibold text-white">1.4m</p>
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Precision</p>
                    <p className="text-2xl font-semibold text-white">±0.03mm</p>
                </div>
            </div>

            <div className="animate-bounce p-3 bg-white/50 rounded-full backdrop-blur-sm border border-white/60">
                <ChevronDown className="w-6 h-6 text-zenthor-900" />
            </div>
        </div>
      </div>
    </section>
  );
};