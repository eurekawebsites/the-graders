(function(){
  var form=document.getElementById('contactForm');
  if(form) form.addEventListener('submit',function(e){
    e.preventDefault();var msg=document.getElementById('formMsg'),btn=form.querySelector('button[type=submit]'),txt=btn.textContent;
    msg.textContent='Sending…';btn.disabled=true;btn.textContent='Sending…';
    fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw Error();return r.json()}).then(function(j){if(!j.success)throw Error();msg.textContent='Message sent — we will get back to you soon.';form.reset()}).catch(function(){msg.textContent='Something went wrong. Please try again.'}).finally(function(){btn.disabled=false;btn.textContent=txt});
  });

  var hero=document.querySelector('.hero');
  if(hero){
    var manifesto=hero.querySelectorAll('img')[1];
    if(manifesto){
      var style=document.createElement('style');
      style.textContent='.mobile-booklet{display:none}@media(max-width:430px){.js .hero>img:nth-of-type(2){display:none!important}.mobile-booklet{display:block;padding:12px 14px 18px;background:#f0ebe5 url(\'paper-texture-tile.png\') repeat;border-top:1px solid rgba(26,26,26,.12)}.booklet-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:2px 0 10px}.booklet-tab{appearance:none;border:1px solid rgba(26,26,26,.22);background:rgba(255,255,255,.28);padding:8px 4px;font:700 .68rem \'IBM Plex Mono\',monospace;letter-spacing:1px;color:rgba(26,26,26,.65)}.booklet-tab[aria-selected=true]{border-color:#c0392b;color:#c0392b;background:rgba(192,57,43,.06)}.booklet-viewport{position:relative;height:390px;overflow:hidden;border:1px solid rgba(26,26,26,.14);background:#f4efe6;box-shadow:0 8px 24px rgba(26,26,26,.08)}.booklet-page{position:absolute;inset:0;background-image:url(\'manifesto-body-full.png\');background-repeat:no-repeat;background-size:124% auto;background-position-x:center}.booklet-page.p1{background-position-y:0%}.booklet-page.p2{background-position-y:34%}.booklet-page.p3{background-position-y:68%}.booklet-page.p4{background-position-y:100%}.booklet-page[hidden]{display:none}.booklet-controls{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:10px;margin-top:10px}.booklet-controls button{appearance:none;border:0;background:transparent;padding:8px 4px;font:700 .68rem \'IBM Plex Mono\',monospace;text-transform:uppercase;letter-spacing:1px;color:#1a1a1a}.booklet-controls button:last-child{text-align:right}.booklet-status{font:500 .65rem \'IBM Plex Mono\',monospace;letter-spacing:1px;color:rgba(26,26,26,.5)}.booklet-hint{text-align:center;margin-top:2px;font:400 .62rem \'IBM Plex Mono\',monospace;letter-spacing:.5px;color:rgba(26,26,26,.45)}}';
      document.head.appendChild(style);

      var booklet=document.createElement('div');
      booklet.className='mobile-booklet';
      booklet.setAttribute('aria-label','The Graders manifesto booklet');
      booklet.innerHTML='<div class="booklet-tabs" role="tablist" aria-label="Manifesto pages"><button class="booklet-tab" role="tab" aria-selected="true" data-page="0">01</button><button class="booklet-tab" role="tab" aria-selected="false" data-page="1">02</button><button class="booklet-tab" role="tab" aria-selected="false" data-page="2">03</button><button class="booklet-tab" role="tab" aria-selected="false" data-page="3">04</button></div><div class="booklet-viewport"><div class="booklet-page p1" role="tabpanel"></div><div class="booklet-page p2" role="tabpanel" hidden></div><div class="booklet-page p3" role="tabpanel" hidden></div><div class="booklet-page p4" role="tabpanel" hidden></div></div><div class="booklet-controls"><button type="button" data-prev aria-label="Previous manifesto page">← Prev</button><span class="booklet-status">1 / 4</span><button type="button" data-next aria-label="Next manifesto page">Next →</button></div><div class="booklet-hint">Tap a page number or swipe</div>';
      manifesto.insertAdjacentElement('afterend',booklet);

      var tabs=booklet.querySelectorAll('.booklet-tab'),pages=booklet.querySelectorAll('.booklet-page'),status=booklet.querySelector('.booklet-status'),current=0;
      function showPage(n){
        current=(n+pages.length)%pages.length;
        pages.forEach(function(p,i){p.hidden=i!==current});
        tabs.forEach(function(t,i){t.setAttribute('aria-selected',i===current?'true':'false')});
        status.textContent=(current+1)+' / '+pages.length;
      }
      tabs.forEach(function(tab){tab.addEventListener('click',function(){showPage(Number(tab.getAttribute('data-page')))});});
      booklet.querySelector('[data-prev]').addEventListener('click',function(){showPage(current-1)});
      booklet.querySelector('[data-next]').addEventListener('click',function(){showPage(current+1)});
      var touchX=null;
      booklet.querySelector('.booklet-viewport').addEventListener('touchstart',function(e){touchX=e.changedTouches[0].clientX},{passive:true});
      booklet.querySelector('.booklet-viewport').addEventListener('touchend',function(e){if(touchX===null)return;var dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>40)showPage(current+(dx<0?1:-1));touchX=null},{passive:true});
    }
  }

  var els=document.querySelectorAll('.fade-up');
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});return}
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.15});
  els.forEach(function(el){o.observe(el)});
})();
