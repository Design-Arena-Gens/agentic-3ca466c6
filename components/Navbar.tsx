import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="container-responsive h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={32} height={32} alt="Sunny Dogs logo" />
          <span className="font-extrabold tracking-tight">Sunny Dogs</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/menu" className="hover:text-brand-700 font-medium">Menu</Link>
          <Link href="/locations" className="hover:text-brand-700 font-medium">Locations</Link>
          <Link href="/contact" className="hover:text-brand-700 font-medium">Contact</Link>
        </nav>
        <Link href="/contact" className="btn-secondary text-sm">Book Us</Link>
      </div>
    </header>
  )
}
