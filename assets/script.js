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