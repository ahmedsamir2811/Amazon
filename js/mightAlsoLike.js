
const alsoLike = document.querySelectorAll('.alsoLike');
const nxt_Btn = document.querySelectorAll('.nxtBtn');
const pre_Btn = document.querySelectorAll('.preBtn');

alsoLike.forEach((el, i) => {
    let LastViewDimensions = el.getBoundingClientRect();
    let LastViewWidth = LastViewDimensions.width;

    nxt_Btn[i].addEventListener('click', () => {
        el.scrollLeft += LastViewWidth;
    })

    pre_Btn[i].addEventListener('click', () => {
        el.scrollLeft -= LastViewWidth;
    })
})


fetch('https://api.escuelajs.co/api/v1/products?offset=60&limit=80')
    .then(res => res.json())
    .then(api => {
        api.forEach(el => {
            alsoLikeData(el)
        });
    }).catch(err => console.log('Your Api Is Wrong'))

const alsoLikeData = (data) => {
    const alsoLike = document.getElementById("alsoLike")
    alsoLike.innerHTML += `
        <div class="also-contain">
            <div class="image">
                <img src="${data.images}.jpg" alt="">
            </div>
            <div class="text">
                <h2 class="card-title">${data.title}</h2>
                <div class="buy">
                    <span class="price"> <span> $ </span>${data.price}</span>
                    <button class="btnnnn btn-warning">buy</button>
                </div>
            </div>
        </div>
    `
    storeThree()
}

