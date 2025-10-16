export default function LocationsPage() {
  const schedule = [
    { day: 'Mon', place: 'Downtown Plaza', time: '11am–3pm' },
    { day: 'Tue', place: 'Tech Park', time: '11am–2pm' },
    { day: 'Wed', place: 'City Library', time: '12pm–3pm' },
    { day: 'Thu', place: 'Riverside Walk', time: '11am–3pm' },
    { day: 'Fri', place: 'Farmers Market', time: '5pm–8pm' },
  ]
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl font-bold mb-6">Locations</h1>
      <div className="grid gap-4">
        {schedule.map((s) => (
          <div key={s.day} className="card p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-mustard font-bold">{s.day}</span>
              <div>
                <p className="font-semibold">{s.place}</p>
                <p className="text-neutral-600">{s.time}</p>
              </div>
            </div>
            <a href="https://maps.openstreetmap.org" target="_blank" rel="noreferrer" className="text-brand-700 font-medium">Open Map</a>
          </div>
        ))}
      </div>
    </div>
  )
}
