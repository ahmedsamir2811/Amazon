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
        console.log(data)
        data.forEach(el => {
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
                <button type="button" class="btn btn-warning">buy</button>

    </div>
    `

    const  allButt = document.querySelectorAll('.btn')
    allButt.forEach(item => {
        item.addEventListener('click',(eo)=>{

        {         //change buy to done

            item.setAttribute("disabled","")
            item.classList.remove("btn-warning")
            item.classList.add("btn-secondary")
            item.innerHTML= "&#10004; Done"
        }

        {        // translate x  Buying succeeded
            const popUP = document.createElement('div')
            const body = document.getElementById('body')
            body.append(popUP)
            popUP.classList.add('re-pop-up')
            popUP.innerHTML = 'Buying succeeded'
            setTimeout(()=>{
                popUP.style.transform='translateX(-100vw)'
            },2000);
            setTimeout(() => {
                popUp.remove()
            }, 1000);
        }


        })
    });


}
