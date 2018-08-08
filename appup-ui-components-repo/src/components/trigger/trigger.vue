<template>
    <div class="trigger">
        <div class="text-left" v-if="title">
            <h5 class="font-weight-bold ml-3">{{title}}</h5>
        </div>
        <div class="row">
            <template v-for="(item, index) in listItem">
                <div class="no-padding" :key="index" :class="{'col-sm-6 col-md-4 col-lg-3': size==='medium',
                                                                                            'col-sm-6 col-md-4 col-lg-2': size==='small',
                                                                                            'col-sm-12 col-md-6 col-lg-4': size==='large', }">
                    <div class="appup-trigger-item rounded border m-2">      
                        <div class="card-content">
                            <div class="">
                                <div class="w-100">
                                    <div class="float-left text-truncate w-75">
                                        <div class="d-flex">
                                            <div class="mr-2" v-if="item.iconTitle">
                                                <appup-icon :name="item.iconTitle" :size="12" />
                                            </div>
                                            <h5 class="mb-0 text-truncate">{{item.titleCard}}</h5>
                                            <div class="ml-2 pt-1" v-if="item.switch">
                                                <appup-switch />
                                            </div>
                                        </div>
                                        <template v-for="(text, i) in item.detailTitle">
                                            <div :key="i">
                                                <small >{{text}}</small>
                                            </div>
                                        </template>
                                    </div>
                                    <div class="float-right d-flex">
                                        <div class="mr-2" v-if="item.refresh">
                                            <appup-icon :name="'sync'" :size="12" />
                                        </div>
                                        <appup-button-dropdown :id="'dropdown-button'"
                                        :listItem="item.dropdown" 
                                        :iconBtnText="'ellipsis-h'" :sizeIcon="13"
                                        :classBtnDropdown="'btn-light'" :variant="'light'"  />
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="d-flex mt-3" v-if="item.contact">
                                    <div class="mr-2">
                                        <appup-icon :name="item.iconContact" :size="12" />
                                    </div>
                                    <div>
                                        <p class="mb-0">{{item.contact}}</p>
                                    </div>
                                </div>
                                <div class="w-100 mb-2" :class="item.contact?'':'mt-2'">
                                    <div class="float-left text-truncate" :class="item.iconTitle?'w-75':'w-100'">
                                        <small>{{item.time}}</small>
                                    </div>
                                    <div class="float-right" v-if="item.iconTitle">
                                        <div class="pl-1 pr-1 border">{{item.associated}}</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    /**
     * Appup trigger component which can be used to display success error messages
     */
    export default {
        name: 'appup-trigger',
        props: {

            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false,
            },

            /**
             * Size of items for grid item
             * 
             * 'small','medium','large'
             */
            size: {
                type: String,
                required: false,
                default: 'large'
            },

            /**
             * List items of trigger card
             * 
             */
            listItem: {
                type: Array,
                required: true,
                default: []
            },

            /**
             * Title of trigger card
             * 
             */
            title: {
                type: String,
                required: false
            },

        },

        data: function() {
            return {
            }
        },
        methods: {

        },
    };
</script>
<style>
.trigger #dropdown-button {
    margin: 0 !important;
}
.trigger #dropdown-button button {
    padding: 0 0.3rem 0 0.5rem !important;
}
.trigger .dropdown-toggle::after {
    display:none;
}
</style>

