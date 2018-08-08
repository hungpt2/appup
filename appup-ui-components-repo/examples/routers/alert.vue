<template>
    <div>
        <appup-alert message="Info" alert-type="info" show :countDown='false'></appup-alert>
        <appup-alert message="Warn" alert-type="warn" show :countDown='false'></appup-alert>
        <appup-alert message="Success" show :countDown='false'></appup-alert>
        <appup-alert message="Failure" alert-type="failure" show :countDown='false'></appup-alert>

        <appup-alert 
            :countDown='true'
            alert-type="failure"
            message="Error Occurred !!!"
            :show="showDismissibleAlert"
            @dismissed="showDismissibleAlert=false"/>

        <button @click="showDismissibleAlert=!showDismissibleAlert">
            {{showDismissibleAlert?'Hide Alert':'Show Alert'}}
        </button>
    </div>
</template>
<script>
import { Alert } from 'appup';
export default {
    components: { Alert },
    data () {
        return {
            showDismissibleAlert: false
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>
