'use client';

import PublicLayout from '@/components/public-layout';
import { useState } from 'react';

type Team = {
  name: string;
  captain: string;
  members: string[];
  image: string;
};

const teams: Team[] = [
  {
    name: 'Creative Chaos',
    captain: 'Ava Martinez',
    members: ['Ava Martinez', 'Liam Parker', 'Nora Shah', 'Ethan Cole', 'Mia Jordan', 'Noah Quinn'],
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=CreativeChaos&backgroundType=solid,gradientLinear&backgroundColor=ffb300,7c3aed,ef4444'
  },
  {
    name: 'Shadow Shooters',
    captain: 'Noah Brooks',
    members: ['Noah Brooks', 'Sophia Lane', 'Aria Banks', 'Lucas Reed', 'Elijah Stone', 'Amelia King'],
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=ShadowShooters&backgroundType=solid,gradientLinear&backgroundColor=1f2937,ef4444,111827'
  },
  {
    name: 'Crimson League',
    captain: 'Mia Johnson',
    members: ['Mia Johnson', 'James Holt', 'Isla Ford', 'Henry Ward', 'Chloe Young', 'Daniel Woods'],
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=CrimsonLeague&backgroundType=solid,gradientLinear&backgroundColor=ef4444,f97316,111827'
  },
  {
    name: 'Neon Strikers',
    captain: 'Ethan Clarke',
    members: ['Ethan Clarke', 'Grace Bell', 'Logan Price', 'Lily Ross', 'Jack Miles', 'Harper Hill'],
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=NeonStrikers&backgroundType=solid,gradientLinear&backgroundColor=ec4899,06b6d4,111827'
  },
  {
    name: 'Phoenix Orbit',
    captain: 'Sophia Reed',
    members: ['Sophia Reed', 'Benjamin Scott', 'Ella Brooks', 'Alexander Fox', 'Zoe Carter', 'Levi Green'],
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=PhoenixOrbit&backgroundType=solid,gradientLinear&backgroundColor=f59e0b,ef4444,1f2937'
  }
];

export default function TeamsPublicPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedTeam = teams[selectedIndex];

  return (
    <PublicLayout title="Teams">
      <section className="teams-split-layout">
        <aside className="teams-scroll-column">
          {teams.map((team, index) => (
            <button
              key={team.name}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`team-list-card ${selectedIndex === index ? 'active' : ''}`}
            >
              <img src={team.image} alt={`${team.name} logo`} className="team-list-thumb" />
              <div>
                <h3>{team.name}</h3>
                <p>{team.members.length} members</p>
              </div>
            </button>
          ))}
        </aside>

        <article className="team-members-panel">
          <div className="team-members-header">
            <img src={selectedTeam.image} alt={`${selectedTeam.name} logo`} className="team-members-logo" />
            <div>
              <h2>{selectedTeam.name}</h2>
              <p>
                Captain: <strong>{selectedTeam.captain}</strong>
              </p>
            </div>
          </div>

          <div className="members-list">
            {selectedTeam.members.map((member, index) => (
              <div key={member} className="member-row">
                <span className="member-index">#{index + 1}</span>
                <span>{member}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </PublicLayout>
  );
}
