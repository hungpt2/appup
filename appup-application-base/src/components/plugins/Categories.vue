<template>
  <div class="p-3">
    <div class="float-right pr-3 max-w-300-px min-w-250-px">
      <appup-search  :size="18" :icon="'search'"  :delay="1000" />
      <div class="d-flex float-right pt-1">
        <div>Add your own plugin from </div>
        <appup-link label="here" :linkTo="'databases-form'" class="p-0 pl-1" />
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="p-3">
      <appup-grid id="1" label="name" description="description" image="picture" direction="center" 
            :listItem="[{'_id':'5ae7f4c39f66f39ebc573e32','name':'MySQL','picture':'http://placehold.it/32x32','description':'Need to write some description here.','registered':'2016-01-05T08:21:53 -06:-30','buttons': [{label: 'Show Plugins',variant: 'default',type: 'reset',action: {type: 'navigate',data: '/show-plugin'}},{label: 'Add New',variant: 'primary',type: 'action',action: {type: 'navigate',data: '/add-new'}}, ]},
                          {  '_id':'5ae7f4c39f66f39ebc573e33','name':'Oracle','picture':'http://placehold.it/32x32','description':'Need to write some description here.','registered':'2016-01-05T08:21:53 -06:-30','buttons': [{label: 'Show Plugins',variant: 'default',type: 'reset',action: {type: 'navigate',data: '/show-plugin'}},{label: 'Add New',variant: 'primary',type: 'action',action: {type: 'navigate',data: '/add-new'}}, ]},
                          {  '_id':'5ae7f4c39f66f39ebc573e34','name':'DB2','picture':'http://placehold.it/32x32','description':'Need to write some description here.','registered':'2016-01-05T08:21:53 -06:-30','buttons': [{label: 'Show Plugins',variant: 'default',type: 'reset',action: {type: 'navigate',data: '/show-plugin'}},{label: 'Add New',variant: 'primary',type: 'action',action: {type: 'navigate',data: '/add-new'}}, ]}]" /> 
    </div>
  </div>
</template>
<script>

export default {
  name: "appup-plugins-categories",
};
</script>
<style src="./style/Categories.scss" lang="scss"></style>
