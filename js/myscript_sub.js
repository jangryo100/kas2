$(function () {
    $('.navBox').addClass('on')
    $('.nav > .box1').hover(
        function () {
            $(this).children('ul').find('ul').stop().slideDown()
            $(this).find('.decoBox2').stop().slideDown().addClass('on')
            $('.navBox').removeClass('on')
        },
        function () {
            $(this).children('ul').find('ul').stop().slideUp()
            $(this).find('.decoBox2').stop().slideUp().removeClass('on')
            $('.navBox').addClass('on')
        })
    $('.stm > button').on('click', function () {
        $(this).next().slideToggle()
    })

    $(".hamburger").on("click", function () {
        $(".hamburger").toggleClass("open")
        $('.mobiMenu').slideToggle()
        if (!$('.hamburger').hasClass('open')) {
            $('.mobiMenu > ul > li').children('ul').slideUp()
        }
    })
    $('.mobiMenu > ul > li').on('click', function () {
        var i = $(this).index()
        $(this).children('ul').slideToggle()
        $(this).siblings().children('ul').slideUp()
    })
    $('.menu, .menu li').addClass('underlineB')

    $('p.text_1').addClass('on')
    $('p.text_2').addClass('on')

    var syear = $('.s-year').offset().top
    var tablebox = $('.tablebox').offset().top
    var ceobox = $('.ceo').offset().top - $(window).height()
    var flag = true;
    var tflag = true;
    var cflag = true;
    $(window).on('scroll', function () {
        console.log(tablebox, $(this).scrollTop())
        if ($(this).scrollTop() >= 300 && flag) {
            $('p.text_1').removeClass('on')
            $('p.text_2').removeClass('on')
            flag = false
        } else if ($(this).scrollTop() < 300 && !flag) {
            $('p.text_1').addClass('on')
            $('p.text_2').addClass('on')
            flag = true
        }
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 800 && tflag) {
            $('.tablebox').addClass('on')
            tflag = false
        } else if ($(this).scrollTop() < 800 && !tflag) {
            $('.tablebox').removeClass('on')
            tflag = true
        }
    })

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= ceobox && cflag) {
            $('.ceo').addClass('on')
            cflag = false
        } else if ($(this).scrollTop() < ($('.tablebox').offset().top - $('.tablebox').height() - 100) && !cflag) {
            $('.ceo').removeClass('on')
            cflag = true
        }
    })
})
