import { motion } from 'framer-motion';
import { MapPin, Star, Home, Building2 } from 'lucide-react';
import './index.css';
import MagneticButtonDemo from './components/magnetic-button-demo';
import PhoneButton from './components/phone-button';

const LocationPill = () => (
  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-neutral-200/80 text-xs sm:text-sm font-medium animate-border-glow">
    <MapPin size={15} />
    <span>المملكة العربية السعودية · خدمة احترافية</span>
  </div>
);

const StarRating = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.8 }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { stiffness: 300, damping: 15 }
    }
  };

  return (
    <div className="flex items-center gap-3">
      <motion.div className="flex gap-1" variants={containerVariants} initial="hidden" animate="visible">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div key={i} variants={starVariants}>
            <Star size={18} fill="#facc15" className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
          </motion.div>
        ))}
      </motion.div>
      <motion.span
        className="text-xs sm:text-sm text-neutral-200/80 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        4.9 · أكثر من 500 تقييم
      </motion.span>
    </div>
  );
};

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <>
      {/* ── Immersive Background Layer ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-[-5%] bg-spa-image bg-cover bg-center animate-breath"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_40%,rgba(255,200,100,0.06)_50%,transparent_60%,transparent_100%)] bg-[length:200%_200%] animate-shimmer"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-25 top-[-100px] left-[-100px] bg-[radial-gradient(circle,rgba(220,140,60,0.22)_0%,transparent_70%)] animate-float-orb-tl"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 bottom-[-100px] right-[-100px] bg-[radial-gradient(circle,rgba(180,100,30,0.20)_0%,transparent_70%)] animate-float-orb-br"></div>
      </div>

      {/* Clickable Wrapper */}
      <div
        className="relative min-h-screen z-10 flex justify-center items-start sm:items-center cursor-pointer py-12 sm:py-20"
        onClick={() => window.open('https://wa.me/966548142982', '_blank')}
      >
        <motion.div
          className="w-full max-w-[768px] flex flex-col items-center gap-7 px-6 py-10 sm:py-14 relative z-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Location Pill */}
          <motion.div variants={itemVariants}>
            <LocationPill />
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 text-center">
            <h1 className="font-serif font-extrabold text-2xl sm:text-4xl md:text-[2.6rem] text-neutral-100 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
              3 Star Specialized Massage — Riyadh
            </h1>
            <span className="font-serif font-extrabold text-xl sm:text-3xl md:text-[2rem] text-yellow-400/90 leading-tight">
              مساج 3 نجوم الخاص · الرياض
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="font-sans text-neutral-200/75 text-sm sm:text-base text-center leading-loose max-w-md"
            variants={itemVariants}
            style={{ direction: 'rtl' }}
          >
            تقنيات الشفاء الإندونيسية التقليدية الأصيلة<br />
            يقدّمها لك معالجون متخصصون معتمدون
          </motion.p>

          {/* Stars */}
          <motion.div variants={itemVariants}>
            <StarRating />
          </motion.div>

          {/* CTA label */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
            <span className="text-base sm:text-lg font-semibold uppercase tracking-[0.2em] text-neutral-200/90">
              احجز جلستك
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"></div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full items-center">
            <MagneticButtonDemo />
          </motion.div>

          {/* Service Option Cards */}
          <motion.div variants={itemVariants} className="w-full mt-3">
            <div className="font-sans text-xs font-semibold uppercase tracking-widest text-neutral-200/40 text-center mb-5">
              Service Options
            </div>
            <div className="flex gap-4 flex-row max-[440px]:flex-col">
              {/* Home Visit Card */}
              <motion.div
                className="group relative flex-1 min-h-[240px] flex flex-col items-center justify-center text-center px-5 py-7 rounded-[20px] bg-gradient-to-br from-white/25 via-white/15 to-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] cursor-pointer transition-all duration-350 hover:bg-gradient-to-br hover:from-white/35 hover:via-white/20 hover:to-white/10 hover:shadow-[0_16px_48px_rgba(255,255,255,0.14),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[15%] before:right-[15%] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent"
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="absolute w-[120px] h-[120px] rounded-full blur-[50px] opacity-35 top-[-20px] left-1/2 -translate-x-1/2 pointer-events-none z-0 transition-opacity duration-400 group-hover:opacity-55 bg-[radial-gradient(circle,#8b5cf6,transparent_70%)]"></div>
                <div className="flex-shrink-0 flex items-center justify-center text-white relative z-10 mb-3">
                  <Home size={28} />
                </div>
                <h3 className="font-sans text-[0.95rem] font-bold text-white leading-snug relative z-10">Home Visit</h3>
                <p className="text-[0.8rem] text-white/60 mt-1 mb-0 relative z-10" style={{ direction: 'rtl' }}>زيارة منزلية</p>
                <div className="w-10 h-0.5 rounded-[1px] bg-gradient-to-r from-yellow-400/50 to-yellow-400/10 my-3 mx-auto relative z-10"></div>
                <p className="text-[0.75rem] text-white/70 mb-2 leading-normal relative z-10">1 Hour Massage</p>
                <div className="font-serif text-3xl font-extrabold text-yellow-400 leading-none mb-1 relative z-10 drop-shadow-[0_2px_12px_rgba(250,204,21,0.3)]">
                  250 <span className="font-sans text-[0.7rem] font-semibold text-yellow-400/70 align-super ml-0.5">SAR</span>
                </div>
                <p className="text-[0.7rem] text-white/50 mt-1 relative z-10" style={{ direction: 'rtl' }}>مساج استرخائي لمدة ساعة</p>
              </motion.div>

              {/* Hotel Visit Card */}
              <motion.div
                className="group relative flex-1 min-h-[240px] flex flex-col items-center justify-center text-center px-5 py-7 rounded-[20px] bg-gradient-to-br from-white/25 via-white/15 to-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] cursor-pointer transition-all duration-350 hover:bg-gradient-to-br hover:from-white/35 hover:via-white/20 hover:to-white/10 hover:shadow-[0_16px_48px_rgba(255,255,255,0.14),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[15%] before:right-[15%] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent"
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="absolute w-[120px] h-[120px] rounded-full blur-[50px] opacity-35 top-[-20px] left-1/2 -translate-x-1/2 pointer-events-none z-0 transition-opacity duration-400 group-hover:opacity-55 bg-[radial-gradient(circle,#f59e0b,transparent_70%)]"></div>
                <div className="flex-shrink-0 flex items-center justify-center text-white relative z-10 mb-3">
                  <Building2 size={28} />
                </div>
                <h3 className="font-sans text-[0.95rem] font-bold text-white leading-snug relative z-10">Hotel Visit</h3>
                <p className="text-[0.8rem] text-white/60 mt-1 mb-0 relative z-10" style={{ direction: 'rtl' }}>زيارة فندقية</p>
                <div className="w-10 h-0.5 rounded-[1px] bg-gradient-to-r from-yellow-400/50 to-yellow-400/10 my-3 mx-auto relative z-10"></div>
                <p className="text-[0.75rem] text-white/70 mb-2 leading-normal relative z-10">Premium Service</p>
                <div className="font-serif text-3xl font-extrabold text-yellow-400 leading-none mb-1 relative z-10 drop-shadow-[0_2px_12px_rgba(250,204,21,0.3)]">
                  300 <span className="font-sans text-[0.7rem] font-semibold text-yellow-400/70 align-super ml-0.5">SAR</span>
                </div>
                <p className="text-[0.7rem] text-white/50 mt-1 relative z-10" style={{ direction: 'rtl' }}>خدمة فندقية مميزة</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Booking Details */}
          <motion.div
            variants={itemVariants}
            className="w-full px-6 py-6 sm:px-8 sm:py-7 rounded-2xl bg-gradient-to-br from-white/25 via-white/15 to-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] text-right"
            style={{ direction: 'rtl' }}
          >
            <h3 className="font-sans text-[0.95rem] font-bold text-white mb-4 leading-normal">
              للحجز عن طريق الواتساب:
            </h3>
            <ul className="list-none flex flex-col gap-3">
              <li className="font-sans text-[0.82rem] text-white/80 leading-relaxed pr-5 relative before:content-[''] before:absolute before:right-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-yellow-400 before:shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                الرجاء ارسال موقعك لإرسال صور المختصات
              </li>
              <li className="font-sans text-[0.82rem] text-white/80 leading-relaxed pr-5 relative before:content-[''] before:absolute before:right-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-yellow-400 before:shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                سيتم الدفع للسائق عند الوصول لموقعك
              </li>
            </ul>
            <p className="font-sans text-[0.78rem] font-semibold text-yellow-400 text-center mt-5 opacity-80 tracking-widest">
              ✦ الرياض فقط ✦
            </p>
          </motion.div>

          {/* Phone Button — shown after all content */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full items-center">
            <PhoneButton />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
