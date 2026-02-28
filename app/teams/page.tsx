import AdminLayout from '@/components/admin-layout';

export default function TeamsPage() {
  return (
    <AdminLayout title="Teams">
      <div className="page-card">
        <h2>Team Management</h2>
        <p className="muted">Create, update, and organize your founding teams from this page.</p>
      </div>
    </AdminLayout>
  );
}
