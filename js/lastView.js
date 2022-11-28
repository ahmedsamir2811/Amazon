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


fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.slice(0,50).forEach(el => {
            LastViewedData(el)
        });
    })



const LastViewedData = (data) => {
    const LastView = document.getElementById('last-view')
    LastView.innerHTML += `
    <div class="viewed-contain">
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

