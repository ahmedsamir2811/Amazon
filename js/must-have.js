
fetch('https://api.escuelajs.co/api/v1/products?offset=40&limit=40')
    .then(res => res.json())
    .then(api=> {
        api.forEach(el => {
            alldata(el)
        });
    }).catch(err=>console.log('Your Api Is Wrong'))

const alldata = (data) => {
    const musthave = document.getElementById("must-for-you")
    musthave.innerHTML+= `
    <div class="must-for-you">
        <div class="image">
            <img src="${data.images}" alt="">
        </div>
        <div class="text">
            <h2 class="card-title">${data.title}</h2>
            <div class="buy">
                <span class="price"> $ ${data.price}</span>
                <button type="button"  class="btnnn btn-warning">buy</button>
            </div>
        </div>
    </div>
        `
        storeTwo()
}
