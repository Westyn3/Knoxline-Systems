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
