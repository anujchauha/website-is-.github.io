const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const moblie_meun = document.querySelector('.header .nav-bar .nav-list ul');
const meun_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
constheader = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    moblie_meun.classList.toggle('active');
});


document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position < 50){
       Headers.style.backgroundcolor = '#000000';
    }else{
        Headers.style.backgroundcolor = 'transparent';
    }
})

meun_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
    moblie_meun.classList.toggle('active');
    })
})