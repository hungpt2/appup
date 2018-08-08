<template>
  <div class="ba-29 ba-25">
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
              <div class="pt-3">
                <div class="d-flex">
                  <div class="w-50 text-left">
                    <h5 class="font-weight-bold ml-3">Default</h5>
                  </div>
                  <div class="w-50 text-right">
                    <appup-button class="float-right" :navigateTo="'add-trigger'" :size="'medium'" :buttonStyle="'primary'" :label="'Create Workflow'"/>
                    <appup-search 
                      class="float-right max-width-250-px ml-3 mr-3"
                      :size="18" :icon="'search'" 
                      :delay="1000" />
                      <div class="clearfix"></div>
                  </div>
                </div>
                <appup-trigger :listItem="item"></appup-trigger>
              </div>
              <div v-for="(item, index) in listCategory" :key="index" class="mt-3">
                <appup-trigger :listItem="item.list" :title="item.title"></appup-trigger>
              </div>
          </div>
      </div>
  </div>
</template>
<script>

export default {
  name: "appup-ba-29",
  data: function() {
    return {
      listCategory: [
        {
          title: 'Category 1',
          list: [
                {
                    titleCard:'First Trigger',
                    iconTitle: 'search',
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
                    associated: 1
                },
                {
                    titleCard:'Second Trigger',
                    iconTitle: 'search',
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
                    associated: 3
                },
                {
                    titleCard:'Third Trigger',
                    iconTitle: 'search',
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
                    associated: 5
                },
                {
                    titleCard:'Fourth Trigger',
                    iconTitle: 'search',
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
                    associated: 2
                },
                {
                    titleCard:'Fifth Trigger',
                    iconTitle: 'search',
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
                },
                {
                    titleCard:'Sixth Trigger',
                    iconTitle: 'search',
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
                    associated: 1
                }
            ]
        },
        {
          title: 'Category 2',
          list: [
                {
                    titleCard:'First Trigger',
                    iconTitle: 'search',
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
                    associated: 3
                },
                {
                    titleCard:'Second Trigger',
                    iconTitle: 'search',
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
                    associated: 1
                },
                {
                    titleCard:'Third Trigger',
                    iconTitle: 'search',
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
                    associated: 5
                }
            ]
        },
      ],
      item: [
                {
                    titleCard:'First Trigger',
                    iconTitle: 'search',
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
                    associated: 1
                },
                {
                    titleCard:'Second Trigger',
                    iconTitle: 'search',
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
                    associated: 6
                },
                {
                    titleCard:'Third Trigger',
                    iconTitle: 'search',
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
                    associated: 4
                },
                {
                    titleCard:'Fourth Trigger',
                    iconTitle: 'search',
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
                    associated: 5
                },
                {
                    titleCard:'Fifth Trigger',
                    iconTitle: 'search',
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
                    associated: 1
                },
                {
                    titleCard:'Sixth Trigger',
                    iconTitle: 'search',
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
                    associated: 2
                }
            ]
    };
  },
};
</script>
<style src="./style/ba29.scss" lang="scss"></style>
