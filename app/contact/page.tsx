export default function ContactPage() {
  return (
    <div className="container-responsive py-12 sm:py-16">
      <h1 className="text-3xl font-bold mb-6">Contact & Catering</h1>
      <p className="text-neutral-700 max-w-prose mb-6">
        Planning an event? We cater birthdays, office lunches, and festivals. Use the form
        below and we’ll get back within 1 business day.
      </p>
      <form className="grid gap-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Your name" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="you@example.com" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input type="date" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Guests</label>
            <input type="number" min={1} className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="100" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" rows={4} placeholder="Tell us about your event" />
        </div>
        <button type="submit" className="btn-primary self-start">Send Request</button>
        <p className="text-xs text-neutral-500">This form is static for demo purposes.</p>
      </form>
    </div>
  )
}
