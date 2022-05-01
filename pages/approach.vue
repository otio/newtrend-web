<template>
  <NuxtLayout name="base">
    <FullWidthHero></FullWidthHero>
    <div class="approach-content">
      <div class="quote-dot">
        <div class="rectangle"></div>
        <div class="rectangle-two"></div>
        <div class="rectangle-three"></div>
        <p class="aging-is-often-tentative-and-frightful-f">
          Aging is often tentative and frightful for the aging individual as
          well as for loved ones, when independence becomes an issue. While
          living at home is preferred, how and where one will age best is among
          the most fraught circumstances for a family.
        </p>
        <div class="ellipse-6"></div>
      </div>
      <div class="quote-dot-two">
        <p class="text-box">
          <br />
          The function of an individual’s behavior is found in their unique
          environment. This includes several life domains such as family and
          relationships, financial, intellectual, occupational, psychological,
          physical and health, and spiritual. Once an individual’s satisfaction
          with each is assessed and the whole individual is considered, their
          unique environment may be rearranged to optimize their performance,
          satisfaction and independence.
        </p>
        <div class="divider"></div>
      </div>
      <p class="text-box-two">
        I support aging at home rather than in assisted or institutional
        alternatives whenever possible.
      </p>
      <div class="cta-button">
        <p class="take-an-assessment-now">
          Take an Assessment<br />
          NOW
        </p>
      </div>
    </div>
    <CallToAction></CallToAction>
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
.approach-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quote-dot {
  margin-bottom: 69px;
  padding: 15px 40px;
  position: relative;
}
.rectangle {
  width: 1140px;
  height: 279px;
  position: relative;
}
.rectangle-two {
  width: 1140px;
  height: 279px;
  position: absolute;
  left: 40px;
  top: 15px;
}
.rectangle-three {
  width: 1018px;
  height: 210px;
  position: absolute;
  left: 101px;
  top: 46px;
}
.aging-is-often-tentative-and-frightful-f {
  max-width: 1070px;
  color: var(--dim-gray);
  text-align: center;
  position: absolute;
  right: 52px;
  top: 93px;
  font-family: var(--dm-sans-23-regular-family);
  font-size: var(--dm-sans-23-regular-size);
  font-weight: var(--dm-sans-23-regular-weight);
  line-height: var(--dm-sans-23-regular-line-height);
}
.ellipse-6 {
  width: 32px;
  height: 33px;
  background-color: var(--midnight-blue);
  border-radius: 50%;
  position: absolute;
  right: 593px;
  bottom: 20px;
}
.quote-dot-two {
  margin-bottom: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.text-box {
  max-width: 1088px;
  color: var(--dim-gray);
  text-align: center;
  margin-bottom: 125px;
  font-family: var(--dm-sans-23-regular-family);
  font-size: var(--dm-sans-23-regular-size);
  font-weight: var(--dm-sans-23-regular-weight);
  line-height: var(--dm-sans-23-regular-line-height);
}
.divider {
  width: 31px;
  height: 33px;
  background-color: var(--midnight-blue);
  margin-left: 512px;
  border-radius: 50%;
}
.text-box-two {
  width: 1039px;
  color: var(--dim-gray);
  text-align: center;
  margin-bottom: 69px;
  font-family: var(--dm-sans-23-regular-family);
  font-size: var(--dm-sans-23-regular-size);
  font-weight: var(--dm-sans-23-regular-weight);
  line-height: var(--dm-sans-23-regular-line-height);
}
.cta-button {
  background-color: var(--midnight-blue);
  padding: 36px 27px 12px 34px;
  box-shadow: 0 2px 1px 0 var(--transparent-white-1);
  display: flex;
  align-items: flex-start;
}
.take-an-assessment-now {
  max-width: 294px;
  color: var(--white);
  text-align: center;
  font-family: var(--dm-sans-30-regular-family);
  font-size: var(--dm-sans-30-regular-size);
  font-weight: var(--dm-sans-30-regular-weight);
  line-height: var(--dm-sans-30-regular-line-height);
}
</style>
