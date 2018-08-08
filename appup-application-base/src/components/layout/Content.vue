<template>
  <div>
    <appup-header :title="{name: 'Appup title'}" 
                  :left-controls="[]" 
                  :right-controls="[{type: 'dropdown',label: 'username', function:'getLocalstorage',
                                      image: 'http://agilecrm.dash.sweet-simple.com/assets/img/human01.jpg',
                                      items: [{type: 'link',label: 'Preferences',link_to: '#/preferences'},
                                              {type: 'link',label: 'Signout',function:'doLogout',link_to: '#/login'}]}]"/>
    <div id="app" class="mt-0">
      
      <main class="main">
        <div class="pt-2">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fullContent',
}
</script>
