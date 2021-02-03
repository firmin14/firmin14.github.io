$(document).ready(function(){
    //nav slide Toggle
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    //stikey Navbar
    $(window).scroll(function(){
        var sc=$(this).scrollTop();
        if(sc > 50){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky')
        }
    })
})