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


fetch('https://api.escuelajs.co/api/v1/products?offset=20&limit=20')
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
            <p class="card-title">${data.title}</p>
            <div class="buy">
                <span class="price">  $ ${data.price}</span>
                <button type="button"  class="btnn btn-warning">buy</button>
            </div>
    </div>
    
    `
    storeOne()
}
