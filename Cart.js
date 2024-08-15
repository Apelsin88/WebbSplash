const productList = JSON.parse(localStorage.getItem('productList')) || [];

var inCart = productList.length;
inCart = Number(inCart);
document.getElementById("itemsInChart").textContent = inCart;

function displayCart() {
    const cartContents = document.getElementById('cartContents');
    const totalPriceElement = document.getElementById('totalPrice');
    const productList = JSON.parse(localStorage.getItem('productList')) || [];
    
    cartContents.innerHTML = '';
    let totalPrice = 0;
    
    productList.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <p>${product.name} - ${product.price} kr <button class="removeButton" data-index="${index}">Remove</button></p>
        `;
        cartContents.appendChild(productDiv);
        totalPrice += product.price;
    });
    
    totalPriceElement.textContent = totalPrice;
}


function removeProduct(event) {
    if (event.target.classList.contains('removeButton')) {
        const index = event.target.getAttribute('data-index');
        const productList = JSON.parse(localStorage.getItem('productList')) || [];
        
        productList.splice(index, 1);
        localStorage.setItem('productList', JSON.stringify(productList));
        displayCart();
    }
}

displayCart();

document.getElementById('cartContents').addEventListener('click', removeProduct);