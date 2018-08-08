<template>
  <div>
    <div class="row p-4 m-0 text-center overflow-auto" align-v="center">
      <table class="w-100">
        <tbody>
          <td>
            <div class="col">
              <div no-body class="card text-white bg-secondary credit-form min-w-240 max-w-300 m-auto">
                <div class="row p-4 m-0 text-center" align-v="center">
                  <table class="w-100">
                    <tbody>
                      <td class="w-15">
                        <div>
                          <appup-icon class="text-dark" name="address-book" :size="30" />
                        </div>
                      </td>
                      <td class="w-85">
                        <div>
                          <div>Visa</div>
                          <div>(Ending with 0633)</div>
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="col">
              <appup-icon class="text-dark" name="long-arrow-alt-right" :size="80" />
            </div>
          </td>
          <td>
            <div class="col" v-b-modal.update-credit-card>
              <div no-body class="card text-dark bg-light min-w-240 max-w-300 m-auto">
                <div class="row p-4 m-0 text-center" align-v="center">
                  <table class="w-100">
                    <tbody>
                      <td class="w-15">
                        <div>
                          <appup-icon class="text-dark" name="edit" :size="30" />
                        </div>
                      </td>
                      <td class="w-85">
                        <div>
                          <div>Update</div>
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </td>
        </tbody>
      </table>
    </div>
    <div class="p-4 m-0 text-left">
      <div class="pl-4 pr-4 pt-4 w-100">
        <p>Payment History</p>
      </div>
      <div class="pl-4 pr-4 pb-4 w-100">
        <appup-table 
          :fieldsTable="[{ label: 'Id', key: 'id', sortable: true },{ label: 'Date', key: 'date', sortable: true },{ label: 'Payment', key: 'payment', sortable: true },{ label: 'Amount', key: 'amount', sortable: true },{ label: 'Recipt', key: 'recipt'}]" 
          :items="[{id: 5668545,payment: 'Pending',amount: '600$',recipt: 'yes',date: '2016-01-05T08:21:53 -06:-30'}]" 
          :id="'payment-history'"
        />
      </div>
    </div>
    <appup-modal
        :id="'update-credit-card'"
        :title="'Credit Card Update'"
        size="large"
        type="confirm"
        okLabel="Update"
        cancelLabel="Cancel">
        <div class="text-center">
            <appup-form class="text-left w-75 m-auto"
                :position="'bottom'"
                :direction="'center'"
                :formFields ="[{id: 'card_number',type: 'number',name: 'Card Number',label: 'Card Number',minLength: 6,maxLength: 20,required: true},{id: 'expire',type: 'number',name: 'Expire Month',label: 'Expire Month',minLength: 1,maxLength: 2,required: true},{id: 'expire',type: 'number',name: 'Expire Year',label: 'Expire Year',minLength: 2,maxLength: 4,required: true},{id: 'cvv',type: 'number',name: 'CVV',label: 'CVV',minLength: 3,maxLength: 3,required: true},{id: 'country',type: 'text',name: 'Country',label: 'Country',required: true},{id: 'state',type: 'text',name: 'State',label: 'State',required: true},{id: 'zip',type: 'number',name: 'Zip',label: 'Zip (Postal)',required: true},{id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,position: 'center',option: [{label: 'I am not a Robot', value: true},],required: true}]"  />
        </div>
    </appup-modal>
  </div>
</template>
<script>

export default {
  name: "appup-billings"
};
</script>
<style src="./style/Billings.scss" lang="scss"></style>
