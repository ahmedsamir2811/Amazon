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


fetch('https://api.escuelajs.co/api/v1/products?offset=40&limit=60')
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {
            AmazonTopSeller(el)
        });
    }).catch(err=>console.log('Your Api Is Wrong'))



const AmazonTopSeller = (data) => {
    const topsellers = document.getElementById('top-seller')

    topsellers.innerHTML += `
    <div class="top-sell">
        <h5>best seller</h5>
        <div class="image">
            <img src="${data.images}" alt="">
        </div>
        <div class="text">
            <h2 class="card-title">${data.title}</h2>
            <div class="buy">
                <span class="price">  $ ${data.price}</span>
                <button type="button"  class="btnn btn-warning">buy</button>
            </div>
    </div>
    
    `
    storeOne()
}
