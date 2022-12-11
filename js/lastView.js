const lastView = document.querySelectorAll('.last-view');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

lastView.forEach((el, i) => {
    let LastViewDimensions = el.getBoundingClientRect();
    let LastViewWidth = LastViewDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        el.scrollLeft += LastViewWidth;
    })

    preBtn[i].addEventListener('click', () => {
        el.scrollLeft -= LastViewWidth;
    })
})

// use api of last viewed component


fetch('https://api.escuelajs.co/api/v1/products?offset=15&limit=35')
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {
            LastViewedData(el)
        });
    }).catch(err=>console.log('Your Api Is Wrong'))



const LastViewedData = (data) => {
    const LastView = document.getElementById('last-view')
    LastView.innerHTML += `
    <div class="viewed-contain">
        <div class="image">
            <img src="${data.images}" alt="">
        </div>
        <div class="text">
            <p class="card-title">${data.title}</p>
            <div class="buy">
                <span class="price"> $ ${data.price}</span>
                <button type="button" class="btn btn-warning">buy</button>
            </div>
        </div>
    </div>
    `
    store()
}

