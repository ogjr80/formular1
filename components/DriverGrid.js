// components/DriverGrid.js
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const DriverGrid = ({ drivers }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid-layout"
    >
      {drivers.map((driver, index) => (
        <motion.div
          key={driver.driverId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <Link href={`/drivers/${driver.driverId}`}>
            <div className="card">
              <div className="card-content">
                <h2 className="text-2xl font-semibold text-secondary dark:text-white mb-2">{`${driver.givenName} ${driver.familyName}`}</h2>
                <p className="text-gray-600 dark:text-gray-400">Number: {driver.permanentNumber}</p>
                <p className="text-gray-600 dark:text-gray-400">Nationality: {driver.nationality}</p>
              </div>
              <div className="card-footer">
                <span className="text-primary hover:text-red-700 transition duration-300">View Details →</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default DriverGrid
