<template>
    <div>
        <appup-breadcrumbs :items="items" />
    </div>
</template>
<script>
import { Breadcrumbs } from 'appup';
export default {
    components: { Breadcrumbs },
    data () {
        return {
            items: [{
                text: 'Admin',
                href: '#'
            }, {
                text: 'Manage',
                href: '#'
            }, {
                text: 'Library',
                active: true
            }]
        }
    },
    computed: {
        
    },
    methods: {
    
    }
};
</script>