<template>
    <b-navbar 
        :id=id
        class="appup-navbar"
        toggleable="md" 
        type="light" 
        variant="light"
    >
        
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <!-- Brand Information displayed on extreme right -->
        <template v-if="brandInfo">
            <b-navbar-brand :href="brandInfo.link_to">
                <img 
                    v-if="brandInfo.image"
                    :src="brandInfo.image"
                    :alt="brandInfo.image_alt" 
                    height="30" 
                    class="d-inline-block align-top"/>                
                {{brandInfo.name}}
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
                        :key="'nav-'+index">
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
                                :href="item.link_to"
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
                        :href="nav.link_to" 
                        :key="'nav-'+index">
                        <template v-if="nav.icon">
                            <vue-material-icon :name="nav.icon" :size="24"></vue-material-icon>
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
                                :href="item.link_to"
                                :key="'nav-item-'+index">
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
    const prefixCls = 'appup-navbar';

    /**
     * Appup Navbar with capabilty to render controls either left or right or both
     * 
     * TODOs:
     * 
     * Actions for navbar controls
     * 
     * Icons are not aligned properly
     */
    export default {
        name: 'appup-navbar',
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
             * Details of the brand that should be shown on the extreme left
             * 
             * {
                    name: "",
                    link_to: "#",
                    image: "https://www.agilecrm.com/img/agilecrmlogo.svg",
                    image_alt: "Agile CRM"
                }
             */
            brandInfo: {
                type: Object,
                required: false                
            },

            /**
             * Controls to be displayed on left-hand side of navigation
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
             * Controls to be displayed on right-hand side of navigation
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
        },
        data: function() {
            return {
                navItemActive: false
            }
        },
        computed: {
            
        },
        methods: {
            
        }        
    };
</script>
