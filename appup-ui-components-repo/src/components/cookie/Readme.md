```vue
<template>
    <div>
        <div class="jumbotron">
            <p class="lead">Cookie management is done through functions available in Commons Mixin</p>
            <p>Add / Update a cookie - setCookie(key, value, 3|'1Y'|'1M'|'1D'|'1h'|'1m'|'30s')</p>
            <p>Delete a cookie - removeCookie(key)</p>
        </div>
        <div class="container border bg-light ">
            <div class="row">
                <div class="col-md-12">Information saved in <b>name</b> cookie :- {{cookieInformation}}</div>
                <br/><br/>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <input type="text" v-model="name"/>
                    <br/><br/>
                    <button type="button" class="btn btn-primary" @click="addCookie">Add Cookie</button>
                </div>
                <div class="col-md-3">
                    <input type="text" v-model="updatename"/>
                    <br/><br/>
                    <button type="button" class="btn btn-secondary" @click="updateCookie">Update Cookie</button>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-danger" @click="deleteCookie">delete Cookie</button>
                </div>            
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'CookieTest',
    data() {
        return {
            name: '',
            updatename: '',
            cookie: ''
        }
    },
    computed: {
        cookieInformation: function() {
            console.log("---> cookie :: "+document.cookie);
            return this.cookie;
        }
    },
    methods: {
        addCookie: function() {
            var value = this.name+' - expires: 1 Day'
            this.setCookie("name", value, '1D');

            this.cookie = this.getCookie("name");
        },
        updateCookie: function() {
            var value = this.updatename+' - expires: 1 Day'
            this.setCookie("name", value, '1D');

            this.cookie = this.getCookie("name");
        },
        deleteCookie: function() {
            this.removeCookie("name");
            
            this.cookie = this.getCookie("name") ? this.getCookie("name") : "Cookie not available";
        }
    }
}
</script>
```