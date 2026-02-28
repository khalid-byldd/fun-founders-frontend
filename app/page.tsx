const leaderboard = [
  {
    name: 'Rocket Builders',
    score: 9820,
    trend: '+12%',
    members: 14,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=RocketBuilders'
  },
  {
    name: 'Neon Titans',
    score: 9540,
    trend: '+9%',
    members: 11,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=NeonTitans'
  },
  {
    name: 'Quantum Foundry',
    score: 9130,
    trend: '+7%',
    members: 10,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=QuantumFoundry'
  },
  {
    name: 'Pulse Collective',
    score: 8875,
    trend: '+6%',
    members: 9,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=PulseCollective'
  },
  {
    name: 'Nova Hackers',
    score: 8640,
    trend: '+5%',
    members: 8,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=NovaHackers'
  },
  {
    name: 'Pixel Syndicate',
    score: 8412,
    trend: '+4%',
    members: 8,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=PixelSyndicate'
  },
  {
    name: 'Alpha Orbit',
    score: 8225,
    trend: '+3%',
    members: 7,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=AlphaOrbit'
  },
  {
    name: 'Glare Guild',
    score: 8044,
    trend: '+2%',
    members: 7,
    image: 'https://api.dicebear.com/8.x/shapes/svg?seed=GlareGuild'
  }
];

const topThree = [leaderboard[1], leaderboard[0], leaderboard[2]];

export default function HomePage() {
  return (
    <main className="leaderboard-page">
      <div className="leaderboard-glow leaderboard-glow-a" />
      <div className="leaderboard-glow leaderboard-glow-b" />
      <div className="leaderboard-glow leaderboard-glow-c" />

      <section className="leaderboard-shell">
        <p className="leaderboard-kicker">Fun Founders • Season 06</p>
        <h1>Neon Team Leaderboard</h1>
        <p className="muted leaderboard-subtitle">
          Elite ranking based on product velocity, execution quality, and founder collaboration score.
        </p>

        <div className="podium-wrap">
          {topThree.map((team, index) => {
            const rank = index === 0 ? 2 : index === 1 ? 1 : 3;
            const rankClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : 'bronze';
            return (
              <article key={team.name} className={`podium-card ${rankClass}`}>
                <div className="podium-crown">{rank === 1 ? '👑' : rank === 2 ? '🥈' : '🥉'}</div>
                <img src={team.image} alt={`${team.name} avatar`} className="team-avatar top-avatar" />
                <p className="podium-rank">#{rank}</p>
                <h2>{team.name}</h2>
                <p className="muted">{team.members} members</p>
                <strong>{team.score.toLocaleString()}</strong>
                <span>{team.trend}</span>
              </article>
            );
          })}
        </div>

        <div className="leaderboard-table">
          <div className="table-head">
            <span>Rank</span>
            <span>Team</span>
            <span>Members</span>
            <span>Trend</span>
            <span>Score</span>
          </div>
          {leaderboard.map((team, index) => {
            const rank = index + 1;
            return (
              <article key={team.name} className={`leaderboard-row ${rank <= 3 ? `top-${rank}` : ''}`}>
                <div className="row-rank">#{rank}</div>
                <div className="row-team">
                  <img src={team.image} alt={`${team.name} avatar`} className="team-avatar" />
                  <div>
                    <h3>{team.name}</h3>
                    <p className="muted">Founders League</p>
                  </div>
                </div>
                <div className="row-members">{team.members}</div>
                <div className="row-trend">{team.trend}</div>
                <div className="row-score">{team.score.toLocaleString()}</div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
