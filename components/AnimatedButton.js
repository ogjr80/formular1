// components/AnimatedButton.js
'use client'

import { motion } from 'framer-motion'

const AnimatedButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton