// src/pages/user/TempleDetailsPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { temples } from '../../data/temples';
import { useBookings } from '../../context/BookingsContext';
import { useAuth } from '../../context/AuthContext';
import { MapPin, Info, IndianRupee, Users, Clock, ArrowLeft, CheckCircle2, CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function TempleDetailsPage() {
  const { id } = useParams();
  const temple = temples.find(t => t.id === Number(id));
  const { addBooking } = useBookings();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selectedDarshan, setSelectedDarshan] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!temple) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-display font-bold text-slate-900">Temple Not Found</h1>
          <p className="text-slate-500">The temple you are looking for does not exist.</p>
          <Link to="/temples" className="inline-block mt-4 text-spiritual-emerald hover:underline font-medium">
            ← Back to Temples
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!user) {
      alert('Please login to book a darshan!');
      navigate('/login');
      return;
    }

    if (!selectedDarshan || !selectedSlot) {
      alert('Please select both a darshan type and a time slot.');
      return;
    }

    const userName = document.getElementById('userName')?.value;
    const userAge = document.getElementById('userAge')?.value;
    const userGender = document.getElementById('userGender')?.value;
    const idType = document.getElementById('idType')?.value;
    const idNumber = document.getElementById('idNumber')?.value;

    if (!userName || !userAge || !idNumber) {
      alert('Please fill in all personal details.');
      return;
    }

    addBooking({
      templeName: temple.name,
      darshanName: selectedDarshan.name,
      price: selectedDarshan.price,
      slot: selectedSlot,
      userName,
      age: userAge,
      gender: userGender,
      idType,
      idNumber
    });

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedDarshan(null);
      setSelectedSlot(null);
      navigate('/my-bookings');
    }, 2500);
  };

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Toast Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="fixed top-24 right-6 z-[100] bg-white border-2 border-spiritual-saffron/20 shadow-2xl shadow-orange-500/10 rounded-[24px] p-6 flex items-center gap-4 border-l-8 border-l-spiritual-saffron"
          >
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle2 size={28} className="text-spiritual-saffron" />
            </div>
            <div>
              <p className="text-spiritual-indigo font-black text-lg">Blessings Secured!</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Entry confirmed into {temple.name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Image Section */}
      <div className="w-full h-[60vh] relative overflow-hidden group">
        <div className="absolute inset-0 bg-spiritual-charcoal/40 group-hover:bg-spiritual-charcoal/30 z-10 transition-colors duration-700"></div>
        <img 
          src={temple.image} 
          alt={temple.name}
          className="w-full h-full object-cover animate-image-pan"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-spiritual-charcoal via-spiritual-charcoal/60 to-transparent">
          <Link 
            to="/temples" 
            className="absolute top-8 left-8 text-white/90 hover:text-white flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 transition-all hover:bg-white/20 hover:scale-105 active:scale-95 group/back"
          >
            <ArrowLeft size={18} className="group-hover/back:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm tracking-wide">Back to Sanctuaries</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 max-w-4xl"
          >
            <div className="inline-block px-5 py-1.5 rounded-full bg-spiritual-saffron text-white text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-xl shadow-orange-500/30">
              Eternal Deity: {temple.deity}
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-white mb-6 drop-shadow-2xl tracking-tighter">
              {temple.name}
            </h1>
            <div className="flex items-center justify-center gap-3 text-white/80 text-lg font-medium">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-spiritual-saffron border border-white/10">
                <MapPin size={20} />
              </div>
              <span className="tracking-wide underline decoration-spiritual-saffron/50 decoration-2 underline-offset-8">{temple.location}, {temple.state}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[48px] p-10 md:p-14 shadow-2xl shadow-indigo-900/5 border border-white"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-spiritual-indigo">
                  <Info size={24} />
                </div>
                <h2 className="text-3xl font-serif font-black text-spiritual-indigo">Hallowed History</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-xl font-medium">
                {temple.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[48px] p-10 md:p-14 shadow-2xl shadow-indigo-900/5 border border-white"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-spiritual-saffron">
                  <CalendarDays size={24} />
                </div>
                <h2 className="text-3xl font-serif font-black text-spiritual-indigo">Darshan Varieties</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {temple.darshans.map((darshan, idx) => (
                  <div 
                    key={darshan.id}
                    onClick={() => {
                        setSelectedDarshan(darshan);
                        setSelectedSlot(null);
                    }}
                    className={cn(
                      "p-8 rounded-[32px] border-2 transition-all cursor-pointer relative overflow-hidden group/card",
                      selectedDarshan?.id === darshan.id
                        ? "border-spiritual-saffron bg-orange-50/30 shadow-2xl shadow-orange-500/10 -translate-y-1"
                        : "border-slate-50 hover:border-indigo-100 bg-white hover:shadow-xl hover:-translate-y-1"
                    )}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-serif font-black text-spiritual-indigo leading-tight">{darshan.name}</h3>
                      <div className="bg-spiritual-charcoal text-white px-4 py-1.5 rounded-full text-sm font-black flex items-center gap-1.5 shadow-lg group-hover/card:bg-spiritual-indigo transition-colors font-display">
                        <IndianRupee size={14} />
                        {darshan.price}
                      </div>
                    </div>
                    
                    <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">
                      {darshan.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <Users size={14} className="text-spiritual-saffron" />
                        <span>Max {darshan.maxPeoplePerSlot} Pilgrims / Slot</span>
                    </div>

                    {selectedDarshan?.id === darshan.id && (
                       <div className="absolute top-0 right-0 w-12 h-12 bg-spiritual-saffron flex items-center justify-center rounded-bl-3xl animate-bounce-in">
                          <CheckCircle2 size={24} className="text-white" />
                       </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar Column */}
          <div className="lg:col-span-1">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-white rounded-[48px] p-10 shadow-3xl shadow-indigo-950/10 border-2 border-white sticky top-28"
            >
              <h2 className="text-3xl font-serif font-black text-spiritual-indigo mb-2">Divine Pass</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-8">Secure your sacred entry</p>
              
              {selectedDarshan ? (
                <div className="space-y-8 animate-fade-in-up">
                  <div className="p-6 bg-spiritual-indigo/5 rounded-[24px] border border-indigo-100 relative overflow-hidden group/mini">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-spiritual-indigo/5 rounded-full -mr-12 -mt-12 transition-transform group-hover/mini:scale-110"></div>
                    <p className="text-[10px] font-black text-spiritual-indigo uppercase tracking-widest mb-1">Selected Path</p>
                    <p className="font-serif font-black text-xl text-spiritual-indigo">{selectedDarshan.name}</p>
                    <div className="flex items-center gap-1 text-spiritual-saffron font-black mt-2 text-lg">
                      <IndianRupee size={16} />
                      {selectedDarshan.price}
                    </div>
                  </div>

                  {/* Personal Details Form */}
                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pilgrim Name</label>
                      <input id="userName" type="text" required placeholder="Enter full name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-spiritual-indigo focus:bg-white outline-none transition-all font-bold text-sm" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Age</label>
                        <input id="userAge" type="number" required placeholder="Age" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-spiritual-indigo focus:bg-white outline-none transition-all font-bold text-sm" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Gender</label>
                        <select id="userGender" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-spiritual-indigo focus:bg-white outline-none font-bold text-sm cursor-pointer appearance-none">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Digital ID Type</label>
                      <select id="idType" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-spiritual-indigo focus:bg-white outline-none font-bold text-sm cursor-pointer appearance-none">
                        <option>Passport</option>
                        <option>Driving License</option>
                        <option>Student ID</option>
                        <option>Other Govt ID</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">ID Identifier</label>
                      <input id="idNumber" type="text" required placeholder="ID Card Number" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 focus:border-spiritual-indigo focus:bg-white outline-none transition-all font-bold text-sm" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Available Slots</label>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedDarshan.slots.map((slot, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedSlot(slot)}
                          className={cn(
                            "py-3.5 px-4 text-xs font-black rounded-2xl border-2 transition-all flex items-center justify-center gap-2",
                            selectedSlot === slot
                              ? "bg-spiritual-charcoal text-white border-spiritual-charcoal shadow-xl scale-[1.05]"
                              : "bg-white text-slate-500 border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/50"
                          )}
                        >
                          <Clock size={16} className={selectedSlot === slot ? "text-spiritual-saffron" : "text-slate-300"} />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-50">
                    <button
                      onClick={handleBooking}
                      disabled={!selectedSlot}
                      className="w-full py-5 px-6 bg-gradient-to-r from-spiritual-indigo to-indigo-900 text-white rounded-[24px] font-black text-xl shadow-2xl shadow-indigo-900/30 hover:shadow-indigo-900/40 hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {selectedSlot ? 'Reserve Now' : 'Select a Slot'}
                    </button>
                    <p className="mt-4 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">Instant Digital Verification</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20 px-8 rounded-[40px] border-4 border-dashed border-slate-100 bg-slate-50/50">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                    <CalendarDays size={32} className="text-slate-300" />
                  </div>
                  <p className="text-slate-400 text-sm font-black uppercase tracking-widest leading-relaxed">Select a darshan variety to view sacred time slots.</p>
                </div>
              )}
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default TempleDetailsPage;