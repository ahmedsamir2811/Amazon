
//last view component
const store = () => {

    
      // Price calculation
        const updateTotalPrice = () => {
        const allProducts = document.querySelectorAll('.item-containe')
        let total = 0
        
        allProducts.forEach(item => {
            const price = Number(item.getElementsByClassName('price')[0].innerText.replace('$',''))
            const quantity = Number(item.getElementsByClassName("input-quantity")[0].value)
            total = total + (price * quantity)
        });

        const totalPrice = document.getElementById('total-price')
        totalPrice.innerText = ` $  ${total} `
        
        }
    
        
      //when change any thing in the black screen 

    const blackScreen = document.getElementById('black-screen')

    blackScreen.addEventListener("change", (eo) => {
        updateTotalPrice()
    })
    
      // remove the product from the black screen
    blackScreen.addEventListener("click", (eo) => {
        if (eo.target.classList.contains("fa-trash")) {
            eo.target.parentElement.remove()
            updateTotalPrice()

            const nameOfDeletedProduct = eo.target.parentElement.getElementsByClassName("product-name")[0].innerText
            const allCardsInGallary = document.querySelectorAll(".viewed-contain")

            allCardsInGallary.forEach(item => {
                const nameOfProductInGalary = item.getElementsByClassName("card-title")[0].innerText
                if (nameOfDeletedProduct==nameOfProductInGalary ) {
                let buyButton = item.getElementsByClassName("btn-secondary")[0]

                buyButton.removeAttribute("disabled")
                buyButton.classList.add("btn-warning")
                buyButton.innerText = "buy"

                }
                
            });



        }
    })



    // button of all cards to transmission all products to black screen    
    const allButt = document.querySelectorAll('.btn')
    allButt.forEach(item => {
        item.addEventListener('click', (eo) => {

    {         //change buy to done

        item.setAttribute("disabled", "")
        item.classList.remove("btn-warning")
        item.classList.add("btn-secondary")
        item.innerHTML = "&#10004; Done"
    }

    {        // translate x  Buying succeeded
        const popUP = document.createElement('div')
        const body = document.getElementById('body')
        body.append(popUP)
        popUP.classList.add('re-pop-up')
        popUP.innerHTML = 'Buying succeeded'
        setTimeout(() => {
            popUP.style.transform = 'translateX(-100vw)'
        }, 1500);
        setTimeout(() => {
            popUP.remove()
        }, 2000);
    }

    { //black screen
    
    const card = item.parentElement.parentElement.parentElement
    const cardImageSrc = card.getElementsByTagName("img")[0].getAttribute("src")
    const itemName = card.getElementsByTagName("h2")[0].innerText
    const itemPrice = card.getElementsByTagName("span")[0].innerText


    const itemContainer = document.getElementById('item-container')
    const addedProduct=`
    <div class="item-containe">

        <div class="imageAndcontain">
            <div class="image">
                <img src="${cardImageSrc}" alt="">
            </div>

            <div class="Items-content">
                <h6 class="product-name">${itemName}</h6>
                <span class="price">${itemPrice}</span>
                <input type="number" value="1" min="1" class="input-quantity" id="input-quantity">
            </div>

        </div>
            <i class="fa-solid fa-trash"></i>
    </div>
    `
        itemContainer.innerHTML += addedProduct
        updateTotalPrice()

    }
        
        })
    });


    {   // made translate X of black screen

        const cartShopping = document.getElementById('cart_shopping')
        const blackScreen = document.getElementById('black-screen')
        const closee = document.getElementById('closee')

        cartShopping.addEventListener('click', (eo) => {
            blackScreen.style.transform = 'translateX(0)'
        })


        closee.addEventListener('click', (eo) => {
            blackScreen.style.transform = 'translateX(150%)'

        })
    }


}
// to seller component
const storeOne = () => {

    
      // Price calculation
        const updateTotalPrice = () => {
        const allProducts = document.querySelectorAll('.item-containe')
        let total = 0
        
        allProducts.forEach(item => {
            const price = Number(item.getElementsByClassName('price')[0].innerText.replace('$',''))
            const quantity = Number(item.getElementsByClassName("input-quantity")[0].value)
            total = total + (price * quantity)
        });

        const totalPrice = document.getElementById('total-price')
        totalPrice.innerText = ` $  ${total} `
        
        }
    
        
      //when change any thing in the black screen 

    const blackScreen = document.getElementById('black-screen')

    blackScreen.addEventListener("change", (eo) => {
        updateTotalPrice()
    })
    
      // remove the product from the black screen
    blackScreen.addEventListener("click", (eo) => {
        if (eo.target.classList.contains("fa-trash")) {
            eo.target.parentElement.remove()
            updateTotalPrice()

            const nameOfDeletedProduct = eo.target.parentElement.getElementsByClassName("product-name")[0].innerText
            const allCardsInGallary = document.querySelectorAll(".top-sell")

            allCardsInGallary.forEach(item => {
                const nameOfProductInGalary = item.getElementsByClassName("card-title")[0].innerText
                if (nameOfDeletedProduct==nameOfProductInGalary ) {
                let buyButton = item.getElementsByClassName("btn-secondary")[0]

                buyButton.removeAttribute("disabled")
                buyButton.classList.add("btn-warning")
                buyButton.innerText = "buy"

                }
                
            });



        }
    })



    // button of all cards to transmission all products to black screen    
    const allButt = document.querySelectorAll('.btnn')
    allButt.forEach(item => {
        item.addEventListener('click', (eo) => {

    {         //change buy to done

        item.setAttribute("disabled", "")
        item.classList.remove("btn-warning")
        item.classList.add("btn-secondary")
        item.innerHTML = "&#10004; Done"
    }

    {        // translate x  Buying succeeded
        const popUP = document.createElement('div')
        const body = document.getElementById('body')
        body.append(popUP)
        popUP.classList.add('re-pop-up')
        popUP.innerHTML = 'Buying succeeded'
        setTimeout(() => {
            popUP.style.transform = 'translateX(-100vw)'
        }, 1500);
        setTimeout(() => {
            popUP.remove()
        }, 2000);
    }

    { //black screen
    
    const card = item.parentElement.parentElement.parentElement
    const cardImageSrc = card.getElementsByTagName("img")[0].getAttribute("src")
    const itemName = card.getElementsByTagName("h2")[0].innerText
    const itemPrice = card.getElementsByTagName("span")[0].innerText


    const itemContainer = document.getElementById('item-container')
    const addedProduct=`
    <div class="item-containe">

        <div class="imageAndcontain">
            <div class="image">
                <img src="${cardImageSrc}" alt="">
            </div>

            <div class="Items-content">
                <h6 class="product-name">${itemName}</h6>
                <span class="price">${itemPrice}</span>
                <input type="number" value="1" min="1" class="input-quantity" id="input-quantity">
            </div>

        </div>
            <i class="fa-solid fa-trash"></i>
    </div>
    `
        itemContainer.innerHTML += addedProduct
        updateTotalPrice()

    }
        
        })
    });


    {   // made translate X of black screen

        const cartShopping = document.getElementById('cart_shopping')
        const blackScreen = document.getElementById('black-screen')
        const closee = document.getElementById('closee')

        cartShopping.addEventListener('click', (eo) => {
            blackScreen.style.transform = 'translateX(0)'
        })


        closee.addEventListener('click', (eo) => {
            blackScreen.style.transform = 'translateX(150%)'

        })
    }


}
//must have  component
const storeTwo = () => {

    
      // Price calculation
        const updateTotalPrice = () => {
        const allProducts = document.querySelectorAll('.item-containe')
        let total = 0
        
        allProducts.forEach(item => {
            const price = Number(item.getElementsByClassName('price')[0].innerText.replace('$',''))
            const quantity = Number(item.getElementsByClassName("input-quantity")[0].value)
            total = total + (price * quantity)
        });

        const totalPrice = document.getElementById('total-price')
        totalPrice.innerText = ` $  ${total} `
        
        }
    
        
      //when change any thing in the black screen 

    const blackScreen = document.getElementById('black-screen')

    blackScreen.addEventListener("change", (eo) => {
        updateTotalPrice()
    })
    
      // remove the product from the black screen
    blackScreen.addEventListener("click", (eo) => {
        if (eo.target.classList.contains("fa-trash")) {
            eo.target.parentElement.remove()
            updateTotalPrice()

            const nameOfDeletedProduct = eo.target.parentElement.getElementsByClassName("product-name")[0].innerText
            const allCardsInGallary = document.querySelectorAll(".must-for-you")

            allCardsInGallary.forEach(item => {
                const nameOfProductInGalary = item.getElementsByClassName("card-title")[0].innerText
                if (nameOfDeletedProduct==nameOfProductInGalary ) {
                let buyButton = item.getElementsByClassName("btn-secondary")[0]

                buyButton.removeAttribute("disabled")
                buyButton.classList.add("btn-warning")
                buyButton.innerText = "buy"

                }
                
            });



        }
    })



    // button of all cards to transmission all products to black screen    
    const allButt = document.querySelectorAll('.btnnn')
    allButt.forEach(item => {
        item.addEventListener('click', (eo) => {

    {         //change buy to done

        item.setAttribute("disabled", "")
        item.classList.remove("btn-warning")
        item.classList.add("btn-secondary")
        item.innerHTML = "&#10004; Done"
    }

    {        // translate x  Buying succeeded
        const popUP = document.createElement('div')
        const body = document.getElementById('body')
        body.append(popUP)
        popUP.classList.add('re-pop-up')
        popUP.innerHTML = 'Buying succeeded'
        setTimeout(() => {
            popUP.style.transform = 'translateX(-100vw)'
        }, 1500);
        setTimeout(() => {
            popUP.remove()
        }, 2000);
    }

    { //black screen
    
    const card = item.parentElement.parentElement.parentElement
    const cardImageSrc = card.getElementsByTagName("img")[0].getAttribute("src")
    const itemName = card.getElementsByTagName("h2")[0].innerText
    const itemPrice = card.getElementsByTagName("span")[0].innerText


    const itemContainer = document.getElementById('item-container')
    const addedProduct=`
    <div class="item-containe">

        <div class="imageAndcontain">
            <div class="image">
                <img src="${cardImageSrc}" alt="">
            </div>

            <div class="Items-content">
                <h6 class="product-name">${itemName}</h6>
                <span class="price">${itemPrice}</span>
                <input type="number" value="1" min="1" class="input-quantity" id="input-quantity">
            </div>

        </div>
            <i class="fa-solid fa-trash"></i>
    </div>
    `
        itemContainer.innerHTML += addedProduct
        updateTotalPrice()

    }
        
        })
    });


    {   // made translate X of black screen

        const cartShopping = document.getElementById('cart_shopping')
        const blackScreen = document.getElementById('black-screen')
        const closee = document.getElementById('closee')

        cartShopping.addEventListener('click', (eo) => {
            blackScreen.style.transform = 'translateX(0)'
        })


        closee.addEventListener('click', (eo) => {
            blackScreen.style.transform = 'translateX(150%)'

        })
    }


}
