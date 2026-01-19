import React from 'react';
import { Cpu, Zap, ShieldCheck, BrainCircuit } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 px-6 bg-[#f7f7f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zenthor-900 mb-6">
            Mundane made <span className="italic text-zenthor-accent">automated</span>.
          </h2>
          <p className="text-xl text-zenthor-600 max-w-2xl mx-auto">
            Powered by state-of-the-art multimodal AI models, Zenthor doesn't just execute code—it perceives, reasons, and adapts to the chaos of the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Large Card - Visual */}
          <div className="md:col-span-2 row-span-1 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
              alt="Industrial Robot Arm" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white max-w-md">
                <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="w-5 h-5 text-zenthor-accent" />
                    <span className="text-sm font-bold uppercase tracking-widest">Neural Learning</span>
                </div>
              <h3 className="text-3xl font-semibold mb-2">Imitation to Intuition</h3>
              <p className="text-gray-200">Z-1 learns from human demonstration in minutes, not months of coding. It generalizes skills across different objects.</p>
            </div>
          </div>

          {/* Tall Card - Specs */}
          <div className="md:col-span-1 row-span-1 bg-white rounded-3xl p-8 flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div>
               <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                 <Zap className="w-6 h-6 text-zenthor-900" />
               </div>
               <h3 className="text-2xl font-semibold text-zenthor-900 mb-4">Hyper-Speed Actuators</h3>
               <p className="text-zenthor-600">Built with custom torque sensors and low-latency motor controllers for human-like reflex speeds.</p>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">Response Time</span>
                    <span className="font-mono font-medium">8ms</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">Max Velocity</span>
                    <span className="font-mono font-medium">4.2 m/s</span>
                </div>
            </div>
          </div>

          {/* Wide Card - Safety */}
          <div className="md:col-span-2 bg-zenthor-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-white relative overflow-hidden">
             {/* Abstract BG Pattern */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-zenthor-accent rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="flex-1 z-10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Safety First. Second. Always.</h3>
                <p className="text-gray-300 mb-6">Designed for collaborative environments. The Z-1 constantly monitors its surroundings with LiDAR and vision systems to work safely alongside humans without cages.</p>
                <button className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-zenthor-accent hover:border-zenthor-accent transition-colors">
                    Read Safety Whitepaper
                </button>
             </div>
             <div className="flex-1 w-full h-48 md:h-full rounded-2xl overflow-hidden relative">
                <img 
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000"
                    alt="Robot Human Collaboration"
                    className="w-full h-full object-cover opacity-80"
                />
             </div>
          </div>

           {/* Small Card - Edge Compute */}
           <div className="md:col-span-1 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center">
             <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
             </div>
             <h3 className="text-xl font-semibold text-zenthor-900 mb-2">Onboard Compute</h3>
             <p className="text-sm text-zenthor-500">Running standard LLMs locally. No internet required for operation.</p>
           </div>

        </div>
      </div>
    </section>
  );
};