import AdminLayout from '@/components/admin-layout';

export default function TeamsPage() {
  return (
    <AdminLayout title="Teams">
      <div className="page-card">
        <h2>Team Management</h2>
        <p className="muted">Manage all founding teams and their operational status.</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Lead</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rocket Builders</td>
                <td>Khalid</td>
                <td><span className="badge">Active</span></td>
              </tr>
              <tr>
                <td>North Star Labs</td>
                <td>Maya</td>
                <td><span className="badge">Review</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
