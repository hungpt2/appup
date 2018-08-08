<template>
  <div class="fr-37 ba-25">
      <div class="text-left p-3 background-color-eeeeee">
          <appup-breadcrumbs class="background-color-initial mb-0 p-0 w-50 float-left min-w-350-px line-height-38"  
            :items="[{text: 'Default',href: '#'}, 
            {text: 'Contacts',href: '#'}, 
            {text: 'Developers',href: '#'}, 
            {text: 'Backend',href: '#'}, 
            {text: 'Plugins',active: true}]" />
          <div class="w-50 float-right">
            <appup-input 
              class="w-50 float-right min-w-150-px max-w-200-px pr-2"
              id="header-dropdown-left"
              value='frontend'
              :options="[{value: 'frontend', text: 'Frontend'}]"
              :type="'dropdown'" />
            <appup-input
              class="w-50 float-right min-w-150-px max-w-200-px pr-2"
              id="header-dropdown-right"
              value='backend'
              :options="[{value: 'backend', text: 'Backend'}]"
              :type="'dropdown'" />
          </div>
          <div class="clearfix"></div>
        </div>
        <div>
            <div class="m-3 rest">
              <div v-for="(item, index) in listCategory" :key="index" class="mt-3">
                <appup-trigger :listItem="item.list" :title="item.title"></appup-trigger>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

export default {
  name: "appup-fr-37",
  data: function() {
    return {
      listCategory: [
        {
          title: 'Frontend / Field Schema / Tables',
          list: [
                {
                    titleCard:'First Trigger',
                    time: 'Created on 3rd, April 2017',
                    dropdown: [
                        {
                            type: 'item',
                            label: 'Edit',
                            icon: 'pencil-alt'
                        },
                        {
                            type: 'item',
                            label: 'Delete',
                            icon: 'trash'
                        }
                    ],
                    switch: true,
                    refresh: true
                },
                {
                    titleCard:'Second Trigger',
                    time: 'Created on 3rd, April 2017',
                    dropdown: [
                        {
                            type: 'item',
                            label: 'Edit',
                            icon: 'pencil-alt'
                        },
                        {
                            type: 'item',
                            label: 'Delete',
                            icon: 'trash'
                        }
                    ],
                    switch: true,
                    refresh: true
                },
                {
                    titleCard:'Third Trigger',
                    time: 'Created on 3rd, April 2017',
                    dropdown: [
                        {
                            type: 'item',
                            label: 'Edit',
                            icon: 'pencil-alt'
                        },
                        {
                            type: 'item',
                            label: 'Delete',
                            icon: 'trash'
                        }
                    ],
                    switch: true,
                    refresh: true
                }
            ]
        },
      ]
    };
  },
};
</script>
<style src="./style/fr37.scss" lang="scss"></style>
