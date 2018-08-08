<template>
    <div>
        <b-dropdown :id="id" :text="label" class="m-md-2" :class="classBtnDropdown" :variant="variant" :right="right">
            <template slot="button-content" v-if="type==='text'&&iconBtnText">
                <appup-icon :name="iconBtnText" :size="sizeIcon" class="mr-1" />
                    <span>{{label}}</span>
            </template>
            <template slot="button-content" v-if="type==='image'">
                <appup-image 
                    :src="img.src"
                    :alt="img.alt"
                    :height=100
                    :width=100
                    align="center" /> 
                    <div class="text-center mt-2">{{label}}</div>
            </template>
            <span v-for="(item, index) in listItem" :key="index">
                <b-dropdown-item v-if="item.type==='item'" :disabled="item.disabled">
                    <appup-icon :name="item.icon" :size="14" class="mr-1" />
                    <span>{{item.label}}</span>
                </b-dropdown-item>
                <b-dropdown-item v-if="item.type==='item-image'" :disabled="item.disabled">
                    <appup-image 
                        :src="item.src"
                        :alt="item.alt"
                        :height=100
                        :width=100
                        align="center" /> 
                    <div class="text-center mt-2">{{item.label}}</div>
                </b-dropdown-item>
                <b-dropdown-divider v-if="item.type==='line'"></b-dropdown-divider>
            </span>
        </b-dropdown>
        <div class="clearfix"></div>
    </div>
</template>
<script>
    /**
     * Appup Dropdown component which can be used to display success error messages
     */
    export default {
        name: 'appup-button-dropdown',
        props: {

            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false,
                default: 'dropdown-item'
            },

            /**
             * Label of button dropdown.
             */
            label: {
                type: String,
                required: false
            },

            /**
             * List item of dropdown menu.
             */
            listItem: {
                type: Array,
                required: true
            },

            /**
             * List item of dropdown menu.
             */
            classBtnDropdown: {
                type: String,
                required: false
            },

            /**
             * List item of dropdown menu.
             */
            variant: {
                type: String,
                required: false
            },

            /**
             * Position right of dropdown menu.
             */
            right: {
                type: Boolean,
                required: false,
                default: false
            },

            /**
             * Type of label dropdown.
             */
            type: {
                type: String,
                required: false,
                default: 'text'
            },

            /**
             * Infomation of image content.
             */
            img: {
                type: Object,
                required: false,
            },
            
            /**
             * Icon button text.
             */
            iconBtnText: {
                type: String,
                required: false,
                default: 'ellipsis-h'
            },

            /**
             * Size icon button text.
             */
            sizeIcon: {
                required: false,
                default: 14
            },
        },
        mounted() {
        },
        data: function() {
            return {
            }
        },
        methods: {

        },
    };
</script>
