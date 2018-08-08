/**
 * @mixin
 */
export const EmailVerification = {
    methods: {

        /**
         *
         * @param {url} url
         * @param {config object} config
         * @param {Call back success function} callback
         * @param {Call back error function} error
         */
        verifyNewUser(url, config, callback_success, callback_error, transfer) {
            console.log("===> verify email", url, config, callback_success, callback_error);

            this.$http.post(url, config)
                .then(success => {
                    if (callback_success) {
                        callback_success(success, transfer);
                    }
                }, error => {
                    if (callback_error) {
                        callback_error({data: error.response.statusText});
                    }
                });
        }
    }
};
