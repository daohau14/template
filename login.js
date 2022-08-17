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

