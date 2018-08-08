/**
 * @mixin
 */
export const SettingPrefrences = {
    methods: {
        getProfile(key, url, config, callback_success, callback_error) {
            console.log("===> get profile", key, url, config, callback_success, callback_error);

            this.$http.post(url, config)
                .then(success => {
                    if (callback_success) {
                        callback_success.forEach(element => {
                            element(key, JSON.stringify(success.data[0]));
                        });
                    }
                }, error => {
                    if (callback_error) {
                        callback_error(error);
                    }
                });
        },

        changeProfile(url, config, callback_success, callback_error, transfer) {
            console.log("===> change profile", url, config, callback_success, callback_error);

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
        }
    }
};
