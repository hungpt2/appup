<template>
    <div>
        <appup-trigger :listItem="item" :title="'ba25'"></appup-trigger>
        <br />
        <appup-trigger :listItem="item2" :title="'ba29'"></appup-trigger>
        <br />
        <appup-trigger :listItem="item3" :title="'fr37'"></appup-trigger>
        <br />
        <appup-trigger :listItem="item4" :title="'fr40'"></appup-trigger>
        <br />
        <appup-trigger :listItem="item5" :title="'fr42'"></appup-trigger>
    </div>
</template>
<script>
import { Trigger } from 'appup';
export default {
    components: { Trigger },
    data () {
        return {
            item: [
                {
                    titleCard:'First Trigger',
                    detailTitle: ['abc/xyz/23dd/123/456/789/987/654/321'],
                    contact: 'New Contact Added',
                    iconContact: 'search',
                    icon:'toggle-on',
                    icon2:'sync',
                    time: 'Created on 3rd, April 2017',
                    count:'10',
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
                    icon:'toggle-on',
                    icon2:'sync',
                    time: 'Created on 3rd, April 2017',
                    count:'2',
                    dropdown: [
                        {
                            type: 'item',
                            label:'edit',
                            icon:'edit'
                        },
                        {
                            type: 'item',
                            label:'delete',
                            icon:'trash'
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
                            label:'edit',
                            icon:'edit'
                        },
                        {
                            type: 'item',
                            label:'delete',
                            icon:'trash'
                        }
                    ]
                }
            ],
            item2: [
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
                    associated: 3
                }
            ],
            item3: [
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
            ],
            item4: [
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
                }
            ],
            item5: [
                {
                    titleCard:'First Trigger',
                    detailTitle: ['http://app.abc.com/tasks'],
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
                    titleCard:'Second Trigger',
                    detailTitle: ['http://app.abc.com/calendar'],
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
                    titleCard:'Third Trigger',
                    detailTitle: ['http://app.abc.com/documents'],
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
                }
            ],
        }
    },
    computed: {
        
    },
    methods: {
            
    }
}
</script>
