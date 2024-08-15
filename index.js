
let summa;
document.getElementById("räkna").onclick = function(){
    summa = document.getElementById("inkomst").value * document.getElementById("skatt").value;
    document.getElementById("chart").textContent = `Cart ${summa}`;

}

///////////////////////////////////////////////////////////////////////////////

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("räkna2").onclick = function(){
    radius = document.getElementById("Radien").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("Omkrets").textContent = circumference;
}

////////////////////////////////////////////////////////////////////////////////

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countH3 = document.getElementById("countH3");

let getter = 0;

increaseBtn.onclick = function(){
    getter++;
    countH3.textContent = getter;
}
decreaseBtn.onclick = function(){
    getter--;
    countH3.textContent = getter;
}
resetBtn.onclick = function(){
    getter = 0;
    countH3.textContent = getter;
}


///////////////////////////////////////////////////////////////////////////////////////////////

const productList = JSON.parse(localStorage.getItem('productList')) || [];

var inCart = productList.length;
inCart = Number(inCart);
document.getElementById("itemsInChart").textContent = inCart;

const bButton = document.getElementsByClassName("buyButton");


function addToCart(event) {
    const productBox = event.target.closest('.Productbox');
    const productName = productBox.querySelector('.Pinfo p').textContent;
    const productPrice = parseFloat(productBox.querySelector('.buy p').textContent.replace('kr', ''));
    
    const product = new Product(productName, productPrice);
    productList.push(product);

    localStorage.setItem('productList', JSON.stringify(productList));
    
    inCart = productList.length;
    document.getElementById("itemsInChart").textContent = inCart;
    
    console.log(productList); 
}

document.querySelectorAll('.buyButton').forEach(button => {
    button.addEventListener('click', addToCart);
});



/////Classer ///////////////////////////////////////////////////////////////////////////

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

const product1 = new Product("Danio Margaritatus", 60);
const product2 = new Product("Neontetra", 10);
const product3 = new Product("Embertetra", 10);



