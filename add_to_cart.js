const products = [
    { 
      id: 0,
      img: './assets/img/product1.jpg',
      name: 'Supendisse id volutpat',
      price: 84,
      inCart: 0
    },
    {
      id: 1,
      img: './assets/img/product2.jpg',
      name: 'Body Solid GCEC340',
      price: 214,
      inCart: 0
    },
    {
      id: 2,
      img: './assets/img/product3.jpg',
      name: 'Bowflex BXE116 Elliptical',
      price: 421,
      inCart: 0
    },
    {
      id: 3,
      img: './assets/img/product4.jpg',
      name: 'ETHOS GHD',
      price: 152,
      inCart: 0
  
    },
    {
      id: 4,
      img: './assets/img/product5.jpg',
      name: 'AFG Pro 7.2AI Incline',
      price: 252,
      inCart: 0
    },
    {
      id: 5,
      img: './assets/img/product6.jpg',
      name: 'Weight Bench',
      price: 412,
      inCart: 0
    },
    {
      id: 6,
      img: './assets/img/product7.jpg',
      name: 'ProForm Hiit Trainer Lite 5.9',
      price: 300,
      inCart: 0
    },
    {
      id: 7,
      img: './assets/img/product8.jpg',
      name: 'Fitness Gear Pro',
      price: 124,
      inCart: 0
    }
  ];
  

//--------------Thêm giỏ hàng-------------------------------------//

const btn = document.querySelectorAll("button.product-img__btn-add") //chọn tất cả các button có class là 'product-img__btn-add'
// console.log(btn)
btn.forEach(function(button, index){
    // console.log(button, index)
    button.addEventListener("click",function(event){
        var btnItem = event.target //sự kiện click
        var product = btnItem.parentElement //lấy thẻ cha bao quanh nó
        var productImg = product.querySelector(".ads-img").src //lấy đến link của ảnh
        var productName = product.querySelector("H3.heading").innerText
        var productPrice = product.querySelector("span.price").innerText
        addCart(productName, productImg, productPrice)
    })
    
});
//----------------thêm sản phẩm---------------------//
function  addCart(productName, productImg, productPrice){
    var addItem = document.createElement("tr")
    var cartItem = document.querySelectorAll(".item tr")
    for (var i = 0; i < cartItem.length; i++){
        var productItem = document.querySelectorAll(".heading")
        if(productItem[i].innerHTML == productName ){
            // alert('Sản phẩm bạn chọn đã có trong giỏ hàng!!!')
            // return {
            // }
        }
    }
    var trcontent = '<td><img src="'+productImg+'" alt="Supendisse id volutpat" class="cart-ads1"></td> <td> <h3 class="heading">'+productName+'</h3></td> <td><p>$<span class="price">'+productPrice+'</span></p></td> <td><input type="number" aria-label="" value="1" min="1"></td> <td><span class= "btn-del-item-cart">Xoá</span></td>'
    addItem.innerHTML = trcontent;
    var cartTable = document.querySelector(".item")
    // console.log(cartTable)
    cartTable.append(addItem)

    cartTotal();
    deleteCart();
}



//-----------total price-------------------//

function cartTotal(){
    var cartItem = document.querySelectorAll(".item tr")
    var total = 0;
        for(var i = 0; i < cartItem.length; i++){

        var inputValue = cartItem[i].querySelector("input").value 

        var productprice = cartItem[i].querySelector("span").innerHTML

        totalprice = inputValue * productprice;

        total = total + totalprice;
        // console.log(total)
    }
    var getTotal = document.querySelector(".price-total span");
    getTotal.innerHTML = total;
    // console.log(getTotal)

    inputChange()
}
//--------------------------Delete------------------------------//

function deleteCart() {
    var cartItem = document.querySelectorAll(".item tr")
    // console.log(addItem)
    for(var i = 0; i <cartItem.length;i ++){
        var productDel = document.querySelectorAll(".btn-del-item-cart")
        productDel[i].addEventListener("click", function(event){
            var cartDel = event.target;
            var cartDelItem = cartDel.parentElement.parentElement
            cartDelItem.remove()
            cartTotal()
        })

    }
}

//-----------------cập nhật số lượng hàng----------------///
function inputChange() {
    var cartItem  = document.querySelectorAll(".item tr")
    for(var i = 0; i < cartItem.length; i++){
        var inputValue  = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function(){
            cartTotal()
        })

    }

}
