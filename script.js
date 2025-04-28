let pepsi = document.getElementById('#pepsi01');

alert('Добро пожаловать в сайт Pepsi.')

function subscribe() {
    alert("Спасибо за подписку! 🥤");
  }
  function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.style.transition = 'all 1s';
  }

var typed = new Typed('#pepsi01', {
  strings: ['Освежись с Pepsi'],
  typeSpeed: 40,
  backSpeed: 30,
  backDelay: 1000,
  // loop: true,
  showCursor: true,
  cursorChar: '__',
  autoInsertCss: true,
  smartBackspace: true,
  shuffle: false,
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  attr: null,
})

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

