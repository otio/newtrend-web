<script lang="ts" setup>

const schema = [
  {
    $formkit: 'text',
    label: 'First Name',
    validation: 'required'
  },
  {
    $formkit: 'text',
    label: 'Last Name',
    validation: 'required'
  },
  {
    $formkit: 'email',
    label: 'Email address',
    validation: 'required'
  },
  {
    $formkit: '',
    label: 'Phone Number',
    validation: ''
  },
  {
    $formkit: 'textarea',
    label: 'Message',
    validation: '',
    placeholder: 'Anything you potentially might want to let me know about before we talk.'
  },
]
</script>

<template>

    <FormKit type="form">
      <FormKitSchema :schema="schema" />
    </FormKit>

</template>