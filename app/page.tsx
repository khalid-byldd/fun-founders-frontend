const teams = [
  { name: 'Trailblazers United', score: 264917, image: 'https://api.dicebear.com/8.x/icons/svg?seed=trailblazers' },
  { name: 'Easy Steppers', score: 245917, image: 'https://api.dicebear.com/8.x/icons/svg?seed=easysteppers' },
  { name: 'Silent Strategists', score: 241799, image: 'https://api.dicebear.com/8.x/icons/svg?seed=silentstrategists' },
  { name: 'Gentle Force', score: 228748, image: 'https://api.dicebear.com/8.x/icons/svg?seed=gentleforce' },
  { name: 'Impact League', score: 217481, image: 'https://api.dicebear.com/8.x/icons/svg?seed=impactleague' },
  { name: 'Positive Pulse', score: 211942, image: 'https://api.dicebear.com/8.x/icons/svg?seed=positivepulse' },
  { name: 'Nova Orbit', score: 206614, image: 'https://api.dicebear.com/8.x/icons/svg?seed=novaorbit' }
];

const podium = [teams[1], teams[0], teams[2]];

export default function HomePage() {
  return (
    <main className="rankboard-page">
      <section className="rankboard-shell">
        <p className="rankboard-kicker">Fun Founders Championship</p>
        <h1>Live Team Leaderboard</h1>

        <div className="rankboard-podium">
          {podium.map((team, index) => {
            const place = index === 0 ? 2 : index === 1 ? 1 : 3;
            const medal = place === 1 ? 'gold' : place === 2 ? 'silver' : 'bronze';
            return (
              <article key={team.name} className={`rankboard-podium-card ${medal}`}>
                <div className="rankboard-crown">♕</div>
                <img src={team.image} alt={`${team.name} logo`} className="rankboard-logo" />
                <div className="rankboard-podium-body">
                  <h2>{place}{place === 1 ? 'st' : place === 2 ? 'nd' : 'rd'}</h2>
                  <p>{team.name}</p>
                  <strong>{team.score.toLocaleString()}</strong>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rankboard-list">
          {teams.slice(3).map((team, i) => (
            <article key={team.name} className="rankboard-row">
              <span className="rankboard-row-rank">#{i + 4}</span>
              <div className="rankboard-row-team">
                <img src={team.image} alt={`${team.name} logo`} className="rankboard-row-logo" />
                <span>{team.name}</span>
              </div>
              <strong className="rankboard-row-score">{team.score.toLocaleString()}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
