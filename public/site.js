(function(){
  var form=document.getElementById('contactForm');
  if(form) form.addEventListener('submit',function(e){
    e.preventDefault();var msg=document.getElementById('formMsg'),btn=form.querySelector('button[type=submit]'),txt=btn.textContent;
    msg.textContent='Sending…';btn.disabled=true;btn.textContent='Sending…';
    fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw Error();return r.json()}).then(function(j){if(!j.success)throw Error();msg.textContent='Message sent — we will get back to you soon.';form.reset()}).catch(function(){msg.textContent='Something went wrong. Please try again.'}).finally(function(){btn.disabled=false;btn.textContent=txt});
  });
  var els=document.querySelectorAll('.fade-up');
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});return}
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.15});
  els.forEach(function(el){o.observe(el)});
})();
