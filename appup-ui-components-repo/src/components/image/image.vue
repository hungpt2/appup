<template>
    <b-img
        :id=id
        class="appup-image"
        :src=src
        :alt=alt
        :height=height
        :width=width
        :left=imgAlignmentLeft
        :right=imgAlignmentRight
        :center=imgAlignmentCenter
        :rounded=imgType
        :thumbnail=thumbnail
        @click="onImageClick(action, 0)" 
        :fluidGrow=imgAutoResize
        :fluid=fluid
        />
        
</template>
<script>
    import _ from 'lodash';
    import { Oauth } from "@/mixins/Oauth";
    import EventBus from '@/eventBus';

    /**
     * Appup Image
    */
    export default {
        name: 'appup-image',
        mixins: [Oauth],
        props: {
            /**
             * Id of Image elements.
             */
            id: {
                type: String,
                required: false
            },

            /**
             * src attribute for image
             */
            src: {
                type: String,
                required: true
            },
            /**
             * alt attribute for image
             */
            alt: {
                type: String,
                default:"",
                required: false
            },
            /**
             * Height of the image
             */
            height: {
                type: Number,
                required: true
            },
            /** 
             * Width of the image
             */
            width: {
                type: Number,
                required: true
            },
             
            /** 
             * alignment of image
             * 
             * 'left','center','right'
             */
            align: {
                type: String,
                default: null,
                required: false
            },
            
            /** 
             * Image type is circle,square,rounded
             */
            type: {
                type: String,
                default: null,
                required: false
            },    
            /**
             * Image full width
             *
             */    
            autoresize: {
                type: Boolean,
                default: null
            },  
            /**
             * Image is thumbnail or not
             */
            thumbnail: {
                type: Boolean,
                default: null
            }, 
            /**
             * Image is fluid or not
             */
            fluid: {
                type: Boolean,
                default: false
            },    
            /**
             * Action when click into Image
             */
            action: {
                type: Array,
                default: () => []
            },                 
        },
        data: function() {
            return {
                imgAlignmentLeft: this.align == 'left',
                imgAlignmentCenter: this.align == 'center',
                imgAlignmentRight: this.align == 'right',
                imgAutoResize : this.autoresize,
                imgType
                    : this.type =='rounded' ? 'rounded' 
                    : this.type =='circle' ? 'circle' 
                    : this.type =='square' ? 'square' 
                    :'',                                      
               }
        },
        computed: {
            
        },
        methods: {
           onImageClick (action, index) {
               if (action[index]) {
                if (action[index].type === 'ajax') {
                    EventBus.$emit('startLoading', true)
                } else {
                    EventBus.$emit('startLoading', false)
                }
                    switch (action[0].type) {
                            case "ajax":
                                console.log("ajax");
                                this.onAjax(
                                    action[index],
                                    index !== action.length - 1,
                                    index + 1
                                );
                                break;
                            case "navigate":
                                console.log("navigate");
                                this.onNavigate(
                                action[index],
                                index !== action.length - 1,
                                index + 1
                                );
                                break;
                    }
               }
            },
            onNavigate(path, callback, index) {
                if (path.data != null) {
                    this.$router.push("/" + path.data);
                }
            },
            onAjax(action, callback, index) {
                console.log(action);
                this[action.data.function](
                    action.data.url,
                    action.data.id,
                    action.success
                    ? this[action.success.function]
                    : callback ? this.onCustomClick : undefined,
                    action.error ? this[action.error] : undefined,
                );
            },
            openWindow(html) {
                console.log('open new window', window.document)
                window.document.body.innerHTML = html;
                EventBus.$emit('startLoading', false)
            }
        },          
    };
</script>
