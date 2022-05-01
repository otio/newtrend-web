<template>
  <div class="header">
    <div class="inner-nav">
      <div class="logo">
        <p class="adult">ADULT BEHAVIOR ANALYSIS</p>
        <p class="new-trend">NEW TREND</p>
      </div>
      <div class="nav-links">
        <NuxtLink to="/approach" class="the-approach">The Approach</NuxtLink>
        <NuxtLink to="/assessment" class="assessment"
          >Tailored Assessment</NuxtLink
        >
        <NuxtLink to="/about" class="about">About</NuxtLink>
        <NuxtLink to="/contact" class="contact">Contact</NuxtLink>
      </div>
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
.header {
  background-color: var(--white);
  padding: 29px 84px 28px 60px;
  box-shadow: 0 4px 23px 0 var(--transparent-black-2);
  display: flex;
  align-items: center;
}
.inner-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  margin-right: 389px;
  padding: 0 0 10px;
  position: relative;
}
.adult {
  width: 100%;
  height: 33.96%;
  color: var(--midnight-blue);
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  font-family: var(--a-bee-zee-15-regular-family);
  font-size: var(--a-bee-zee-15-regular-size);
  font-weight: var(--a-bee-zee-15-regular-weight);
  line-height: var(--a-bee-zee-15-regular-line-height);
}
.new-trend {
  width: 100%;
  height: 100%;
  color: var(--midnight-blue);
  position: relative;
  font-family: var(--a-bee-zee-36-regular-family);
  font-size: var(--a-bee-zee-36-regular-size);
  font-weight: var(--a-bee-zee-36-regular-weight);
  line-height: var(--a-bee-zee-36-regular-line-height);
}
.nav-links {
  display: flex;
  align-items: center;
}
.the-approach {
  width: 101px;
  color: var(--midnight-blue);
  margin-right: 68px;
  letter-spacing: 0.42px;
  font-family: var(--dm-sans-14-regular-family);
  font-size: var(--dm-sans-14-regular-size);
  font-weight: var(--dm-sans-14-regular-weight);
  line-height: var(--dm-sans-14-regular-line-height);
}
.assessment {
  width: 83px;
  color: var(--midnight-blue-2);
  margin-right: 74px;
  letter-spacing: 0.42px;
  font-family: var(--dm-sans-14-regular-family);
  font-size: var(--dm-sans-14-regular-size);
  font-weight: var(--dm-sans-14-regular-weight);
  line-height: var(--dm-sans-14-regular-line-height);
}
.about {
  width: 42px;
  color: var(--midnight-blue);
  margin-right: 61px;
  letter-spacing: 0.42px;
  font-family: var(--dm-sans-14-regular-family);
  font-size: var(--dm-sans-14-regular-size);
  font-weight: var(--dm-sans-14-regular-weight);
  line-height: var(--dm-sans-14-regular-line-height);
}
.contact {
  width: 56px;
  color: var(--midnight-blue);
  letter-spacing: 0.42px;
  font-family: var(--dm-sans-14-regular-family);
  font-size: var(--dm-sans-14-regular-size);
  font-weight: var(--dm-sans-14-regular-weight);
  line-height: var(--dm-sans-14-regular-line-height);
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
