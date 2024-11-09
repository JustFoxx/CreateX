<template>
  <div
    class="all"
    @click="headerService ? closeAll($event) : SelectIsFocused ? closeAll($event) : ''"
  >
    <header>
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
          <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;Careers at
          Createx Agency
        </div>
        <div class="header__title">Careers at Createx Agency</div>
        <div class="header__text">
          We’re looking for extraordinary talents! If you're passionate about SEO and digital
          marketing, we want to hear from you.
        </div>
        <div class="header__contact">
          <img src="/images/Careers/chat.svg" alt="" />
          <div class="header__textbox">
            <div class="header__contact-title">Talk to us</div>
            <a href="#">hello@createx.com</a>
          </div>
          <div class="header__line"></div>
          <img src="/images/Careers/phone.svg" alt="" />
          <div class="header__textbox">
            <div class="header__contact-title">Call us</div>
            <a href="tel:(405) 555-0128">(405) 555-0128</a>
          </div>
        </div>
      </div>
    </header>
    <div class="questions">
      <div class="questions__bg"></div>
      <img src="/images/decor/shapes.svg" alt="" class="questions__shapes" />
      <img src="/images/decor/lines4.svg" alt="" class="questions__lines" />
      <div class="questions__container">
        <div class="questions__content">
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
                <div class="questions__question">
                  Digital Marketing Strategist
                  <button>Apply now</button>
                </div>
                <div
                  class="questions__textbox"
                  :style="{ gridTemplateRows: questionsActive[0] ? '1fr' : '0fr' }"
                >
                  <div class="questions__text">
                    <p>
                      Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris
                      dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue
                      id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus,
                      vulputate est, diam arcu.
                    </p>
                    <p>Requirements:</p>
                    <ul>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vitae luctus et arcu vitae eu tellus orci.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vel morbi nunc ullamcorper nisl, quis varius ultricies blandit.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Purus cursus nascetur leo diam.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Nascetur id turpis facilisis faucibus vel, iaculis etiam.
                      </li>
                    </ul>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Dui, lectus at dui magna vitae vitae egestas sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vulputate placerat amet pulvinar lorem nisl.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Etiam duis lobortis in fames ultrices commodo nibh.
                      </li>
                    </ul>
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
                <div class="questions__question">Sales Executive<button>Apply now</button></div>
                <div
                  class="questions__textbox"
                  :style="{ gridTemplateRows: questionsActive[1] ? '1fr' : '0fr' }"
                >
                  <div class="questions__text">
                    <p>
                      Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris
                      dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue
                      id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus,
                      vulputate est, diam arcu.
                    </p>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Dui, lectus at dui magna vitae vitae egestas sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vulputate placerat amet pulvinar lorem nisl.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Etiam duis lobortis in fames ultrices commodo nibh.
                      </li>
                    </ul>
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
                  Social Media Content Manager
                  <button>Apply now</button>
                </div>
                <div
                  class="questions__textbox"
                  :style="{ gridTemplateRows: questionsActive[2] ? '1fr' : '0fr' }"
                >
                  <div class="questions__text">
                    <p>Requirements:</p>
                    <ul>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vitae luctus et arcu vitae eu tellus orci.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vel morbi nunc ullamcorper nisl, quis varius ultricies blandit.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Purus cursus nascetur leo diam.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Nascetur id turpis facilisis faucibus vel, iaculis etiam.
                      </li>
                    </ul>
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
                <div class="questions__question">
                  Digital Marketing Account Manager<button>Apply now</button>
                </div>
                <div
                  class="questions__textbox"
                  :style="{ gridTemplateRows: questionsActive[3] ? '1fr' : '0fr' }"
                >
                  <div class="questions__text">
                    <p>
                      Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris
                      dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue
                      id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus,
                      vulputate est, diam arcu.
                    </p>
                    <p>Requirements:</p>
                    <ul>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vitae luctus et arcu vitae eu tellus orci.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vel morbi nunc ullamcorper nisl, quis varius ultricies blandit.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Purus cursus nascetur leo diam.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Nascetur id turpis facilisis faucibus vel, iaculis etiam.
                      </li>
                    </ul>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Dui, lectus at dui magna vitae vitae egestas sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vulputate placerat amet pulvinar lorem nisl.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Etiam duis lobortis in fames ultrices commodo nibh.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="questions__row">
              <button class="questions__plus" @click="questionsActive[4] = !questionsActive[4]">
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
                <div class="questions__question">SEO Strategist<button>Apply now</button></div>
                <div
                  class="questions__textbox"
                  :style="{ gridTemplateRows: questionsActive[4] ? '1fr' : '0fr' }"
                >
                  <div class="questions__text">
                    <p>
                      Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris
                      dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue
                      id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus,
                      vulputate est, diam arcu.
                    </p>
                    <p>Responsibilities:</p>
                    <ul>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Dui, lectus at dui magna vitae vitae egestas sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Vulputate placerat amet pulvinar lorem nisl.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                      </li>
                      <li>
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2" r="2" fill="#7772F1" />
                        </svg>
                        Etiam duis lobortis in fames ultrices commodo nibh.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="find">
      <img src="/images/decor/lines4.svg" alt="" class="find__lines" />
      <div class="find__container">
        <div>
          <div class="find__title">Didn’t find what you were looking for?</div>
          <div class="find__subtitle">
            Send your CV or subscribe to our newsletter to receive information about new vacancies.
          </div>
        </div>
        <form class="find__form">
          <div class="find__row">
            <div class="find__box">
              <label class="find__label" for="name">Name*</label>
              <input id="name" type="text" class="find__input" placeholder="Your name" required />
            </div>
            <div class="find__box">
              <label for="tel" class="find__label">Phone*</label>
              <input
                id="tel"
                type="tel"
                class="find__input"
                placeholder="Your phone number"
                required
              />
            </div>
          </div>
          <div class="find__row">
            <div class="find__box">
              <label for="email" class="find__label">Email</label>
              <input
                id="email"
                type="email"
                class="find__input"
                placeholder="Your working email"
                required
              />
            </div>
            <div class="find__box">
              <label @click="focusButton()" ref="selectLabel" class="find__label"
                >I am interested in*</label
              >
              <div class="find__selectbox">
                <button ref="buttonRef" @click="focusButton()" class="find__select">
                  {{ Selected }}
                </button>
                <div class="find__select-listbox">
                  <div
                    class="find__select-list"
                    :style="{
                      gridTemplateRows: SelectIsFocused ? '1fr 1fr 1fr' : '0fr 0fr 0fr',
                      border: SelectIsFocused ? '1px solid #d7dadd' : '0px solid #d7dadd'
                    }"
                  >
                    <button
                      :class="[SelectIsFocused ? 'find__select-el-act' : 'find__select-el']"
                      @click="Selected = 'Option 1'"
                    >
                      Option 1
                    </button>
                    <button
                      :class="[SelectIsFocused ? 'find__select-el-act' : 'find__select-el']"
                      @click="Selected = 'Option 2'"
                    >
                      Option 2
                    </button>
                    <button
                      :class="[SelectIsFocused ? 'find__select-el-act' : 'find__select-el']"
                      @click="Selected = 'Option 3'"
                    >
                      Option 3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="find__box">
            <label for="textarea" class="find__label">Cover letter</label>
            <textarea
              class="find__textarea"
              id="textarea"
              rows="3"
              placeholder="Your cover letter"
              required
            ></textarea>
          </div>
          <a href="#" class="find__attach">
            <img src="/images/Careers/attach.svg" alt="" />
            Attach your CV*
          </a>
          <div class="find__agreebox">
            <input type="checkbox" id="agree" class="find__agree" required />
            <label for="agree">I agree to receive communications from Createx SEO Agency</label>
          </div>
          <button type="submit" class="find__button">Send Resume</button>
        </form>
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
      navigationActive: 1,
      headerBurger: false,
      questionsActive: {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false
      },
      SelectIsFocused: this.$refs.buttonRef === document.activeElement,
      Selected: 'Choose...'
    }
  },
  methods: {
    closeAll(event) {
      if (
        event.target != document.getElementById('header__service') &&
        event.target != document.getElementById('header__nav').firstChild
      ) {
        this.headerService = false
      }

      if (event.target != this.$refs.buttonRef && event.target != this.$refs.selectLabel) {
        this.SelectIsFocused = false
      }
    },
    focusButton() {
      if (this.SelectIsFocused) {
        this.$refs.buttonRef.blur()
      } else {
        this.$refs.buttonRef.focus()
      }
      this.SelectIsFocused = !this.SelectIsFocused
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

.header__contact {
  display: flex;
  img {
    margin-right: 12px;
  }
}

.header__textbox {
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: white;
  }
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

.questions {
  position: relative;
}

.questions__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f4f5f6;
  z-index: -2;
}

.questions__shapes {
  position: absolute;
  top: 15vw;
  left: -7vw;
  width: 17.7vw;
  transform: rotateY(180deg);
  z-index: -1;
}

.questions__lines {
  position: absolute;
  top: -3vw;
  right: -18vw;
  width: 37vw;
  transform: rotate(-90deg);
  z-index: -1;
}

.questions__container {
  display: flex;
  max-width: 1230px;
  padding: 100px 0;
  margin: 0 auto;
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
  width: 100%;
}

.questions__row {
  display: flex;
  gap: 20px;
  overflow: hidden;
}

.questions__plus {
  position: relative;
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
  margin-top: 11px;
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
  font-size: 28px;
  line-height: 150%;
  display: flex;
  justify-content: space-between;
  button {
    background-color: #f4f5f6;
    border: 1px solid $primary;
    border-radius: 4px;
    padding: 0px 32px;
    font-weight: 700;
    font-size: 14px;
    line-height: 314%;
    letter-spacing: 0.04em;
    text-align: center;
    color: $primary;
    &:hover {
      background-color: $primary;
      color: white;
    }
  }
}

.questions__textbox {
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

.questions__text {
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: $gray800;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    li {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: $gray800;
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
}

.find {
  position: relative;
}

.find__lines {
  position: absolute;
  bottom: -14vw;
  left: -15vw;
  width: 39vw;
  z-index: -1;
}

.find__container {
  max-width: 1230px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 100px 0 180px;
  gap: 135px;
}

.find__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  margin-bottom: 40px;
}

.find__subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: $gray800;
}

.find__row {
  display: flex;
  gap: 30px;
  margin-bottom: 24px;
}

.find__box {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.find__input {
  width: 100%;
  background-color: #f4f5f6;
  padding: 13px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  &::placeholder {
    color: $gray600;
  }
}

.find__textarea {
  resize: none;
  width: 100%;
  background-color: #f4f5f6;
  padding: 13px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  &::placeholder {
    color: $gray600;
  }
}

.find__label {
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
}

.find__selectbox {
  position: relative;
}

.find__select {
  display: flex;
  width: 100%;
  background-color: #f4f5f6;
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding: 13px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray600;
}

.find__select-listbox {
  position: relative;
}

.find__select-list {
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f4f5f6;
  width: 100%;
  overflow: hidden;
  button {
    overflow: hidden;
  }
}

.find__select-el-act {
  display: flex;
  padding: 13px 16px;
  &:hover {
    background-color: #e2e3e3;
  }
}

.find__select-el {
  display: flex;
  padding: 0px 16px;
  &:hover {
    background-color: #e2e3e3;
  }
}

.find__attach {
  display: flex;
  gap: 12px;
  margin: 24px 0 32px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
}

.find__agree {
  margin-right: 5px;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.find__agree + label {
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

.find__agree:checked + label::before {
  background-color: $primary;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.find__agree:not(:disabled):not(:checked) + label:hover::before {
  box-shadow: 0px 0px 0px 4px #7672f15a;
}

.find__button {
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
  margin-top: 40px;
  &:hover {
    color: $primary;
    background-color: #fff;
  }
}
</style>
