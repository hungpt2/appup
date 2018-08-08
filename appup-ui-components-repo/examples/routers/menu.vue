<template>
    <div>
      <appup-custom-menu :id="'menu'" :sidebar="false" :item="item"/>
        <br/>
      <appup-custom-menu :id="'menu'" :sidebar="true" :item="item2"/>
      <br />
      <appup-custom-menu :id="'menu'" :sidebar="false" 
                :customStyle="true"
                :itemStyle="{'background-color': '#EEEEEE','border': '0px','border-bottom':'0px','color': '#7C7C7D','font-weight': '450','height': '72px'}"
                :activeItemStyle="{'border-bottom': '3px solid #343a40','color': '#0069D9','background-color': '#EEEEEE','border-top': '0','border-left': '0','border-right': '0','font-weight': '450','height': '72px'}"
                :item="[{id: 'apps', link: '/menu/apps',label: 'Apps',size: 'medium',},
                        {id: 'users', link: '/menu/users',label: 'Users',size: 'medium',},
                        {id: 'themes', link: '/menu/themes',label: 'Themes',size: 'medium',},
                        {id: 'setup', link: '/menu/setup',label: 'Setup',size: 'medium',}]"/>

        <br />
        <br />
        <br />
        <br />
        <router-view />
    </div>
</template>
<script>
export default {
    data () {
        return {
            item: [{id: 'apps', link: '/menu/apps',label: 'Apps',size: 'medium',},
                    {id: 'users', link: '/menu/users',label: 'Users',size: 'medium',},
                    {id: 'themes', link: '/menu/themes',label: 'Themes',size: 'medium',},
                    {id: 'setup', link: '/menu/setup',label: 'Setup',size: 'medium',}],
            item2: [{id: 'category', link: '/menu/apps',label: 'Category',size: 'medium', type: 'header' },
                    {id: 'apps', link: '/menu/apps',label: 'Apps',size: 'medium', },
                    {id: 'users', link: '/menu/users',label: 'Users',size: 'medium',},
                    {id: 'themes', link: '/menu/themes',label: 'Themes',size: 'medium',},
                    {id: 'setup', link: '/menu/setup',label: 'Setup',size: 'medium',}]
        }
    },
    computed: {
        
    },
    methods: {
    }
}
</script>
