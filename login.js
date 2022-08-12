//-------------Đăng nhập-------------------//
const btnLogin = document.querySelectorAll('.header__login') 
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-close') 
const login = document.querySelector(".btn--primary")
// Hàm hiển thị modal login (thêm class open vào trong modal)
function showLogin() {
    modal.classList.add("open")

}
// Hàm ẩn modal( xoá class open ra khỏi modal)
function closeLogin(){
    modal.classList.remove("open")
}

// lặp qua từng thẻ và nghe hành vi click vào member login
for(const loginValue of btnLogin ){
    loginValue.addEventListener("click",showLogin)
        
}
// hành vi click vào lắng nghe hành vi click vào nút trờ lại
modalClose.addEventListener("click",closeLogin)

const text = document.querySelector('.auth-form__input')
console.log(text)

function loginButton(text){
    if (text == ''){
        alert('Tên đăng nhập không đc để trống')
    }
    else{
        alert('Đăng nhập thành công')
    }
}

login.addEventListener("click",loginButton)

// function Checkdangnhap(event, minKt, maxKt)

// {

//     event.preventDefault();

//     var mess = document.getElementById('errorText');

//     var username = document.getElementsByClassName('.auth-form__input').value;



//     if (username == '')

//     {

//         document.getElementById('.auth-form__input').style.backgroundColor = 'yellow';

//         mess.innerHTML += 'Tên đăng nhập ko được để trống ';

//     } else if ((username.length > 0 && username.length < minKt) || username.length > maxKt)

//     {

//         document.getElementById('.auth-form__input').style.backgroundColor = 'yellow';

//         mess.innerHTML += 'Tên đăng nhập từ 3-10 kí tự ';

//     } else mess.innerHTML = 'Tên đăng nhập của bạn là :' + username + '';

// }


