<template>
  <star-rating 
        :increment="starIncrement"
        :max-rating="startRatingCount"
        :inactive-color="starInActiveColor"
        :active-color="starActiveColor"
        :star-size="starFontSize">
</star-rating>
</template>
<script>
    /**
     * Appup Star component which can be used to rating
     */
    export default {
        name: 'appup-star',
        props: {

            /**
             * Id of star component
             */
            id: {
                type: String,
                required: false,
            },
            /**
             * The rating increment, 
             * for example pass 0.5 for half stars or 0.01 for fluid stars.
             * Expects a number between 0.01 - 1.
             */
            increment: {
                type: String,
                required: false,
            },
            /**
             * The maximum rating,how many stars to display
             */
            maxRating: {
                type: String,
                required: false,
            },
            /**
             * The color of the non-highlighted portion of a star.
             */
            inActiveColor: {
                type: String,
                required: false,
                default:''
            },
            /**
             * The color of the highlighted portion of a star.
             */
            activeColor: {
                type: String,
                required: false,
                default: ''
            },
            /**
             * The size of each star, this gets passed to the SVG width attribute, so larger numbers are larger stars
             */
            starSize: {
                type: String,
                required: false,
                deafault:''
            }
        },
        mounted() {
        },
        data: function() {
            return {
                starIncrement: 0.5,
                startRatingCount:5,
                starFontSize: 20,
                starInActiveColor: "#ddd",
                starActiveColor: "#000"
            }
        },
        methods: {
         
        },
    };
</script>
