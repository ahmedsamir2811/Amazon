let api = 'https://fakestoreapi.com/products'

fetch(api)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        json.map( ()=> {
            console.log(json[1].id
            )
        })
    })


// let api = 'https://fakestoreapi.com/products'
// async function get (){
//     let response =  await fetch(api)
//     let data = await response.json()
//     console.log(data)
// }
