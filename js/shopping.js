
function updateProductInput(product, price, isIncreasing){
    const caseInput=document.getElementById(product +
        '-number');
        //'phone' + '-number' = "phone-number".

    let productNumber = caseInput.value;


    if(isIncreasing == true) {
        productNumber = parseInt(productNumber) +1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) -1;
    }
    caseInput.value = productNumber;

   
    //total update:
    const updateTotal=document.getElementById(product+'-total');
    updateTotal.innerText = productNumber * price;
    
    calculateTotal();

}


function updateProduct (product) {
    const productInput =document.getElementById(product+ '-number');
    const productQuantity= parseInt(productInput.value);

    return productQuantity; // রিটার্ন সবসময় ফাংশন name এ হয়.যেমন এখানে রিটার্ন =>[updateProduct()] এ হয়েছে.

}


function calculateTotal(){
    const phoneAmmount = updateProduct('phone') * 1219;
    const caseAmmount = updateProduct('case') * 59;
    const subTotal = phoneAmmount+ caseAmmount;
    const tax = subTotal / 10;
    const total= subTotal + tax;

    document.getElementById('sub-total').innerText =subTotal;
    document.getElementById('tax-ammount').innerText =tax;
    document.getElementById('total-price').innerText =total;



}






//function for phones:

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductInput('phone', 1219,true)
})

document.getElementById('phone-minus').addEventListener('click',function(){
     updateProductInput('phone', 1219,false);
})



// for phone-case:

document.getElementById('case-plus').addEventListener('click',function(){ 
    updateProductInput('case', 59,true)
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductInput('case', 59,false)
})


document.getElementById('check-out').addEventListener('click',function () {
    window.location.href= "../thanks.html"
    
})