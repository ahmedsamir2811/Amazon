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

/*  const url = "https://randomuser.me/api/?results=5";
fetch(url).then( response => { return response.json()}).then(data =>{

        console.log(data.results);
        
}).catch(error =>{
        // هنا نضع اوامر الذي نرغب بتنفيذها عند حدوث خطا اثناء استرداد بيانات من  API

    console.log(error);  // هنا طلبنا بعر ض الخطا الذي حدث اثناء استرداد البيانات 
})

*/