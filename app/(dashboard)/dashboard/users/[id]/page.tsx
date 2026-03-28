import Link from "next/link";
import { notFound } from "next/navigation";
import { users } from "@/components/site-data";

type UserPageProps = {
  params: Promise<{ id: string }>;
};

export default async function UserDetailsPage({ params }: UserPageProps) {
  const { id } = await params;
  const user = users.find((entry) => entry.id === id);

  if (!user) {
    notFound();
  }

  return (
    <section className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
            <span>👤</span> Team Member
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600 mt-2">{user.email}</p>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 shadow-md">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Role</p>
            <p className="text-2xl font-bold text-gray-900 mt-3">{user.role}</p>
            <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          </div>
          <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">User ID</p>
            <p className="text-2xl font-bold text-gray-900 mt-3 font-mono"># {user.id}</p>
            <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
          </div>
        </div>

        <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Biography</p>
          <p className="text-gray-700 text-lg leading-relaxed">{user.bio}</p>
        </div>
      </div>

      <Link href="/dashboard/users" className="inline-flex items-center gap-2 px-4 py-3 text-blue-600 hover:text-blue-700 font-medium transition">
        ← Back to users list
      </Link>
    </section>
  );
}
