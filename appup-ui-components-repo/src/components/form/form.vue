

<template>
    <div>
        <div class="col-12 p-5" v-show="showError||showSuccess">
            <appup-alert :message="messageAlert" alertType="failure" :show="showError" @dismissed="showError=false"></appup-alert>
            <appup-alert :message="messageAlert" alertType="success" :show="showSuccess" @dismissed="showSuccess=false"></appup-alert>
        </div>

<div v-if=!inline>
  <b-form
            :id=id
            class="appup-form"
            @submit="onSubmit"
            @reset="onReset"
            novalidate>

        
            <div class="mb-2" :class="{'d-none': position!='top',
                                        'text-center': direction=='center',
                                        'text-left': direction=='left',
                                        'text-right': direction=='right' }">
                <b-button class="mr-3" v-for="(btn, index) in buttons" :key="`btn-top-${index}`" :type="btn.type" :variant="btn.variant"
                    @click="onCustomClick(btn.function, $event, btn)">{{btn.label}}</b-button>
                <br>
            </div>
            <template v-for="(item, n) in formFields">
                <b-form-group :id="'fgroup_'+item.id"
                    :label="item.label"
                    :label-for="'input_'+item.id"
                    :key="n">
                    <appup-input v-if="!item.component ||item.component == 'appup-input'"
                        :class ="{ 'text-center': item.position === 'center',
                                    'text-left': item.position === 'left',
                                    'text-right': item.position === 'right' }"
                        :id="'input_'+item.id"
                        :disabled=item.disabled
                        :name="item.name"
                        :options="item.option"
                        v-model="form[item.name+'_'+item.id]"
                        :type="item.type"
                        :addElement="item.addElement"
                        :placeholder="item.placeholder"
                        :url="item.url ? item.url : null"
                        v-validate="fetchValidationRules(item)"
                        :state="errors.has(item.name) ? false : null"
                        :isiframe="item.isiframe?item.isiframe:false"
                         :width = item.width
                        :height = item.height
                        :supportedFormats="item.supportedFormats ? item.supportedFormats : null"
                        @input="onInput"
                        @dynamicAddInput="dynamicAddInput"
                    />
                    <div v-else :class ="{ 'text-center': item.position === 'center',
                                            'text-left': item.position === 'left',
                                            'text-right': item.position === 'right' }">
                        <component :name="item.component" :is="item.component" v-bind="item.option" v-validate="fetchValidationRules(item)">
                            <div>You are seeing this message in window which is displayed center of the screen</div>
                            <div v-for="(item, index) in item.option.items" :key="index" :slot="item.id">
                                <appup-form v-bind="item.content"/>
                            </div>
                        </component>
                    </div>
                    <div :class="'text-'+item.positionHints"><small v-if="item.hints">{{item.hints}}</small></div>
                    <span v-show="errors.has(item.name)" class="invalid-feedback" style="display: block">{{ errors.first(item.name) }}</span>
                </b-form-group>
            </template>
            <div class="mb-2" :class="{'d-none': position!='bottom',
                                        'text-center': direction=='center',
                                        'text-left': direction=='left',
                                        'text-right': direction=='right'}">
                <b-button class="mr-3" v-for="(btn, index) in buttons" :key="`btn-bottom-${index}`" :type="btn.type" :variant="btn.variant"
                @click="onCustomClick(btn.function, $event, btn)">{{btn.label}}</b-button>
            </div>
            <pre class="d-none">{{ inputs }}</pre>
        </b-form>
</div>
<div v-else v-show="!loading">
  <b-form
            :id=id
            class="appup-form"
            @submit="onSubmit"
            @reset="onReset"
            novalidate inline>

        
            <div class="mb-2" :class="{'d-none': position!='top',
                                        'text-center': direction=='center',
                                        'text-left': direction=='left',
                                        'text-right': direction=='right' }">
                <b-button class="mr-3" v-for="(btn, index) in buttons" :key="`btn-top-${index}`" :type="btn.type" :variant="btn.variant"
                    @click="onCustomClick(btn.function, $event, btn)">{{btn.label}}</b-button>
                <br>
            </div>
            <template v-for="(item, n) in formFields">
                <b-form-group :id="'fgroup_'+item.id"
                    :label="item.label"
                    :label-for="'input_'+item.id"
                    :key="n">
                   
                    <appup-input v-if="!item.component ||item.component == 'appup-input'"
                        :class ="{ 'text-center': item.position === 'center',
                                    'text-left': item.position === 'left',
                                    'text-right': item.position === 'right' }"
                        :id="'input_'+item.id"
                        :disabled=item.disabled
                        :name="item.name"
                        :options="item.option"
                        v-model="form[item.name+'_'+item.id]"
                        :type="item.type"
                        :addElement="item.addElement"
                        :placeholder="item.placeholder"
                        :url="item.url ? item.url : null"
                        :isiframe="item.isiframe?item.isiframe:false"
                        :width = item.width
                        :height = item.height
                        v-validate="fetchValidationRules(item)"
                        :state="errors.has(item.name) ? false : null"
                        :supportedFormats="item.supportedFormats ? item.supportedFormats : null"
                        @input="onInput"
                        @dynamicAddInput="dynamicAddInput"
                       
                    />
                     
                    <div v-else :class ="{ 'text-center': item.position === 'center',
                                            'text-left': item.position === 'left',
                                            'text-right': item.position === 'right' }">
                        <component :name="item.component" :is="item.component" v-bind="item.option" v-validate="fetchValidationRules(item)">
                            <div>You are seeing this message in window which is displayed center of the screen</div>
                            <div v-for="(item, index) in item.option.items" :key="index" :slot="item.id">
                                <appup-form v-bind="item.content"/>
                            </div>
                        </component>
                    </div>
                    <span v-show="errors.has(item.name)" class="invalid-feedback" style="display: block">{{ errors.first(item.name) }}</span>
                </b-form-group>
            </template>
            <div class="mb-2" :class="{'d-none': position!='bottom',
                                        'text-center': direction=='center',
                                        'text-left': direction=='left',
                                        'text-right': direction=='right'}">
                <b-button class="mr-3" v-for="(btn, index) in buttons" :key="`btn-bottom-${index}`" :type="btn.type" :variant="btn.variant"
                @click="onCustomClick(btn.function, $event, btn)">{{btn.label}}</b-button>
            </div>
            <pre class="d-none">{{ inputs }}</pre>
        </b-form>
</div>

    </div>
</template>


<script>
/**
 * Appup Form component rendering form elements based upon provided schema. Includes validation rules as well.
 *
 * TODOs:
 *
 * Reset form elements
 *
 * Submit form data to API
 *
 * Testing edit with form data prepopulated
 *
 * Dynamic element added based on other component selection
 */
import { AjaxRequests } from "@/mixins/ajaxRequests";
import { Login } from "@/mixins/login";
import { Signup } from "@/mixins/signup";
import { ChangePassword } from "@/mixins/change-password";
import { SettingPrefrences } from "@/mixins/setting-preferences";
import { EmailVerification } from "@/mixins/email-verification";
export default {
  name: "appup-form",
  mixins: [
    AjaxRequests,
    Login,
    Signup,
    ChangePassword,
    SettingPrefrences,
    EmailVerification
  ],
  props: {
    /**
     * Id of input elements.
     */
    id: {
      type: String,
      required: false
    },

    /**
     * Fields to be rendered in the form.
     *
     * Refer to supported type of input fields in appup-input
     *
     * Object schema to be used for a formField
     * `
     * id: unique string,
     * type: refer to appup-input types,
     * name: unique name,
     * label: Label to be rendered for the input field,
     * placeholder: Placeholder to be displayed if applicable,
     * required: true/false
     * min
     * `
     */
    formFields: {
      type: Array,
      required: true
    },

    /**
     * Position of group buttons.
     *
     * `top`, `bottom`
     */
    position: {
      type: String,
      required: false,
      default: "bottom"
    },

    /**
     * Position of group buttons.
     *
     * `center`, `left`, `right`
     */
    direction: {
      type: String,
      required: false,
      default: "left"
    },

    /**
     * Button of form.
     *
     * `submit, reset, cancel`
     */
    buttons: {
      type: Array,
      required: false
    },
    /**
     * Get initial value.
     *
     */
    initialFunction: {
      type: Array,
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data: function() {
    return {
      form: {},
      typeAlert: "failure",
      showSuccess: false,
      showError: false,
      messageAlert: ""
    };
  },
  watch: {
    formFields() {
      this.formFields.forEach(field => {
        if (field.function) {
          this.form[field.name + "_" + field.id] = this[field.function](
            field.key,
            field.property
          );
        } else if (field.value) {
          this.form[field.name + "_" + field.id] = field.value.toString()
            ? field.type == "text" ? field.value.toString() : field.value
            : "";
        }
      });
    }
  },
  created() {
    if (this.initialFunction) {
      this.initialFunction.forEach(item => {
        console.log("initial", item);
        let dataPost
        if (item.method === "post") {
          dataPost = {};
          for (let i = 0; i < item.config.params.length; i++) {
            dataPost[item.config.params[i].key] = item.config.params[i].prefix+this[item.config.params[i].function](
              item.config.params[i].id
            );
          }
        } else {
          dataPost = item.config.params
            ? this[item.config.params.function](item.config.params.key)
            : "";
        }
        this[item.function](
          item.key,
          item.url,
          dataPost,
          [this.setLocalstorage, this.resetForm],
          item.error ? this[item.error] : undefined
        );
      });
    } else {
      this.resetForm();
    }
    console.log(this.formFields, this.form);
  },
  methods: {
    onSubmit(evt) {
      // Reset validator
      this.$validator.reset();
      evt.preventDefault();

      this.wait(0, () => {
        this.$validator.validateAll().then(result => {
          console.log("result", result);
          if (result) {
            console.log(JSON.stringify(this.form));
            return;
          }
          console.log("Correct them errors!");
        });
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.resetForm();
    },
    onCustomClick(callback, event, button, index = 0) {
      if (button.action[index]) {
        switch (button.action[index].type) {
          case "reset-form":
            console.log("reset-form");
            this.resetForm();
            break;
          case "setLocalstorage":
            console.log("setLocalstorage");
            this.setLocalstorage(
              button.action[index].data.key,
              this.form[button.action[index].data.value],
              index !== button.action.length - 1,
              event,
              button,
              index + 1
            );
            break;
          case "validate":
            console.log("validate");
            this.onValidate(
              event,
              button.action[index].data,
              button,
              index !== button.action.length - 1,
              index + 1
            );
            break;
          case "navigate":
            console.log("navigate");
            this.onNavigate(
              event,
              button.action[index].data,
              button,
              index !== button.action.length - 1,
              index + 1
            );
            break;
          case "ajax":
            console.log("ajax");
            this.onAjax(
              event,
              button.action[index].data,
              button,
              index !== button.action.length - 1,
              index + 1
            );
            break;
          case "showAlertSuccess":
            console.log("ajax");
            this.showAlertSuccess({ data: button.action[index].data });
            break;
        }
      } else {
        this[callback](event, button);
      }
    },
    onCancel(evt) {
      console.log("cancel");
      evt.preventDefault();
      this.resetForm();
    },
    onNavigate(evt, action, btn, callback, index) {
      console.log("navigate", action, btn);
      evt.preventDefault();
      if (action != null) {
        this.$router.push("/" + action);
      }
    },
    onSuccess(evt, success, response) {
      console.log("response", response);
      switch (success.type) {
        case "navigate":
          this.onNavigate(evt, success.data);
          break;
      }
      evt.preventDefault();
    },
    onError(evt, error) {
      switch (error.type) {
        case "navigate":
          this.onNavigate(evt, error.data);
          break;
      }
      evt.preventDefault();
    },
    onAjax(evt, action, btn, callback, index) {
      console.log(evt, action, btn, this);
      evt.preventDefault();
      let dataPost = {};
      for (let i = 0; i < action.params.length; i++) {
        dataPost[action.params[i].key] = this.form[action.params[i].value];
      }
      let config = {
        event: evt,
        action: action,
        button: btn,
        callback: callback,
        index: index,
        storage: action.success ? action.success.config : ""
      };
      this[action.function](
        action.url,
        action.method == "post" ? dataPost : "",
        action.success
          ? this[action.success.function]
          : callback ? this.onCustomClick : undefined,
        action.error ? this[action.error] : undefined,
        config
      );
    },
    onInput(e) {
      // console.log("---> on input : "+e, this.errors, this.form);
      // this.$emit('input', e)
      // EventBus.$emit('input', e);
    },
    fetchValidationRules(field) {
      let rule = {};
      if (field.name == "Repeat Password") {
        rule.required = true;
        rule.confirmed = field.confirmed;
      }
      // Set Required
      if (field.required) {
        rule.required = field.required;
      }

      // Validation rules based upon field type
      if (
        field.type == "text" ||
        field.type == "password" ||
        field.type == "textarea" ||
        field.type == "textarea" ||
        field.type == "editor"
      ) {
        if (field.minLength) {
          rule.min = field.minLength;
        }
        if (field.maxLength) {
          rule.max = field.maxLength;
        }
      } else if (field.type == "email") {
        rule.email = true;
      } else if (field.type == "number") {
        rule.numeric = true;
        if (field.min) {
          rule.min_value = field.min;
        }
        if (field.max) {
          rule.max_value = field.max;
        }
      }
      return rule;
    },
    wait(ms, cb) {
      setTimeout(cb, ms);
    },
    setValueForm() {
      console.log("set Value Form");
      this.formFields.forEach(field => {
        if (field.function) {
          this.form[field.name + "_" + field.id] = this[field.function](
            field.key,
            field.property
          );
        } else if (field.value) {
          this.form[field.name + "_" + field.id] = field.value.toString()
            ? field.type == "text" ? field.value.toString() : field.value
            : "";
        } else {
          this.form[field.name + "_" + field.id] = "";
        }
      });
    },
    resetForm() {
      console.log("reset form");
      this.$validator.reset();
      this.errors.clear();
      this.setValueForm();
      this.$forceUpdate();
    },
    onValidate(evt, action, btn, callback, index) {
      evt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (result) {
          if (callback) {
            this.onCustomClick("", evt, btn, index);
          }
        }
      });
    },
    dynamicAddInput(arr, id, type) {
      console.log(arr, id, type);
      for (let i = 0; i < this.formFields.length; i++) {
        if (
          this.formFields[i].id.toString().split("-")[3] === "added" &&
          this.formFields[i].id.split("-")[1] === type
        ) {
          this.formFields.splice(i, 1);
          i--;
        }
      }
      let isArray = true;
      if (!Array.isArray(arr)) {
        arr = [arr];
        isArray = false;
      }
      setTimeout(() => {
        for (let i = 0; i < this.formFields.length; i++) {
          if (this.formFields[i].id.toString() === id.split("_")[1]) {
            arr.forEach(child => {
              let e = Object.assign({}, child);
              e.name = type + "-" + e.value + "-added";
              e.id = id + "-" + type + "-" + e.value + "-added";
              this.form[e.name + "_" + e.id] = "";
              console.log(e);
              this.formFields.splice(i + 1, 0, e);
            });
            return;
          }
        }
      }, 0);
    },
    saveLocalstorage(success, config) {
      let tmp = JSON.parse(success.data);
      console.log(success, config);
      console.log(tmp);
      if (tmp.status === "failure") {
        this.showError = true;
        this.messageAlert = tmp.responseText;
        return;
      } else {
        config.storage.forEach(item => {
          console.log(item);
          this.$localStorage.set(item, tmp[item]);
          this.setLocalstorage(item, tmp[item]);
        });
        if (config.callback) {
          this.onCustomClick("", config.event, config.button, config.index);
        }
      }
    },
    setLocalstorage(key, value, callback, event, button, index) {
      console.log("setLocalstorage", key, value);
      this.$localStorage.set(key, value);
      if (callback) {
        this.onCustomClick("", event, button, index);
      }
    },
    getLocalstorage(key, param) {
      if (param) {
        console.log(JSON.parse(this.$localStorage.get(key))[param]);
        return JSON.parse(this.$localStorage.get(key))[param];
      } else {
        console.log(this.$localStorage.get(key));
        return this.$localStorage.get(key);
      }
    },
    showAlertError(error) {
      console.log(error);
      this.showError = true;
      this.messageAlert = error.data;
      // transfer.button.action[transfer.index].type = 'do nothing';
      // this.onCustomClick("", transfer.event, transfer.button, transfer.index);
    },
    showAlertSuccess(error, transfer) {
      console.log(error, transfer);
      this.showSuccess = true;
      this.messageAlert = error.data;
      if (transfer.callback) {
        this.onCustomClick("", transfer.event, transfer.button, transfer.index);
      }
    }
  }
};
</script>
