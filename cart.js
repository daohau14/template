const productEl = document.querySelector(".product-colums");
const cartItemEl = document.querySelector(".cart-item-container");
const subtotalEl = document.querySelector(".price-total");
const totalItemCount = document.querySelector(".header__cart-count");


// render
function renderProducts() {
    products.forEach((product) => {
        productEl.innerHTML += `
        <div class="product-item">
            <div class="product-img">
                <div class="item">
                    <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="ads-img"></a>
                    <button class="product-img__btn-add" onclick = "addToCart(${product.id})">add to cart</button>
                    <a href="#"><h3 class="heading">${product.name}</h3></a>
                    <p><del>$99.00</del> $<span class="price">${product.price.toFixed(2)}</span> </p> 
                </div>
                <div class="star">
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star"></span>
                </div>
            </div>
        </div>
        `;
    });
};
renderProducts();
// end render product

//======================================================================================================================//

// cart array
let cart =  []
//  add to cart
function addToCart(id) {
    // check if product already exist in cart
    alert("Thank you for choice it!")
    if (cart.some((item) => item.id === id)){
        changeNumberOfUnit("btn-plus" ,id);
    } else {
        const item =  products.find((product) => product.id === id);
        cart.push({
        ...item,
        numberOfUnits: 1,
        });
    }
    updateCart();
};

// update cart
function updateCart() {
    renderCartItem();
    renderSubtotal();
}

// end update cart

//----------------------------------------------------------------------------------------------//

// caculate and render subtotal

function renderSubtotal() {
    let totalPrice = 0;
    let totalItem = 0;
    
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        console.log(totalPrice)
        totalItem += item.numberOfUnits;
    });

    subtotalEl.innerHTML = `<p>Tổng tiền: <span> $ ${totalPrice.toFixed(2)}</span></p>`
    totalItemCount.innerHTML = totalItem;
}

// end total price

//--------------------------------------------------------------------------------------------------------------//
// render cart item
function renderCartItem(){
    cartItemEl.innerHTML = ""; //clear cart element
    cart.forEach((item) => {  
        cartItemEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                $ <span>${item.price.toFixed(2)}</span> 
            </div>
            <div class="units">
                <div class="btn-minus" onclick = "changeNumberOfUnit('btn-minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn-plus" onclick = "changeNumberOfUnit('btn-plus', ${item.id})">+</div>           
            </div>
            <div class="remove-item" onclick = "removeItem(${item.id})">
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
        `
    });
}
// end render cart

//================================================================================================================//

// Remove item from cart
    function removeItem(id) {
        cart = cart.filter((item) => item.id !== id);
        console.log(cart)
        updateCart();
    }
// end remove cart

//===================================================================================================================//

// Change number of units for an item

function changeNumberOfUnit(action, id) {
    cart = cart.map((item) => {
        
        let oldNumberOfUnits = item.numberOfUnits; //lấy số lượng cũ trước khi nhấn nút cộng/trừ
        // let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === "btn-minus" && oldNumberOfUnits > 1) {
                oldNumberOfUnits--;
            }else if (action === "btn-plus") {
                oldNumberOfUnits++;

            }
        }
        return {
            ...item,
            numberOfUnits : oldNumberOfUnits,
            // numberOfUnits,
        };
    });

    updateCart();
}
// end change number

