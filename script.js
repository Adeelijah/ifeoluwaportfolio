document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>{document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();});}));
// Content remains visible without JavaScript and when reduced motion is requested.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reduceMotion.matches && 'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:0.08});
 const elements=document.querySelectorAll('.hero-copy,.portrait-wrap,.section-heading,.video-grid article,.case-study,.results,.graphics,.service-grid article,.about-title,.about-title + div,.process-grid > div,.contact > h2');
 elements.forEach((element,index)=>{if(element.getBoundingClientRect().top<window.innerHeight){return;}element.style.setProperty('--reveal-delay',`${Math.min(index%3*70,140)}ms`);element.classList.add('reveal-ready');observer.observe(element);});
 reduceMotion.addEventListener('change',event=>{if(event.matches){elements.forEach(element=>element.classList.add('is-visible'));observer.disconnect();}});
}
