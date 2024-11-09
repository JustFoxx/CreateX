<template>
  <div class="all">
    <header @click="headerService ? closeHeaderService($event) : ''">
      <div class="header__bg"></div>
      <div class="header__decor">
        <img src="/images/decor/dots-left.png" class="header__dots" alt="" />
        <img src="/images/decor/lines.svg" class="header__lines" alt="" />
        <img src="/images/decor/lines-left.svg" class="header__lines-left" alt="" />
        <img src="/images/decor/lines-right.svg" class="header__lines-right" alt="" />
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
          <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;Services
        </div>
        <div class="header__title">Our services</div>
        <div class="header__text">
          We offer more than services. Our agency provides solutions to your top-priority concerns,
          involving customer targeting, email performance and sales growth. If there is no existing
          solution readily available, we create one, specifically to suit your business.
        </div>
        <div class="header__row">
          <button class="header__button">Start now</button>
          <div class="header__call">
            <img src="/images/Services/iphone.svg" class="header__call-img" />
            <div class="header__call-info">
              <div class="header__call-text">Call us</div>
              <a href="tel:(405) 555-0128" class="header__call-number">(405) 555-0128</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="services">
        <div class="services__container">
          <servicesVue
            :imgSide="rightSide"
            title="Social Media Marketing"
            text="Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. "
            img="/images/socials/social.png"
          />
          <servicesVue
            :imgSide="leftSide"
            title="Search Engine Optimization"
            text="Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique. "
            img="/images/socials/search.png"
          />
          <servicesVue
            :imgSide="rightSide"
            title="Research Service"
            text="Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget.  "
            img="/images/socials/research.png"
          />
          <servicesVue
            :imgSide="leftSide"
            title="Content & PR Service"
            text="Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.  "
            img="/images/socials/content.png"
          />
          <servicesVue
            :imgSide="rightSide"
            title="Payed Traffic Management"
            text="Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque.  "
            img="/images/socials/payed.png"
          />
        </div>
      </div>
      <analysisVue />
      <div class="markets">
        <div class="markets__container">
          <div class="markets__title">Markets in which we operate</div>
          <div class="markets__row">
            <div class="markets__el">
              <img src="/images/Services/cart.svg" alt="" />
              <div class="markets__el-title">E-commerce Websites</div>
              <div class="markets__text">
                Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.
              </div>
            </div>

            <div class="markets__line"></div>

            <div class="markets__el">
              <img src="/images/Services/website.svg" class="markets__img" />
              <div class="markets__el-title">Content-rich Websites</div>
              <div class="markets__text">
                Culpa nostrud commodo ea consequat reprehenderit aliquip.
              </div>
            </div>

            <div class="markets__line"></div>

            <div class="markets__el">
              <img src="/images/Services/suitcase.svg" class="markets__img" />
              <div class="markets__el-title">B2B /B2C Services</div>
              <div class="markets__text">
                Viverra scelerisque consequat net. Adipisicing esse consequat.
              </div>
            </div>

            <div class="markets__line"></div>

            <div class="markets__el">
              <img src="/images/Services/startup.svg" class="markets__img" />
              <div class="markets__el-title">Startup Projects</div>
              <div class="markets__text">
                Aute eiusmod dolore dolore deserunt veniam ad deserunt.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="case">
        <caseVue />
      </div>
      <div class="logos">
        <logosVue />
      </div>
      <div class="news">
        <div class="news__decor">
          <img src="/images/decor/lines4.svg" alt="" />
        </div>
        <newsVue />
      </div>
      <footerVue />
    </main>
  </div>
</template>

<script>
import navigationVue from '@/components/navigationVue.vue'
import servicesVue from '@/components/servicesVue.vue'
import analysisVue from '@/components/analysis_Vue.vue'
import caseVue from '@/components/caseVue.vue'
import logosVue from '@/components/logosVue.vue'
import newsVue from '@/components/newsVue.vue'
import footerVue from '@/components/footerVue.vue'

export default {
  components: { navigationVue, servicesVue, analysisVue, caseVue, logosVue, newsVue, footerVue },
  data() {
    return {
      headerService: false,
      navigationActive: 1,
      headerBurger: false,
      rightSide: 'right',
      leftSide: 'left'
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

    if (window.screen.width <= 800) {
      this.leftSide = 'right'
    }
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
}

.header__dots {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
}

.header__lines {
  position: absolute;
  top: -8vw;
  right: 19vw;
  width: 20vw;
  z-index: -1;
}

.header__lines-left {
  position: absolute;
  top: 7vw;
  right: 7vw;
  width: 4.5vw;
  z-index: -1;
}

.header__lines-right {
  position: absolute;
  bottom: 7vw;
  left: 11vw;
  width: 6.4vw;
  z-index: -1;
}

.header__shapes {
  position: absolute;
  top: -9vw;
  left: -8vw;
  width: 17.4vw;
  z-index: -1;
}

.header__shapes2 {
  position: absolute;
  bottom: -14vw;
  right: -14vw;
  width: 31vw;
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

.header__row {
  display: flex;
  gap: 40px;
  align-items: center;
}

.header__button {
  border: 1px solid white;
  border-radius: 4px;
  padding: 0px 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 325%;
  letter-spacing: 0.03em;
  text-align: center;
  color: white;
  background-color: #ffffff00;
  &:hover {
    background-color: #fff;
    color: $primary;
  }
}

.header__call {
  display: flex;
  gap: 12px;
}

.header__call-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: white;
  opacity: 0.6;
}

.header__call-number {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: white;
}

.services__container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 100px 20px 180px;
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.markets__container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 180px 20px 120px;
}

.markets__row {
  display: flex;
  gap: 45px;
}

.markets__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 60px;
}

.markets__el {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.markets__line {
  max-width: 1px;
  min-width: 1px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(218, 219, 221, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.markets__el-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  margin: 24px 0 8px;
}

.markets__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: $gray700;
}

.logos {
  padding: 120px 0 170px;
}

.news {
  position: relative;
}

.news__decor {
  img {
    position: absolute;
    bottom: -19vw;
    left: -12vw;
    width: 39vw;
  }
}

@media (max-width: 1300px) {
  .header__container {
    padding: 20px 50px 120px;
  }
  .services__container {
    padding-right: 50px;
    padding-left: 50px;
  }

  .markets__container {
    padding-right: 50px;
    padding-left: 50px;
  }
}

@media (max-width: 1000px) {
  .markets__container {
    padding-top: 100px;
    padding-bottom: 70px;
  }
  .markets__title {
    font-size: 42px;
  }

  .markets__el-title {
    font-size: 16px;
  }

  .markets__text {
    font-size: 14px;
  }
}

@media (max-width: 900px) {
  .header__text {
    font-size: 17px;
    max-width: none;
  }

  .header__title {
    font-size: 68px;
  }

  .header__dots {
    display: none;
  }

  .header__lines {
    top: -19vw;
    width: 40vw;
  }

  .header__lines-left {
    top: 12vw;
    width: 6vw;
  }

  .header__shapes {
    top: -7vw;
    width: 23vw;
  }

  .header__shapes2 {
    bottom: -20vw;
    width: 41vw;
  }

  .markets__row {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 45px;
    row-gap: 60px;
    div:nth-child(4) {
      display: none;
    }
  }
}

@media (max-width: 700px) {
  .markets__title {
    font-size: 32px;
  }
}

@media (max-width: 650px) {
  .header__title {
    font-size: 58px;
  }
}

@media (max-width: 600px) {
  .markets__row {
    column-gap: 20px;
    row-gap: 40px;
  }
}

@media (max-width: 550px) {
  .header__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .header__lines {
    top: -28vw;
    width: 60vw;
    right: 0;
  }

  .header__lines-left {
    display: none;
  }

  .header__lines-right {
    display: none;
  }

  .header__shapes {
    top: 10vw;
    width: 28vw;
  }

  .header__shapes2 {
    width: 50vw;
    right: -10vw;
  }

  .services__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .markets__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .logos {
    padding: 80px 0 120px;
  }
}

@media (max-width: 500px) {
  .header__title {
    font-size: 48px;
  }

  .header__text {
    font-size: 15px;
  }

  .header__container {
    padding-bottom: 90px;
  }

  .services__container {
    gap: 60px;
  }

  .logos {
    padding: 50px 0 70px;
  }
}

@media (max-width: 450px) {
  .header__row {
    gap: 20px;
  }

  .header__call-number {
    font-size: 13px;
  }

  .header__call {
    gap: 4px;
  }

  .header__button {
    font-size: 14px;
  }

  .header__lines {
    display: none;
  }

  .header__shapes {
    display: none;
  }

  .header__shapes2 {
    display: none;
  }

  .services__container {
    padding-top: 50px;
    padding-bottom: 60px;
  }

  .markets__row {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1px 1fr 1px 1fr 1px 1fr;
    div:nth-child(4) {
      display: block;
    }
  }

  .markets__line {
    max-width: none;
    min-width: none;
    width: 100%;
    height: 100%;
  }

  .markets__el-title {
    font-size: 18px;
  }

  .markets__text {
    font-size: 16px;
  }

  .markets__container {
    padding-top: 60px;
    padding-bottom: 40px;
  }
}

@media (max-width: 400px) {
  .services__container {
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 10px;
  }

  .markets__row {
    row-gap: 20px;
  }

  .markets__title {
    font-size: 28px;
    margin-bottom: 40px;
  }
}
</style>
