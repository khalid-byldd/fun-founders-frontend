import AdminLayout from '@/components/admin-layout';

export default function EventsPage() {
  return (
    <AdminLayout title="Events">
      <div className="page-card">
        <h2>Events</h2>
        <p className="muted">Track upcoming events, demo days, and founder meetups.</p>
      </div>
    </AdminLayout>
  );
}
