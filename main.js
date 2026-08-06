const titles = {
  home: "Seanella Rose Cuenco — IT Student Portfolio",
  gallery: "Gallery — Seanella Rose Cuenco",
  about: "About — Seanella Rose Cuenco"
};

function showPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');

  document.querySelectorAll('.nav-links button').forEach(b => b.classList.toggle('active', b.dataset.page === id));

  document.title = titles[id] || titles.home;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navToggle').classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');

  revealVisible();
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

function revealVisible(){
  document.querySelectorAll('.page.active .reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('in-view');
  });
}
revealVisible();

function filterProjects(btn, category){
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#galleryGrid .project-card').forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.display = match ? '' : 'none';
  });
}

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  formSuccess.classList.add('show');
  contactForm.reset();
  formSuccess.scrollIntoView({ behavior:'smooth', block:'center' });
});

document.getElementById('year').textContent = new Date().getFullYear();