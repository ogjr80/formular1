// app/drivers/page.js
import Link from 'next/link'
import DriverGrid from '../../components/DriverGrid'

async function getDrivers() {
  const res = await fetch('http://ergast.com/api/f1/current/drivers.json')
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data.MRData.DriverTable.Drivers
}

export default async function Drivers() {
  const drivers = await getDrivers()

  return (
    <div>
      <h1 className="section-title">F1 Drivers</h1>
      <DriverGrid drivers={drivers} />
    </div>
  )
}
