<template>
    <div class="row">
        <div class="col-sm-6">
        <b-form @submit="validateBeforeSubmit" @reset="onReset" novalidate>

            <template v-for="(item, n) in formFields">
                <b-form-group :id="'fgroup_'+item.id"
                    :label="item.label"
                    :label-for="'input_'+item.id"
                    :key="n">

                    <appup-input
                        :id="'input_'+item.id"
                        :name="item.name"
                        :options="item.option"
                        v-model="form[item.name+'_'+item.id]"
                        :type="item.type"
                        :placeholder="item.placeholder"
                        :url="item.url ? item.url : null"
                        v-validate="fetchValidationRules(item)"
                        :state="errors.has(item.name) ? false : null"
                        :supportedFormats="item.supportedFormats ? item.supportedFormats : null"
                        @input="onInput"                
                    />
                    <span v-show="errors.has(item.name)" class="invalid-feedback" style="display: block">{{ errors.first(item.name) }}</span>
                </b-form-group>
            </template>

            <b-button type="submit" variant="primary">Submit</b-button>
             <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        </div>
        <div classs="col-sm-8">
            <h5>Errors</h5>
            <pre>{{ errors }}</pre>
            <h5 class="d-none">Fields</h5>
            <pre class="d-none">{{ fields }}</pre>
        </div>
    </div>
</template>

<script>
//
export default {
  name: 'form-example',
  data: function() {
    return {
        formFields: [
            {
                id: 10,
                type: 'text',
                name: 'name',
                label: 'Name',
                placeholder: 'Enter Name',
                required: true
            },
            {
                id: 20,
                type: 'email',
                name: 'email',
                label: 'Email',
                placeholder: 'Enter Email',
                required: true
            },
            {
                id: 21,
                type: 'password',
                name: 'password',
                label: 'Password',
                placeholder: 'Enter Password',
                required: true,
                minLength: 6,
                maxLength: 10
            },
            {
                id: 30,
                type: 'number',
                name: 'age',
                label: 'Age',
                placeholder: 'Enter Age',
                required: true,
                min: 18,
                max: 99
            },
            {
                id: 40,
                type: 'dropdown',
                name: 'dropdown',
                label: 'Dropdown',
                option: [
                    { value: null, text: 'Please select an option' },
                    { value: 'a', text: 'This is First option' },
                    { value: 'b', text: 'Selected Option' },
                    { value: 'c', text: 'This is an option with object value' },
                    { value: 'd', text: 'This one is disabled', disabled: true }
                ],
                required: true
            },
            {
                id: 43,
                type: 'dropdown',
                name: 'dropdownDynamic',
                label: 'Dropdown with Options from url',
                url:'http://localhost:3000/dropdown',
                required: true
            },
            {
                id: 45,
                type: 'multiselect',
                name: 'multiselect',
                label: 'Multiselect',
                option: [
                    { value: null, label: 'Please select an option' },
                    { value: 'js', label: 'Javascript' },
                    { value: 'java', label: 'Java' },
                    { value: 'ruby', label: 'Ruby' },
                    { value: 'php', label: 'PHP', disabled: true }
                ],
                required: true
            },
            {
                id: 46,
                type: 'multiselect',
                name: 'multiselectDynamic',
                label: 'Multiselect with Options from url',
                url:'http://localhost:3000/dropdown',
                required: true
            },
            {
                id: 48,
                type: 'tags',
                name: 'tags',
                label: 'Tags Input',
                option: [
                    { value: null, label: 'Please select an option' },
                    { value: 'js', label: 'Javascript' },
                    { value: 'java', label: 'Java' },
                    { value: 'ruby', label: 'Ruby' },
                    { value: 'php', label: 'PHP', disabled: true }
                ],
                required: true
            },
            {
                id: 49,
                type: 'tags',
                name: 'tagsDynamic',
                label: 'Tags input with Options from url',
                url:'http://localhost:3000/dropdown',
                required: true
            },
            {
                id: 50,
                type: 'checkbox',
                name: 'checkbox',
                label: 'Checkbox',
                option: [
                    {label: 'Orange', value: 'orange'},
                    {label: 'Apple', value: 'apple'},
                    {label: 'Pineapple', value: 'pineapple'},
                    {label: 'Grape', value: 'grape', disabled: true}
                ],
                required: true
            },
            {
                id: 60,
                type: 'radio',
                name: 'radio',
                label: 'Radio',
                option: [
                    { label: 'Toggle this custom radio', value: 'first' },
                    { label: 'Or toggle this other custom radio', value: 'second' },
                    { label: 'This one is Disabled', value: 'third', disabled: true }
                ],
                required: true
            },
            {
                id: 70,
                type: 'date',
                name: 'date',
                label: 'Date',
                placeholder: 'Pick Date',
                required: true
            },
            {
                id: 80,
                type: 'time',
                name: 'time',
                label: 'Time',
                placeholder: 'Pick Time',
                required: true
            },
            {
                id: 90,
                type: 'datetime',
                name: 'datetime',
                label: 'Datetime',
                placeholder: 'Pick Datetime',
                required: true
            },
            {
                id: 91,
                type: 'daterange',
                name: 'daterange',
                label: 'Date Range',
                placeholder: 'Pick a date range',
                required: true
            },
            {
                id: 100,
                type: 'textarea',
                name: 'textarea',
                label: 'Textarea',
                placeholder: 'Pick Textarea',
                required: true
            },
            {
                id: 110,
                type: 'file',
                name: 'singlefile',
                label: 'Any Single File',
                placeholder: 'Pick any file',
                required: true
            },
            {
                id: 113,
                type: 'file',
                name: 'imageFile',
                label: 'Image File Only',
                placeholder: 'Pick image file only',
                required: true,
                supportedFormats: ['.jpg','.png']
            },
            {
                id: 114,
                type: 'file',
                name: 'documentFiles',
                label: 'PDF Document File only',
                placeholder: 'Pick PDF file only',
                required: true,
                supportedFormats: ['.pdf']
            }
        ],
        form: {},
    }
  },
  created() {
      this.formFields.forEach(field => this.form[field.name+'_'+field.id] = '');
      console.log(this.form)
  },
  methods: {
    validateBeforeSubmit(evt) {
        // Reset validator
        this.$validator.reset();
        evt.preventDefault();
        // console.log(this.$validator.validateAll());
        this.wait(0, () => {
            this.$validator.validateAll().then((result) => {
            console.log('result', result);
            if (result) {
                alert(JSON.stringify(this.form))
                //alert('Form Submitted!');
                return;
            }
            console.log("---> Form upon error : ", this.form);
            //alert('Correct them errors!');
            })
        });
    },
    onReset (evt) {
        evt.preventDefault();
        this.errors.clear();
    },
    onInput(e) {
        console.log("---> on input : "+e, this.errors, this.form);
        
        // Validate if any form field is dirty, then validate the entire form
        /*if(Object.keys(this.fields).some(key => this.fields[key].dirty)) {
            this.$validator.validateAll()
        }*/
        
    },
    fetchValidationRules(field) {
        let rule = {}
        // console.log('fetchValidationRules',field.name, this.formFields);
        
        // Set Required
        if(field.required) {
            rule.required = field.required;
        }

        // Validation rules based upon field type
        if(field.type == 'text' 
            || field.type == 'password'
            || field.type == 'textarea' 
            || field.type == 'editor') {
            if(field.minLength) {
                rule.min = field.minLength
            }
            if(field.maxLength) {
                rule.max = field.maxLength
            }
        }
        else if(field.type == 'email') {
            rule.email = true;
        }
        else if(field.type == 'number') {
            rule.numeric = true
            if(field.min) {
                rule.min_value = field.min
            }
            if(field.max) {
                rule.max_value = field.max
            }
        }    
        return rule;
    },
    wait(ms, cb) {
        setTimeout(cb, ms);
    }
  }
}
</script>
