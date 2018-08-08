<template>
  <div class="appup-plugins">
      <div class="text-left p-3 background-color-eeeeee mt-4">
        <appup-breadcrumbs class="background-color-initial mb-0 p-0 w-100 float-left min-w-350-px line-height-38"  
          :items="[{text: 'Default',href: '#'}, 
          {text: 'Contacts',href: '#'}, 
          {text: 'Developers',href: '#'}]" />
        <div class="clearfix"></div>
      </div>
      <div class="m-1 mt-3 mb-3">
        <div class="p-2 text-left">
          <div class="font-weight-bold ml-2">Backend</div>
          <appup-grid id="1" label="name" description="description" image="picture" direction="center" :size="'large'"
            :listItem="[{'_id':'5ae7f4c39f66f39ebc573e32','name':'Triggers','picture':'http://placehold.it/32x32','count':123,'description':'Some text comes here.','fullDescription':'Some text comes here with full explanation.','registered':'2016-01-05T08:21:53 -06:-30'},
                          {  '_id':'5ae7f4c39f66f39ebc573e33','name':'Workflows','picture':'http://placehold.it/32x32','count':123,'description':'Some text comes here.','fullDescription':'Some text comes here with full explanation.','registered':'2016-01-05T08:21:53 -06:-30'}]" /> 
        </div>
        <div class="p-2 text-left border m-3">
          <div class="font-weight-bold ml-2">Installed Plugins</div>
          <appup-grid id="1" label="name" description="description" image="picture" direction="center" :size="'small'"
            :listItem="[{'_id':'5ae7f4c39f66f39ebc573e32','name':'Databases','picture':'http://placehold.it/32x32'},
                          {  '_id':'5ae7f4c39f66f39ebc573e33','name':'Add New','picture':'http://placehold.it/32x32'}]" /> 
        </div>
        <div class="p-2 text-left">
          <div class="font-weight-bold ml-2">Frontend</div>
          <appup-grid id="1" label="name" description="description" image="picture" direction="center" :size="'large'"
            :listItem="[{'_id':'5ae7f4c39f66f39ebc573e32','name':'MySQL','picture':'http://placehold.it/32x32','count':123,'description':'Some text comes here.','fullDescription':'Some text comes here with full explanation.','registered':'2016-01-05T08:21:53 -06:-30'},
                          {  '_id':'5ae7f4c39f66f39ebc573e33','name':'Oracle','picture':'http://placehold.it/32x32','count':123,'description':'Some text comes here.','fullDescription':'Some text comes here with full explanation.','registered':'2016-01-05T08:21:53 -06:-30'},
                          {  '_id':'5ae7f4c39f66f39ebc573e34','name':'DB2','picture':'http://placehold.it/32x32','count':123,'description':'Some text comes here.','fullDescription':'Some text comes here with full explanation.','registered':'2016-01-05T08:21:53 -06:-30'}]" /> 
        </div>
      </div>
  </div>
</template>
<script>

export default {
  name: "appup-ba-24",
  data: function() {
    return {
    };
  },
};
</script>
