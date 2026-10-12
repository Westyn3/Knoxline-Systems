document.documentElement.classList.add('js');
(function(){
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    els.forEach ? els.forEach(function(e){e.classList.add('in')}) : null;
    for(var i=0;i<els.length;i++){els[i].classList.add('in')}
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
  for(var i=0;i<els.length;i++){ io.observe(els[i]); }
})();

// Track click-to-call and booking clicks as GA4 events (shows up as lead signals in Analytics)
document.addEventListener('click', function(e){
  var a = e.target.closest ? e.target.closest('a') : null;
  if(!a || typeof gtag !== 'function') return;
  var href = a.getAttribute('href') || '';
  if(href.indexOf('tel:') === 0){
    gtag('event', 'phone_call_click', { link_url: href, page_path: location.pathname });
  } else if(href.indexOf('mailto:') === 0){
    gtag('event', 'email_click', { link_url: href, page_path: location.pathname });
  }
});
