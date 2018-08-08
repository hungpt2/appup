import Vue from 'vue'
import _ from 'lodash';

import BootstrapVue from 'bootstrap-vue'
import VueCodemirror from 'vue-codemirror'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Multiselect from 'vue-multiselect';
import VueCoreImageUpload from 'vue-core-image-upload'

// Flat Picker
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

import VueTimeago from 'vue-timeago';
import vueTimeagoEnUs from 'vue-timeago/locales/en-US.json';

// Vuelidate Form validator
import VeeValidate from 'vee-validate';

// Import All appup Components
import Appup from '../src/appup-components';

// Import mixins to be used globally
import {Commons} from '@/mixins/commons'
Vue.mixin(Commons);

Vue.use(BootstrapVue);
Vue.use(VueCodemirror);
Vue.use(flatPickr);
Vue.use(VeeValidate);
Vue.use(VueTimeago, {
    name: 'vue-timeago',
    locale: 'en-US',
    locales: {
        'en-US': vueTimeagoEnUs
    }
});

Vue.component('icon', Icon);
Vue.component('vue-multiselect', Multiselect);
Vue.component('vue-core-image-upload', VueCoreImageUpload);

// Register Components
_.forEach(Appup, function(value, key) {
    Vue.component(key, value);
});

// Use Axios as the default $http service for all Ajax requests
Vue.prototype.$http = require('axios').create({
    config: {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        crossDomain: true
    }
});