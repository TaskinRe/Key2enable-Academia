import React, {useState} from 'react';
import {LearnerOverview} from './DemoDashboard.jsx';

const membershipItems = [
  ['Game library', 'Games for music theory, logic, cognition, literacy and creative play.', 'Playable previews'],
  ['Learning pathways', 'Three suggested sequences with goals and activities for each step.', 'Demo available'],
  ['Training courses', 'Video courses on assistive technology, AAC and inclusive learning.', 'Demo available'],
  ['Tutorials', 'Short walkthroughs for setting up and playing the games.', 'Demo available'],
  ['Teaching resources', 'Activity guides, lesson plans and family practice checklists.', 'Demo available'],
  ['Learner dashboard', 'A view of practice sessions, pathway progress and goals.', 'Demo available'],
];

const courses = [
  ['Assistive technology essentials', 'Choose and adapt tools such as Key-X for individual learners.', ['Match tools to access needs', 'Set up a learning station', 'Adapt as needs change'], 'Teachers, therapists and families'],
  ['AAC in everyday life', 'Support communication at home, in class and in the community.', ['Understand what AAC is', 'Build communication into routines', 'Work with a speech therapist'], 'Families and teachers'],
  ['Inclusive education', 'Adapt lessons and assessments so more learners can take part.', ['Apply Universal Design for Learning', 'Adapt a lesson plan', 'Offer flexible ways to respond'], 'Teachers and school leaders'],
  ['Learning at home', 'Build routines and short practice sessions that fit family life.', ['Set up a calm space', 'Practise together in short sessions', 'Celebrate progress'], 'Parents and caregivers'],
  ['Accessibility by design', 'Find and remove barriers in digital learning activities.', ['Check input options', 'Make instructions easier to follow', 'Test activities with learners'], 'Educators and content designers'],
];

export function Academy({onContact}) {
  const [yearly, setYearly] = useState(false);
  return <>
    <section className="academy-pricing">
      <div className="wrap">
        <div className="pricing-title enter">
          <div><p className="eyebrow">Academy / Membership</p><h1>Become a member</h1></div>
          <p>One subscription for learners and the families, teachers and specialists who support them.</p>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <div className="billing-switch" role="group" aria-label="Price period">
              <button aria-pressed={!yearly} onClick={() => setYearly(false)}>Monthly</button>
              <button aria-pressed={yearly} onClick={() => setYearly(true)}>Yearly</button>
            </div>
            <h2>Academy membership</h2>
            <p className="pricing-amount" aria-live="polite"><strong>{yearly ? 'US$720' : 'US$80'}</strong> {yearly ? 'per year' : 'per month'}</p>
            <p>{yearly ? 'Works out to US$60 a month. Save 25%.' : 'Or US$720 a year and save 25%.'}</p>
            <ul>{membershipItems.map(([name]) => <li key={name}>{name}</li>)}</ul>
            <button className="action gold action-prominent" onClick={() => onContact('Ask about Academy membership')}>Ask about membership</button>
            
          </article>
          <article className="included-card">
            <h2>What’s included</h2>
            <div className="included-grid">
              {membershipItems.map(([name, description, status]) => <div key={name}><strong>{name}</strong><p>{description}</p><span className={'status-chip ' + (status === 'Planned' ? '' : 'available')}>{status}</span></div>)}
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="Pathways" className="wrap section">
      <p className="eyebrow">Learning pathways</p><h2>Choose a skill to practise</h2>
      <div className="pathway-grid">
        <article><h3>Foundational learning</h3><p>Start with keyboard familiarity, then move to letters and short words in Typing Teacher.</p></article>
        <article><h3>Sequencing and problem-solving</h3><p>Plan a route in Robot Workshop, test it, and revise one step at a time.</p></article>
        <article><h3>Creative participation</h3><p>Choose colours in Floral Artistry or take turns making a shared build in Brick Builder.</p></article>
      </div>
      <a className="action secondary" href="#Game">Explore the game library</a>
    </section>

    <section id="Training" className="course-section">
      <div className="wrap section">
        <h2>Training for the people who support learners</h2>
        <div className="course-grid">{courses.map(([title, description, topics, audience]) =>
          <article key={title}><h3>{title}</h3><p>{description}</p><ul>{topics.map(topic => <li key={topic}>{topic}</li>)}</ul><p><strong>For</strong> {audience.toLowerCase()}</p></article>
        )}<article className="course-membership"><h3>Training in the Academy plan</h3><p>Ask how the courses and resources could support your team or family.</p><button className="action gold" onClick={() => onContact('Ask about Academy training')}>Book a call</button></article></div>
      </div>
    </section>

    <section className="wrap section academy-dashboard-section">
      <div className="section-heading"><div><h2>Meet the learner dashboard</h2><p>Preview learning goals, upcoming activities and practice history using sample data.</p></div><a className="action gold action-prominent" href="#Demo%20dashboard">Open demo dashboard</a></div>
      <LearnerOverview/>
    </section>

    <section id="Resources" className="wrap academy-resources">
      <div><h2>Teaching and home practice resources</h2><p>Your subscription includes lesson templates, activity guides, tutorials and caregiver checklists.</p></div>
      <div><img className="resource-preview" src="/assets/expressia.png" alt="Expressia learning and communication software" loading="lazy"/><h3>Expressia</h3><p>Build customised communication boards and learning activities with pictures, text and sound.</p><a className="text-link" href="https://www.key2enable.ae/solutions#solution-expressia">Explore Expressia</a></div>
    </section>
    <section className="wrap section split-feature">
      <figure><img src="/assets/uae-lab.png" alt="Assistive technology setup at a Key2Enable learning lab" loading="lazy"/><figcaption>Key2Enable lab network · UAE</figcaption></figure>
      <div><h2>Learn in a Key2Enable lab</h2><p>Literacy Labs bring assistive technology, accessible learning activities and hands-on support for educators and families into one setting.</p><a className="action secondary" href="#About/Labs">Explore the lab network</a></div>
    </section>
  </>;
}
