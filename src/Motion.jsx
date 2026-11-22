import React, {useEffect, useRef, useState} from 'react';

export function useSectionMotion(main, page, enabled) {
  useEffect(() => {
    if (!enabled || !window.IntersectionObserver) return;

    const targets = main.current.querySelectorAll(
      'h1, h2, .eyebrow, .lead, section > p, section figure, .device-grid > a, .simple-game-card, .course-grid article, .benefit-grid > article, .included-grid > div, .price-card, .included-card, .impact-numbers > div, .about-stat, .about-step, .founder, .value, .journey-card, .about-badges li, .about-intro-text, .about-statement, .about-origin-body > p, .network-map li, .family-photos > *, main .action.gold:not(a), .school-cta'
    );
    targets.forEach(target => {
      const siblings = target.parentElement ? [...target.parentElement.children] : [];
      target.style.setProperty('--reveal-delay', Math.min(siblings.indexOf(target), 6) * 90 + 'ms');
      target.classList.add('reveal');
    });
    const observer = new IntersectionObserver(entries => {
      for (const {target, isIntersecting} of entries) {
        if (!isIntersecting) continue;
        target.classList.add('revealed');
        observer.unobserve(target);
      }
    }, {threshold: 0.12, rootMargin: '0px 0px -40px 0px'});
    targets.forEach(target => observer.observe(target));

    return () => {
      observer.disconnect();
      targets.forEach(target => target.classList.remove('reveal', 'revealed'));
    };
  }, [main, page, enabled]);
}

export function RollingNumber({value, from}){
 const node=useRef(null),[started,setStarted]=useState(false),[reduced,setReduced]=useState(()=>document.documentElement.dataset.motion==='off'||window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{const update=()=>setReduced(document.documentElement.dataset.motion==='off'||window.matchMedia('(prefers-reduced-motion: reduce)').matches);const observer=new MutationObserver(update);observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});const media=window.matchMedia('(prefers-reduced-motion: reduce)');media.addEventListener('change',update);const visibility=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setStarted(true);visibility.disconnect()}},{threshold:.5});visibility.observe(node.current);return()=>{observer.disconnect();visibility.disconnect();media.removeEventListener('change',update)}},[]);
 const on=started||reduced;
 return <strong ref={node} className={'rolling-number'+(on?' is-shown':'')} role="img" aria-label={value}><span aria-hidden="true" className="number-reels">{[...value].map((character,index)=>/\d/.test(character)?<span className="number-window" key={index}><span className="number-track" style={{transform:`translateY(-${(()=>{const d=Number(character),f=from?Number(from[index]??0):0;return on?(d>=f&&from?d:10+d):f})()*1.1}em)`,transitionDuration:reduced?'0ms':`${1600+index*150}ms`}}>{Array.from({length:20},(_,i)=><span key={i}>{i%10}</span>)}</span></span>:<span className="number-punctuation" key={index}>{character}</span>)}</span></strong>
}
