import Link from "next/link";
import { users } from "@/components/site-data";

export default function UsersPage() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Users</h2>
        <p className="mt-2 text-lg text-gray-600">Manage and view all team members</p>
      </div>

      <div className="space-y-4">
        {users.map((user, index) => (
          <Link
            key={user.id}
            href={`/dashboard/users/${user.id}`}
            className="group block rounded-xl border-2 border-gray-100 bg-white p-5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 transition transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">{user.name}</h3>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
              <span className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 border border-blue-200">
                {user.role}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
