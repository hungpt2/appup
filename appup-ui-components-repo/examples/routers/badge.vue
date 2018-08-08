<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <appup-badge
                    badgeStyle="primary"
                    label="Badge"
                    />
            </div>
            <div class="col-md-4">
                <p>Badge contains number and url
                    <appup-badge
                        badgeStyle="success"
                        label="90"
                        href="/login"                        
                        />
                </p>
            </div>
            <div class="col-md-4">
                <p>Badge with rounded corners
                    <appup-badge
                        badgeStyle="warning"
                        label="Badge"
                        rounded=true
                    />
                </p>
            </div>
        </div>        
    </div>
</template>
<script>
import { Badge } from 'appup';
export default {
    components: { Badge },
    data () {
        return {
          
        }
    },
    computed: {
        
    },
    methods: {
    
    }
};
</script>