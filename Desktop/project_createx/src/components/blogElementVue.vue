<template>
  <div class="all" v-if="active === true && page === activePage">
    <img :src="img" class="img" alt="" />
    <div class="info">
      {{ category }}&nbsp; |&nbsp; <img src="/images/news/clock.svg" alt="" />&nbsp;
      {{ date }}&nbsp; |&nbsp; <img src="/images/news/profile.svg" alt="" />&nbsp;
      {{ person }}
    </div>
    <div class="title">{{ title }}</div>
    <div class="text">{{ text }}</div>
    <button class="button">Read more <img src="/images/news/right.svg" alt="" /></button>
  </div>
</template>

<script>
export default {
  props: {
    categoriesList: Object,
    index: Number,
    activePage: Number,
    img: String,
    category: String,
    date: String,
    person: String,
    title: String,
    text: String,
    active: Boolean,
    page: Number
  }
}
</script>

<style lang="scss" scoped>
$gray700: #787a80;
$gray800: #424551;

.all {
  animation-name: category;
  animation-duration: 0.5s;
}

.img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
}

.info {
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  margin-bottom: 8px;
}

.title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 8px;
}

.text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  margin-bottom: 16px;
}

.button {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  gap: 8px;
  background-color: #ffffff00;
  align-items: center;
}

@media (max-width: 900px) {
  .info {
    font-size: 13px;
    img {
      display: none;
    }
  }
}

@media (max-width: 750px) {
  .text {
    font-size: 15px;
  }

  .title {
    font-size: 17px;
  }

  .info {
    font-size: 12px;
  }

  .button {
    font-size: 14px;
  }
}

@media (max-width: 700px) {
  .title {
    font-size: 15px;
  }

  .text {
    font-size: 13px;
  }
}

@media (max-width: 500px) {
  .img {
    max-height: 200px;
    object-fit: cover;
  }
}

@keyframes category {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (hover: hover) {
  .button:hover {
    gap: 16px;
  }
}

@media (hover: none) {
  .button:active {
    gap: 16px;
  }
}
</style>
