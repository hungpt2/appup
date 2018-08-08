import * as Cookie from 'tiny-cookie';

/**
 * @mixin
 */
export const Commons = {
    methods: {
        
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