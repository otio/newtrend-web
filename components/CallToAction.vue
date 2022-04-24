<template>
  <div class="nt-cta">
    <img alt="" class="cta-bg-img" src="@/assets/images/cta-bg.png" />
    <div class="cta-card"></div>
    <div class="content">
      <p class="card-header">Let&#039;s Talk</p>
      <p class="card-chaser">
        The first step in therapy is talking. Let&#039;s find a time where we
        can meet and talk about what&#039;s on your mind.
      </p>
      <div class="cta-button">
        <p class="btn-txt">Schedule a free Informal Assessment</p>
      </div>
    </div>
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
.nt-cta {
  background-color: var(--white);
  padding: 70px 40.57px 70px 40.56px;
}
.cta-bg-img {
  width: 100%;
  height: 100%;
  position: relative;
}
.cta-card {
  width: 43.4%;
  height: 54.84%;
  background-color: var(--white);
  box-shadow: 0 3px 11px 0 var(--transparent-black-3);
  position: absolute;
  left: 345.81px;
  top: 140px;
}
.content {
  width: 34.44%;
  height: 43.06%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 400.57px;
  bottom: 173px;
}
.card-header {
  width: 168.34px;
  color: var(--midnight-blue);
  text-align: center;
  margin-bottom: 19px;
  font-family: var(--dm-serif-text-39-regular-family);
  font-size: var(--dm-serif-text-39-regular-size);
  font-weight: var(--dm-serif-text-39-regular-weight);
  line-height: var(--dm-serif-text-39-regular-line-height);
}
.card-chaser {
  max-width: 420.85px;
  color: var(--midnight-blue);
  text-align: center;
  margin-bottom: 19px;
  font-family: var(--dm-sans-18-regular-family);
  font-size: var(--dm-sans-18-regular-size);
  font-weight: var(--dm-sans-18-regular-weight);
  line-height: var(--dm-sans-18-regular-line-height);
}
.cta-button {
  background-color: var(--midnight-blue);
  padding: 24px 13.18px 26px 12.17px;
  display: flex;
  align-items: center;
}
.btn-txt {
  width: 259.61px;
  color: var(--white);
  text-align: center;
  font-family: var(--dm-sans-14-regular-family);
  font-size: var(--dm-sans-14-regular-size);
  font-weight: var(--dm-sans-14-regular-weight);
  line-height: var(--dm-sans-14-regular-line-height);
}
</style>
