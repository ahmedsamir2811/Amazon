
fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(api=> {
        console.log(api)
        api.slice(100,150).forEach(el => {
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
                <span class="price"> <span> $ </span>${data.price}</span>
                <button>buy</button>
            </div>
        </div>
    </div>
        `
}
