const productForm = document.querySelector(".productForm");
const productName = productForm.querySelector(".productName");
const productPrice = productForm.querySelector(".productPrice");
const productID = productForm.querySelector(".productID");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameData = productName.value;
    let priceData = parseFloat(productPrice.value);
    let idData = parseInt(productID.value);
    productName.value = "";
    productPrice.value = "";
    productID.value = "";
    let productObject = {id: idData, product: nameData, price: priceData};
    console.log(productObject);
    
});


const arra = [1,1,1,2,3,4,5,6,7,7,7]
const set_test = new Set(arra)
console.log(set_test)