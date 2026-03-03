import AdminLayout from '@/components/admin-layout';

export default function AdminTeamsPage() {
  return (
    <AdminLayout title="Admin Teams">
      <div className="page-card">
        <h2>Manage Teams</h2>
        <p className="muted">Create and update team information from this protected area.</p>
      </div>
    </AdminLayout>
  );
}
