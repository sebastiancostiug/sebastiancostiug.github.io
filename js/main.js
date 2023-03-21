$(document).ready(function (e) {
    let menu = $('footer.nav-menu>nav.nav');
    let grinHead = $('#grinHead');
    let grinHeadPosition = grinHead.position();
    let headerHeight = Math.ceil(
        ($('header').outerHeight(true) * 100) / $(window).height()
    );
    // let headerHeight = Math.ceil($('header').outerHeight(true));
    let navHeight = Math.ceil(
        ($('nav.nav').outerHeight(true) * 100) / $(window).height()
    );
    // let navHeight = Math.ceil($('nav.nav').outerHeight(true));
    let navMenuToggle = $('#toggle');

    navMenuToggle.change(function () {
        let accentHeight = Math.floor(
            ($('section.accent').height() * 100) / $(window).height()
        );
        console.log($(this).is(':checked'));
        if (accentHeight !== 7) {
            if ($(this).is(':checked')) {
                let navHeight = Math.ceil(
                    ($('nav.nav').outerHeight(true) * 100) / $(window).height()
                );
                contentHeight = Math.floor(95 - headerHeight - navHeight);
                $('section.accent').animate({ height: '30vh' }, 500);
                if (grinHeadPosition != grinHead.position()) {
                    grinHead.fadeOut(100);
                }
            } else {
                $('section.accent').animate({ height: '70vh' }, 500);
                if (grinHeadPosition != grinHead.position()) {
                    grinHead.delay(500).fadeIn(500);
                }
            }
        }
    });

    menu.click(function (e) {
        e.preventDefault();
        let page = $(e.target).attr('id');
        navMenuToggle.prop('checked', false);
        contentHeight = 7;
        if (page === 'home') {
            grinHead.fadeIn(500);
        } else {
            contentHeight = Math.floor(95 - headerHeight - navHeight);
            grinHead.fadeOut(500);
        }
        $('section.accent').animate({ height: `${contentHeight}vh` }, 1000);
    });
});
