<template>
  <div class="all">
    <div class="bg" :style="{ backgroundColor: dark ? '#1E212C' : '#f4f5f6' }"></div>
    <img src="/images/decor/lines3.svg" class="lines" alt="" />
    <div class="container">
      <div class="info">
        <div class="title" :style="{ color: dark ? '#FFFFFF' : '#1E212C' }">
          Subsribe to our blog
        </div>
        <div class="text" :style="{ color: dark ? '#FFFFFF' : '#787A80' }">
          And receive latest trends in search, marketing, digital and news.
        </div>
        <form class="form">
          <label for="email" :style="{ color: dark ? '#FFFFFF' : '#424551' }">Email</label>
          <div class="form__row">
            <input
              class="input"
              id="email"
              type="email"
              required
              placeholder="Your working email"
              :style="{
                backgroundColor: dark ? 'rgba(255, 255, 255, 0.12)' : '#FFFFFF',
                border: dark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #D7DADD'
              }"
            />
            <button type="submit" class="form__button">Subscribe</button>
          </div>
          <div class="agreebox">
            <input type="checkbox" id="agree" class="agree" required />
            <label for="agree" :style="{ color: dark ? '#FFFFFF' : '#424551' }"
              >I agree to receive communications from Createx SEO Agency.</label
            >
          </div>
        </form>
      </div>
      <img
        :src="
          dark
            ? '/CreateX/images/Blog/illustration-dark.png'
            : '/CreateX/images/Blog/illustration.png'
        "
        alt=""
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped>
$primary: #7772f1;
$gray700: #787a80;
$gray800: #424551;
$gray600: #9a9ca5;

.all {
  overflow: hidden;
  position: relative;
}

.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.lines {
  position: absolute;
  bottom: -2vw;
  left: -12vw;
  width: 25vw;
  z-index: -1;
}

.container {
  max-width: 1330px;
  margin: 0 auto;
  padding: 100px 0 120px;
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  padding-left: 50px;
}

.info {
  max-width: 420px;
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

.title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  margin-bottom: 24px;
}

.text {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 40px;
}

label {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray800;
  margin-bottom: 8px;
}

.form__row {
  display: flex;
  margin-bottom: 24px;
}

.input {
  // border: 1px solid #ffffff33;
  border-radius: 4px 0 0 4px;
  background-color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray800;
  padding: 11px 16px;
  width: 100%;
  ::placeholder {
    color: $gray600;
  }
}

.form__button {
  border-radius: 0 4px 4px 0;
  padding: 0px 32px;
  background-color: $primary;
  font-weight: 700;
  font-size: 14px;
  line-height: 314%;
  letter-spacing: 0.04em;
  text-align: center;
  color: white;
  border: 1px solid $primary;
}

@media (max-width: 1200px) {
  .container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 40px;
    img {
      width: 400px;
    }
  }

  .info {
    max-width: none;
  }
}

@media (max-width: 1000px) {
  .title {
    font-size: 32px;
  }

  .text {
    font-size: 18px;
    margin-bottom: 30px;
  }
}

@media (max-width: 900px) {
  .title {
    font-size: 38px;
  }

  .text {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .img {
    display: none;
  }

  .container {
    grid-template-columns: 1fr;
  }

  .form {
    max-width: 600px;
  }

  .container {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

@media (max-width: 700px) {
  .title {
    font-size: 30px;
    margin-bottom: 12px;
  }

  .text {
    font-size: 17px;
  }

  .input {
    font-size: 13px;
  }

  .form__button {
    font-size: 13px;
  }
}

@media (max-width: 550px) {
  .container {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (max-width: 500px) {
  .agree + label:before {
    min-width: 14px;
    min-height: 14px;
    margin-right: 8px;
  }

  label {
    font-size: 12px;
  }
}

@media (max-width: 450px) {
  .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .text {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .input {
    font-size: 12px;
  }

  .form__button {
    font-size: 12px;
  }
}

@media (max-width: 400px) {
  label {
    font-size: 11px;
  }

  .input {
    padding: 8px 10px;
  }

  .form__button {
    padding: 0px 28px;
    line-height: 283%;
  }
}

@media (hover: hover) {
  .form__button:hover {
    background-color: #fff;
    color: $primary;
  }
}

@media (hover: none) {
  .form__button:active {
    background-color: #fff;
    color: $primary;
  }
}
</style>
