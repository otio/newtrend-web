<template>
  <NuxtLayout name="base">
    <FullWidthHero></FullWidthHero>
    <div class="assessment-content">
      <h2 class="section-title">Introduction here</h2>
      <div class="process-step">
        <div class="process-step">
          <!-- TODO Number Bullet Implementation -->
          <div class="bullet-marker">
            <div class="ellipse-2"></div>
            <p class="num-2">2</p>
          </div>
          <div class="text-box">
            <p class="the-facets-of-behavioral-analysis-approa">
              The facets of behavioral analysis approach
            </p>
            <p class="the-assessment-is-the-first-step-in-an-e">
              The Assessment is the first step in an evaluation to expose where
              your current approach to your life is and is not consistent with
              what is important to you.
              <br />
              <br />
              How are you participating in what is important to you and how are
              you avoiding what is important to you?
              <br />
              <br />
              And what are you getting instead? Maybe we can experiment with
              something else
            </p>
          </div>
        </div>
      </div>
      <AssessmentFacets></AssessmentFacets>
      <div class="process-step">
        <!-- Include here the component "ProcessStep" -->
      </div>
    </div>
    <Tiles></Tiles>
    <!-- <CallToAction></CallToAction> -->
  </NuxtLayout>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.assessment-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-title {
  height: 55px;
  width: 683px;
  color: var(--black-2);
  display: flex;
  text-align: center;
  margin-bottom: 39px;
  font-family: var(--dm-sans-23-regular-family);
  font-size: var(--dm-sans-23-regular-size);
  font-weight: var(--dm-sans-23-regular-weight);
  line-height: var(--dm-sans-23-regular-line-height);
}
.process-step:not(:last-of-type) {
  margin-bottom: 39px;
}
.process-step {
  display: flex;
  align-items: flex-start;
}
.bullet-marker {
  margin-right: 87px;
  padding: 0 1px 0 2px;
  position: relative;
}
.ellipse-2 {
  width: 100%;
  height: 100%;
  background-color: var(--midnight-blue);
  border-radius: 50%;
  position: relative;
}
.num-2 {
  width: 100%;
  height: 48.52%;
  color: var(--white);
  text-align: center;
  position: absolute;
  left: 0;
  top: 39px;
  font-family: var(--dm-serif-text-60-regular-family);
  font-size: var(--dm-serif-text-60-regular-size);
  font-weight: var(--dm-serif-text-60-regular-weight);
  line-height: var(--dm-serif-text-60-regular-line-height);
}
.text-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.the-facets-of-behavioral-analysis-approa {
  height: 24px;
  width: 587px;
  color: var(--midnight-blue);
  display: flex;
  margin-bottom: 40px;
  font-family: var(--dm-serif-text-29-regular-family);
  font-size: var(--dm-serif-text-29-regular-size);
  font-weight: var(--dm-serif-text-29-regular-weight);
  line-height: var(--dm-serif-text-29-regular-line-height);
}
.the-assessment-is-the-first-step-in-an-e {
  height: 329px;
  width: 746px;
  color: var(--dim-gray);
  display: flex;
  font-family: var(--dm-sans-23-regular-family);
  font-size: var(--dm-sans-23-regular-size);
  font-weight: var(--dm-sans-23-regular-weight);
  line-height: var(--dm-sans-23-regular-line-height);
}
</style>
