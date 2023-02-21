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
        placeholder="Phone: 555-555-5555"
        validation="matches:/(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/"
        :validation-messages="{
          matches: 'Phone number must be in the format 555-555-5555',
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
  @apply grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:(bg-gray-800 border-gray-700) sm:grid-cols-2;
}
</style>