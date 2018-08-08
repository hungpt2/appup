<template>
  <div>
    <b-table 
      :striped="true"
      :bordered="true"
      :outlined="true"
      :small="true"
      :hover="true"
      :dark="false"
      :fixed="false"
      :foot-clone="false"
      :responsive="true"
      :stacked="false"
      :caption-top="false"
      :sort-by="sortBy" 
      :sort-desc="sortDesc"
      :items="dataTable" 
      :fields=fieldsTable
      >
      <template slot="picture" slot-scope="data">
          <span><img :src=data.value /></span>
      </template>
      <template slot="actions" slot-scope="data">
        <div class="action-col">
          <span v-for="(item, index) in listBtn" :key="index" class="mr-1">
            <component :is=item.type v-bind="item" @click="onAction(item, data)" />
          </span>
        </div>
      </template>
    </b-table>
  </div>
</template>
<script>
import { AjaxRequests } from "@/mixins/ajaxRequests";

/**
 * Appup Table component which can be used to display list data with custom action.
 */
export default {
  name: "appup-table",
  mixins: [AjaxRequests],
  props: {
    /**
     * Id of table
     */
    id: {
      type: String,
      required: false
    },
    /**
     * Message to be displayed in the alert
     */
    items: {
      type: Array,
      required: false
    },
    /**
     * Customize the table columns headings
     */
    fieldsTable: {
      required: false
    },

    /**
     * Sort by key
     */
    sortBy: {
      required: false
    },
    /**
     * Config sort
     *
     * `true` -> Descending
     * `false` -> Ascending
     */
    sortDesc: {
      required: false
    },
    /**
     * Fetch data with url
     */
    url: {
      required: false
    }
  },
  data: function() {
    return {
      focusItem: {},
      formFieldsTable: [],
      listBtn: [],
      dataTable: this.items,
      configReq: {
        pageSize: 10,
        pageNo: 0
      }
    };
  },
  computed: {},
  methods: {
    onAction(item, data) {
      switch (item.modal) {
        case "viewModal":
          this.$emit('onView', data.item, this.fieldsTable)
          break;
        case "editModal":
          this.$emit('onEdit', data.item, this.fieldsTable)
          break;
        case "deleteModal":
          this.$emit('onDelete', data.item, this.fieldsTable)
          break;
      }
    }
  },
  mounted() {
    if (this.url) {
      this.getData(this.url, this.configReq, resonpse => {
        this.configReq = {
          pageSize: resonpse.data.pageNo,
          pageNo: resonpse.data.pageSize
        };
        return (this.dataTable = resonpse.data.content);
      });
    }
    this.fieldsTable.forEach(element => {
      if (element.key == 'actions') {
        this.listBtn = element.actions
      }
    });
  }
};
</script>
