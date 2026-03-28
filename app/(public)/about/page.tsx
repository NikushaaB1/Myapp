export default function AboutPage() {
  return (
    <section className="flex flex-1 items-start">
      <div className="grid w-full gap-8 lg:grid-cols-2">
        
        <div className="rounded-2xl border border-blue-200/50 bg-white p-10 shadow-md hover:shadow-xl transition group">
          <div className="mb-4 text-4xl">🏗️</div>
          <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition">
            Well-organized architecture
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Pages are grouped by route. The (public) section shares a layout with navigation, while the dashboard has its own isolated experience.
          </p>
          <div className="mt-8 flex gap-2">
            <div className="h-1 w-8 rounded-full bg-blue-600"></div>
            <div className="h-1 w-8 rounded-full bg-purple-600"></div>
            <div className="h-1 w-8 rounded-full bg-pink-600"></div>
          </div>
        </div>

  
        <div className="rounded-2xl border border-purple-200/50 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 p-10 shadow-md hover:shadow-xl transition">
          <div className="mb-4 text-4xl">⚡</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 rounded-lg bg-purple-100 p-2 text-xl">📁</span>
              <div>
                <p className="font-semibold text-gray-900">Organized Structure</p>
                <p className="text-sm text-gray-600 mt-1">Clean folder hierarchy</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 rounded-lg bg-purple-100 p-2 text-xl">🔧</span>
              <div>
                <p className="font-semibold text-gray-900">Reusable Components</p>
                <p className="text-sm text-gray-600 mt-1">DRY principles applied</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 rounded-lg bg-purple-100 p-2 text-xl">🎯</span>
              <div>
                <p className="font-semibold text-gray-900">Isolated Layouts</p>
                <p className="text-sm text-gray-600 mt-1">Shared & independent</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
