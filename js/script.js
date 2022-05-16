
var header = document.querySelector('.header');

window.addEventListener('scroll',function(){

    /*console.log('rolou')*/

    var pxScroll = window.scrollY; /*guardando a variável de pixels rolados*/
    

    if (pxScroll > 250){
        header.classList.add('header-fixed');     
    }else{
        header.classList.remove('header-fixed');   
    }

})