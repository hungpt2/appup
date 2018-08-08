<template>
    <div>
        <appup-formwizard
            nextButtonText="Next"
            backButtonText="Back"
            finishButtonText="Finish"
            @click="onFinishClick"
            color="gray"
            shape="tab"
            :items="items" />
    </div>
</template>
<script>
import { Formwizard } from 'appup';
export default {
    components: { Formwizard },
    data () {
        return {
             items: [
                {
                    title: "Name",
                    icon:"ti-user",
                    formFields: [
                    {
                        id: 10,
                        type: 'text',
                        name: 'firstname',
                        label: 'First Name',
                        placeholder: 'Enter First Name',
                        required: true
                    },
                    {
                        id: 20,
                        type: 'text',
                        name: 'lastname',
                        label: 'Last Name',
                        placeholder: 'Enter Last Name',
                        required: true
                    }]                       
                },
                {
                    title: "Email and Phone",
                    icon:"ti-email",
                    formFields: [
                    {
                        id: 10,
                        type: 'email',
                        name: 'email',
                        label: 'Email',
                        placeholder: 'Enter Email',
                        required: true
                    },
                    {
                        id: 10,
                        type: 'number',
                        name: 'phone',
                        label: 'Phone',
                        placeholder: 'Enter Phone Number',
                        required: true
                    }]
                },
                {
                    title: "Address",
                    icon:"ti-check",
                    formFields: [
                    {
                        id: 10,
                        type: 'text',
                        name: 'address',
                        label: 'Address',
                        placeholder: 'Enter Address',
                        required: true
                    }]
                }
            ]
        }
    },
    computed: {
        
    },
    methods: {
        onFinishClick: function() {
            alert('finished');
        }
    }
};
</script>
