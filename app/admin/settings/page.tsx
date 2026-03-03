import AdminLayout from '@/components/admin-layout';

export default function AdminSettingsPage() {
  return (
    <AdminLayout title="Admin Settings">
      <div className="page-card">
        <h2>Admin Settings</h2>
        <p className="muted">Configure platform-level controls in this protected page.</p>
      </div>
    </AdminLayout>
  );
}
