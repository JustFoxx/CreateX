<template>
  <div class="all">
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
          <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;How to Increase
          Your ROI Through Scientific SEM?
        </div>
        <div class="header__title">How to Maximize Your ROI Through Scientific SEM?</div>
      </div>
    </header>
    <div class="main">
      <div class="main__container">
        <div class="main__left">
          <div class="main__row1">
            <div class="main__published">
              <div class="main__published-title">Published</div>
              <div class="main__published-text">
                <img src="/images/Maximize/calendar.svg" alt="" /> July 5, 2020
              </div>
            </div>
            <div class="main__reading">
              <div class="main__reading-title">Reading time</div>
              <div class="main__reading-text">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.834 5.41634C10.834 4.9561 10.4609 4.58301 10.0007 4.58301C9.54041 4.58301 9.16732 4.9561 9.16732 5.41634V9.99967C9.16732 10.2207 9.25511 10.4326 9.41139 10.5889L11.9114 13.0889C12.2368 13.4144 12.7645 13.4144 13.0899 13.0889C13.4153 12.7635 13.4153 12.2359 13.0899 11.9104L10.834 9.6545V5.41634Z"
                    fill="#1E212C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0007 0.833008C4.93804 0.833008 0.833984 4.93706 0.833984 9.99967C0.833984 15.0623 4.93804 19.1663 10.0007 19.1663C15.0633 19.1663 19.1673 15.0623 19.1673 9.99967C19.1673 4.93706 15.0633 0.833008 10.0007 0.833008ZM2.50065 9.99967C2.50065 5.85754 5.85851 2.49967 10.0007 2.49967C14.1428 2.49967 17.5006 5.85754 17.5006 9.99967C17.5006 14.1418 14.1428 17.4997 10.0007 17.4997C5.85851 17.4997 2.50065 14.1418 2.50065 9.99967Z"
                    fill="#1E212C"
                  />
                </svg>
                4 min
              </div>
            </div>
            <div class="main__share1">
              Share:
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z"
                    fill="#787A80"
                  />
                </svg>
              </a>
              <a href="#"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z"
                    fill="#787A80"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.995 22L22 21.9992V14.6642C22 11.0758 21.2275 8.31167 17.0325 8.31167C15.0158 8.31167 13.6625 9.41833 13.11 10.4675H13.0517V8.64667H9.07416V21.9992H13.2158V15.3875C13.2158 13.6467 13.5458 11.9633 15.7017 11.9633C17.8258 11.9633 17.8575 13.95 17.8575 15.4992V22H21.995Z"
                    fill="#787A80"
                  />
                  <path d="M2.32999 8.6475H6.47666V22H2.32999V8.6475Z" fill="#787A80" />
                  <path
                    d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2Z"
                    fill="#787A80"
                  /></svg
              ></a>
            </div>
          </div>
          <hr />
          <div class="main__left-block1">
            <div class="main__left-bold">
              Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui
              odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor
              nullam diam quis est hendrerit ac euismod.
            </div>
            <div class="main__left-text">
              At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et
              sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci,
              consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non
              nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus
              vel. Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat
              lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam
              urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus.
            </div>
          </div>
          <div class="main__left-block2">
            <div class="main__left-title">Why SEM Without CRO Is Impossible?</div>
            <div class="main__left-text">
              Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo.
              Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit
              aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim
              aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus.
              Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis
              curabitur tellus convallis eget netus vitae.
            </div>
          </div>
          <img src="/images/Maximize/image2.jpg" alt="" class="main__left-img" />
          <div class="main__left-block3">
            <img src="/images/clients/braces.svg" alt="" />
            <div class="main__left-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id
              turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam
              eros. Vel accumsan at elit neque, ipsum.
            </div>
          </div>
          <div class="main__left-block4">
            <div class="main__left-title">Check your conversion tracking</div>
            <div class="main__left-text">
              Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae
              mus blandit in neque amet non fringilla blandit:
            </div>
            <ul class="main__left-ul">
              <li class="main__left-li">
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
              <li class="main__left-li">
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
              <li class="main__left-li">
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
              <li class="main__left-li">
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
            <div class="main__left-text">
              Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo.
              Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit
              aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim
              aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus.
              Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis
              curabitur tellus convallis eget netus vitae.
            </div>
          </div>
          <div class="main__row2">
            <div class="main__tagsbox">
              <div>Tags:</div>
              <button class="main__tags-button">#business</button>
              <button class="main__tags-button">#PPC</button>
              <button class="main__tags-button">#targeting</button>
            </div>
            <div class="main__share">
              <div>Share:</div>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z"
                    fill="#787A80"
                  />
                </svg>
              </a>
              <a href="#"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z"
                    fill="#787A80"
                  /></svg
              ></a>
              <a href="#"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.995 22L22 21.9992V14.6642C22 11.0758 21.2275 8.31167 17.0325 8.31167C15.0158 8.31167 13.6625 9.41833 13.11 10.4675H13.0517V8.64667H9.07416V21.9992H13.2158V15.3875C13.2158 13.6467 13.5458 11.9633 15.7017 11.9633C17.8258 11.9633 17.8575 13.95 17.8575 15.4992V22H21.995Z"
                    fill="#787A80"
                  />
                  <path d="M2.32999 8.6475H6.47666V22H2.32999V8.6475Z" fill="#787A80" />
                  <path
                    d="M4.40167 2C3.07583 2 2 3.07583 2 4.40167C2 5.7275 3.07583 6.82583 4.40167 6.82583C5.7275 6.82583 6.80333 5.7275 6.80333 4.40167C6.8025 3.07583 5.72667 2 4.40167 2Z"
                    fill="#787A80"
                  /></svg
              ></a>
            </div>
          </div>
        </div>
        <div class="main__right">
          <div class="main__search">
            <input type="text" placeholder="Search the blog" />
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_16491_485)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.25065 2.16634C4.4432 2.16634 2.16732 4.44223 2.16732 7.24967C2.16732 10.0571 4.4432 12.333 7.25065 12.333C8.65324 12.333 9.92209 11.7658 10.8425 10.8467C11.7647 9.92589 12.334 8.6549 12.334 7.24967C12.334 4.44223 10.0581 2.16634 7.25065 2.16634ZM0.833984 7.24967C0.833984 3.70585 3.70682 0.833008 7.25065 0.833008C10.7945 0.833008 13.6673 3.70585 13.6673 7.24967C13.6673 8.78248 13.1292 10.1905 12.2326 11.2939L14.9716 14.0278C15.2322 14.2879 15.2326 14.7101 14.9725 14.9706C14.7124 15.2312 14.2903 15.2316 14.0297 14.9715L11.2893 12.2362C10.1868 13.13 8.78088 13.6663 7.25065 13.6663C3.70682 13.6663 0.833984 10.7935 0.833984 7.24967Z"
                    fill="#424551"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16491_485">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div class="main__author">
            <div class="main__author-title">Author</div>
            <div class="main__author-content">
              <img src="/images/About/person3.jpg" alt="" />
              <div class="main__author-info">
                <div>
                  <div class="main__author-title2">Diane Mccoy</div>
                  <div class="main__author-text">Lead Digital PR Strategist</div>
                </div>
                <div class="main__author-socials">
                  <a href="#"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3164 6.56704C18.2773 5.68147 18.1341 5.07266 17.929 4.54511C17.7173 3.98513 17.3918 3.48378 16.9652 3.06701C16.5484 2.64375 16.0438 2.31485 15.4903 2.10653C14.9597 1.90139 14.354 1.75818 13.4685 1.71914C12.5763 1.67679 12.2931 1.66699 10.0303 1.66699C7.76745 1.66699 7.48422 1.67679 6.59535 1.71583C5.70979 1.75487 5.10097 1.89821 4.57355 2.10322C4.01344 2.31485 3.5121 2.64044 3.09532 3.06701C2.67206 3.48378 2.3433 3.98843 2.13485 4.54193C1.92971 5.07266 1.7865 5.67817 1.74746 6.56373C1.70511 7.45591 1.69531 7.73914 1.69531 10.002C1.69531 12.2648 1.70511 12.548 1.74415 13.4369C1.78319 14.3224 1.92653 14.9312 2.13167 15.4588C2.3433 16.0188 2.67206 16.5201 3.09532 16.9369C3.5121 17.3602 4.01675 17.6891 4.57024 17.8974C5.10097 18.1025 5.70648 18.2457 6.59217 18.2848C7.48091 18.3239 7.76427 18.3336 10.0271 18.3336C12.2899 18.3336 12.5731 18.3239 13.462 18.2848C14.3476 18.2457 14.9564 18.1025 15.4838 17.8974C16.6039 17.4643 17.4894 16.5788 17.9225 15.4588C18.1275 14.9281 18.2708 14.3224 18.3099 13.4369C18.3489 12.548 18.3587 12.2648 18.3587 10.002C18.3587 7.73914 18.3554 7.45591 18.3164 6.56704ZM16.8155 13.3718C16.7796 14.1857 16.6429 14.6253 16.529 14.9183C16.2489 15.6444 15.6727 16.2206 14.9466 16.5007C14.6536 16.6146 14.2108 16.7513 13.4001 16.7871C12.521 16.8263 12.2573 16.8359 10.0336 16.8359C7.8098 16.8359 7.54285 16.8263 6.66695 16.7871C5.85299 16.7513 5.41346 16.6146 5.12043 16.5007C4.75911 16.3671 4.43022 16.1555 4.16326 15.8788C3.88652 15.6085 3.67489 15.2829 3.54135 14.9216C3.42739 14.6286 3.29067 14.1857 3.25494 13.3751C3.21576 12.496 3.2061 12.2322 3.2061 10.0084C3.2061 7.78467 3.21576 7.51772 3.25494 6.64195C3.29067 5.82799 3.42739 5.38845 3.54135 5.09542C3.67489 4.73397 3.88652 4.40521 4.16657 4.13813C4.4367 3.86138 4.76229 3.64975 5.12374 3.51634C5.41676 3.40238 5.85961 3.26566 6.67026 3.2298C7.54934 3.19075 7.81311 3.18096 10.0367 3.18096C12.2638 3.18096 12.5275 3.19075 13.4034 3.2298C14.2173 3.26566 14.6569 3.40238 14.9499 3.51634C15.3112 3.64975 15.6401 3.86138 15.9071 4.13813C16.1838 4.40839 16.3954 4.73397 16.529 5.09542C16.6429 5.38845 16.7796 5.83117 16.8155 6.64195C16.8546 7.52102 16.8643 7.78467 16.8643 10.0084C16.8643 12.2322 16.8546 12.4927 16.8155 13.3718Z"
                        fill="#787A80"
                      />
                      <path
                        d="M10.0303 5.72052C7.66659 5.72052 5.74882 7.63816 5.74882 10.002C5.74882 12.3658 7.66659 14.2834 10.0303 14.2834C12.3941 14.2834 14.3117 12.3658 14.3117 10.002C14.3117 7.63816 12.3941 5.72052 10.0303 5.72052ZM10.0303 12.7792C8.49683 12.7792 7.253 11.5355 7.253 10.002C7.253 8.4684 8.49683 7.22469 10.0303 7.22469C11.5638 7.22469 12.8075 8.4684 12.8075 10.002C12.8075 11.5355 11.5638 12.7792 10.0303 12.7792Z"
                        fill="#787A80"
                      />
                      <path
                        d="M15.4806 5.55124C15.4806 6.10321 15.0331 6.55076 14.481 6.55076C13.929 6.55076 13.4815 6.10321 13.4815 5.55124C13.4815 4.99915 13.929 4.55172 14.481 4.55172C15.0331 4.55172 15.4806 4.99915 15.4806 5.55124Z"
                        fill="#787A80"
                      /></svg
                  ></a>
                  <a href="#">
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
                  </a>
                  <a href="#">
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
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="main__trending">
            <div class="main__trending-title">Now Trending</div>
            <div class="main__trending-row">
              <img class="main__trending-img" src="/images/Blog/img1.jpg" alt="" />
              <div class="main__trending-info">
                <div class="main__trending-date">
                  <img src="/images/news/clock.svg" alt="" />&nbsp;July 5, 2020
                </div>
                <div class="main__trending-text">
                  5 Surprising Ways to Combine Content Marketing with PPC
                </div>
              </div>
            </div>
            <div class="main__trending-row">
              <img class="main__trending-img" src="/images/Blog/img2.jpg" alt="" />
              <div class="main__trending-info">
                <div class="main__trending-date">
                  <img src="/images/news/clock.svg" alt="" />&nbsp;April 9, 2020
                </div>
                <div class="main__trending-text">Why SEO Is All About Content Marketing?</div>
              </div>
            </div>
            <div class="main__trending-row">
              <img class="main__trending-img" src="/images/Blog/img3.jpg" alt="" />
              <div class="main__trending-info">
                <div class="main__trending-date">
                  <img src="/images/news/clock.svg" alt="" />&nbsp;March 12, 2020
                </div>
                <div class="main__trending-text">
                  10 tips for a small business digital marketing strategy
                </div>
              </div>
            </div>
          </div>
          <div class="main__tags">
            <div class="main__tags-title">Tags</div>
            <div class="main__tagsbox">
              <button class="main__tags-button">#tips&tricks</button>
              <button class="main__tags-button">#strategy</button>
              <button class="main__tags-button">#SMM</button>
              <button class="main__tags-button">#business</button>
              <button class="main__tags-button">#PPC</button>
              <button class="main__tags-button">#targeting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <subscribeVue :dark="true" />
    <div class="like">
      <div class="like__bg"></div>
      <img src="/images/decor/shape-gray2.svg" alt="" class="like__shape" />
      <div class="like__container">
        <div class="like__title">You may also like</div>
        <div class="like__sliderbox">
          <div class="like__slider_buttons">
            <button class="like__slider-prev">
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
                  d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
                  fill="#424551"
                />
              </svg>
            </button>
            <button class="like__slider-next">
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
                  d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
                  fill="#424551"
                />
              </svg>
            </button>
          </div>
          <div class="like__slider">
            <div class="like__slide">
              <img src="/images/Blog/image3.jpg" class="img" alt="" />
              <div class="info">
                Media & Press&nbsp;|&nbsp; <img src="/images/news/clock.svg" alt="" />&nbsp;May 1,
                2020&nbsp;|&nbsp; <img src="/images/news/profile.svg" alt="" />&nbsp;By Diane Mccoy
              </div>
              <div class="title">The Best Practices to Optimize Your Website for Mobile.</div>
              <div class="text">
                Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin
                dignissim lacus, purus gravida...
              </div>
              <button class="button">Read more <img src="/images/news/right.svg" alt="" /></button>
            </div>

            <div class="like__slide">
              <img src="/images/Blog/image4.jpg" class="img" alt="" />
              <div class="info">
                Ad Tips&nbsp;|&nbsp; <img src="/images/news/clock.svg" alt="" />&nbsp;April 25,
                2020&nbsp;|&nbsp; <img src="/images/news/profile.svg" alt="" />&nbsp;By Jane Cooper
              </div>
              <div class="title">10 Seriously Underused Paid Search Strategies.</div>
              <div class="text">
                Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus
                sollicitudin posuere venenatis...
              </div>
              <button class="button">Read more <img src="/images/news/right.svg" alt="" /></button>
            </div>

            <div class="like__slide">
              <img src="/images/Blog/image5.jpg" class="img" alt="" />
              <div class="info">
                Ad Tips&nbsp;|&nbsp; <img src="/images/news/clock.svg" alt="" />&nbsp;June 3,
                2020&nbsp;|&nbsp; <img src="/images/news/profile.svg" alt="" />&nbsp;By Andrew Weepr
              </div>
              <div class="title">How to Create Content That Gets Linked and Shared.</div>
              <div class="text">
                Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis
                sagittis ut. Pulvinar amet vitae..
              </div>
              <button class="button">Read more <img src="/images/news/right.svg" alt="" /></button>
            </div>

            <div class="like__slide">
              <img src="/images/Blog/image1.jpg" class="img" alt="" />
              <div class="info">
                Media & Press&nbsp;|&nbsp; <img src="/images/news/clock.svg" alt="" />&nbsp;June 12,
                2020&nbsp;|&nbsp; <img src="/images/news/profile.svg" alt="" />&nbsp;By Soham
                Alexander
              </div>
              <div class="title">Digital Marketing Game: What You Need to Know to Stay Ahead?</div>
              <div class="text">
                Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque
                mauris gravida...
              </div>
              <button class="button">Read more <img src="/images/news/right.svg" alt="" /></button>
            </div>

            <div class="like__slide">
              <img src="/images/Blog/image2.jpg" class="img" alt="" />
              <div class="info">
                Media & Press&nbsp;|&nbsp; <img src="/images/news/clock.svg" alt="" />&nbsp;June 6,
                2020&nbsp;|&nbsp; <img src="/images/news/profile.svg" alt="" />&nbsp;By Shawn
                Edwards
              </div>
              <div class="title">How to Evaluate and Compare Social Media Tools Today.</div>
              <div class="text">
                Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis
                sagittis ut. Pulvinar amet vitae..
              </div>
              <button class="button">Read more <img src="/images/news/right.svg" alt="" /></button>
            </div>

            <div class="like__slide">
              <img src="/images/Blog/image6.jpg" class="img" alt="" />
              <div class="info">
                Ad Tips&nbsp;|&nbsp; <img src="/images/news/clock.svg" alt="" />&nbsp;March 18,
                2020&nbsp;|&nbsp; <img src="/images/news/profile.svg" alt="" />&nbsp;By Mary Scetec
              </div>
              <div class="title">12 Simple Tips to Creating an Effective Ad.</div>
              <div class="text">
                Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque
                nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna...
              </div>
              <button class="button">Read more <img src="/images/news/right.svg" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script>
import navigationVue from '@/components/navigationVue.vue'
import subscribeVue from '@/components/subscribeVue.vue'
import footerVue from '@/components/footerVue.vue'

export default {
  components: { navigationVue, subscribeVue, footerVue },

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

    $('.like__slider').slick({
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
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })

    $('.like__slider-prev').on('click', function () {
      $('.like__slider').slick('slickPrev')
    })

    $('.like__slider-next').on('click', function () {
      $('.like__slider').slick('slickNext')
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
}

.header__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/images/Maximize/image.jpg') no-repeat center/cover;
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

.main__container {
  max-width: 1330px;
  margin: 100px auto 180px;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 78px;
  padding-right: 50px;
  padding-left: 50px;
}

.main__row1 {
  display: flex;
  gap: 80px;
  margin-bottom: 40px;
}

.main__published-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray700;
  margin-bottom: 4px;
}

.main__published-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

.main__reading-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray700;
  margin-bottom: 4px;
}

.main__reading-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

.main__share1 {
  display: flex;
  gap: 12px;
  margin-top: auto;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

.main__share {
  display: flex;
  gap: 12px;
  margin-top: auto;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

hr {
  width: 100%;
  height: 1px;
  background-color: #e5e8ed;
}

.main__left-block1 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 60px 0;
}

.main__left-bold {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

.main__left-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
}

.main__left-block2 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}

.main__left-title {
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
}

.main__left-img {
  width: 100%;
}

.main__left-block3 {
  display: flex;
  gap: 30px;
  margin: 48px 0 60px;
}

.main__left-block4 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 60px;
}

.main__left-ul {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.main__left-li {
  display: flex;
  align-items: center;
  gap: 16px;
}

.main__row2 {
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
}

.main__tagsbox {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
}

.main__tags-button {
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding: 5px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  background-color: #ffffff00;
}

.main__search {
  position: relative;
  margin-bottom: 60px;
  input {
    padding: 11px 16px;
    background-color: #f4f5f6;
    border: 1px solid #d7dadd;
    border-radius: 4px;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: $gray600;
    width: 100%;
  }
  button {
    position: absolute;
    top: calc(50% - 8px);
    right: 8px;
    background-color: #ffffff00;
  }
}

.main__author-content {
  display: flex;
  gap: 20px;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
}

.main__author-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 24px;
}

.main__author-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main__author-title2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: $gray800;
  margin-bottom: 4px;
}

.main__author-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
}

.main__author-socials {
  margin-top: auto;
  display: flex;
  gap: 12px;
}

.main__trending {
  margin: 60px 0;
}

.main__trending-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 24px;
}

.main__trending-row {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}

.main__trending-date {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  margin-bottom: 4px;
}

.main__trending-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  cursor: pointer;
}

.main__tags-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 24px;
}

.main__tagsbox {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
}

.like {
  position: relative;
}

.like__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: -2;
}

.like__shape {
  position: absolute;
  top: 6vw;
  left: -20vw;
  z-index: -1;
  transform: rotate(180deg);
}

.like__container {
  max-width: 1330px;
  margin: 0 auto;
  padding: 120px 0 180px;
  padding-right: 50px;
  padding-left: 50px;
}

.like__title {
  font-weight: 900;
  font-size: 46px;
  line-height: 130%;
  margin-bottom: 60px;
}

.like__slider {
  width: 100%;
  height: 507px;
  display: flex;
  max-width: 1230px;
  justify-content: space-between;
  margin-left: 7px;
}

.like__slide {
  width: 390px;
  height: 507px;
  position: relative;
  border-radius: 4px;
}

.like__sliderbox {
  position: relative;
}

.like__slider_buttons {
  position: absolute;
  top: -96px;
  right: 7px;
  display: flex;
  gap: 12px;
}

.like__slider-prev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ffffff00;
}

.like__slider-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ffffff00;
  svg {
    transform: rotate(180deg);
  }
}

.img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 16px;
}

.info {
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  margin-bottom: 8px;
}

.title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 8px;
}

.text {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  margin-bottom: 16px;
}

.button {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  gap: 8px;
  background-color: #ffffff00;
  align-items: center;
}

@media (max-width: 1300px) {
  .like__slider {
    height: auto;
  }

  .like__slide {
    img {
      object-fit: cover;
      height: 50%;
    }
  }
}

@media (max-width: 1100px) {
  .main__container {
    gap: 50px;
    grid-template-columns: 1fr;
  }

  .main__row1 {
    gap: 0;
    justify-content: space-between;
  }

  .main__left-bold {
    font-size: 18px;
  }

  .main__left-text {
    font-size: 14px;
  }

  .main__left-title {
    font-size: 26px;
  }

  .main__left-li {
    font-size: 14px;
  }

  .main__tags-button {
    padding: 5px 10px;
    font-size: 13px;
  }

  .main__tagsbox {
    gap: 8px;
  }
}

@media (max-width: 1000px) {
  .like__title {
    font-size: 38px;
  }
}

@media (max-width: 900px) {
  .header__title {
    font-size: 44px;
  }

  .info {
    font-size: 13px;
    img {
      display: none;
    }
  }

  .title {
    font-size: 18px;
  }

  .text {
    font-size: 14px;
  }

  .button {
    font-size: 14px;
    img {
      width: 22px;
    }
  }

  .like__container {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media (max-width: 800px) {
  .main__trending {
    margin: 30px 0;
  }

  .main__search {
    margin-bottom: 30px;
  }

  .main__row2 {
    margin-bottom: 0;
  }

  .like__title {
    font-size: 32px;
  }
}

@media (max-width: 750px) {
  .info {
    font-size: 11px;
  }

  .title {
    font-size: 16px;
  }

  .text {
    font-size: 13px;
  }
}

@media (max-width: 700px) {
  .header__title {
    font-size: 36px;
    margin-bottom: 60px;
  }

  .like__title {
    font-size: 30px;
  }

  .info {
    font-size: 10px;
  }

  .like__container {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

@media(max-width:650px) {
  .like__container {
    padding-top: 50px;
    padding-bottom: 0px;
  }
}

@media (max-width: 550px) {
  .header__title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .main__container {
    padding-right: 20px;
    padding-left: 20px;
    margin: 70px 0;
  }

  .like__container {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (max-width: 500px) {
  .main__row1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
  }

  .main__left-block1 {
    margin: 30px 0;
  }

  .main__left-block3 {
    margin: 30px 0 40px;
    flex-direction: column;
    gap: 15px;
    img {
      width: 28px;
    }
  }

  .main__left-block4 {
    margin-bottom: 40px;
  }

  .main__tagsbox {
    display: grid;
    grid-template-columns: auto auto auto;
    div {
      grid-column: span 3;
    }
  }

  .main__share {
    display: grid;
    grid-template-columns: auto auto auto;
    div {
      grid-column: span 3;
    }
  }

  .like__slider-prev {
    width: 38px;
    height: 38px;
    svg {
      width: 16px;
    }
  }

  .like__slider-next {
    width: 38px;
    height: 38px;
    svg {
      width: 16px;
    }
  }
}

@media (max-width: 450px) {
  .header__location {
    font-size: 12px;
  }

  .like__title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .like__slider_buttons {
    top: -66px;
  }
}

@media (max-width: 400px) {
  .header__title {
    font-size: 24px;
    margin-bottom: 0;
  }

  .header__location {
    font-size: 9px;
    margin-top: 40px;
  }

  .main__container {
    margin: 50px 0;
  }

  .main__row1 {
    margin-bottom: 20px;
  }

  .main__left-block1 {
    margin: 20px 0;
    gap: 15px;
  }

  .main__published-title {
    font-size: 13px;
  }

  .main__published-text {
    font-size: 16px;
  }

  .main__reading-title {
    font-size: 13px;
  }

  .main__reading-text {
    font-size: 16px;
  }

  .main__share1 {
    font-size: 18px;
    svg {
      width: 20px;
    }
  }

  .main__share {
    font-size: 18px;
    svg {
      width: 20px;
    }
  }

  .main__left-bold {
    font-size: 15px;
  }

  .main__left-text {
    font-size: 13px;
  }

  .main__left-title {
    font-size: 20px;
  }

  .main__left-block2 {
    gap: 18px;
  }

  .main__left-bold {
    font-size: 14px;
  }

  .main__left-block3 {
    margin: 20px 0;
  }

  .main__left-block4 {
    gap: 18px;
  }

  .main__tagsbox {
    display: grid;
    grid-template-columns: auto auto;
    div {
      grid-column: span 2;
    }
  }

  .main__author-title {
    font-size: 20px;
  }

  .main__author-title2 {
    font-size: 18px;
  }

  .main__trending-title {
    font-size: 20px;
  }

  .main__trending-text {
    font-size: 15px;
  }

  .main__tags-title {
    font-size: 20px;
  }

  .like__title {
    font-size: 22px;
  }
}

@media (hover: hover) {
  .main__share a:hover {
    svg path {
      fill: $primary;
    }
  }

  .main__tags-button:hover {
    background-color: $primary;
    color: white;
    border: 1px solid $primary;
  }

  .main__author-socials a:hover svg path {
    fill: $primary;
  }

  .main__trending-text:hover {
    color: $primary;
  }

  .like__slider-prev:hover {
    background-color: $primary;
    svg path {
      fill: white;
    }
  }

  .like__slider-next:hover {
    background-color: $primary;
    svg path {
      fill: white;
    }
  }

  .button:hover {
    gap: 16px;
  }
}

@media (hover: none) {
  .main__share a:active {
    svg path {
      fill: $primary;
    }
  }

  .main__tags-button:active {
    background-color: $primary;
    color: white;
    border: 1px solid $primary;
  }

  .main__author-socials a:active svg path {
    fill: $primary;
  }

  .main__trending-text:active {
    color: $primary;
  }

  .like__slider-prev:active {
    background-color: $primary;
    svg path {
      fill: white;
    }
  }

  .like__slider-next:active {
    background-color: $primary;
    svg path {
      fill: white;
    }
  }

  .button:active {
    gap: 16px;
  }
}
</style>
