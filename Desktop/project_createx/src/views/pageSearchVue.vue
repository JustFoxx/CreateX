<template>
  <div class="all">
    <header @click="headerService ? closeHeaderService($event) : ''">
      <div class="header__bg"></div>
      <div class="header__decor">
        <img src="/images/decor/dots-right.png" class="header__dots" alt="" />
        <img src="/images/decor/lines-left.svg" class="header__lines-left" alt="" />
        <img src="/images/decor/lines-right.svg" class="header__lines-right" alt="" />
        <img src="/images/decor/lines4.svg" class="header__lines4" alt="" />
        <img src="/images/decor/shapes.svg" class="header__shapes" alt="" />
        <img src="/images/decor/shapes2.svg" class="header__shapes2" alt="" />
      </div>
      <div class="header__container">
        <navigationVue
          :headerService="headerService"
          :navigationActive="navigationActive"
          :headerBurger="headerBurger"
          @headerServiceToggle="headerService = !headerService"
          @toggleBurger="toggleBurger()"
        />
        <div class="header__location">
          <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;Search Engine
          Optimization
        </div>
        <div class="header__title">Search Engine Optimization</div>
        <div class="header__text">
          Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer
          facilisi. Ultrices vitae tempor amet nec euismod non.
        </div>
        <div class="header__formbox">
          <div class="header__form-title">Your website URL</div>
          <form class="header__form">
            <input type="text" placeholder="http://yoursite.com" />
            <button type="submit">Analyse your site</button>
          </form>
        </div>
      </div>
    </header>
    <main>
      <div class="logos">
        <logosVue />
      </div>
      <div class="above">
        <div class="above__container">
          <img src="/images/Search/image.jpg" alt="" class="above__img" />
          <div class="above__content">
            <div class="above__title">We go above and beyond to ensure successful SEO</div>
            <div class="above__text">
              Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper
              mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus
              justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus
              risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet
              sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna
              ultricies orci.
            </div>
          </div>
        </div>
      </div>
      <div class="seo">
        <img src="/images/decor/lines.svg" class="seo__lines" alt="" />
        <div class="seo__container">
          <div class="seo__title">SEO services include</div>
          <div class="seo__grid">
            <div class="seo__el seo__el1">
              <img src="/images/Search/ic-options.png" alt="" class="seo__img" />
              <div class="seo__el-title">SEO Strategy</div>
              <div class="seo__text">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud
                aliquip sunt.
              </div>
            </div>

            <div class="seo__el seo__el2">
              <img src="/images/Search/ic-analytics.png" alt="" class="seo__img" />
              <div class="seo__el-title">Competitor Analysis</div>
              <div class="seo__text">
                Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec sed massa pharetra
                duis ut porttitor.
              </div>
            </div>

            <div class="seo__el seo__el3">
              <img src="/images/Search/ic-target.png" alt="" class="seo__img" />
              <div class="seo__el-title">Technical Audit</div>
              <div class="seo__text">
                Congue viverra in quis urna lectus proin massa. Aliquam, justo nisl sed diam nibh
                vehicula.
              </div>
            </div>

            <div class="seo__el seo__el4">
              <img src="/images/header/homepage-ic-chart.png" alt="" class="seo__img" />
              <div class="seo__el-title">Content Strategy</div>
              <div class="seo__text">
                Posuere sed quam etiam semper id id euismod. Feugiat cras donec elementum interdum
                in.
              </div>
            </div>

            <div class="seo__el seo__el5">
              <img src="/images/header/homepage-ic-speaker.png" alt="" class="seo__img" />
              <div class="seo__el-title">Media Promotion</div>
              <div class="seo__text">
                Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl,
                imperdiet gravida massa neque.
              </div>
            </div>

            <div class="seo__el seo__el6">
              <img src="/images/Search/ic-analysis.png" alt="" class="seo__img" />
              <div class="seo__el-title">SEO Reports</div>
              <div class="seo__text">
                Congue phasellus est, amet sem bibendum sollicitudin arcu scelerisque senectus.
                Mauris, mus tincidunt a, nisi.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="free__wrapper">
        <freeVue />
      </div>
      <div class="works">
        <img src="/images/decor/lines4.svg" class="works__lines4" alt="" />
        <img src="/images/decor/shape-gray.svg" class="works__shape-gray" alt="" />
        <img src="/images/decor/lines-right-green.svg" class="works__lines-right-green" alt="" />
        <div class="works__container">
          <div class="works__title">That’s how it works</div>
          <div class="works__grid">
            <div></div>
            <div class="works__el works__right">
              <div class="works__circle"></div>
              <div class="works__step">STEP 1</div>
              <div class="works__el-title">Off-Site SEO Analysis</div>
              <div class="works__text">
                Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl,
                imperdiet gravida massa neque.
              </div>
            </div>
            <div class="works__el works__left">
              <div class="works__circle"></div>
              <div class="works__step">STEP 2</div>
              <div class="works__el-title">Technical SEO Optimizations</div>
              <div class="works__text">
                Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet,
                sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum
                viverra faucibus faucibus et convallis.
              </div>
            </div>
            <div></div>
            <div></div>
            <div class="works__el works__right">
              <div class="works__circle"></div>
              <div class="works__step">STEP 3</div>
              <div class="works__el-title">Usability Check</div>
              <div class="works__text">
                Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci
                varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan,
                in ultricies.
              </div>
            </div>
            <div class="works__el works__left">
              <div class="works__circle"></div>
              <div class="works__step">STEP 4</div>
              <div class="works__el-title">Content Marketing</div>
              <div class="works__text">
                Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.
                Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="plans">
        <plansVue />
      </div>
      <div class="case">
        <caseVue />
      </div>
      <div class="services">
        <servicesBlockVue />
      </div>
      <footerVue />
    </main>
  </div>
</template>

<script>
import navigationVue from '@/components/navigationVue.vue'
import logosVue from '@/components/logosVue.vue'
import freeVue from '@/components/freeVue.vue'
import plansVue from '@/components/plansVue.vue'
import caseVue from '../components/caseVue.vue'
import servicesBlockVue from '@/components/servicesBlockVue.vue'
import footerVue from '@/components/footerVue.vue'

export default {
  components: { navigationVue, logosVue, freeVue, plansVue, servicesBlockVue, footerVue, caseVue },
  data() {
    return {
      headerService: false,
      navigationActive: 1,
      headerBurger: false
    }
  },
  methods: {
    closeHeaderService(event) {
      if (
        event.target != document.getElementById('header__service') &&
        event.target != document.getElementById('header__nav').firstChild
      ) {
        this.headerService = false
      }
    },
    toggleBurger() {
      this.headerBurger = !this.headerBurger
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'visible'
      } else {
        document.body.style.overflow = 'hidden'
      }
    }
  },
  mounted() {
    document.body.style.overflow = 'visible'

    $('.case__slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: false,
      draggable: false,
      waitForAnimate: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })

    $('.case__slider-prev').on('click', function () {
      $('.case__slider').slick('slickPrev')
    })

    $('.case__slider-next').on('click', function () {
      $('.case__slider').slick('slickNext')
    })
  }
}
</script>

<style lang="scss" scoped>
$primary: #7772f1;
$gray800: #424551;
$gray700: #787a80;
$gray600: #9a9ca5;

.all {
  overflow: hidden;
}

header {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.header__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 36, 65, 1) 56%,
    rgba(30, 33, 44, 1) 100%
  );
  z-index: -2;
}

.header__decor {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.header__dots {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  z-index: -1;
}

.header__lines-left {
  position: absolute;
  top: 9vw;
  left: 21vw;
  width: 4.5vw;
  z-index: -1;
}

.header__lines-right {
  position: absolute;
  top: 8vw;
  right: -1vw;
  width: 6.5vw;
  z-index: -1;
}

.header__lines4 {
  position: absolute;
  bottom: -19vw;
  left: 0vw;
  width: 34.6vw;
  z-index: -1;
}

.header__shapes {
  position: absolute;
  bottom: -11vw;
  right: 15vw;
  width: 17.3vw;
  z-index: -1;
  transform: rotateY(180deg);
}

.header__shapes2 {
  position: absolute;
  top: -8vw;
  left: -13vw;
  width: 23.5vw;
  z-index: -1;
}

.header__container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 20px 20px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header__location {
  display: flex;
  align-items: center;
  margin: 80px 0 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: white;
  opacity: 0.6;
}

.header__title {
  font-weight: 900;
  font-size: 72px;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: white;
  margin-bottom: 24px;
}

.header__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: white;
  opacity: 0.6;
  max-width: 70%;
  margin-bottom: 60px;
}

.header__formbox {
  width: 50%;
}

.header__form-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: white;
  margin: 40px 0 8px;
}

.header__form {
  display: flex;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  input {
    width: 100%;
    background-color: #ffffff00;
    margin-left: 16px;
    margin-right: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: white;
    opacity: 0.6;
  }
  button {
    text-wrap: nowrap;
    background-color: $primary;
    padding: 0px 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 325%;
    letter-spacing: 0.03em;
    text-align: center;
    color: white;
    
  }
}

.logos {
  padding: 100px 0 90px;
}

.above__container {
  max-width: 1230px;
  margin: 0 auto 180px;
  display: flex;
  gap: 135px;
  justify-content: space-between;
}

.above__img {
  border-radius: 4px;
  width: 37vw;
}

.above__content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.above__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
}

.above__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray700;
}

.seo {
  position: relative;
  overflow: hidden;
}

.seo__lines {
  position: absolute;
  right: -24vw;
  top: -2vw;
  width: 41.5vw;
  z-index: -5;
}

.seo__container {
  max-width: 1230px;
  margin: 0 auto 120px;
}

.seo__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 60px;
}

.seo__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: rgb(200, 200, 200);
  background: radial-gradient(circle, rgba(200, 200, 200, 0.553) 0%, rgba(255, 255, 255, 0) 100%);
  gap: 1px;
}

.seo__el {
  background-color: #fff;
}

.seo__el1 {
  padding: 0 94px 40px 0;
}

.seo__el2 {
  padding: 0 94px 40px;
}

.seo__el3 {
  padding: 0 0 40px 94px;
}

.seo__el4 {
  padding: 40px 94px 0 0;
}

.seo__el5 {
  padding: 40px 94px 0;
}

.seo__el6 {
  padding: 40px 0 0 94px;
}

.seo__el-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin: 24px 0 8px;
}

.seo__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray700;
}

.free__wrapper {
  max-width: 1230px;
  margin: 0 auto 120px;
  border-radius: 4px;
}

.works {
  position: relative;
  overflow: hidden;
}

.works__lines4 {
  position: absolute;
  top: -7vw;
  left: -17vw;
  width: 34.3vw;
  z-index: -5;
}

.works__shape-gray {
  position: absolute;
  top: 11vw;
  right: -16vw;
  width: 33vw;
  z-index: -6;
}

.works__lines-right-green {
  position: absolute;
  top: 25vw;
  right: 11vw;
  width: 6.5vw;
  z-index: -5;
}

.works__container {
  max-width: 1230px;
  margin: 0 auto 180px;
}

.works__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 60px;
}

.works__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.works__step {
  font-weight: 900;
  font-size: 12px;
  line-height: 150%;
  color: $gray700;
  margin-bottom: 2px;
}

.works__el-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 8px;
}

.works__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray700;
}

.works__el {
  max-width: 361px;
}

.works__right {
  border-left: 2px solid rgba(154, 156, 165, 0.5);
  margin-left: -1px;
  margin-right: auto;
  padding: 0 0 0 43px;
  position: relative;
  .works__circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: $primary;
    position: absolute;
    top: 0;
    left: -8px;
    border: 4px solid #fff;
  }
}

.works__left {
  border-right: 2px solid rgba(154, 156, 165, 0.5);
  text-align: right;
  padding: 0 43px 0 0;
  margin-left: auto;
  position: relative;
  .works__circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: $primary;
    position: absolute;
    top: 0;
    right: -8px;
    border: 4px solid #fff;
  }
}

.plans {
  margin-bottom: 120px;
}

.services {
  margin-top: 120px;
}

@media (max-width: 1300px) {
  .header__container {
    padding: 20px 50px 120px;
  }

  .logos {
    padding-right: 50px;
    padding-left: 50px;
  }

  .above__container {
    padding-right: 50px;
    padding-left: 50px;
  }

  .seo__container {
    padding-right: 50px;
    padding-left: 50px;
  }

  .free__wrapper {
    padding-right: 50px;
    padding-left: 50px;
  }

  .seo__lines {
    display: none;
  }

  .works__container {
    padding-right: 50px;
    padding-left: 50px;
  }
}

@media (max-width: 1200px) {
  .header__formbox {
    width: 70%;
  }

  .above__container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 70px;
  }

  .above__content {
    gap: 20px;
  }

  .above__title {
    font-size: 38px;
  }

  .above__text {
    font-size: 14px;
  }

  .seo__text {
    font-size: 14px;
  }

  .seo__el1 {
    padding: 0 40px 40px 0;
  }

  .seo__el2 {
    padding: 0 40px 40px;
  }

  .seo__el3 {
    padding: 0 0 40px 40px;
  }

  .seo__el4 {
    padding: 40px 40px 0 0;
  }

  .seo__el5 {
    padding: 40px 40px 0 0;
  }

  .seo__el6 {
    padding: 40px 0 0 40px;
  }
}

@media (max-width: 1100px) {
  .header__title {
    font-size: 62px;
  }
}

@media (max-width: 1000px) {
  .above__container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    img {
      width: 60%;
      margin: 0 auto;
      order: 2;
    }
  }

  .above__content {
    order: 1;
  }

  .above__title {
    font-size: 45px;
    text-align: center;
  }

  .above__text {
    font-size: 18px;
  }
}

@media (max-width: 900px) {
  .header__text {
    font-size: 17px;
    max-width: none;
  }

  .header__title {
    font-size: 40px;
  }

  .header__dots {
    display: none;
  }

  .header__lines-left {
    top: 16vw;
    left: 27vw;
    width: 6vw;
  }

  .header__lines-right {
    top: 40vw;
    right: 13vw;
    width: 8vw;
  }

  .header__lines4 {
    width: 40vw;
  }

  .header__shapes {
    right: 8vw;
    width: 20vw;
  }

  .header__shapes2 {
    width: 30vw;
  }
}

@media (max-width: 800px) {
  .header__formbox {
    width: 90%;
  }

  .above__container {
    img {
      width: 80%;
    }
  }

  .seo__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .seo__el1 {
    padding: 0 40px 40px 0;
  }

  .seo__el2 {
    padding: 0 0 40px 40px;
  }

  .seo__el3 {
    padding: 40px 40px 40px 0;
  }

  .seo__el4 {
    padding: 40px 0 40px 40px;
  }

  .seo__el5 {
    padding: 40px 40px 0 0;
  }

  .seo__el6 {
    padding: 40px 0 0 40px;
  }

  .free__wrapper {
    margin: 0 auto 60px;
  }

  .works__container {
    margin: 0 auto 100px;
  }
}

@media (max-width: 700px) {
  .header__title {
    display: flex;
    text-align: center;
    font-size: 34px;
  }

  .above__container {
    img {
      width: 90%;
    }
  }

  .above__title {
    font-size: 38px;
  }

  .above__text {
    font-size: 16px;
  }
}

@media (max-width: 650px) {
  .works__text {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .header__formbox {
    width: 100%;
  }

  .above__container {
    margin: 0 auto 90px;
  }
}

@media (max-width: 550px) {
  .header__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .header__lines-left {
    top: 20vw;
    left: 27vw;
    width: 11vw;
  }

  .header__lines-right {
    top: 92vw;
    width: 12vw;
  }

  .header__lines4 {
    display: none;
  }

  .header__shapes {
    right: 17vw;
    width: 28vw;
  }

  .header__shapes2 {
    width: 39vw;
  }

  .logos {
    padding-right: 20px;
    padding-left: 20px;
  }

  .above__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .seo__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .seo__title {
    font-size: 38px;
  }

  .free__wrapper {
    padding-right: 20px;
    padding-left: 20px;
  }

  .works__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .works__left {
    padding: 0 20px 0 0;
  }

  .works__right {
    padding: 0 0 0 20px;
  }

  .works__el-title {
    font-size: 18px;
  }
}

@media (max-width: 500px) {
  .header__title {
    font-size: 28px;
  }

  .header__text {
    font-size: 15px;
  }

  .header__container {
    padding-bottom: 90px;
  }

  .header__form {
    flex-direction: column;
    width: calc(100vw - 40px);
    input {
      line-height: 325%;
    }
  }

  .above__container {
    img {
      width: 100%;
    }
  }

  .above__title {
    font-size: 32px;
    text-align: left;
  }

  .above__text {
    font-size: 14px;
  }

  .seo__el1 {
    padding: 0 25px 25px 0;
  }

  .seo__el2 {
    padding: 0 0 25px 25px;
  }

  .seo__el3 {
    padding: 25px 25px 25px 0;
  }

  .seo__el4 {
    padding: 25px 0 25px 25px;
  }

  .seo__el5 {
    padding: 25px 25px 0 0;
  }

  .seo__el6 {
    padding: 25px 0 0 25px;
  }

  .seo__el-title {
    font-size: 18px;
    line-height: 150%;
    margin: 16px 0 8px;
  }

  .seo__text {
    font-size: 13px;
  }

  .seo__container {
    margin: 0 auto 70px;
  }

  .works__container {
    margin: 0 auto 60px;
  }
}

@media (max-width: 450px) {
  .header__lines-left {
    display: none;
  }

  .header__lines-right {
    display: none;
  }

  .header__shapes {
    display: none;
  }

  .header__shapes2 {
    display: none;
  }

  .logos {
    padding-top: 50px;
    padding-bottom: 40px;
  }

  .works__title {
    font-size: 34px;
  }
}

@media (max-width: 400px) {
  .header__title {
    font-size: 23px;
  }

  .above__container {
    gap: 40px;
  }

  .above__title {
    font-size: 24px;
  }

  .above__text {
    font-size: 13px;
  }

  .seo__el {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .seo__el1 {
    padding: 0 15px 20px 0;
  }

  .seo__el2 {
    padding: 0 0 20px 15px;
  }

  .seo__el3 {
    padding: 20px 15px 20px 0;
  }

  .seo__el4 {
    padding: 20px 0 20px 15px;
  }

  .seo__el5 {
    padding: 20px 15px 0 0;
  }

  .seo__el6 {
    padding: 20px 0 0 15px;
  }

  .seo__title {
    font-size: 30px;
  }

  .works__text {
    font-size: 11px;
  }

  .works__el-title {
    font-size: 15px;
  }

  .works__title {
    font-size: 30px;
  }

  .free__wrapper {
    margin: 0 auto 40px;
  }
}

@media(hover: hover) {
  .header__form button:hover {
      background-color: #fff;
      color: $primary;
    }
}

@media(hover: none) {
  .header__form button:active {
      background-color: #fff;
      color: $primary;
    }
}
</style>
