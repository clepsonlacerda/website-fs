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