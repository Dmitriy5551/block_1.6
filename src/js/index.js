import '../scss/style.scss'

const body = document.getElementById('body')
const servicesBtn = body.querySelector('.services__btn')
const descrFurthe = body.querySelector('.services__descr-further')
const descrEnd = body.querySelector('.services__descr-end')
const serviceArrow = body.querySelector('.services__arrow')
const servicesRead = body.querySelector('.services__read')

const modalCall = document.querySelector('.wrapper__modal-call')

servicesBtn.addEventListener('click', function () {
  descrFurthe.classList.toggle('services__descr-further--active')
  descrEnd.classList.toggle('services__descr-end--active')

  if (servicesRead.textContent === 'Читать далее') {
    servicesRead.textContent = 'Скрыть'
    serviceArrow.style.transform = 'rotate(180deg)'
  } else {
    servicesRead.textContent = 'Читать далее'
    serviceArrow.style.transform = 'rotate(360deg)'
  }
})

const brandsSwiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      enabled: false,
      width: 224,
      spaceBetween: 24
    },
    1120: {
      enabled: false,
      width: 240,
      spaceBetween: 32
    }
  }
})

const brands = body.querySelector('.brands')
const swipeWrapper = brands.querySelector('.swiper-wrapper')
const brandsBtn = brands.querySelector('.button__show-more')
const brandsSee = brandsBtn.querySelector('.text')
const brandsArrow = brandsBtn.querySelector('.brands__arrow')
const slideHidden = brands.querySelectorAll('.swiper-slide--hidden')

brandsBtn.addEventListener('click', function () {
  slideHidden.forEach((element) =>
    element.classList.toggle('swiper-slide--hidden')
  )
  if (brandsSee.textContent === 'Показать все') {
    brandsSee.textContent = 'Скрыть'
    brandsArrow.style.transform = 'rotate(180deg)'
    swipeWrapper.classList.add('swiper-indent')
    brands.classList.add('brands-indent')
  } else {
    brandsSee.textContent = 'Показать все'
    brandsArrow.style.transform = 'rotate(360deg)'
    swipeWrapper.classList.remove('swiper-indent')
    brands.classList.remove('brands-indent')
  }
})

const technic = body.querySelector('.technic')
const techSwipeWrap = technic.querySelector('.technic__swiper-wrapper')
const technicBtn = technic.querySelector('.button__show-more')
const technicSee = technicBtn.querySelector('.text')
const technicArrow = technicBtn.querySelector('.technic__arrow')
const slidesHidden = technic.querySelectorAll('.technic__slide--hidden')

technicBtn.addEventListener('click', function () {
  slidesHidden.forEach((element) =>
    element.classList.toggle('technic__slide--hidden')
  )
  if (technicSee.textContent === 'Показать все') {
    technicSee.textContent = 'Скрыть'
    technicArrow.style.transform = 'rotate(180deg)'
    console.log(technicArrow)
    techSwipeWrap.classList.add('swiper-indent')
    technic.classList.add('brands-indent')
  } else {
    technicSee.textContent = 'Показать все'
    technicArrow.style.transform = 'rotate(360deg)'
    techSwipeWrap.classList.remove('swiper-indent')
    technic.classList.remove('brands-indent')
  }
})

const headerBurger = body.querySelector('.header__burger')
const burgerOverlay = body.querySelector('.burger-overlay')
const headerMenu = burgerOverlay.querySelector('.header-menu')
const headerMenuBtnClose = headerMenu.querySelector('.header-menu__btn-close')

burgerOverlay.addEventListener('click', (e) => {
  if (e.target == burgerOverlay) {
    burgerOverlay.classList.remove('burger-overlay--active')
    headerMenu.classList.remove('header-menu--active')
    body.classList.remove('body-fixed')
  }
})

headerBurger.addEventListener('click', function () {
  burgerOverlay.classList.add('burger-overlay--active')
  headerMenu.classList.add('header-menu--active')
  body.classList.add('body-fixed')
})

headerMenuBtnClose.addEventListener('click', function () {
  burgerOverlay.classList.remove('burger-overlay--active')
  headerMenu.classList.remove('header-menu--active')
  body.classList.remove('body-fixed')
})

const menuHeaderBtn = headerMenu.querySelectorAll('.menu-header__btn')
menuHeaderBtn.forEach((element) =>
  element.addEventListener('click', function () {
    element.classList.remove('menu-header__btn--active')
    element.classList.add('menu-header__btn--active')
  })
)

const buttonTube = body.querySelectorAll('.button-tube')
const wrapperModalCall = body.querySelector('.wrapper__modal-call')
const modalСall = wrapperModalCall.querySelector('.modal-call')
const btnClose = modalСall.querySelector('.modal-call__btn-close')

const modalCallInput = document.querySelector('.modal-call__input')
const modalFeedbackInput = document.querySelector('.modal-feedback__input')

buttonTube.forEach((buttonItem) => {
  buttonItem.addEventListener('click', function () {
    wrapperModalCall.classList.add('wrapper__modal-call--open')
    body.classList.add('body-fixed')
  })
})

btnClose.addEventListener('click', function () {
  wrapperModalCall.classList.remove('wrapper__modal-call--open')
  if (screen.width < 1440) {
    if (headerMenuActive) {
      body.classList.remove('body-fixed')
    }
  } else {
    body.classList.remove('body-fixed')
  }
})

wrapperModalCall.addEventListener('click', (e) => {
  if (e.target == wrapperModalCall) {
    wrapperModalCall.classList.remove('wrapper__modal-call--open')
    if (screen.width < 1440) {
      if (headerMenuActive) {
        body.classList.remove('body-fixed')
      }
    } else {
      body.classList.remove('body-fixed')
    }
  }
})

const buttonMessage = body.querySelectorAll('.button-message')
const wrapperModalFeedback = body.querySelector('.wrapper__modal-feedback')
const modalFeedback = wrapperModalFeedback.querySelector('.modal-feedback')
const feedbackBtnClose = modalFeedback.querySelector(
  '.modal-feedback__btn-close'
)
const headerMenuActive = body.querySelector('.header-menu--active')

buttonMessage.forEach((buttonItem) => {
  buttonItem.addEventListener('click', function () {
    wrapperModalFeedback.classList.add('wrapper__modal-feedback--open')
    body.classList.add('body-fixed')
  })
})

feedbackBtnClose.addEventListener('click', function () {
  wrapperModalFeedback.classList.remove('wrapper__modal-feedback--open')
  if (screen.width < 1440) {
    if (headerMenuActive) {
      body.classList.remove('body-fixed')
    }
  } else {
    body.classList.remove('body-fixed')
  }
})

wrapperModalFeedback.addEventListener('click', (e) => {
  if (e.target == wrapperModalFeedback) {
    wrapperModalFeedback.classList.remove('wrapper__modal-feedback--open')
    if (screen.width < 1440) {
      if (headerMenuActive) {
        body.classList.remove('body-fixed')
      }
    } else {
      body.classList.remove('body-fixed')
    }
  }
})

// modalCall.addEventListener('transitionstart', (e) => {
//   modalCallInput.focus()
// })

// modalFeedback.addEventListener('transitionstart', (e) => {
//   modalFeedbackInput.focus()
// })
