const nav = document.getElementById('nav');
nav.addEventListener('click', function(e){
    e.preventDefault();
    // console.log("Clicked");
    document.querySelector(".sidebar").classList.toggle("sidebar_show");
})

document.querySelector('.sidebar_close').addEventListener('click', function(e){
    e.preventDefault();
    // console.log("Clicked");
    document.querySelector(".sidebar").classList.toggle("sidebar_show");
})

const cart = document.querySelector('.cart');
cart.addEventListener('click', function(e){
    e.preventDefault();
    // console.log("Clicked");
    document.querySelector(".cart_content").classList.toggle("cart_content_show");
})

const category_selector = document.querySelector(".all_category_trigger");
category_selector.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log("clicked category");
    document.querySelector('.error_handle').classList.toggle("show_all_category_list");
})