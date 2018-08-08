<template>
  <div class="m-3 rest">
      <div class="pt-3">
        <div class="d-flex">
          <div class="w-50 text-left">
            <h5 class="font-weight-bold ml-3">Default</h5>
          </div>
          <div class="w-50 text-right">
            <appup-button class="float-right" :navigateTo="'add-trigger'" :size="'medium'" :buttonStyle="'primary'" :label="'Add Trigger'"/>
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
</template>
<script>

export default {
  name: "appup-ba-25-rest",
  data: function() {
    return {
      listCategory: [
        {
          title: 'Category 1',
          list: [
            {
                titleCard:'First Trigger',
                detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                contact: 'New Contact Added',
                iconContact: 'search',
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
                ]
            },
            {
                titleCard:'Second Trigger',
                detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                contact: 'New Contact Added',
                iconContact: 'search',
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
                ]
            },
            {
                titleCard:'Third Trigger',
                detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                contact: 'New Contact Added',
                iconContact: 'search',
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
                ]
            },
            {
                titleCard:'First Trigger',
                detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                contact: 'New Contact Added',
                iconContact: 'search',
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
                ]
            }
          ]
        }
      ],
      item: [
                {
                    titleCard:'First Trigger',
                    detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                    contact: 'New Contact Added',
                    iconContact: 'search',
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
                    ]
                },
                {
                    titleCard:'Second Trigger',
                    detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                    contact: 'New Contact Added',
                    iconContact: 'search',
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
                    ]
                },
                {
                    titleCard:'Third Trigger',
                    detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                    contact: 'New Contact Added',
                    iconContact: 'search',
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
                    ]
                },
                {
                    titleCard:'First Trigger',
                    detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                    contact: 'New Contact Added',
                    iconContact: 'search',
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
                    ]
                },
                {
                    titleCard:'Second Trigger',
                    detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                    contact: 'New Contact Added',
                    iconContact: 'search',
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
                    ]
                },
                {
                    titleCard:'Third Trigger',
                    detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                    contact: 'New Contact Added',
                    iconContact: 'search',
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
                    ]
                }
            ]
    };
  },
};
</script>
