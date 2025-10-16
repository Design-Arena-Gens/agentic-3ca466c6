export default function MenuPage() {
  const items = [
    { name: 'Classic Sunny', desc: 'All-beef frank, ketchup, mustard, relish', price: '$6' },
    { name: 'Chili Cheese', desc: 'House chili, cheddar, scallions', price: '$8' },
    { name: 'Spicy Sunrise', desc: 'Jalapeños, chipotle mayo, crispy onions', price: '$7' },
    { name: 'Veggie Garden', desc: 'Plant-based dog, pickled veggies, spicy mayo', price: '$7' },
    { name: 'Kiddo Dog', desc: 'Mini dog, ketchup only', price: '$4' },
    { name: 'Loaded Tots', desc: 'Tater tots, cheese, scallions, chipotle', price: '$5' },
  ]
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl font-bold mb-6">Menu</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.name} className="card p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="font-bold text-brand-700">{item.price}</span>
            </div>
            <p className="text-neutral-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
