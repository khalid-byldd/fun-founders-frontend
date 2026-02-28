import AdminLayout from '@/components/admin-layout';

export default function DashboardPage() {
  return (
    <AdminLayout title="Dashboard">
      <div className="page-card">
        <h2>Welcome back 👋</h2>
        <p className="muted">
          This is your main dashboard. Use the sidebar to manage teams, events, and settings.
        </p>
      </div>
    </AdminLayout>
  );
}
