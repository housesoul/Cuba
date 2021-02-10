
    $('.photo_slider').slick({
        prevArrow: '<img class="slick-prev" src="images/arrow-left.jpg" alt="">',
        nextArrow: '<img class="slick-next" src="images/arrow-right.jpg" alt="">',
    });

    $('.menu_btn').on('click',function(){
        $('.menu_list').slideToggle();
    });