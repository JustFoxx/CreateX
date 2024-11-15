<template>
  <div class="analysis">
    <div class="analysis__decor">
      <img class="analysis__lines" src="/images/decor/lines3.svg" alt="" />
    </div>
    <div class="analysis__container">
      <img src="/images/analysis/illustration.svg" class="analysis__img" />
      <form class="analysis__form">
        <div class="analysis__title">Get a Free SEO Analysis!</div>
        <div class="analysis__inputbox">
          <div class="analysis_namebox">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="analysis__name analysis__input"
              placeholder="Your name"
              required
            />
          </div>
          <div class="analysis_emailbox">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="analysis__email analysis__input"
              placeholder="Your working email"
              required
            />
          </div>
        </div>
        <div class="analysis__urlbox">
          <label for="url">Your website URL</label>
          <input
            type="text"
            id="url"
            class="analysis__url analysis__input"
            placeholder="http://yoursite.com"
            required
          />
        </div>
        <div class="analysis__row">
          <div class="analysis__agreebox">
            <input type="checkbox" id="agree" class="analysis__agree" required />
            <label for="agree">I agree to receive communications from Createx SEO Agency</label>
          </div>
          <button type="submit" class="analysis__button">Get a free analysis</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$primary: #7772f1;

.analysis {
  position: relative;
  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: white;
  }
}

.analysis__decor {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #1e212c;
  overflow: hidden;
}

.analysis__lines {
  position: absolute;
  right: -10vw;
  bottom: 2vw;
  width: 17.7vw;
  z-index: -1;
}

.analysis__container {
  display: flex;
  max-width: 1230px;
  padding: 80px 0 80px;
  margin: 0 auto;
  justify-content: space-between;
}

.analysis__form {
  max-width: 600px;
}

.analysis__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  color: white;
  margin-bottom: 40px;
}

.analysis__input {
  background: rgb(50, 50, 57);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: white;
}

.analysis__inputbox {
  display: flex;
  gap: 30px;
  margin-bottom: 24px;
  width: 100%;
  justify-content: space-between;
}

.analysis_namebox {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.analysis_emailbox {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.analysis__urlbox {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 48px;
}

.analysis__url {
  margin-top: 8px;
}

.analysis__row {
  display: flex;
  gap: 65px;
}

.analysis__agreebox {
  max-width: 315px;
}

.analysis__agree {
  margin-right: 5px;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.analysis__agree + label {
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

.analysis__agree:checked + label::before {
  background-color: $primary;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.analysis__agree:not(:disabled):not(:checked) + label:hover::before {
  box-shadow: 0px 0px 0px 4px #7672f15a;
}

.analysis__button {
  text-wrap: nowrap;
  background-color: $primary;
  border-radius: 4px;
  padding: 0 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 325%;
  letter-spacing: 0.03em;
  color: white;
  border: 2px solid $primary;
}

@media (max-width: 1300px) {
  .analysis__container {
    padding: 80px 50px 80px;
  }
}

@media (max-width: 1150px) {
  .analysis__container {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 50px;
    img {
      width: 100%;
    }
  }

  .analysis__row {
    button {
      height: 100%;
    }
  }

  .analysis label {
    font-size: 14px;
  }
}

@media (max-width: 1000px) {
  .analysis__title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .analysis__row {
    gap: 20px;
  }

  .analysis__inputbox {
    gap: 20px;
  }
}

@media (max-width: 950px) {
  .analysis__container {
    img {
      display: none;
    }
    grid-template-columns: 1fr;
  }

  .analysis__form {
    margin: 0 auto;
  }

  .analysis__lines {
    right: -19vw;
    bottom: 5vw;
    width: 40vw;
  }
}

@media (max-width: 550px) {
  .analysis__container {
    padding: 50px 20px 50px;
  }

  .analysis__title {
    // font-size: 30px;
    margin-bottom: 16px;
  }

  .analysis__urlbox {
    margin-bottom: 40px;
  }

  .analysis__button {
    padding: 0 30px;
    font-size: 14px;
  }

  .analysis__row {
    gap: 10px;
  }
}

@media (max-width: 500px) {
  .analysis__inputbox {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
  }

  .analysis__row {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }

  .analysis__urlbox {
    margin-bottom: 20px;
  }
}

@media (max-width: 450px) {
  .analysis__title {
    font-size: 30px;
  }
}

@media (max-width: 400px) {
  .analysis__title {
    font-size: 26px;
  }
}

@media (hover: hover) {
  .analysis__button:hover {
    background-color: #fff;
    color: $primary;
  }
}

@media (hover: none) {
  .analysis__button:active {
    background-color: #fff;
    color: $primary;
  }
}
</style>
