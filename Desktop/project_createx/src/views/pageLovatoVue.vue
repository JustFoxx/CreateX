<template>
  <header @click="headerService ? closeHeaderService($event) : ''">
    <div class="header__bg"></div>
    <div class="header__container">
      <navigationVue
        :headerService="headerService"
        :navigationActive="navigationActive"
        :headerBurger="headerBurger"
        @headerServiceToggle="headerService = !headerService"
        @toggleBurger="toggleBurger()"
      />
      <div class="header__location">
        <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;200% increase in
        conversion rate for Lovato Company
      </div>
      <div class="header__svg"><img src="/images/seo/logo-5.png" alt="" /></div>
      <div class="header__title">200% increase in conversion rate for Lovato Company</div>
    </div>
  </header>
  <div class="company">
    <img src="/images/decor/lines4.svg" alt="" class="company__lines4" />
    <div class="company__container">
      <div class="company__left">
        <div class="company__diagrams">
          <div class="company__diagram">
            <div class="company__circle circle__re-80"></div>
            <div class="company__diagram-info">
              <div class="company__diagram-title">70%</div>
              <div class="company__diagram-subtitle">Open Rate</div>
            </div>
          </div>
          <div class="company__diagram">
            <div class="company__circle circle__or-100"></div>
            <div class="company__diagram-info">
              <div class="company__diagram-title">200%</div>
              <div class="company__diagram-subtitle">Growth in sales</div>
            </div>
          </div>
          <div class="company__diagram">
            <div class="company__circle circle__none"></div>
            <div class="company__diagram-info">
              <div class="company__diagram-title">8000</div>
              <div class="company__diagram-subtitle">DAU</div>
            </div>
          </div>
        </div>
        <div class="company__text-bold">
          The Company has been with us for 3 months. They are in our optimal package for SEO & our
          premium package for SEM plus Ad spend ($1,000). The client’s goal was to get growth
          in sales. We helped exceeding the client’s goals in generating new clients.
        </div>
        <p>
          At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus
          in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci,
          consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc,
          neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.
        </p>
        <img src="/images/Lovato/diagram.svg" alt="" class="company__diagram-img" />
        <div class="company__title">Strategies</div>
        <div class="company__marks">
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Gravida elit et libero, varius congue risus
            quisque enim.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Sit quis vitae, gravida aliquam condimentum.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Praesent et facilisis nam mus senectus massa
            dignissim..
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Fermentum diam elementum viverra proin.
          </div>
        </div>
        <p>
          Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi
          in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh
          vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae.
          Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor
          volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus
          convallis eget netus vitae.
        </p>
        <img src="/images/socials/research.png" alt="" class="company__research-img" />
        <div class="company__title">Resieved goals</div>
        <div class="company__marks">
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Bibendum malesuada mauris, id nisl enim diam.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Nam id in non sed cras purus nunc et.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Neque tortor, pellentesque amet est, eu
            accumsan condimentum nulla.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Mauris orci, cursus nisl odio est adipiscing
            gravida magna eget.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Sit turpis sit ultrices viverra adipiscing
            malesuada.
          </div>
        </div>
        <div class="company__title">Results</div>
        <div class="company__marks">
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Mauris dignissim blandit cursus imperdiet
            accumsan lorem vel, tortor.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Quis mauris vel felis convallis nulla
            dignissim.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Cursus sit platea ac posuere non interdum in.
          </div>
          <div class="company__marks-el">
            <img src="/images/plans/mark.svg" alt="" />Mattis pellentesque vel, venenatis, urna,
            quis ut.
          </div>
        </div>
      </div>
      <div class="company__right">
        <img src="/images/decor/shapes.svg" alt="" class="company__right-shapes" />
        <div class="company__grayblock">
          <div class="company__right-title">About the client</div>
          <p>
            At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et
            sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur
            vulputate metus ornare pharetra, neque, fermentum.
          </p>
          <div class="company__right-title">Industry</div>
          <p>Electric company - B2B</p>
          <div class="company__right-title">Services rendered</div>
          <div class="company__marks">
            <div class="company__marks-el">
              <img src="/images/plans/mark.svg" alt="" />Remarketing
            </div>
            <div class="company__marks-el">
              <img src="/images/plans/mark.svg" alt="" />Conversion Rate Optimization
            </div>
            <div class="company__marks-el">
              <img src="/images/plans/mark.svg" alt="" />User Testing
            </div>
            <div class="company__marks-el">
              <img src="/images/plans/mark.svg" alt="" />PPC Management
            </div>
            <div class="company__marks-el">
              <img src="/images/plans/mark.svg" alt="" />Usability Testing
            </div>
          </div>
        </div>
        <div class="company__buttonbox">
          <button class="company__button">#SEO</button>
          <button class="company__button">#research</button>
          <button class="company__button">#payed_traffic</button>
        </div>
        <div class="company__sharebox">
          <div class="company__text-bold">Share:</div>
          <div class="company__logos">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6354 0.836822L12.321 0.833008C9.72086 0.833008 8.04054 2.60392 8.04054 5.34487V7.42513H5.71352C5.51244 7.42513 5.34961 7.59259 5.34961 7.79915V10.8132C5.34961 11.0198 5.51263 11.187 5.71352 11.187H8.04054V18.7925C8.04054 18.9991 8.20337 19.1663 8.40445 19.1663H11.4405C11.6416 19.1663 11.8045 18.9989 11.8045 18.7925V11.187H14.5253C14.7264 11.187 14.8892 11.0198 14.8892 10.8132L14.8903 7.79915C14.8903 7.69997 14.8519 7.60499 14.7837 7.5348C14.7156 7.46461 14.6227 7.42513 14.5262 7.42513H11.8045V5.66166C11.8045 4.81407 12.0011 4.38379 13.0759 4.38379L14.635 4.38322C14.8359 4.38322 14.9987 4.21576 14.9987 4.00939V1.21065C14.9987 1.00447 14.8361 0.837204 14.6354 0.836822Z"
                fill="#787A80"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 4.8106C18.1059 5.08388 17.4148 5.26922 16.6887 5.35196C17.4301 4.92683 17.9976 4.25252 18.2666 3.45149C17.5711 3.84519 16.8035 4.13106 15.9855 4.28603C15.3305 3.61695 14.3988 3.2002 13.3653 3.2002C11.3827 3.2002 9.77523 4.73942 9.77523 6.63674C9.77523 6.90583 9.80694 7.16865 9.86819 7.41997C6.88501 7.2765 4.23973 5.90797 2.46928 3.82843C2.1598 4.33523 1.98374 4.92576 1.98374 5.55613C1.98374 6.74878 2.618 7.8011 3.58033 8.41677C2.992 8.39793 2.43866 8.24296 1.95423 7.98537V8.0283C1.95423 9.69317 3.19213 11.0826 4.83353 11.3989C4.5328 11.4764 4.21568 11.5193 3.88761 11.5193C3.6558 11.5193 3.43161 11.4973 3.2118 11.4554C3.66889 12.8219 4.99429 13.8156 6.56463 13.8428C5.33657 14.7642 3.7881 15.3119 2.10624 15.3119C1.81646 15.3119 1.53103 15.2951 1.25 15.2647C2.83893 16.2417 4.7253 16.8113 6.75273 16.8113C13.3566 16.8113 16.9665 11.5738 16.9665 7.0315L16.9544 6.5865C17.6597 6.1048 18.2699 5.49959 18.75 4.8106Z"
                fill="#787A80"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3285 18.3337L18.3327 18.333V12.2205C18.3327 9.23019 17.6889 6.92671 14.1931 6.92671C12.5125 6.92671 11.3848 7.84894 10.9243 8.72324H10.8757V7.20588H7.56115V18.333H11.0125V12.8232C11.0125 11.3726 11.2875 9.96977 13.0841 9.96977C14.8542 9.96977 14.8806 11.6253 14.8806 12.9163V18.3337H18.3285Z"
                fill="#787A80"
              />
              <path d="M1.94101 7.20657H5.39657V18.3337H1.94101V7.20657Z" fill="#787A80" />
              <path
                d="M3.6674 1.66699C2.56254 1.66699 1.66602 2.56352 1.66602 3.66838C1.66602 4.77324 2.56254 5.68852 3.6674 5.68852C4.77227 5.68852 5.66879 4.77324 5.66879 3.66838C5.6681 2.56352 4.77157 1.66699 3.6674 1.66699Z"
                fill="#787A80"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <analysisVue />
  <div class="clients">
    <div class="clients__decor">
      <img src="/images/decor/shapes.svg" alt="" />
    </div>
    <clientsVue />
  </div>
  <div class="case">
    <caseVue />
  </div>
  <footerVue />
</template>

<script>
import navigationVue from '@/components/navigationVue.vue'
import analysisVue from '@/components/analysis_Vue.vue'
import clientsVue from '@/components/clientsVue.vue'
import caseVue from '@/components/caseVue.vue'
import footerVue from '@/components/footerVue.vue'

export default {
  components: { navigationVue, analysisVue, clientsVue, caseVue, footerVue },

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

header {
  position: relative;
}

.header__svg {
  width: 150px;
}

.header__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/images/CaseP/image.svg') no-repeat center/cover;
  z-index: -1;
  filter: brightness(65%);
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
  margin: 80px 0 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: white;
  opacity: 0.6;
}

.header__title {
  margin: 24px 0 140px;
  font-weight: 900;
  font-size: 56px;
  line-height: 130%;
  letter-spacing: 0.02em;
  text-align: center;
  color: white;
}

.company {
  position: relative;
  overflow: hidden;
}

.company__lines4 {
  position: absolute;
  top: 37vw;
  right: -32vw;
  width: 62vw;
  z-index: -2;
}

.company__container {
  max-width: 1230px;
  margin: 100px auto 180px;
  display: flex;
  gap: 80px;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: $gray800;
  }
}

.company__diagrams {
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
}

.company__diagram {
  display: flex;
  gap: 20px;
  align-items: center;
}

.company__circle {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #fff;
  }
}

.circle__re-80 {
  background: conic-gradient(#f52f6e 0% 80%, rgba(245, 47, 110, 0.3) 80% 100%);
}

.circle__or-100 {
  background: conic-gradient(rgb(248, 152, 40) 0% 100%);
}

.circle__none {
  display: none;
}

.company__diagram-title {
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
}

.company__diagram-subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
}

.company__text-bold {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 24px;
}

.company__diagram-img {
  width: 100%;
  margin: 80px 0;
  border-radius: 4px;
  overflow: hidden;
  box-shadow:
    0 4px 4px -4px rgba(30, 33, 44, 0.03),
    0 12px 10px -6px rgba(154, 156, 165, 0.04),
    0 30px 24px -10px rgba(154, 156, 165, 0.05),
    0 80px 80px -20px rgba(154, 156, 165, 0.08);
}

.company__research-img {
  width: 100%;
}

.company__title {
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  margin-top: 36px;
}

.company__marks {
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.company__marks-el {
  display: flex;
  gap: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-align: left;
  color: $gray800;
  img {
    max-width: 17px;
  }
}

.company__right {
  position: relative;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: $gray800;
    margin-bottom: 24px;
  }
  .company__marks-el {
    font-size: 14px;
    line-height: 150%;
  }
}

.company__grayblock {
  padding: 40px 32px;
  background-color: #f4f5f6;
  border-radius: 4px;
  margin-bottom: 48px;
}

.company__right-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 12px;
}

.company__buttonbox {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
}

.company__button {
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding: 5px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  background-color: #ffffff00;
}

.company__sharebox {
  display: flex;
  gap: 12px;
  .company__text-bold {
    margin-bottom: 0;
  }
}

.company__logos {
  display: flex;
  gap: 12px;
  align-items: center;
}

.company__right-shapes {
  position: absolute;
  top: 8vw;
  right: -6vw;
  z-index: -1;
  width: 13vw;
  transform: rotateY(180deg);
}

.clients {
  padding: 45px 0 43px;
  background-color: #f4f5f6;
  position: relative;
  overflow: hidden;
}

.clients__decor {
  img {
    position: absolute;
    bottom: 0vw;
    right: -9vw;
    width: 20vw;
    z-index: -1;
    transform: rotateY(180deg);
  }
}

.case {
  background-color: #f4f5f6;
}

@media (max-width: 1300px) {
  .header__container {
    padding-right: 50px;
    padding-left: 50px;
  }

  .company__container {
    padding-right: 50px;
    padding-left: 50px;
  }
}

@media (max-width: 1150px) {
  .company__diagrams {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    column-gap: 0;
    row-gap: 40px;
  }

  .company__diagram:nth-child(1) {
    order: 1;
  }

  .company__diagram:nth-child(2) {
    order: 3;
  }

  .company__diagram:nth-child(3) {
    order: 2;
  }
}

@media (max-width: 1000px) {
  .company__diagrams {
    column-gap: 20px;
    margin-bottom: 60px;
  }

  .company__circle {
    width: 52px;
    height: 52px;
    &:before {
      width: 41.6px;
      height: 41.6px;
      top: 5.2px;
      left: 5.2px;
    }
  }

  .company__diagram-title {
    font-size: 26px;
  }

  .company__diagram-subtitle {
    font-size: 18px;
  }
}

@media (max-width: 900px) {
  .header__title {
    font-size: 44px;
  }

  .company__container {
    gap: 30px;
  }

  .company__text-bold {
    font-size: 17px;
  }

  .company__container p {
    font-size: 14px;
  }

  .company__diagram-img {
    margin: 50px 0;
  }

  .company__title {
    font-size: 28px;
  }

  .company__marks-el {
    font-size: 14px;
  }
}

@media (max-width: 750px) {
  .company__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .company__diagrams {
    grid-template-columns: auto auto auto;
  }

  .company__diagram:nth-child(1) {
    order: 1;
  }

  .company__diagram:nth-child(2) {
    order: 2;
  }

  .company__diagram:nth-child(3) {
    order: 3;
  }

  .company__text-bold {
    font-size: 20px;
  }

  .company__container p {
    font-size: 16px;
  }

  .company__marks-el {
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .header__title {
    font-size: 36px;
  }

  .company__container {
    margin-bottom: 90px;
  }

  .clients {
    padding: 30px 0 0px;
  }
}

@media (max-width: 550px) {
  .header__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .header__title {
    font-size: 28px;
    margin-bottom: 60px;
  }

  .company__container {
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 50px;
  }

  .company__diagrams {
    grid-template-columns: 1fr 0.5fr;
  }

  .company__diagram:nth-child(1) {
    order: 1;
  }

  .company__diagram:nth-child(2) {
    order: 3;
  }

  .company__diagram:nth-child(3) {
    order: 2;
  }
}

@media (max-width: 500px) {
  .header__container {
    padding-bottom: 0px;
  }
}

@media (max-width: 450px) {
  .header__location {
    font-size: 12px;
  }

  .company__buttonbox {
    margin-bottom: 20px;
  }

  .company__grayblock {
    margin-bottom: 30px;
  }

  .company__diagram-subtitle {
    font-size: 16px;
  }

  .company__diagram-title {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .header__location {
    font-size: 11px;
    margin-top: 40px;
  }

  .header__title {
    font-size: 24px;
  }

  .company__text-bold {
    font-size: 17px;
  }

  .company__diagrams {
    margin-bottom: 30px;
  }

  .company__container p {
    font-size: 14px;
  }

  .company__marks-el {
    font-size: 14px;
  }
}

@media (hover: hover) {
  .company__button:hover {
    border: 1px solid $primary;
    background-color: $primary;
    color: #fff;
  }

  .company__logos svg:hover path {
    fill: $primary;
  }
}

@media (hover: none) {
  .company__button:active {
    border: 1px solid $primary;
    background-color: $primary;
    color: #fff;
  }

  .company__logos svg:active path {
    fill: $primary;
  }
}
</style>
