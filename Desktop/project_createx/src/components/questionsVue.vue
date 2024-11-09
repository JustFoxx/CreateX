<template>
  <div class="questions">
    <div class="questions__decor">
      <img src="/images/decor/lines.svg" alt="" />
    </div>
    <div class="questions__container">
      <div class="questions__content">
        <div class="questions__title">Freequently Ask Questions</div>
        <div class="questions__box">
          <div class="questions__row">
            <button class="questions__plus" @click="questionsActive[0] = !questionsActive[0]">
              <svg
                class="questions__plus-first"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
              <svg
                :style="{ opacity: questionsActive[0] ? '0' : '1' }"
                class="questions__plus-second"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
            </button>
            <div class="questions__info">
              <div class="questions__question">Aliquet lectus urna viverra in odio?</div>
              <div
                class="questions__text"
                :style="{ gridTemplateRows: questionsActive[0] ? '1fr' : '0fr' }"
              >
                <div>
                  Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum
                  faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
                  massa ac facilisis.
                </div>
              </div>
            </div>
          </div>
          <div class="questions__row">
            <button class="questions__plus" @click="questionsActive[1] = !questionsActive[1]">
              <svg
                class="questions__plus-first"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
              <svg
                :style="{ opacity: questionsActive[1] ? '0' : '1' }"
                class="questions__plus-second"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
            </button>
            <div class="questions__info">
              <div class="questions__question">Orci commodo, viverra orci mollis ut euismod?</div>
              <div
                class="questions__text"
                :style="{ gridTemplateRows: questionsActive[1] ? '1fr' : '0fr' }"
              >
                <div>
                  Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum
                  faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
                  massa ac facilisis. Adipiscing nunc arcu enim elit mattis eu placerat proin.
                  Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna
                  ullamcorper morbi semper massa ac facilisis.
                </div>
              </div>
            </div>
          </div>
          <div class="questions__row">
            <button class="questions__plus" @click="questionsActive[2] = !questionsActive[2]">
              <svg
                class="questions__plus-first"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
              <svg
                :style="{ opacity: questionsActive[2] ? '0' : '1' }"
                class="questions__plus-second"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
            </button>
            <div class="questions__info">
              <div class="questions__question">
                Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?
              </div>
              <div
                class="questions__text"
                :style="{ gridTemplateRows: questionsActive[2] ? '1fr' : '0fr' }"
              >
                <div>
                  Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum
                  faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
                  massa ac facilisis.
                </div>
              </div>
            </div>
          </div>
          <div class="questions__row">
            <button class="questions__plus" @click="questionsActive[3] = !questionsActive[3]">
              <svg
                class="questions__plus-first"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
              <svg
                :style="{ opacity: questionsActive[3] ? '0' : '1' }"
                class="questions__plus-second"
                width="20"
                height="2"
                viewBox="0 0 20 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.829102 1.00033C0.829102 0.540088 1.2022 0.166992 1.66243 0.166992V1.00033V1.83366C1.2022 1.83366 0.829102 1.46056 0.829102 1.00033ZM18.3291 1.00033L18.329 1.83366H1.66243V1.00033V0.166992H18.3286L18.3291 1.00033ZM18.3291 1.00033L18.329 1.83366C18.7893 1.83366 19.1624 1.46056 19.1624 1.00033C19.1624 0.540088 18.7888 0.166992 18.3286 0.166992L18.3291 1.00033Z"
                  fill="#7772F1"
                />
              </svg>
            </button>
            <div class="questions__info">
              <div class="questions__question">In id dolor quis nunc, urna hendrerit pharetra?</div>
              <div
                class="questions__text"
                :style="{ gridTemplateRows: questionsActive[3] ? '1fr' : '0fr' }"
              >
                <div>
                  Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum
                  faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
                  massa ac facilisis. Adipiscing nunc arcu enim elit mattis eu placerat proin.
                  Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna
                  ullamcorper morbi semper massa ac facilisis. Adipiscing nunc arcu enim elit mattis
                  eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient
                  diam magna ullamcorper morbi semper massa ac facilisis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="questions__button">
          Discover more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.85802 4.52827C10.1184 4.26792 10.5405 4.26792 10.8008 4.52827L13.8008 7.52827C14.0612 7.78862 14.0612 8.21073 13.8008 8.47108L10.8008 11.4711C10.5405 11.7314 10.1184 11.7314 9.85802 11.4711C9.59767 11.2107 9.59767 10.7886 9.85802 10.5283L11.72 8.66634H2.66276C2.29457 8.66634 1.99609 8.36786 1.99609 7.99967C1.99609 7.63148 2.29457 7.33301 2.66276 7.33301H11.72L9.85802 5.47108C9.59767 5.21073 9.59767 4.78862 9.85802 4.52827Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div class="questions__imgbox">
        <img class="questions__img" src="/images/questions/illustration.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionsActive: {
        first: false,
        second: false,
        third: false,
        fourth: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$gray700: #787a80;
$primary: #7772f1;

.questions {
  position: relative;
  position: relative;
}

.questions__container {
  display: flex;
  max-width: 1230px;
  padding: 180px 0 120px;
  margin: 0 auto;
}

.questions__decor {
  z-index: -1;
  img {
    position: absolute;
    top: -7vw;
    left: -15vw;
    width: 33.5vw;
  }
}

.questions__box {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.questions__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.questions__row {
  display: flex;
  gap: 20px;
  overflow: hidden;
}

.questions__title {
  margin-bottom: 60px;
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
}

.questions__plus {
  position: relative;
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
  margin-top: 5px;
  background-color: #ffffff00;
}

.questions__plus-first {
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
}

.questions__plus-second {
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  transform: rotate(90deg);
}

.questions__question {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

.questions__text {
  display: grid;
  grid-template-rows: 0fr;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray700;
  transition: all 0.3s;
  div {
    overflow: hidden;
  }
}

.questions__img {
  width: 25vw;
  margin-top: 15%;
}

.questions__button {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  padding: 0px 32px;
  background-color: $primary;
  font-weight: 700;
  font-size: 14px;
  line-height: 314%;
  letter-spacing: 0.04em;
  text-align: center;
  color: white;
  border: 2px solid $primary;
  margin-top: 60px;
  &:hover {
    background-color: #fff;
    color: $primary;
    svg path {
      fill: $primary;
    }
  }
}

@media (max-width: 1500px) {
  .questions__imgbox {
    display: flex;
    align-items: center;
  }

  .questions__container {
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    gap: 80px;
    img {
      width: 100%;
      margin-top: 0;
    }
  }
}

@media (max-width: 1300px) {
  .questions__container {
    padding: 90px 50px 60px;
    gap: 50px;
  }
}

@media (max-width: 1100px) {
  .questions__imgbox {
    display: none;
  }

  .questions__container {
    grid-template-columns: 1fr;
  }

  .questions__title {
    display: flex;
    justify-content: center;
  }

  .questions__button {
    margin: 60px auto 0;
    padding: 0px 46px;
    font-size: 16px;
  }
}

@media (max-width: 700px) {
  .questions__container {
    padding: 60px 50px 40px;
  }

  .questions__title {
    margin-bottom: 40px;
    font-size: 38px;
  }

  .questions__box {
    gap: 16px;
  }

  .questions__question {
    font-size: 16px;
  }

  .questions__text {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .questions__title {
    font-size: 34px;
  }
}

@media (max-width: 550px) {
  .questions__container {
    padding: 60px 20px 40px;
  }

  .questions__button {
    padding: 0px 32px;
    font-size: 14px;
    margin: 25px auto 0;
  }
}

@media (max-width: 500px) {
  .questions__title {
    font-size: 28px;
  }

  .questions__question {
    font-size: 15px;
  }

  .questions__text {
    font-size: 13px;
  }
}

@media (max-width: 400px) {
  .questions__title {
    font-size: 24px;
  }

  .questions__question {
    font-size: 14px;
  }

  .questions__text {
    font-size: 12px;
  }

  .questions__row {
    gap: 10px;
  }
}
</style>
