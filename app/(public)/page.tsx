import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid flex-1 gap-16 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200">
          <span className="text-lg">✨</span>
          Modern Next.js App
        </div>
        <h1 className="max-w-2xl text-6xl font-bold text-gray-900 leading-tight">
          Beautiful, structured app with route groups.
        </h1>
        <p className="max-w-xl text-lg text-gray-600 leading-relaxed">
          Explore a well-organized Next.js application featuring route groups, multiple layouts, and dynamic routing. Clean architecture meets modern design.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/about"
            className="group rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-0.5"
          >
            Learn more →
          </Link>
          <Link
            href="/dashboard/users"
            className="rounded-xl border-2 border-gray-200 px-8 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition"
          >
            View users
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-10 shadow-lg hover:shadow-xl transition">
        <div className="mb-2 text-3xl">🚀</div>
        <h3 className="text-xl font-bold text-gray-900">Tech Stack</h3>
        <ul className="mt-8 space-y-4 text-gray-700">
          <li className="flex items-center gap-3 text-lg">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Route groups & layouts</span>
          </li>
          <li className="flex items-center gap-3 text-lg">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Dynamic routes [id]</span>
          </li>
          <li className="flex items-center gap-3 text-lg">
            <span className="text-blue-600 font-bold">✓</span>
            <span>React components</span>
          </li>
          <li className="flex items-center gap-3 text-lg">
            <span className="text-blue-600 font-bold">✓</span>
            <span>Tailwind styling</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
