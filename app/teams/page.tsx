import PublicLayout from '@/components/public-layout';

const teams = [
  {
    name: 'Creative Chaos',
    members: 12,
    captain: 'Ava Martinez',
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=CreativeChaos&backgroundType=solid,gradientLinear&backgroundColor=ffb300,7c3aed,ef4444'
  },
  {
    name: 'Shadow Shooters',
    members: 10,
    captain: 'Noah Brooks',
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=ShadowShooters&backgroundType=solid,gradientLinear&backgroundColor=1f2937,ef4444,111827'
  },
  {
    name: 'Crimson League',
    members: 14,
    captain: 'Mia Johnson',
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=CrimsonLeague&backgroundType=solid,gradientLinear&backgroundColor=ef4444,f97316,111827'
  },
  {
    name: 'Neon Strikers',
    members: 9,
    captain: 'Ethan Clarke',
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=NeonStrikers&backgroundType=solid,gradientLinear&backgroundColor=ec4899,06b6d4,111827'
  },
  {
    name: 'Phoenix Orbit',
    members: 11,
    captain: 'Sophia Reed',
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=PhoenixOrbit&backgroundType=solid,gradientLinear&backgroundColor=f59e0b,ef4444,1f2937'
  },
  {
    name: 'Apex Pulse',
    members: 13,
    captain: 'Liam Cooper',
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=ApexPulse&backgroundType=solid,gradientLinear&backgroundColor=22d3ee,f43f5e,111827'
  }
];

export default function TeamsPublicPage() {
  return (
    <PublicLayout title="Teams">
      <section className="public-teams-grid">
        {teams.map((team) => (
          <article key={team.name} className="team-card">
            <div className="team-card-image-wrap">
              <img src={team.image} alt={`${team.name} logo`} className="team-card-image" />
            </div>
            <div className="team-card-content">
              <h2>{team.name}</h2>
              <p>
                <span>Members</span>
                <strong>{team.members}</strong>
              </p>
              <p>
                <span>Captain</span>
                <strong>{team.captain}</strong>
              </p>
            </div>
          </article>
        ))}
      </section>
    </PublicLayout>
  );
}
