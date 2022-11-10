/*Start Header*/

// Strat Navbar 

let navBar = document.getElementById('bar')   /* step -1 */
function myFunction() {
    navBar.classList.toggle("change");
}

  /* step -2 */

function myFunction(x) {   /* add argument (this) in html to add before calsslist */
    x.classList.toggle("change");
}

// End Navbar 

/*End Header*/



// let url = 'https://fakestoreapi.com/products';

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))