<template>
  <div class="services__page">
    <div class="services__img" v-if="imgSide === 'left'">
      <img :src="img" alt="" />
    </div>
    <div class="services__info">
      <div class="services__info-title">{{ title }}</div>
      <div class="services__info-text">{{ text }}</div>
      <div class="services__info-buttonbox">
        <button class="services__info-learn">Learn more</button>
        <button class="services__info-try">Try SEO toolkit</button>
      </div>
    </div>
    <div class="services__img" v-if="imgSide === 'right'">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSide: String,
    title: String,
    text: String,
    img: String
  }
}
</script>

<style lang="scss" scoped>
$gray700: #787a80;
$primary: #7772f1;

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
  background-color: #ffffff00;
  text-wrap: nowrap;
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
  text-wrap: nowrap;
  &:hover {
    background-color: white;
    color: $primary;
  }
}

.services__page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 124px;
}

.services__info-text {
  max-width: 475px;
}

.services__info {
  animation-name: services;
  animation-duration: 0.3s;
}

.services__img {
  animation-name: services;
  animation-duration: 0.3s;
}

@keyframes services {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.services__img {
  img {
    width: 100%;
  }
  display: flex;
  align-items: center;
}

@media (max-width: 1000px) {
  .services__page {
    gap: 50px;
  }
}

@media (max-width: 850px) {
  .services__info-title {
    font-size: 22px;
    margin-bottom: 14px;
  }

  .services__info-text {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .services__info-buttonbox {
    gap: 12px;
  }
}

@media (max-width: 800px) {
  .services__page {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 30px;
  }

  .services__info-text {
    max-width: none;
  }

  .services__button {
    padding: 8px 0;
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .services__info-buttonbox{
    width: 80%;
    flex-direction: column;
  }
}
</style>
