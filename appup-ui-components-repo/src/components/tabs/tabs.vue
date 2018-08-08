<template>
    <div class="appup-tabs">
        <b-card no-body>
            <b-tabs card :pills=pills :vertical=vertical :end=end 
                :class="{'nav-justified': justified === true}"
                :nav-class = justify_content
                :nav-wrapper-class=setWidth v-model="tabIndex">

                <!-- Render Tabs -->
                <!-- :title-link-class="linkClass(index)" -->
                <b-tab :title="tab.title" v-for="(tab, index) in listTab" :key="index" :disabled="tab.disabled">
                    <slot :name="tab.id"></slot>
                    <slot></slot>
                </b-tab>

                <!-- Render this if no tabs -->
                <div slot="empty" class="text-center text-muted">
                    There are no open tabs
                </div>
            </b-tabs>
        </b-card>
    </div>
</template>
<script>

    /**
     * Tab component to group content with only one displayed at a time
     */
    export default {
        name: 'appup-tabs',
        props: {
            /**
             * Items are array of objects which should be displayed as tabs with content within them.
             * 
             * Content within an Item should be appup-form
             * 
            */
            items: {
                required: true,
            },
            
            /**
             * Setup position of menu
             * 
             * `top, bottom, left, right`
             */
            position: {
                required: false,
                default: 'top'
            },
            /**
             * Set style of tab button
             * 
             * `tab, button`
             */
            type: {
                required: false
            },
            /**
             * Set width for tab menu
             *
             * `w-25, w-50`
             */
            setWidth: {
                required: false
            },
            /**
             * Set css justified for tab header
             *
             * `true, false`
             */
            justified: {
                type: Boolean,
                required: false
            },
            /**
             * Set css justified for tab header
             *
             * `start, end, center, between, around`
             */
            justifyContent: {
                type: String,
                required: false
            },
            /**
             * Set custom active class
             */
            // activeClass: {
            //     required: false,
            //     default: ['active']
            // },
            /**
             * Set custom deactive class
             */
            // deactiveClass: {
            //     required: false,
            //     default: ['']
            // }
        },
        data: function() {
            return {
                tabIndex: 0,
                listTab: this.items,
                end: this.position === 'bottom' || this.position === 'right' ? true : false,
                vertical: this.position === 'left' || this.position === 'right' ? true : false,
                pills: this.type === 'button',
                justify_content: 'justify-content-' + this.justifyContent
            }
        },
        computed: {
        },
        mounted: function() {
            let $s = this;
            $s.listTab.forEach((item,index) => {
                if (item.active) {
                    return this.tabIndex = index
                }
            })
        },
        methods: {
            // linkClass (idx) {
            //     if (this.tabIndex === idx) {
            //         return this.activeClass
            //     } else {
            //         return this.deactiveClass
            //     }
            // },
            activeTab () {
                
            }
        },
        components: {
        }
    };
</script>
