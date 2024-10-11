// components/SeasonGrid.js
'use client'

import { motion } from 'framer-motion'

const SeasonGrid = ({ seasons }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid-layout"
    >
      {seasons.map((season, index) => (
        <motion.div
          key={season.season}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="card"
        >
          <div className="card-content">
            <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-2">{season.season}</h2>
            <a href={season.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-red-700 transition duration-300">
              View on Wikipedia
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SeasonGrid
