
const productResponse = await fetch("https://fakestoreapi.com/products");
const products = await productResponse.json();
for (const product of products) {
    console.log(`ID : ${product.id}, price : ${product.price}, Title : ${product.title}`);
}



