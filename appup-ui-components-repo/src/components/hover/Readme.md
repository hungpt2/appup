###### Image hovering 

```vue
<template>
    <div class="row">
        <div class="col-md-4">      
            <appup-hover 
                :items="items_data"
                :src="src" 
                :label="label" 
                :icon="icon"
            />
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           src:"http://localhost:3000/CreditCard.png",
           items_data:[
                    {label: "edit Information",
                    icon: "edit"},
                    {label: "delete card",
                    icon: "trash"}
           ]
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>
```