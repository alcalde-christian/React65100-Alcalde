// 01.19.03 del video de la clase

const phones = [
    {
        id: 1,
        name: "iPhone 14 Pro Max",
        price: 1500000
    },{
        id: 2,
        name: "Samsung s24 Ultra",
        price: 2200000
    },{
        id: 3,
        name: "Samsung s22",
        price: 850000
    },{
        id: 4,
        name: "Samsung a53",
        price: 750000
    },{
        id: 5,
        name: "Samsung a33",
        price: 400000
    },{
        id: 6,
        name: "Motorola One Vision",
        price: 450000
    }
]

export const getProducts = () => {
   return new Promise ((response, reject) => {
        setTimeout(() => {
            response(phones)
        }, 1000)
   })
}

/*

Info del archivo .json del proyecto JS

"phones": [
    {
        "name":"iPhone 14 Pro Max",
        "screen":"6.7 Super Retina",
        "ram":"6Gb",
        "storage":"256Gb",
        "camera":"48MP + 12MP + 12MP",
        "price":1500000,
        "img":"./img/14promax.png",
        "stock":"not available yet"
    },
    {
        "name":"Samsung s24 Ultra",
        "screen":"6.7 Dynamic AMOLED",
        "ram":"12Gb",
        "storage":"256Gb",
        "camera":"200MP + 12MP + 10MP + 10MP",
        "price":2200000,
        "img":"./img/s24ultra.png",
        "stock":"not available yet"
    },
    {
        "name":"Samsung s22",
        "screen":"6.1 Dynamic AMOLED",
        "ram":"8Gb",
        "storage":"128Gb",
        "camera":"50MP + 12MP + 10MP",
        "price":850000,
        "img":"./img/S22.png",
        "stock":"not available yet"
    },
    {
        "name":"Samsung a53",
        "screen":"6.5 Super AMOLED",
        "ram":"8Gb",
        "storage":"128Gb",
        "camera":"64MP + 12MP + 5MP + 5MP",
        "price":750000,
        "img":"./img/a53.png",
        "stock":"not available yet"
    },
    {
        "name":"Samsung a33",
        "screen":"6.4 Super AMOLED",
        "ram":"6Gb",
        "storage":"128Gb",
        "camera":"48MP + 8MP + 5MP + 2MP",
        "price":400000,
        "img":"./img/a33.png",
        "stock":"not available yet"
    },
    {
        "name":"Motorola One Vision",
        "screen":"6.3 LCD",
        "ram":"4Gb",
        "storage":"128Gb",
        "camera":"48MP + 5MP",
        "price":450000,
        "img":"./img/one.png",
        "stock":"not available yet"
    }
],
*/