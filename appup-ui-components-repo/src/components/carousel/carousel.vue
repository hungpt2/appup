<template>
    <div>
        <flickity 
            :options="carouselOptions">
            <template v-for="(item,index) in data">
                <div class="carousel-cell" :key="index">
                    <img :src="item.src" :height=height /> 
                </div>                 
            </template>
        </flickity>
    </div>
</template>
<script>
import Flickity from 'vue-flickity'
    /**
     * Appup Carousel using Images
     * 
     */
    export default {
        name: 'appup-carousel',
        components: {  
            Flickity   
        },
        props: {
            /**
             * Id of the carousel element
             */
            id:{
                type: String,
                default: ''
            },
            /**
             * Draggable is true or false
             */
            draggable: {
                type: Boolean,
                required: false
            },
            /**
             * Creates and enables previous & next buttons
             */
            prevNextButtons: {
                type: Boolean,       
            },
            /**
             * Creates and enables page dots
             */
            pageDots: {
                type: Boolean,          
            },
            /**
             * Auto play carousel
             */
            autoPlay: {
                type: Boolean,
            },
            /**
             * Images loaded in carousel
             */
            imagesLoaded: {
                type: Boolean,
                required: false
            },
            
           /**
             * src attribute for image
             */
            src: {
                type: String,
                required: false
            },
            /**
            * Fetch data 
            */
            data:{
                type: Array,
                required: false,
                default:''
            
            },
            /**
            *Height of the image
            */
            height: {
                type: Number,
                default: ''
            },
            /**
             * Options to be displayed for carousel
             */
            options: {
                type: Object,
                default: ''
            }           
        },
        data: function() {
            return {
                carouselOptions: this.options,
                carouselOption: {
                    draggable: this.draggable,                   
                    prevNextButtons: this.prevNextButtons,
                    pageDots: this.pageDots,
                    autoPlay: this.autoPlay,
                    imagesLoaded: this.imagesLoaded   
                },                                       
            }
        },
        computed: {
        },       
        mounted() {           
        },
        methods: {           
        }        
    }
</script>