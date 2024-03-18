const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const btnRight = document.querySelector('.ri-arrow-right-s-line');
const btnLeft = document.querySelector('.ri-arrow-left-s-line');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
  console.log('addEventListener')
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);

    btnRight.classList.toggle('hidden');
    btnLeft.classList.toggle('hidden');

    // closeBtnIcn.classList.toggle(arrowLeftClass);
    // closeBtnIcn.classList.toggle(arrowRightClass);
  }
});

// swiper - site: https://swiperjs.com/get-started
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// faq
const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach((item) => {
  const faqBtn = item.querySelector('.faq__btn');

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`

  });
});

console.log('main')

// scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 1000, // 3000
  delay: 50, // 600
  // reset: true // resets animations
});

// hero
sr.reveal('.hero__text', { origin: 'top' });
sr.reveal('.hero__img',);

// stats
sr.reveal('.stats__item', {
  delay: 100, // 600
  distance: '100px',
  interval: 100,
  origin: 'top',
});

// services
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
  delay: 100, // 600
  distance: '50px', // 100
  interval: 100,
  origin: 'bottom',
});

// appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

// testimonial
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');

// team
sr.reveal('.team__title');
sr.reveal('.team__slider');

// team
sr.reveal('.about');

// faq
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
  delay: 300, // 600
  distance: '100px',
  interval: 50, // 100
  origin: 'bottom'
});

// departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

// blog
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
  delay: 300, // 600
  distance: '100px',
  interval: 50, // 100
  origin: 'bottom'
});

// brands
sr.reveal('.brands__logo', {
  delay: 300, // 600
  distance: '100px',
  interval: 50, // 100
  origin: 'bottom'
});

// newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// footer
sr.reveal('.footer__item', {
  delay: 300, // 600
  distance: '100px',
  interval: 50, // 100
  origin: 'bottom'
});
