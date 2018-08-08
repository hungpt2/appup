<style lang="scss">
    @import "../src/styles/index.scss";
</style>
<style lang="scss" scoped>
nav {
    margin-bottom: 40px;

    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        display: inline-block;
    }
    li + li {
        border-left: solid 1px #bbb;
        padding-left: 10px;
        margin-left: 10px;
    }
}
.container {
    padding: 10px 40px 0;
}
.v-link-active {
    color: #bbb;
}
</style>
<template>
    <div class="container">
        <nav>
            <ul>   
                <li><router-link to="/avatar">Avatar</router-link></li>
                <li><router-link to="/image">Image</router-link></li>
                <li><router-link to="/link">Link</router-link></li>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/alert">Alert</router-link></li>
                <li><router-link to="/datatable">Datatable</router-link></li>
                <li><router-link to="/code">Code</router-link></li>
                <li><router-link to="/navbar">Navbar</router-link></li>
                <li><router-link to="/inputs">Inputs</router-link></li>
                <li><router-link to="/form">Form</router-link></li>
                <li><router-link to="/modal">Modal</router-link></li>
                <li><router-link to="/imageupload">Image Upload</router-link></li>
                <li><router-link to="/timeago">Timeago</router-link></li>
                <li><router-link to="/cookie">Cookie</router-link></li>
                <li><router-link to="/html">Html</router-link></li>
                <li><router-link to="/timeline">Timeline</router-link></li>
                <li><router-link to="/accordion">Accordion</router-link></li>
                <li><router-link to="/tabs">Tabs</router-link></li>
                <li><router-link to="/header">Header</router-link></li>
                <li><router-link to="/table">Table</router-link></li>
                <li><router-link to="/icon">Icon</router-link></li>
                <li><router-link to="/switch">Switch</router-link></li>
                <li><router-link to="/grid">Grid</router-link></li>
                <li><router-link to="/listgrid">ListGrid</router-link></li>
                <li><router-link to="/carousel">Carousel</router-link></li>
                <li><router-link to="/search">Search</router-link></li>
                <li><router-link to="/menu">Menu</router-link></li>
                <li><router-link to="/dropdown">Dropdown</router-link></li>
                <li><router-link to="/list-item">List Item</router-link></li>
                <li><router-link to="/breadcrumbs">Breadcrumbs</router-link></li>
                <li><router-link to="/hover">Hover</router-link></li>
                <li><router-link to="/trigger">Trigger</router-link></li>
                <li><router-link to="/fromwizard">Fromwizard</router-link></li>
                <li><router-link to="/badge">Badge</router-link></li>
                <li><router-link to="/controller">Controller</router-link></li>
                <li><router-link to="/star">Star</router-link></li>
                <li><router-link to="/category">category</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
