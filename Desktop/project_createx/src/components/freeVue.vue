<template>
  <div class="free">
    <div class="free__bg"></div>
    <img src="/images/decor/lines2-white.svg" alt="" class="free__lines" />
    <img src="/images/decor/dots-right.png" alt="" class="free__dots" />
    <div class="free__title">Get a Free SEO Analysis!</div>
    <form class="free__form">
      <div class="free__form-column">
        <label for="name">Name</label>
        <input id="name" type="text" class="free__name" placeholder="Your name" required />
      </div>
      <div class="free__form-column">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          class="free__email"
          placeholder="Your working email"
          required
        />
      </div>
      <div class="free__form-column">
        <label for="url">Your website URL</label>
        <input id="url" type="text" class="free__url" placeholder="http://yoursite.com" required />
      </div>
      <button type="submit" class="free__button">Analyse your site</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$primary: #7772f1;
$gray600: #9a9ca5;
$gray800: #424551;

.free__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $primary;
  z-index: -2;
}

.free__lines {
  position: absolute;
  top: -5vw;
  left: 3vw;
  z-index: -1;
  width: 12vw;
}

.free__dots {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100%;
}

.free {
  position: relative;
  padding: 48px 60px;
  overflow: hidden;
}

.free__title {
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  text-align: center;
  color: white;
  margin-bottom: 32px;
}

.free__form {
  display: flex;
  gap: 24px;
  justify-content: space-between;
}

.free__form-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: white;
  }
  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: $gray800;
    border: 1px solid #d7dadd;
    border-radius: 4px;
    background-color: #f4f5f6;
    padding: 11px 16px;
  }
}

.free__button {
  font-weight: 700;
  font-size: 14px;
  line-height: 314%;
  letter-spacing: 0.04em;
  text-align: center;
  color: white;
  padding: 0px 32px;
  border-radius: 4px;
  height: 44px;
  margin-top: auto;
  background-color: #1e212c;
  border: 1px solid #1e212c;
  text-wrap: nowrap;
  
}

@media (max-width: 1000px) {
  .free__form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    button {
      grid-column: 2;
    }
  }

  .free {
    padding: 48px 30px;
  }
}

@media (max-width: 900px) {
  .free__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 12px;
    button {
      grid-column: 2;
    }
  }

  .free__title {
    margin-bottom: 20px;
  }

  .free__lines {
    width: 19vw;
  }
}

@media (max-width: 700px) {
  .free__form-column input {
    font-size: 13px;
    padding: 11px 14px;
  }
}

@media (max-width: 600px) {
  .free__form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr auto;
    gap: 12px;
    button {
      grid-column: 1;
      margin-top: 10px;
    }
  }

  .free__lines {
    display: none;
  }
}

@media (max-width: 500px) {
  .free__title {
    font-size: 26px;
  }
}

@media (max-width: 400px) {
  .free__title {
    font-size: 21px;
  }
}

@media(hover: hover) {
  .free__button:hover {
    background-color: #f4f5f6;
    color: #1e212c;
  }
}

@media(hover: none) {
  .free__button:active {
    background-color: #f4f5f6;
    color: #1e212c;
  }
}
</style>
