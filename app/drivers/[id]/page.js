// app/drivers/[id]/page.js
import { notFound } from 'next/navigation'

async function getDriverDetails(id) {
  const res = await fetch(`http://ergast.com/api/f1/drivers/${id}.json`)
  if (!res.ok) return null
  const data = await res.json()
  return data.MRData.DriverTable.Drivers[0]
}

export default async function DriverDetails({ params }) {
  const driver = await getDriverDetails(params.id)

  if (!driver) {
    notFound()
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{`${driver.givenName} ${driver.familyName}`}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 dark:text-gray-400"><span className="font-semibold">Date of Birth:</span> {driver.dateOfBirth}</p>
          <p className="text-gray-600 dark:text-gray-400"><span className="font-semibold">Nationality:</span> {driver.nationality}</p>
          <p className="text-gray-600 dark:text-gray-400"><span className="font-semibold">Permanent Number:</span> {driver.permanentNumber}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400"><span className="font-semibold">Code:</span> {driver.code}</p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Wikipedia:</span>{' '}
            <a href={driver.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {driver.url}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}