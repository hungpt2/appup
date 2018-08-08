<template>
    <b-img
        :id=id
        class="appup-avatar"
        :src=src 
        rounded="circle" 
        :width=imageSize 
        :height=imageSize
    />
</template>
<script>
    import _ from 'lodash';
    
    const imageSizes = {
        ssmall: 32,
        small: 48,
        smedium: 64,
        medium:80,
        slarge:96,
        large: 112,
        xlarge: 128
    }
    /**
     * Appup Avatar
    */
    export default {
        name: 'appup-avatar',
        components: { 
             
        },
        props: {
            /**
             * Id of avatar
             */
            id: {
                type: String,
                required: false
            },

            /**
             * image url for avatar
             */
            src: {
                type: String,
                required: true
            },
            /**
             * size of the avatar
             * 
             * `ssmall, small, smedium, medium, slarge, large, xlarge`
             */
            size: {
                type: String,
                default:'medium',
                required: false
            }                  
        },
        data: function() {
            return {
                imageSize: imageSizes[this.size],
            }
        },
        computed: {
            
        },
        methods: {
           
        }
    };
</script>
