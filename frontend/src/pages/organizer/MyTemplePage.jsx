import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Calendar, Info, Edit, Building2, Map as MapIcon, ShieldCheck } from 'lucide-react';
import { organizerTemple } from '../../data/organizerTemple';

function MyTemplePage() {
  const navigate = useNavigate();
  const temple = organizerTemple;

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo text-[10px] font-black uppercase tracking-widest mb-4">
              <Building2 size={12} />
              Sanctuary Management
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-spiritual-charcoal tracking-tight">
              My <span className="text-spiritual-indigo">Temple Profile</span>
            </h1>
          </div>
          <Link
            to="/organizer/update-temple"
            className="group flex items-center gap-3 px-8 py-4 bg-spiritual-indigo text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal hover:-translate-y-1 transition-all"
          >
            <Edit size={18} className="group-hover:rotate-12 transition-transform" />
            Edit Profile
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Info Card */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-[40px] shadow-2xl shadow-indigo-950/5 border border-white p-10 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-spiritual-saffron/10 rounded-[20px] flex items-center justify-center text-spiritual-saffron">
                  <MapPin size={32} />
                </div>
                <div>
                   <h2 className="text-3xl font-serif font-black text-spiritual-indigo mb-1">{temple.name}</h2>
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     {temple.status}
                   </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Holy Deity</p>
                    <p className="text-xl font-serif font-black text-spiritual-charcoal">{temple.deity}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Sacred Timings</p>
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Clock size={16} className="text-spiritual-indigo" />
                      {temple.timings}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Established</p>
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Calendar size={16} className="text-spiritual-indigo" />
                      {temple.established}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Divine Location</p>
                    <p className="text-slate-700 font-bold">{temple.location}</p>
                    <p className="text-slate-400 text-sm italic">{temple.address}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Support Contact</p>
                    <div className="flex items-center gap-2 text-slate-700 font-bold">
                      <Phone size={16} className="text-spiritual-indigo" />
                      {temple.contact}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-50">
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                   <Info size={14} className="text-spiritual-saffron" />
                   Sacred Description
                 </h3>
                 <p className="text-slate-600 text-lg leading-relaxed font-medium">
                   {temple.description}
                 </p>
              </div>
            </motion.div>

            {/* Gallery placeholder */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="bg-white/50 backdrop-blur-md rounded-[40px] border border-white p-10"
            >
               <h3 className="text-sm font-black text-spiritual-indigo uppercase tracking-[0.2em] mb-8">Sanctuary Imagery</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {temple.images.map((_, i) => (
                    <div key={i} className="aspect-video bg-spiritual-indigo/5 rounded-3xl border-2 border-dashed border-spiritual-indigo/10 flex flex-col items-center justify-center text-spiritual-indigo/40 group hover:border-spiritual-indigo/30 transition-colors cursor-pointer">
                      <MapIcon size={32} className="mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-black uppercase">Sacred View {i + 1}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-spiritual-charcoal rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-950/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-spiritual-saffron/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="text-xl font-serif font-black text-spiritual-saffron mb-6">Shrine Status</h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Verification</span>
                    <span className="flex items-center gap-1.5 text-xs font-black text-emerald-400 uppercase">
                      <ShieldCheck size={14} />
                      Sacred Trusted
                    </span>
                 </div>
                 <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Visibility</span>
                    <span className="text-xs font-black uppercase">Public Sanctuary</span>
                 </div>
                 <div className="flex justify-between items-center py-4">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Last Blessed</span>
                    <span className="text-xs font-black uppercase">Today</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="bg-spiritual-indigo rounded-[40px] p-10 text-white"
            >
               <h3 className="text-xl font-serif font-black mb-4">Need Ceremony Support?</h3>
               <p className="text-indigo-200/70 text-sm font-medium leading-relaxed mb-8">
                 Consult with our sanctuary experts to optimize your devotee experience and ritual management.
               </p>
               <button className="w-full py-4 bg-white/10 hover:bg-white/20 transition-colors rounded-2xl text-xs font-black uppercase tracking-widest border border-white/10">
                 Contact Guardian
               </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTemplePage;