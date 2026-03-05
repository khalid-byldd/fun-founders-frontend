import PublicLayout from '@/components/public-layout';

const events = [
  { date: 'Mar 18', title: 'Founder Meetup', location: 'Downtown Hub' },
  { date: 'Mar 25', title: 'Investor Demo Day', location: 'Main Auditorium' },
  { date: 'Apr 02', title: 'Product Sprint Review', location: 'Virtual' }
];

export default function EventsPublicPage() {
  return (
    <PublicLayout title="Events">
      <div className="page-card">
        <p className="muted">Public calendar for upcoming sessions.</p>
        <ul className="activity-list">
          {events.map((event) => (
            <li key={event.title}>
              <strong>{event.date}</strong> · {event.title} · {event.location}
            </li>
          ))}
        </ul>
      </div>
    </PublicLayout>
  );
}
