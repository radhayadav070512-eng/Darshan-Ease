import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, IndianRupee, Users, Clock, Edit, Plus, Trash2, LayoutGrid, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { organizerDarshans } from '../../data/organizerDarshans';

function MyDarshansPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo text-[10px] font-black uppercase tracking-widest mb-4">
              <LayoutGrid size={12} />
              Service Catalog
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-black text-spiritual-charcoal tracking-tight">
              My <span className="text-spiritual-indigo">Darshan Types</span>
            </h1>
          </div>
          <Link
            to="/organizer/update-darshan/new"
            className="group flex items-center gap-3 px-8 py-4 bg-spiritual-indigo text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal hover:-translate-y-1 transition-all"
          >
            <Plus size={18} className="group-hover:rotate-90 transition-transform" />
            Add New Type
          </Link>
        </div>

        {organizerDarshans.length === 0 ? (
          <div className="bg-white/50 backdrop-blur-md rounded-[48px] border-2 border-dashed border-slate-200 p-20 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
               <Sparkles size={32} />
            </div>
            <h3 className="text-2xl font-serif font-black text-spiritual-charcoal mb-2">No Darshan Types Yet</h3>
            <p className="text-slate-500 font-medium max-w-sm mx-auto">Define the sacred experiences available at your shrine to begin welcoming pilgrims.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {organizerDarshans.map((darshan, idx) => (
                <motion.div
                  key={darshan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-[40px] shadow-2xl shadow-indigo-950/5 border border-white overflow-hidden hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-serif font-black text-spiritual-indigo mb-2 group-hover:text-spiritual-saffron transition-colors">
                          {darshan.name}
                        </h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                          <CheckCircle2 size={12} className={darshan.status === 'Active' ? 'text-emerald-500' : 'text-slate-300'} />
                          {darshan.status}
                        </p>
                      </div>
                      <div className="w-14 h-14 bg-spiritual-indigo/5 rounded-2xl flex items-center justify-center text-spiritual-indigo">
                        <Sparkles size={24} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                       <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/50">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                            <IndianRupee size={10} />
                            Sacred Contribution
                          </p>
                          <p className="text-lg font-black text-spiritual-charcoal">₹{darshan.price}</p>
                       </div>
                       <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/50">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                            <Users size={10} />
                            Capacity / Slot
                          </p>
                          <p className="text-lg font-black text-spiritual-charcoal">{darshan.maxPeoplePerSlot} Souls</p>
                       </div>
                    </div>

                    <div className="mb-8">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                         <Clock size={12} className="text-spiritual-saffron" />
                         Hallowed Time Slots
                       </p>
                       <div className="flex flex-wrap gap-2">
                         {darshan.availableSlots.map((slot, i) => (
                           <span key={i} className="px-3 py-1.5 bg-white border border-slate-100 rounded-xl text-[11px] font-bold text-slate-600 shadow-sm">
                             {slot}
                           </span>
                         ))}
                       </div>
                    </div>

                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between gap-4">
                      <Link
                        to={`/organizer/update-darshan/${darshan.id}`}
                        className="flex-1 flex items-center justify-center gap-2 py-4 bg-spiritual-indigo/5 text-spiritual-indigo rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-spiritual-indigo hover:text-white transition-all transition-all"
                      >
                        <Edit size={14} />
                        Refine Type
                      </Link>
                      <button 
                        className="p-4 text-slate-300 hover:text-red-500 transition-colors"
                        title="Remove Type"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyDarshansPage;