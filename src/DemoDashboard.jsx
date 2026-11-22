import React, {useState} from 'react';

const learners = [
  {id: 'a', name: 'Learner A', group: 'Classroom A', focus: 'Keyboard familiarity'},
  {id: 'b', name: 'Learner B', group: 'Classroom A', focus: 'Sequencing'},
  {id: 'c', name: 'Learner C', group: 'Classroom B', focus: 'Letter practice'},
  {id: 'd', name: 'Learner D', group: 'Classroom B', focus: 'Pattern memory'},
];
const activities = [
  [1, 'a', 'Keyboard Grove', 12, 4, 5], [1, 'b', 'Robot Workshop', 18, 5, 6],
  [2, 'c', 'Typing Teacher', 14, 7, 10], [3, 'd', 'Sky Catch', 10, 6, 8],
  [3, 'a', 'Keyboard Grove', 11, 5, 6], [4, 'b', 'Robot Workshop', 20, 4, 6],
  [5, 'c', 'Typing Teacher', 16, 8, 10], [6, 'd', 'Sky Catch', 12, 5, 8],
  [8, 'b', 'Robot Workshop', 17, 3, 6], [10, 'a', 'Keyboard Grove', 13, 3, 5],
  [11, 'c', 'Typing Teacher', 12, 6, 10], [15, 'd', 'Sky Catch', 10, 4, 8],
  [19, 'a', 'Keyboard Grove', 10, 2, 5], [24, 'b', 'Robot Workshop', 14, 3, 5],
].map(([age, learner, game, minutes, correct, attempts], id) => ({id, age, learner, game, minutes, correct, attempts}));

function summarize(sessions) {
  const totals = sessions.reduce((total, session) => ({
    minutes: total.minutes + session.minutes,
    correct: total.correct + session.correct,
    attempts: total.attempts + session.attempts,
  }), {minutes: 0, correct: 0, attempts: 0});
  return {...totals, accuracy: totals.attempts ? Math.round(100 * totals.correct / totals.attempts) + '%' : '—'};
}

function ActivityTable({sessions}) {
  return <div className="table-scroll"><table>
    <thead><tr><th scope="col">Learner</th><th scope="col">Activity</th><th scope="col">When</th><th scope="col">Time</th><th scope="col">Correct</th></tr></thead>
    <tbody>{sessions.map(session => <tr key={session.id}>
      <td>{learners.find(learner => learner.id === session.learner).name}</td><td>{session.game}</td><td>{session.age} {session.age === 1 ? 'day' : 'days'} ago</td><td>{session.minutes} min</td><td>{session.correct}/{session.attempts}</td>
    </tr>)}</tbody>
  </table></div>;
}

function ActivityChart({sessions, days}) {
  const periods = days === 7 ? [[6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1], [0, 0]] : [[21, 29], [14, 20], [7, 13], [0, 6]];
  const counts = periods.map(([start, end]) => sessions.filter(({age}) => age >= start && age <= end).length);
  const max = Math.max(...counts, 1);
  return <figure className="demo-panel activity-chart">
    <figcaption>Sessions over time</figcaption>
    <div className="chart-bars">{periods.map(([start, end], index) => {
      const label = start === end ? (start === 0 ? 'Today' : start + 'd ago') : start + '–' + end + 'd ago';
      const count = counts[index];
      return <div className="chart-column" key={start}>
        <div className="chart-track"><div className="chart-bar" style={{'--height': 100 * count / max + '%'}}><strong>{count}</strong></div></div>
        <span>{label}</span>
      </div>;
    })}</div>
  </figure>;
}

export function DemoDashboard() {
  const [view, setView] = useState('Overview');
  const [group, setGroup] = useState('All classrooms');
  const [days, setDays] = useState(7);
  const [selected, setSelected] = useState('');
  const visibleLearners = learners.filter(learner => group === 'All classrooms' || learner.group === group);
  const sessions = activities.filter(session => session.age < days && visibleLearners.some(learner => session.learner === learner.id));
  const profile = visibleLearners.find(learner => learner.id === selected);
  const totals = summarize(sessions);
  const profileSessions = profile ? sessions.filter(session => session.learner === profile.id) : [];
  const metrics = [
    [new Set(sessions.map(session => session.learner)).size, 'Active learners'],
    [sessions.length, 'Sessions'],
    [totals.minutes + ' min', 'Practice time'],
    [totals.accuracy, 'Correct responses'],
  ];

  return <article className="dashboard">
    <div className="wrap dashboard-header">
      <div><p className="eyebrow">Key2Enable Academy</p><h1>Demo dashboard</h1><p>Sample classroom data</p></div>
      <div className="dash-filters">
        <label>Classroom<select value={group} onChange={event => {setGroup(event.target.value); setSelected('');}}><option>All classrooms</option><option>Classroom A</option><option>Classroom B</option></select></label>
        <label>Period<select value={days} onChange={event => setDays(Number(event.target.value))}><option value={7}>Last 7 days</option><option value={30}>Last 30 days</option></select></label>
      </div>
    </div>
    <div className="wrap dashboard-body">
      <nav aria-label="Dashboard views" className="dash-nav">
        {['Overview', 'Learners', 'Activity'].map(label => <button key={label} aria-pressed={view === label} onClick={() => {setView(label);setSelected('');}}>{label}</button>)}
      </nav>
      <section className="dashboard-content" aria-label={view}>
        {view === 'Overview' && <>
          <dl className="demo-metrics" aria-live="polite">{metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <ActivityChart sessions={sessions} days={days}/>
          <section className="demo-panel"><h2>Recent activity</h2><ActivityTable sessions={sessions.slice(0, 4)}/></section>
        </>}
        {view === 'Learners' && <>
          <section className="demo-panel"><h2>Learners</h2><div className="learner-list">{visibleLearners.map(learner => (
            <button key={learner.id} aria-pressed={selected === learner.id} onClick={() => setSelected(learner.id)}><strong>{learner.name}</strong><span>{learner.focus}</span></button>
          ))}</div></section>
          {profile && <section className="demo-panel" aria-live="polite"><h2>{profile.name}</h2><p>{profile.focus} · {summarize(profileSessions).accuracy} correct responses</p><ActivityTable sessions={profileSessions}/></section>}
        </>}
        {view === 'Activity' && <section className="demo-panel"><h2>Activity log</h2><ActivityTable sessions={sessions}/></section>}
      </section>
    </div>
  </article>;
}

export function LearnerOverview() {
  return <section className="learner-preview" aria-label="Sample learner dashboard">
    <header><strong>Member dashboard</strong><span className="status-chip">Sample data</span></header>
    <div className="learner-preview-body">
      <aside><strong>Learner A</strong><span>Foundational learning</span></aside>
      <div className="learner-preview-content">
        <div className="learner-preview-metrics">
          <div><p>Current pathway</p><strong>Foundational learning</strong><progress value={5} max={12} aria-label="Pathway steps completed">5 of 12</progress><small>5 of 12 steps</small></div>
          <div><p>This week</p><strong>4 sessions</strong><small>About 15 minutes each</small></div>
          <div><p>Next activity</p><strong>Typing Teacher: A to E</strong><small>Suggested by the pathway</small></div>
        </div>
        <div className="learner-goals">
          <h3>Learning goals</h3>
          <ul>{[['Recognise letters A to J', 'Achieved'], ['Match numbers 1 to 9', 'In progress'], ['Plan a three-step route', 'In progress'], ['Choose between two options', 'Not started']].map(([goal, status]) => <li key={goal}>{goal}<span className={'status-chip ' + (status === 'Achieved' ? 'available' : '')}>{status}</span></li>)}</ul>
        </div>
      </div>
    </div>
  </section>;
}
