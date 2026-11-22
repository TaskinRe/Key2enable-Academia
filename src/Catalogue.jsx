import React, {useState} from 'react';
import {ImpactNumbers} from './MarketingPages.jsx';

export const devices = [
  ['Key-X', 'Assistive keyboard', 'Type and control the pointer with nine touch-sensitive keys. Plays every Academy game, from music theory to logic puzzles.', 'key-x', [
    ['Typing and navigation', 'Use combinations of large keys to enter text, move the pointer and browse.'],
    ['Alternative input', 'Connect a compatible switch and use scan mode to cycle through choices.'],
    ['Device compatibility', 'Key2Enable lists Windows, macOS, Linux and Android. Check the setup for your device on a call.'],
  ]],
  ['Colibri', 'Head-controlled mouse', 'Move the pointer with head movements. The sensor attaches to glasses, so learners can play Academy games hands-free.', 'colibri', [
    ['Pointer control', 'The wearable sensor translates head movements into pointer movement.'],
    ['Wireless connection', 'Connect the sensor to a compatible device via Bluetooth.'],
  ]],
  ['A-Blinx', 'Eye-blink switch', 'Use an intentional blink to click or select an item in scan mode, including answers in Academy logic and cognition games.', 'ablinx', [
    ['Click with a blink', 'A blink acts as a switch input.'],
    ['Use with Key-X', 'Pair the switch with scan mode for selection without touching the keyboard.'],
  ]],
  ['X-Button', 'Press switch', 'Activate a compatible device or adapted toy with a light press. One press is enough to join in with music and rhythm activities.', 'button-png', [
    ['Physical access', 'Press the switch to make a selection or activate a connected device.'],
    ['Setup', 'Ask which switch inputs and adapted toys work with your equipment.'],
  ]],
  ['X-Queeze', 'Air-pressure switch', 'Squeeze the air bladder to make a selection in Key-X scan mode and play Academy games with a grip.', 'xq-use', [
    ['Squeeze to select', 'The air bladder provides a grip-based way to activate a switch.'],
    ['Use with Key-X', 'Connect to Key-X and use scan mode to cycle through choices.'],
  ]],
];
const software = [
  ['Expressia', 'Create communication boards and learning activities.'],
  ['FluentiX', 'Complete words with predictive typing.'],
  ['TelepatiX', 'Write messages and have them spoken aloud.'],
  ['SimpliX', 'Build activities using pictures and sounds.'],
  ['321 Playsy', 'Practise everyday skills through stories and games.'],
  ['Dashboard', 'Plan lessons and follow learner progress.'],
];

export function ProductMenu({active, close}) {
  const [open, setOpen] = useState(false);
  const links = [['All products', 'Products'], ...devices.map(([name]) => [name, 'Products/' + name]), ['Software', 'Products/Software'], ['Educational games', 'Game'], ['Teaching materials', 'Products/Teaching materials']];
  return <div className="product-menu"
    onPointerEnter={event => {if (event.pointerType === 'mouse') setOpen(true);}}
    onPointerLeave={event => {
      if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) setOpen(false);
    }}
    onBlur={event => {if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);}}
    onKeyDown={event => {if (event.key === 'Escape') {event.currentTarget.querySelector('button').focus(); setOpen(false);}}}>
    <button className={active ? 'current' : undefined} aria-controls="product-links" aria-expanded={open} onClick={event => setOpen(event.nativeEvent.pointerType === 'mouse' || !open)}>Products</button>
    <div id="product-links" className="product-links" hidden={!open}>
      {links.map(([label, route]) => <a key={route} href={'#' + encodeURIComponent(route)} onClick={() => {setOpen(false); close();}}>{label}</a>)}
    </div>
  </div>;
}

function Software({standalone = false}) {
  const Heading = standalone ? 'h1' : 'h2';
  return <section className="catalogue-section">
    <div className="software-showcase-head"><p className="eyebrow">Key2Enable software</p><Heading>Tools for communication and learning.</Heading><p>Explore the software alongside assistive access devices and the Academy.</p></div>
    <dl className="software-list software-motion-grid">
      {software.map(([name, description]) => <div key={name}><dt>{name}</dt><dd>{description}</dd></div>)}
    </dl>
    <div className="catalogue-membership material-panel">
      <div><p className="eyebrow">One membership</p><h2>Get the whole Academy.</h2><p>Games, pathways, training and teaching resources together.</p></div>
      <a className="action action-prominent" href="#Academy">Explore membership</a>
    </div>
  </section>;
}
function Materials({standalone = false}) {
  const Heading = standalone ? 'h1' : 'h2';
  return <section className="catalogue-section material-panel">
    <Heading>Teaching materials</Heading>
    <p>Planned Academy resources include lesson plans, activity guides and caregiver checklists.</p>
    <a className="text-link" href="#Academy">View the Academy subscription</a>
  </section>;
}

export function Catalogue({page, onContact}) {
  const topic = page.split('/')[1];
  const device = devices.find(([name]) => name === topic);
  if (device) {
    const [name, type, description, image, features] = device;
    return <article className="wrap section">
      <a className="text-link back-link" href="#Products">All products</a>
      <div className="split-feature device-detail">
        <div><p className="eyebrow">{type}</p><h1>{name}</h1><p>{description}</p>
          <button className="action" onClick={() => onContact('Book a ' + name + ' demo')}>Book a {name} demo</button>
        </div>
        <div className="device-image"><img src={'/assets/devices/' + image + '.png'} alt={name + ' ' + type}/></div>
      </div>
      <section className="catalogue-section">
        <h2>How {name} works</h2>
        <dl className="software-list">{features.map(([label, detail]) => <div key={label}><dt>{label}</dt><dd>{detail}</dd></div>)}</dl>
        {name === 'Key-X' && <div className="split-feature">
          <figure><img src="/assets/devices/key-x-writing.jpg" alt="Key-X writing tutorial showing the keyboard in use" loading="lazy"/><figcaption>Still from the Key2Enable writing tutorial</figcaption></figure>
          <div><h3>See how to write with Key-X</h3><a className="text-link" href="https://www.youtube.com/watch?v=Ybv6X4UInfU">Watch the Key-X writing tutorial</a></div>
        </div>}
        <p><a className="source-link" href="https://www.key2enable.ae/solutions">Key2Enable’s official product information</a></p>
      </section>
    </article>;
  }
  if (topic === 'Software' || topic === 'Teaching materials') return <article className="wrap section">
    <a className="text-link back-link" href="#Products">All products</a>
    {topic === 'Software' ? <Software standalone/> : <Materials standalone/>}
  </article>;

  return <article className="wrap section">
    <h1>Key2Enable products</h1>
    <p className="lead">Assistive devices for computer access and tools for inclusive learning.</p>
    <div className="device-grid">
      {devices.map(([name, type, description, image]) => <a href={'#Products/' + name} key={name}>
        <div className="device-image"><img src={'/assets/devices/' + image + '.png'} alt="" loading="lazy"/></div>
        <div className="card-copy"><small>{type}</small><h2>{name}</h2><p>{description}</p><span className="text-link">Explore {name}</span></div>
      </a>)}
    </div>
    <section className="products-impact catalogue-section">
      <figure><img src="/assets/lab-gallery/armenia2.jpg" alt="Learners using assistive technology in an inclusive learning space" loading="lazy"/><figcaption>Key2Enable learning lab · Armenia</figcaption></figure>
      <div><p className="eyebrow">Learning spaces</p><h2>Access that reaches beyond the device.</h2><ImpactNumbers/></div>
    </section>
    <Software/>
    <section className="products-game-showcase catalogue-section">
      <div><p className="eyebrow">Playful learning</p><h2>Educational games</h2><p>Explore browser games for keyboard discovery, sequencing, creativity and memory.</p><a className="action" href="#Game">Browse the games</a></div>
      <div className="products-game-art"><img src="/assets/hub-game-01.jpg" alt="Keyboard Grove game artwork" loading="lazy"/><img src="/assets/hub-game-04.jpg" alt="Robot Workshop game artwork" loading="lazy"/><img src="/assets/floral-artistry.jpg" alt="Floral Artistry game artwork" loading="lazy"/></div>
    </section>
    <Materials/>
    <a className="text-link" href="https://www.key2enable.ae/solutions">Official product catalogue</a>
  </article>;
}
