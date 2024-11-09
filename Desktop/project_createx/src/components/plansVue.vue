<template>
  <div class="plans">
    <div class="plans__decor">
      <img src="/images/decor/lines.svg" alt="" />
    </div>
    <div class="plans__container">
      <div class="plans__title">Flexible pricing plans</div>
      <div class="plans__buttonbox">
        <button
          @click="plansActive = true"
          class="plans__button-month"
          :class="plansActive ? 'plans__button-active' : 'plans__button-notactive'"
        >
          Monthly
        </button>
        <button
          @click="plansActive = false"
          class="plans__button-year"
          :class="!plansActive ? 'plans__button-active' : 'plans__button-notactive'"
        >
          Yearly <span>-12% Off</span>
        </button>
      </div>
      <div class="plans__content">
        <div v-if="plansActive" class="plans__basic-month plans__side">
          <div class="plans__side-title">Basic</div>
          <div class="plans__side-pricebox">
            <div class="plans__side-line"></div>
            <div class="plans__side-price">$24 <span>/mon</span></div>
          </div>
          <div class="plans__side-itembox">
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Advanced Analytics
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Change Management
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Corporate Finance
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              One Way Link Building
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Social Media Marketing
            </div>
            <div class="plans__side-item plans__side-item-notactive">
              <img src="/images/plans/cross.svg" alt="" />
              Strategy & Marketing
            </div>
            <div class="plans__side-item plans__side-item-notactive">
              <img src="/images/plans/cross.svg" alt="" />
              Information Technology
            </div>
          </div>
          <button class="plans__side-button">Choose plan</button>
        </div>
        <div v-if="!plansActive" class="plans__basic-year plans__side">
          <div class="plans__side-title">Basic</div>
          <div class="plans__side-pricebox">
            <div class="plans__side-line"></div>
            <div class="plans__side-price">$288 <span>/year</span></div>
          </div>
          <div class="plans__side-itembox">
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Advanced Analytics
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Change Management
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Corporate Finance
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              One Way Link Building
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Social Media Marketing
            </div>
            <div class="plans__side-item plans__side-item-notactive">
              <img src="/images/plans/cross.svg" alt="" />
              Strategy & Marketing
            </div>
            <div class="plans__side-item plans__side-item-notactive">
              <img src="/images/plans/cross.svg" alt="" />
              Information Technology
            </div>
          </div>
          <button class="plans__side-button">Choose plan</button>
        </div>
        <div v-if="plansActive" class="plans__optimal-month plans__center">
          <div class="plans__center-title">Optimal</div>
          <div class="plans__center-pricebox">
            <div class="plans__center-line"></div>
            <div class="plans__center-price">$64 <span>/mon</span></div>
          </div>
          <div class="plans__center-itembox">
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Advanced Analytics
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Change Management
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Corporate Finance
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              One Way Link Building
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Social Media Marketing
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Strategy & Marketing
            </div>
            <div class="plans__center-item plans__side-item-notactive">
              <img src="/images/plans/cross.svg" alt="" />
              Information Technology
            </div>
          </div>
          <button class="plans__center-button">Choose plan</button>
        </div>
        <div v-if="!plansActive" class="plans__optimal-year plans__center">
          <div class="plans__center-title">Optimal</div>
          <div class="plans__center-pricebox">
            <div class="plans__center-line"></div>
            <div class="plans__center-price">$768 <span>/year</span></div>
          </div>
          <div class="plans__center-itembox">
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Advanced Analytics
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Change Management
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Corporate Finance
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              One Way Link Building
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Social Media Marketing
            </div>
            <div class="plans__center-item">
              <img src="/images/plans/mark.svg" alt="" />
              Strategy & Marketing
            </div>
            <div class="plans__center-item plans__side-item-notactive">
              <img src="/images/plans/cross.svg" alt="" />
              Information Technology
            </div>
          </div>
          <button class="plans__center-button">Choose plan</button>
        </div>
        <div v-if="plansActive" class="plans__premium-month plans__side">
          <div class="plans__side-title">Premium</div>
          <div class="plans__side-pricebox">
            <div class="plans__side-line"></div>
            <div class="plans__side-price">$98 <span>/mon</span></div>
          </div>
          <div class="plans__side-itembox">
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Advanced Analytics
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Change Management
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Corporate Finance
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              One Way Link Building
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Social Media Marketing
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Strategy & Marketing
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Information Technology
            </div>
          </div>
          <button class="plans__side-button">Choose plan</button>
        </div>
        <div v-if="!plansActive" class="plans__premium-year plans__side">
          <div class="plans__side-title">Premium</div>
          <div class="plans__side-pricebox">
            <div class="plans__side-line"></div>
            <div class="plans__side-price">$1176 <span>/year</span></div>
          </div>
          <div class="plans__side-itembox">
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Advanced Analytics
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Change Management
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Corporate Finance
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              One Way Link Building
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Social Media Marketing
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Strategy & Marketing
            </div>
            <div class="plans__side-item">
              <img src="/images/plans/mark.svg" alt="" />
              Information Technology
            </div>
          </div>
          <button class="plans__side-button">Choose plan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plansActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #7772f1;
$gray600: #9a9ca5;

.plans {
  position: relative;
  overflow: hidden;
}

.plans__decor {
  img {
    position: absolute;
    z-index: -1;
    top: -14vw;
    right: -30vw;
    width: 65vw;
  }
}

.plans__container {
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.plans__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  margin-bottom: 60px;
}

.plans__buttonbox {
  border: 1px solid $primary;
  display: inline-flex;
  border-radius: 40px;
  width: 390px;
  justify-content: space-between;
}

.plans__button-month {
  padding: 10px 20px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: $primary;
  background-color: #ffffff00;
}

.plans__button-year {
  padding: 10px 20px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: $primary;
  background-color: #ffffff00;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: $primary;
  }
}

.plans__button-active {
  background-color: $primary;
  color: white;
  width: 60%;
  span {
    color: white;
  }
}

.plans__button-notactive {
  background-color: white;
  color: $primary;
  width: 40%;
}

.plans__content {
  display: flex;
  gap: 30px;
  margin-top: 60px;
}

.plans__side {
  border: 2px solid rgba(119, 114, 241, 0.4);
  box-shadow:
    0 4px 4px -4px rgba(30, 33, 44, 0.03),
    0 12px 10px -6px rgba(154, 156, 165, 0.04),
    0 30px 24px -10px rgba(154, 156, 165, 0.05),
    0 80px 80px -20px rgba(154, 156, 165, 0.08);
  background: white;
  padding: 40px 100px;
  border-radius: 4px;
  animation-name: plans__side;
  animation-duration: 1s;
  max-height: 536px;
}

.plans__center {
  box-shadow: 0 0 30px 0 #1e212c;
  background: #1e212c;
  border: 2px solid #03cea4;
  border-radius: 4px;
  padding: 40px 100px;
  animation-name: plans__center;
  animation-duration: 1s;
  max-height: 536px;
}

.plans__side-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 8px;
}

.plans__side-pricebox {
  position: relative;
}

.plans__center-pricebox {
  position: relative;
}

.plans__side-price {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  display: flex;
  justify-content: center;
  color: $primary;
  margin-bottom: 40px;
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: $primary;
    align-self: start;
  }
}

.plans__side-line {
  position: absolute;
  bottom: -20px;
  left: -99.5px;
  width: 390px;
  height: 1px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(218, 219, 221, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.plans__center-line {
  position: absolute;
  bottom: -20px;
  left: -99.5px;
  width: 390px;
  height: 1px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(218, 219, 221, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.plans__side-itembox {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.plans__side-item {
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  text-wrap: nowrap;
}

.plans__side-button {
  border: 2px solid $primary;
  border-radius: 4px;
  padding: 0px 32px;
  font-weight: 700;
  font-size: 14px;
  line-height: 314%;
  letter-spacing: 0.04em;
  text-align: center;
  color: $primary;
  background-color: #fff;
  display: flex;
  margin: 32px auto 0;
  &:hover {
    background-color: $primary;
    color: white;
  }
}

.plans__side-item-notactive {
  color: $gray600;
}

.plans__center-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  text-align: center;
  color: white;
  margin-bottom: 8px;
}

.plans__center-price {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  text-align: center;
  color: #03cea4;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #03cea4;
    align-self: start;
  }
}

.plans__center-itembox {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}

.plans__center-item {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  text-wrap: nowrap;
}

.plans__center-button {
  border: 2px solid $primary;
  border-radius: 4px;
  padding: 0px 32px;
  font-weight: 700;
  font-size: 14px;
  line-height: 314%;
  letter-spacing: 0.04em;
  text-align: center;
  color: white;
  background-color: $primary;
  display: flex;
  margin: 32px auto 0;
  &:hover {
    background-color: white;
    color: $primary;
  }
}

@keyframes plans__side {
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}

@keyframes plans__center {
  from {
    opacity: 0;
    margin-top: 50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}

@media (max-width: 1300px) {
  .plans__container {
    padding: 0 50px;
  }
  .plans__content {
    flex-wrap: wrap;
    justify-content: center;
  }

  .plans__side {
    animation-name: plans__center;
    animation-duration: 1s;
  }

  .plans__side {
    padding: 40px 96px;
  }

  .plans__center {
    padding: 40px 96px;
  }

  .plans__decor img {
    top: -3vw;
    width: 70vw;
  }
}

@media (max-width: 900px) {
  .plans__side {
    padding: 40px 110px;
  }

  .plans__center {
    padding: 40px 110px;
  }

  .plans__side-item {
    gap: 16px;
  }

  .plans__center-item {
    gap: 16px;
  }

  .plans__decor img {
    top: 40vw;
    width: 92vw;
    right: -39vw;
  }
}

@media (max-width: 700px) {
  .plans__title {
    font-size: 40px;
  }

  .plans__decor img {
    top: 56vw;
    width: 112vw;
  }
}

@media (max-width: 550px) {
  .plans__container {
    padding: 0 20px;
  }

  .plans__title {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .plans__decor img {
    display: none;
  }
}

@media (max-width: 500px) {
  .plans__side {
    padding: 40px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plans__center {
    padding: 40px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plans__side-line {
    display: none;
  }

  .plans__center-line {
    display: none;
  }

  .plans__buttonbox {
    width: 310px;
  }

  .plans__button-month {
    padding: 10px 15px;
    font-size: 15px;
  }

  .plans__button-year {
    padding: 10px 15px;
    font-size: 15px;
  }
}

@media (max-width: 400px) {
  .plans__title {
    font-size: 30px;
  }
}
</style>
