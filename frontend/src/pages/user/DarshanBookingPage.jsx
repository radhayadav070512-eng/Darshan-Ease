import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, IndianRupee, CheckCircle2, ArrowLeft } from 'lucide-react';

function DarshanBookingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking || {
    temple: "Sacred Temple Shrine",
    darshan: "General Darshan",
    price: 300,
    slot: "Dawn Session (7:00 AM - 8:00 AM)",
    date: "2026-03-10"
  };

  const handleConfirm = () => {
    // Artificial delay for premium feel
    setTimeout(() => {
      navigate('/my-bookings');
    }, 500);
  };

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-8 hover:text-spiritual-indigo transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Selection
        </motion.button>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-[48px] shadow-3xl shadow-indigo-950/5 border border-white overflow-hidden"
        >
          <div className="p-12 md:p-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <div className="inline-block px-4 py-1 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                  Final Verification
                </div>
                <h1 className="text-4xl font-serif font-black text-spiritual-charcoal tracking-tight">Booking Confirmation</h1>
              </div>
              <div className="w-16 h-16 bg-spiritual-saffron/10 rounded-2xl flex items-center justify-center text-spiritual-saffron shadow-inner">
                <CheckCircle2 size={32} />
              </div>
            </div>

            <div className="space-y-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Temple Sanctuary</p>
                  <div className="flex items-center gap-3 text-spiritual-indigo font-serif font-black text-xl">
                    <MapPin size={20} className="text-spiritual-saffron" />
                    {booking.temple}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Selected Darshan</p>
                  <p className="text-spiritual-charcoal font-black text-xl">{booking.darshan}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pilgrimage Date</p>
                  <div className="flex items-center gap-3 text-spiritual-charcoal font-bold">
                    <Calendar size={18} className="text-spiritual-indigo" />
                    {booking.date}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Appointed Slot</p>
                  <div className="flex items-center gap-3 text-spiritual-charcoal font-bold">
                    <Clock size={18} className="text-spiritual-indigo" />
                    {booking.slot}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50 flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Spiritual Contribution</p>
                  <div className="flex items-center gap-2 text-3xl font-serif font-black text-spiritual-indigo">
                    <IndianRupee size={24} />
                    {booking.price}
                  </div>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-slate-300 italic">Inclusive of all hallowed taxes</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full bg-spiritual-indigo text-white py-5 rounded-[24px] font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal hover:-translate-y-1 active:scale-95 transition-all"
            >
              Confirm Sacred Appointment
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6">
              By confirming, you agree to follow all sanctuary protocols and traditions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DarshanBookingPage;