<template>
  <div class="tile-stuff">
    <div class="left-col">
      <p class="text-content-dark">
        Applied<br />
        <br />
        What are you avoiding?<br />
        What are you thinking?<br />
        What is important to you?<br />
        <br />
      </p>
    </div>
    <div class="relative-wrapper-one">
      <div class="mid-top-col">
        <div class="text-bg-light"></div>
        <p class="text-content-dark-two">
          Behavioral<br />
          What have you tried?<br />
          Let’s try on a new perspective and experiment<br />
        </p>
      </div>
      <div class="mid-btm-col">
        <p class="text-content-light">
          Technology<br />
          <br />
          Can you keep up the good work?<br />
          Will you?<br />
        </p>
      </div>
      <div class="right-btm-col">
        <p class="text-content-light-two">
          Effective <br />
          <br />
          Is your life better now?<br />
          How do you know?<br />
        </p>
      </div>
    </div>
    <div class="right-top-col">
      <div class="text-bg-dark"></div>
      <p class="text-content-light-three">
        Analysis<br />
        <br />
        Is it working?<br />
        How do we know?<br />
      </p>
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
.tile-stuff {
  padding: 0 0 243px;
  display: flex;
  align-items: flex-start;
}
.left-col {
  background-color: var(--silver);
  margin-top: 35px;
  margin-right: 87px;
  padding: 24px 12px 26px 41px;
  display: flex;
  align-items: center;
}
.text-content-dark {
  height: 278px;
  width: 193px;
  color: var(--dim-gray);
  display: flex;
  font-family: var(--dm-sans-23-bold-family);
  font-size: var(--dm-sans-23-bold-size);
  font-weight: var(--dm-sans-23-bold-weight);
  line-height: var(--dm-sans-23-bold-line-height);
}
.relative-wrapper-one {
  margin-top: 33px;
  margin-right: 87px;
  position: relative;
}
.mid-top-col {
  padding: 31px 11px 0 29px;
  position: relative;
}
.text-bg-light {
  width: 394px;
  height: 200px;
  background-color: var(--gainsboro-2);
  position: absolute;
  left: 0;
  top: 0;
}
.text-content-dark-two {
  height: 273px;
  width: 354px;
  color: var(--dim-gray);
  display: flex;
  position: relative;
  font-family: var(--dm-sans-23-bold-family);
  font-size: var(--dm-sans-23-bold-size);
  font-weight: var(--dm-sans-23-bold-weight);
  line-height: var(--dm-sans-23-bold-line-height);
}
.mid-btm-col {
  background-color: var(--midnight-blue);
  padding: 53px 16px 59px 33px;
  box-shadow: 0 2px 1px 0 var(--transparent-white-1);
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: -17px;
  bottom: -204px;
}
.text-content-light {
  height: 150px;
  width: 222px;
  color: var(--white);
  display: flex;
  font-family: var(--dm-sans-23-bold-family);
  font-size: var(--dm-sans-23-bold-size);
  font-weight: var(--dm-sans-23-bold-weight);
  line-height: var(--dm-sans-23-bold-line-height);
}
.right-btm-col {
  background-color: var(--dark-slate-blue);
  padding: 71px 65px 65px 60px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  right: -243px;
  bottom: -269px;
}
.text-content-light-two {
  height: 183px;
  width: 243px;
  color: var(--white);
  display: flex;
  font-family: var(--dm-sans-23-bold-family);
  font-size: var(--dm-sans-23-bold-size);
  font-weight: var(--dm-sans-23-bold-weight);
  line-height: var(--dm-sans-23-bold-line-height);
}
.right-top-col {
  padding: 0 4px 6px 0;
  position: relative;
}
.text-bg-dark {
  width: 271px;
  height: 262px;
  background-color: var(--midnight-blue);
  box-shadow: 0 2px 1px 0 var(--transparent-white-1);
  position: relative;
}
.text-content-light-three {
  height: 220px;
  width: 238px;
  color: var(--white);
  display: flex;
  position: absolute;
  left: 37px;
  bottom: 0;
  font-family: var(--dm-sans-23-bold-family);
  font-size: var(--dm-sans-23-bold-size);
  font-weight: var(--dm-sans-23-bold-weight);
  line-height: var(--dm-sans-23-bold-line-height);
}
</style>
