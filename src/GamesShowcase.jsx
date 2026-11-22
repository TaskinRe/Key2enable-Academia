import React, { useEffect, useRef, useState } from 'react';
export const games = [
 {id:'grove',name:'Keyboard Grove',category:'free',access:'Free to explore',eyebrow:'GET TO KNOW YOUR KEYBOARD',description:'Meet the Key-X buttons in a night-time grove, one short chapter at a time.',image:'keyboard-grove.jpg',url:'https://taskinre.github.io/Games-for-Key2enable/keyboard-grove/',skills:['Key-X familiarization','Guided exploration'],note:'Free exploration. Opens the current game build.'},
 {id:'robot',name:'Robot Workshop',category:'trial',access:'10-level trial · planned',eyebrow:'PLAN. BUILD. TRY AGAIN.',description:'Help Byte reach the charging station. Build a sequence of moves, test your route, and try a different approach.',image:'robot-workshop.jpg',url:'https://taskinre.github.io/Games-for-Key2enable/game-04/',skills:['Sequencing','Problem solving'],note:'Planned offer: levels 1–10 free, with later levels included in membership. This preview opens the current game; the level restriction is not connected.'},
 {id:'floral',name:'Floral Artistry',category:'member',access:'Membership · proposed',eyebrow:'A SPACE TO CREATE',description:'Create flower artwork in a calm night garden. Explore the canvas and make a composition of your own.',image:'floral-artistry.jpg',url:'https://taskinre.github.io/Games-for-Key2enable/floral%20artistry/',skills:['Creative expression','Exploration'],note:'Proposed membership title. Preview access opens the current game build; paid access is not enabled.'},
 {id:'sky',name:'Sky Catch',category:'member',access:'Membership · proposed',eyebrow:'CATCH. REMEMBER. REPLAY.',description:'Explore Sky Catch and Memory Garden: catch falling objects and practise remembering colorful patterns.',image:'sky-catch.jpg',url:'https://taskinre.github.io/Games-for-Key2enable/game-03/',skills:['Attention','Pattern memory'],note:'Proposed membership title. Preview access opens the current game build; paid access is not enabled.'},
 {id:'typing',name:'Typing Teacher',category:'member',access:'Membership · proposed',eyebrow:'ONE LETTER AT A TIME',description:'Travel the A-to-Z map, practise letters and groups, and begin building simple words.',image:'typing-teacher.jpg',url:'https://taskinre.github.io/Games-for-Key2enable/game-05/',skills:['Letter practice','Word building'],note:'Proposed membership title. Preview access opens the current game build; paid access is not enabled.'},
 {id:'brick',name:'Brick Builder',category:'preview',access:'Preview',description:'Build with virtual bricks on the table, one piece at a time.',image:'hub-game-06.jpg',url:'https://taskinre.github.io/Games-for-Key2enable/brick-builder/',skills:['Building','Creativity'],note:'Current game preview.'}
];
const coverImages = {grove: 1, floral: 2, sky: 3, robot: 4, typing: 5, brick: 6};
const skyCatch = games.find(game => game.id === 'sky');

export function GamesShowcase() {
  const [game, setGame] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    if (game && !dialog.current.open) dialog.current.showModal();
  }, [game]);

  function openGame(selected) {
    trigger.current = document.activeElement;
    setGame(selected);
  }

  return <>
    <section className="wrap section game-intro split-feature enter">
      <div>
        <p className="eyebrow">Academy / Game library</p><h1>Games that teach, one skill at a time</h1>
        <p>Play in your browser. Pick a game by skill and start with a short session, on your own or with someone alongside you.</p>
        <div className="actions"><a className="action gold action-prominent" href="#Academy">Get the full library</a><a className="action secondary" href="#Academy/Pathways">See the learning pathways</a></div>
      </div>
      <figure className="game-screen">
        <div><img src="/assets/hub-game-03.jpg" alt="Kites and learning tiles from Sky Catch" width="1536" height="1024"/></div>
        <figcaption>Sky Catch artwork</figcaption>
      </figure>
    </section>

    <div className="game-feature-band">
      <section className="wrap game-feature">
        <img src="/assets/hub-game-03.jpg" alt="Sky Catch illustrated game cover" width="1536" height="1024" loading="lazy"/>
        <div>
          <p className="eyebrow">Playable preview</p><h2>Sky Catch</h2>
          <p>Catch falling objects, or switch to Memory Garden to practise remembering patterns.</p>
          <ul><li>Choose an activity in the Sky Catch menu.</li><li>Follow the on-screen controls for your chosen mode.</li><li>Play a short round and talk through what you noticed.</li></ul>
          <button className="action gold action-prominent" onClick={() => openGame(skyCatch)}>Play Sky Catch</button>
        </div>
      </section>
    </div>

    <section id="Library" className="wrap section">
      <h2>Browse the game library</h2>
      <div className="simple-game-grid">
        {games.map(item => <article className="simple-game-card" key={item.id}>
          <button className="simple-game-image" onClick={() => openGame(item)} aria-label={'Open ' + item.name}>
            <img src={'/assets/hub-game-0' + coverImages[item.id] + '.jpg'} alt="" loading="lazy"/>
          </button>
          <div className="simple-game-info">
            <div><span className="simple-access">{item.skills.join(' · ')}</span><h3>{item.name}</h3><p>{item.description}</p></div>
            <div><p className="simple-access">{item.access}</p><button className="action secondary" onClick={() => openGame(item)}>Play {item.name}</button></div>
          </div>
        </article>)}
      </div>
      <p className="simple-games-note">Current builds are available as previews. Membership access and the proposed level limits are in development.</p>
    </section>

    <section className="wrap research-panel">
      <h2>Research behind the approach</h2>
      <p>A systematic review of digital games found that learning outcomes varied with game design. The Academy games give learners specific tasks to practise, such as repeating a letter or revising a route. The review looked at digital games generally. The learning outcomes of these titles have yet to be established.</p>
      <a className="text-link" href="https://pubmed.ncbi.nlm.nih.gov/26937054/">Read the review by Clark and colleagues</a>
    </section>

    <dialog ref={dialog} className="game-player-dialog" aria-labelledby="player-title" onClose={() => {setGame(null); trigger.current?.focus();}}>
      {game && <>
        <div className="player-toolbar"><h2 id="player-title">{game.name}</h2><button className="close" onClick={() => dialog.current.close()}>Close game</button></div>
        <iframe src={game.url} title={game.name + ' playable preview'} allowFullScreen/>
        <p className="player-note"><a href={game.url} target="_blank" rel="noopener noreferrer">Open in a new tab</a></p>
      </>}
    </dialog>
  </>;
}
