import _ from 'lodash';

/**
 * @mixin
 */
export const AjaxRequests = {
    methods: {

        /**
         *
         * @param {url} url
         * @param {config object} config
         * @param {Call back function} callback
         */
        getData (url, config, callback, error) {
            console.log("===> Datatable :: getData");

            let data = new FormData();

            // Loop through config object and set them to formdata
            if(config) {
                _.forOwn(config, function(value, key) {
                    data.append(key, value);
                });
            }

            this.$http.get(url, {
                params: config
            })
              .then(response => {
                  if (callback) {
                      callback(response);
                  }
              }, response => {
                  if (error) {
                      error(response);
                  }
              });
        },

        /**
         *
         * @param {url} url
         * @param {config object} config
         * @param {Call back function} callback
         */
        getDropdownData (url, config, callback) {
            console.log("===> Dropdown :: getData");

            let data = new FormData();

            // Loop through config object and set them to formdata
            _.forOwn(config, function(value, key) {
                data.append(key, value);
            });

            //data.append('pageSize', config.pageSize);
            //data.append('pageNo', config.pageNo);

            this.$http.get(url, {
                params: config
            })
              .then(response => {
                  if (callback) {
                      callback(response);
                  }
              });
        },
    }
};
