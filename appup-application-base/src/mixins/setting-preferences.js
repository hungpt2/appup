/**
 * @mixin
 */
export const SettingPrefrences = {
  methods: {
    getProfile(url, id, callback_success, callback_error ) {
      console.log("===> get profile", url, id, callback_success, callback_error);
      
      this.$http.get(url + id)
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

    changeProfile(url, config, callback_success, callback_error ) {
      console.log("===> change profile", url, config,callback_success,callback_error);
      
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