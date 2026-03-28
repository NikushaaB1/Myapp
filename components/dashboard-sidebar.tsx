import Link from "next/link";

export function DashboardSidebar() {
  return (
    <aside className="w-full p-6 lg:max-w-xs">
      <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-4 mb-8">
        <h2 className="text-lg font-bold text-gray-900">Menu</h2>
        <p className="text-xs text-gray-600 mt-1">Navigate your dashboard</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="group px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-md transition transform hover:-translate-x-1">
          <span>🏉</span> Overview
        </Link>
        <Link href="/dashboard/users" className="group px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white hover:shadow-md transition transform hover:-translate-x-1">
          <span>👥</span> Users
        </Link>
      </nav>
    </aside>
  );
}
