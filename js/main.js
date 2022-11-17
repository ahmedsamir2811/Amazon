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
let linkes =  document.getElementById("linkes")
navBar.addEventListener('click', () => {
    linkes.classList.toggle("navmenu");
})


let linkes_tag = document.querySelectorAll('.linkes li a')

linkes_tag.forEach(el => {
    el.addEventListener('click', ()=> {
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