import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Save, X, Building2, MapPin, Sparkles, Clock, Globe, Info, Image as ImageIcon, ArrowLeft } from 'lucide-react';

function UpdateTemplePage() {
  const navigate = useNavigate();
  
  const [templeData, setTempleData] = useState({
    name: "Golden Temple Shrine",
    location: "Amritsar, Punjab",
    deity: "Guru Granth Sahib",
    description: "The Harmandir Sahib, also known as the Golden Temple, is a Gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.",
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1000",
    timings: "04:00 AM - 11:00 PM"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempleData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate premium save feedback
    const btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = 'Sanctifying...';
    setTimeout(() => {
      navigate('/organizer/my-temple');
    }, 800);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-8 hover:text-spiritual-indigo transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Sanctuary
          </motion.button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-spiritual-indigo/5 rounded-2xl flex items-center justify-center text-spiritual-indigo border border-spiritual-indigo/10 shadow-sm">
              <Building2 size={24} />
            </div>
            <h1 className="text-4xl font-serif font-black text-spiritual-charcoal tracking-tight">
              Update <span className="text-spiritual-indigo">Sanctuary Profile</span>
            </h1>
          </div>
          <p className="text-slate-500 font-medium max-w-xl">
            Refine the sacred information of your shrine for the global community of pilgrims.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-[48px] shadow-3xl shadow-indigo-950/5 border border-white overflow-hidden"
        >
          <form onSubmit={handleSave} className="p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {/* Basic Details */}
              <div className="space-y-8">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Sparkles size={12} className="text-spiritual-saffron" />
                    Temple Name
                  </label>
                  <input 
                    type="text" name="name" 
                    value={templeData.name} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal" 
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <MapPin size={12} className="text-spiritual-saffron" />
                    Sacred Location
                  </label>
                  <input 
                    type="text" name="location" 
                    value={templeData.location} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Globe size={12} className="text-spiritual-saffron" />
                    Main Deity
                  </label>
                  <input 
                    type="text" name="deity" 
                    value={templeData.deity} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal" 
                  />
                </div>
              </div>

              {/* Extended Details */}
              <div className="space-y-8">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Clock size={12} className="text-spiritual-saffron" />
                    Sanctuary Timings
                  </label>
                  <input 
                    type="text" name="timings" 
                    value={templeData.timings} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal" 
                    placeholder="e.g. 06:00 AM - 09:00 PM"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <ImageIcon size={12} className="text-spiritual-saffron" />
                    Cover Imagery URL
                  </label>
                  <input 
                    type="text" name="image" 
                    value={templeData.image} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal text-sm" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Info size={12} className="text-spiritual-saffron" />
                    Shrine Narrative
                  </label>
                  <textarea 
                    name="description" 
                    value={templeData.description} onChange={handleChange}
                    rows="4"
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal resize-none" 
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-slate-50">
               <button
                 type="submit"
                 className="flex-1 bg-spiritual-indigo text-white py-5 rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-indigo-900/20 hover:bg-spiritual-charcoal hover:-translate-y-1 transition-all"
               >
                 Propagate Changes
               </button>
               <button
                 type="button"
                 onClick={() => navigate(-1)}
                 className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-400 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-50 hover:text-slate-600 transition-all"
               >
                 Retract
               </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default UpdateTemplePage;