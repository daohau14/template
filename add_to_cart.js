//--------------Thêm giỏ hàng-------------------------------------//

const btn = document.querySelectorAll("button.product-img__btn-add"); //chọn tất cả các button có class là 'product-img__btn-add'

btn.forEach(function(button, index){
    button.addEventListener("click",function(event){
        var btnItem = event.target; //sự kiện click
        var product = btnItem.parentElement; //lấy thẻ cha bao quanh nó
        var productImg = product.querySelector("img").src; //lấy đến link của ảnh
        var productName = product.querySelector(".heading").innerText;
        var productPrice = product.querySelector(".price").innerText;
        var itemID = product.parentElement;
        
        // console.log(productID)
        // var productID = product.querySelector(".id-prdA").innerText;
        // var productID = itemID.getElementById('#productItem-2').innerHTML;
        // console.log(productID)
        
        addCart(productImg,productName, productPrice);
    })
    
});



//----------------thêm sản phẩm---------------------//
function addCart(productImg,productName,productPrice){
  let countItem = 0;
  var addtr = document.createElement('tr');
  var cartItem = document.querySelectorAll('tbody tr');

  for (var i = 0 ; i < cartItem.length; i++){
    var productT = document.querySelectorAll('.id-prd');
    console.log(productT)
    if(productT[i].innerHTML == productID){
        countItem++;
    }
  }
  if(countItem > 0) {
      let itemNumber = document.getElementById(productID).getAttribute('value');
      itemNumber++;
      document.getElementById(productID).setAttribute('value', itemNumber);
  } else {
      var trcontent = '<tr><td><img src="'+productImg+'" alt="1" class="cart-ads1"/> <h3 class="heading">'+productName+'</h3></td> <td><p>$ <span class ="price">'+productPrice+'</span></p></td> <td> <input id="'+productID+'" class="cart-quantity-input" type="number" step="1" value="1" min="1"></input></td> <td><span class= "btn-del-item-cart">Xoá</span></td> </tr>'
      // var trcontent = '<td><img src="'+productImg+'" alt="Supendisse id volutpat" class="cart-ads1"></td> <td> <h3 class="heading">'+productName+'</h3></td> <td><p>$<span class="price">'+productPrice+'</span></p></td> <td><input type="number" aria-label="" value="1" min="1"></td> <td><span class= "btn-del-item-cart">Xoá</span></td>'
      addtr.innerHTML = trcontent;
      var cartTable = document.querySelector('tbody');
      // console.log(cartTable)
      cartTable.append(addtr);
    //   alert("Thank you!");
  }
 
  cartTotal();
  deleteCart();
}


//-----------total price-------------------//

function cartTotal(){
    var cartItem = document.querySelectorAll(".item tr");
    var total = 0;
        for(var i = 0; i < cartItem.length; i++){

        var inputValue = cartItem[i].querySelector("input").value ;

        var productprice = cartItem[i].querySelector("span").innerHTML;

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
    var cartItem = document.querySelectorAll(".item tr");
    // console.log(addItem)
    for(var i = 0; i <cartItem.length;i ++){
        var productDel = document.querySelectorAll(".btn-del-item-cart");
        productDel[i].addEventListener("click", function(event){
            var cartDel = event.target;
            var cartDelItem = cartDel.parentElement.parentElement;
            cartDelItem.remove();
            cartTotal();
        })

    }
}

//-----------------cập nhật số lượng hàng----------------///
function inputChange() {
    var cartItem  = document.querySelectorAll(".item tr");
    for(var i = 0; i < cartItem.length; i++){
        var inputValue  = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function(){
            cartTotal();
        })

    }

}
