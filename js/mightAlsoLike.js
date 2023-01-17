
fetch('https://api.escuelajs.co/api/v1/products?offset=30&limit=50')
    .then(res => res.json())
    .then(api => {
        api.forEach(el => {
            alsoLikeData(el)
        });
    }).catch(err => console.log('Your Api Is Wrong'))

const alsoLikeData = (data) => {
    const alsoLike = document.getElementById("alsolike")
    alsoLike.innerHTML += `
        <div class="contain">
            <div class="image">
                <img src="${data.images}.jpg" alt="">
            </div>
            <div class="text">
                <h2 class="card-title">${data.title}</h2>
                <div class="buy">
                    <span class="price"> <span> $ </span>4000</span>
                    <button class="btnnnn btn-warning">buy</button>
                </div>
            </div>
        </div>
    `
    storeThree()
}
