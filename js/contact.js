$(function () {
    let agreed = $('#gdpr-agree').attr('checked') === true;
    let visitor = $('input[name="name"]').val().length >= 2;
    let email = isEmail($('input[name="email"]').val());
    let message = $('textarea[name="message"]').val().length >= 2;

    $('#name-input').on('focusout', function () {
        if (visitor) {
            $(this).find('p.help').addClass('is-hidden');
        } else {
            $(this).find('p.help').removeClass('is-hidden');
        }
    });

    $('#email-input').on('focusout', function () {
        if (email) {
            $(this).find('p.help').addClass('is-hidden');
        } else {
            $(this).find('p.help').removeClass('is-hidden');
        }
    });

    $('#message-input').on('focusout', function () {
        if (message) {
            $(this).find('p.help').addClass('is-hidden');
        } else {
            $(this).find('p.help').removeClass('is-hidden');
        }
    });

    $('#gdpr-input').change(function () {
        if (agreed) {
            $(this).find('p.help').addClass('is-hidden');
        } else {
            $(this).find('p.help').removeClass('is-hidden');
        }
    });

    $('input[name="name"], textarea[name="message"]')
        .on('change, focus, focusout, keyup', function () {
            if ($(this).attr('name') === 'name') {
                visitor = $(this).val().length >= 2;
            } else {
                message = $(this).val().length >= 2;
            }
            $('#contact-button').trigger('validationCheck');
        })
        .trigger('change');

    $('input[name="email"]')
        .on('change, focus, focusout, keyup, keydown', function () {
            email = isEmail($('input[name="email"]').val());
            $('#contact-button').trigger('validationCheck');
        })
        .trigger('change');

    $('#gdpr-agree').change(function () {
        agreed = document.getElementById('gdpr-agree').checked;
        $('#contact-button').trigger('validationCheck');
    });

    $('#contact-button')
        .on('validationCheck', function () {
            if (visitor && email && message && agreed) {
                $('#contact-button').attr('disabled', false);
            } else {
                $('#contact-button').attr('disabled', true);
            }
        })
        .trigger('validationCheck');

    function isEmail(email) {
        var regex =
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $('#gdpr-notice-trigger, .modal-background, .modal-close').click(
        function () {
            $('#gdpr-notice').toggleClass('is-active');
        }
    );
});
