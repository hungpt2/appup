<template>
    <div>
        <div class="card">
            <div class="card-header">
                <center><h5>Form with All Input fields</h5></center>
            </div>
            <div class="card-body">            
                <appup-form
                    :formFields="formFields"
                    :position="position"
                    :direction="direction"
                    :buttons="buttons"
                />
            </div>
        </div>         
        <br>
        <div class="card">
            <div class="card-header">
                <center><h5>Buttons position: bottom, direction: right</h5></center>
            </div>
            <div class="card-body">
                <appup-form
                    :formFields="formFieldsExpPostionBtn.field"
                    position="top"
                    direction="right"
                    :buttons="formFieldsExpPostionBtn.buttons"
                />
            </div>
        </div>
        <br/>
        <div class="card">
            <div class="card-header">
                <center><h5>Buttons position: top, direction: right</h5></center>
            </div>
            <div class="card-body">
                <appup-form
                    :formFields="formFieldsExpPostionBtn.field"
                    position="bottom"
                    direction="right"
                    :buttons="formFieldsExpPostionBtn.buttons"
                />
            </div>
        </div>
        <br/>
        <div class="card">
            <div class="card-header">
                <center><h5>Options for Position & Direction</h5></center>
            </div>
            <div class="card-body">
                <p> Button Position (top, bottom) & Direction (left, center, right) can be provided accordinly </p>
            </div>
        </div>
    </div>
</template>
<script>
import { Form } from 'appup';
export default {
    components: { Form },
    data () {
        return {
            position: "bottom",
            direction: "center",
            formFields: [
                {
                    id: 10,
                    type: 'text',
                    name: 'name',
                    label: 'Name',
                    placeholder: 'Enter Name',
                    required: true
                },
                {
                    id: 20,
                    type: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'Enter Email',
                    required: true
                },
                {
                    id: 40,
                    type: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Enter Password',
                    required: true,
                    minLength: 6,
                    maxLength: 10
                },
                {
                    id: 40,
                    type: 'number',
                    name: 'age',
                    label: 'Age',
                    placeholder: 'Enter Age',
                    required: true,
                    min: 18,
                    max: 99
                },
                {
                    id: 50,
                    type: 'dropdown',
                    name: 'dropdown',
                    label: 'Dropdown',
                    url: 'appup-url',
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
                    id: 60,
                    type: 'dropdown',
                    name: 'dropdownDynamic',
                    label: 'Dropdown with Options from url',
                    url:'http://localhost:3000/dropdown',
                    required: true
                },
                {
                    id: 70,
                    type: 'multiselect',
                    name: 'multiselect',
                    label: 'Multiselect',
                    option: [
                        { value: null, label: 'Please select an option' },
                        { value: 'js', label: 'Javascript' },
                        { value: 'java', label: 'Java' },
                        { value: 'ruby', label: 'Ruby' },
                        { value: 'php', label: 'PHP', disabled: true }
                    ],
                    required: true
                },
                {
                    id: 80,
                    type: 'multiselect',
                    name: 'multiselectDynamic',
                    label: 'Multiselect with Options from url',
                    url:'http://localhost:3000/dropdown',
                    required: true
                },
                {
                    id: 90,
                    type: 'tags',
                    name: 'tags',
                    label: 'Tags Input',
                    option: [
                        { value: null, label: 'Please select an option' },
                        { value: 'js', label: 'Javascript' },
                        { value: 'java', label: 'Java' },
                        { value: 'ruby', label: 'Ruby' },
                        { value: 'php', label: 'PHP', disabled: true }
                    ],
                    required: true
                },
                {
                    id: 100,
                    type: 'tags',
                    name: 'tagsDynamic',
                    label: 'Tags input with Options from url',
                    url:'http://localhost:3000/dropdown',
                    required: true
                },
                {
                    id: 110,
                    type: 'checkbox',
                    name: 'Checkbox',
                    addElement: false,
                    label: 'Checkbox',
                    option: [
                        {label: 'Orange', value: 'orange'},
                        {label: 'Apple', value: 'apple'},
                        {label: 'Pineapple', value: 'pineapple'},
                        {label: 'Grape', value: 'grape', disabled: true}
                    ],
                    required: true
                },
                {
                    id: 120,
                    type: 'radio',
                    name: 'radio',
                    label: 'Radio',
                    option: [
                        { label: 'Toggle this custom radio', value: 'first' },
                        { label: 'Or toggle this other custom radio', value: 'second' },
                        { label: 'This one is Disabled', value: 'third', disabled: true }
                    ],
                    required: true
                },
                {
                    id: 130,
                    type: 'date',
                    name: 'date',
                    label: 'Date',
                    placeholder: 'Pick Date',
                    required: true
                },
                {
                    id: 140,
                    type: 'time',
                    name: 'time',
                    label: 'Time',
                    placeholder: 'Pick Time',
                    required: true
                },
                {
                    id: 150,
                    type: 'datetime',
                    name: 'datetime',
                    label: 'Datetime',
                    placeholder: 'Pick Datetime',
                    required: true
                },
                {
                    id: 160,
                    type: 'daterange',
                    name: 'daterange',
                    label: 'Date Range',
                    placeholder: 'Pick a date range',
                    required: true
                },
                {
                    id: 170,
                    type: 'textarea',
                    name: 'textarea',
                    label: 'Textarea',
                    placeholder: 'Pick Textarea',
                    required: true
                },
                {
                    id: 180,
                    type: 'file',
                    name: 'singlefile',
                    label: 'Any Single File',
                    placeholder: 'Pick any file',
                    required: true
                },
                {
                    id: 190,
                    type: 'file',
                    name: 'imageFile',
                    label: 'Image File Only',
                    placeholder: 'Pick image file only',
                    required: true,
                    supportedFormats: ['.jpg','.png']
                },
                {
                    id: 200,
                    type: 'file',
                    name: 'documentFiles',
                    label: 'PDF Document File only',
                    placeholder: 'Pick PDF file only',
                    required: true,
                    supportedFormats: ['.pdf']
                },
                {
                    id: 210,
                    type: 'dropdown',
                    addElement: true,
                    name: 'dropdown-select',
                    label: '&spades; Dynamic Field Dropdown (Selecting a value in dropdown will render that component below it)',
                    option: [
                        {
                            type: 'textarea',
                            label: 'Textarea',
                            value: 'textarea',
                            required: true,
                            text: 'Textarea'
                        },
                        {
                            type: 'radio',
                            label: 'Radio',
                            value: 'radio',
                            option: [
                                { label: 'Toggle this custom radio', value: 'first' },
                                { label: 'Or toggle this other custom radio', value: 'second' },
                                { label: 'This one is Disabled', value: 'third', disabled: true }
                            ],
                            required: true,
                            text: 'Radio'
                        }
                    ],
                    required: true
                },
                {
                    id: 220,
                    type: 'radio',
                    addElement:true,
                    name: 'raio-select',
                    label: '&spades; Dynamic Radio Field (Selecting a value will render that component below it)',
                    option: [
                        {
                            type: 'textarea',
                            label: 'Textarea',
                            value: 'textarea',
                            required: true,
                            text: 'Textarea'
                        },
                        {
                            type: 'radio',
                            label: 'Radio',
                            value: 'radio',
                            option: [
                                { label: 'Toggle this custom radio', value: 'first' },
                                { label: 'Or toggle this other custom radio', value: 'second' },
                                { label: 'This one is Disabled', value: 'third', disabled: true }
                            ],
                            required: true,
                            text: 'Radio'
                        }
                    ],
                    required: true
                },
                {
                    id: 230,
                    type: 'checkbox',
                    addElement:true,
                    name: 'checkbox-select',
                    label: '&spades; Dynamic Field Checkbox (Selecting a value will render that component below it)',
                    option: [
                        {
                            type: 'textarea',
                            label: 'Textarea',
                            value: 'textarea',
                            required: true,
                            text: 'Textarea'
                        },
                        {
                            type: 'radio',
                            label: 'Radio',
                            value: 'radio',
                            option: [
                                { label: 'Toggle this custom radio', value: 'first' },
                                { label: 'Or toggle this other custom radio', value: 'second' },
                                { label: 'This one is Disabled', value: 'third', disabled: true }
                            ],
                            required: true,
                            text: 'Radio'
                        }
                    ],
                    required: true
                },
                {
                    id: 'checkbox',
                    type: 'checkbox',
                    name: 'Confirm',
                    position: 'center',
                    addElement: false,
                    option: [
                        {label: 'I am not a Robot', value: true},
                    ],
                    required: true
                },
                {
                    id: 'link',
                    component: 'appup-link',
                    name: 'Link',
                    position: 'center',
                    option: {
                        label: 'Forgot your password ?',
                        linkTo: 'forgot-password',
                        required: true
                    }
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
                },
                {
                    label: 'Cancel',
                    variant: 'secondary',
                    type: 'button',
                    function: 'onCancel'
                },
                {
                    label: 'Action',
                    variant: 'warning',
                    type: 'action',
                    action: {
                        type: 'navigate',
                        data: 'navigate-action'
                    }
                },
                {
                    label: 'Fetch Data',
                    variant: 'warning',
                    type: 'action',
                    action: {
                        type: 'ajax',
                        data: {
                            apiUrl: 'http://localhost:3000/datatable',
                            config: {
                                pageSize: 100,
                                pageNo: 0
                            }
                        }
                    },
                    success: {
                        type: 'navigate',
                        data: 'navigate-success'
                    },
                    error: {
                        type: 'navigate',
                        data: 'navigate-error'
                    }
                }
            ],
            formFieldsExpPostionBtn: {
                field: [
                    {
                        id: 1000,
                        type: 'text',
                        name: 'name',
                        label: 'Name',
                        placeholder: 'Enter Name',
                        required: true
                    },
                    {
                        id: 1010,
                        type: 'email',
                        name: 'email',
                        label: 'Email',
                        placeholder: 'Enter Email',
                        required: true
                    },
                    {
                        id: 1020,
                        type: 'password',
                        name: 'Insert Password',
                        label: 'Password',
                        hints:'insert hints here',
                        placeholder: 'Enter Password',
                        required: true,
                        minLength: 6,
                        maxLength: 10
                    },
                    {
                        id: 1020,
                        type: 'password',
                        confirmed: 'Insert Password',
                        name: 'Repeat Password',
                        label: 'Repeat Password',
                        placeholder: 'Enter Password',
                        required: true,
                        minLength: 6,
                        maxLength: 10
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
                    },
                    {
                        label: 'Cancel',
                        variant: 'default',
                        type: 'cancel',
                        function: 'onCancel'
                    }
                ]
            }
        }
    },
    computed: {

    },
    methods: {
        doSignup (form) {
            console.log('doSignup', form)
        }
    }
}
</script>
