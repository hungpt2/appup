<template>
    <timeline timeline-theme="lightblue" class="appup-timeline">
        <template v-for="(timeline,index) in timelines">
            <timeline-title
                v-if="timeline.type == 'title'" 
                :key=index
                :color="timeline.color ? timeline.color : null"
                :title="timeline.tooltip"
                >
                <template v-if="timeline.image">
                    <img 
                        :src="timeline.image" 
                        slot="others"
                        class="timeline-image">
                </template>

                <template v-if="timeline.html">
                    <appup-html :content="timeline.message"/>
                </template>
                <template v-else>
                    {{timeline.message}}
                </template>
                
            </timeline-title>
            <timeline-item
                v-if="timeline.type == 'item'" 
                :key=index
                :color="timeline.color ? timeline.color : null"
                :title="timeline.tooltip"
                >
                <template v-if="timeline.image">
                    <img 
                        :src="timeline.image" 
                        slot="others"
                        class="timeline-image">
                </template>
                
                <template v-if="timeline.html">
                    <appup-html :content="timeline.message"/>
                </template>
                <template v-else>
                    {{timeline.message}}
                </template>

            </timeline-item>
        </template>
    </timeline>
</template>
<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';

/**
 * Component to display provided timeline data in vertical timeline format
 */
export default {
    name: 'appup-timeline',
    components: { 
        Timeline,
        TimelineItem,
        TimelineTitle
    },
    props: {

        /**
         * JSON Array with object containing type, message, color, tooltip
         *
         * Type should be one of these - `title, item`
         * 
         * title - will be displayed in bold and in bigger font
         * item - will be displayed in smaller font compared to title
         * 
         * Sample Schema
         * `
         * {
         *   type: 'title|item',
         *   message:'plaintext | html',
         *   tooltip: 'Tooltip to be displayed on hover',
         *   color: 'colorcode',
         *   html: true|false,
         *   image: 'image http url'
         * }
         * `
         */
        timelines: {
            type: Array,
            required: true

        }                                 
    },
    created() {           
    },
    data: function() {           
        return{
            
        }
    },
    computed: {
        
    },
    methods: {
        
    }        
}
</script>

<style>
.timeline-image {
    width: 20px;
}
</style>
