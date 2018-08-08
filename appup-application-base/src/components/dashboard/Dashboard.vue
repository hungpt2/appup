<template>
    <div class="appup-dashboard">
        <div>
            <appup-header
                :title="{name: 'Dashboard'}"
                :left-controls="[]"
                :right-controls="[{ type:'link' , class:'text-decoration-underline' , label: 'New App Cloud', link_to: '#/new-app-cloud'}]" />
        </div>
    </div>
</template>
<script>

export default {
  name: "appup-dashboard",
};
</script>
