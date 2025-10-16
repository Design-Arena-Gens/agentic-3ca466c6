import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container-responsive grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-brand-100 text-brand-800 px-3 py-1 text-sm font-medium">New: Seasonal Chili Cheese Dog</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Sunny Dogs
            </h1>
            <p className="text-lg text-neutral-600 max-w-prose">
              Gourmet hot dogs on the go. Sourced with care, grilled to perfection, and served with a smile. Find our cart downtown or book us for your next event.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/menu" className="btn-primary">View Menu</Link>
              <Link href="/contact" className="btn-secondary">Book Catering</Link>
            </div>
            <ul className="text-neutral-600 space-y-1">
              <li>• All-beef franks and veggie options</li>
              <li>• House-made toppings: ketchup, mustard, relish, and more</li>
              <li>• Locations posted daily on Instagram</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="/hero-dog.jpg" alt="Hot dog on a bun with toppings" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="container-responsive py-12 sm:py-20">
        <h2 className="text-2xl font-bold mb-6">Fan Favorites</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Classic Sunny', desc: 'All-beef frank, ketchup, mustard, relish', price: '$6' },
            { name: 'Chili Cheese', desc: 'House chili, cheddar, scallions', price: '$8' },
            { name: 'Veggie Garden', desc: 'Plant-based dog, pickled veggies, spicy mayo', price: '$7' },
          ].map((item) => (
            <div key={item.name} className="card p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="font-bold text-brand-700">{item.price}</span>
              </div>
              <p className="text-neutral-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 border-t border-neutral-200">
        <div className="container-responsive py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Where to find us</h2>
            <p className="text-neutral-600 mb-6">Check our live locations and weekly schedule.</p>
            <div className="flex gap-3">
              <Link href="/locations" className="btn-primary">See Locations</Link>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-secondary">Instagram</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <iframe
              title="Map"
              className="w-full h-[300px] sm:h-[380px]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-122.52%2C37.70%2C-122.35%2C37.82&layer=mapnik"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
