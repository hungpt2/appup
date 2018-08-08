// using with vue-i18n in CDN
/*eslint-disable */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export default function (lang) {
    if (!isServer) {
        if (typeof window.appup !== 'undefined') {
            if (!('langs' in appup)) {
                appup.langs = {};
            }
            appup.langs[lang.i.locale] = lang;
        }
    }
};
/*eslint-enable */