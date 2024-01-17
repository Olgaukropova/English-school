const container = document.querySelector('.header-info');
console.log(container, 'container')

// const ok = document.querySelector('.cok');
// console.log(ok);


const button = container.querySelector('.header__link-price');
console.log(button, 'button')
// const button = document.getElementById('price');
const sectionCard = document.querySelector('.cards');



button.addEventListener('click', function () {
  console.log('click')
  // window.scrollTo({
  //   top: sectionCard.offsetTop,
  //   behavior: 'smooth'
  // })
});

