<template>
    <div>
        {{title}}
        <div class="d-flex w-100 form-control input-form p-0 mt-2">
            <appup-input class="w-100" 
                v-model="valueInput"
                @input="onInput" />
            <appup-button size="medium" buttonStyle="light" icon="plus" class="ml-2" @click="addItem"/>
        </div>
        <div class="pt-3">
            <div class="d-flex border-1-ced4da component-hover width-fit-content mb-1" 
                v-for="(item, index) in listData" :key="index" :class="{'mb-3': index === listData.length-1}">
                <div class="p-1">
                    {{item}}
                </div>
                <appup-button size="medium" buttonStyle="light" icon="times" :customClass="'height-34'" @click="deleteItem(item)"/>
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * Appup List Item component which can be used to display list item and add item in list
     */
    export default {
        name: 'appup-list-item',
        props: {

            /**
             * Id of input elements.
             */
            id: {
                type: String,
                required: false,
            },

            /**
             * Id of input elements.
             */
            listItem: {
                type: Array,
                required: false,
            },

            /**
             * Id of input elements.
             */
            title: {
                type: String,
                required: false,
            },

        },
       
        data: function() {
            return {
                listData: this.listItem ? this.listItem : [],
                valueInput: ''
            }
        },

        methods: {
            deleteItem(item) {
                let index = this.listData.indexOf(item);
                if (index > -1) {
                    this.listData.splice(index, 1);
                }
                this.$emit('getList', this.listData)
            },
            addItem() {
                console.log('add', this.valueInput)
                this.listData.push(this.valueInput);
                this.valueInput = ''
            },
            onInput(value) {
                this.valueInput = value;
            },
        },
    };
</script>
<style>
.input-form input {
    border: 0px;
}
.padding-top-3-px {
    padding-top: 4px;
}
.border-1-ced4da {
    border: 1px solid #ced4da;
}
.height-34 {
    height: 34px;
}
.width-fit-content {
    width: fit-content;
}
</style>

