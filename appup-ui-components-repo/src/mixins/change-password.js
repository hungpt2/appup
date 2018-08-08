/**
 * @mixin
 */
export const ChangePassword = {
    methods: {
        changePwd(url, config, callback_success, callback_error, transfer) {
            console.log("===> change password", url, config, callback_success, callback_error, transfer);

            this.$http.post(url, config)
                .then(success => {
                    if (success.status !== 200) {
                        if (callback_error) {
                            callback_error({
                                data: success.statusText
                            });
                        }
                    } else {
                        if (callback_success) {
                            callback_success({
                                data: success.statusText
                            }, transfer);
                        }
                    }
                }, error => {
                    if (callback_error) {
                        callback_error(error);
                    }
                });
        },

        getPwd(key, url, config, callback_success, callback_error) {
            console.log("===> get pwd", url, config, callback_success, callback_error);
            this.$http.get(url + config)
                .then(success => {
                    if (callback_success) {
                        callback_success.forEach(element => {
                            element(key, JSON.stringify(success.data));
                        });
                    }
                }, error => {
                    if (callback_error) {
                        callback_error(error);
                    }
                });
        }
    }
};
