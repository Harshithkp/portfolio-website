const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('theme');
if(savedTheme==='dark')document.documentElement.classList.add('dark');
themeToggle.addEventListener('click',()=>{document.documentElement.classList.toggle('dark');localStorage.setItem('theme',document.documentElement.classList.contains('dark')?'dark':'light');themeToggle.textContent=document.documentElement.classList.contains('dark')?'☀️':'🌙'});
const menuBtn=document.querySelector('.menu-btn');const navLinks=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const revealEls=document.querySelectorAll('.reveal');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('active')})},{threshold:.12});revealEls.forEach(el=>observer.observe(el));
const glow=document.querySelector('.cursor-glow');window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
