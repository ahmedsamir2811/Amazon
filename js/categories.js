

const url = 'https://api.escuelajs.co/api/v1/categories'
async function get() {
    const res = await fetch(url)
    const data = await res.json();
    data.slice(0,5).map(api => {
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
















