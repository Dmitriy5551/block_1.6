import '../scss/style.scss'

const body = document.getElementById('body')
const servicesBtn = body.querySelector('.services__btn')
const descrFurthe = body.querySelector('.services__descr-further')
const descrEnd = body.querySelector('.services__descr-end')
const serviceArrow = body.querySelector('.services__arrow')
const servicesRead = body.querySelector('.services__read')
const modalCall = body.querySelector('.wrapper__modal-call')

const readMore = () => {
  descrFurthe.classList.toggle('services__descr-further--active')
  descrEnd.classList.toggle('services__descr-end--active')

  if (servicesRead.textContent === 'Читать далее') {
    servicesRead.textContent = 'Скрыть'
    serviceArrow.style.transform = 'rotate(180deg)'
  } else {
    servicesRead.textContent = 'Читать далее'
    serviceArrow.style.transform = 'rotate(360deg)'
  }
}

servicesBtn.addEventListener('click', readMore)

let swiper

const toggleSwiper = () => {
  if (screen.width < 768 && !swiper) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  } else {
    swiper.forEach((swiperInstance) => swiperInstance.disable())
    swiper.forEach((swiperInstance) => swiperInstance.destroy(false, true))
    swiper = null
  }
}

window.addEventListener('resize', toggleSwiper)

const brands = body.querySelector('.brands')
const swipeWrapper = brands.querySelector('.swiper-wrapper')
const brandsBtn = brands.querySelector('.button__show-more')
const brandsSee = brandsBtn.querySelector('.text')
const brandsArrow = brandsBtn.querySelector('.brands__arrow')
const brandsHiddenSlide = 'swiper-slide--hidden'
const brandsSlidesHidden = brands.querySelectorAll('.swiper-slide--hidden')

const technic = body.querySelector('.technic')
const techSwipeWrap = technic.querySelector('.technic__swiper-wrapper')
const technicBtn = technic.querySelector('.button__show-more')
const technicSee = technicBtn.querySelector('.text')
const technicArrow = technicBtn.querySelector('.technic__arrow')
const technicHiddenSlide = 'technic__slide--hidden'
const technicSlidesHidden = technic.querySelectorAll('.technic__slide--hidden')

const showAll = (
  slideHidden,
  slides,
  see,
  arrow,
  swiperIndent,
  brandsIndent
) => {
  slides.forEach((element) => element.classList.toggle(slideHidden))

  if (see.textContent === 'Показать все') {
    see.textContent = 'Скрыть'
    arrow.style.transform = 'rotate(180deg)'
    swiperIndent.classList.add('swiper-indent')
    brandsIndent.classList.add('brands-indent')
  } else {
    see.textContent = 'Показать все'
    arrow.style.transform = 'rotate(360deg)'
    swiperIndent.classList.remove('swiper-indent')
    brandsIndent.classList.remove('brands-indent')
  }
}

brandsBtn.addEventListener('click', () =>
  showAll(
    brandsHiddenSlide,
    brandsSlidesHidden,
    brandsSee,
    brandsArrow,
    swipeWrapper,
    brands
  )
)
technicBtn.addEventListener('click', () =>
  showAll(
    technicHiddenSlide,
    technicSlidesHidden,
    technicSee,
    technicArrow,
    techSwipeWrap,
    technic
  )
)

const headerBurger = body.querySelector('.header__burger')
const burgerOverlay = body.querySelector('.burger-overlay')
const headerMenu = burgerOverlay.querySelector('.header-menu')
const headerMenuBtnClose = headerMenu.querySelector('.header-menu__btn-close')

// Открываем и закрываем меню

burgerOverlay.addEventListener('click', (e) => {
  if (e.target == burgerOverlay) {
    burgerOverlay.classList.remove('burger-overlay--active')
    headerMenu.classList.remove('header-menu--active')
    body.classList.remove('body-fixed')
  }
})

const headerMenuBtn = () => {
  burgerOverlay.classList.toggle('burger-overlay--active')
  headerMenu.classList.toggle('header-menu--active')
  body.classList.toggle('body-fixed')
}

headerBurger.addEventListener('click', headerMenuBtn)
headerMenuBtnClose.addEventListener('click', headerMenuBtn)

const buttonTube = body.querySelectorAll('.button-tube')
const wrapperModalCall = body.querySelector('.wrapper__modal-call')
const modalСall = wrapperModalCall.querySelector('.modal-call')
const btnClose = modalСall.querySelector('.modal-call__btn-close')

const modalCallInput = body.querySelector('.modal-call__input')
const modalFeedbackInput = body.querySelector('.modal-feedback__input')

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

modalCall.addEventListener('transitionstart', (e) => {
  modalCallInput.focus()
})

modalFeedback.addEventListener('transitionstart', (e) => {
  modalFeedbackInput.focus()
})
