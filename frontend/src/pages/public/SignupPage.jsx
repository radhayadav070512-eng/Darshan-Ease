import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, User, Mail, Phone, Lock, ShieldCheck, ArrowRight, AlertCircle, ChevronDown } from 'lucide-react';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'USER'
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          password: formData.password, 
          role: formData.role 
        }), 
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
        throw new Error(data.error || 'Registration failed. Please try again.');
      }

      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col md:flex-row-reverse bg-white rounded-[48px] overflow-hidden w-full max-w-6xl shadow-3xl shadow-indigo-950/10 border border-white relative"
      >
        
        {/* Right Side: Immersive Image Section */}
        <div className="md:w-5/12 relative bg-spiritual-charcoal overflow-hidden group">
          <img 
            src="/temple_bg.png" 
            alt="Divine Sanctuary" 
            className="w-full h-full object-cover min-h-[400px] md:min-h-full transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-spiritual-indigo/90 via-spiritual-indigo/40 to-transparent"></div>
          
          <div className="absolute top-12 right-10 flex flex-col items-end">
            <div className="flex items-center gap-3">
              <span className="text-white font-serif font-black text-2xl tracking-tighter">DarshanEase</span>
              <div className="w-10 h-10 bg-spiritual-saffron rounded-xl flex items-center justify-center shadow-lg">
                <UserPlus className="text-white" size={20} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 right-10 left-10 text-right">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-4xl font-serif font-black text-white mb-4 leading-tight">
                Embrace Your <span className="text-spiritual-saffron italic">Spiritual</span> Path
              </h3>
              <p className="text-indigo-50/80 font-medium leading-relaxed max-w-sm ml-auto">
                Join a hallowed community of pilgrims and seekers. Simplify your divine journey with digital elegance.
              </p>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute bottom-0 left-0 p-8 opacity-20">
            <div className="w-64 h-64 border-[32px] border-white/20 rounded-full -ml-32 -mb-32"></div>
          </div>
        </div>

        {/* Left Side: Form Section */}
        <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center bg-white relative">
          <div className="max-w-xl mx-auto w-full">
            <div className="mb-10">
              <div className="inline-block px-4 py-1 bg-spiritual-indigo/5 rounded-full border border-spiritual-indigo/10 text-spiritual-indigo font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                Sacred Enrollment
              </div>
              <h2 className="text-4xl font-serif font-black text-spiritual-charcoal mb-3 tracking-tight">Create an Account</h2>
              <p className="text-slate-400 font-medium">Step into the digital sanctuary. Register your details below.</p>
            </div>
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-red-50 text-red-600 px-5 py-4 rounded-2xl mb-8 text-sm font-bold border border-red-100 flex items-center gap-3"
              >
                <AlertCircle size={20} />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-spiritual-charcoal text-[11px] font-black uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-spiritual-indigo transition-colors" size={20} />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-sm bg-slate-50/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-spiritual-charcoal text-[11px] font-black uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-spiritual-indigo transition-colors" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-sm bg-slate-50/30"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-spiritual-charcoal text-[11px] font-black uppercase tracking-widest ml-1">Email address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-spiritual-indigo transition-colors" size={20} />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="devotee@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-sm bg-slate-50/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-spiritual-charcoal text-[11px] font-black uppercase tracking-widest ml-1">Sign up as a</label>
                <div className="relative">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-sm bg-slate-50/30 appearance-none font-bold"
                  >
                    <option value="USER">Blessed Pilgrim (Devotee)</option>
                    <option value="ORGANIZER">Sacred Organizer</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-spiritual-charcoal text-[11px] font-black uppercase tracking-widest ml-1">Secure Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-spiritual-indigo transition-colors" size={20} />
                  <input
                    type="password"
                    name="password"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:border-spiritual-indigo transition-all text-spiritual-charcoal shadow-sm bg-slate-50/30"
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 ml-1">
                <div className="mt-1 w-5 h-5 bg-indigo-50 rounded border-2 border-indigo-100 flex items-center justify-center text-spiritual-indigo">
                   <ShieldCheck size={12} />
                </div>
                <p className="text-[10px] text-slate-400 font-medium leading-tight">
                  I agree to the <span className="text-spiritual-indigo font-bold">Terms of Sacred Service</span> and acknowledge that my data will be handled with divine confidentiality.
                </p>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="mt-2 w-full bg-spiritual-indigo text-white flex items-center justify-center gap-3 py-4.5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-indigo-900/20 hover:bg-spiritual-charcoal hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isLoading ? 'Creating Sacred Key...' : (
                  <>
                    Complete Enrollment
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-slate-400 text-sm font-medium">
                Already registered?{' '}
                <Link to="/login" className="text-spiritual-indigo font-black hover:text-spiritual-saffron transition-colors ml-1 uppercase text-xs tracking-widest">
                  Log in to Portal
                </Link>
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default SignupPage;