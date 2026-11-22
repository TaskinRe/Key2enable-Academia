import React, {useEffect, useRef, useState} from 'react';

export function useSectionMotion(main, page, enabled) {
  useEffect(() => {
    if (!enabled || !window.IntersectionObserver) return;

    const targets = main.current.querySelectorAll(
      'h1, section h2, section figure, .device-grid > a, .simple-game-card, .course-grid article, main .action.gold:not(a), .school-cta'
    );
    const observer = new IntersectionObserver(entries => {
      for (const {target, isIntersecting} of entries) {
        if (!isIntersecting) continue;
        target.classList.add('motion-arrive');
        observer.unobserve(target);
      }
    }, {threshold: 0.22});
    targets.forEach(target => observer.observe(target));

    return () => {
      observer.disconnect();
      targets.forEach(target => target.classList.remove('motion-arrive'));
    };
  }, [main, page, enabled]);
}

export function RollingNumber({value}){
 const node=useRef(null),[started,setStarted]=useState(false),[reduced,setReduced]=useState(()=>document.documentElement.dataset.motion==='off'||window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{const update=()=>setReduced(document.documentElement.dataset.motion==='off'||window.matchMedia('(prefers-reduced-motion: reduce)').matches);const observer=new MutationObserver(update);observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-motion']});const media=window.matchMedia('(prefers-reduced-motion: reduce)');media.addEventListener('change',update);const visibility=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){setStarted(true);visibility.disconnect()}},{threshold:.5});visibility.observe(node.current);return()=>{observer.disconnect();visibility.disconnect();media.removeEventListener('change',update)}},[]);
 return <strong ref={node} className="rolling-number" role="img" aria-label={value} data-counter-value={value} data-counter-started={started||reduced}><span aria-hidden="true" className="number-reels">{[...value].map((character,index)=>/\d/.test(character)?<span className="number-window" key={index}><span className="number-track" style={{transform:`translateY(-${(started||reduced?20+Number(character):0)*1.1}em)`,transitionDuration:reduced?'0ms':`${1500+index*110}ms`}}>{Array.from({length:30},(_,i)=><span key={i}>{i%10}</span>)}</span></span>:<span className="number-punctuation" key={index}>{character}</span>)}</span></strong>
}
