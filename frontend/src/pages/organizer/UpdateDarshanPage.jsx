import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Save, X, Sparkles, IndianRupee, Users, Clock, Info, CheckCircle2, LayoutGrid, ArrowLeft } from 'lucide-react';
import { organizerDarshans } from '../../data/organizerDarshans';

function UpdateDarshanPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const darshan = organizerDarshans.find(d => d.id === id);

  const [formData, setFormData] = useState(
    darshan ? {
      name: darshan.name,
      price: darshan.price,
      maxPeoplePerSlot: darshan.maxPeoplePerSlot,
      description: darshan.description,
      status: darshan.status,
      slots: darshan.availableSlots.join('\n'),
    } : {
      name: '',
      price: '',
      maxPeoplePerSlot: '',
      description: '',
      status: 'Active',
      slots: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate premium save feedback
    const btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = 'Sanctifying...';
    setTimeout(() => {
      navigate('/organizer/my-darshans');
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
            Back to Catalog
          </motion.button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-spiritual-indigo/5 rounded-2xl flex items-center justify-center text-spiritual-indigo border border-spiritual-indigo/10 shadow-sm">
              <Sparkles size={24} />
            </div>
            <h1 className="text-4xl font-serif font-black text-spiritual-charcoal tracking-tight">
              {id === 'new' ? 'Create' : 'Refine'} <span className="text-spiritual-indigo">Darshan Service</span>
            </h1>
          </div>
          <p className="text-slate-500 font-medium max-w-xl">
            Configure the sacred timings, capacity, and contribution requirements for this darshan type.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-[48px] shadow-3xl shadow-indigo-950/5 border border-white overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              {/* Left Side */}
              <div className="space-y-8">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <LayoutGrid size={12} className="text-spiritual-saffron" />
                    Service Nomenclature
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. VIP Vaikunta Darshan"
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <IndianRupee size={12} className="text-spiritual-saffron" />
                      Sacred Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="300"
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                      <Users size={12} className="text-spiritual-saffron" />
                      Pilgrim Cap / Slot
                    </label>
                    <input
                      type="number"
                      name="maxPeoplePerSlot"
                      value={formData.maxPeoplePerSlot}
                      onChange={handleChange}
                      placeholder="50"
                      className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Clock size={12} className="text-spiritual-saffron" />
                    Hallowed Slots (One per line)
                  </label>
                  <textarea
                    name="slots"
                    value={formData.slots}
                    onChange={handleChange}
                    rows="4"
                    placeholder="06:00 AM - 07:00 AM&#10;07:00 AM - 08:00 AM"
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal resize-none"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-8">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-spiritual-saffron" />
                    Service Status
                  </label>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange} 
                    className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-spiritual-indigo focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-spiritual-charcoal appearance-none cursor-pointer"
                  >
                    <option value="Active">Operational Sanctuary</option>
                    <option value="Inactive">Halted / Pending</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <Info size={12} className="text-spiritual-saffron" />
                    Service Narrative
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Describe the unique spiritual significance of this darshan type..."
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
                 Propagate Service
               </button>
               <button
                 type="button"
                 onClick={() => navigate('/organizer/my-darshans')}
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

export default UpdateDarshanPage;