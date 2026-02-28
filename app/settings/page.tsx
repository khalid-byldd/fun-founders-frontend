import AdminLayout from '@/components/admin-layout';

export default function SettingsPage() {
  return (
    <AdminLayout title="Settings">
      <div className="page-card">
        <h2>Platform Settings</h2>
        <p className="muted">Control environment preferences and administrative defaults.</p>
        <div className="settings-list">
          <label className="setting-item">
            <span>Email notifications</span>
            <input type="checkbox" defaultChecked />
          </label>
          <label className="setting-item">
            <span>Weekly performance summary</span>
            <input type="checkbox" defaultChecked />
          </label>
          <label className="setting-item">
            <span>Allow team self-enrollment</span>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </AdminLayout>
  );
}
