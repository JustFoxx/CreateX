<template>
  <div class="all">
    <header @click="headerService ? closeHeaderService($event) : ''">
      <div class="header__bg"></div>
      <div class="header__decor">
        <img src="/images/decor/dots-left.png" class="header__dots" alt="" />
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
          <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;Case Studies
        </div>
        <div class="header__title">Case Studies</div>
        <div class="header__text">
          We help our clients get better results with our creative and data-driven approach to
          online advertising. View our case study portfolio and learn more about the process that
          sets us apart.
        </div>
        <div class="header__formbox">
          <div class="header__form-title">Email</div>
          <form class="header__form">
            <input type="email" placeholder="Your working email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </header>
    <div class="sort">
      <div class="sort__container">
        <div class="sort__buttonbox">
          <button
            class="sort__button"
            :class="[sortSelected === 'all' ? 'sort__buttonact' : '']"
            @click="sortChange('all')"
          >
            All case studies
          </button>
          <button
            class="sort__button"
            :class="[sortSelected === 'social' ? 'sort__buttonact' : '']"
            @click="sortChange('social')"
          >
            Social Media
          </button>
          <button
            class="sort__button"
            :class="[sortSelected === 'seo' ? 'sort__buttonact' : '']"
            @click="sortChange('seo')"
          >
            SEO
          </button>
          <button
            class="sort__button"
            :class="[sortSelected === 'research' ? 'sort__buttonact' : '']"
            @click="sortChange('research')"
          >
            Research
          </button>
          <button
            class="sort__button"
            :class="[sortSelected === 'content' ? 'sort__buttonact' : '']"
            @click="sortChange('content')"
          >
            Content & PR
          </button>
          <button
            class="sort__button"
            :class="[sortSelected === 'payed' ? 'sort__buttonact' : '']"
            @click="sortChange('payed')"
          >
            Payed Traffic
          </button>
        </div>
        <div class="sort__content">
          <div
            :key="sortKey"
            v-if="sortSelected === 'all' || sortSelected === 'social' || sortSelected === 'content'"
            class="sort__el"
          >
            <div class="sort__el-top">
              <div class="sort__el-bg sort__bg1"></div>
              <img src="/images/case/logo-1.png" class="sort__logo" />
              <div class="sort__title">Charity organisation</div>
            </div>
            <div class="sort__el-bottom">
              <div class="sort__diagrams">
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__or-80"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">90%</div>
                    <div class="sort__diagram-subtitle">Engagement</div>
                  </div>
                </div>
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__gr-100"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">100%</div>
                    <div class="sort__diagram-subtitle">Deliverability</div>
                  </div>
                </div>
              </div>
              <div class="sort__line"></div>
              <div class="sort__info">
                <p>
                  Createx SEO Agency helped JNational Inc. increase their MQL to SQL conversion rate
                  by 300%.
                </p>
                <button class="sort__el-button">
                  View case&nbsp;<img src="/images/news/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div
            :key="sortKey"
            v-if="sortSelected === 'all' || sortSelected === 'payed' || sortSelected === 'seo'"
            class="sort__el"
          >
            <div class="sort__el-top">
              <div class="sort__el-bg sort__bg2"></div>
              <img src="/images/case/logo-2.png" class="sort__logo" />
              <div class="sort__title">Oil and natural resources</div>
            </div>
            <div class="sort__el-bottom">
              <div class="sort__diagrams">
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__bl-100"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">200%</div>
                    <div class="sort__diagram-subtitle">Growth in sales</div>
                  </div>
                </div>
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__none"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">1400</div>
                    <div class="sort__diagram-subtitle">Target investors</div>
                  </div>
                </div>
              </div>
              <div class="sort__line"></div>
              <div class="sort__info">
                <p>
                  With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del
                  Mar see a 400% increase in conversion rate.
                </p>
                <button class="sort__el-button">
                  View case&nbsp;<img src="/images/news/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div
            :key="sortKey"
            v-if="sortSelected === 'all' || sortSelected === 'seo' || sortSelected === 'research'"
            class="sort__el"
          >
            <div class="sort__el-top">
              <div class="sort__el-bg sort__bg3"></div>
              <img src="/images/seo/logo-5.png" class="sort__logo" />
              <div class="sort__title">Electric company</div>
            </div>
            <div class="sort__el-bottom">
              <div class="sort__diagrams">
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__re-80"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">80%</div>
                    <div class="sort__diagram-subtitle">Open Rate</div>
                  </div>
                </div>
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__none"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">1840</div>
                    <div class="sort__diagram-subtitle">Target investors</div>
                  </div>
                </div>
              </div>
              <div class="sort__line"></div>
              <div class="sort__info">
                <p>
                  With an advanced A/B testing and usability analysis, Createx SEO Agency helps
                  Lovato see a 200% increase in conversion rate.
                </p>
                <button class="sort__el-button">
                  View case&nbsp;<img src="/images/news/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div
            :key="sortKey"
            v-if="sortSelected === 'all' || sortSelected === 'content'"
            class="sort__el"
          >
            <div class="sort__el-top">
              <div class="sort__el-bg sort__bg4"></div>
              <img src="/images/seo/logo-6.png" class="sort__logo" />
              <div class="sort__title">Personal care</div>
            </div>
            <div class="sort__el-bottom">
              <div class="sort__diagrams">
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__re-80"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">70%</div>
                    <div class="sort__diagram-subtitle">Open Rate</div>
                  </div>
                </div>
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__or-100"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">200%</div>
                    <div class="sort__diagram-subtitle">Growth in sales</div>
                  </div>
                </div>
              </div>
              <div class="sort__line"></div>
              <div class="sort__info">
                <p>
                  We helped Sunset company break through a noisy industry and better understand
                  their buyer's journey.
                </p>
                <button class="sort__el-button">
                  View case&nbsp;<img src="/images/news/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div
            :key="sortKey"
            v-if="sortSelected === 'all' || sortSelected === 'research'"
            class="sort__el"
          >
            <div class="sort__el-top">
              <div class="sort__el-bg sort__bg5"></div>
              <img src="/images/seo/logo-2.png" class="sort__logo" />
              <div class="sort__title">Departments stores</div>
            </div>
            <div class="sort__el-bottom">
              <div class="sort__diagrams">
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__bl-80"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">70%</div>
                    <div class="sort__diagram-subtitle">Increase in leads</div>
                  </div>
                </div>
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__none"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">190+</div>
                    <div class="sort__diagram-subtitle">Prospects</div>
                  </div>
                </div>
              </div>
              <div class="sort__line"></div>
              <div class="sort__info">
                <p>
                  We helped Sunset company break through a noisy industry and better understand
                  their buyer's journey.
                </p>
                <button class="sort__el-button">
                  View case&nbsp;<img src="/images/news/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div
            :key="sortKey"
            v-if="sortSelected === 'all' || sortSelected === 'research'"
            class="sort__el"
          >
            <div class="sort__el-top">
              <div class="sort__el-bg sort__bg6"></div>
              <img src="/images/seo/logo-3.png" class="sort__logo" />
              <div class="sort__title">Electric cars, solar & clean energy</div>
            </div>
            <div class="sort__el-bottom">
              <div class="sort__diagrams">
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__gr-100"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">200%</div>
                    <div class="sort__diagram-subtitle">ROI</div>
                  </div>
                </div>
                <div class="sort__diagrambox">
                  <div class="sort__circle sort__none"></div>
                  <div class="sort__diagram-info">
                    <div class="sort__diagram-title">$12,000</div>
                    <div class="sort__diagram-subtitle">Increase per month</div>
                  </div>
                </div>
              </div>
              <div class="sort__line"></div>
              <div class="sort__info">
                <p>
                  We helped Dove company break through a noisy industry and better understand their
                  buyer's journey.
                </p>
                <button class="sort__el-button">
                  View case&nbsp;<img src="/images/news/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="logos">
      <logosVue />
    </div>
    <div class="clients">
      <div class="clients__bg"></div>
      <img src="/images/CaseP/background.png" alt="" class="clients__background" />
      <clientsVue />
    </div>
    <div class="news">
      <div class="news__bg"></div>
      <img src="/images/decor/lines4.svg" alt="" class="news__lines" />
      <newsVue />
    </div>
    <footerVue />
  </div>
</template>

<script>
import navigationVue from '@/components/navigationVue.vue'
import logosVue from '@/components/logosVue.vue'
import clientsVue from '@/components/clientsVue.vue'
import newsVue from '@/components/newsVue.vue'
import footerVue from '@/components/footerVue.vue'

export default {
  components: { navigationVue, logosVue, clientsVue, newsVue, footerVue },
  data() {
    return {
      headerService: false,
      navigationActive: 2,
      headerBurger: false,
      sortSelected: 'all',
      sortKey: true
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
    sortChange(name) {
      this.sortKey = !this.sortKey
      this.sortSelected = name
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

    $('.clients__slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      draggable: true,
      waitForAnimate: false
    })

    $('.clients__prev').on('click', function () {
      $('.clients__slider').slick('slickPrev')
    })

    $('.clients__next').on('click', function () {
      $('.clients__slider').slick('slickNext')
    }),
      Fancybox.bind('[data-fancybox]', {})
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
}

.header__dots {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
}

.header__lines-left {
  position: absolute;
  bottom: 5vw;
  right: 10vw;
  width: 4.5vw;
  z-index: -1;
}

.header__lines-right {
  position: absolute;
  bottom: 7vw;
  left: 17vw;
  width: 6.5vw;
  z-index: -1;
}

.header__lines4 {
  position: absolute;
  top: -10vw;
  right: 5vw;
  width: 26vw;
  z-index: -1;
}

.header__shapes {
  position: absolute;
  top: -6vw;
  left: 15vw;
  width: 17.4vw;
  z-index: -1;
  transform: rotateY(180deg);
}

.header__shapes2 {
  position: absolute;
  right: -19vw;
  bottom: -6vw;
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
    background-color: #ffffff00;
    margin-left: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: white;
    opacity: 0.6;
    width: 100%;
  }
  button {
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

.sort__buttonbox {
  margin-bottom: 60px;
  display: flex;
  gap: 20px;
  width: 100%;
}

.sort__button {
  border: 2px solid #ffffff00;
  padding: 10px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: $gray600;
  border-radius: 4px;
  background-color: #ffffff00;
}

.sort__buttonact {
  border: 2px solid $primary;
  color: $primary;
}

.sort__el {
  display: grid;
  grid-template-rows: 0.8fr 1fr;
}

.sort__el-top {
  position: relative;
  padding: 28px 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sort__el-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: brightness(50%);
  z-index: -1;
}

.sort__bg1 {
  background: url(../images/CaseP/image.jpg) no-repeat center / cover;
}

.sort__bg2 {
  background: url(../images/case/image.jpg) no-repeat center / cover;
}

.sort__bg3 {
  background: url(../images/CaseP/image.svg) no-repeat center / cover;
}

.sort__bg4 {
  background: url(../images/CaseP/image3.jpg) no-repeat center / cover;
}

.sort__bg5 {
  background: url(../images/CaseP/image4.jpg) no-repeat center / cover;
}

.sort__bg6 {
  background: url(../images/CaseP/image5.jpg) no-repeat center / cover;
}

.sort__logo {
  max-width: 120px;
}

.sort__title {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: white;
}

.sort__container {
  max-width: 1230px;
  margin: 100px auto;
}

.sort__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 48px;
}

.sort__el {
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #e5e8ed;
  box-shadow:
    0 4px 4px -4px rgba(30, 33, 44, 0.03),
    0 12px 10px -6px rgba(154, 156, 165, 0.04),
    0 30px 24px -10px rgba(154, 156, 165, 0.05),
    0 80px 80px -20px rgba(154, 156, 165, 0.08);
  animation-name: sort;
  animation-duration: 0.5s;
}

.sort__circle {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fff;
  }
}

.sort__none {
  display: none;
}

.sort__or-80 {
  background: conic-gradient(rgb(248, 152, 40) 0% 80%, rgba(248, 151, 40, 0.3) 80% 100%);
}

.sort__or-100 {
  background: conic-gradient(rgb(248, 152, 40) 0% 100%);
}

.sort__gr-100 {
  background: conic-gradient(rgb(3, 206, 164) 0% 100%);
}

.sort__bl-100 {
  background: conic-gradient(#5a87fc 0% 100%);
}

.sort__bl-80 {
  background: conic-gradient(#5a87fc 0% 80%, rgba(90, 136, 252, 0.3) 80% 100%);
}

.sort__re-80 {
  background: conic-gradient(rgb(255, 66, 66) 0% 80%, rgba(255, 66, 66, 0.3) 80% 100%);
}

.sort__diagrams {
  display: flex;
  padding: 24px 40px;
  gap: 32px;
}

.sort__diagrambox {
  display: flex;
  gap: 12px;
  align-items: center;
}

.sort__diagram-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

.sort__diagram-subtitle {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
}

.sort__line {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0) 0%,
    rgb(218, 219, 221) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sort__info {
  padding: 20px 40px 28px;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: $gray700;
    margin-bottom: 20px;
  }
}

.sort__el-button {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  gap: 8px;
  background-color: #ffffff00;
}

@keyframes sort {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.logos {
  padding: 80px 0 110px;
  background-color: #f4f5f6;
}

.clients {
  position: relative;
  padding: 0 0 86px 0;
}

.clients__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f4f5f6;
  z-index: -2;
}

.clients__background {
  position: absolute;
  width: 53vw;
  top: 30%;
  left: calc(50% - 26.5vw);
  z-index: -1;
}

.news {
  position: relative;
}

.news__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f4f5f6;
  z-index: -2;
}

.news__lines {
  position: absolute;
  bottom: -18vw;
  left: -13vw;
  z-index: -1;
  width: 39vw;
}

@media (max-width: 1300px) {
  .header__container {
    padding: 20px 50px 120px;
  }

  .sort__container {
    padding-right: 50px;
    padding-left: 50px;
  }
}

@media (max-width: 1250px) {
  .clients {
    padding: 0 0 35px 0;
  }
}

@media (max-width: 1200px) {
  .header__formbox {
    width: 70%;
  }

  .sort__el {
    display: grid;
    grid-template-rows: 1fr 2fr;
  }

  .header__form {
    background: #424551d2;
  }
}

@media (max-width: 1100px) {
  .header__title {
    font-size: 62px;
  }
}

@media (max-width: 1000px) {
  .sort__buttonbox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

@media (max-width: 900px) {
  .header__text {
    font-size: 17px;
    max-width: none;
  }

  .header__title {
    font-size: 46px;
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
    top: 0vw;
    left: -7vw;
    width: 23vw;
    transform: rotateZ(180deg);
  }

  .header__shapes2 {
    bottom: -20vw;
    width: 41vw;
  }

  .sort__info p {
    font-size: 14px;
  }

  .sort__diagrams {
    padding: 24px 20px;
  }

  .sort__info {
    padding: 20px 20px 28px;
  }

  .sort__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
  }

  .sort__el-top {
    padding: 28px 20px;
  }
}

@media (max-width: 800px) {
  .header__formbox {
    width: 90%;
  }
}

@media (max-width: 750px) {
  .sort__diagrams {
    gap: 15px;
  }

  .sort__circle {
    width: 30px;
    height: 30px;
    &:before {
      width: 22px;
      height: 22px;
    }
  }

  .sort__diagram-title {
    font-size: 18px;
    line-height: 110%;
  }
}

@media (max-width: 700px) {
  .header__title {
    display: flex;
    text-align: center;
  }

  .sort__content {
    grid-template-columns: 1fr;
  }

  .sort__circle {
    width: 40px;
    height: 40px;
    &:before {
      width: 32px;
      height: 32px;
    }
  }

  .sort__diagram-title {
    font-size: 20px;
    line-height: 150%;
  }

  .sort__info p {
    font-size: 18px;
  }

  .sort__el-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sort__container {
    margin: 50px auto;
  }
}

@media (max-width: 600px) {
  .header__formbox {
    width: 100%;
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

  .sort__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .sort__button {
    font-size: 14px;
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

  .header__form {
    flex-direction: column;
    width: calc(100vw - 40px);
    input {
      line-height: 325%;
    }
  }

  .header__form input {
    font-size: 14px;
  }

  .header__form button {
    font-size: 14px;
  }

  .logos {
    padding: 40px 0 40px;
  }

  .clients {
    padding: 0 0 20px 0;
  }
}

@media (max-width: 450px) {
  .sort__buttonbox {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .sort__info p {
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
}

@media (max-width: 400px) {
  .header__title {
    font-size: 33px;
  }

  .header__form input {
    font-size: 13px;
  }

  .header__form button {
    font-size: 13px;
  }

  .clients {
    padding: 0 0 10px 0;
  }
}

@media (hover: hover) {
  .header__form button:hover {
    background-color: #fff;
    color: $primary;
  }

  .sort__button:hover {
    border: 2px solid $primary;
    color: $primary;
  }

  .sort__el-button:hover {
    gap: 16px;
  }
}

@media (hover: none) {
  .header__form button:active {
    background-color: #fff;
    color: $primary;
  }

  .sort__button:active {
    border: 2px solid $primary;
    color: $primary;
  }

  .sort__el-button:active {
    gap: 16px;
  }
}
</style>
