<template>
    <div class="appup-timeago">
        <template v-if="moreThenYear || notValidDatetime">
            {{datetime}}
        </template>
        <template v-else>
            <vue-timeago 
                :since="providedDatetime"                
                :auto-update=autoupdate
                :max-update=maxAutoUpdate
            >
                {{providedDatetime}}
            </vue-timeago>
        </template>
    </div>    
</template>
<script>

    import moment from 'moment'

    /**
     * Appup Timeago
     * 
     */
    export default {
        name: 'appup-timeago',
        components: { 
             
        },
        props: {
           /**
             * datetime in DD/MM/yyyy HH:mm:ss format
            */            
             datetime: {
                type: String,
                required: true,
                default: ''                
             },

            /**
             * Format in which datetime is provided.
             * 
             * <b>Note: </b> Component will not render proper output if format provided doesn't match with the provided datetime
             */
             format: {
                type: String,
                required: false,
                default: 'DD/MM/YYYY HH:mm:ss'
             },

            /**
             * Seconds after which the component will be refereshed and shows updated timeago
             */
             autoupdate: {
                 type: Number,
                 required: false,
                 default: 60,
             },

            /**
             * Max seconds after which component will not be refreshed to show the updated timeago
             */
             maxAutoUpdate: {
                 type: Number,
                 required: false,
                 default: 300
             }
         
        },
       created() {           
        },
        data: function() {           
            return{
                moreThenYear:
                    moment().diff(moment(this.datetime, this.format), 'year') >= 1 
                    ? true : false,
                notValidDatetime:
                    moment(this.datetime, this.format).diff(moment()) > 0
                    ? true : false,
                providedDatetime: 
                    moment(this.datetime, this.format)
            }
        },
        computed: {
            
        },
        methods: {
            
        }        
    };
</script>
