import type { ReactNode } from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8">
        <div className="flex items-center justify-between rounded-xl border-2 border-blue-100 bg-white px-8 py-6 shadow-md hover:shadow-lg transition">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back to your admin panel</p>
          </div>
          <Link
            href="/"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5"
          >
            ← Back home
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <DashboardSidebar />
          <main className="rounded-xl border-2 border-blue-100 bg-white p-10 shadow-md">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
