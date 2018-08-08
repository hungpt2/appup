<template>
  <div>
    <div class="p-4 m-0" align-v="center">
      <table class="w-100">
        <tbody>
          <td class="w-60">
             <appup-form class="p-6 text-left w-75 m-auto"
              id='form'
              :position="'bottom'"
              :direction="'center'"
              :initialFunction="[
                {function:'getProfile',url:'https://my.appup.com/get_tables_data/DEVELOPER_PROFILE/', error: 'showAlertError', key:'profileIdInfo',config:{params:{function:'getLocalstorage', key:'profileId'}}}
              ]"
              :formFields="[{id: 'user_id', type: 'hidden',name: 'User ID',required: true, disabled:true, function:'getLocalstorage', key:'profileIdInfo', property:'ID'},
                            {function:'getLocalstorage', key:'profileIdInfo', property:'NAME', id: 'name',type: 'text',name: 'Name',label: 'Name',required: true},
                            {function:'getLocalstorage', key:'profileIdInfo', property:'EMAIL', id: 'email',type: 'email',name: 'Email',label: 'Email',required: true},
                            {function:'getLocalstorage', key:'profileIdInfo', property:'ABOUT_ME', id: 'bio',type: 'textarea',name: 'Bio',label: 'Bio',required: true},
                            {function:'getLocalstorage', key:'profileIdInfo', property:'FULL_PHOTO_URL', id: 'url',type: 'text',name: 'Url',label: 'Url',required: true},
                            {function:'getLocalstorage', key:'profileIdInfo', property:'COMPANY', id: 'company',type: 'text',name: 'Company',label: 'Company',required: true},
                            {id: 'checkbox',type: 'checkbox',name: 'Confirm',addElement: false,position: 'left',option: [{label: 'I am not a Robot', value: true},],required: true}]"
              :buttons="[{label: 'Cancel',variant: 'default',type: 'reset',function: 'onReset'}, 
                            {label: 'Save',variant: 'primary',type: 'action',action: [{type: 'validate'},
                                                                                        {type: 'ajax',data: {function:'changeProfile', method:'post', 
                                                                                                            url:'https://my.appup.com/table_update/DEVELOPER_PROFILE',
                                                                                                            params:[{key:'NAME', value: 'Name_name'},
                                                                                                                    {key:'EMAIL', value: 'Email_email'},
                                                                                                                    {key:'COMPANY', value: 'Company_company'},
                                                                                                                    {key:'ID', value: 'User ID_user_id'},
                                                                                                                    {key:'ABOUT_ME', value: 'Bio_bio'}], 
                                                                                                            success: {function:'showAlertSuccess'},
                                                                                                            error:'showAlertError'}},
                                                                                        {type: 'reset-form'}]}]"/>
          </td>
          <td class="w-40">
            <appup-imageupload
                id="xlargeImageupload"
                label="Upload Profile Picture"
                :url="'http://localhost:3000/uploadImage'"
                size="xlarge"
                initialImage="default.jpg" />
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "appup-settings",
};
</script>
<style src="./style/Setting.scss" lang="scss"></style>
