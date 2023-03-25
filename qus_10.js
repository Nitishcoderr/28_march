function filterProductByCategory(products){
    return function(category){
        return products.filter(product => product.category === category)
    }
}

const products = [
    {name:"shirt",category:"clothing"},
    {name:"Pants",category:"clothing"},
    {name:"Hats",category:"Accessories"},
    {name:"Sunglasses",category:"Accessories"},
]

const filterBycategory = filterProductByCategory(products);

const clothProduct = filterBycategory("clothing")

console.log(clothProduct);

// const accessoriesProduct = filterBycategory("Accessories")

// console.log(accessoriesProduct);