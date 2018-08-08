<template>
    <div>
        Type: tab - Position: TOP
        <appup-tabs :items="items"
                    justified = justified
                    :position=position
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        <appup-tabs :items="items"
                    justifyContent = 'start'
                    :position=position
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        <appup-tabs :items="items"
                    justifyContent = 'end'
                    :position=position
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        <appup-tabs :items="items"
                    justifyContent = 'center'
                    :position=position
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        <appup-tabs :items="items"
                    justifyContent = 'between'
                    :position=position
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        <appup-tabs :items="items"
                    justifyContent = 'around'
                    :position=position
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        Type: tab - Position: LEFT
        <appup-tabs :items="items"
                    position= 'left'
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        Type: tab - Position: RIGHT
        <appup-tabs :items="items"
                    position= 'right'
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        Type: tab - Position: BOTTOM
        <appup-tabs :items="items"
                    position= 'bottom'
                    :type=type
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        Type: button - Position: top
        <appup-tabs :items="items"
                    position= 'top'
                    type='tab'
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        Type: button - Position: LEFT
        <appup-tabs :items="items"
                    position= 'left'
                    type='tab'
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        Type: button - Position: RIGHT
        <appup-tabs :items="items"
                    position= 'right'
                    type='tab'
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
        Type: button - Position: BOTTOM
        <appup-tabs :items="items"
                    position= 'bottom'
                    type='tab'
                    :setWidth=setWidth
                    :activeClass=activeClass
                    :deactiveClass=deactiveClass
                    >
            <div v-for="(tab, index) in items" :key="index" :slot="tab.id">
                <appup-form v-bind="tab.content"/>
            </div>
        </appup-tabs>
        <br>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeClass: ['active'],
            deactiveClass: [],
            type: 'button',
            position: 'top',
            setWidth:'w-20',
            justified: true,
            justifyContent: 'start',
            items: [
                {
                    id:'a',
                    title: 'Tab a',
                    active: true,
                    content: {
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
                },
                {
                    id:'b',
                    title: 'Tab b',
                    active: false,
                    content: {
                        formFields: [
                            {
                                id: 21,
                                type: 'text',
                                name: 'text',
                                label: 'Input Text',
                                placeholder: 'Enter Text',
                                required: true,
                                minLength: 6,
                                maxLength: 10
                            },
                            {
                                id: 21,
                                type: 'editor',
                                name: 'editor',
                                label: 'Input Editor',
                                placeholder: 'Enter Text',
                                required: true
                            }
                        ]
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
