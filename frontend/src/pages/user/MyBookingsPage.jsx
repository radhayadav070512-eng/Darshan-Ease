// src/pages/user/MyBookingsPage.jsx
import { useBookings } from '../../context/BookingsContext';
import { Link } from 'react-router-dom';
import { Ticket, Calendar, Clock, MapPin, IndianRupee, QrCode, Download, ChevronRight, Users, X, AlertCircle, Info, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { temples } from '../../data/temples';

function MyBookingsPage() {
  const { bookings, cancelBooking, updateBookingDate } = useBookings();
  const [showQR, setShowQR] = useState(null);
  const [reschedulingId, setReschedulingId] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [cancellingId, setCancellingId] = useState(null);

  const handleReschedule = (id) => {
    if (newDate) {
      updateBookingDate(id, newDate);
      setReschedulingId(null);
      setNewDate('');
    }
  };

  const confirmCancel = () => {
    if (cancellingId) {
      cancelBooking(cancellingId);
      setCancellingId(null);
    }
  };

  const upcomingCount = bookings.length;
  const popularTemples = temples.slice(0, 3);

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      <div className="pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6">

        {bookings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg bg-white rounded-[32px] border-2 border-dashed border-slate-100 p-16 text-center shadow-xl shadow-indigo-950/5"
          >
            <div className="w-16 h-16 bg-indigo-50 text-spiritual-indigo rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Ticket size={32} />
            </div>
            <h2 className="text-2xl font-serif font-black text-spiritual-charcoal mb-3">No Bookings Yet</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              You haven't reserved any darshan slots. Start your sacred journey today.
            </p>
            <Link to="/temples" className="inline-flex px-8 py-3.5 bg-spiritual-indigo text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-spiritual-charcoal transition-all">
              Explore Temples
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* LEFT: Booking Cards */}
            <div className="flex flex-col gap-6 flex-1 min-w-0">
            {bookings.map((booking, idx) => {
              const templeData = temples.find(t => t.name === booking.templeName);
              const templeImage = templeData?.image || "/temples/Kedarnath.jpg";

              return (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="group flex flex-col sm:flex-row bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_-10px_rgba(30,27,75,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(30,27,75,0.12)] transition-all duration-400 border border-slate-50"
                >
                  {/* Temple Image — compact */}
                  <div className="w-full sm:w-44 h-36 sm:h-auto relative overflow-hidden shrink-0 bg-slate-100">
                    <img src={templeImage} alt={booking.templeName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 via-black/10 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur text-[8px] font-black uppercase tracking-wider text-emerald-600 px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-sm">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                        Confirmed
                      </span>
                    </div>
                  </div>

                  {/* Main Info */}
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-between min-w-0">
                    <div>
                      {/* Type Badge + Name */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-black text-spiritual-saffron uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">
                          {booking.bookingType || 'General Darshan'}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-serif font-black text-spiritual-charcoal tracking-tight mb-4 truncate">
                        {booking.templeName}
                      </h3>

                      {/* Detail Pills Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100/80">
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                            <Calendar size={10} className="text-spiritual-indigo" /> Date
                          </p>
                          <p className="text-sm font-bold text-spiritual-charcoal">{booking.date}</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100/80">
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                            <Clock size={10} className="text-spiritual-indigo" /> Time Slot
                          </p>
                          <p className="text-sm font-bold text-spiritual-charcoal">{booking.slot || 'Morning Batch'}</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100/80">
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1.5">
                            <Users size={10} className="text-spiritual-indigo" /> Devotee
                          </p>
                          <div className="flex items-center gap-2">
                            <img src={`https://i.pravatar.cc/60?u=${booking.userName}`} alt="" className="w-5 h-5 rounded-full border border-white shadow-sm" />
                            <p className="text-sm font-bold text-spiritual-charcoal truncate">{booking.userName || 'Pilgrim'}</p>
                          </div>
                        </div>
                        <div className="bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100/80">
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                            <Info size={10} className="text-spiritual-indigo" /> {booking.idType || 'ID'}
                          </p>
                          <p className="text-sm font-mono font-bold text-slate-600 truncate">{booking.idNumber || '----'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                      {reschedulingId === booking.id ? (
                        <div className="flex-1 flex items-center gap-2 bg-slate-50 rounded-xl border border-slate-200 px-3 py-2">
                          <input type="date" className="flex-1 bg-transparent text-xs outline-none font-bold text-spiritual-charcoal" onChange={(e) => setNewDate(e.target.value)} />
                          <button onClick={() => handleReschedule(booking.id)} className="bg-spiritual-indigo text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider">Save</button>
                        </div>
                      ) : (
                        <button onClick={() => setReschedulingId(booking.id)} className="flex-1 text-slate-400 hover:text-spiritual-indigo hover:bg-indigo-50 text-[10px] font-black uppercase tracking-widest py-2.5 rounded-xl transition-all border border-slate-100 active:scale-95">
                          Reschedule
                        </button>
                      )}
                      <button onClick={() => setCancellingId(booking.id)} className="px-4 py-2.5 bg-red-50 text-red-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-95 border border-red-100/50">
                        Cancel
                      </button>
                    </div>
                  </div>

                  {/* QR Pass — compact right strip */}
                  <div className="w-full sm:w-36 bg-slate-50/60 border-t sm:border-t-0 sm:border-l border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 p-4 shrink-0 relative">
                    <div className="hidden sm:block absolute -top-4 -left-4 w-8 h-8 bg-spiritual-cream rounded-full border border-slate-100"></div>
                    <div className="hidden sm:block absolute -bottom-4 -left-4 w-8 h-8 bg-spiritual-cream rounded-full border border-slate-100"></div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Pass</p>
                    <div
                      className="w-20 h-20 bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setShowQR(showQR === booking.id ? null : booking.id)}
                    >
                      <AnimatePresence mode="wait">
                        {showQR === booking.id ? (
                          <motion.div key="qr" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                            <QrCode size={56} className="text-spiritual-indigo" />
                          </motion.div>
                        ) : (
                          <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-1.5">
                            <QrCode size={28} className="text-slate-200" />
                            <span className="text-[7px] font-black text-slate-400 tracking-widest text-center leading-tight">TAP</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <p className="font-mono text-[10px] font-black text-spiritual-indigo bg-indigo-50 border border-indigo-100/50 px-2 py-1 rounded-lg tracking-wider w-full text-center">
                      BK-{booking.id.toString().slice(-6)}
                    </p>
                    <button className="w-full bg-spiritual-indigo text-white flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-black text-[9px] uppercase tracking-wider hover:bg-spiritual-charcoal transition-all group">
                      <Download size={11} className="group-hover:-translate-y-0.5 transition-transform" /> Save
                    </button>
                  </div>
                </motion.div>
              );
            })}
            </div>

            {/* RIGHT: Mantra Sidebar — vertical */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex w-52 xl:w-60 shrink-0 flex-col gap-8 lg:sticky lg:top-28 self-start pl-2 pt-2"
            >
              <p className="text-6xl text-spiritual-saffron/20 font-serif leading-none select-none text-center">ॐ</p>

              <div className="space-y-2">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.25em]">Maha Mantra</p>
                <p className="text-sm font-serif font-bold text-spiritual-charcoal/60 leading-loose">
                  हरे कृष्ण हरे कृष्ण,<br/>कृष्ण कृष्ण हरे हरे।<br/>हरे राम हरे राम,<br/>राम राम हरे हरे॥
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-spiritual-saffron/15"></div>
                <div className="w-1 h-1 bg-spiritual-saffron/30 rounded-full"></div>
                <div className="flex-1 h-px bg-spiritual-saffron/15"></div>
              </div>

              <div className="space-y-2">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.25em]">Gayatri Mantra</p>
                <p className="text-xs font-serif font-medium text-spiritual-charcoal/50 leading-loose italic">
                  ॐ भूर्भुवः स्वः,<br/>तत्सवितुर्वरेण्यं।<br/>भर्गो देवस्य धीमहि,<br/>धियो यो नः प्रचोदयात्॥
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-spiritual-saffron/15"></div>
                <div className="w-1 h-1 bg-spiritual-saffron/30 rounded-full"></div>
                <div className="flex-1 h-px bg-spiritual-saffron/15"></div>
              </div>

              <div className="space-y-2">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.25em]">Shiva Mantra</p>
                <p className="text-lg font-serif font-bold text-spiritual-indigo/35 tracking-widest leading-loose">
                  ॐ नमः शिवाय
                </p>
              </div>

              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest text-center">शांति • शांति • शांति</p>
            </motion.div>
          </div>
        )}

        {/* Custom Confirmation Modal */}
        <AnimatePresence>
          {cancellingId && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-spiritual-charcoal/80 backdrop-blur-xl"
            >
               <motion.div 
                 initial={{ scale: 0.9, y: 30 }}
                 animate={{ scale: 1, y: 0 }}
                 exit={{ scale: 0.9, y: 30 }}
                 className="bg-spiritual-cream rounded-[48px] p-12 max-w-lg w-full shadow-3xl border border-white relative overflow-hidden"
               >
                 <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                 <button 
                   onClick={() => setCancellingId(null)}
                   className="absolute top-8 right-8 p-3 bg-white/50 backdrop-blur-md rounded-full text-slate-400 hover:text-spiritual-indigo transition-all"
                 >
                   <X size={24} />
                 </button>

                 <div className="text-center">
                   <div className="w-24 h-24 bg-red-50 rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-inner">
                     <AlertCircle size={48} className="text-red-500" />
                   </div>
                   <h3 className="text-3xl font-serif font-black text-spiritual-indigo mb-4">Relinquish Darshan?</h3>
                   <p className="text-slate-500 font-medium mb-12 leading-relaxed px-4">
                     Are you truly certain you wish to cancel this sacred reservation? Your chosen slot will be immediately offered to another pilgrim.
                   </p>

                   <div className="flex flex-col gap-4">
                     <button 
                       onClick={confirmCancel}
                       className="w-full py-5 bg-red-600 text-white rounded-[24px] font-black text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-500/30 active:scale-95"
                     >
                       Yes, Relinquish Slot
                     </button>
                     <button 
                       onClick={() => setCancellingId(null)}
                       className="w-full py-5 bg-white text-slate-500 rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all border border-slate-100"
                     >
                       Keep My Reservation
                     </button>
                   </div>
                 </div>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Icon wrapper for ID card since it wasn't correctly imported
function IdCard(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
    </svg>
  );
}

export default MyBookingsPage;