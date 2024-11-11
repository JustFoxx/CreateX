<template>
  <div class="news">
    <div class="news__container">
      <div class="news__info">
        <div class="news__title">Latest news</div>
        <div class="news__text">
          Check more posts in our blog for featured news and advertising insights
        </div>
        <router-link to="/Blog"><button class="news__button">Go to blog</button></router-link>
      </div>
      <div class="news__content">
        <div class="news__el">
          <img class="news__img" src="/images/news/pic.jpg" alt="" />
          <div class="news__el-info">
            SEO | <img src="/images/news/clock.svg" alt="" /> July 5, 2020 |
            <img src="/images/news/profile.svg" alt="" /> By Diane Mccoy
          </div>
          <div class="news__el-title">How to Maximize Your ROI Through Scientific SEM?</div>
          <div class="news__el-text">
            Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui
            odio...
          </div>
          <button class="news__el-button">
            Read more <img src="/images/news/right.svg" alt="" />
          </button>
        </div>
        <div class="news__el">
          <img class="news__img" src="/images/news/pic2.jpg" alt="" />
          <div class="news__el-info">
            Marketing | <img src="/images/news/clock.svg" alt="" /> July 2, 2020 |
            <img src="/images/news/profile.svg" alt="" /> By Diane Mccoy
          </div>
          <div class="news__el-title">The Basics of Blogging Search Engine Optimization.</div>
          <div class="news__el-text">
            Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi
            interdum blandit...
          </div>
          <button class="news__el-button">
            Read more <img src="/images/news/right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$gray800: #424551;
$primary: #7772f1;
$gray700: #787a80;

.news__container {
  max-width: 1230px;
  padding: 0 0 180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.news__info {
  max-width: 285px;
}

.news__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  margin-bottom: 40px;
}

.news__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: $gray800;
  margin-bottom: 60px;
}

.news__button {
  border-radius: 4px;
  padding: 0px 40px;
  background-color: $primary;
  font-weight: 700;
  font-size: 16px;
  line-height: 325%;
  letter-spacing: 0.03em;
  text-align: center;
  color: white;
  border: 2px solid $primary;
  &:hover {
    background-color: #fff;
    color: $primary;
  }
}

.news__content {
  display: flex;
  gap: 30px;
}

.news__el {
  max-width: 390px;
}

.news__el-info {
  margin: 16px 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
}

.news__el-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 8px;
}

.news__el-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  margin-bottom: 16px;
}

.news__el-button {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  gap: 8px;
  background-color: #ffffff00;
  align-items: center;
  &:hover {
    gap: 16px;
  }
}

@media (max-width: 1300px) {
  .news__container {
    padding: 0 50px 180px;
  }
}

@media (max-width: 1250px) {
  .news__container {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .news__info {
    max-width: none;
  }

  .news__title {
    margin-bottom: 20px;
  }

  .news__text {
    margin-bottom: 30px;
  }
}

@media (max-width: 1000px) {
  .news__title{
    font-size: 36px;
  }
}

@media (max-width: 900px) {
  .news__info {
    width: 100%;
  }

  .news__img {
    width: 100%;
  }

  .news__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 750px) {
  .news__el-text {
    font-size: 15px;
  }

  .news__el-title {
    font-size: 17px;
  }

  .news__el-info {
    font-size: 12px;
  }
}

@media (max-width: 650px) {
  .news__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .news__el {
    max-width: none;
    width: 100%;
  }

  .news__el-info {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .news__el-title {
    font-size: 20px;
  }

  .news__el-text {
    font-size: 17px;
  }

  .news__container {
    padding-bottom: 80px;
  }
}

@media (max-width: 550px) {
  .news__container {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (max-width: 450px) {
  .news__text {
    font-size: 16px;
  }

  .news__title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .news__container {
    padding-bottom: 50px;
  }
}

@media (max-width: 400px) {
  .news__title{
    font-size: 26px;
  }
  
  .news__el-text {
    font-size: 15px;
  }

  .news__el-title {
    font-size: 17px;
  }

  .news__el-info {
    font-size: 11px;
  }

  .news__text {
    font-size: 14px;
  }
}
</style>
