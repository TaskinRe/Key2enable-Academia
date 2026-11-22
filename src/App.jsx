import React, {useEffect, useRef, useState} from 'react';
import {Catalogue, devices, ProductMenu} from './Catalogue.jsx';
import {GamesShowcase} from './GamesShowcase.jsx';
import {AudiencePage, ImpactNumbers, About} from './MarketingPages.jsx';
import {DemoDashboard} from './DemoDashboard.jsx';
import {CallRequest} from './CallRequest.jsx';
import {useSectionMotion} from './Motion.jsx';

const routes = ['For schools', 'For families', 'Academy', 'Game', 'About'];
const routeHref = name => '#' + encodeURIComponent(name);

function readRoute() {
  try {
    return decodeURIComponent(window.location.hash.slice(1)) || 'Home';
  } catch {
    return 'Home';
  }
}

function Home({onContact}) {
  return <>
    <section className="hero-clean">
      <svg className="hand-doodles" viewBox="0 0 1440 1300" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
        <defs><filter id="pencil"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="3.2"/></filter></defs>
        <g filter="url(#pencil)">
          
          
          <g className="hd" style={{'--d':'.6s'}}><path d="M90 470l14 30 32 4-24 22 6 32-28-16-30 15 7-32-23-22 33-4z"/></g>
          
          
          <g className="hd" style={{'--d':'.2s'}}><path d="M1290 120c-22 0-38 18-38 38 0 14 8 24 16 30v18h44v-18c8-6 16-16 16-30 0-20-16-38-38-38z"/><path d="M1272 214h36M1278 226h24"/><path d="M1290 64v-16M1340 84l12-12M1240 84l-12-12"/></g>
          <g className="hd" style={{'--d':'.5s'}}><path d="M1160 320h40c0-14 22-14 22 0h40v40c14 0 14 22 0 22v40h-40c0 14-22 14-22 0h-40v-40c-14 0-14-22 0-22z"/></g>
          <g className="hd" style={{'--d':'.8s'}}><path d="M1330 470c12-34 58-34 46 8-8 24-36 34-46 56-12-22-40-32-46-56-12-42 34-42 46-8z"/></g>
          
          
          
          <g className="hd" style={{'--d':'1.8s'}}><circle cx="340" cy="90" r="22"/><path d="M340 50v-14M340 144v-14M300 90h-14M394 90h-14M312 62l-10-10M368 118l10 10M368 62l10-10M312 118l-10 10"/></g>
        </g>
      </svg>
      <div className="wrap hero-clean-copy">
        <h1>Key2Enable <span>Academy</span></h1>
        <p className="hero-clean-cycle" aria-label="Learning through music theory, logic games, cognition and multimodal AI">Learning through <span className="cycle" aria-hidden="true"><span>music theory</span><span>logic games</span><span>cognition</span><span>multimodal AI</span><span>music theory</span></span></p>
        <p className="hero-clean-sub">Accessible games and assistive technology, guided by multimodal AI and the people who know each learner.</p>
        <div className="hero-clean-actions">
          <button className="action gold action-prominent" onClick={() => onContact('Book a call')}>Book a call</button>
          <a className="hero-clean-link" href="#Academy">See membership</a>
        </div>
        <p className="hero-clean-price">Academy subscription · <strong>US$80/month</strong></p>
      </div>
      <div className="hero-clean-trio">
        <figure className="trio-side"><a href="https://taskinre.github.io/Games-for-Key2enable/keyboard-grove/" target="_blank" rel="noopener noreferrer"><img src="/assets/hub-game-01.jpg" alt="Play Keyboard Grove" width="600" height="600"/><span className="trio-play">Play Keyboard Grove</span></a></figure>
        <figure className="trio-main"><a href="#Game"><img src="/assets/lab-gallery/brazil.jpg" alt="A student using a Key-X assistive keyboard in a Key2Enable lab in Brazil" width="1000" height="666" fetchPriority="high"/><span className="trio-play">See all games</span></a></figure>
        <figure className="trio-side"><a href="https://taskinre.github.io/Games-for-Key2enable/game-05/" target="_blank" rel="noopener noreferrer"><img src="/assets/hub-game-05.jpg" alt="Play Typing Teacher" width="600" height="600"/><span className="trio-play">Play Typing Teacher</span></a></figure>
      </div>
      <ul className="wrap hero-clean-tech" aria-label="Assistive technology">
        <li><a href="#Products/Key-X"><img src="/assets/key-x.png" alt="" width="120" height="80"/>Key-X keyboard</a></li>
        <li><a href="#Products/Colibri"><img src="/assets/colibri.png" alt="" width="120" height="80"/>Colibri head mouse</a></li>
        <li><a href="#Products/X-Button"><img src="/assets/button-png.png" alt="" width="120" height="80"/>X-Button switch</a></li>
        <li><a href="#Game"><img src="/assets/hub-game-01.jpg" alt="" width="120" height="80" className="round"/>Accessible games</a></li>
      </ul>
    </section>
    <div className="skill-marquee" aria-label="Learning areas"><div className="skill-marquee-track" aria-hidden="true">{['Music theory','Logic games','Cognition','Multimodal AI','Communication','Literacy','Memory','Planning','Music theory','Logic games','Cognition','Multimodal AI','Communication','Literacy','Memory','Planning'].map((skill,index)=><span key={index}>{skill}<i/></span>)}</div></div>
    <section className="wrap section pillars4">
      <div className="academy-how-head"><h2>Four ways the Academy teaches</h2><p>Every game is built on one of these, and played with the input that suits the learner.</p></div>
      <div className="pillars4-grid">
        <article><svg viewBox="0 0 64 64" aria-hidden="true"><path className="pi" d="M22 46V14l26-6v32"/><ellipse className="pi" cx="16" cy="46" rx="7" ry="5"/><ellipse className="pi" cx="42" cy="40" rx="7" ry="5"/><path className="pi pulse" d="M10 24h6M8 30h6"/></svg><h3>Music theory</h3><p>Real notes, rhythm, scales and ear training, step by step, from the first sound to reading music.</p></article>
        <article><svg viewBox="0 0 64 64" aria-hidden="true"><rect className="pi" x="8" y="8" width="20" height="20" rx="5"/><rect className="pi" x="36" y="36" width="20" height="20" rx="5"/><path className="pi dash" d="M28 18h14a4 4 0 0 1 4 4v14"/><path className="pi" d="M42 32l4 4 4-4"/></svg><h3>Logic games</h3><p>Plan a route, test it and try again. Sequencing and problem solving, one move at a time.</p><a className="text-link" href="#Game">Play Robot Workshop</a></article>
        <article><svg viewBox="0 0 64 64" aria-hidden="true"><path className="pi" d="M32 10c-10 0-18 7-18 16 0 6 3 10 6 13v9h24v-9c3-3 6-7 6-13 0-9-8-16-18-16z"/><path className="pi dash" d="M24 26h6l3-6 4 12 3-6h4"/><path className="pi" d="M24 54h16"/></svg><h3>Cognition</h3><p>Attention, memory and planning, practised through patterns, matching and short challenges.</p><a className="text-link" href="#Game">Play Sky Catch</a></article>
        <article><svg viewBox="0 0 64 64" aria-hidden="true"><circle className="pi" cx="32" cy="32" r="8"/><circle className="pi orbit" cx="32" cy="32" r="20"/><circle className="pi-dot" cx="32" cy="12" r="3.5"/><circle className="pi-dot b" cx="52" cy="32" r="3.5"/><circle className="pi-dot c" cx="18" cy="46" r="3.5"/></svg><h3>Multimodal AI</h3><p>Reads presses, timing, pauses and voice, then adjusts pace and hints. Teachers and families stay in charge.</p><a className="text-link" href="#Demo%20dashboard">See the dashboard</a></article>
      </div>
    </section>
    <section className="wrap section home-benefits">
      <div className="section-heading"><div><p className="eyebrow">Academy membership</p><h2>What your membership gives you</h2></div>
        <a className="action gold action-prominent" href="#Academy">See plans and pricing</a>
      </div>
      <div className="benefit-grid">
        <article><span className="benefit-index">01</span><div><h3>Play to practise</h3><p>Games for music theory, logic, cognition and literacy.</p><a className="text-link" href="#Game">Explore the games</a></div></article>
        <article><span className="benefit-index">02</span><div><h3>Follow a pathway</h3><p>Build steady routines around practical learning goals.</p></div></article>
        <article><span className="benefit-index">03</span><div><h3>Learn with your team</h3><p>Training for teachers, therapists and families supporting a learner.</p></div></article>
        <article><span className="benefit-index">04</span><div><h3>Use ready resources</h3><p>Bring activity guides and lesson materials into everyday practice.</p></div></article>
      </div>
    </section>
    <section className="lab-band"><div className="wrap home-reach">
      <h2>Key2Enable’s lab network</h2><ImpactNumbers/>
    </div></section>
    <section className="wrap section home-fieldwork">
      <div className="fieldwork-heading"><p className="eyebrow">Learning in practice</p><h2>Built around people, in real learning spaces.</h2><p>Explore how Key2Enable technology is used by learners, families and educators.</p></div>
      <div className="fieldwork-gallery">
        <figure className="fieldwork-main"><img src="/assets/lab-gallery/canada2.jpg" width="900" height="600" alt="Key2Enable Family and Community Lab in Canada" loading="lazy"/><figcaption>Family &amp; Community Lab · Canada</figcaption></figure>
        <figure className="fieldwork-secondary"><img src="/assets/lab-gallery/brazil4.jpg" width="900" height="600" alt="Key2Enable learning activities in Brazil" loading="lazy"/><figcaption>Learning activities · Brazil</figcaption></figure>
      </div>
      <div className="get-in-touch">
        <h2>Get in touch with Key2Enable Academy</h2>
        <p>Tell us about your learner, school or centre. We will help you find the right place to start.</p>
        <button className="action gold action-prominent" onClick={() => onContact('Book a call')}>Book a call</button>
      </div>
    </section>
  </>;
}

function Footer({motion, setMotion, onContact}) {
  return <footer className="site-footer">
    <div className="wrap footer-directory">
      <div><a className="brand" href="#Home"><img src="/assets/academy-brand.png" alt="Key2Enable Academy"/></a><p>Accessible learning for every ability.</p><button className="action gold" onClick={() => onContact('Book a call')}>Book a call</button></div>
      <nav aria-label="Academy links"><h2>Academy</h2><a href="#Game">Game library</a><a href="#Academy/Pathways">Learning pathways</a><a href="#Academy/Training">Training courses</a><a href="#Academy/Resources">Teaching resources</a></nav>
      <nav aria-label="Products links"><h2>Products</h2>{devices.map(([name]) => <a key={name} href={routeHref('Products/' + name)}>{name}</a>)}<a href="#Products/Software">Software</a></nav>
      <nav aria-label="Lab links"><h2>Labs</h2><a href="#About/Labs">Global lab network</a><a href="#About/Naqra">UAE labs</a><a href="#For%20schools">For schools</a><a href="#For%20families">For families</a></nav>
      <nav aria-label="Membership links"><h2>Membership</h2><a href="#Academy">Plans and pricing</a><a href="#Demo%20dashboard">Learner dashboard</a><a href="#About">About Key2Enable</a></nav>
    </div>
    <div className="wrap footer-bottom"><small>© {new Date().getFullYear()} Key2Enable Academy</small><button className="text-link" aria-pressed={!motion} onClick={() => setMotion(!motion)}>Reduce motion</button></div>
  </footer>;
}

export function App() {
  const [page, setPage] = useState(readRoute);
  const [menu, setMenu] = useState(false);
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [enquiry, setEnquiry] = useState('');
  const dialog = useRef(null);
  const main = useRef(null);
  const trigger = useRef(null);
  useSectionMotion(main, page, motion);

  useEffect(() => {
    const navigate = () => {
      setPage(readRoute());
      setMenu(false);
      window.scrollTo(0, 0);
      main.current?.focus({preventScroll: true});
    };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);

  useEffect(() => {
    const section = page.split('/')[1];
    if (section && (page.startsWith('Academy/') || page.startsWith('About/') || page.startsWith('Game/'))) {
      document.getElementById(section)?.scrollIntoView();
    }
  }, [page]);

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
  }, [motion]);

  function openEnquiry(title = 'Book a call') {
    trigger.current = document.activeElement;
    setEnquiry(title);
  }

  useEffect(() => {
    if (enquiry && !dialog.current.open) dialog.current.showModal();
  }, [enquiry]);

  const isCatalogue = page === 'Products' || page.startsWith('Products/');
  const section = page.split('/')[0];
  const audience = {'For schools': 'schools', 'For families': 'families', Academy: 'academy'}[section];
  let content;
  if (isCatalogue) content = <Catalogue page={page} onContact={openEnquiry}/>;
  else if (section === 'Game') content = <GamesShowcase/>;
  else if (page === 'Demo dashboard') content = <DemoDashboard/>;
  else if (audience) content = <AudiencePage kind={audience} onContact={openEnquiry}/>;
  else if (section === 'About') content = <About onContact={openEnquiry}/>;
  else content = <Home onContact={openEnquiry}/>;

  return <>
    <a className="skip" href="#main-content" onClick={event => {event.preventDefault(); main.current.focus();}}>Skip to content</a>
    <header className="site-header">
      <div className="wrap header-row">
        <a className="brand" href="#Home"><img src="/assets/academy-brand.png" alt="Key2Enable Academy"/></a>
        <button className="menu-toggle action secondary" aria-expanded={menu} aria-controls="site-nav" onClick={() => setMenu(!menu)}>{menu ? 'Close menu' : 'Menu'}</button>
        <nav id="site-nav" aria-label="Main navigation" className={menu ? 'site-nav open' : 'site-nav'}>
          <ProductMenu active={isCatalogue} close={() => setMenu(false)}/>
          {routes.map(route => <a key={route} aria-current={section === route ? 'page' : undefined} href={routeHref(route)} onClick={() => setMenu(false)}>{route}</a>)}
          <button className="action gold" onClick={() => openEnquiry()}>Book a call</button>
        </nav>
      </div>
    </header>
    <main id="main-content" tabIndex={-1} ref={main}>{content}</main>
    <Footer motion={motion} setMotion={setMotion} onContact={openEnquiry}/>
    <dialog ref={dialog} aria-labelledby="enquiry-title" onClose={() => {setEnquiry(''); trigger.current?.focus();}}>
      {enquiry && <CallRequest key={enquiry} topic={enquiry} onClose={() => dialog.current.close()}/>}
    </dialog>
  </>;
}
