import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import './App.css'

const WA_URL = 'https://wa.me/966548142982'

export default function App() {
  return (
    <div className="page-root">
      {/* ── Animated background ── */}
      <div className="page-bg" />

      {/* ── Center card ── */}
      <div className="center-card">

        {/* Location pill */}
        <motion.div
          className="location-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <FiMapPin size={10} />
          Saudi Arabia · Professional Service
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="main-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Massage Therapy
          <br />
          Indonesian Experts
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Authentic traditional Indonesian healing techniques — brought to you by certified expert therapists.
        </motion.p>

        {/* Stars */}
        <motion.div
          className="stars-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="star"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.07, type: 'spring' }}
            >★</motion.span>
          ))}
          <span className="rating-label">4.9 · 500+ reviews</span>
        </motion.div>

        {/* CTA label */}
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          Book Your Session
        </motion.span>

        {/* WhatsApp Button */}
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="wa-glow" />
          <div className="wa-pill">
            <FaWhatsapp className="wa-icon" />
            Chat on WhatsApp
          </div>
          <div className="wa-circle">
            <FiArrowUpRight className="wa-arrow slide-out" />
            <FiArrowUpRight className="wa-arrow slide-in" />
          </div>
        </motion.a>

      </div>
    </div>
  )
}
