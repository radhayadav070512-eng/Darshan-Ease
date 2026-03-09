import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Clock, ShieldCheck, Instagram, Twitter, Facebook } from 'lucide-react';

function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Pilgrimage',
      links: [
        { name: 'Explore Temples', path: '/temples' },
        { name: 'Divine Tickets', path: '/my-bookings' },
        { name: 'Sacred Services', path: '/' },
        { name: 'Sanctuary Map', path: '/' },
      ]
    },
    {
      title: 'Organization',
      links: [
        { name: 'Admin Portal', path: '/admin/dashboard' },
        { name: 'Organizer Hub', path: '/organizer/dashboard' },
        { name: 'Register Shrine', path: '/signup' },
        { name: 'Guidelines', path: '/' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/' },
        { name: 'Tradition & Protocol', path: '/' },
        { name: 'Privacy Sanctum', path: '/' },
        { name: 'Terms of Grace', path: '/' },
      ]
    }
  ];

  return (
    <footer className="bg-spiritual-charcoal text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-spiritual-indigo/10 rounded-full -mr-64 -mt-64 blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-12 h-12 bg-spiritual-indigo rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-900 group-hover:scale-110 transition-transform">
                <span className="text-white font-black text-2xl">D</span>
              </div>
              <span className="text-3xl font-display font-black tracking-tight text-white">
                Darshan<span className="text-spiritual-saffron">Ease</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm font-medium">
              Preserving tradition through modern innovation. India's premier platform for sacred pilgrimage management and divine connectivity.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-spiritual-saffron transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          {sections.map((section, i) => (
            <div key={i}>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-spiritual-saffron mb-8">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-spiritual-saffron transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white/5 rounded-[32px] border border-white/10 mb-20">
          <div className="flex items-center gap-4 px-4">
            <div className="w-10 h-10 rounded-full bg-spiritual-indigo/20 flex items-center justify-center text-spiritual-saffron">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Divine Support</p>
              <p className="font-bold text-white">+91 1800-DIVINE</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 md:border-x border-white/10">
            <div className="w-10 h-10 rounded-full bg-spiritual-indigo/20 flex items-center justify-center text-spiritual-saffron">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Spiritual Inquiry</p>
              <p className="font-bold text-white">connect@darshanease.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4">
            <div className="w-10 h-10 rounded-full bg-spiritual-indigo/20 flex items-center justify-center text-spiritual-saffron">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sacred Trust</p>
              <p className="font-bold text-white">Verified Sanctuary Portal</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>© {currentYear} Darshanease Technology. All Rights Blessed.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Digital Pilgrimage Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Made in Bharat</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;