<template>
    <div>
        <div class="card">
            <div class="card-header">
                <center><h5>Datatable with extreme right column freezed and opens modal window with readonly form</h5></center>
            </div>
            <div class="card-body">
                <appup-datatable
                    :id=id 
                    :freeze=freeze
                    :url=url
                    :columns=config
                    @onView="onView" 
                    @onEdit="onEdit" 
                    @onDelete="onDelete"
                />
            </div>
        </div>
        <br/>
        <div class="card">
            <div class="card-header">
                <center><h5>Datatable with extreme left column freezed and opens modal window with confirmation window when delete a record</h5></center>
            </div>
            <div class="card-body">
                <appup-datatable 
                    :url=url
                    id='2' 
                    freeze='left'
                    :columns= config1
                    @onView="onView" 
                    @onEdit="onEdit" 
                    @onDelete="onDelete"
                />
            </div>
        </div>
        <br/>
        <div class="card">
            <div class="card-header">
                <center><h5>Datatable with no colum freezed and opens modal window with form</h5></center>
            </div>
            <div class="card-body">
                <appup-datatable 
                    :url=url
                    id='3'
                    :columns=config2
                    @onView="onView" 
                    @onEdit="onEdit" 
                    @onDelete="onDelete"
                />
            </div>
        </div>

        <div>
            <appup-modal
                :id="'confirmModal'"
                :title="'Delete ' + focusItem.first_name"
                type="confirm"
                okLabel="Yes"
                cancelLabel="No">
                <div>
                    <span>Are you sure you want to delete this employee ?</span><br>

                    <span>id : {{focusItem._id}} </span><br>
                    <span>name : {{focusItem.first_name}} </span><br>
                </div>
            </appup-modal>

            <appup-modal
                :id="'viewModal'"
                :title="'View ' + focusItem.first_name"
                type="message"
                size="large">
                <br>
                <span v-for="(item, index) in config" :key="index">
                    <div class="text-center">
                        <img v-if="item.type==='image'" :src="focusItem.picture" />
                    </div>
                </span>
                <div>
                    <appup-form
                        :formFields = formFieldsDatatable />
                </div>
            </appup-modal>

            <appup-modal
                :id="'editModal'"
                :title="'Edit ' + focusItem.first_name"
                size="large"
                type="confirm"
                okLabel="Edit"
                cancelLabel="Cancel">
                <br>
                <span v-for="(item, index) in config" :key="index">
                    <div class="text-center">
                        <img v-if="item.type==='image'" :src="focusItem.picture" />
                    </div>
                </span>
                <div>
                    <appup-form
                        :formFields = formFieldsDatatable />
                </div>
            </appup-modal>
        </div>
    </div>
</template>
<script>
import { Datatable } from 'appup';

export default {
    components: { Datatable },
    data () {
        return {
            id: '1',
            focusItem: {},
            formFieldsDatatable: [],
            freeze: 'right',
            url: "http://localhost:3000/datatable",
            config:[
                {
                    name: "Avatar",
                    field: "picture",
                    type: "image",
                },{
                    name: "First Name",
                    field: "first_name",
                    type: "text"
                },{
                    name: "Last Name",
                    field: "last_name",
                    type: "text"
                },{
                    name: "Age",
                    field: "age",
                    type: "number"
                },{
                    name: "Gender",
                    field: "gender",
                    type: "text"
                },{
                    name: "Department",
                    field: "department",
                    type: "text"
                },{
                    name: "Email",
                    field: "email",
                    type: "text"
                },{
                    name: "Phone",
                    field: "phone",
                    type: "text"
                },{
                    name: "Address",
                    field: "address",
                    type: "text"
                },{
                    name: "Status",
                    field: "isActive",
                    type: "text"
                },{
                    name: "Actions",
                    type: "actions",
                    actions: [{
                        type: "appup-button",
                        size: "small",
                        label: "View",
                        buttonStyle: "success",
                        icon: "eye",
                        action: "modal",
                        modal: "viewModal"
                    }, {
                        type: "appup-link",
                        label: "View",
                        icon: "eye",
                        title: "click to navigate",
                        action: "navigate",
                        url: ":/employee/edit"
                    }]
                }
            ],
            config1:[
                {
                    name: "Avatar",
                    field: "picture",
                    type: "image",
                },{
                    name: "First Name",
                    field: "first_name",
                    type: "text"
                },{
                    name: "Last Name",
                    field: "last_name",
                    type: "text"
                },{
                    name: "Age",
                    field: "age",
                    type: "number"
                },{
                    name: "Phone",
                    field: "phone",
                    type: "text"
                },{
                    name: "Address",
                    field: "address",
                    type: "text"
                },{
                    name: "Status",
                    field: "isActive",
                    type: "text"
                },{
                    name: "Actions",
                    type: "actions",
                    actions: [{
                        type: "appup-button",
                        size: "small",
                        label: "Edit",
                        buttonStyle: "primary",
                        icon: "pencil-alt",
                        action: "modal",
                        modal: "editModal"
                    },{
                        type: "appup-link",
                        label: "View",
                        icon: "eye",
                        title: "click to navigate",
                        action: "navigate",
                        url: ":/employee/edit"
                    }]
                }
            ],
            config2:[
                {
                    name: "Avatar",
                    field: "picture",
                    type: "image",
                },{
                    name: "First Name",
                    field: "first_name",
                    type: "text"
                },{
                    name: "Last Name",
                    field: "last_name",
                    type: "text"
                },{
                    name: "Phone",
                    field: "phone",
                    type: "text"
                },{
                    name: "Address",
                    field: "address",
                    type: "text"
                },{
                    name: "Status",
                    field: "isActive",
                    type: "text"
                },{
                    name: "Actions",
                    type: "actions",
                    actions: [{
                        type: "appup-button",
                        size: "small",
                        label: "Delete",
                        buttonStyle: "danger",
                        icon: "trash",
                        action: "modal",
                        modal: "deleteModal"
                    }, {
                        type: "appup-link",
                        label: "View",
                        icon: "eye",
                        title: "click to navigate",
                        action: "navigate",
                        url: ":/employee/edit"
                    }]
                }
            ]
        }
    },
    methods: {
        onView(data, columns) {
            console.log('onView', data)
            this.focusItem = data
            this.formFieldsDatatable = []
            columns.forEach(item => {
                if (item.type != 'image' && item.type != 'actions') {
                    this.formFieldsDatatable.push({
                        id: 'view_'+ item.field ,
                        disabled: true,
                        type: item.type,
                        name: item.name,
                        label: item.headerName,
                        value: this.focusItem[item.field]
                    })
                }
            })
            this.showModal('viewModal')
        },
        onEdit(data, columns) {
            console.log('edit', data)
            this.focusItem = data
            this.formFieldsDatatable = []
            columns.forEach(item => {
                if (item.type != 'image' && item.type != 'actions') {
                    this.formFieldsDatatable.push({
                        id: 'view_'+ item.field ,
                        type: item.type,
                        name: item.name,
                        label: item.headerName,
                        value: this.focusItem[item.field]
                    })
                }
            })
            console.log(this.formFieldsDatatable)
            this.showModal('editModal')
        },
        onDelete(data) {
            console.log('delete', data)
            this.focusItem = data
            this.showModal('confirmModal')
        },
        doDelete() {
            console.log('do delete')
            this.hideModal('confirmModal')
        },
        doEdit() {
            console.log('do edit')
            this.hideModal('editModal')
        },
        showModal (type) {
            this.$root.$emit('bv::show::modal', type)
        },
        hideModal (type) {
            this.$root.$emit('bv::hide::modal', type)
        }
    }
}
</script>
