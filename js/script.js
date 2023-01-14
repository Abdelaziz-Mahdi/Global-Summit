/* ------------- To Be Off------------- */
const introCo = document.getElementById('intro-container');
const programCo = document.getElementById('program-section');
const speakersCo = document.getElementById('speakers');

/* ------------- To Add Class To ------------- */
const partnersCo = document.getElementById('partners');
const footerCo = document.getElementById('footer');

/* ------------- To be removed ------------- */
//const bodyVis = document.getElementById('body');

/* ------------- About Container ------------- */
const aboutCo = document.getElementById('about');

/* ------------- Buttons ------------- */
const btnAbout = document.getElementById('about-btn');
const btnHome = document.getElementById('home');


/* ------------- Show About ------------- */
btnAbout.addEventListener('click', () => {
  introCo.style.display = 'none';
  programCo.style.display = 'none';
  speakersCo.style.display = 'none';
  aboutCo.style.display = 'block';
  partnersCo.classList.add('d-md-none')
  footerCo.classList.add('darkOnDt')
});

/* ------------- Show Home ------------- */
btnHome.addEventListener('click', () => {
    introCo.style.display = 'block';
    programCo.style.display = 'block';
    speakersCo.style.display = 'block';
    aboutCo.style.display = 'none';
    partnersCo.classList.remove('d-md-none')
    footerCo.classList.remove('darkOnDt')
  });
