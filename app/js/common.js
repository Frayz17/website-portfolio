// Hamburger nav-menu animation
// variables
let menuIconToggle = document.querySelector('.menuIconToggle');
let mainNavigationList = document.querySelector('.mainNavigation-list');

// event listener
menuIconToggle.addEventListener('click', function() {
	menuIconToggleAnimation(menuIconToggle);
	displayMenu(mainNavigationList);
});

// functions
function menuIconToggleAnimation(element) {
	element.classList.toggle("open");
}

function displayMenu(element) {
	element.classList.toggle("mainNavigation-list_hidden");
}
// -------------------------------------------------------------



// carousel
// variables
let carouselSlides = document.querySelectorAll('.carousel-slide');
let carouselProjectItem = document.querySelectorAll('.carousel-projectItem');
let carouselPrevSLide = document.querySelectorAll('.carousel-prevSlide');
let carouselNextSLide = document.querySelectorAll('.carousel-nextSlide');
let slideIndex = 0;


// add event listeners for dot slides
for (let i = 0; i < carouselProjectItem.length; i++) {
	carouselProjectItem[i].addEventListener('click', function() {
		slideShow(i);
	});
}

carouselPrevSLide.forEach(function(prevSlide) {
	prevSlide.addEventListener('click', function() {
		if (slideIndex <= 0) {
			slideIndex = carouselSlides.length-1;
			slideShow(slideIndex);
		} else {
			slideIndex--;
			slideShow(slideIndex);
		}
	});
});

carouselNextSLide.forEach(function(nextSlide){
	nextSlide.addEventListener('click', function() {
		if (slideIndex >= carouselProjectItem.length-1) {
			slideIndex = 0;
			slideShow(slideIndex);
		} else {
			slideIndex++;
			slideShow(slideIndex);
		}
	});
});


// functions
function slideShow(slideIndex) {
	carouselSlides.forEach(function(slide, index) {
		slide.classList.add('carousel-slide_fade');
	});

	carouselSlides[slideIndex].classList.remove('carousel-slide_fade');
	activatingProject(slideIndex);
}

function activatingProject(projectIndex) {
	carouselProjectItem.forEach(function(projectItem, index) {
		carouselProjectItem[index].classList.remove('carousel-projectItem_active');
	});

	carouselProjectItem[projectIndex].classList.add('carousel-projectItem_active');
}
