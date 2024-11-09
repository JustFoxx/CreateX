<template>
  <div class="all">
    <header @click="headerService ? closeHeaderService($event) : ''">
      <div class="header__bg"></div>
      <div class="header__decor">
        <img src="/images/decor/dots-right.png" class="header__dots" alt="" />
        <img src="/images/decor/lines.svg" class="header__lines" alt="" />
        <img src="/images/decor/shapes.svg" class="header__shapes" alt="" />
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
          <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;Contacts
        </div>
        <div class="header__title">Contacts</div>
        <div class="header__contact">
          <img src="/images/Contacts/outline.svg" alt="" />
          <div class="header__textbox">
            <div class="header__contact-title">Visit us</div>
            <p>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
            <a href="#" class="header__visit-a">See on the map</a>
          </div>
          <div class="header__line"></div>
          <img src="/images/Careers/phone.svg" alt="" />
          <div class="header__textbox">
            <div class="header__contact-title">Call us</div>
            <div><a class="header__call-a" href="tel:(405) 555-0128">(405) 555-0128</a></div>
            <div><a class="header__call-a" href="tel:(405) 555-0128">(405) 555-0128</a></div>
          </div>
          <div class="header__line"></div>
          <img src="/images/Careers/chat.svg" alt="" />
          <div class="header__textbox">
            <div class="header__contact-title">Talk to us</div>
            <div><a class="header__call-a" href="#">hello@createx.com</a></div>
          </div>
          <div class="header__line"></div>
          <img src="/images/Contacts/clock.svg" alt="" />
          <div class="header__textbox">
            <div class="header__contact-title">Working Hours</div>
            <div>Mon-Fri: 9 am — 6 pm Sat-Sun: days off</div>
          </div>
        </div>
      </div>
    </header>
    <div class="ready">
      <div class="ready__container">
        <div class="ready__content">
          <div class="ready__title">Ready to get started?</div>
          <p>Services</p>
          <div class="ready__buttonbox">
            <button class="ready__button">Social Media</button>
            <button class="ready__button">SEO</button>
            <button class="ready__button">Research</button>
            <button class="ready__button">Content & PR</button>
            <button class="ready__button">Payed Traffic</button>
          </div>
          <form class="form">
            <div class="form__inputs">
              <div class="form__box">
                <label for="" class="form__label">First Name*</label>
                <input type="text" class="form__input" placeholder="Your first name" required />
              </div>
              <div class="form__box">
                <label for="" class="form__label">Last Name*</label>
                <input type="text" class="form__input" placeholder="Your last name" required />
              </div>
              <div class="form__box">
                <label for="" class="form__label">Email*</label>
                <input type="email" class="form__input" placeholder="Your working email" required />
              </div>
              <div class="form__box">
                <label for="" class="form__label">Phone*</label>
                <input type="number" class="form__input" placeholder="Your phone number" required />
              </div>
              <div class="form__box">
                <label for="" class="form__label">Company</label>
                <input type="text" class="form__input" placeholder="Your company name" />
              </div>
              <div class="form__box">
                <label for="" class="form__label">Position</label>
                <input type="text" class="form__input" placeholder="Your position" />
              </div>
            </div>

            <div class="range__title">Approx. budget</div>
            <div class="form__range">
              <div class="form__price-left">$25K</div>
              <div class="form__price-right">$75K</div>
              <div class="form__progress"></div>
            </div>
            <div class="form__range-input">
              <input type="range" class="form__range-min" min="1" max="100" value="25" />
              <input type="range" class="form__range-max" min="1" max="100" value="75" />
            </div>
            <div class="form__prices">
              <div class="form__price form__price1">
                <div></div>
                $1K
              </div>
              <div class="form__price form__price2">
                <div></div>
                $25K
              </div>
              <div class="form__price form__price3">
                <div></div>
                $50K
              </div>
              <div class="form__price form__price4">
                <div></div>
                $75K
              </div>
              <div class="form__price form__price5">
                <div></div>
                $100K
              </div>
            </div>

            <div class="form__box">
              <label for="" class="form__label">Additional Details</label>
              <textarea id="" class="form__textarea" rows="3" placeholder="Your message"></textarea>
            </div>
            <div class="form__row">
              <div class="agreebox">
                <input type="checkbox" id="agree" class="agree" required />
                <label for="agree" :style="{ color: dark ? '#FFFFFF' : '#424551' }">
                  I agree to receive communications from <br />
                  Createx SEO Agency.</label
                >
              </div>
              <button class="form__button">Request a proposal</button>
            </div>
          </form>
        </div>
        <img src="/images/Contacts/Illustration.svg" alt="" class="ready__img" />
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script>
import navigationVue from '@/components/navigationVue.vue'
import footerVue from '@/components/footerVue.vue'

export default {
  components: { navigationVue, footerVue },
  data() {
    return {
      headerService: false,
      navigationActive: 5,
      headerBurger: false,
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

    let range_input = document.querySelectorAll('.form__range-input input')
    let progress = document.querySelector('.form__range .form__progress')
    let gap = 10
    let price_left = document.querySelector('.form__price-left')
    let price_right = document.querySelector('.form__price-right')

    range_input.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minVal = parseInt(range_input[0].value)
        let maxVal = parseInt(range_input[1].value)

        if (maxVal - minVal < gap) {
          if (e.target.className === 'form__range-min') {
            range_input[0].value = maxVal - gap
            progress.style.left = range_input[0].value + '%'
            price_left.style.left = range_input[0].value + '%'
            price_left.innerHTML = '$' + range_input[0].value + 'K'
          } else {
            range_input[1].value = minVal + gap
            progress.style.right = 100 - range_input[0].value - gap + '%'
            price_right.style.right = 100 - range_input[0].value - gap + '%'
            price_right.innerHTML = '$' + range_input[1].value + 'K'
          }
        } else {
          progress.style.left = (minVal / range_input[0].max) * 100 + '%'
          price_left.style.left = (minVal / range_input[0].max) * 100 + '%'
          price_left.innerHTML = '$' + range_input[0].value + 'K'

          progress.style.right = 100 - (maxVal / range_input[0].max) * 100 + '%'
          price_right.style.right = 100 - (maxVal / range_input[0].max) * 100 + '%'
          price_right.innerHTML = '$' + range_input[1].value + 'K'
        }
      })
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

.header__lines {
  position: absolute;
  top: -9vw;
  left: -16vw;
  width: 34.6vw;
  z-index: -1;
}

.header__shapes {
  position: absolute;
  top: -12vw;
  right: 22vw;
  width: 17.3vw;
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
  margin-bottom: 80px;
}

.header__contact {
  display: flex;
  img {
    margin-right: 12px;
  }
}

.header__textbox {
  div {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: white;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: white;
  }
}

.header__visit-a {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $primary;
}

.header__call-a {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: white;
  text-wrap: nowrap;
}

.header__contact-title {
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: white;
  opacity: 0.6;
}

.header__line {
  width: 1px;
  min-height: 100%;
  margin: 0 40px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5013655120251226) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

.ready__container {
  max-width: 1230px;
  margin: 100px auto 180px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 199px;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: $gray800;
    margin-bottom: 8px;
  }
}

.ready__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  margin-bottom: 40px;
}

.ready__buttonbox {
  display: flex;
  gap: 12px;
  margin: 8px 0 40px;
}

.ready__button {
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding: 5px 16px;
  background-color: #fff;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  text-wrap: nowrap;
  &:hover {
    border: 1px solid $primary;
    color: #ffffff;
    background-color: $primary;
  }
}

.form__inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 24px;
  margin-bottom: 24px;
}

.form__box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__label {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
}

.form__input {
  border: 1px solid #d7dadd;
  border-radius: 4px;
  background-color: #f4f5f6;
  padding: 13px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  &::placeholder {
    color: $gray600;
  }
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none; // Yeah, yeah everybody write about it
}

input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
  appearance: none;
  -moz-appearance: textfield;
}

.range__title {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  margin-bottom: 42px;
}

.form__range {
  position: relative;
  grid-column: span 2;
  height: 2px;
  border-radius: 5px;
  background-color: #d7dadd;
  transition: all 0s;
}

.form__price-left {
  position: absolute;
  left: 25%;
  top: -36px;
  margin-left: -25px;
  padding: 2px 10px;
  background-color: $gray800;
  border-radius: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: white;
  transition: all 0s;
}

.form__price-right {
  position: absolute;
  right: 25%;
  top: -36px;
  margin-right: -25px;
  padding: 2px 10px;
  background-color: $gray800;
  border-radius: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: white;
  transition: all 0s;
}

.form__progress {
  position: absolute;
  left: 25%;
  right: 25%;
  height: 2px;
  background-color: $primary;
  border-radius: 5px;
  transition: all 0s;
}

.form__range-input {
  display: flex;
  position: relative;
  input {
    position: absolute;
    top: -2px;
    height: 2px;
    width: 100%;
    -webkit-appearance: none;
    background-color: #ffffff00;
    pointer-events: none;
  }
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  background-color: $primary;
  border-radius: 50%;
  border: 2px solid #fff;
  pointer-events: auto;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 20px;
    top: -20px;
    background-color: #000;
  }
}

.form__prices {
  position: relative;
  margin-top: 8px;
  margin: 8px 0 52px;
}

.form__price {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  text-align: center;
  div {
    height: 8px;
    width: 2px;
    border-radius: 2px;
    background-color: #b3b7bc;
  }
}

.form__price1 {
  left: 0;
}

.form__price2 {
  left: calc(25% - 12.5px);
}

.form__price3 {
  left: calc(50% - 15px);
}

.form__price4 {
  right: calc(25% - 6px);
}

.form__price5 {
  right: 0;
}

.form__textarea {
  resize: none;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  background-color: #f4f5f6;
  padding: 13px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  &::placeholder {
    color: $gray600;
  }
}

.form__row {
  margin-top: 48px;
  display: flex;
  gap: 60px;
}

.agree {
  margin-right: 5px;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.agree + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  text-wrap: nowrap;
  &:before {
    content: '';
    display: inline-block;
    min-width: 16px;
    min-height: 16px;
    border: 1px solid $primary;
    margin-right: 12px;
    border-radius: 3px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    transition: all 0.3s;
  }
}

.agree:checked + label::before {
  background-color: $primary;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.agree:not(:disabled):not(:checked) + label:hover::before {
  box-shadow: 0px 0px 0px 4px #7672f15a;
}

.form__button {
  border: 2px solid $primary;
  border-radius: 4px;
  padding: 0px 40px;
  background-color: $primary;
  font-weight: 700;
  font-size: 16px;
  line-height: 325%;
  letter-spacing: 0.03em;
  text-align: center;
  color: white;
  text-wrap: nowrap;
  &:hover {
    background-color: #fff;
    color: $primary;
  }
}
</style>
