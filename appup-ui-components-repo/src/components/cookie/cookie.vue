<template>
</template>
<script>

import { Commons } from '@/mixins/commons'

/**
 * <u>This is not a valid component.</u> Do not use appup-cookie to manage cookies.
 * 
 * Methods to manage cookies are defined in commons.js Mixin which is available globally to all components as global mixin.
 * 
 * <b>Functions:</b>
 * <br/>
 * <var>setCookie(key, value, expiry)</var>
 * 
 * expiry can be one of below
 * <br/>7 - Seven days later
 * <br/>'1Y' - One year later
 * <br/>'1M' - One month later
 * <br/>'1D' - One day later
 * <br/>'1h' - One hour later
 * <br/>'10m' - Ten minutes later
 * <br/>'30s' - Thirty seconds later
 * 
 * <var>getCookie(key)</var>
 * <br/>
 * <var>removeCookie(key)</var>
 * <br/>
 * <var>getAllCookies()</var>
 */
export default {
    name: 'appup-cookie',
    mixins:[Commons],
    props: {

    }
}
</script>