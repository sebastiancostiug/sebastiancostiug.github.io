$(document).ready(function (e) {
    let homeBtn = $('#home');
    let portfolioBtn = $('#portfolio');
    let aboutBtn = $('#about');
    let contactBtn = $('#contact');
    let menu = $('footer.row>div.menu');
    let grinHead = $('#grinHead');
    let grinHeadPosition = grinHead.position();
    let headerHeight = Math.floor($('header.row').height());
    let footerHeight = Math.floor($('footer.navMenu').height());
    let neutralHeight = Math.floor($('section.content>div.neutral').height());
    let containerHeight = Math.floor($('div.container').height());
    let containerWidth = Math.floor($('div.container').width());
    let navMenuToggle = $('#toggle');

    $('#toggle').change(function () {
        let percentHight =
            ($('div.accent').height() * 100) / $('div.container').height();
        if (percentHight < 25) {
			// $('div.accent').animate({ height: '30vh' }, 500);
            // if (grinHeadPosition != grinHead.position()) {
            //     grinHead.fadeOut(100);
            //     if (containerWidth > 736) {
            //         $('#portrait').animate({ height: '25vh' });
            //     }
            // }
        } else if ($(this).is(':checked')) {
            $('div.accent').animate({ height: '30vh' }, 500);
            if (grinHeadPosition != grinHead.position()) {
                grinHead.fadeOut(100);
                if (containerWidth > 736) {
                    $('#portrait').animate({ height: '25vh' });
                }
            }
        } else if (!$(this).is(':checked')) {
            $('div.accent').animate({ height: '70vh' }, 500);
            if (grinHeadPosition != grinHead.position()) {
                grinHead.delay(500).fadeIn(500);
                if (containerWidth > 736) {
                    $('#portrait').animate({ height: '35vh' });
                }
            }
        }
    });

    portfolioBtn.click(function (e) {
        e.preventDefault();
        navMenuToggle.prop('checked', false);
        let presentGrinHeadPosition = grinHead.position();
        let contentSection = $('div.accent');
        let contentContainer = $('section.content');
        let contentHeight = Math.floor(
            containerHeight - headerHeight - footerHeight - 2 * neutralHeight
        );
        contentContainer.animate({ top: `${headerHeight}px` }, 1000);
        contentSection.animate({ height: `${contentHeight}px` }, 1000);
        menu.fadeOut(500);
        portfolioBtn.delay(500).fadeOut(500);
        homeBtn.delay(500).fadeIn(1000);
        contactBtn.delay(500).fadeIn(1000);
        aboutBtn.delay(500).fadeIn(1000);
        menu.delay(600).queue(function (next) {
            $(this).css('flex-direction', 'row');
            next();
        });
        menu.delay(500).fadeIn(1000);
        if (
            grinHeadPosition.top == presentGrinHeadPosition.top &&
            containerWidth > 736
        ) {
            grinHead.fadeOut(500);
            grinHead.css('z-index', '0');
            grinHead.animate(
                {
                    left: '0',
                    top: '30%',
                },
                {
                    step: function (now, fx) {
                        $(this).css(
                            '-webkit-transform',
                            'rotate(' + now * 2 + 'deg)'
                        );
                        $(this).css(
                            '-moz-transform',
                            'rotate(' + now * 2 + 'deg)'
                        );
                        $(this).css('transform', 'rotate(' + now * 2 + 'deg)');
                    },
                    duration: 1000,
                },
                1000
            );
            grinHead.fadeIn(500);
        } else {
            grinHead.fadeOut(1000);
            grinHead.delay(2000).fadeIn(1000);
        }
        $('section.contact').fadeOut(500);
        $('section.about').fadeOut(500);
        $('section.portfolio').delay(1000).fadeIn(1000);
    });

    contactBtn.click(function (e) {
        e.preventDefault();
        navMenuToggle.prop('checked', false);
        let presentGrinHeadPosition = grinHead.position();
        let contentSection = $('div.accent');
        let contentContainer = $('section.content');
        let contentHeight = Math.floor(
            containerHeight - headerHeight - footerHeight - 2 * neutralHeight
        );
        contentContainer.animate({ top: `${headerHeight}px` }, 1000);
        contentSection.animate({ height: `${contentHeight}px` }, 1000);
        menu.fadeOut(500);
        contactBtn.delay(500).fadeOut(500);
        homeBtn.delay(500).fadeIn(1000);
        portfolioBtn.delay(500).fadeIn(1000);
        aboutBtn.delay(500).fadeIn(1000);
        menu.delay(600).queue(function (next) {
            $(this).css('flex-direction', 'row');
            next();
        });
        menu.delay(500).fadeIn(1000);
        if (
            grinHeadPosition.top == presentGrinHeadPosition.top &&
            containerWidth > 736
        ) {
            grinHead.fadeOut(500);
            grinHead.css('z-index', '0');
            grinHead.animate(
                {
                    left: '0',
                    top: '30%',
                },
                {
                    step: function (now, fx) {
                        $(this).css(
                            '-webkit-transform',
                            'rotate(' + now * 2 + 'deg)'
                        );
                        $(this).css(
                            '-moz-transform',
                            'rotate(' + now * 2 + 'deg)'
                        );
                        $(this).css('transform', 'rotate(' + now * 2 + 'deg)');
                    },
                    duration: 1000,
                },
                1000
            );
            grinHead.fadeIn(500);
        } else {
            grinHead.fadeOut(1000);
            grinHead.delay(2000).fadeIn(1000);
        }
        $('section.portfolio').fadeOut(500);
        $('section.about').fadeOut(500);
        $('section.contact').delay(1000).fadeIn(1000);
        $('#contactForm :input').prop('disabled', true);
        $('#disabledForm').delay(2500).fadeIn(3000);
    });

    aboutBtn.click(function (e) {
        e.preventDefault();
        navMenuToggle.prop('checked', false);
        let presentGrinHeadPosition = grinHead.position();
        let contentSection = $('div.accent');
        let contentContainer = $('section.content');
        let contentHeight = Math.floor(
            containerHeight - headerHeight - footerHeight - 2 * neutralHeight
        );
        contentContainer.animate({ top: `${headerHeight}px` }, 1000);
        contentSection.animate({ height: `${contentHeight}px` }, 1000);
        menu.fadeOut(500);
        aboutBtn.delay(500).fadeOut(500);
        homeBtn.delay(500).fadeIn(1000);
        contactBtn.delay(500).fadeIn(1000);
        portfolioBtn.delay(500).fadeIn(1000);
        menu.delay(600).queue(function (next) {
            $(this).css('flex-direction', 'row');
            next();
        });
        menu.delay(500).fadeIn(1000);
        if (
            grinHeadPosition.top == presentGrinHeadPosition.top &&
            containerWidth > 736
        ) {
            grinHead.fadeOut(500);
            grinHead.css('z-index', '0');
            grinHead.animate(
                {
                    left: '0',
                    top: '30%',
                },
                {
                    step: function (now, fx) {
                        $(this).css(
                            '-webkit-transform',
                            'rotate(' + now * 2 + 'deg)'
                        );
                        $(this).css(
                            '-moz-transform',
                            'rotate(' + now * 2 + 'deg)'
                        );
                        $(this).css('transform', 'rotate(' + now * 2 + 'deg)');
                    },
                    duration: 1000,
                },
                1000
            );
            grinHead.fadeIn(500);
        } else {
            grinHead.fadeOut(1000);
            grinHead.delay(2000).fadeIn(1000);
        }
        $('section.portfolio').fadeOut(500);
        $('section.contact').fadeOut(500);
        $('section.about').delay(1000).fadeIn(1000);
    });

    homeBtn.click(function (e) {
        e.preventDefault();
        navMenuToggle.prop('checked', false);
        let contentSection = $('div.accent');
        let contentContainer = $('section.content');
        contentContainer.animate({ top: '25%' }, 1000);
        contentSection.animate({ height: '7vh' }, 1000);
        menu.fadeOut(500);
        homeBtn.delay(500).fadeOut(500);
        aboutBtn.delay(500).fadeIn(1000);
        contactBtn.delay(500).fadeIn(1000);
        portfolioBtn.delay(500).fadeIn(1000);
        menu.delay(600).queue(function (next) {
            $(this).css('flex-direction', 'row');
            next();
        });
        menu.delay(500).fadeIn(1000);
        grinHead.fadeOut(500);
        grinHead.delay(500).attr('style', '');
        grinHead.fadeIn(500);
        $('section.portfolio').fadeOut(500);
        $('section.contact').fadeOut(500);
        $('section.about').fadeOut(500);
    });
});
