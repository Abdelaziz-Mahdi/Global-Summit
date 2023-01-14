/* ------------- To Be Off------------- */
const introCo = document.getElementById('intro-container');
const programCo = document.getElementById('program-section');
const speakersCo = document.getElementById('speakers');

/* ------------- To Add Class To ------------- */
const partnersCo = document.getElementById('partners');
const footerCo = document.getElementById('footer');

/* ------------- About Container ------------- */
const aboutCo = document.getElementById('about');

/* ------------- Buttons ------------- */
const btnAbout = document.getElementById('about-btn');
const btnHome = document.getElementById('home');
const btnHomeMnue = document.querySelector('.homeM');

/* ------------- Show About ------------- */
btnAbout.addEventListener('click', () => {
  introCo.style.display = 'none';
  programCo.style.display = 'none';
  speakersCo.style.display = 'none';
  aboutCo.style.display = 'block';
  partnersCo.classList.add('d-md-none');
  footerCo.classList.add('darkOnDt');
});

/* ------------- Show Home ------------- */
btnHome.addEventListener('click', () => {
  introCo.style.display = 'block';
  programCo.style.display = 'block';
  speakersCo.style.display = 'block';
  aboutCo.style.display = 'none';
  partnersCo.classList.remove('d-md-none');
  footerCo.classList.remove('darkOnDt');
});

btnHomeMnue.addEventListener('click', () => {
  introCo.style.display = 'block';
  programCo.style.display = 'block';
  speakersCo.style.display = 'block';
  aboutCo.style.display = 'none';
  partnersCo.classList.remove('d-md-none');
  footerCo.classList.remove('darkOnDt');
});

/* Speakers Details Array */
const speakersArray = [
  {
    id: 0,
    Name: 'Amanda Lewis',
    title: 'Developer Advocate at Google',
    description:
      '“A developer should attend DevFest this year to connect with others and for opportunities to expand their view of software delivery.”',
    urlMainImg: './visuals/speaker-amanda-lewis.png',
  },
  {
    id: 1,
    Name: 'Angie Sasmita',
    title: 'Android DevRel Engineer Google Singapore',
    description:
      '“It will feel like a family reunion meeting again with the developer community after years of staring into the screen.”',
    urlMainImg: './visuals/speaker-angie-sasmita.png',
  },
  {
    id: 2,
    Name: 'Carlos J. Rojas Reyes',
    title: 'Principal Customer Engineer, Google Latin America',
    description:
      '“DevFest is an amazing opportunity for you to connect with other passionate developers and learn from them!”',
    urlMainImg: './visuals/speaker-carlos-reyes.png',
  },
  {
    id: 3,
    Name: 'Thomas Ezan',
    title: 'Developer Advocate at Google',
    description:
      '“DevFest is the best way to connect with the developer community and learn the latest about APIs and Frameworks!”',
    urlMainImg: './visuals/speaker-ezan-thomas.png',
  },
  {
    id: 4,
    Name: 'Achouak Bachiri',
    title: 'Master student in computer science',
    description:
      '“Experience in organizations and volunteer work, president of the club GDSC Msila in algeria , and conducted several workshops for the benefit of students.”',
    urlMainImg: './visuals/speaker-achouak-bachiri.png',
  },
  {
    id: 5,
    Name: 'Adeline Villette',
    title: 'Cloud Security Officer',
    description:
      '“A developer With 17 years of experience on infrastructure topics and evolving for 5 years now in a 100% Public Cloud context.”',
    urlMainImg: './visuals/speaker-adeline-villette.png',
  },
];

/* Speakers section markup */

const speakersHtml = () => {
  const container = document.getElementById('speakers-card');
  speakersArray.forEach((card) => {
    const speakersCard = document.createElement('li');
    speakersCard.classList.add('col-md-6', 'mb-3', 'mt-3');
    speakersCard.innerHTML += `
      <div class='row row-cols-2'>
        <img
          class='col-4 mb-3 mt-3'
          src=${card.urlMainImg}
          alt='speaker'
        />
        <div class='col-8 text-start text-holder'>
          <h3 class='mt-3'>${card.Name}</h3>
          <p
            class='fontS-10-15 mb-3 mt-3 position-relative secondary-title orange-font'
          >
          ${card.title}
          </p>
          <p class='fontS-9-14'>
          ${card.description}
          </p>
        </div>
      </div>
      `;
    container.appendChild(speakersCard);
  });
};

window.onload = () => {
  speakersHtml();
};
