const btnMore = document.querySelector('.about__more')
const about = document.querySelector('.about')
const description = document.querySelectorAll('.about__description')[1]


btnMore.addEventListener('click', function() {
  about.classList.toggle('active')
  description.classList.toggle('active')
  btnMore.classList.toggle('active')
})