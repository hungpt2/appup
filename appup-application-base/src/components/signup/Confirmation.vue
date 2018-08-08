<template>
  <div>
    <div class="row p-2 text-center" align-v="center">
      <div class="p-4 w-100">
        <h3>Check your inbox to verify your email</h3>
      </div>
      <div class="p-4 w-100">
        <h3>
          <appup-icon class="h-25 w-25 mail-icon" name="envelope" />
        </h3>

      </div>
      <div class="p-4 w-100">
        <h3>Follow the instructions to verify your email address.</h3>
      </div>
      <div class="p-4 w-100">
        <h3>
          Didn't recieve the verifycation email ? <appup-link label="Send Again"/>
        </h3>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "appup-signup-email",
};
</script>
<style src="./style/Confirmation.scss" lang="scss"></style>
