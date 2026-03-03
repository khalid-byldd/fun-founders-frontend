import PublicLayout from '@/components/public-layout';

const teams = [
  { name: 'Trailblazers United', score: 264917 },
  { name: 'Easy Steppers', score: 245917 },
  { name: 'Silent Strategists', score: 241799 },
  { name: 'Gentle Force', score: 228748 },
  { name: 'Impact League', score: 217481 },
  { name: 'Positive Pulse', score: 211942 }
];

export default function LeaderboardPage() {
  const podium = [teams[1], teams[0], teams[2]];

  return (
    <PublicLayout title="Leaderboard">
      <section className="rankboard-podium">
        {podium.map((team, index) => {
          const place = index === 0 ? 2 : index === 1 ? 1 : 3;
          return (
            <article key={team.name} className={`rankboard-podium-card place-${place}`}>
              <div className="rankboard-podium-body">
                <h2>
                  {place}
                  {place === 1 ? 'st' : place === 2 ? 'nd' : 'rd'}
                </h2>
                <p>{team.name}</p>
                <strong>{team.score.toLocaleString()}</strong>
              </div>
            </article>
          );
        })}
      </section>

      <div className="rankboard-list">
        {teams.map((team, index) => (
          <article key={team.name} className="rankboard-row">
            <span className="rankboard-row-rank">#{index + 1}</span>
            <div className="rankboard-row-team">
              <span>{team.name}</span>
            </div>
            <strong className="rankboard-row-score">{team.score.toLocaleString()}</strong>
          </article>
        ))}
      </div>
    </PublicLayout>
  );
}
