
    // Mobile toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn?.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));

    // Smooth scroll
    document.getElementById('scrollToContact')?.addEventListener('click', ()=> location.hash = '#contact');

    // Apply buttons open modal
    const modal = document.getElementById('modal');
    document.getElementById('applyNowBtn')?.addEventListener('click', ()=> modal.classList.remove('hidden'));
    document.getElementById('applyNowBtnMobile')?.addEventListener('click', ()=> modal.classList.remove('hidden'));
    document.getElementById('openForm')?.addEventListener('click', ()=> modal.classList.remove('hidden'));
    document.getElementById('closeModal')?.addEventListener('click', ()=> modal.classList.add('hidden'));
    document.getElementById('cancelModal')?.addEventListener('click', ()=> modal.classList.add('hidden'));

    // Copy buttons
    document.querySelectorAll('button[data-copy]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const text = btn.getAttribute('data-copy');
        try { await navigator.clipboard.writeText(text); btn.textContent = 'Copied'; setTimeout(()=> btn.textContent = 'Copy', 1500); }
        catch(e){ alert('Copy not supported'); }
      });
    });

    // Quick Apply form (local mock — replace with API endpoint)
    document.getElementById('quickApplyForm')?.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fm = e.target;
      const data = Object.fromEntries(new FormData(fm).entries());
      // mock action: show message
      document.getElementById('formMsg').textContent = 'Thanks, we received your application. Our support team will contact you via email/WhatsApp soon.';
      fm.reset();
    });

    // Modal form submit
    document.getElementById('modalForm')?.addEventListener('submit', (e)=>{
      e.preventDefault();
      const fm = e.target;
      document.getElementById('modalMsg').textContent = 'Thank you! We will reach out shortly.';
      setTimeout(()=>{ modal.classList.add('hidden'); fm.reset(); document.getElementById('modalMsg').textContent = ''; }, 1600);
    });

    // Small UX: close modal on backdrop click
    modal?.addEventListener('click', (ev)=>{ if(ev.target === modal) modal.classList.add('hidden'); });

    const navbar = document.querySelector('#main-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Change color after scrolling 50px down
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

