<template>
  <div>
    <div class="card">
      <div class="card-header">
          <center><h5>Table with modal window with readonly form</h5></center>
      </div>
      <div class="card-body">
        <appup-table 
          :fieldsTable=fieldsTable 
          :items=items 
          :sortBy=sortBy 
          :sortDesc=sortDesc 
          :url=url
          :id=id
          @onView="onView" 
          @onEdit="onEdit" 
          @onDelete="onDelete"
        />
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
          <center><h5>Table with confirmation modal window with message to be displayed upon delete</h5></center>
      </div>
      <div class="card-body">
        <appup-table
          id="2"
          :url=url
          :fieldsTable=fieldsTable1 
          :items=items1 
          @onView="onView" 
          @onEdit="onEdit" 
          @onDelete="onDelete" 
        />
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
          <center><h5>Table with modal window with readonly form</h5></center>
      </div>
      <div class="card-body">   
        <appup-table 
          :fieldsTable=fieldsTable2 
          :items=items2 
          id="3" 
          :url=url
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
          cancelLabel="No"
          @ok="doDelete">
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
          <span v-for="(item, index) in fieldsTable" :key="index">
              <div class="text-center">
                  <img v-if="item.key==='picture'" :src="focusItem.picture" />
              </div>
          </span>
          <div>
              <appup-form
                  :formFields = formFieldsTable />
          </div>
      </appup-modal>

      <appup-modal
          :id="'editModal'"
          :title="'Edit ' + focusItem.first_name"
          size="large"
          type="confirm"
          okLabel="Edit"
          cancelLabel="Cancel"
          @ok="doEdit">
          <br>
          <span v-for="(item, index) in fieldsTable" :key="index">
              <div class="text-center">
                  <img v-if="item.key==='image'" :src="focusItem.picture" />
              </div>
          </span>
          <div>
              <appup-form
                  :formFields = formFieldsTable />
          </div>
      </appup-modal>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
          id: '1',
          focusItem: {},
          freeze: 'right',
          formFieldsTable: [],
          actionColumnOpt: {
            width: 250,
            position: 'right', //left, right
            headerName: 'Action',
            listButtons: ['view', 'edit', 'delete'],
            typeButton: 'full' // icon, text, full
          },
          url: "http://localhost:3000/datatable",
          fieldsTable: [
            { label: 'Avatar', key: 'picture', sortable: false },
            { label: 'Last Name', key: 'last_name', sortable: true },
            { label: 'First Name', key: 'first_name', sortable: true },
            { label: 'Age', key: 'age', sortable: true },
            { label: 'Address', key: 'address'},
            { label: 'Action', 
              key: 'actions', 
              sortable: false, 
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
          sortBy: 'age',
          sortDesc: false,
          items: [],
          // another test case
          fieldsTable2: [
            { label: 'Last Name', key: 'last_name', sortable: true },
            { label: 'First Name', key: 'first_name', sortable: true },
            { label: 'Age', key: 'age', sortable: true },
            { label: 'Action', 
              key: 'actions', 
              sortable: false, 
              actions: [{
                type: "appup-button",
                size: "small",
                label: "Edit",
                buttonStyle: "primary",
                icon: "pencil-alt",
                action: "modal",
                modal: "editModal"
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
          items2: [],
          fieldsTable1: [
            { label: 'Last Name', key: 'last_name', sortable: true },
            { label: 'First Name', key: 'first_name', sortable: true },
            { label: 'Age', key: 'age', sortable: true },
            { label: 'Action', 
              key: 'actions', 
              sortable: false, 
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
          ],
          items1: []
        }
    },
    computed: {

    },
    methods: {
      showModal(type) {
        this.$root.$emit("bv::show::modal", type);
      },
      hideModal(type) {
        this.$root.$emit("bv::hide::modal", type);
      },
      onView(data, fieldsTable) {
        console.log("view", data);
        this.focusItem = data;
        this.formFieldsTable = [];
        fieldsTable.forEach(item => {
          if (item.key != "picture" && item.key != "actions") {
            this.formFieldsTable.push({
              id: "view_" + item.field,
              disabled: true,
              type: 'text',
              name: item.key,
              label: item.label,
              value: this.focusItem[item.key]
            });
          }
        });
        this.showModal("viewModal");
      },
      onEdit(data, fieldsTable) {
        console.log("edit", data);
        this.focusItem = data;
        this.formFieldsTable = [];
        fieldsTable.forEach(item => {
          if (item.key != "picture" && item.key != "actions") {
            this.formFieldsTable.push({
              id: "view_" + item.field,
              type: 'text',
              name: item.key,
              label: item.label,
              value: this.focusItem[item.key]
            });
          }
        });
        this.showModal("editModal");
      },
      onDelete(data) {
        console.log("delete", data);
        this.focusItem = data;
        this.showModal("confirmModal");
      },
      doDelete() {
        console.log("do delete");
        this.hideModal("confirmModal");
      },
      doEdit() {
        console.log("do edit");
        this.hideModal("editModal");
      }
    }
}
</script>
