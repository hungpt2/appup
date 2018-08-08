/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';

// 3rd Party Modules
import BootstrapVue from 'bootstrap-vue';
import VueCodemirror from 'vue-codemirror';
import { VueEditor, Quill } from 'vue2-editor';
import VeeValidate from 'vee-validate';
import Flickity from 'vue-flickity';

import App from './app.vue';
import Appup from '../src/index';
import locale from '../src/locale/lang/en-US';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Ag-grid
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

// Codemirror
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';

// vue-multiselect css
import 'vue-multiselect/dist/vue-multiselect.min.css';

// Mixins
import {Commons} from '@/mixins/commons';

// Event bus
import EventBus from '@/eventBus';


Vue.use(BootstrapVue);
Vue.use(VueCodemirror);
Vue.use(VueRouter);
Vue.use(VeeValidate, {fieldsBagName: 'fields'});
Vue.component('Flickity', Flickity);


// Configure mixin globally
Vue.mixin(Commons);

Vue.use(Appup, { locale });

Vue.config.debug = true;

// Use Axios as the default $http service for all Ajax requests
Vue.prototype.$http = require('axios').create({
    config: {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        crossDomain: true
    }
});

// Add a request interceptor
Vue.prototype.$http.interceptors.request.use(function (config) {
    // Do something before request is sent
    EventBus.$emit('startLoading', true);
    return config;
}, function (error) {
    // Do something with request error
    EventBus.$emit('startLoading', false);

    return Promise.reject(error);
});

// Add a response interceptor
Vue.prototype.$http.interceptors.response.use(function (response) {
    // Do something with response data
    EventBus.$emit('startLoading', false);
    return response;
}, function (error) {
    // Do something with response error
    EventBus.$emit('startLoading', false);
    return Promise.reject(error);
});

const router = new VueRouter({
    esModule: false,
    routes: [
        {
            path: '/category',
            component: (resolve) => require(['./routers/category.vue'], resolve)
        },
        {
            path: '/star',
            component: (resolve) => require(['./routers/star.vue'], resolve)
        },
        {
            path: '/badge',
            component: (resolve) => require(['./routers/badge.vue'], resolve)
        },
        {
            path: '/fromwizard',
            component: (resolve) => require(['./routers/fromwizard.vue'], resolve)
        },
        {
            path: '/hover',
            component: (resolve) => require(['./routers/hover.vue'], resolve)
        },
        {
            path: '/breadcrumbs',
            component: (resolve) => require(['./routers/breadcrumbs.vue'], resolve)
        },
        {
            path: '/carousel',
            component: (resolve) => require(['./routers/carousel.vue'], resolve)
        },
        {
            path: '/listgrid',
            component: (resolve) => require(['./routers/listgrid.vue'], resolve)
        },
        {
            path: '/grid',
            component: (resolve) => require(['./routers/grid.vue'], resolve)
        },
        {
            path: '/header',
            component: (resolve) => require(['./routers/header.vue'], resolve)
        },
        {
            path: '/timeline',
            component: (resolve) => require(['./routers/timeline.vue'], resolve)
        },
        {
            path: '/html',
            component: (resolve) => require(['./routers/html.vue'], resolve)
        },
        {
            path: '/timeago',
            component: (resolve) => require(['./routers/timeago.vue'], resolve)
        },
        {
            path: '/avatar',
            component: (resolve) => require(['./routers/avatar.vue'], resolve)
        },
        {
            path: '/image',
            component: (resolve) => require(['./routers/image.vue'], resolve)
        },
        {
            path: '/link',
            component: (resolve) => require(['./routers/link.vue'], resolve)
        },
        {
            path: '/button',
            component: (resolve) => require(['./routers/button.vue'], resolve)
        },
        {
            path: '/alert',
            component: (resolve) => require(['./routers/alert.vue'], resolve)
        },
        {
            path: '/datatable',
            component: (resolve) => require(['./routers/datatable.vue'], resolve)
        },
        {
            path: '/code',
            component: (resolve) => require(['./routers/code.vue'], resolve)
        },
        {
            path: '/navbar',
            component: (resolve) => require(['./routers/navbar.vue'], resolve)
        },
        {
            path: '/inputs',
            component: (resolve) => require(['./routers/inputs.vue'], resolve)
        },
        {
            path: '/form',
            component: (resolve) => require(['./routers/form.vue'], resolve)
        },
        {
            path: '/modal',
            component: (resolve) => require(['./routers/modal.vue'], resolve)
        },
        {
            path: '/imageupload',
            component: (resolve) => require(['./routers/imageupload.vue'], resolve)
        },
        {
            path: '/cookie',
            component: (resolve) => require(['./routers/cookie.vue'], resolve)
        },
        {
            path: '/accordion',
            component: (resolve) => require(['./routers/accordion.vue'], resolve)
        },
        {
            path: '/tabs',
            component: (resolve) => require(['./routers/tabs.vue'], resolve)
        },
        {
            path: '/table',
            component: (resolve) => require(['./routers/table.vue'], resolve)
        },
        {
            path: '/icon',
            component: (resolve) => require(['./routers/icon.vue'], resolve)
        },
        {
            path: '/switch',
            component: (resolve) => require(['./routers/switch.vue'], resolve)
        },
        {
            path: '/search',
            component: (resolve) => require(['./routers/search.vue'], resolve)
        },
        {
            path: '/dropdown',
            component: (resolve) => require(['./routers/dropdown.vue'], resolve)
        },
        {
            path: '/list-item',
            component: (resolve) => require(['./routers/listItem.vue'], resolve)
        },
        {
            path: '/trigger',
            component: (resolve) => require(['./routers/trigger.vue'], resolve)
        },
        {
            path: '/controller',
            component: (resolve) => require(['./routers/controller.vue'], resolve)
        },
        {
            path: '/menu',
            component: (resolve) => require(['./routers/menu.vue'], resolve),
            children: [
                {
                    path: 'apps',
                    component: (resolve) => require(['./routers/search.vue'], resolve)
                },
                {
                    path: 'users',
                    component: (resolve) => require(['./routers/search.vue'], resolve)
                },
                {
                    path: 'themes',
                    component: (resolve) => require(['./routers/search.vue'], resolve)
                },
                {
                    path: 'setup',
                    component: (resolve) => require(['./routers/search.vue'], resolve)
                }
            ]
        }
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
