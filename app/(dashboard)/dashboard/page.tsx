import Link from "next/link";
import { users } from "@/components/site-data";

export default function DashboardPage() {
  return (
    <section className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-2 text-lg text-gray-600">Here's your dashboard overview</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="group rounded-xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 p-8 hover:shadow-lg hover:border-blue-300 transition">
          <div className="text-4xl mb-4">📄</div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Pages</p>
          <p className="mt-4 text-4xl font-bold text-gray-900">3</p>
          <p className="mt-2 text-sm text-gray-600">Public routes</p>
        </div>
        <div className="group rounded-xl border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-purple-100 p-8 hover:shadow-lg hover:border-purple-300 transition">
          <div className="text-4xl mb-4">👥</div>
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Users</p>
          <p className="mt-4 text-4xl font-bold text-gray-900">{users.length}</p>
          <p className="mt-2 text-sm text-gray-600">Team members</p>
        </div>
        <div className="group rounded-xl border-2 border-green-100 bg-gradient-to-br from-green-50 to-green-100 p-8 hover:shadow-lg hover:border-green-300 transition">
          <div className="text-4xl mb-4">🛣️</div>
          <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">Routes</p>
          <p className="mt-4 text-4xl font-bold text-gray-900">5</p>
          <p className="mt-2 text-sm text-gray-600">Named routes</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/dashboard/users"
          className="group rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1"
        >
          View all users →
        </Link>
      </div>
    </section>
  );
}
