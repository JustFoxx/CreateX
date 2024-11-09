<template>
  <div class="services">
    <div class="services__container">
      <div class="services__title">Our services</div>
      <div class="services__buttonbox">
        <button
          @click="servicesActive = 'Social'"
          :class="servicesActive === 'Social' ? 'service__active' : ''"
          class="services__button"
        >
          Social Media
        </button>
        <button
          @click="servicesActive = 'SEO'"
          :class="servicesActive === 'SEO' ? 'service__active' : ''"
          class="services__button"
        >
          SEO
        </button>
        <button
          @click="servicesActive = 'Research'"
          :class="servicesActive === 'Research' ? 'service__active' : ''"
          class="services__button"
        >
          Research
        </button>
        <button
          @click="servicesActive = 'Content'"
          :class="servicesActive === 'Content' ? 'service__active' : ''"
          class="services__button"
        >
          Content & PR
        </button>
        <button
          @click="servicesActive = 'Payed'"
          :class="servicesActive === 'Payed' ? 'service__active' : ''"
          class="services__button"
        >
          Payed Traffic
        </button>
      </div>

      <div v-if="servicesActive === 'Social'">
        <servicesVue
          imgSide="right"
          title="Complete Worflow For Any SEO Professional"
          text="Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan
          gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras
          amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu
          dictum metus sed purus senectus faucibus eget elementum pretium."
          img="/images/socials/social.png"
        />
      </div>

      <div v-else-if="servicesActive === 'SEO'">
        <servicesVue
          imgSide="left"
          title="Search Engine Optimization"
          text="Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit
                viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing.
                Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl
                sem in tristique."
          img="/images/socials/search.png"
        />
      </div>

      <div v-else-if="servicesActive === 'Research'">
        <servicesVue
          imgSide="right"
          title="Research Service"
          text="Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla
                lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa
                vitae amet felis eget."
          img="/images/socials/research.png"
        />
      </div>

      <div v-else-if="servicesActive === 'Content'">
        <servicesVue
          imgSide="left"
          title="Content & PR Service"
          text="Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum
                magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus
                diam volutpat. Amet, sit aliquet magna in viverra at elit nullam."
          img="/images/socials/content.png"
        />
      </div>

      <div v-else-if="servicesActive === 'Payed'">
        <servicesVue
          imgSide="right"
          title="Payed Traffic Management"
          text="Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus
                nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus
                eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa
                scelerisque."
          img="/images/socials/payed.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import servicesVue from '../components/servicesVue.vue'

export default {
  components: { servicesVue },
  data() {
    return {
      servicesActive: 'Social'
    }
  }
}
</script>

<style lang="scss" scoped>
$gray600: #9a9ca5;
$primary: #7772f1;
$gray700: #787a80;

.services__container {
  max-width: 1230px;
  padding: 0 50px 83px;
  margin: 0 auto;
}

.services__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 40px;
}

.services__buttonbox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 43px;
}

.services__button {
  border-radius: 4px;
  padding: 10px 0;
  background-color: #ffffff00;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: $gray600;
  border: 2px solid #ffffff00;
  &:hover {
    border: 2px solid $primary;
    color: $primary;
  }
}

.service__active {
  border: 2px solid $primary;
  color: $primary;
}

.services__info-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  margin-bottom: 24px;
}

.services__info-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray700;
  margin-bottom: 48px;
}

.services__info-buttonbox {
  display: flex;
  gap: 24px;
}

.services__info-learn {
  border: 2px solid $primary;
  border-radius: 4px;
  padding: 0px 32px;
  font-weight: 700;
  font-size: 14px;
  line-height: 314%;
  letter-spacing: 0.04em;
  text-align: center;
  color: $primary;
  &:hover {
    background-color: $primary;
    color: white;
  }
}

.services__info-try {
  border-radius: 4px;
  padding: 0px 32px;
  background-color: $primary;
  font-weight: 700;
  font-size: 14px;
  line-height: 314%;
  letter-spacing: 0.04em;
  text-align: center;
  color: white;
  border: 2px solid $primary;
  &:hover {
    background-color: white;
    color: $primary;
  }
}

.services__info-text {
  max-width: 475px;
}

.services__left {
  animation-name: services__left;
  animation-duration: 0.3s;
}

.services__right {
  animation-name: services__right;
  animation-duration: 0.3s;
}

@keyframes services__left {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes services__right {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 750px) {
  .services__buttonbox {
    grid-template-columns: 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr;
  }

  .services__button {
    &:last-child {
      padding: 10px 60px;
      grid-column: 1 / 3;
      justify-self: center;
    }
  }
}

@media (max-width: 550px) {
  .services__container {
    padding: 0 20px 83px;
  }
}

@media (max-width: 500px) {
  .services__button {
    &:last-child {
      padding: 10px 0;
      width: 100%;
      grid-column: span 2;
    }
  }
}

@media (max-width: 400px) {
  .services__title {
    font-size: 34px;
    margin-bottom: 30px;
  }

  .services__button {
    padding: 6px 0;
    font-size: 13px;
  }

  .services__buttonbox {
    gap: 10px;
  }
}
</style>
