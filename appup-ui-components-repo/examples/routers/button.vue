<template>
    <div>
        <div class="row">
            <template v-for="buttonStyle in ['primary','secondary','success','warning','danger','link']">
                <div class="col-md-4 pb-2" v-for="size in ['small','medium','large']" :key="`${buttonStyle}_${size}`">
                    <appup-button :size="size" :buttonStyle="buttonStyle" :label="`${buttonStyle}_${size}`"/>
                </div>
            </template>
        </div>
        <br/><br/>
        <div class="row">
            <div class="col-md-4 pb-2">
                <appup-button size="small" buttonStyle="success" label="Button with tooltip" tooltip="Sample tootltip"/>
            </div>
            <div class="col-md-4 pb-2">
                <appup-button size="small" buttonStyle="secondary" label="Submit Button" type="submit"/>
            </div>
            <div class="col-md-4 pb-2">
                <appup-button 
                    size="small" 
                    buttonStyle="success" 
                    label="Disabled Button" 
                    :disabled=true
                />
            </div>
            <div class="col-md-4 pb-2">
                <appup-button size="small" buttonStyle="primary" label="Add Button with Icon" icon="plus"/>
            </div>
            <div class="col-md-4 pb-2">
                <appup-button size="small" buttonStyle="warning" tooltip="Button Icon" icon="beer"/>
            </div>
            <div class="col-md-4 pb-2">
                <appup-button 
                    size="small" 
                    buttonStyle="secondary" 
                    label="Button with Click event"
                    @click="onButtonClick"/>
            </div>
            <div class="col-md-4 pb-2">
                <appup-button 
                    buttonStyle="primary" 
                    label="Button with Ajax call"
                    ajax= true
                    url="http://our.appup.com/workflow/test/1015/publish"
                    @click="ajaxCall"/>
            </div>
        </div>
    </div>
</template>
<script>
import { Button } from 'appup';
export default {
    components: { Button },
    data () {
        return {
         
        }
    },
    computed: {
        
    },
    methods: {
        onButtonClick: function() {
            alert('button is clicked');
        }
    }
}
</script>
