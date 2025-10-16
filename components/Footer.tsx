export function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="container-responsive py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Sunny Dogs</p>
        <div className="flex items-center gap-4">
          <a href="/menu" className="hover:text-brand-700">Menu</a>
          <a href="/locations" className="hover:text-brand-700">Locations</a>
          <a href="/contact" className="hover:text-brand-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}
