/* getrallypick v2 — theme switcher (light/dark) + mobile menu */
(function(){
  var root=document.documentElement, STORE_T='gp-theme';
  function flash(){root.classList.add('theme-anim');setTimeout(function(){root.classList.remove('theme-anim');},340);}
  function setTheme(t){root.setAttribute('data-theme',t);try{localStorage.setItem(STORE_T,t);}catch(e){}flash();}
  try{var st=localStorage.getItem(STORE_T);if(st)setTheme(st);}catch(e){}
  document.getElementById('themeToggle').addEventListener('click',function(){setTheme(root.getAttribute('data-theme')==='dark'?'light':'dark');});

  /* Scroll reveal */
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

  /* ---- Mobile menu ---- */
  var mToggle=document.getElementById('menuToggle'),mMenu=document.getElementById('mobileMenu'),mClose=document.getElementById('menuClose');
  if(mToggle&&mMenu){
    function openMenu(){mMenu.classList.add('open');mToggle.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';}
    function closeMenu(){mMenu.classList.remove('open');mToggle.setAttribute('aria-expanded','false');document.body.style.overflow='';}
    mToggle.addEventListener('click',openMenu);
    if(mClose)mClose.addEventListener('click',closeMenu);
    mMenu.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',closeMenu);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mMenu.classList.contains('open'))closeMenu();});
  }
})();
