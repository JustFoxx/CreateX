<template>
  <div class="seo__logos">
    <img class="seo__colored" src="/images/seo/logo-1.png" alt="" />
    <img class="seo__colored" src="/images/seo/logo-2.png" alt="" />
    <img class="seo__colored" src="/images/seo/logo-3.png" alt="" />
    <img class="seo__colored" src="/images/seo/logo-4.png" alt="" />
    <img class="seo__colored" src="/images/seo/logo-5.png" alt="" />
    <img class="seo__colored" src="/images/seo/logo-6.png" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.seo__logos {
  max-width: 1230px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.seo__colored {
  filter: grayscale(100%);
  opacity: 0.8;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
}

@media (max-width: 1000px) {
  .seo__logos {
    max-width: 1230px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    img {
      margin: 0 auto;
    }
  }
}

@media (max-width: 600px) {
  .seo__logos {
    img {
      width: 100px;
    }
  }
}

@media (max-width: 500px) {
  .seo__logos {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 20px;
  }
}
</style>
