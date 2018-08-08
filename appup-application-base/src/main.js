import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Appup from 'appup-ui-components'
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';

// Vue Awesome Icons
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue image uploader
import VueCoreImageUpload from 'vue-core-image-upload';

//section storage: view more at https://www.npmjs.com/package/vue-sessionstorage
import VueSessionStorage from 'vue-sessionstorage'

//local storage: view more at https://www.npmjs.com/package/vue-localstorage
import VueLocalStorage from 'vue-localstorage'

// Use Axios as the default $http service for all Ajax requests
Vue.prototype.$http = require('axios').create({
  config: {
      headers: {
          'Content-Type': 'multipart/form-data'
      },
      crossDomain: true
  }
});

Vue.use(VueLocalStorage)
Vue.use(VueSessionStorage)
Vue.use(VeeValidate, {fieldsBagName: 'inputs'});
Vue.component('icon', Icon);
Vue.use(BootstrapVue)
Vue.component('vue-core-image-upload', VueCoreImageUpload);
Vue.use(Appup)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
