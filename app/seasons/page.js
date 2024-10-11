// app/seasons/page.js
import SeasonGrid from '../../components/SeasonGrid'

async function getSeasons() {
  const res = await fetch('http://ergast.com/api/f1/seasons.json?limit=100')
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data.MRData.SeasonTable.Seasons.reverse()
}

export default async function Seasons() {
  const seasons = await getSeasons()

  return (
    <div>
      <h1 className="section-title">F1 Seasons</h1>
      <SeasonGrid seasons={seasons} />
    </div>
  )
}
