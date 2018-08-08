<template>
  <div role="tablist" class="appup-accordion">
    <b-card no-body class="mb-1" v-for="(content,index) in items" :key="index">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle="content.id" variant="info" class="accordian-button">
          {{content.label}}
        </b-btn>
      </b-card-header>
      <b-collapse :id="content.id" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            <slot :name="content.id"></slot>
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
    /**
     * Accordion component to group content with only one displayed at a time
     */
    export default {
        name: 'appup-accordion',
        props: {
          /**
           * Items are array of objects which should be displayed as accordions with content within them.
           * 
           * Content within an Item can be any appup component such as appup-form, data table etc..
           * 
           * Schema:
           * 
           * `
           * [
              {
                id: 'ID of the Accordion item',
                label:'Label of the accordion item',
                content: {
                    ... FormField Schema
                }
              },
              {
                id: 'ID of the Accordion item',
                label:'Label of the accordion item',
                content: {
                    ... datatable Schema
                }
              }
            ]
           * `
           */
          items: {
              type: Array,
              required: true,
              default: []
          }
        },
        data: function() {
            return {
              current_view: ''
            }
        },
        computed: {

        },
        methods: {

        },
        components: {
        }
    };
</script>
<style>
.accordian-button {
  text-align: left;
}
</style>
