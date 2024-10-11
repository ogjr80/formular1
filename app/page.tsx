

// app/page.js
import Link from 'next/link'
// import AnimatedButton from '../components/AnimatedButton'
import AnimatedButton from '../components/AnimatedButton'
async function getLatestSeason() {
  const res = await fetch('http://ergast.com/api/f1/current.json')
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data.MRData.RaceTable.season
}

export default async function Home() {
  const latestSeason = await getLatestSeason()

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Welcome to F1 Dashboard
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        Explore the world of Formula 1 racing
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Seasons</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Explore F1 seasons from 1950 to {latestSeason}</p>
          <Link href="/seasons" passHref>
            <AnimatedButton>View Seasons</AnimatedButton>
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Drivers</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Discover F1 drivers and their achievements</p>
          <Link href="/drivers" passHref>
            <AnimatedButton>View Drivers</AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  )
}