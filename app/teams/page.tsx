import PublicLayout from '@/components/public-layout';

const teams = [
  { name: 'Trailblazers United', category: 'Product', status: 'Leading' },
  { name: 'Easy Steppers', category: 'Growth', status: 'Strong' },
  { name: 'Silent Strategists', category: 'Research', status: 'Rising' }
];

export default function TeamsPublicPage() {
  return (
    <PublicLayout title="Teams">
      <div className="page-card">
        <p className="muted">Public view of participating teams.</p>
        <ul className="activity-list">
          {teams.map((team) => (
            <li key={team.name}>
              <strong>{team.name}</strong> · {team.category} · {team.status}
            </li>
          ))}
        </ul>
      </div>
    </PublicLayout>
  );
}
