// src/pages/public/LandingPage.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CalendarCheck, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function LandingPage() {
  const features = [
    {
      icon: CalendarCheck,
      title: 'Seamless Booking',
      description: 'Book your darshan slots instantly without waiting in long physical queues.',
      color: 'text-spiritual-indigo',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Temples',
      description: 'All connected temples are officially registered and verified by our team.',
      color: 'text-spiritual-saffron',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Sparkles,
      title: 'Spiritual Journey',
      description: 'Experience a peaceful and highly organized visit to your favorite deities.',
      color: 'text-spiritual-gold',
      bgColor: 'bg-orange-50',
    },
  ];

  const steps = [
    { num: '01', title: 'Find a Temple', desc: 'Search and discover popular temples across the country.' },
    { num: '02', title: 'Choose Slot', desc: 'Select a convenient date and time for your darshan.' },
    { num: '03', title: 'Get Blessed', desc: 'Visit the temple at your scheduled time with ease.' },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-spiritual-charcoal">
          <img
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful Indian Temple"
            className="w-full h-full object-cover animate-image-pan opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-spiritual-charcoal via-spiritual-charcoal/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-start gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/95 text-sm font-bold tracking-wide animate-fade-in-up"
          >
            <Sparkles size={18} className="text-spiritual-saffron" />
            <span className="uppercase tracking-widest text-[10px]">Your Spiritual Gateway</span>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif font-black text-white max-w-4xl leading-[1.05] tracking-tight"
            >
              Divine Blessings, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spiritual-saffron to-amber-300 italic">
                Simplified.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300/90 max-w-2xl leading-relaxed font-medium"
            >
              Skip the queues, focus on devotion. Secure your sacred darshan moments at India's holiest temples with effortless digital booking.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          >
            <Link
              to="/temples"
              className="w-full sm:w-auto px-10 py-5 bg-spiritual-saffron text-white rounded-2xl font-black text-lg shadow-2xl shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Explore Sanctuary
              <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              to="/signup"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md border-2 border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              Join as Organizer
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-spiritual-saffron rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Legacy & Value Section */}
      <section className="py-32 bg-spiritual-alabaster relative border-b border-indigo-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-spiritual-saffron font-black text-xs uppercase tracking-[0.3em] mb-6 block">The Digital Era of Devotion</span>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-spiritual-indigo mb-8 leading-tight">
                Empowering the modern Pilgrim.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                DarchanEase bridges ancient traditions with modern technology. We believe that your spiritual journey should be unburdened by administrative hurdles, allowing you to immerse fully in the divine experience.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l-4 border-spiritual-saffron pl-6 py-2">
                  <div className="text-3xl font-black text-spiritual-indigo mb-1">500+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Partner Temples</div>
                </div>
                <div className="border-l-4 border-spiritual-saffron pl-6 py-2">
                  <div className="text-3xl font-black text-spiritual-indigo mb-1">1M+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Happy Pilgrims</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "bg-white p-10 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500 group",
                    idx === 0 ? "md:row-span-2 flex flex-col justify-center" : ""
                  )}
                >
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner", feature.bgColor)}>
                    <feature.icon size={32} className={feature.color} />
                  </div>
                  <h3 className="text-2xl font-serif font-black text-spiritual-indigo mb-4">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-spiritual-indigo text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/10 rounded-full -mr-96 -mt-96 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-spiritual-saffron/10 rounded-full -ml-40 -mb-40 blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-24">
            <span className="text-spiritual-saffron font-black text-xs uppercase tracking-[0.3em] mb-6 block">Simple Path to Peace</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">
              Three Steps to Connection.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="relative mb-10 group">
                  <div className="absolute inset-0 bg-spiritual-saffron rounded-[40px] rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="w-32 h-32 bg-white rounded-[40px] flex items-center justify-center border-4 border-indigo-950 relative z-10 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                    <span className="text-4xl font-serif font-black text-spiritual-indigo">
                      {step.num}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-black mb-4">{step.title}</h3>
                <p className="text-indigo-200/70 max-w-xs font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24">
             <Link
                to="/signup"
                className="inline-flex items-center gap-3 px-10 py-5 bg-spiritual-saffron text-white rounded-2xl font-black text-xl shadow-2xl shadow-black/40 hover:bg-orange-600 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                Secure Your Slot Now
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;