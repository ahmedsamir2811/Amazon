

// change the image in landing page  

let mainImage = document.getElementById('main-image');

let smallImage = document.querySelectorAll('.small-image');

smallImage.forEach(el => {
    el.addEventListener('click', ()=>{
        mainImage.src=el.src
    })
    
});

let mainImag = document.getElementById('main-imag');

let smallImag = document.querySelectorAll('.small-imag');

smallImag.forEach(el => {
    el.addEventListener('click', ()=>{
        mainImag.src=el.src
    })
    
});
let mainIma = document.getElementById('main-ima');

let smallIma = document.querySelectorAll('.small-ima');

smallIma.forEach(el => {
    el.addEventListener('click', ()=>{
        mainIma.src=el.src
    })
    
});


/*Start Header*/

// Strat Navbar 

let navBar = document.getElementById('bar')

// function myFunction() {                    /* step -1 */
//     navBar.classList.toggle("change");
// }

/* step -2 */

// function myFunction(x) {   /* add argument (this) in html to add before calsslist */
//     x.classList.toggle("change");
// }

navBar.addEventListener('click', () => {    /*  step - 3*/
    navBar.classList.toggle("change");
})

/* nav-menu */
let linkes = document.getElementById("linkes")
navBar.addEventListener('click', () => {
    linkes.classList.toggle("navmenu");
})


let linkes_tag = document.querySelectorAll('.linkes li a')

linkes_tag.forEach(el => {
    el.addEventListener('click', () => {
        linkes_tag.forEach(li => {
            li.classList.remove('active')
            this.classList.add('active')
        })
    })
})
/* nav-menu */

// End Navbar 

/*End Header*/

// Start landing page

const slideLanding = document.querySelector('.landing');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');


let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const first_Clone = slides[0].cloneNode(true);
const last_Clone = slides[slides.length - 1].cloneNode(true);

first_Clone.id = 'first-clone';
last_Clone.id = 'last-clone';

slide.append(first_Clone);
slide.prepend(last_Clone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, 5000);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if (slides[index].id === first_Clone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slides[index].id === last_Clone.id) {
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = '.7s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideLanding.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

slideLanding.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

// End landing page














