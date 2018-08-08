<template>
    <!-- url="http://localhost:3000/datatable" -->
    <appup-grid
      id="1"
      label="name"
      description="description"
      image="picture"
      direction="center"
      :listItem="listItem"
      :actions="actions"
      :size="'large'"
    />  
</template>
<script>
export default {
    data () {
        return {
          actions: [{
            label: "Edit",
            title: "click to Edit",
            action: "modal",
            modal: "viewModal"
          }, {
            label: "Delete",
            title: "click to Delete",
            action: "navigate",
            url: ":/employee/edit"
          }],
          listItem: [
            {  
                "_id":"5ae7f4c39f66f39ebc573e32",
                "name":"MySQL",
                "picture":"http://placehold.it/32x32",
                "description":"Need to write some description here.",
                "registered":"2016-01-05T08:21:53 -06:-30",
                "buttons": [
                  {label: 'Show Plugins',variant: 'default',type: 'reset',action: {type: 'navigate',data: '/show-plugin'}},
                  {label: 'Add New',variant: 'primary',type: 'action',action: {type: 'navigate',data: '/add-new'}}, 
                ]
            },
            {  
                "_id":"5ae7f4c39f66f39ebc573e33",
                "name":"Oracle",
                "picture":"http://placehold.it/32x32",
                "description":"Need to write some description here.",
                "registered":"2016-01-05T08:21:53 -06:-30",
                "buttons": [
                  {label: 'Show Plugins',variant: 'default',type: 'reset',action: {type: 'navigate',data: '/show-plugin'}},
                  {label: 'Add New',variant: 'primary',type: 'action',action: {type: 'navigate',data: '/add-new'}}, 
                ]
            },
            {  
                "_id":"5ae7f4c39f66f39ebc573e34",
                "name":"DB2",
                "picture":"http://placehold.it/32x32",
                "description":"Need to write some description here.",
                "registered":"2016-01-05T08:21:53 -06:-30",
                "buttons": [
                  {label: 'Show Plugins',variant: 'default',type: 'reset',action: {type: 'navigate',data: '/show-plugin'}},
                  {label: 'Add New',variant: 'primary',type: 'action',action: {type: 'navigate',data: '/add-new'}}, 
                ]
            },
            {  
                "_id":"5ae7f4c39f66f39ebc573e34",
                "name":"DB2",
                "picture":"http://placehold.it/32x32",
                "description":"Need to write some description here.",
                "registered":"2016-01-05T08:21:53 -06:-30",
                "count": 123,
                "buttons": []
            }
          ]
        }
    },
    computed: {

    },
    methods: {
    
    }
}
</script>
