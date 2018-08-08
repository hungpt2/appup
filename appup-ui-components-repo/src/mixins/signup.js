/**
 * @mixin
 */
export const Signup = {
    methods: {

        /**
         *
         * @param {url} url
         * @param {config object} config
         * @param {Call back success function} callback
         * @param {Call back error function} error
         */
        signup(url, config, callback_success, callback_error, transfer) {
            console.log("===> sign up", url, config, callback_success, callback_error);

            this.$http.post(url, config)
                .then(success => {
                    let tmp = JSON.parse(success.data);
                    if (tmp.status === 'failure') {
                        if (callback_error) {
                            callback_error({data: tmp.responseText});
                        }
                    } else {
                        if (callback_success) {
                            callback_success(success, transfer.event, transfer.button, transfer.index);
                        }
                    }
                    
                }, error => {
                    if (callback_error) {
                        callback_error(error);
                    }
                });
        }
    }
};
