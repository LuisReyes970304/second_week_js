/* This is the object creation, and the first part of the UH*/
const productForm = document.querySelector(".productForm");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const productName = productForm.querySelector(".productName");
    const productPrice = productForm.querySelector(".productPrice");
    const productID = productForm.querySelector(".productID");
    let nameData = productName.value;
    let priceData = parseFloat(productPrice.value);
    let idData = parseInt(productID.value);
    if(nameData.trim() === "") {
        console.error("The input cannot empty!");
        return;
    } else { 
        let productObject = {id: idData, product: nameData, price: priceData};
        console.log(productObject);
    }
    productName.value = "";
    productPrice.value = "";
    productID.value = "";
});


/*This is for the second part of the UH*/
const setForm = document.querySelector(".setForm");
const outPut = document.querySelector(".setNumber");
const numbers = [1,1,1,2,3,4,5,6,7,7,7]
const setNumbers = new Set(numbers);
outPut.value = [...setNumbers];

setForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(setNumbers);
    const addNum = document.querySelector(".addNum");
    const deleteN = document.querySelector(".deleteN");
    const hasN = document.querySelector(".hasN");
    
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

/**addNumber
 * @param {number} input 
 * @param {set} set
 * @param {output} outPut 
 */
function addNumber(input, set, outPut){
    set.add(parseInt(input.value));
    outPut.value = [...set];
    console.log(set)
}

/**deleteNumber
 * @param {number} input 
 * @param {set} set 
 * @param {output} outPut 
 */
function deleteNumber(input, set, outPut){
    set.delete(parseInt(input.value));
    outPut.value = [...set];
    console.log(set)
}

/**hasdNumber
 * @param {number} input 
 * @param {set} set
 */
function hasNumber(input, set){
    console.log("Result:", set.has(parseInt(input.value)));
}

/**forValidator
 * 
 * @param {set} set 
 */
function forValidator(set) {
    for(const num of set) {
        console.log(num);
    };
};

/*This is for the third part of the UH*/
const productMap = new Map();
const mapForm = document.querySelector(".mapForm");

mapForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let category = mapForm.querySelector(".category");
    let pName = mapForm.querySelector(".pName");
    let categoryData = category.value;
    let pNameData = pName.value;
    if(isNaN(categoryData.trim()) != "" && isNaN(pNameData.trim() != "")){
        productMap.set(categoryData, pNameData);
        console.log(productMap);
        category.value = "";
        pName.value = "";
    } else {
        console.error("Fill out the complete form please!\nAnd do not use Numbers!");
    }
    
})
