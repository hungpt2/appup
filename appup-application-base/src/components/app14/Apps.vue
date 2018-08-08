<template>
  <div>
    <div align-h="center" class="mt-5 d-flex">
      <table class="w-50 m-auto">
        <tbody>
          <td>
            <div class="w-50 text-center m-auto">
              <appup-button-dropdown :id="'dropdown-button'" :type="'image'" :label="'Contact'" 
                            :img="{src: 'appup-signup.png', alt: 'image option'}"
                            :listItem="[{type: 'item-image',label: 'Get Apps',src: 'search', alt: 'image option'},
                                        {type: 'item-image',label: 'Build your own',src: 'file-code', alt: 'image option'}]" />
            </div>
          </td>
          <td>
            <div class="w-50 text-center m-auto" align-self="center">
              <appup-button-dropdown :id="'dropdown-button'" :label="'Appup'" :listItem="[{type: 'item',label: 'Get Apps',icon: 'search'},
                                                                                {type: 'item',label: 'Build your own',icon: 'file-code'},]" 
                            :iconBtnText="'plus'" :sizeIcon="13"
                            :classBtnDropdown="'btn-primary'" :variant="'primary'"  />
            </div>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

export default {
  name: "appup-app14-apps",
};
</script>
