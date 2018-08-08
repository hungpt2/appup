import _ from 'lodash';
import * as Cookie from 'tiny-cookie';

/**
 * @mixin
 */
export const Commons = {
    methods: {
        
        /**
         * Add/Update Cookie with provided expiry options
         * 
         * expiry can be one of below
         * <br/>date object
         * <br/>7 - Seven days later
         * <br/>'1Y' - One year later
         * <br/>'1M' - One month later
         * <br/>'1D' - One day later
         * <br/>'1h' - One hour later
         * <br/>'10m' - Ten minutes later
         * <br/>'30s' - Thirty seconds later
         */
        setCookie(key, value, expiry) {
            Cookie.set(key, value, {
                expires: expiry
            });
        },
        getCookie(key) {
            return Cookie.get(key);
        },
        removeCookie(key) {
            Cookie.remove(key);
        },
        getAllCookies() {
            return Cookie.getAll();
        }
    }
};