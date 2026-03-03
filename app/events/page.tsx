import AdminLayout from '@/components/admin-layout';

export default function EventsPage() {
  return (
    <AdminLayout title="Events">
      <div className="page-card">
        <h2>Events Timeline</h2>
        <p className="muted">Plan demo days, sync sessions, and founder community meetups.</p>
        <ul className="activity-list">
          <li>Mar 18 · Founder Meetup · Downtown Hub</li>
          <li>Mar 25 · Investor Demo Day · Main Auditorium</li>
          <li>Apr 02 · Product Sprint Review · Virtual</li>
        </ul>
      </div>
    </AdminLayout>
  );
}
