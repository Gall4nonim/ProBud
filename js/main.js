// ham menu
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

const handleClick = () => {
	hamburger.classList.toggle('hamburger--active')
	nav.classList.toggle('nav--active')
}
hamburger.addEventListener('click', handleClick)

// hidep
const hideP = document.querySelectorAll('.hideP')

function scrollRun() {
	hideP.forEach(paragraph => {
		let interval = -125

		if (window.matchMedia('(min-width: 725px)').matches) {
			interval = -200
		}

		const posP = paragraph.getBoundingClientRect().top - interval
		const windowH = window.innerHeight

		if (posP < windowH) {
			paragraph.style.opacity = '1'
		}
	})
}

window.addEventListener('scroll', scrollRun)
// window.addEventListener('resize', scrollRun);
scrollRun()

//nav fixed

const desktopNav = document.querySelector('.desktop-nav')

function addBackgroundNav() {
	if (scrollY < 150) {
		desktopNav.classList.remove('desktop-nav-background')
	} else {
		desktopNav.classList.add('desktop-nav-background')
	}
}
addEventListener('scroll', addBackgroundNav)

//gallery

const fullImgBox = document.querySelector('.full-img-box')
const fullImg = document.querySelector('.full-img')
const imgThumbnails = document.querySelectorAll('.img-box img')

function displayFullImage(event) {
	const imgSrc = event.target.src
	fullImg.setAttribute('src', imgSrc)
	fullImgBox.style.display = 'flex'
}

function closeFullImage() {
	fullImgBox.style.display = 'none'
}
imgThumbnails.forEach(thumbnail => {
	thumbnail.addEventListener('click', displayFullImage)
})

const closeButton = fullImgBox.querySelector('span')
closeButton.addEventListener('click', closeFullImage)

//offset
