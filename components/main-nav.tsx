import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex gap-1">
      <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">Home</Link>
      <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">About</Link>
      <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">Contact</Link>
      <Link href="/dashboard" className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-md hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5 ml-2">
        Dashboard
      </Link>
    </nav>
  );
}
