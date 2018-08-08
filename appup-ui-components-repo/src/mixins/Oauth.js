/**
 * @mixin
 */
export const Oauth = {
    methods: {

        /**
         *
         * @param {url} url
         * @param {config object} config
         * @param {Call back success function} callback
         * @param {Call back error function} error
         */
        getOauth(url, id, callback_success, callback_error) {
            console.log("===> Oauth", url, id, callback_success, callback_error);

            this.$http.get(url + id)
                .then(success => {
                    console.log(success)
                    if (callback_success) {
                        callback_success(success.data);
                    }
                }, error => {
                    if (callback_error) {
                        callback_error(error);
                    }
                });
        }
    }
};
