import { useState } from 'react';
import { Link } from 'react-router-dom';
import { temples } from '../../data/temples';
import { useBookings } from '../../context/BookingsContext';
import { Search, MapPin, X, Calendar, Users, Info, User as UserIcon, IdCard, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function TempleListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('All');
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [bookingStatus, setBookingStatus] = useState(null); // 'success' or null

  const { addBooking } = useBookings();

  const filteredTemples = temples.filter(temple => {
    const matchesSearch = temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temple.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'All' || temple.region === filterRegion;
    return matchesSearch && matchesRegion;
  });

  const handleBookDarshan = (e, temple) => {
    e.preventDefault();
    setSelectedTemple(temple);
    setBookingStatus(null);
  };

  const submitBooking = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingData = {
      templeName: selectedTemple.name,
      templeId: selectedTemple.id,
      date: formData.get('date'),
      visitors: formData.get('visitors'),
      bookingType: formData.get('bookingType'),
      userName: formData.get('userName'),
      age: formData.get('age'),
      gender: formData.get('gender'),
      idType: formData.get('idType'),
      idNumber: formData.get('idNumber')
    };

    addBooking(bookingData);
    setBookingStatus('success');
    setTimeout(() => {
      setSelectedTemple(null);
      setBookingStatus(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo font-bold text-[10px] uppercase tracking-[0.2em] mb-6"
          >
            Sacred Heritage of India
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-spiritual-charcoal mb-6 tracking-tight leading-tight"
          >
            Divine <span className="text-spiritual-saffron italic">Sanctuaries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Discover centuries of spiritual legacy. Book your hallowed darshan at India's most revered shrines with digital ease.
          </motion.p>
        </div>

        {/* Controls: Search & Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex bg-white/50 backdrop-blur-md p-1.5 rounded-2xl shadow-xl shadow-indigo-900/5 border border-white/40">
            {['All', 'North', 'South'].map((region) => (
              <button
                key={region}
                onClick={() => setFilterRegion(region)}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  filterRegion === region 
                    ? 'bg-spiritual-indigo text-white shadow-lg' 
                    : 'text-slate-400 hover:text-spiritual-indigo hover:bg-white'
                }`}
              >
                {region === 'All' ? 'All Shrines' : `${region} India`}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-md group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-spiritual-saffron transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search temple, city, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4.5 rounded-[24px] border border-white bg-white/70 backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-2xl shadow-indigo-900/5 font-medium placeholder:text-slate-400/70"
            />
          </div>
        </div>

        {/* Shrines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          <AnimatePresence>
            {filteredTemples.map((temple, idx) => (
              <motion.div
                key={temple.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-white rounded-[48px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(30,27,75,0.06)] border border-indigo-50/50 flex flex-col hover:-translate-y-3 transition-all duration-700 relative"
              >
                {/* Image Section with Glass Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spiritual-indigo/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Glass Badge for Region */}
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                      {temple.region} India
                    </div>
                  </div>

                  {/* Deity Info Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="w-10 h-10 bg-spiritual-saffron/90 backdrop-blur-lg text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <Star size={16} fill="currentColor" />
                    </div>
                  </div>
                  
                  <Link 
                    to={`/temples/${temple.id}`}
                    className="absolute bottom-6 right-6 w-12 h-12 bg-white text-spiritual-indigo rounded-[20px] flex items-center justify-center shadow-2xl hover:bg-spiritual-saffron hover:text-white transition-all scale-0 group-hover:scale-100 duration-500 group/link"
                  >
                    <Info size={20} className="group-hover/link:rotate-12 transition-transform" />
                  </Link>
                </div>

                {/* Info Section */}
                <div className="p-8 md:p-10 flex flex-col flex-1 relative">
                  {/* Decorative Gradient Blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                  <div className="flex items-center gap-2.5 text-spiritual-saffron text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <div className="w-1.5 h-1.5 bg-spiritual-saffron rounded-full animate-pulse"></div>
                    {temple.location}
                  </div>
                  
                  <h3 className="text-2xl font-serif font-black text-spiritual-charcoal mb-2 group-hover:text-spiritual-indigo transition-colors tracking-tight leading-tight">
                    {temple.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Presiding:</span>
                    <span className="text-[9px] font-black text-spiritual-indigo uppercase tracking-widest bg-spiritual-indigo/5 px-2 py-0.5 rounded-lg border border-spiritual-indigo/10">{temple.deity}</span>
                  </div>

                  <p className="text-slate-500 text-sm font-medium line-clamp-2 mb-8 leading-relaxed group-hover:text-slate-600 transition-colors">
                    {temple.description}
                  </p>

                  <div className="mt-auto pt-7 border-t border-slate-50/80 flex items-center justify-between">
                    <div className="flex flex-col gap-1 mt-5">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Darshan Access</span>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-baseline gap-1 mr-2">
                        <span className="text-lg font-serif font-black text-spiritual-charcoal tracking-tight">₹{temple.entryFee || 'Free'}</span>
                        {temple.entryFee !== 0 && typeof temple.entryFee === 'number' && (
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">/ p.p</span>
                        )}
                      </div>
                      
                      <button 
                        onClick={(e) => handleBookDarshan(e, temple)}
                        className="px-6 py-3 bg-spiritual-indigo text-white rounded-[18px] font-black text-[9px] uppercase tracking-[0.15em] shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal transition-all active:scale-95 group/btn flex items-center gap-2 overflow-hidden relative"
                      >
                        <span className="relative z-10">Book Darshan</span>
                        <ArrowRight size={10} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-spiritual-indigo to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredTemples.length === 0 && (
          <div className="text-center py-32">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
              <Search size={32} />
            </div>
            <h3 className="text-2xl font-serif font-black text-spiritual-charcoal mb-2">No Sacred Spaces Found</h3>
            <p className="text-slate-500 font-medium">Try adjusting your search or region filters.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedTemple && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemple(null)}
              className="absolute inset-0 bg-spiritual-charcoal/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl bg-spiritual-cream rounded-[48px] shadow-3xl overflow-hidden border border-white/20"
            >
              <button 
                onClick={() => setSelectedTemple(null)}
                className="absolute top-8 right-8 p-3 bg-white/50 backdrop-blur-md rounded-full text-slate-600 hover:text-spiritual-indigo transition-all z-10"
              >
                <X size={20} />
              </button>

              {bookingStatus === 'success' ? (
                <div className="p-20 text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-spiritual-saffron rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-orange-500/40"
                  >
                    <Calendar className="text-white" size={40} />
                  </motion.div>
                  <h2 className="text-4xl font-serif font-black text-spiritual-indigo mb-4">Blessings Secured!</h2>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Your divine appointment is scheduled.</p>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                    <img src={selectedTemple.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-spiritual-indigo/90 to-transparent flex flex-col justify-end p-8">
                      <p className="text-spiritual-saffron font-black text-[10px] uppercase tracking-widest mb-2">Current Shrine</p>
                      <h3 className="text-white font-serif font-black text-2xl leading-tight">{selectedTemple.name}</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                    <h2 className="text-3xl font-serif font-black text-spiritual-indigo mb-2">Divine Reservation</h2>
                    <p className="text-slate-500 text-sm font-medium mb-8">Enter your details for the sacred journey.</p>
                    
                    <form onSubmit={submitBooking} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Choose Date</label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-spiritual-saffron" size={16} />
                              <input name="date" type="date" required className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-100 text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-spiritual-indigo outline-none transition-all" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Slot Nature</label>
                            <select name="bookingType" className="w-full px-4 py-3 bg-white rounded-2xl border border-slate-100 text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-spiritual-indigo outline-none transition-all appearance-none cursor-pointer">
                              <option>General Darshan</option>
                              <option>Special Pooja</option>
                              <option>Aarti Session</option>
                              <option>VIP Access</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Pilgrim Name</label>
                          <div className="relative">
                            <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-spiritual-saffron" size={16} />
                            <input name="userName" required placeholder="Name on ID card" className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-100 text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-spiritual-indigo outline-none transition-all" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Age</label>
                            <input name="age" type="number" required placeholder="25" className="w-full px-4 py-3 bg-white rounded-2xl border border-slate-100 text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-spiritual-indigo outline-none transition-all" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Gender</label>
                            <select name="gender" className="w-full px-4 py-3 bg-white rounded-2xl border border-slate-100 text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-spiritual-indigo outline-none transition-all">
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">ID Nature</label>
                            <select name="idType" className="w-full px-4 py-3 bg-white rounded-2xl border border-slate-100 text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-spiritual-indigo outline-none transition-all">
                              <option>Passport</option>
                              <option>Driving License</option>
                              <option>Student ID</option>
                              <option>Other Govt ID</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">ID Identifier</label>
                            <div className="relative">
                              <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-spiritual-saffron" size={16} />
                              <input name="idNumber" required placeholder="XXXX-XXXX-XXXX" className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-100 text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-spiritual-indigo outline-none transition-all" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full py-5 bg-spiritual-indigo text-white rounded-2xl font-black text-lg shadow-2xl shadow-indigo-900/30 hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 transition-all mt-4"
                      >
                        Confirm Divine Visit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TempleListPage;