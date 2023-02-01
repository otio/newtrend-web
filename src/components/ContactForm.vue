<template>
   <FormKit 
      type="form" 
      submit-label="Send"
      action="https://usebasin.com/f/1bc96fa15071"
      method="post"
    >
      <FormKit type="text" label="First Name" name="first" validation="required|max:150" />
      <FormKit type="text" label="Last Name" name="last" validation="required|max:150" />
      <FormKit type="email" label="Email" name="email" validation="required|email" />
      <FormKit
        type="tel"
        label="Phone"
        placeholder="xxx-xxx-xxxx"
        validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
        :validation-messages="{
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }"
        validation-visibility="dirty"
      />
      <FormKit
        type="textarea"
        label="Message"
        rows="10"
        placeholder="Anything you'd like to shae in advance is always welcome. :)"
        validation="max:300"
      />
  </FormKit>
</template>