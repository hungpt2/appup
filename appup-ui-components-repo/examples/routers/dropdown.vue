<template>
    <div>
    <appup-button-dropdown :id="'dropdown-button'" :type="'text'" :label="'Appup'" :listItem="[{type: 'item',label: 'Get Apps',icon: 'search'},
                                                                                {type: 'item',label: 'Build your own',icon: 'file-code'},]" 
                            :iconBtnText="'plus'"
                            :classBtnDropdown="'btn-primary'" :variant="'primary'"  />
    <br />
    <br />
    <appup-button-dropdown :id="'dropdown-button'" :type="'image'" :label="'Contact'" 
                            :img="{src: 'appup-signup.png', alt: 'image option'}"
                            :listItem="[{type: 'item-image',label: 'Get Apps',src: 'appup-signup.png', alt: 'image option'},
                                        {type: 'item-image',label: 'Build your own',src: 'appup-signup.png', alt: 'image option'}]" />
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>
