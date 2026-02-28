const leaderboard = [
  { name: 'Rocket Builders', score: 9820, trend: '+12%', members: 14 },
  { name: 'Neon Titans', score: 9540, trend: '+9%', members: 11 },
  { name: 'Quantum Foundry', score: 9130, trend: '+7%', members: 10 },
  { name: 'Pulse Collective', score: 8875, trend: '+6%', members: 9 },
  { name: 'Nova Hackers', score: 8640, trend: '+5%', members: 8 },
  { name: 'Pixel Syndicate', score: 8412, trend: '+4%', members: 8 },
  { name: 'Alpha Orbit', score: 8225, trend: '+3%', members: 7 },
  { name: 'Glare Guild', score: 8044, trend: '+2%', members: 7 }
];

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
          Live ranking of the top startup teams by execution velocity, product impact, and community score.
        </p>

        <div className="leaderboard-grid">
          {leaderboard.map((team, index) => (
            <article key={team.name} className="leaderboard-card">
              <div className="leaderboard-rank">#{index + 1}</div>
              <div>
                <h2>{team.name}</h2>
                <p className="muted">{team.members} members</p>
              </div>
              <div className="leaderboard-meta">
                <strong>{team.score.toLocaleString()}</strong>
                <span>{team.trend}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
