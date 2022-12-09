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
                <span class="price">  $ ${data.price}</span>
                <button type="button" class="btn btn-warning">buy</button>
            </div>
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
            },1500);
            setTimeout(() => {
                popUp.remove()
            }, 1000);
        }
        
        const card = item.parentElement.parentElement.parentElement
        const cardImageSrc =card.getElementsByTagName("img")[0].src
        const itemName = card.getElementsByTagName("p")[0].innerText
        const itemPrice = card.getElementsByTagName("span")[0].innerText
        console.log(itemPrice)


        })
    });


{   // made translate X of black screen
    
    const cartShopping = document.getElementById('cart_shopping')
    const blackScreen = document.getElementById('black-screen')
    const closee = document.getElementById('closee')

    cartShopping.addEventListener('click', (eo)=>{
    blackScreen.style.transform = 'translateX(0)'
    })


    closee.addEventListener('click', (eo)=>{
    blackScreen.style.transform = 'translateX(150%)'

    })
}
    


}
