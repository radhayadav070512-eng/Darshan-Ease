// src/pages/admin/AdminDashboard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { adminStats, recentAdminActions } from '../../data/adminData';
import { Users, Building2, IndianRupee, ShieldAlert, BarChart3, Activity, ArrowUpRight, Flame, Bell, Settings, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function AdminDashboard() {
  const statCards = [
    { title: 'Registered Pilgrims', value: adminStats.totalUsers.toLocaleString(), icon: Users, color: 'text-spiritual-indigo', bg: 'bg-indigo-50' },
    { title: 'Sacred Organizers', value: adminStats.totalOrganizers.toLocaleString(), icon: Activity, color: 'text-spiritual-indigo', bg: 'bg-indigo-50' },
    { title: 'Hallowed Temples', value: adminStats.totalTemples.toLocaleString(), icon: Building2, color: 'text-spiritual-indigo', bg: 'bg-indigo-50' },
    { title: 'Divine Revenue', value: `₹${adminStats.totalRevenue.toLocaleString()}`, icon: IndianRupee, color: 'text-spiritual-saffron', bg: 'bg-orange-50' },
  ];

  const alertCards = [
    { title: 'Pending Sanctuary Approvals', value: adminStats.pendingApprovals, icon: ShieldAlert, color: 'bg-spiritual-indigo shadow-indigo-900/20' },
    { title: 'Flagged Pilgrimage Accounts', value: adminStats.flaggedUsers, icon: Flame, color: 'bg-red-600 shadow-red-950/20' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-block px-4 py-1 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo font-black text-[10px] uppercase tracking-[0.2em] mb-4">
              Divine Administration
            </div>
            <h1 className="text-4xl font-serif font-black text-spiritual-charcoal mb-2 tracking-tight">Ascended Control</h1>
            <p className="text-slate-500 font-medium">Platform orchestration, user divinity management, and global analytics.</p>
          </div>
          <div className="flex gap-4">
             <button className="p-3 bg-white border border-slate-100 text-slate-400 rounded-2xl hover:text-spiritual-indigo hover:shadow-lg transition-all relative group">
              <Bell size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-spiritual-saffron rounded-full border-2 border-white shadow-sm"></span>
            </button>
            <Link to="/admin/users" className="px-8 py-3.5 bg-spiritual-indigo text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal transition-all flex items-center gap-3 active:scale-95">
              <Settings size={18} />
              Platform Settings
            </Link>
          </div>
        </div>

        {/* Priority Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {alertCards.map((alert, idx) => (
            <div key={idx} className={cn("rounded-[32px] p-10 text-white flex items-center justify-between shadow-2xl transition-all hover:-translate-y-1 group relative overflow-hidden", alert.color)}>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                 <alert.icon size={120} />
              </div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
                  <alert.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-black">{alert.title}</h3>
                  <p className="text-white/70 text-sm font-medium">Requires immediate divine intervention</p>
                </div>
              </div>
              <div className="text-5xl font-serif font-black relative z-10">{alert.value}</div>
            </div>
          ))}
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statCards.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[40px] p-8 border border-white shadow-3xl shadow-indigo-950/5 flex flex-col justify-between hover:shadow-indigo-950/10 transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner", stat.bg)}>
                  <stat.icon size={28} className={stat.color} />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 uppercase tracking-tighter">
                  <ArrowUpRight size={14} /> 12%
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-serif font-black text-spiritual-charcoal mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-relaxed">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Actvity */}
        <div className="bg-white rounded-[48px] border border-white shadow-4xl shadow-indigo-950/10 overflow-hidden mb-16">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
            <h2 className="text-2xl font-serif font-black text-spiritual-charcoal flex items-center gap-4">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-spiritual-indigo shadow-inner">
                <BarChart3 size={24} />
              </div>
              Celestial Ledger
            </h2>
            <button className="text-[10px] font-black uppercase tracking-widest text-spiritual-indigo hover:text-spiritual-saffron flex items-center gap-1.5 group">
               Audit Full Ledger <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-50">
                  <th className="px-8 py-6">Log Cipher</th>
                  <th className="px-8 py-6">Divine Action</th>
                  <th className="px-8 py-6">Hallowed Target</th>
                  <th className="px-8 py-6">Temporal Stamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentAdminActions.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-8 py-12 text-center text-slate-400 font-medium">No celestial activity recorded in this epoch.</td>
                  </tr>
                ) : (
                  recentAdminActions.map((action) => (
                    <tr key={action.id} className="hover:bg-indigo-50/20 transition-colors group">
                      <td className="px-8 py-6 font-mono text-xs text-slate-300 group-hover:text-spiritual-indigo transition-colors">#{action.id}</td>
                      <td className="px-8 py-6">
                        <span className="font-serif font-black text-spiritual-charcoal text-lg">{action.action}</span>
                      </td>
                      <td className="px-8 py-6 text-slate-600 font-medium">
                        {action.user || action.temple || action.reason || '-'}
                      </td>
                      <td className="px-8 py-6">
                        <div className="font-bold text-spiritual-charcoal">{action.date}</div>
                        <div className="text-[10px] text-slate-400 font-black uppercase tracking-tighter mt-0.5">{action.time}</div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AdminDashboard;