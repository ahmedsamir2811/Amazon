const topSeller = document.querySelectorAll('.topseller');
const nxtButton = document.querySelectorAll('.nxt-butt');

topSeller.forEach((el, i) => {
    let LastViewDimensions = el.getBoundingClientRect();
    let LastViewWidth = LastViewDimensions.width;

    nxtButton[i].addEventListener('click', () => {
        el.scrollLeft += LastViewWidth;
    })

})


// use api of last viewed component


fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.slice(150, 200).forEach(el => {
            AmazonTopSeller(el)
        });
    })



const AmazonTopSeller = (data) => {
    const topsellers = document.getElementById('top-seller')
    topsellers.innerHTML += `
    <div class="viewed-contain">
        <h5>best seller</h5>
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

fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

