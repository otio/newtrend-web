<template>
  <div class="nt-about">
    <div class="content">
      <div class="text">
        <p class="header">Richard Breuner, your Behavioral Analyst</p>
        <p class="body">
          I’m a native Californian but have lived in Reno for the last 8 years.
          Following a traditional life raising a family and a career in real
          estate, I decided to go back to school to study psychology at UNR. In
          addition to my Master’s degree in Psychology, I am a Board Certified
          Behavior Analyst (BCBA), and a licensed Behavior Analyst in Nevada and
          an Aging in Place Specialist.
        </p>
      </div>
      <div class="button">
        <p class="about-me">About me</p>
      </div>
    </div>
    <div class="image">
      <div class="rectangle-3"></div>
      <div class="rectangle-4"></div>
      <img alt="" class="richard-breuner-1" src="@/assets/images/profile.png" />
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
.nt-about {
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  margin-right: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.text {
  margin-bottom: 68px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.header {
  height: 43px;
  width: 613px;
  color: var(--midnight-blue);
  display: flex;
  text-align: center;
  margin-bottom: 24px;
  font-family: var(--dm-sans-33-regular-family);
  font-size: var(--dm-sans-33-regular-size);
  font-weight: var(--dm-sans-33-regular-weight);
  line-height: var(--dm-sans-33-regular-line-height);
}
.body {
  height: 244px;
  width: 471px;
  color: var(--dim-gray);
  display: flex;
  text-align: center;
  margin-left: 45px;
  font-family: var(--dm-sans-23-regular-family);
  font-size: var(--dm-sans-23-regular-size);
  font-weight: var(--dm-sans-23-regular-weight);
  line-height: var(--dm-sans-23-regular-line-height);
}
.button {
  background-color: var(--midnight-blue);
  margin-left: 101px;
  padding: 26px 6px 30px 5px;
  box-shadow: 0 2px 1px 0 var(--transparent-white-1);
  display: flex;
  align-items: flex-start;
}
.about-me {
  width: 344px;
  color: var(--white);
  text-align: center;
  font-family: var(--dm-sans-30-regular-family);
  font-size: var(--dm-sans-30-regular-size);
  font-weight: var(--dm-sans-30-regular-weight);
  line-height: var(--dm-sans-30-regular-line-height);
}
.image {
  padding: 0 0 42px 35px;
  position: relative;
}
.rectangle-3 {
  width: 350px;
  height: 392px;
  background-color: var(--gainsboro-2);
  position: relative;
}
.rectangle-4 {
  width: 342px;
  height: 385px;
  background-color: var(--dark-slate-blue);
  position: absolute;
  left: 23px;
  top: 28px;
}
.richard-breuner-1 {
  width: 340px;
  height: 385px;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
