(function() {
    // Mocked reCAPTCHA object
    window.grecaptcha = {
        execute: function(siteKey, options) {
            return new Promise(function(resolve) {
                resolve('mocked-captcha-token');
            });
        },
        render: function(container, parameters) {
            console.log('Mocked reCAPTCHA rendered:', container, parameters);
            return 'mocked-captcha-render';
        },
        reset: function() {
            console.log('Mocked reCAPTCHA reset');
        },
        getResponse: function() {
            return 'mocked-captcha-response';
        }
    };

    // Automatically fill the g-recaptcha-response input fields
    document.querySelectorAll('input[name="g-recaptcha-response"]').forEach(function(el) {
        el.value = 'mocked-captcha-response';
    });

    console.log('Mocked reCAPTCHA script loaded');
})();
