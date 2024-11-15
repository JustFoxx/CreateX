<template>
  <div class="wrapper">
    <div class="button__upbox">
      <transition name="upButton"
        ><button v-if="upButton" @click="toTop()" class="button__up">
          <img src="/images/header/up.svg" alt="" /></button
      ></transition>
    </div>
    <div class="header__header">
      <div class="header__logobox">
        <router-link to="/home">
          <img src="/images/header/logo.png" alt="" class="header__logo" />
        </router-link>
      </div>
      <div class="header__navbox">
        <nav>
          <ul class="header__nav" id="header__nav">
            <li
              @click="$emit('headerServiceToggle')"
              :id="headerService ? 'header__service-active' : ''"
              :style="{ opacity: navigationActive === 1 ? '1' : '' }"
            >
              Services &nbsp;
              <svg
                :style="{ transform: headerService ? 'rotate(180deg)' : '' }"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1377 0.52827C11.3981 0.788619 11.3981 1.21073 11.1377 1.47108L6.47108 6.13775C6.21073 6.3981 5.78862 6.3981 5.52827 6.13775L0.861604 1.47108C0.601254 1.21073 0.601254 0.788619 0.861604 0.52827C1.12195 0.26792 1.54406 0.26792 1.80441 0.52827L5.99967 4.72353L10.1949 0.52827C10.4553 0.26792 10.8774 0.26792 11.1377 0.52827Z"
                  fill="white"
                />
              </svg>
            </li>
            <li :style="{ opacity: navigationActive === 2 ? '1' : '' }">
              <router-link to="/caseStudies">Case Studies</router-link>
            </li>
            <li :style="{ opacity: navigationActive === 3 ? '1' : '' }">
              <router-link to="/About">About Us</router-link>
            </li>
            <li :style="{ opacity: navigationActive === 4 ? '1' : '' }">
              <router-link to="/Blog">Blog</router-link>
            </li>
            <li :style="{ opacity: navigationActive === 5 ? '1' : '' }">
              <router-link to="/Contacts">Contacts</router-link>
            </li>
          </ul>
        </nav>
        <Transition name="header__service">
          <div id="header__service" class="header__service" v-if="headerService">
            <ul>
              <li @click.stop><router-link to="/services">Our services</router-link></li>
              <li @click.stop>
                <router-link to="/searchEngineOptimization">Engine Optimization</router-link>
              </li>
              <li @click.stop><router-link to="/LovatoCompany">Lovato Company</router-link></li>
              <li @click.stop>
                <router-link to="/Careers">Careers at Createx Agency</router-link>
              </li>
              <li @click.stop>
                <router-link to="/MaximizeROI">How to Maximize Your ROI?</router-link>
              </li>
            </ul>
          </div></Transition
        >
      </div>
      <button class="header__button-talk">Talk to a human</button>
    </div>
    <div class="header__sidebox">
      <button class="header__button-talk" :style="{ marginLeft: '0px' }">Talk to a human</button>
      <div class="header__burgerbox">
        <button
          class="header__burger"
          :class="[headerBurger ? 'burger__active' : '']"
          @click="$emit('toggleBurger')"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div :style="{ right: headerBurger ? '0' : '-100%' }" class="header__popap">
        <div @click="$emit('toggleBurger')"></div>
        <div class="header__side">
          <ul class="header__side-ul">
            <li :style="{ opacity: navigationActive === 0 ? '1' : '' }">
              <router-link to="/home">Home</router-link>
            </li>
          </ul>
          <div class="header__row" :style="{ gap: services ? '12px' : '0px' }">
            <div class="header__serv" @click="services = !services">
              Services&nbsp;
              <svg
                :style="{ transform: services ? 'rotate(180deg)' : '' }"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1377 0.52827C11.3981 0.788619 11.3981 1.21073 11.1377 1.47108L6.47108 6.13775C6.21073 6.3981 5.78862 6.3981 5.52827 6.13775L0.861604 1.47108C0.601254 1.21073 0.601254 0.788619 0.861604 0.52827C1.12195 0.26792 1.54406 0.26792 1.80441 0.52827L5.99967 4.72353L10.1949 0.52827C10.4553 0.26792 10.8774 0.26792 11.1377 0.52827Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="header__serv-text" :style="{ gridTemplateRows: services ? '1fr' : '0fr' }">
              <div><router-link to="/services">Our services</router-link></div>
            </div>
            <div class="header__serv-text" :style="{ gridTemplateRows: services ? '1fr' : '0fr' }">
              <div>
                <router-link to="/searchEngineOptimization">Engine Optimization</router-link>
              </div>
            </div>
            <div class="header__serv-text" :style="{ gridTemplateRows: services ? '1fr' : '0fr' }">
              <div><router-link to="/LovatoCompany">Lovato Company</router-link></div>
            </div>
            <div class="header__serv-text" :style="{ gridTemplateRows: services ? '1fr' : '0fr' }">
              <div><router-link to="/Careers">Careers at Createx Agency</router-link></div>
            </div>
            <div class="header__serv-text" :style="{ gridTemplateRows: services ? '1fr' : '0fr' }">
              <div><router-link to="/MaximizeROI">How to Maximize Your ROI?</router-link></div>
            </div>
          </div>
          <ul class="header__side-ul">
            <li :style="{ opacity: navigationActive === 2 ? '1' : '' }">
              <router-link to="/caseStudies">Case Studies</router-link>
            </li>
            <li :style="{ opacity: navigationActive === 3 ? '1' : '' }">
              <router-link to="/About">About Us</router-link>
            </li>
            <li :style="{ opacity: navigationActive === 4 ? '1' : '' }">
              <router-link to="/Blog">Blog</router-link>
            </li>
            <li :style="{ opacity: navigationActive === 5 ? '1' : '' }">
              <router-link to="/Contacts">Contacts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeHeaderService(event) {
      if (
        event.target != document.getElementById('header__service') &&
        event.target != document.getElementById('header__nav').firstChild
      ) {
        this.headerService = false
      }
    },
    toTop() {
      $('html, body').animate(
        {
          scrollTop: 0
        },
        {
          duration: 370,
          easing: 'linear'
        }
      )
    }
  },
  props: {
    headerService: Boolean,
    navigationActive: Number,
    headerBurger: Boolean
  },
  data() {
    return {
      upButton: false,
      services: false,
      test: false
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        this.upButton = true
      } else {
        this.upButton = false
      }
    })
  },
  emits: ['toggleBurger', 'headerServiceToggle']
}
</script>

<style lang="scss" scoped>
$primary: #7772f1;

.wrapper {
  width: 100%;
}

.header__sidebox {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.button__upbox {
  position: relative;
}

.header__popap {
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: all 0.2s;
  div {
    &:first-child {
      background-color: #00000000;
    }
  }
}

.header__burgerbox {
  z-index: 101;
}

.header__burger {
  position: relative;
  margin: 0 0 0 auto;
  display: none;
  gap: 6px;
  width: 28px;
  height: 28px;
  background-color: #ffffff00;
  span {
    position: absolute;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: calc(50% - 2px);
    }
    &:last-child {
      bottom: 0;
    }
    width: 28px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 4px;
  }
}

.burger__active {
  span {
    &:first-child {
      transform: rotate(45deg);
      top: calc(50% - 2px);
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(135deg);
      bottom: calc(50% - 2px);
    }
  }
}

.header__side {
  height: 100%;
  backdrop-filter: blur(20px) brightness(60%);
  border-left: 3px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  gap: 20px;
}

.header__row {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.header__side-ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #ffffff;
    opacity: 0.7;

    cursor: pointer;
  }
}

.header__serv {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #ffffff;
  opacity: 0.7;

  cursor: pointer;
}

.header__serv-text {
  display: grid;
  grid-template-rows: 0fr;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #ffffff;
  transition: all 0.3s;
  margin-left: 20px;
  div {
    overflow: hidden;
    color: #fff;
    opacity: 0.7;
  }
}

.services__right {
  animation-name: services__right;
  animation-duration: 0.3s;
}

.upButton-enter-from {
  margin-bottom: -50px;
  opacity: 0;
}

.upButton-enter-to {
  margin-bottom: 0;
  opacity: 1;
}

.upButton-leave-from {
  margin-bottom: 0;
  opacity: 1;
}

.upButton-leave-to {
  margin-bottom: 50px;
  opacity: 0;
}

.button__up {
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: $primary;
  padding: 12px;
  border-radius: 4px;
  z-index: 20;
  transition: all 0.3s;
  img {
    width: 24px;
    height: 24px;
  }
  &:before {
    content: '';
    position: absolute;
    border-radius: 16px;
    background-color: rgba(118, 114, 241, 0.2);
    z-index: -1;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }
}

.nav__active {
  opacity: 1;
}

.header__header {
  display: flex;
  gap: 3vw;
  align-items: center;
  width: 100%;
}

.header__logo {
  width: 6.7vw;
  display: flex;
  align-items: center;
}

.header__navbox {
  position: relative;
}

#header__service-active {
  opacity: 1;
  &:after,
  &:before {
    width: 50%;
  }
}

.header__nav {
  display: flex;
  gap: 2vw;
  position: relative;
  li {
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: white;
    opacity: 0.6;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:after,
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #ffffff;
      transition: all 0.3s;
    }
    &:after {
      left: 0;
    }
    &:before {
      right: 0;
    }
  }
}

.header__service-enter-from {
  opacity: 0;
  margin-top: 20px;
}

.header__service-enter-to {
  opacity: 1;
  margin-top: 0;
}

.header__service-leave-from {
  opacity: 1;
  margin-top: 0;
}

.header__service-leave-to {
  opacity: 0;
  margin-top: 20px;
}

.header__service {
  position: absolute;
  top: 120%;
  left: -20px;
  background-color: #0b0a21;
  padding: 20px 40px;
  border-radius: 4px;
  z-index: 1000;
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  li {
    opacity: 0.6;
    color: white;
    cursor: pointer;
    a {
      font-size: 16px;
    }
  }
}

.header__button-talk {
  border-radius: 4px;
  padding: 0px 40px;
  background-color: $primary;
  font-weight: 700;
  font-size: 16px;
  line-height: 325%;
  color: white;
  margin-left: auto;
  border: 2px solid $primary;
}

@media (max-width: 1000px) {
  .header__logo {
    width: 10vw;
  }
}

@media (max-width: 900px) {
  .header__header {
    display: none;
  }

  .header__sidebox {
    display: flex;
  }

  .header__burger {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 550px) {
  .header__popap {
    grid-template-columns: 0fr 1fr;
  }

  .header__serv {
    font-size: 26px;
    gap: 5px;
    svg {
      width: 24px;
      height: 14px;
    }
  }

  .header__serv-text {
    font-size: 24px;
  }

  .header__side-ul {
    li {
      font-size: 26px;
    }
  }

  .header__side {
    border-left: 0px solid #ffffff;
  }
}

@media (max-width: 450px) {
  .header__button-talk {
    font-size: 13px;
  }
}

@media (max-width: 400px) {
  .header__serv {
    font-size: 26px;
    svg {
      width: 12px;
      height: 7px;
    }
  }

  .header__serv-text {
    font-size: 20px;
  }

  .header__side-ul {
    li {
      font-size: 26px;
    }
  }

  .header__button-talk {
    font-size: 11px;
  }
}

@media (max-width: 350px) {
  .button__up img {
    width: 16px;
    height: 16px;
  }
}

@media (hover: hover) {
  .header__side-ul li:hover {
    opacity: 1;
  }

  .header__serv:hover {
    opacity: 1;
  }

  .header__serv-text div:hover {
    opacity: 1;
  }

  .button__up:hover {
    &:before {
      top: -15px;
      left: -15px;
      width: 78px;
      height: 78px;
      transition: all 0.3s;
    }
  }

  .header__nav li:hover {
    opacity: 1;
    &:after,
    &:before {
      width: 50%;
    }
  }

  .header__service li:hover {
    opacity: 1;
  }

  .header__button-talk:hover {
    background-color: #fff;
    color: $primary;
  }
}

@media (hover: none) {
  .header__side-ul li:active {
    opacity: 1;
  }

  .header__serv:active {
    opacity: 1;
  }

  .header__serv-text div:active {
    opacity: 1;
  }

  .button__up:active {
    &:before {
      top: -15px;
      left: -15px;
      width: 78px;
      height: 78px;
      transition: all 0.3s;
    }
  }

  .header__nav li:active {
    opacity: 1;
    &:after,
    &:before {
      width: 50%;
    }
  }

  .header__service li:active {
    opacity: 1;
  }

  .header__button-talk:active {
    background-color: #fff;
    color: $primary;
  }
}
</style>
