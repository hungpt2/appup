<template>
    <div>
        <appup-change-title :message="'Appup change title'"/>
        <appup-input v-model="message"/>
        <br />
        <appup-button @click="changeTitle" :buttonStyle="'default'" :label="'Change Title'" />
    </div>
</template>
<script>
export default {
    data () {
        return {
            message: ''
        }
    },
    computed: {
        
    },
    methods: {
        changeTitle() {
            document.title = this.message
        }
    }
}
</script>
