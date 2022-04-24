<template>
  <div class="nt-quote">
    <div class="divider"></div>
    <div class="content">
      <p class="is-your-peace-being-disrupted">
        Is your peace being disrupted?
      </p>
      <p class="fearful-of-aging">Fearful of aging?</p>
      <p class="fearful-of-aging">Need support for aging independently?</p>
      <p class="faced-with-supporting-a-challenging-situ">
        Faced with supporting a challenging situation?
      </p>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.nt-quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.divider {
  width: 1254px;
  height: 64px;
  background-color: var(--midnight-blue);
  box-shadow: 0 2px 1px 0 var(--transparent-white-1);
}
.divider:not(:last-of-type) {
  margin-bottom: 11px;
}
.content {
  margin-bottom: 11px;
  padding: 98px 29px 55px 17px;
  position: relative;
}
.is-your-peace-being-disrupted {
  height: 108px;
  width: 1019px;
  color: var(--midnight-blue);
  display: flex;
  text-align: center;
  position: relative;
  font-family: var(--dm-sans-33-regular-family);
  font-size: var(--dm-sans-33-regular-size);
  font-weight: var(--dm-sans-33-regular-weight);
  line-height: var(--dm-sans-33-regular-line-height);
}
.fearful-of-aging {
  height: 108px;
  width: 1019px;
  color: var(--midnight-blue);
  display: flex;
  text-align: center;
  position: absolute;
  left: calc(50% - 1019px / 2);
  top: calc(50% - 108px / 2);
  font-family: var(--dm-sans-33-regular-family);
  font-size: var(--dm-sans-33-regular-size);
  font-weight: var(--dm-sans-33-regular-weight);
  line-height: var(--dm-sans-33-regular-line-height);
}
.faced-with-supporting-a-challenging-situ {
  height: 98px;
  width: 1061px;
  color: var(--midnight-blue);
  display: flex;
  text-align: center;
  position: absolute;
  left: calc(50% - 1061px / 2);
  top: calc(50% - 98px / 2);
  font-family: var(--dm-sans-33-regular-family);
  font-size: var(--dm-sans-33-regular-size);
  font-weight: var(--dm-sans-33-regular-weight);
  line-height: var(--dm-sans-33-regular-line-height);
}
</style>
