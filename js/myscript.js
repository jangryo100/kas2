$('.nav > .box1').hover(
    function () {
        $(this).children('ul').find('ul').stop().slideDown()
        $(this).find('.decoBox2').stop().slideDown()
        $('.navBox').removeClass('on')
    },
    function () {
        $(this).children('ul').find('ul').stop().slideUp()
        $(this).find('.decoBox2').stop().slideUp()
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


$('#section .bAreaBtn ul li').on('click', function () {
    var i = $(this).index()
    $(this).addClass('on').siblings().removeClass('on')
    $('#section .bArea > .bContentBox > .bAreaCt').eq(i).addClass('on').siblings().removeClass('on')
    return false
})


$('.menu, .menu li').addClass('underline')
var flag = true;
$(window).scroll(function () {
    var scroll = $('#section').offset().top
    /*        var logo1 = $('.nav h1 img').attr('data-src')
            var logo2 = $('.nav h1 img').attr('src')*/
    if ($('html,body').scrollTop() >= scroll && flag) {
        $('.navBox').addClass('on').css({
            background: 'rgba(255,255,255,0.9)'
        })
        $('#header .navBox .nav ul > li.menu > a').css({
            color: '#000'
        })
        $('#header .menu ul li a').css({
            color: '#000'
        })
        $('.decoBox2').addClass('on').css({
            background: 'rgba(255, 255, 255, 0.9)'
        })
        $('button.hamburger .bar').css({
            backgroundColor: '#17469E'
        })
        $('.menu a').hover(function () {
            $(this).css({
                color: '#17469E'
            })
        }, function () {
            $(this).css({
                color: '#000'
            })
        })
        $('.menu,.menu li').removeClass('underline').addClass('underlineB')
        $('.nav h1 img').attr('src', 'img/kas_logo2.png')
        flag = false;
    } else if ($('html,body').scrollTop() < scroll && !flag) {
        $('.navBox').removeClass('on').css({
            background: ''
        })
        $('#header .navBox .nav ul > li.menu > a').css({
            color: ''
        })
        $('#header .menu ul li a').css({
            color: ''
        })
        $('.decoBox2').removeClass('on').css({
            background: ''
        })
        $('button.hamburger .bar').css({
            backgroundColor: '#fff'
        })
        $('.nav h1 img').attr('src', 'img/kas_logo.png')
        $('.menu a').hover(function () {
            $(this).css({
                color: ''
            })
        }, function () {
            $(this).css({
                color: ''
            })
        })
        $('.menu, .menu li').addClass('underline').removeClass('underlineB')
        flag = true
    }
})


$(window).on("load", function () {
    var bwidth = $('body').width();
    if (bwidth < 760) {
        $('.more-btn').on('click', function () {
            $(".sk1:visible:last").next(".sk1").slideDown("slow");
        });
    } else { 
        var skroll = new Skroll()
            .add(".sk1", {
                animation: "fadeInUp",
                duration: 800,
                delay: 100
            })
            .add(".sk2", {
                animation: "fadeInUp",
                duration: 1200,
                delay: 100
            })
            .init();
        skroll.recalcPosition();

        setInterval(function () {
            skroll.recalcPosition();
        }, 2000);
    }
});






