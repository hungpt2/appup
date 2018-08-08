<template>
    <div class="center appup-imageupload">
        <div class="pb-2 text-center">
            <b-img
                :id="id+'_img'"
                :src=src 
                rounded="circle" 
                :width=imageSize
                :height=imageSize
            />
        </div>
        <div class="pb-2 text-center">
            <vue-core-image-upload
                :id=id
                class="btn appup-button btn-primary btn-sm"
                @imageuploaded="imageuploaded"
                :max-file-size="5242880"
                :url=url
                :text=label>
            </vue-core-image-upload>
        </div>
    </div>
    
</template>
<script>
    /**
     * Appup Image Uploader - Can upload an image to the provided url
     * 
     */
    const imageSizes = {
        ssmall: 32,
        small: 48,
        smedium: 64,
        medium:80,
        slarge:96,
        large: 112,
        xlarge: 128
    }

    export default {
        name: 'appup-imageupload',
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
             * Id of input elements.
             */
            label: {
                type: String,
                required: true
            },

            /**
             * Value for v-model binding. Not to be binded directly
             */
            value: {
                required: false
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
            },

            /**
             * Initial image that should be displayed when the component loads
             */
            initialImage: {
                type: String,
                default:'',
                required: true
            },

            /**
             * URL which should be invoked when the image is uploaded
             */
            url: {
                type: String,
                required: true
            }

        },
        data: function() {
            return {
                src: this.initialImage,
                imageSize: imageSizes[this.size]
            }
        },
        created: function() {
        
        },
        computed: {
            
        },
        methods: {
            imageuploaded(res) {
                console.log("===> response ::", res);
                try {
                    this.src = res.src;
                }
                catch(err) {
                    console.log("===> Error occurred");
                }
            }
        }
    };
</script>