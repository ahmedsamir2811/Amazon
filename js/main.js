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
let slide_landing = document.querySelector('.landing');
let slide = document.querySelector('.slides');
let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');

let slides = document.querySelectorAll('.slide');
let index = 1;
let first_node = slides[0].cloneNode(true);
let first_last = slides[slides.length -1].cloneNode(true);
console.log(first_last)



// End landing page





// let url = 'https://fakestoreapi.com/products';

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

/*  const url = "https://randomuser.me/api/?results=5";
fetch(url).then( response => { return response.json()}).then(data =>{

        console.log(data.results);
        
}).catch(error =>{
        // هنا نضع اوامر الذي نرغب بتنفيذها عند حدوث خطا اثناء استرداد بيانات من  API

    console.log(error);  // هنا طلبنا بعر ض الخطا الذي حدث اثناء استرداد البيانات 
})

*/










// const slideContainer = document.querySelector('.landing');
// const slide = document.querySelector('.slides');
// const nextBtn = document.getElementById('next-btn');
// const prevBtn = document.getElementById('prev-btn');
// const interval = 3000;

// let slides = document.querySelectorAll('.slide');
// let index = 1;
// let slideId;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth;

// slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);

// const startSlide = () => {
//     slideId = setInterval(() => {
//         moveToNextSlide();
//     }, interval);
// };

// const getSlides = () => document.querySelectorAll('.slide');

// slide.addEventListener('transitionend', () => {
//     slides = getSlides();
//     if (slides[index].id === firstClone.id) {
//         slide.style.transition = 'none';
//         index = 1;
//         slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     }

//     if (slides[index].id === lastClone.id) {
//         slide.style.transition = 'none';
//         index = slides.length - 2;
//         slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     }
// });

// const moveToNextSlide = () => {
//     slides = getSlides();
//     if (index >= slides.length - 1) return;
//     index++;
//     slide.style.transition = '.7s ease-out';
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// const moveToPreviousSlide = () => {
//     if (index <= 0) return;
//     index--;
//     slide.style.transition = '.7s ease-out';
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// slideContainer.addEventListener('mouseenter', () => {
//     clearInterval(slideId);
// });

// slideContainer.addEventListener('mouseleave', startSlide);
// nextBtn.addEventListener('click', moveToNextSlide);
// prevBtn.addEventListener('click', moveToPreviousSlide);

// startSlide();
