<template>
    <div class="row">
        <template v-for="(item, index) in data">
            <div class="no-padding" :key="index" :class="{'col-sm-6 col-md-4 col-lg-3': size==='medium',
                                                                                        'col-sm-6 col-md-4 col-lg-2': size==='small',
                                                                                        'col-sm-12 col-md-6 col-lg-4': size==='large', }">
                <div class="appup-grid-item">      
                    <!-- <div class="row card-header">
                        <div class="col-sm-8 no-padding">
                            <h5>{{getLabel(item)}}</h5>
                        </div>
                        <div class="col-sm-4 no-padding" v-if="actions && actions.length > 0">
                            <b-dropdown id="ddown1" text="...">
                                <template v-for="(action, actionKey) in actions" >
                                    <b-dropdown-item :key="actionKey">{{action.label}}</b-dropdown-item>
                                </template>
                            </b-dropdown>
                        </div> 
                    </div> -->
                    <div class="card-content">
                        <div class="text-center">
                            <div class="w-100" v-if="item.count">
                                <div class="border width-fit p-1 rounded float-right">{{item.count}}</div>
                                <div class="clearfix"></div>
                            </div>
                            <appup-image class="mb-2" :src="getUrl(item)" :width="40" :height="40" :class="item.count?'margin-top-negative-18':'mt-3'"/>
                            <h5>{{getLabel(item)}}</h5>
                            <p class="mb-1">{{getDescription(item)}}</p>
                            <p>{{getFullDescription(item)}}</p>
                            <div v-if="item.buttons" class="mb-2 grid-buttons" :class="{'text-center': direction=='center',
                                    'text-left': direction=='left',
                                    'text-right': direction=='right'}">
                                <b-button class="mr-3" v-for="(btn, index) in item.buttons" size="sm" :key="`btn-bottom-${index}`" :type="btn.type" :variant="btn.variant"
                                @click="onCustomClick(btn)">{{btn.label}}</b-button>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { AjaxRequests } from "@/mixins/ajaxRequests";
/**
 * Appup Gridview component which can be used to display Grid items
 */
export default {
    name: 'appup-grid',
    mixins: [AjaxRequests],
    props: {
        /**
         * Id of grid
         */
        id: {
            type: String,
            required: false
        },
        /**
         * image for grid item in header
         */
        image: {
            type: String,
            required: false
        },
        /**
         * label for grid item in header
         */
        label: {
            type: String,
            required: false,
            default: 'label'
        },
        /**
         * Description for Grid item
         */
        description: {
            type: String,
            required: false,
            default: 'description'
        },
        /**
         * Full Description for Grid item
         */
        fullDescription: {
            type: String,
            required: false,
            default: 'fullDescription'
        },
        /**
         * Reference for grid item
         */
        reference: {
            type: String,
            required: false
        },
        /**
         * Fetch data with url
         */
        url: {
            type: String,
            required: false
        },
        /**
         * Position of butons template
         */
        direction: {
            type: String,
            required: false
        },
        /**
         * Action items for grid item
         * 
         * 'view','edit','delete'
         */
        actions: {
            type: Array,
            required: false
        },
        /**
         * List items for grid item
         * 
         * 'view','edit','delete'
         */
        listItem: {
            type: Array,
            required: false
        },

        /**
         * Size of items for grid item
         * 
         * 'small','medium','large'
         */
        size: {
            type: String,
            required: false,
            default: 'medium'
        },
    },
    components: {
     
    },
    data() {
        return {
            data: []       
        }
    },
    methods: {
        getLabel: function(item) {
            return item[this.label]
        },

        getDescription: function(item) {
            return item[this.description]
        },

        getFullDescription: function(item) {
            return item[this.fullDescription]
        },

        getReference: function(item) {
            return item[this.reference]
        },

        getUrl: function(item) {
            return item[this.image]
        },

        onCustomClick(button) {
            if (button.action) {
                switch (button.action.type) {
                    case 'navigate':
                        this.onNavigate( button.action.data);
                        break;
                }
            }
        },
        onNavigate (navigate) {
            console.log('navigate', navigate)
            this.$router.push('/' + navigate)
        },
    },
    beforeMount() {
   
    },
    mounted() {
        if (this.url) {
            //console.log("===> url ", this.url)        
            this.getData(this.url, null, response => {
                console.log("=====> response :: ", response);
                console.log("==> response from url", response.data)
                return this.data = response.data
            });
        } else {
            this.data = this.listItem
        }
    }
}
</script>
<style src="@/styles/components/grid.scss" lang="scss"></style>
