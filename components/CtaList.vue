<template>
  <div class="nt-pointers-list">
    <p class="header">
      Let&#039;s do something to produce positive change you will believe in
    </p>
    <div class="list">
      <div class="argument-1">
        <img
          alt=""
          class="checkmark-2-1"
          src="@/assets/images/check-mark.svg"
        />
        <p class="text-1">Get support from a qualified Behavioral Analyst</p>
      </div>
      <div class="argument-1">
        <img
          alt=""
          class="checkmark-2-1-two"
          src="@/assets/images/check-mark.svg"
        />
        <p class="text-2">Scientific and proven methods</p>
      </div>
      <div class="argument-1">
        <img
          alt=""
          class="checkmark-2-1-three"
          src="@/assets/images/check-mark.svg"
        />
        <p class="text-3">Witness change and improvement</p>
      </div>
      <div class="argument-1">
        <img
          alt=""
          class="checkmark-2-1-two"
          src="@/assets/images/check-mark.svg"
        />
        <p class="text-4">Find peace again</p>
      </div>
      <div class="argument-1">
        <img
          alt=""
          class="checkmark-2-1-two"
          src="@/assets/images/check-mark.svg"
        />
        <p class="text-5">Track your growth with personal reports</p>
      </div>
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
.nt-pointers-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header {
  width: 1110px;
  color: var(--midnight-blue);
  text-align: center;
  margin-bottom: 72px;
  font-family: var(--dm-serif-text-33-regular-family);
  font-size: var(--dm-serif-text-33-regular-size);
  font-weight: var(--dm-serif-text-33-regular-weight);
  line-height: var(--dm-serif-text-33-regular-line-height);
}
.list {
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.argument-1 {
  display: flex;
  align-items: flex-start;
}
.argument-1:not(:last-of-type) {
  margin-bottom: 22px;
}
.checkmark-2-1 {
  width: 19.5px;
  height: 20px;
  margin-top: 3.97px;
  margin-right: 19.5px;
}
.text-1 {
  height: 20px;
  width: 461.17px;
  color: var(--dim-gray);
  display: flex;
  font-family: var(--inter-20-regular-family);
  font-size: var(--inter-20-regular-size);
  font-weight: var(--inter-20-regular-weight);
  line-height: var(--inter-20-regular-line-height);
}
.checkmark-2-1-two {
  width: 19.5px;
  height: 20px;
  margin-top: 3.97px;
  margin-right: 19.56px;
}
.text-2 {
  height: 19.87px;
  width: 417.04px;
  color: var(--dim-gray);
  display: flex;
  font-family: var(--inter-20-regular-family);
  font-size: var(--inter-20-regular-size);
  font-weight: var(--inter-20-regular-weight);
  line-height: var(--inter-20-regular-line-height);
}
.checkmark-2-1-three {
  width: 19.5px;
  height: 20px;
  margin-top: 4.07px;
  margin-right: 19.5px;
}
.text-3 {
  height: 20px;
  width: 507px;
  color: var(--dim-gray);
  display: flex;
  font-family: var(--inter-20-regular-family);
  font-size: var(--inter-20-regular-size);
  font-weight: var(--inter-20-regular-weight);
  line-height: var(--inter-20-regular-line-height);
}
.text-4 {
  height: 19.87px;
  width: 386.11px;
  color: var(--dim-gray);
  display: flex;
  font-family: var(--inter-20-regular-family);
  font-size: var(--inter-20-regular-size);
  font-weight: var(--inter-20-regular-weight);
  line-height: var(--inter-20-regular-line-height);
}
.text-5 {
  height: 19.87px;
  width: 380.78px;
  color: var(--dim-gray);
  display: flex;
  font-family: var(--inter-20-regular-family);
  font-size: var(--inter-20-regular-size);
  font-weight: var(--inter-20-regular-weight);
  line-height: var(--inter-20-regular-line-height);
}
.divider {
  width: 468.75px;
  height: 1px;
  background-color: var(--midnight-blue);
}
</style>
