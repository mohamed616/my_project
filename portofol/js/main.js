$(document).ready(function(){
        $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        })
        $('.work .show').on('click',function(){

                $('.hidden').fadeIn(1000,function(){
                    $('.work .show').prop('disabled',true)
                })
        })
        $('.fa-chevron-down').on('click',function(){
            $('html,body').animate({
                scrollTop:$('.servi').offset().top
            },1000)
        })
        $('header .wor').on('click',function(){
            $('html,body').animate({
                scrollTop:$('.work').offset().top
            },1000)
        })
        function flash(){
            $('.fa-chevron-down').fadeOut(1000,function(){
                $(this).fadeIn(1000);
                flash()
            })
        }
        flash();
        $("body").niceScroll({
            cursorwidth:"10px",
            cursorborder:'none'
          });
    });
