<template>
  <div class="nt-process">
    <div class="image">
      <div class="rectangle-6"></div>
      <div class="rectangle-5"></div>
      <img
        alt=""
        class="photo-1535231540604-72e8fbaf8cdb-1"
        src="@/assets/images/process-home.png"
      />
    </div>
    <div class="content">
      <p class="header">The Process</p>
      <p class="body">
        When life presents changes that disrupt how you contact independence and
        peace, finding a Behavioral Analyst with a proven method is key.<br />
        Thank to several types of assessments, I will guide you and help you
        reach your goal.
      </p>
      <div class="button">
        <p class="text">
          Discover<br />
          the Process
        </p>
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
.nt-process {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  margin-right: 14px;
  padding: 0 0 25px 29px;
  position: relative;
}
.rectangle-6 {
  width: 560px;
  height: 327px;
  background-color: var(--gainsboro-2);
  position: relative;
}
.rectangle-5 {
  width: 560px;
  height: 327px;
  background-color: var(--dark-slate-blue);
  position: absolute;
  left: 5px;
  top: 25px;
}
.photo-1535231540604-72e8fbaf8cdb-1 {
  width: 547px;
  height: 302px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header {
  height: 43px;
  width: 375px;
  color: var(--midnight-blue);
  display: flex;
  text-align: center;
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
  font-family: var(--dm-sans-23-regular-family);
  font-size: var(--dm-sans-23-regular-size);
  font-weight: var(--dm-sans-23-regular-weight);
  line-height: var(--dm-sans-23-regular-line-height);
}
.button {
  background-color: var(--midnight-blue);
  padding: 8px 5px 9px 6px;
  box-shadow: 0 2px 1px 0 var(--transparent-white-1);
  display: flex;
  align-items: center;
}
.text {
  max-width: 344px;
  color: var(--white);
  text-align: center;
  font-family: var(--dm-sans-30-regular-family);
  font-size: var(--dm-sans-30-regular-size);
  font-weight: var(--dm-sans-30-regular-weight);
  line-height: var(--dm-sans-30-regular-line-height);
}
</style>
