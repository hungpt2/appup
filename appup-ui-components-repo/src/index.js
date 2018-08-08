import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import _ from 'lodash';

// Vue Awesome Icons
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

// Vue FlatPickr
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

// Vue Qill Editor
import { VueEditor } from 'vue2-editor';

// Vuelidate Form validator
import VeeValidate from 'vee-validate';

// Vue Multiselect for multiselect & tag component
import Multiselect from 'vue-multiselect';

// Vue image uploader
import VueCoreImageUpload from 'vue-core-image-upload';

// Vue timeago component
import VueTimeago from 'vue-timeago';
import vueTimeagoEnUs from 'vue-timeago/locales/en-US.json';

// Import All appup Components
import Appup from './appup-components';
import locale from './locale/index';

//form wizard 
import VueFormWizard from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import './styles/themify-icons/themify-icons.css';
// Star component
import StarRating from 'vue-star-rating'

// Localstorage: view more at https://www.npmjs.com/package/vue-localstorage
import VueLocalStorage from 'vue-localstorage';

Vue.use(VueLocalStorage);

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    // Register Components
    _.forEach(Appup, function(value, key) {
        Vue.component(key, value);
    });

    /*
     * Commenting code as TODO for future
     *
    Vue.prototype.$Loading = LoadingBar;
    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Notice = Notice;
    Vue.prototype.$Spin = Spin;
    */
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

Vue.use(VueFormWizard);
// Registering 3rd party modules
Vue.use(BootstrapVue);
Vue.use(flatPickr);
Vue.use(VeeValidate, {fieldsBagName: 'inputs'});
Vue.use(VueTimeago, {
    name: 'vue-timeago',
    locale: 'en-US',
    locales: {
        'en-US': vueTimeagoEnUs
    }
});

// Registering 3rd party components
Vue.component('icon', Icon);
Vue.component('vue-editor', VueEditor);
Vue.component('vue-multiselect', Multiselect);
Vue.component('vue-core-image-upload', VueCoreImageUpload);
Vue.component('star-rating', StarRating);
const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    locale: locale.use,
    i18n: locale.i18n,
    install,
    ...Appup
};

API.lang = (code) => {
    const langObject = window['appup/locale'].default;
    if (code === langObject.i.locale) locale.use(langObject);
    else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

const _default = module.exports = API;
export { _default as default };   // eslint-disable-line no-undef
