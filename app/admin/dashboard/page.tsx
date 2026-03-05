import AdminLayout from '@/components/admin-layout';

export default function AdminDashboardPage() {
  return (
    <AdminLayout title="Admin Dashboard">
      <div className="page-card">
        <h2>Welcome Admin</h2>
        <p className="muted">This route is protected via middleware and login.</p>
      </div>
    </AdminLayout>
  );
}
