<template>
    <div>
        <appup-carousel 
            :options="carouselOptions" 
            :data=data
            :height=200>      
        </appup-carousel>
    </div>
</template>
<script>
import { Carousel } from 'appup';
export default {
    components: { Carousel },
    data () {
        return {
            carouselOptions: {
                draggable: true,               
                prevNextButtons: true,
                pageDots: true,
                autoPlay: false,
                imagesLoaded: true                                         
            },
            data:[{
               src: 'http://0.0.0.0:3000/profilepic.jpg'
            },
            {
               src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg'
            },
            {
               src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg'
            },
            {
               src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg'
            },
            {
               src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg'
            },
            {
               src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg'
            },
            {
               src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg'
            }]
        }
    },
    computed: {
        
    },
    methods: {
    
    }
};
</script>