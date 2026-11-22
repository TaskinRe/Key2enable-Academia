import React, {useState} from 'react';
import {RollingNumber} from './Motion.jsx';
import {Academy} from './Academy.jsx';

const labsURL = 'https://www.key2enable.ae/labs';
const studyURL = 'https://nafath.mada.org.qa/nafath-article/mcn3005/';
const zhoURL = 'https://www.za.gov.ae/en/Media-Centre/News/Zayed-higher-organization-launches-naqra-lab-in-abu-ahabi-and-al-ain';
const figures = [['9', 'Countries'], ['50+', 'Labs worldwide'], ['30,000+', 'Students reached']];

export function ImpactNumbers() {
  return <>
    <div className="impact-numbers">{figures.map(([value, label]) => <div key={label}><RollingNumber value={value}/><span>{label}</span></div>)}</div>
  </>;
}

export function Partnership() {
  return <section id="Naqra" className="split-feature catalogue-section">
    <figure><img src="/assets/uae-lab.png" alt="Computer workstations in a Key2Enable lab in the UAE" loading="lazy"/><figcaption>Key2Enable lab network · UAE</figcaption></figure>
    <div><p className="eyebrow">United Arab Emirates</p><h2>3 labs in the UAE</h2>
      <p>Key2Enable runs three assistive technology labs in the UAE, using Key-X, assistive computers and educational software.</p>
      <a className="press-card" href={zhoURL} target="_blank" rel="noopener noreferrer">
        <span className="press-card-tag">Published post · February 2025</span>
        <strong>Zayed Higher Organization launches Naqra labs in Abu Dhabi and Al Ain with Key2Enable</strong>
        <span className="press-card-cta">Read the post</span>
      </a>
    </div>
  </section>;
}

const countries = ['Armenia', 'Brazil', 'Canada', 'India', 'Iraq', 'Qatar', 'Spain', 'United Arab Emirates', 'United Kingdom'];

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

const aboutGallery = [['lab-gallery/brazil.jpg', 'Brazil'], ['lab-gallery/armenia2.jpg', 'Armenia'], ['lab-gallery/india2.jpg', 'India'], ['lab-gallery/qatar1.jpg', 'Qatar'], ['lab-gallery/uk1.jpg', 'United Kingdom'], ['lab-gallery/canada2.jpg', 'Canada']];
const founders = ['José Rubinger Filho', 'Adriano Assis', 'William de Oliveira', 'Alexandre Assis', 'Marcelo Rubinger'];
const founderColors = ['#1C75BC', '#6B2C84', '#2E9A63', '#B04F83', '#C56F1F'];
const initials = name => name.split(' ').filter(w => w[0] === w[0].toUpperCase()).map(w => w[0]).slice(0, 2).join('');
const journey = [
  {year: '2018', c: '#1C75BC', big: 'Silicon Valley', title: 'U.S. foundation and acceleration',
   line: 'Incorporated in Florida and accelerated in Silicon Valley.',
   tags: ['Singularity University Ventures', 'Krypto Labs Entrepreneur Hero'],
   more: 'Key2Enable Assistive Technology Inc. was incorporated in Florida, USA, in January 2018. During the same year, Key2Enable joined the Singularity University Ventures portfolio and participated in its Silicon Valley accelerator, bringing its accessible technology mission to an international innovation ecosystem. In December, Key2Enable won the Entrepreneur Hero award at the Krypto Labs EdTech Innovation Startup Competition in Abu Dhabi, chosen from 800 applications across 58 countries.',
   links: [['Entrepreneur Middle East: Key2Enable wins Krypto Labs EdTech competition', 'https://mena.entrepreneur.com/?p=16104']]},
  {year: '2019', c: '#6B2C84', big: 'UC Berkeley Haas', title: 'First place worldwide',
   line: 'Global Social Venture Competition winner, from 692 applications in 67 countries.',
   tags: ['GSVC global winner', 'US$40,000 grand prize', 'Georgia Tech Scheller'],
   more: 'After a competitive regional selection organized by Georgia Tech’s Scheller College of Business, Key2Enable became one of two startups chosen to represent the eastern United States in the Global Social Venture Competition (GSVC). On April 5, it won first place in the global finals at UC Berkeley’s Haas School of Business, earning the US$40,000 grand prize. The year also marked the establishment of Key2Enable’s UAE entity and participation in the Ma’an social-impact incubator.',
   links: [['Georgia Tech Scheller: Key2Enable wins GSVC global finals', 'https://www.scheller.gatech.edu/news/2019/key2enable-wins-global-finals-at-gsvc-competition.html']]},
  {year: '2020', c: '#2E9A63', big: 'Hub71', title: 'From innovation to inclusion',
   line: 'Joined Abu Dhabi’s Hub71 and took learning home during the pandemic.',
   tags: ['Abu Dhabi', 'Remote learning'],
   more: 'Key2Enable joined Abu Dhabi’s Hub71 innovation ecosystem and worked to make accessible learning available beyond the classroom. During the pandemic, the team advanced remote-learning approaches so children with disabilities and their families could continue educational activities at home.',
   links: []},
  {year: '2021', c: '#D46A9E', big: 'Microsoft for Startups', title: 'Growing the inclusive EdTech ecosystem',
   line: 'More support for teachers, families and caregivers across the UAE.',
   tags: ['UAE ecosystem', 'Teachers and families'],
   more: 'Key2Enable continued developing its assistive technology and education model within the UAE ecosystem, with growing attention to teachers, families and caregivers, supported by the Microsoft for Startups programme.',
   links: []},
  {year: '2022', c: '#E08A2E', big: 'MIT', title: 'MIT Enterprise Forum winner',
   line: 'Named a winner at the MITEF Startup Competition in Madinah, Saudi Arabia.',
   tags: ['MIT Enterprise Forum', 'Entrepreneurship Track', 'Madinah'],
   more: 'Key2Enable advanced its international outreach and was named among the Entrepreneurship Track winners of the MIT Enterprise Forum (MITEF) Startup Competition for Saudi Arabia and the Arab world, celebrated at the Start Smart Conference in Madinah in February 2022. The team continued connecting accessible digital interaction with learning and communication opportunities.',
   links: [['Start Smart: MITEF Startup Competition winners announced', 'https://startsmartsaudi.com/?p=3903']]},
  {year: '2023', c: '#C9413A', big: 'Zero Project', title: 'Award for disability innovation',
   line: 'Zero Project award for the Key-X keyboard.',
   tags: ['Zero Project award', 'LG NOVA, San Francisco'],
   more: 'Key2Enable’s inclusive technology approach gained further international visibility, including a Zero Project award for its Key-X keyboard and participation in innovation initiatives such as the LG NOVA Innovation Festival in San Francisco.',
   links: [['Exceptional Needs Today: Key2Enable, Zero Project award winner', 'https://issuu.com/exceptionalneedstoday/docs/ent_issue_13_final/s/26435332']]},
  {year: '2024', c: '#1C75BC', big: 'Naqra Labs', title: 'From access to learning',
   line: 'Assistive technology and literacy support in one lab model.',
   tags: ['Zayed Authority for People of Determination', 'We Read Labs'],
   more: 'Key2Enable and the Zayed Authority for People of Determination advanced the Naqra / We Read Lab initiative, bringing assistive technology, accessible learning activities and structured educational support together. The model helps learners develop communication, literacy and other practical skills with guidance from educators and caregivers.',
   links: [['ZHO: Naqra labs launched in Abu Dhabi and Al Ain', zhoURL]]},
  {year: '2025', c: '#6B2C84', big: 'Shark Tank Dubai', title: 'Shark Tank and Santander X',
   line: 'Investment on Shark Tank and a Santander X Global Challenge award.',
   tags: ['Shark Tank Dubai', 'Santander X award'],
   more: 'Key2Enable built on the public visibility of its Shark Tank Dubai appearance and Santander X recognition, bringing its mission for inclusive education to new partners, schools and communities. The Shark Tank investment and the Santander X award were publicly reported in 2024; they are grouped here as part of the recognition and outreach story carried into 2025.',
   links: [['MENA Startup Digest: Key2Enable after Shark Tank', 'https://menastartupdigest.com/?p=17505'], ['Santander: Santander X Global Challenge winners', 'https://santander.com/en/press-room/press-releases/2024/09/santander-helps-over-5000-entrepreneurs-and-businesses-through-training-and-awards-in-h1']]},
  {year: '2026', c: '#2E9A63', big: 'Iraq', title: 'New international markets',
   line: 'Planned rollout to learning centres in Iraq with a local partner.',
   tags: ['Iraq rollout', 'Key2Enable Academy'],
   more: 'Key2Enable advanced its international expansion, including a planned deployment of assistive technology and educational solutions for learning centers in Iraq through a local partner. The company also continued developing collaborations and pilots across other countries. Key2Enable Academy extends this approach through a digital library of games, learning resources and training for families, educators and care professionals.',
   links: []},
];

function JourneyCard({item}) {
  const [open, setOpen] = useState(false);
  const id = 'more-' + item.year;
  return <div className={'journey-card' + (open ? ' is-open' : '')}>
    <div className="journey-top"><RollingNumber value={item.year} from="1980"/><span className="journey-title">{item.title}</span></div>
    <p className="journey-big">{item.big}</p>
    <p className="journey-line">{item.line}</p>
    <ul className="journey-tags">{item.tags.map(t => <li key={t}>{t}</li>)}</ul>
    <button type="button" className="journey-more" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>{open ? 'Show less' : 'Read more'}</button>
    <div className="journey-detail" id={id} hidden={!open}>
      <p>{item.more}</p>
      {item.links.length > 0 && <div className="journey-press"><p className="journey-press-h">Coverage</p><ul>{item.links.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul></div>}
    </div>
  </div>;
}

export function About({onContact}) {
  return <article className="about">
    <section className="about-hero wrap" id="Story">
      <div className="about-hero-copy">
        <p className="eyebrow">About Key2Enable Academy</p>
        <h1>From a bold idea to a global movement for inclusive learning.</h1>
        <p className="lead">Our story began with accessible technology and grew into an international commitment to communication, education, independence and opportunity for people with disabilities.</p>
        <ul className="about-badges">
          <li style={{'--c': '#1C75BC'}}>U.S. incorporated since 2018</li>
          <li style={{'--c': '#6B2C84'}}>2019 GSVC global winner</li>
          <li style={{'--c': '#2E9A63'}}>Learning without barriers</li>
        </ul>
        <button className="action gold action-prominent" onClick={() => onContact('Book a call')}>Book a call</button>
      </div>
      <div className="about-hero-photos">
        <figure className="ap-main"><img src="/assets/armenia-lab.jpg" alt="An inclusive learning space equipped with Key2Enable technology"/></figure>
        <figure className="ap-side"><img src="/assets/stories/julia.jpg" alt="A learner using Key-X in class"/></figure>
        <div className="ap-chip"><RollingNumber value="30,000+"/><span>students reached</span></div>
      </div>
    </section>

    <section className="about-band">
      <div className="wrap">
        <h2>Our global reach</h2>
        <div className="about-stats">
          {figures.map(([value, label]) => <div className="about-stat" key={label}><RollingNumber value={value}/><span>{label}</span></div>)}
        </div>
      </div>
    </section>

    <section className="wrap about-intro about-intro-short">
      <div className="about-sec-head"><p className="about-kicker">Our story</p><h2>The Key2Enable journey, year by year</h2></div>
    </section>

    <section className="wrap journey" aria-label="Key2Enable timeline">
      <ol>
        {journey.map(item => <li key={item.year} className="journey-item" style={{'--c': item.c}}>
          <div className="journey-dot" aria-hidden="true"/>
          <JourneyCard item={item}/>
        </li>)}
      </ol>
    </section>

    <section id="Labs" className="wrap about-map">
      <h2>Where our labs have worked</h2>
      <img src="/assets/lab-network-map.svg" alt="World map highlighting the nine countries in Key2Enable’s lab network. The countries are listed below." width="900" height="355" loading="lazy"/>
      <ul>{countries.map(country => <li key={country}>{country}</li>)}</ul>
    </section>

    <section className="about-reel" aria-label="Photos from Key2Enable labs">
      <div className="about-reel-track">
        {[...aboutGallery, ...aboutGallery].map(([src, place], i) => <figure key={i} aria-hidden={i >= aboutGallery.length ? 'true' : undefined}><img src={'/assets/' + src} alt={i >= aboutGallery.length ? '' : 'Key2Enable lab in ' + place} loading="lazy"/><figcaption>{place}</figcaption></figure>)}
      </div>
    </section>

    <div className="wrap"><Partnership/></div>

    <section className="wrap about-next">
      <div className="about-next-glow" aria-hidden="true"><i/><i/><i/></div>
      <p className="about-kicker">The next chapter</p>
      <h2>Technology opens the door. Education helps people move forward.</h2>
      <p>Key2Enable Academy brings accessible digital learning, practical guidance and human-centered tools into a connected educational journey.</p>
      <div className="about-next-actions">
        <button className="action gold action-prominent" onClick={() => onContact('Book a call')}>Book a call</button>
        <a className="text-link" href="#About" onClick={e => {e.preventDefault(); document.getElementById('Story')?.scrollIntoView({behavior: 'smooth'});}}>Back to our story</a>
      </div>
    </section>
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
