<template>
  <Header></Header>
  <main class="flex flex-col">
    <slot></slot>
  </main>
  <Footer></Footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
