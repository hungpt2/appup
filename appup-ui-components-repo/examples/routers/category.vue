<template>
 <appup-category :microapps="microapps"/>
</template>
<script>
import { Category } from 'appup';
export default {
    components: { Category },
    data () {
        return {
             microapps:[
                    {
                        name: 'Default Cloud App',
                        url: 'appid1.appup.com',
                        items:[
                        {
                            name: "Contacts",
                            src: "http://localhost:3000/profilepic.jpg"
                        },
                        {
                            name: "Deals",
                            src: "http://localhost:3000/profilepic.jpg"
                        },
                        {
                            name: "Contacts2",
                            src: "http://localhost:3000/profilepic.jpg"
                        }
                     ]
                    }
                ]
        }
    },
    computed: {
        
    },
    methods: {
    
    }
};
</script>