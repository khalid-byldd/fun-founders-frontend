import AdminLayout from '@/components/admin-layout';

export default function DashboardPage() {
  return (
    <AdminLayout title="Project dashboard">
      <div className="hero-card page-card">
        <div>
          <h2>Get started with your admin workspace</h2>
          <p className="muted">Track team health, event readiness, and operational settings at a glance.</p>
        </div>
        <button className="link-btn">Dismiss</button>
      </div>

      <div className="stats-grid">
        <div className="page-card stat-card">
          <p className="muted">Teams</p>
          <h3>12</h3>
        </div>
        <div className="page-card stat-card">
          <p className="muted">Events this month</p>
          <h3>4</h3>
        </div>
        <div className="page-card stat-card">
          <p className="muted">Open action items</p>
          <h3>9</h3>
        </div>
        <div className="page-card stat-card">
          <p className="muted">Storage used</p>
          <h3>0.8 GB</h3>
        </div>
      </div>

      <div className="split-grid">
        <div className="page-card">
          <h3>Monitoring</h3>
          <p className="muted">Usage and activity metrics will appear here as integrations are connected.</p>
          <div className="placeholder-chart" />
        </div>
        <div className="page-card">
          <h3>Recent activity</h3>
          <ul className="activity-list">
            <li>Team “Rocket Builders” was updated.</li>
            <li>New event “Founder Meetup” was published.</li>
            <li>Backup policy was updated in settings.</li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}
