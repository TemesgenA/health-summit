// Mobile navigation menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.nav-menu-mobile');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  mobileMenuBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

// Featured speakers to be loaded using dynamic html
const featuredSpeakers = [
  {
    id: 1,
    name: 'Tedros Adhanom Ghebreyesus',
    subtitle: 'Director-General, World Health Organization (WHO)',
    description:
      'An Ethiopian public health researcher, and official who has been Director-General of the World Health Organization since 2017.',
    bottomImageUrl: 'img/chess-board.jpg',
    topImageUrl: 'img/speaker1.jpg',
  },

  {
    id: 2,
    name: 'Ahmed Al-Mandhari',
    subtitle: 'Regional Director for the Eastern Mediterranean, World Health Organization (WHO)',
    description:
      'A physician and public health specialist from Oman. He is currently serving as Regional Director of the World Health.',
    bottomImageUrl: 'img/chess-board.jpg',
    topImageUrl: 'img/speaker2.png',
  },

  {
    id: 3,
    name: 'Olaf Scholz',
    subtitle: 'Federal Chancellor, Germany',
    description:
      'A German politician who has served as the chancellor of Germany since 8 December 2021.',
    bottomImageUrl: 'img/chess-board.jpg',
    topImageUrl: 'img/speaker3.jpg',
  },

  {
    id: 4,
    name: 'Akinwumi Adesina',
    subtitle: 'President, African Development Bank',
    description:
      'A Nigerian economist who is currently serving as the President of the African Development Bank.',
    bottomImageUrl: 'img/chess-board.jpg',
    topImageUrl: 'img/speaker4.jpg',
  },

  {
    id: 5,
    name: 'Ayoade Alakija',
    subtitle: 'Special Envoy for the Access to COVID-19 Tools Accelerator(ACT-Accelerator), World Health Organization (WHO)',
    description:
      'A medical doctor with a Masters degree from The London School of Hygiene and Tropical Medicine in Public Health and Epidemiology.',
    bottomImageUrl: 'img/chess-board.jpg',
    topImageUrl: 'img/speaker5.jpg',
  },
  {
    id: 6,
    name: 'Ricardo Baptista Leite',
    subtitle: 'Founder and President, UNITE',
    description:
      'A Medical Doctor, University Professor, Politician and Author. He is the Head of Public Health at the Catholic University of Portugal.',
    bottomImageUrl: 'img/chess-board.jpg',
    topImageUrl: 'img/speaker6.jpeg',
  },
];

const featuredSpeakersElement = document.querySelector('.speakers');

window.addEventListener('DOMContentLoaded', () => {
  let featuredSpeakersHtmlVersion = '';
  for (let i = 0; i < featuredSpeakers.length; i += 1) {
    featuredSpeakersHtmlVersion += ` 
    <div class="speaker">
    <div class="left">
      <img src="${featuredSpeakers[i].bottomImageUrl}" alt="" />
      <img src="${featuredSpeakers[i].topImageUrl}" alt="" />
    </div>
    <div class="right">
      <h3>${featuredSpeakers[i].name}</h3>
      <p class="subtitle">${featuredSpeakers[i].subtitle}</p>
      <div class="separator">
      </div>
      <p class"description">${featuredSpeakers[i].description}</p>
    </div>
  </div>
    `;
  }
  featuredSpeakersElement.innerHTML = featuredSpeakersHtmlVersion;
  return featuredSpeakersElement.innerHTML;
});
