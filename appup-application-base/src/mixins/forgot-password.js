/**
 * @mixin
 */
export const ForgotPassword = {
  methods: {
    forgotPwd(url, config, callback_success, callback_error ) {
      console.log("===> forgot password", url, config,callback_success,callback_error);
      
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