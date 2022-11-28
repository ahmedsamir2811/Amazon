// const api = 'https://api.escuelajs.co/api/v1/categories'

// fetch(api)
//     .then(res => res.json())
//     .then(data => {
//         printData(data)
//     })

//     const printData = (data) => {
//         const categorie = document.getElementById('categorie')
//         categorie.innerHTML =
//         `
//     <div class="categorie-content">
//         <div class="image">
//             <img src="${data[0].image}" alt="">
//         </div>
//         <h3 class=" name">
//         ${data[0].name}
//         </h3>
//     </div>

//     <div class="categorie-content">
//         <div class="image">
//             <img src="${data[1].image}" alt="">
//         </div>
//         <h3 class=" name">
//         ${data[1].name}
//         </h3>
//     </div>

//     <div class="categorie-content">
//         <div class="image">
//             <img src="${data[2].image}" alt="">
//         </div>
//         <h3 class=" name">
//         ${data[2].name}
//         </h3>
//     </div>

//     <div class="categorie-content">
//         <div class="image">
//             <img src="${data[3].image}" alt="">
//         </div>
//         <h3 class=" name">
//         ${data[3].name}
//         </h3>
//     </div>
//     <div class="categorie-content">
//         <div class="image">
//             <img src="${data[4].image}" alt="">
//         </div>
//         <h3 class=" name">
//         ${data[4].name}
//         </h3>
//     </div>
//     `
//     }



const url = 'https://api.escuelajs.co/api/v1/categories'
async function get() {
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)
    data.map(api => {
        printData(api)
    });
}
const printData = (data) => {
    const categorie = document.getElementById("categorie")
    categorie.innerHTML+= `
            <div class="categorie-content">
                <div class="image">
                <img src="${data.image}" alt="">
                </div>
                <h3 class=" name">
                ${data.name}
                </h3>
            </div>
        `
}
get()
// Start get categories


















