import PublicLayout from '@/components/public-layout';

const teams = [
  { name: 'Trailblazers United', score: 264917, image: 'https://api.dicebear.com/8.x/identicon/svg?seed=TrailblazersUnited' },
  { name: 'Easy Steppers', score: 245917, image: 'https://api.dicebear.com/8.x/identicon/svg?seed=EasySteppers' },
  { name: 'Silent Strategists', score: 241799, image: 'https://api.dicebear.com/8.x/identicon/svg?seed=SilentStrategists' },
  { name: 'Gentle Force', score: 228748, image: 'https://api.dicebear.com/8.x/identicon/svg?seed=GentleForce' },
  { name: 'Impact League', score: 217481, image: 'https://api.dicebear.com/8.x/identicon/svg?seed=ImpactLeague' },
  { name: 'Positive Pulse', score: 211942, image: 'https://api.dicebear.com/8.x/identicon/svg?seed=PositivePulse' },
  { name: 'Nova Orbit', score: 206614, image: 'https://api.dicebear.com/8.x/identicon/svg?seed=NovaOrbit' }
];

const podium = [teams[1], teams[0], teams[2]];
const suffix = (place: number) => (place === 1 ? 'st' : place === 2 ? 'nd' : 'rd');

export default function HomePage() {
  return (
    <PublicLayout>
      <main className="rankboard-page">
        <section className="rankboard-shell">
          <p className="rankboard-kicker">Fun Founders Championship</p>
          <h1>Elite Team Leaderboard</h1>

          <div className="rankboard-podium">
            {podium.map((team, index) => {
              const place = index === 0 ? 2 : index === 1 ? 1 : 3;
              const medal = place === 1 ? 'gold' : place === 2 ? 'silver' : 'bronze';
              return (
                <article key={team.name} className={`rankboard-podium-card ${medal} place-${place}`}>
                  <div className="rankboard-crown">♕</div>
                  <div className="rankboard-logo-wrap">
                    <img src={team.image} alt={`${team.name} logo`} className="rankboard-logo" />
                  </div>
                  <div className="rankboard-podium-body">
                    <h2>
                      {place}
                      {suffix(place)}
                    </h2>
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
                  <div className="rankboard-row-logo-wrap">
                    <img src={team.image} alt={`${team.name} logo`} className="rankboard-row-logo" />
                  </div>
                  <span>{team.name}</span>
                </div>
                <strong className="rankboard-row-score">{team.score.toLocaleString()}</strong>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
