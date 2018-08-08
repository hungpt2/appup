<template>
  <div>
    <div class="p-4 m-0 text-center" align-v="center">
          <div class="p-4 w-100">
            <h3>Change Password</h3>
          </div>
          <div class="p-4 w-100">
            <appup-form class="p-6 text-left w-75 m-auto max-w-500"
              id='form'
              :position="'bottom'"
              :direction="'center'"
              :initialFunction="[
                {function:'getPwd',url:'https://my.appup.com/get_tables_data/DEVELOPERS/', error: 'showAlertError', key:'developerProfile',config:{params:{function:'getLocalstorage', key:'developerId'}}}
              ]"
              :formFields="[{id: 'user_id', type: 'hidden',name: 'User ID',required: true, disabled:true, function:'getLocalstorage', key:'developerProfile', property:'ID'},
                            {id: 'old_password', type: 'password',name: 'Old Password',label: 'Old Password',required: true, disabled:true, function:'getLocalstorage', key:'developerProfile', property:'PASSWORD'},
                            {id: 'new_password',type: 'password',name: 'New Password',label: 'New Password',minLength: 1,maxLength: 20,required: true},
                            {id: 'repeat_password',type: 'password',minLength: 1,maxLength: 20,name: 'Repeat Password',confirmed: 'New Password', label: 'Confirm New Password',required: true},
                            {id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,position: 'left',option: [{label: 'I am not a Robot', value: true},],required: true}]"
              :buttons="[{label: 'Cancel',variant: 'default',type: 'reset',function: 'onReset'}, 
                        {label: 'Save',variant: 'primary',type: 'action',action: [{type: 'validate'},
                                                                                    {type: 'ajax',data: {function:'changePwd', method:'post', 
                                                                                                            url:'https://my.appup.com/table_update/DEVELOPERS',
                                                                                                            params:[{key:'PASSWORD', value: 'New Password_new_password'},
                                                                                                                    {key:'ID', value: 'User ID_user_id'}], 
                                                                                                            success: {function:'showAlertSuccess'},
                                                                                                            error:'showAlertError'}},
                                                                                    {type: 'reset-form'}]}]"/>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appup-change-password",
};
</script>
<style src="./ChangePassword.scss" lang="scss"></style>
