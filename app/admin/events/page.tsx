import AdminLayout from '@/components/admin-layout';

export default function AdminEventsPage() {
  return (
    <AdminLayout title="Admin Events">
      <div className="page-card">
        <h2>Manage Events</h2>
        <p className="muted">Publish and maintain events from this protected admin section.</p>
      </div>
    </AdminLayout>
  );
}
