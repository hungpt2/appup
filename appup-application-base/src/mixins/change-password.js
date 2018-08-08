/**
 * @mixin
 */
export const ChangePassword = {
  methods: {
    changePwd(url, config, callback_success, callback_error ) {
      console.log("===> change password", url, config,callback_success,callback_error);
      
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
    },

    getPwd(url, config, callback_success, callback_error) {
      console.log("===> get pwd", url, config,callback_success,callback_error);
      this.$http.get(url+config)
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