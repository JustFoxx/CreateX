<template>
  <div class="clients">
    <div class="clients__decor">
      <img src="/images/decor/shape-gray.svg" alt="" />
    </div>
    <div class="clients__container">
      <div class="clients__title">What our clients say</div>
      <div class="clients__slider-inner">
        <button class="clients__prev">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.20222 17.2071C8.8117 17.5976 8.17853 17.5976 7.78801 17.2071L3.28801 12.7071C2.89749 12.3166 2.89749 11.6834 3.28801 11.2929L7.78801 6.79289C8.17853 6.40237 8.8117 6.40237 9.20222 6.79289C9.59275 7.18342 9.59275 7.81658 9.20222 8.20711L6.40933 11L19.9951 11C20.5474 11 20.9951 11.4477 20.9951 12C20.9951 12.5523 20.5474 13 19.9951 13L6.40933 13L9.20222 15.7929C9.59275 16.1834 9.59275 16.8166 9.20222 17.2071Z"
              fill="#424551"
            />
          </svg>
        </button>
        <div class="clients__slider">
          <div class="clients__item">
            <div class="clients__svg"><img src="/images/clients/braces.svg" alt="" /></div>
            <div class="clients__info">
              <div class="clients__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id
                turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </div>
              <div class="clients__people">
                <img src="/images/clients/image.jpg" alt="" />
                <div class="clients__people-info">
                  <div class="clients__name">Courtney Alexander</div>
                  <div class="clients__status">Position, Company name</div>
                </div>
              </div>
            </div>
          </div>
          <div class="clients__item">
            <div class="clients__svg"><img src="/images/clients/braces.svg" alt="" /></div>
            <div class="clients__info">
              <div class="clients__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id
                turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </div>
              <div class="clients__people">
                <img src="/images/clients/image.jpg" alt="" />
                <div class="clients__people-info">
                  <div class="clients__name">Courtney Alexander</div>
                  <div class="clients__status">Position, Company name</div>
                </div>
              </div>
            </div>
          </div>
          <div class="clients__item">
            <div class="clients__svg"><img src="/images/clients/braces.svg" alt="" /></div>
            <div class="clients__info">
              <div class="clients__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id
                turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros.
                Pulvinar neque pharetra arcu diam maecenas diam integer in.
              </div>
              <div class="clients__people">
                <img src="/images/clients/image.jpg" alt="" />
                <div class="clients__people-info">
                  <div class="clients__name">Courtney Alexander</div>
                  <div class="clients__status">Position, Company name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="clients__next">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
              fill="#424551"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$primary: #7772f1;
$gray800: #424551;
$gray700: #787a80;

.clients {
  position: relative;
}

.clients__decor {
  position: absolute;
  top: 30%;
  left: calc(50% - 26.5vw);
  z-index: -1;
  img {
    width: 53vw;
  }
}

.clients__container {
  max-width: 1230px;
  margin: 0 auto;
}

.clients__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 60px;
}

.clients__slider-inner {
  display: flex;
  gap: 0;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.clients__prev {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 48px;
  max-height: 48px;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  background-color: #fff;
  &:hover {
    background-color: $primary;
    svg path {
      fill: white;
    }
  }
  svg {
    z-index: 2;
  }
}

.clients__next {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 48px;
  max-height: 48px;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  background-color: #fff;
  &:hover {
    background-color: $primary;
    svg path {
      fill: white;
    }
  }
}

.clients__slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1230px;
  z-index: 5;
}

.clients__item {
  background-color: #fff;
  border-radius: 4px;
  padding: 64px 105px;
  display: flex;
  gap: 30px;
  margin: 25px 50px;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.clients__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: $gray800;
  margin-bottom: 24px;
}

.clients__people {
  display: flex;
  gap: 20px;
  img {
    border-radius: 50%;
    overflow: hidden;
  }
}

.clients__name {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  margin-bottom: 4px;
}

.clients__status {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
}

@media (max-width: 1350px) {
  .clients__slider {
    max-width: 1000px;
  }
}

@media (max-width: 1300px) {
  .clients__container {
    padding: 0 50px;
  }
}

@media (max-width: 1200px) {
  .clients__slider {
    max-width: 800px;
  }

  .clients__item {
    padding: 30px 25px;
  }
}

@media (max-width: 1000px) {
  .clients__prev {
    display: none;
  }

  .clients__next {
    display: none;
  }

  .clients__slider {
    max-width: none;
  }

  // .clients__item {
  //   margin: 0;
  // }
}

@media (max-width: 900px) {
  .clients__text {
    font-size: 16px;
  }

  .clients__item {
    gap: 15px;
  }
}

@media (max-width: 750px) {
  .clients__svg {
    display: none;
  }

  .clients__info {
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
  }

  .clients__text {
    margin-bottom: 0px;
  }

  .clients__title {
    font-size: 34px;
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  .clients__item {
    margin: 25px 10px;
  }

  .clients__title {
    font-size: 28px;
    margin-bottom: 10px;
  }
}

@media (max-width: 550px) {
  .clients__container {
    padding: 0 20px;
  }
}

@media (max-width: 450px) {
  .clients__text {
    font-size: 12px;
  }

  .clients__name {
    font-size: 14px;
  }

  .clients__status {
    font-size: 12px;
  }

  .clients__people {
    align-items: center;
    gap: 10px;
    img {
      width: 42px;
      height: 42px;
    }
  }

  .clients__item {
    padding: 20px 20px;
  }
}
</style>
