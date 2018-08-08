<template>
    <b-navbar 
        :id=id
        class="appup-header"
        toggleable="md" 
        :type="titletextcolor" 
        :variant="titleVarient"               
        >
        
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <!-- header title displayed -->
        <template v-if="title">
            <b-navbar-brand :href="title.link_to">          
                <b-nav-text>
                    <b>{{title.name}}</b>
                </b-nav-text>
            </b-navbar-brand>
        </template>     

        <b-collapse is-nav id="nav_collapse">

            <!-- Left aligned Nav Items -->
            <b-navbar-nav v-if="leftControls">
                <template v-for="(nav,index) in leftControls">
                    
                    <!-- Navigation Item -->
                    <b-nav-item
                        v-if="nav.type == 'link'"
                        :href="nav.link_to" 
                        :key="'nav-'+index"  @click="redirectTo(nav)">
                        <template v-if="nav.icon">
                            <icon :name="nav.icon" scale="2"></icon>
                        </template>
                        {{nav.label}}
                    </b-nav-item>

                    <!-- Dropdown -->
                    <b-nav-item-dropdown 
                        v-if="nav.type == 'dropdown'"
                        :text="nav.label" 
                        :key="'nav-'+index"
                        right>
                        <template v-for="(item,index) in nav.items">
                            <b-dropdown-item 
                                :href="item.link_to" @click="redirectTo(item)"
                                :key="'nav-item-'+index">
                                {{item.label}}
                            </b-dropdown-item>
                        </template>
                    </b-nav-item-dropdown>

                </template>
            </b-navbar-nav>

            <!-- Right aligned Nav Items -->
            <b-navbar-nav v-if="rightControls" class="ml-auto">
                <template v-for="(nav,index) in rightControls">
                    
                    <!-- Navigation Item -->
                    <b-nav-item
                        v-if="nav.type == 'link'"
                        :class="nav.class"
                        :href="nav.link_to" 
                        :key="'nav-'+index" @click="redirectTo(nav)">
                        <template v-if="nav.icon">
                            <icon :name="nav.icon" :size="24"></icon>
                        </template>
                        {{nav.label}}
                    </b-nav-item>

                    <!-- Dropdown -->
                    
                    <b-nav-item-dropdown 
                        v-if="nav.type == 'dropdown'"
                        :text="onCustomFunction(nav)" 
                        :key="'nav-'+index"
                        right>
                        <template v-for="(item,index) in nav.items">
                            <b-dropdown-item 
                                :href="item.link_to"
                                :key="'nav-item-'+index"  @click="redirectTo(item)">
                                {{item.label}}
                            </b-dropdown-item>
                        </template>
                    </b-nav-item-dropdown>

                </template>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>
<script>
    const prefixCls = 'appup-header';
    const acceptedStyles = ['primary', 'secondary', 'success', 'warning', 'danger'];
    const acceptedTextStyles = ['light', 'dark'];
    /**
     * Appup Header with capabilty to render controls either left or right or both
     * 
     * TODOs:
     * 
     * Actions for header controls
     * 
     * Icons are not aligned properly
     */
    export default {
        name: 'appup-header',
        components: { 
             
        },
        props: {
            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false
            },

            /**
             * Details of the title that should be shown on the extreme left
             * 
             * {
                    name: "",
                }
             */
            title: {
                type: Object,
                required: false                
            },           
            /**
             * Controls to be displayed on left-hand side of header
             * 
             * `
             * [
                    {
                        type: "link",
                        label: "Pages",
                        icon: "pages",
                        link_to: "#alert"
                    },
                    {
                        type: "link",
                        label: "Blocks",
                        icon: "dashboard",
                        link_to: "#code"
                    }
                ]
             * `
             */
            leftControls: {
                type: Array,
                required: false
            },

            /**
             * Controls to be displayed on right-hand side of header
             * 
             * `
             * [
                    {
                        type: "dropdown",
                        label: "Madan",
                        image: "http://agilecrm.dash.sweet-simple.com/assets/img/human01.jpg",
                        items: [
                            {
                                type: "link",
                                label: "Profile",
                                link_to: "#"
                            },
                            {
                                type: "link",
                                label: "Signout",
                                link_to: "#"
                            }
                        ]
                    }
                ]
             * `
             */
            rightControls: {
                type: Array,
                required: false
            },
            /**
             * Style varient of the navbar background color
             * 
             * `primary, seconday, success, warning, danger`
             */
            navbgcolor: {
                type: String,
                default: 'light'
            },
            /**
             * type of the navbar color
             * 
             * `light, dark`
             */
            textcolor: {
                type: String,
                default: 'light'
            }
        },
        data: function() {
            return {
                navItemActive: false,                
                titleVarient:
                _.indexOf(acceptedStyles, this.navbgcolor) != -1 ? this.navbgcolor : 'light',     
                titletextcolor:
                _.indexOf(acceptedTextStyles, this.textcolor) != -1 ? this.textcolor : 'light',     
           
            }
        },
        computed: {
            
        },
        methods: {
            onCustomFunction(item) {
                console.log(item)
                return this[item.function](item.label)
            },
            redirectTo(item) {
                console.log('redirectTo', item);
                if (item.function) {
                    this[item.function]
                }
                this.$router.push('/'+ item.link_to);
            },
            getLocalstorage(key) {
                return this.$localStorage.get(key);
            },
            getLabel(text) {
                return text
            },
            doLogout() {
                console.log('do logout')
                document.cookie = 'token=;JSESSIONID=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        }        
    };
</script>
<style lang="sass">
.text-decoration-underline
    text-decoration: underline
</style>
