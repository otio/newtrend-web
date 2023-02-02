<template>
   <FormKit 
      type="form" 
      submit-label="Send"
      action="https://usebasin.com/f/1bc96fa15071"
      method="post"
    >
      <FormKit type="text" placeholder="First Name" name="first" validation="required|max:150" />
      <FormKit type="text" placeholder="Last Name" name="last" validation="required|max:150" />
      <FormKit type="email" placeholder="Email" name="email" validation="required|email" />
      <FormKit
        type="tel"
        placeholder="Phone: xxx-xxx-xxxx"
        validation="matches:/(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/"
        :validation-messages="{
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }"
        validation-visibility="dirty"
      />
      <FormKit
        type="textarea"
        rows="5"
        placeholder="Message: Anything you'd like to share in advance is always welcome 😊"
        validation="max:300"
      />
  </FormKit>
</template>
<style>
.formkit-form {
  width: 100%;
}

</style>