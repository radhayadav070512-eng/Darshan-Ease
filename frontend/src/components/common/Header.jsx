import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { LogIn, User, MapPin, Search, Menu, X, Landmark, Home } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const { user, login, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-2xl border-b border-indigo-50/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-spiritual-indigo rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-white font-black text-xl">D</span>
          </div>
          <span className="text-2xl font-display font-black tracking-tight text-spiritual-charcoal">
            Darshan<span className="text-spiritual-saffron">Ease</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-spiritual-indigo transition-colors flex items-center gap-2">
            <Home size={14} className="text-spiritual-saffron" />
            Home
          </Link>
          <Link to="/temples" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-spiritual-indigo transition-colors flex items-center gap-2">
            <Landmark size={14} className="text-spiritual-saffron" />
            Temples
          </Link>
          
          {/* Auth Section with Loading Guard */}
          {!loading ? (
            user ? (
              <>
                {user.role === 'USER' && (
                   <Link to="/my-bookings" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-spiritual-indigo transition-colors">My Darshans</Link>
                )}
                {user.role === 'organizer' && (
                   <Link to="/organizer/dashboard" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-spiritual-indigo transition-colors">Organizer Hub</Link>
                )}
                {user.role === 'admin' && (
                   <Link to="/admin/dashboard" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-spiritual-indigo transition-colors">Admin Portal</Link>
                )}
                <button 
                  onClick={logout}
                  className="px-6 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all"
                >
                  Logout
                </button>
                <Link to="/profile" className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-spiritual-indigo hover:bg-spiritual-indigo hover:text-white transition-all shadow-sm border border-indigo-100/50 group/profile">
                  <User size={20} className="group-hover/profile:scale-110 transition-transform" />
                </Link>
              </>
            ) : (
              <Link 
                to="/login"
                className="px-8 py-3 bg-spiritual-indigo text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <LogIn size={14} />
                Devotee Login
              </Link>
            )
          ) : (
            <div className="w-24 h-8 bg-slate-100 rounded-xl animate-pulse"></div>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-spiritual-indigo"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-indigo-50 p-6 flex flex-col gap-6"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Home size={14} className="text-spiritual-saffron" />
              Home
            </Link>
            <Link to="/temples" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Landmark size={14} className="text-spiritual-saffron" />
              Temples
            </Link>
            {user ? (
              <>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <User size={14} className="text-spiritual-saffron" />
                  Profile
                </Link>
                <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-left text-sm font-black uppercase tracking-widest text-red-500">Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-widest text-spiritual-indigo">Login</Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
