###### Show Datatable
```vue
<template>
    <div>
        <appup-datatable :url=url
        :columns= config></appup-datatable>
    </div>
</template>
<script>
export default {
    data () {
        return {
            url: "http://127.0.0.1:3000/datatable",
            config:/*{
                    name: "Picture",
                    field: "picture",
                    type: "image"
                },*/
                {
                    name: "First Name", 
                    field: "first_name", 
                    type: "text"
                },{
                    name: "Last Name", 
                    field: "last_name", 
                    type: "text"
                },{
                    name: "Age",
                    field: "age",
                    type: "number"
                },{
                    name: "Gender",
                    field: "gender",
                    type: "text"
                },{
                    name: "Department",
                    field: "department",
                    type: "text"
                },{
                    name: "Email",
                    field: "email",
                    type: "text"
                },{
                    name: "Phone",
                    field: "phone",
                    type: "text"
                },{
                    name: "Address",
                    field: "address",
                    type: "text"
                },{
                    name: "Status",
                    field: "isActive",
                    type: "text"
                }
            ]
        }
    }
}
</script>
```
