import React from 'react';
import {RollingNumber} from './Motion.jsx';
import {Academy} from './Academy.jsx';

const labsURL = 'https://www.key2enable.ae/labs';
const studyURL = 'https://nafath.mada.org.qa/nafath-article/mcn3005/';
const zhoURL = 'https://www.za.gov.ae/en/Media-Centre/News/Zayed-higher-organization-launches-naqra-lab-in-abu-ahabi-and-al-ain';
const figures = [['8', 'Countries'], ['10+', 'UAE locations'], ['1,499+', 'Students reached']];

export function ImpactNumbers() {
  return <>
    <div className="impact-numbers">{figures.map(([value, label]) => <div key={label}><RollingNumber value={value}/><span>{label}</span></div>)}</div>
    <a className="source-link" href={labsURL}>Key2Enable lab network figures</a>
  </>;
}

export function Partnership() {
  return <section id="Naqra" className="split-feature catalogue-section">
    <figure><img src="/assets/uae-lab.png" alt="Computer workstations in a Key2Enable lab in the UAE" loading="lazy"/><figcaption>Key2Enable lab network · UAE</figcaption></figure>
    <div><p className="eyebrow">ZHO collaboration</p><h2>Two Naqra labs</h2>
      <p>Zayed Higher Organization for People of Determination announced two Naqra learning labs in February 2025 in collaboration with Key2Enable, one in Abu Dhabi and one in Al Ain.</p><p>The labs are based at the two cities’ Centers for Care and Rehabilitation. The programme uses Key-X, assistive computers and educational software to train participants to complete digital government transactions, such as ID and passport services.</p>
      <a href={zhoURL} className="text-link">Read ZHO’s announcement</a>
    </div>
  </section>;
}

const countries = ['Armenia', 'Brazil', 'Canada', 'India', 'Qatar', 'Spain', 'United Arab Emirates', 'United Kingdom'];

const familyStories = [
  {name: 'Julia', title: 'Writing in her classroom', image: 'julia.jpg', detail: 'Key2Enable shows how Julia uses the Key-X to write in a mainstream classroom.', video: 'RgfzZxNanZ8'},
  {name: 'Alison', title: 'Writing his own books', image: 'alison.jpg', detail: 'Key2Enable reports that Alison uses Key-X to write more independently and has published three books.'},
  {name: 'Amanda', title: 'Returning to mainstream school', image: 'amanda.jpg', detail: 'Key2Enable reports that Key-X helped Amanda access the curriculum and return to mainstream education.'},
];

function Families({onContact}) {
  return <article className="wrap section">
    <div className="split-feature family-intro enter">
      <div>
        <p className="eyebrow">For families</p><h1>More independence at home and at school.</h1>
        <p>When a standard keyboard is difficult to use, a different way to type or point can help a child do schoolwork and communicate more independently.</p>
        <button className="action action-prominent" onClick={() => onContact('Book a family call')}>Book a family call</button>
      </div>
      <figure><img src="/assets/lab-gallery/canada2.jpg" alt="Key2Enable’s Family and Community Lab in Canada"/><figcaption>Family &amp; Community Lab · Canada</figcaption></figure>
    </div>
    <section className="catalogue-section material-panel family-play">
      <h2>Make play part of family time</h2>
      <p>Try a game side by side. Build a Brick Builder scene together by taking turns choosing pieces. In Floral Artistry, one person can describe an idea while the other places the flowers. In Robot Workshop, plan the route together before the learner enters the moves.</p>
      <a className="action gold action-prominent" href="#Game">Find a game to play together</a>
    </section>
    <section className="catalogue-section">
      <div className="section-heading"><h2>What access made possible</h2><a className="text-link" href="https://www.key2enable.ae/">Key2Enable’s student stories</a></div>
      <div className="family-photos">
        {familyStories.map(({name, title, image, detail, video}) => <article className="story-card" key={name}>
          <img loading="lazy" src={'/assets/stories/' + image} alt={name}/>
          <div className="card-copy"><small>{name} · Brazil</small><h3>{title}</h3><p>{detail}</p>
            {video && <a className="text-link" href={'https://www.youtube.com/watch?v=' + video}>Watch Julia’s classroom story</a>}
          </div>
        </article>)}
      </div>
    </section>
    <section className="split-feature catalogue-section video-feature">
      <a href="https://www.youtube.com/watch?v=UAvf6EGEUws"><img className="feature-image" src="/assets/stories/keyx-users.jpg" alt="Preview of the Key-X users video" loading="lazy"/></a>
      <div><h2>See Key-X in use</h2><p>Watch how different learners use the same device in Key2Enable’s video.</p>
        <a className="action" href="https://www.youtube.com/watch?v=UAvf6EGEUws">Watch on YouTube</a>
        <p><a className="source-link" href="https://www.linkedin.com/company/key2enable">Follow Key2Enable on LinkedIn</a></p>
      </div>
    </section>
  </article>;
}

export function About({onContact}) {
  return <article className="wrap section">
    <div className="split-feature enter">
      <div><p className="eyebrow">About Key2Enable</p><h1>Access to learning and communication.</h1>
        <p>We develop assistive devices and adaptive software so people with disabilities can use computers, share what they know and take part in education with greater independence.</p>
        <button className="action action-prominent" onClick={() => onContact('Book a call')}>Book a call</button>
      </div>
      <figure><img src="/assets/armenia-lab.jpg" alt="An inclusive learning space equipped with Key2Enable technology"/><figcaption>Inclusive education lab · Armenia</figcaption></figure>
    </div>
    <section className="catalogue-section company-history">
      <h2>From Brazil to an international lab network</h2>
      <div><p><strong>2015</strong>Key2Enable’s work began in Brazil.</p><p><strong>2018</strong>Key2Enable launched in the United States.</p></div>
      <p>The founding team included José Rubinger Filho, Adriano Assis, William de Oliveira, Alexandre Assis and Marcelo Rubinger.</p>
      <a className="source-link" href="https://www.thenationalnews.com/business/technology/generation-start-up-how-key2enable-is-seeking-to-change-the-lives-of-children-with-disability-1.1152013">Company profile and founder interview</a>
    </section>
    <section id="Labs" className="catalogue-section network-map">
      <h2>Where our labs have worked</h2>
      <ImpactNumbers/>
      <img src="/assets/lab-network-map.svg" alt="World map highlighting eight countries in Key2Enable’s lab network. The countries are listed below." width="900" height="355" loading="lazy"/>
      <ul>{countries.map(country => <li key={country}>{country}</li>)}</ul>
    </section>
    <Partnership/>
  </article>;
}

function Schools({onContact}) {
  return <article className="wrap section">
    <div className="section-heading school-heading">
      <div><p className="eyebrow">For schools</p><h1>Accessible classrooms.</h1><p className="lead">Explore Key-X for computer access and Expressia for communication and classroom activities.</p></div>
      <button className="action action-prominent school-cta" onClick={() => onContact('Book a school demo')}>Book a school demo</button>
    </div>
    <figure className="school-photo"><img src="/assets/armenia-lab.jpg" alt="An inclusive learning space in Armenia"/><figcaption>Key2Enable learning lab · Armenia</figcaption></figure>
    <section className="catalogue-section study-panel">
      <div><p className="eyebrow">Nafath · UAE · Four-month case study</p><h2>50 learners. One lab. Four months.</h2>
        <p>Average attendance in this cohort rose from about 65% before the lab to above 90% during the programme.</p>
      </div>
      <div className="study-stat-pair"><div><strong>~65%</strong><span>Before the programme</span></div><div><strong>&gt;90%</strong><span>During the programme</span></div></div>
      <p className="study-note">Published case study · Outcomes describe this cohort.</p>
      <a className="source-link" href={studyURL}>Read the published case study</a>
    </section>
  </article>;
}

export function AudiencePage({kind, onContact}) {
  if (kind === 'families') return <Families onContact={onContact}/>;
  if (kind === 'academy') return <Academy onContact={onContact}/>;
  return <Schools onContact={onContact}/>;
}
