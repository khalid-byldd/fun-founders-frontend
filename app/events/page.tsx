'use client';

import PublicLayout from '@/components/public-layout';
import { useState } from 'react';

type EventScore = {
  team: string;
  score: number;
};

type EventItem = {
  name: string;
  date: string;
  winner: string;
  picture: string;
  scores: EventScore[];
};

const events: EventItem[] = [
  {
    name: 'Founder Meetup Finals',
    date: 'Mar 18, 2026',
    winner: 'Creative Chaos',
    picture: 'https://api.dicebear.com/8.x/shapes/svg?seed=FounderMeetup&backgroundType=gradientLinear&backgroundColor=ef4444,111827,7f1d1d',
    scores: [
      { team: 'Creative Chaos', score: 96 },
      { team: 'Shadow Shooters', score: 92 },
      { team: 'Crimson League', score: 90 },
      { team: 'Apex Pulse', score: 87 }
    ]
  },
  {
    name: 'Investor Demo Day',
    date: 'Mar 25, 2026',
    winner: 'Shadow Shooters',
    picture: 'https://api.dicebear.com/8.x/shapes/svg?seed=DemoDay&backgroundType=gradientLinear&backgroundColor=f43f5e,0f172a,ef4444',
    scores: [
      { team: 'Shadow Shooters', score: 95 },
      { team: 'Phoenix Orbit', score: 91 },
      { team: 'Neon Strikers', score: 88 },
      { team: 'Creative Chaos', score: 86 }
    ]
  },
  {
    name: 'Sprint Review Arena',
    date: 'Apr 02, 2026',
    winner: 'Crimson League',
    picture: 'https://api.dicebear.com/8.x/shapes/svg?seed=SprintReview&backgroundType=gradientLinear&backgroundColor=dc2626,111827,ea580c',
    scores: [
      { team: 'Crimson League', score: 97 },
      { team: 'Creative Chaos', score: 93 },
      { team: 'Neon Strikers', score: 90 },
      { team: 'Shadow Shooters', score: 89 }
    ]
  },
  {
    name: 'Innovation Night',
    date: 'Apr 10, 2026',
    winner: 'Neon Strikers',
    picture: 'https://api.dicebear.com/8.x/shapes/svg?seed=InnovationNight&backgroundType=gradientLinear&backgroundColor=be123c,0b1120,ef4444',
    scores: [
      { team: 'Neon Strikers', score: 94 },
      { team: 'Apex Pulse', score: 91 },
      { team: 'Phoenix Orbit', score: 87 },
      { team: 'Creative Chaos', score: 85 }
    ]
  }
];

export default function EventsPublicPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedEvent = events[selectedIndex];

  return (
    <PublicLayout title="Events">
      <section className="events-split-layout">
        <aside className="events-scroll-column">
          {events.map((event, index) => (
            <button
              key={event.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`event-list-card ${selectedIndex === index ? 'active' : ''}`}
            >
              <img src={event.picture} alt={`${event.name} artwork`} className="event-list-thumb" />
              <div>
                <h3>{event.name}</h3>
                <p>{event.date}</p>
                <p>
                  Winner: <strong>{event.winner}</strong>
                </p>
              </div>
            </button>
          ))}
        </aside>

        <article className="event-scores-panel">
          <div className="event-header">
            <img src={selectedEvent.picture} alt={`${selectedEvent.name} artwork`} className="event-header-logo" />
            <div>
              <h2>{selectedEvent.name}</h2>
              <p>Date: {selectedEvent.date}</p>
              <p>
                Winner: <strong>{selectedEvent.winner}</strong>
              </p>
            </div>
          </div>

          <div className="event-score-list">
            {selectedEvent.scores.map((item, index) => (
              <div key={item.team} className="event-score-row">
                <span className="member-index">#{index + 1}</span>
                <span>{item.team}</span>
                <strong>{item.score}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>
    </PublicLayout>
  );
}
