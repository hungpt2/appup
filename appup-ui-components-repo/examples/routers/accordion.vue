<template>
    <appup-accordion
        :items=items >
        <div v-for="(item, index) in items" :key="index" :slot="item.id">
          <component 
            :id="item.id" 
            :is="item.content.type" 
            v-bind="item.content.schema">
          </component>
        </div>
    </appup-accordion>
</template>
<script>
export default {
    data () {
        return {
          items:[
            {
              id: '1',
              label:'Accordion 1',
              content: {
                type: 'appup-form',
                schema: {
                  position: "bottom",
                  direction: "center",
                  formFields: [
                    {
                      id: 20,
                      type: 'text',
                      name: 'text',
                      label: 'Input Text',
                      placeholder: 'Enter Text',
                      required: true,
                      minLength: 6,
                      maxLength: 10
                    },
                    {
                      id: 40,
                      type: 'dropdown',
                      name: 'dropdown',
                      label: 'Dropdown',
                      option: [
                        { value: null, label: 'Please select an option' },
                        { value: 'a', label: 'This is First option' },
                        { value: 'b', label: 'Selected Option' },
                        { value: 'c', label: 'This is an option with object value' },
                        { value: 'd', label: 'This one is disabled', disabled: true }
                      ],
                      required: true
                    },
                    {
                      id: 50,
                      type: 'checkbox',
                      name: 'checkbox',
                      label: 'Checkbox',
                      option: [
                        {label: 'Orange', value: 'orange'},
                        {label: 'Apple', value: 'apple'},
                        {label: 'Pineapple', value: 'pineapple'},
                        {label: 'Grape', value: 'grape', disabled: true}
                      ],
                      required: true
                    }
                  ],
                  buttons: [
                    {
                      label: 'Submit',
                      variant: 'primary',
                      type: 'submit',
                      function: 'onSubmit'
                    },
                    {
                      label: 'Reset',
                      variant: 'danger',
                      type: 'reset',
                      function: 'onReset'
                    }
                  ]
                }
              }
            },
            {
              id: '2',
              label:'Accordion 2',
              content: {
                type: 'appup-datatable',
                schema: {
                  url: "http://localhost:3000/datatable",
                  columns:[/*{
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
          ]
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>
