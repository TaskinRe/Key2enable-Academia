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
    <section className="home-masthead">
      <div className="wrap home-lead">
        <div className="hero-copy">
          <p className="eyebrow">Key2Enable Academy</p>
          <h1>Make learning accessible.</h1>
          <p>Accessible games and practical training for learners with disabilities and the people who support them.</p>
          <div className="actions">
            <button className="action gold action-prominent" onClick={() => onContact('Book a call')}>Book a call</button>
            <a className="text-link" href="#Academy">See membership</a>
          </div>
          <p className="hero-price">Proposed membership · <strong>US$60/month</strong></p>
        </div>
        <figure className="hero-portrait">
          <img src="/assets/lab-gallery/brazil.jpg" alt="Two students using Key-X keyboards in a classroom" width="620" height="413" fetchPriority="high"/>
          <figcaption>Key-X in the classroom · Brazil</figcaption>
        </figure>
      </div>
    </section>
    <section className="wrap section home-benefits">
      <div className="section-heading"><div><p className="eyebrow">Academy membership</p><h2>What your membership gives you</h2></div>
        <a className="action gold action-prominent" href="#Academy">See plans and pricing</a>
      </div>
      <div className="benefit-grid">
        <article className="home-game-benefit">
          <div><h3>Accessible games</h3><a className="text-link" href="#Game">Explore the library</a></div>
          <img src="/assets/hub-game-03.jpg" alt="" width="75" height="75" loading="lazy"/>
        </article>
        <article><h3>Guided pathways</h3><p>Build a practice routine with activities organised around specific learning goals.</p></article>
        <article><h3>Training</h3><p>Learn to use assistive devices and communication tools in class and at home.</p></article>
        <article><h3>Teaching resources</h3><p>Plan sessions with activity guides, lesson plans and caregiver checklists.</p></article>
      </div>
    </section>
    <section className="lab-band"><div className="wrap home-reach">
      <h2>Key2Enable’s lab network</h2><ImpactNumbers/>
    </div></section>
    <section className="wrap section split-feature">
      <figure><img src="/assets/family-lab.jpg" width="800" height="450" alt="A learner and adults exploring assistive technology in Canada" loading="lazy"/><figcaption>Family &amp; Community Lab · Canada</figcaption></figure>
      <div><h2>See what fits your learner.</h2><p>We can walk you through Academy membership, the game library and assistive tools like Key-X and Colibri on a call.</p>
      <button className="action gold action-prominent" onClick={() => onContact('Book a call')}>Book a call</button></div>
    </section>
  </>;
}

function Footer({motion, setMotion, onContact}) {
  return <footer className="site-footer">
    <div className="wrap footer-directory">
      <div><a className="brand" href="#Home"><img src="/assets/academy-brand.png" alt="Key2Enable Academy"/></a><p>Accessible learning for every ability.</p><button className="action gold" onClick={() => onContact('Book a call')}>Book a call</button></div>
      <nav aria-label="Academy links"><h2>Academy</h2><a href="#Game">Game library</a><a href="#Academy/Pathways">Learning pathways</a><a href="#Academy/Training">Training courses</a><a href="#Academy/Resources">Teaching resources</a></nav>
      <nav aria-label="Products links"><h2>Products</h2>{devices.map(([name]) => <a key={name} href={routeHref('Products/' + name)}>{name}</a>)}<a href="#Products/Software">Software</a></nav>
      <nav aria-label="Lab links"><h2>Labs</h2><a href="#About/Labs">Global lab network</a><a href="#About/Naqra">Naqra labs</a><a href="#For%20schools">For schools</a><a href="#For%20families">For families</a></nav>
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
