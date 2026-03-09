import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || `Server returned ${response.status}: ${response.statusText}`);
      }

      if (!response.ok) {
        throw new Error(data.error || 'Login failed. Please check your credentials.');
      }

      localStorage.setItem('token', data.token);
      login({ role: data.data.role, name: data.data.name });
      
      const userRole = data.data.role.toUpperCase();
      if (userRole === 'ORGANIZER') {
        navigate('/organizer/dashboard');
      } else if (userRole === 'ADMIN') {
        navigate('/admin/dashboard');
      } else {
        navigate('/my-bookings');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row bg-white rounded-[48px] overflow-hidden w-full max-w-5xl shadow-3xl shadow-indigo-950/10 border border-white relative"
      >
        
        {/* Left Side: Immersive Image Section */}
        <div className="md:w-5/12 relative bg-spiritual-charcoal overflow-hidden group">
          <img 
            src="/temple_bg.png" 
            alt="Sacred Temple" 
            className="w-full h-full object-cover min-h-[400px] md:min-h-full transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-spiritual-indigo/90 via-spiritual-indigo/40 to-transparent"></div>
          
          <div className="absolute top-12 left-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-spiritual-saffron rounded-xl flex items-center justify-center shadow-lg">
                <LogIn className="text-white" size={20} />
              </div>
              <span className="text-white font-serif font-black text-2xl tracking-tighter">DarshanEase</span>
            </div>
          </div>

          <div className="absolute bottom-12 left-10 pr-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-4xl font-serif font-black text-white mb-4 leading-tight">
                Begin Your <span className="text-spiritual-saffron">Soul's</span> Voyage
              </h3>
              <p className="text-indigo-50/80 font-medium leading-relaxed">
                Step into a world of spiritual serenity. Your journey towards inner peace and divine connection starts here.
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <div className="w-64 h-64 border-[32px] border-white/20 rounded-full -mr-32 -mt-32"></div>
          </div>
        </div>

        {/* Right Side: Elegant Form Section */}
        <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center bg-white relative">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
              <div className="inline-block px-4 py-1 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                Secure Authentication
              </div>
              <h2 className="text-4xl font-serif font-black text-spiritual-charcoal mb-3 tracking-tight">Welcome Back</h2>
              <p className="text-slate-400 font-medium">Please enter your credentials to enter the sacred portal.</p>
            </div>
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-50 text-red-600 px-5 py-4 rounded-2xl mb-8 text-sm font-bold border border-red-100 flex items-center gap-3 shadow-sm"
              >
                <AlertCircle size={20} className="flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="space-y-2">
                <label className="text-spiritual-charcoal text-[11px] font-black uppercase tracking-widest ml-1">Email address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-spiritual-indigo transition-colors" size={20} />
                  <input
                    type="email"
                    required
                    placeholder="devotee@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-sm bg-slate-50/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-spiritual-charcoal text-[11px] font-black uppercase tracking-widest">Password</label>
                  <a href="#" className="text-spiritual-indigo text-[11px] font-black uppercase hover:text-spiritual-saffron transition-colors">Forgot?</a>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-spiritual-indigo transition-colors" size={20} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-sm bg-slate-50/30"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="mt-4 w-full bg-spiritual-indigo text-white flex items-center justify-center gap-3 py-4.5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isLoading ? 'Processing...' : (
                  <>
                    Sign In to Portal
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-slate-400 text-sm font-medium">
                New to DarshanEase?{' '}
                <Link to="/signup" className="text-spiritual-indigo font-black hover:text-spiritual-saffron transition-colors ml-1 uppercase text-xs tracking-widest">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default LoginPage;