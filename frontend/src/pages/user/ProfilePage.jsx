import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Shield, Calendar, MapPin, Phone, Camera, Settings, Star, History, Bell, Heart, CheckCircle2, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const { user, updateUser, logout } = useAuth();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  if (!user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        updateUser(formData);
        setIsEditing(false);
        setStatus({ type: 'success', message: 'Your profile updated successfully! ✨' });
        setTimeout(() => setStatus({ type: '', message: '' }), 4000);
      } else {
        throw new Error(data.error || 'Update failed');
      }
    } catch (error) {
      console.error('Update error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      setTimeout(() => setStatus({ type: '', message: '' }), 4000);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Success Notification */}
      <AnimatePresence>
        {status.message && (
          <motion.div 
            initial={{ opacity: 0, y: -100, x: '-50%' }}
            animate={{ opacity: 1, y: 32, x: '-50%' }}
            exit={{ opacity: 0, y: -100, x: '-50%' }}
            className={`fixed top-0 left-1/2 z-[100] px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-3 border ${
              status.type === 'success' ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
            }`}
          >
            <CheckCircle2 size={20} />
            <span className="font-bold text-sm tracking-tight">{status.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Sidebar: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3 sticky top-28"
          >
            <div className="bg-white rounded-[40px] p-8 shadow-3xl shadow-indigo-950/5 border border-white text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-[40px] bg-gradient-to-br from-spiritual-indigo to-indigo-900 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-[36px] bg-white flex items-center justify-center text-spiritual-indigo">
                    <User size={64} strokeWidth={1.5} />
                  </div>
                </div>
                <button className="absolute -bottom-1 -right-1 w-10 h-10 bg-spiritual-saffron text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all border-4 border-white cursor-pointer group">
                  <Camera size={16} className="group-hover:rotate-12 transition-transform" />
                </button>
              </div>

              <h1 className="text-2xl font-serif font-black text-spiritual-charcoal mb-2 tracking-tight">{user.name}</h1>
              <div className="inline-flex items-center gap-2 px-5 py-1.5 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 mb-8">
                <Shield size={14} className="text-spiritual-saffron" />
                <span className="text-[10px] font-black uppercase tracking-widest text-spiritual-indigo">{user.role} Account</span>
              </div>

              <div className="space-y-2.5">
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className={`w-full px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 flex items-center justify-center gap-3 group ${
                    isEditing ? 'bg-spiritual-charcoal text-white' : 'bg-spiritual-indigo text-white shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal'
                  }`}
                >
                  <Settings size={14} className={isEditing ? 'rotate-90' : 'group-hover:rotate-90 transition-transform duration-500'} />
                  {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                </button>
                
                <button 
                  onClick={() => { logout(); navigate('/'); }}
                  className="w-full px-8 py-3.5 bg-red-50 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-100 transition-all active:scale-95 border border-red-100/50 flex items-center justify-center gap-2"
                >
                  <X size={14} />
                  Logout Account
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-50 space-y-4 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Profile Completion</span>
                  <span className="text-[10px] font-black text-spiritual-indigo">85%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-spiritual-indigo to-indigo-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Main Content */}
          <div className="w-full lg:w-2/3 space-y-6">
            
            {/* Account Details Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-3xl shadow-indigo-950/5 border border-white"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-serif font-black text-spiritual-charcoal flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-spiritual-saffron">
                    <Heart size={18} />
                  </div>
                  Personal Details
                </h2>
                {isEditing && (
                  <span className="text-[10px] font-black text-spiritual-saffron uppercase tracking-widest animate-pulse">Editing Mode</span>
                )}
              </div>
              
              <form onSubmit={handleUpdate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className={`p-6 rounded-[28px] border transition-all ${isEditing ? 'bg-white border-spiritual-indigo shadow-lg ring-4 ring-spiritual-indigo/5' : 'bg-slate-50/40 border-slate-100'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isEditing ? 'bg-spiritual-indigo text-white' : 'bg-white text-spiritual-indigo shadow-sm border border-slate-100'}`}>
                        <User size={20} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Full Name</p>
                        {isEditing ? (
                          <input 
                            type="text" 
                            className="w-full bg-transparent border-none p-0 focus:ring-0 font-bold text-base text-spiritual-charcoal placeholder:text-slate-300"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        ) : (
                          <p className="text-spiritual-charcoal font-bold text-base truncate tracking-tight">{user.name}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-[28px] border transition-all ${isEditing ? 'bg-white border-spiritual-indigo shadow-lg ring-4 ring-spiritual-indigo/5' : 'bg-slate-50/40 border-slate-100'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${isEditing ? 'bg-spiritual-indigo text-white' : 'bg-white text-spiritual-indigo shadow-sm border border-slate-100'}`}>
                        <Phone size={20} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Phone Number</p>
                        {isEditing ? (
                          <input 
                            type="text" 
                            className="w-full bg-transparent border-none p-0 focus:ring-0 font-bold text-base text-spiritual-charcoal placeholder:text-slate-300"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        ) : (
                          <p className="text-spiritual-charcoal font-bold text-base truncate tracking-tight">{user.phone || 'Not provided'}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <InfoCard icon={Mail} label="Email Address" value={user.email} />
                  <InfoCard icon={MapPin} label="Sacred City" value="Varanasi" />
                </div>

                {isEditing && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-end pt-4"
                  >
                    <button 
                      type="submit"
                      className="px-10 py-4 bg-spiritual-indigo text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-indigo-900/20 hover:bg-spiritual-charcoal transition-all active:scale-95 flex items-center gap-3"
                    >
                      <CheckCircle2 size={16} />
                      Save Changes
                    </button>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Recent Activity Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-3xl shadow-indigo-950/5 border border-white"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-serif font-black text-spiritual-charcoal flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                    <History size={18} />
                  </div>
                  Recent Divine Journeys
                </h2>
                <button className="text-[9px] font-black uppercase tracking-widest text-spiritual-indigo hover:text-spiritual-saffron transition-colors">View All Archive</button>
              </div>

              <div className="space-y-3">
                <ActivityRow temple="Kashi Vishwanath" date="Yesterday" status="Completed" />
                <ActivityRow temple="Mahakaleshwar Ujjain" date="3 days ago" status="Upcoming" />
                <ActivityRow temple="Somnath Temple" date="Last week" status="Cancelled" />
              </div>
            </motion.div>
          </div>
        </div>
        
        <p className="text-center mt-12 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">
          DarshanEase • Digital Sanctuary • Established 2026
        </p>
      </div>
    </div>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-black text-spiritual-charcoal tracking-tight leading-none mb-1">{value}</p>
      <p className="text-[7px] font-bold text-slate-400 uppercase tracking-wider leading-none">{label}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="p-6 rounded-[28px] bg-slate-50/40 border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-spiritual-indigo shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
          <p className="text-spiritual-charcoal font-bold text-base truncate tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  );
}

function ActivityRow({ temple, date, status }) {
  const statusColors = {
    Completed: 'bg-green-50 text-green-600',
    Upcoming: 'bg-blue-50 text-blue-600',
    Cancelled: 'bg-red-50 text-red-600'
  };

  return (
    <div className="flex items-center justify-between p-5 rounded-[24px] border border-slate-50 hover:bg-slate-50/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-spiritual-cream flex items-center justify-center text-spiritual-saffron">
          <Star size={18} />
        </div>
        <div>
          <h4 className="font-bold text-sm text-spiritual-charcoal">{temple}</h4>
          <p className="text-[10px] text-slate-400 font-medium">{date}</p>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
}

export default ProfilePage;
