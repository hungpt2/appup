/**
 * @mixin
 */
export const Login = {
  methods: {

    /**
     *
     * @param {url} url
     * @param {config object} config
     * @param {Call back success function} callback
     * @param {Call back error function} error
     */
    login(url, config, callback_success, callback_error ) {
      console.log("===> login", url, config,callback_success,callback_error);

      this.$http.post(url, config)
        .then(success => {
          if (callback_success) {
            callback_success(success);
          }
        }, error => {
          if (callback_error) {
            callback_error(error);
          }
        });
    }
  }
};