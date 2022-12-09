
fetch('https://api.escuelajs.co/api/v1/products?offset=40&limit=40')
    .then(res => res.json())
    .then(api=> {
        api.forEach(el => {
            alldata(el)
        });
    })

const alldata = (data) => {
    const musthave = document.getElementById("must-for-you")
    musthave.innerHTML+= `
    <div class="viewed-contain must-for-you ">
        <div class="image">
            <img src="${data.images}" alt="">
        </div>
        <div class="text">
            <p>${data.title}</p>
            <div class="buy">
                <span class="price"> $ ${data.price}</span>
                <button type="button" class="btn btn-warning">buy</button>
            </div>
        </div>
    </div>
        `
}
