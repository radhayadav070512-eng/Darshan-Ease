// src/pages/organizer/OrganizerDashboard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { organizerStats, recentBookings } from '../../data/organizerData';
import { LayoutDashboard, Users, IndianRupee, Clock, Settings, Bell, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function OrganizerDashboard() {
  const statCards = [
    { title: "Today's Sacred Bookings", value: organizerStats.totalBookingsToday, icon: Users, color: 'text-spiritual-indigo', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { title: 'Monthly Pilgrims', value: organizerStats.totalBookingsThisMonth, icon: LayoutDashboard, color: 'text-spiritual-indigo', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { title: 'Divine Revenue', value: `₹${organizerStats.revenueThisMonth.toLocaleString()}`, icon: IndianRupee, color: 'text-spiritual-saffron', bg: 'bg-orange-50', border: 'border-orange-100' },
    { title: 'Pending Blessings', value: organizerStats.pendingApprovals, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
             <div className="inline-block px-4 py-1 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo font-black text-[10px] uppercase tracking-[0.2em] mb-4">
              Organizer Portal
            </div>
            <h1 className="text-4xl font-serif font-black text-spiritual-charcoal mb-2 tracking-tight">Temple Command</h1>
            <p className="text-slate-500 font-medium">Oversee sacred operations, manage hallowed darshans, and witness pilgrim flows.</p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 bg-white border border-slate-100 text-slate-400 rounded-2xl hover:text-spiritual-indigo hover:shadow-lg transition-all relative group">
              <Bell size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-spiritual-saffron rounded-full border-2 border-white shadow-sm"></span>
            </button>
            <Link to="/organizer/my-temple" className="px-8 py-3.5 bg-spiritual-indigo text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal transition-all flex items-center gap-3 active:scale-95">
              <Settings size={18} />
              Manage Sanctuary
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statCards.map((stat, idx) => (
            <div 
              key={idx} 
              className={cn("bg-white rounded-[32px] p-8 border border-white shadow-2xl shadow-indigo-950/5 flex flex-col justify-between hover:shadow-indigo-950/10 transition-all hover:-translate-y-1")}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner", stat.bg)}>
                  <stat.icon size={28} className={stat.color} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{stat.title}</p>
                <h3 className="text-3xl font-serif font-black text-spiritual-charcoal">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout for Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Table Area */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-[40px] border border-white shadow-3xl shadow-indigo-950/5 overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                <h2 className="text-xl font-serif font-black text-spiritual-charcoal">Recent Pilgrimage Requests</h2>
                <button className="text-[10px] font-black uppercase tracking-widest text-spiritual-indigo hover:text-spiritual-saffron flex items-center gap-1.5 group">
                  View All Archive <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50">
                      <th className="px-8 py-6">Devotee</th>
                      <th className="px-8 py-6">Sacred Darshan</th>
                      <th className="px-8 py-6">Temporal Slot</th>
                      <th className="px-8 py-6">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentBookings.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-8 py-12 text-center text-slate-400 font-medium">No divine visits recorded yet.</td>
                      </tr>
                    ) : (
                      recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-indigo-50/30 transition-colors group">
                          <td className="px-8 py-6">
                            <div className="font-serif font-black text-spiritual-indigo text-lg">{booking.devoteeName}</div>
                            <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Pass #: {booking.id}</div>
                          </td>
                          <td className="px-8 py-6 text-slate-600 font-medium">{booking.darshan}</td>
                          <td className="px-8 py-6 text-slate-600">
                            <div className="font-bold text-spiritual-charcoal">{booking.date}</div>
                            <div className="text-xs text-slate-400 font-medium uppercase tracking-tighter">{booking.time}</div>
                          </td>
                          <td className="px-8 py-6">
                            {booking.status === 'Confirmed' ? (
                              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-spiritual-indigo text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-100 shadow-sm">
                                <CheckCircle2 size={14} /> Confirmed
                              </span>
                            ) : booking.status === 'Pending' ? (
                              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-spiritual-saffron text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100 shadow-sm">
                                <AlertCircle size={14} /> Pending
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-red-100 shadow-sm">
                                Cancelled
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-white rounded-[40px] border border-white shadow-3xl shadow-indigo-950/5 p-10">
              <h3 className="text-xl font-serif font-black text-spiritual-charcoal mb-8">Sacred Actions</h3>
              <div className="space-y-4">
                <Link to="/organizer/my-temple" className="w-full flex items-center justify-between p-5 rounded-[24px] border border-slate-50 bg-slate-50/50 hover:border-spiritual-indigo hover:bg-white hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-spiritual-indigo group-hover:border-indigo-100 transition-all shadow-sm">
                      <LayoutDashboard size={22} />
                    </div>
                    <div>
                        <span className="block font-black text-spiritual-charcoal text-sm">Refine Sanctuary</span>
                        <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Temple Profile</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-200 group-hover:text-spiritual-indigo transition-all group-hover:translate-x-1" />
                </Link>
                <Link to="/organizer/my-darshans" className="w-full flex items-center justify-between p-5 rounded-[24px] border border-slate-50 bg-slate-50/50 hover:border-spiritual-saffron hover:bg-white hover:shadow-xl transition-all group">
                   <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-spiritual-saffron group-hover:border-orange-100 transition-all shadow-sm">
                      <Clock size={22} />
                    </div>
                    <div>
                        <span className="block font-black text-spiritual-charcoal text-sm">Temporal Gateway</span>
                        <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Manage Slots</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-200 group-hover:text-spiritual-saffron transition-all group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Support section */}
            <div className="bg-spiritual-indigo rounded-[40px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-indigo-900/30">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Settings size={120} className="rotate-45" />
               </div>
               <h4 className="text-2xl font-serif font-black mb-4 relative z-10">Need Divine Support?</h4>
               <p className="text-indigo-100 text-sm font-medium mb-8 relative z-10 leading-relaxed">Our sanctuary support team is here to assist with any technical disruptions.</p>
               <button className="px-8 py-3 bg-spiritual-saffron text-white rounded-[20px] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-orange-900/20 hover:scale-105 active:scale-95 transition-all relative z-10">
                  Contact Scribe
               </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrganizerDashboard;