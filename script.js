const productForm = document.querySelector(".productForm");
const productName = productForm.querySelector(".productName");
const productPrice = productForm.querySelector(".productPrice");
const productID = productForm.querySelector(".productID");

/*This is for the second part of the UH*/
const numbers = [1,1,1,2,3,4,5,6,7,7,7]
const setNumbers = new Set(numbers)
const outPut = document.querySelector(".setNumber");
const setForm = document.querySelector(".setForm");
const addNum = document.querySelector(".addNum");
const deleteN = document.querySelector(".deleteN");
const hasN = document.querySelector(".hasN");

outPut.value = `${[...setNumbers]}`
console.log(setNumbers)
setForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.submitter === hasN) {
        hasNumber(addNum, setNumbers);
    } else if (e.submitter === deleteN) {
        deleteNumber(addNum, setNumbers, outPut);
    } else {
        addNumber(addNum, setNumbers, outPut);
    }
    forValidator(setNumbers);
    addNum.value = "";
});


productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameData = productName.value;
    let priceData = parseFloat(productPrice.value);
    let idData = parseInt(productID.value);
    if(nameData.trim() === "") {
        console.error("The input cannot empty!");
    } else { 
        let productObject = {id: idData, product: nameData, price: priceData};
        console.log(productObject); 
    }
    productName.value = "";
    productPrice.value = "";
    productID.value = "";
});


/**
 * 
 * @param
 */
function addNumber(input, set, outPut){
    set.add(parseInt(input.value));
    outPut.value = [...set];
    console.log(set)
}

function deleteNumber(input, set, outPut){
    set.delete(parseInt(input.value));
    outPut.value = [...set];
    console.log(set)
}

function hasNumber(input, set){
    console.log("Result:", set.has(parseInt(input.value)));
}

function forValidator(set) {
    for(const num of set) {
        console.log(num);
    };
};