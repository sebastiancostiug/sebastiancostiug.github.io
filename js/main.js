$(function () {
    let menu = $('footer.nav-menu>nav.nav');
    let hamburger = $('#toggle');
    let grin = $('#grin');
    let accentHeight = Math.round(
        ($('section.accent').height() * 100) / $('body').outerHeight(true)
    );

    hamburger.change(function () {
        accentHeight = Math.round(
            ($('section.accent').height() * 100) / $('body').outerHeight(true)
        );
        if (accentHeight !== 7) {
            if ($(this).is(':checked')) {
                $.when(
                    $('section.accent').animate({ height: '30%' }, 500)
                ).then(grin.delay(200).fadeIn(500));
            } else {
                $.when(
                    $('section.accent').animate({ height: `65%` }, 500)
                ).then(grin.fadeOut(100));
            }
        }
    });

    menu.click(function (e) {
        e.preventDefault();

        hamburger.prop('checked', false);
        accentHeight = 7;
        let pageLoaded = () => {
            return;
        };

        let page = $(e.target).attr('id');
        if (page === 'home') {
            grin.delay(200).fadeIn(500);
        } else {
            accentHeight = 65;
            pageLoaded = () => {
                $('#pages').load(`/pages/${page}.html`);
                return;
            };
            grin.fadeOut(100);
        }

        $.when($('#pages').fadeOut(500))
            .then($('#pages').empty())
            .then(pageLoaded)
            .then(
                $('section.accent').animate(
                    { height: `${accentHeight}%` },
                    1000
                )
            )
            .then($('#pages').fadeIn(500))
            .then(function () {
                $('script').each(function () {
                    if ($(this).attr('src') === `./js/${page}.js`) {
                        $(this).remove();
                    }
                });
                if (page !== 'home') {
                    $('head').append(
                        `<script src="./js/${page}.js" type="text/javascript"></script>`
                    );
                }
            });
    });
});
