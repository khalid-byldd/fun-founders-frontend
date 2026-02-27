import AdminLayout from '@/components/admin-layout';

export default function SettingsPage() {
  return (
    <AdminLayout title="Settings">
      <div className="page-card">
        <h2>Platform Settings</h2>
        <p className="muted">Manage account preferences and global admin configuration.</p>
      </div>
    </AdminLayout>
  );
}
