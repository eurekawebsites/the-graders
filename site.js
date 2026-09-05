(function(){
  var form=document.getElementById('contactForm');
  if(form) form.addEventListener('submit',function(e){
    e.preventDefault();
    var msg=document.getElementById('formMsg'),btn=form.querySelector('button[type=submit]'),txt=btn.textContent;
    msg.textContent='Sending…';btn.disabled=true;btn.textContent='Sending…';
    fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}})
      .then(function(r){if(!r.ok)throw Error();return r.json()})
      .then(function(j){if(!j.success)throw Error();msg.textContent='Message sent — we will get back to you soon.';form.reset()})
      .catch(function(){msg.textContent='Something went wrong. Please try again.'})
      .finally(function(){btn.disabled=false;btn.textContent=txt});
  });

  var hero=document.querySelector('.hero');
  if(hero){
    var manifesto=hero.querySelectorAll('img')[1];
    if(manifesto){
      var style=document.createElement('style');
      style.textContent=''
      + '.mobile-booklet{display:none}'
      + '@media(max-width:430px){'
      + ' .js .hero>img:nth-of-type(2){display:none!important}'
      + ' .mobile-booklet{display:block;padding:18px 14px 20px;background:#f0ebe5 url("paper-texture-tile.png") repeat;border-top:1px solid rgba(26,26,26,.12)}'
      + ' .booklet-tabs{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:0 0 14px}'
      + ' .booklet-tab{appearance:none;border:1px solid rgba(26,26,26,.22);background:rgba(255,255,255,.28);padding:12px 4px;font:700 .68rem "IBM Plex Mono",monospace;letter-spacing:1px;color:rgba(26,26,26,.75)}'
      + ' .booklet-tab[aria-selected="true"]{border-color:#c0392b;color:#c0392b;background:rgba(192,57,43,.06)}'
      + ' .booklet-viewport{position:relative;overflow:hidden;border:1px solid rgba(26,26,26,.14);background:#f4efe6;padding:16px 0 10px;box-shadow:0 8px 24px rgba(26,26,26,.08)}'
      + ' .booklet-page{display:block;width:100%!important;max-width:100%!important;height:auto;margin:0!important}'
      + ' .booklet-page[hidden]{display:none}'
      + ' .booklet-controls{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:10px;margin-top:12px}'
      + ' .booklet-controls button{appearance:none;border:0;background:transparent;padding:8px 4px;font:700 .68rem "IBM Plex Mono",monospace;text-transform:uppercase;letter-spacing:1px;color:#1a1a1a}'
      + ' .booklet-controls button:last-child{text-align:right}'
      + ' .booklet-status{font:500 .65rem "IBM Plex Mono",monospace;letter-spacing:1px;color:rgba(26,26,26,.5)}'
      + ' .booklet-hint{text-align:center;margin-top:2px;font:400 .62rem "IBM Plex Mono",monospace;letter-spacing:.5px;color:rgba(26,26,26,.45)}'
      + '}';
      document.head.appendChild(style);

      var booklet=document.createElement('div');
      booklet.className='mobile-booklet';
      booklet.setAttribute('aria-label','The Graders manifesto booklet');
      booklet.innerHTML=''
        + '<div class="booklet-tabs" role="tablist" aria-label="Manifesto pages">'
        + '  <button class="booklet-tab" role="tab" aria-selected="true" data-page="0">01</button>'
        + '  <button class="booklet-tab" role="tab" aria-selected="false" data-page="1">02</button>'
        + '</div>'
        + '<div class="booklet-viewport">'
        + '  <img class="booklet-page" src="graders_page1_2page.png" alt="The Graders manifesto page 1">'
        + '  <img class="booklet-page" src="graders_page2_2page.png" alt="The Graders manifesto page 2" hidden>'
        + '</div>'
        + '<div class="booklet-controls">'
        + '  <button type="button" data-prev aria-label="Previous manifesto page">← Prev</button>'
        + '  <span class="booklet-status">1 / 2</span>'
        + '  <button type="button" data-next aria-label="Next manifesto page">Next →</button>'
        + '</div>'
        + '<div class="booklet-hint">Tap a page number or swipe</div>';
      manifesto.insertAdjacentElement('afterend',booklet);

      var tabs=booklet.querySelectorAll('.booklet-tab');
      var pages=booklet.querySelectorAll('.booklet-page');
      var status=booklet.querySelector('.booklet-status');
      var current=0;
      function showPage(n){
        current=(n+pages.length)%pages.length;
        pages.forEach(function(p,i){p.hidden=i!==current;});
        tabs.forEach(function(t,i){t.setAttribute('aria-selected',i===current?'true':'false');});
        status.textContent=(current+1)+' / '+pages.length;
      }
      tabs.forEach(function(tab){tab.addEventListener('click',function(){showPage(Number(tab.getAttribute('data-page')));});});
      booklet.querySelector('[data-prev]').addEventListener('click',function(){showPage(current-1);});
      booklet.querySelector('[data-next]').addEventListener('click',function(){showPage(current+1);});
      var touchX=null;
      var viewport=booklet.querySelector('.booklet-viewport');
      viewport.addEventListener('touchstart',function(e){touchX=e.changedTouches[0].clientX;},{passive:true});
      viewport.addEventListener('touchend',function(e){
        if(touchX===null)return;
        var dx=e.changedTouches[0].clientX-touchX;
        if(Math.abs(dx)>40) showPage(current+(dx<0?1:-1));
        touchX=null;
      },{passive:true});
    }
  }

  // Google Drive's embedded player keeps its dark control overlay visible while
  // the iframe owns focus on small iPhones. Release that focus after a tap so
  // the player behaves like the user's manual "tap outside" workaround.
  var reel=document.querySelector('.reel-frame iframe');
  if(reel){
    reel.setAttribute('tabindex','-1');
    var reelBlurTimer=null;
    function releaseReelFocusSoon(){
      if(!window.matchMedia('(max-width:600px)').matches)return;
      clearTimeout(reelBlurTimer);
      reelBlurTimer=setTimeout(function(){
        if(document.activeElement===reel){
          reel.blur();
          try{window.focus();}catch(_e){}
        }
      },900);
    }
    reel.addEventListener('focus',releaseReelFocusSoon);
    window.addEventListener('blur',function(){
      setTimeout(function(){
        if(document.activeElement===reel)releaseReelFocusSoon();
      },0);
    });
  }

  var els=document.querySelectorAll('.fade-up');
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});return}
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.15});
  els.forEach(function(el){o.observe(el)});
})();
