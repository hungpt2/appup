<template>
    <div style="display: flex; flex-direction: row" :id=id class="appup-datatable">
        <div style=" overflow: hidden; flex-grow: 1">
            <ag-grid-vue
                :id=id
                style="width: 100%; height: 400px;"
                class="ag-theme-balham"
                :gridOptions="gridOptions"
                :rowData="appupRowData"
            />
        </div>
    </div>
</template>

<script>
import {AgGridVue} from 'ag-grid-vue'
import { AjaxRequests } from '@/mixins/ajaxRequests'

/**
 * Appup Datatable with inbuilt Search, Sort & Pagination Capability
 *
 * TODOs:
 *
 * Bootstrap CSS
 *
 * Server Side Search/Sort/Pagination
 */
export default {
    name: 'appup-datatable',
    mixins: [AjaxRequests],
    props: {
        /**
         * Id of input elements.
         */
        id: {
            type: String,
            required: false,
        },

        /**
         * URL to invoke to load data into datatable
         */
        url: {
            type: String,
            required: true
        },

        /**
         * Setup columns table
         * `label, type, field, width`
         */
        columns: {
            type: Array,
            required: true
        },

        /**
         * Setup freeze columns
         */
        freeze: {
            type: String,
            required: false
        }

    },
    components: {
        'ag-grid-vue': AgGridVue,

        // Action columns component
        ChildMessageComponent: {
            template: `
                <div class="action-col">
                    <span v-for="(item, index) in params.data.action.actions" :key="index" class="mr-1">
                        <component :is=item.type v-bind="item" @click="invokeParentMethod(item)" />
                    </span>
                </div>`,
            data() {
                return {
                    viewBtn: false,
                    editBtn: false,
                    deleteBtn: false,
                    listBtn: []
                }
            },
            methods: {
                invokeParentMethod(item) {
                    switch(item.modal) {
                        case 'viewModal':
                            this.params.context.componentParent.onView(this.params.data)
                            break;
                        case 'editModal':
                            this.params.context.componentParent.onEdit(this.params.data)
                            break;
                        case 'deleteModal':
                            this.params.context.componentParent.onDelete(this.params.data)
                            break;
                    }
                }
            }
        },

        // Image view component
        ImageViewComponent: {
            template: '<img :src=params.data.picture>',
            data() {
                return {
                }
            }
        }
    },
    data() {
        return {
            focusItem: {},
            position: 'bottom',
            direction: 'center',
            formFieldsDatatable: [],
            view: true,
            edit: true,
            confirmModal: false,
            gridOptions: null,
            text: null,
            config: {
                pageSize: 100,
                pageNo: 0
            },
            appupRowData: []
        }
    },
    methods: {
        /**
        * Config columns table.
        *
        * @param {Array} columns
        * @public
        */
        createColumnDefs(columns) {
            console.log("===> Datatable :: createColumnDefs");
            if (this.freeze == 'left') {
                columns[0]['pinned'] = 'left'
            } else if (this.freeze == 'right') {
                columns[columns.length-1]['pinned'] = 'right'
            }
            if (columns) {
                for (var item of columns) {

                    item['headerName'] = item.name;

                    if (item.type ==='text') {
                        item['filter'] = 'agTextColumnFilter'
                    }
                    else if (item.type ==='number') {
                        item['filter'] = 'agNumberColumnFilter'
                    }
                    else if (item.type ==='date') {
                        item['filter'] = 'agDateColumnFilter'
                    }

                    if( item.type=='image') {
                        item['cellRendererFramework'] = 'ImageViewComponent'
                    }

                    if (item.type=='actions') {
                        item['cellRendererFramework'] = 'ChildMessageComponent'
                        item['autoHeight'] = true;
                    }
                }
            }
            return columns;
        },
        /**
        * Fetch data into datatable with url.
        *
        * @param {String} url
        * @public
        */
        createRowData() {
            console.log("===> Datatable :: createRowData");

            this.getData(this.url, this.config, (resonpse) => {
                this.config = {
                    pageSize: resonpse.data.pageNo,
                    pageNo: resonpse.data.pageSize
                }
                let flag = false
                let tmpItem
                this.columns.forEach(item => {
                    if (item.type =='actions') {
                        flag = true
                        tmpItem = item
                    }
                })
                if (flag) {
                    resonpse.data.content.forEach(element => {
                        element.action = tmpItem
                    });
                }
                return this.appupRowData = resonpse.data.content;
            })
        },
        onView(data) {
            this.$emit('onView', data, this.columns)
        },
        onEdit(data) {
            this.$emit('onEdit', data, this.columns)
        },
        onDelete(data) {
            this.$emit('onDelete', data)
        },
        onClicked() {
            //this.gridOptions.api.getFilterInstance("name").getFrameworkComponentInstance().componentMethod("Hello World!");
        }
    },
    beforeMount() {
        this.gridOptions = {
            columnDefs: this.createColumnDefs(this.columns),
            context: {
                componentParent: this
            },
            defaultColDef: {
                menuTabs: ['filterMenuTab']
            },
            enableFilter: true,
            enableSorting: true,
            pagination: true,
            paginationPageSize: 10,
            enableColResize: true,
            onGridReady: function(params) {
            }
        };
    },
    mounted () {
        this.createRowData();
    }
}
</script>
