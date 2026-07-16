import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function PhoneButton() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    window.location.href = 'tel:+966548142982';
  };

  return (
    <motion.button
      type="button"
      dir="ltr"
      onClick={handleClick}
      className="group relative inline-flex items-center flex-row border-none rounded-full p-0 no-underline cursor-pointer transition-transform duration-250 w-full max-w-[380px] h-[52px] bg-transparent"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Purple glow background */}
      <div className="absolute inset-[-10px] rounded-full bg-[radial-gradient(ellipse,rgba(170,59,255,0.45)_0%,transparent_70%)] blur-[18px] pointer-events-none animate-wa-glow"></div>

      {/* Main button pill */}
      <div className="relative z-10 flex items-center justify-center flex-1 h-full flex-row gap-[9px] bg-white text-black rounded-l-full py-3 px-6 sm:py-3.5 sm:px-[26px] text-sm sm:text-[15px] font-bold transition-colors duration-400 group-hover:bg-brand group-hover:text-white whitespace-nowrap">
        <Phone size={20} className="text-brand group-hover:text-white transition-colors duration-400 flex-shrink-0" />
        <span dir="ltr">+966 54 814 2982</span>
      </div>

      {/* Sliding arrow circle */}
      <div className="relative z-10 flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white overflow-hidden transition-colors duration-400 group-hover:bg-brand flex-shrink-0">
        <FiArrowUpRight className="absolute text-[19px] text-black group-hover:text-white transition-all duration-400 translate-x-0 group-hover:translate-x-[200%]" />
        <FiArrowUpRight className="absolute text-[19px] text-black group-hover:text-white transition-all duration-400 -translate-x-[200%] group-hover:translate-x-0" />
      </div>
    </motion.button>
  );
}
