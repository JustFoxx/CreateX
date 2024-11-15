<template>
  <div class="all">
    <header @click="headerService ? closeHeaderService($event) : ''">
      <div class="header__bg"></div>
      <div class="header__decor">
        <img src="/images/decor/dots-right.png" class="header__dots" alt="" />
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
          <img src="/images/Services/home.svg" alt="" />&nbsp;&nbsp;&gt;&nbsp;&nbsp;Blog
        </div>
        <div class="header__title">Blog</div>
        <div class="header__text">
          Thoughts, trends and up-to-date news in search and digital marketing. Subsribe to our blog
          and receive latest news weekly.
        </div>
        <div class="header__formbox">
          <div class="header__form">
            <input type="email" placeholder="Search the blog" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </header>
    <div class="news">
      <div class="news__container">
        <div class="news__content">
          <div class="news__el">
            <img class="news__img" src="/images/news/pic.jpg" alt="" />
            <div class="news__el-info">
              SEO | <img src="/images/news/clock.svg" alt="" /> July 5, 2020 |
              <img src="/images/news/profile.svg" alt="" /> By Diane Mccoy
            </div>
            <div class="news__el-title">How to Maximize Your ROI Through Scientific SEM?</div>
            <button class="news__el-button">
              Read more <img src="/images/news/right.svg" alt="" />
            </button>
          </div>
          <div class="news__el">
            <img class="news__img" src="/images/news/pic2.jpg" alt="" />
            <div class="news__el-info">
              Marketing | <img src="/images/news/clock.svg" alt="" /> July 2, 2020 |
              <img src="/images/news/profile.svg" alt="" /> By Diane Mccoy
            </div>
            <div class="news__el-title">The Basics of Blogging Search Engine Optimization.</div>
            <button class="news__el-button">
              Read more <img src="/images/news/right.svg" alt="" />
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="categories">
      <img src="/images/decor/shapes.svg" alt="" class="categories__shapes" />
      <img src="/images/decor/lines3.svg" alt="" class="categories__lines" />
      <div class="categories__container">
        <div class="categories__content">
          <blogElementVue
            v-for="item in categoriesList"
            :key="`${item.id}_${compKey}`"
            :index="item.id"
            :activePage="activePage"
            :img="item.img"
            :category="item.category"
            :date="item.date"
            :person="item.person"
            :title="item.title"
            :text="item.text"
            :active="item.active"
            :page="item.page"
          />
          <hr class="categories__hr" />
          <div class="categories__pages">
            <button
              class="categories__page"
              @click="activePage = 1"
              :style="{ color: activePage === 1 ? '#7772f1' : '#424551' }"
            >
              1
            </button>
            <button
              class="categories__page"
              @click="activePage = 2"
              :style="{ color: activePage === 2 ? '#7772f1' : '#424551' }"
              v-if="activeNumber > 6"
            >
              2
            </button>
            <button
              class="categories__page"
              @click="activePage = 3"
              :style="{ color: activePage === 3 ? '#7772f1' : '#424551' }"
              v-if="activeNumber > 12"
            >
              3
            </button>
            <button
              class="categories__page"
              @click="activePage = 4"
              :style="{ color: activePage === 4 ? '#7772f1' : '#424551' }"
              v-if="activeNumber > 18"
            >
              4
            </button>
            <button class="categories__button-next" @click="nextPage()">
              Next
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
        <div class="categories__blog">
          <div class="categories__blog-title">Blog Categories</div>
          <button
            class="categories__blog-row"
            @click="(activeClass = 'all'), activeEl()"
            :style="{ color: activeClass === 'all' ? '#7772f1' : '#424551' }"
          >
            All
            <p :style="{ color: activeClass === 'all' ? '#7772f1' : '#424551' }">24</p>
          </button>
          <button
            class="categories__blog-row"
            @click="(activeClass = 'media'), activeEl()"
            :style="{ color: activeClass === 'media' ? '#7772f1' : '#424551' }"
          >
            Media & Press
            <p :style="{ color: activeClass === 'media' ? '#7772f1' : '#424551' }">3</p>
          </button>
          <button
            class="categories__blog-row"
            @click="(activeClass = 'ad'), activeEl()"
            :style="{ color: activeClass === 'ad' ? '#7772f1' : '#424551' }"
          >
            Ad Tips
            <p :style="{ color: activeClass === 'ad' ? '#7772f1' : '#424551' }">7</p>
          </button>
          <button
            class="categories__blog-row"
            @click="(activeClass = 'marketing'), activeEl()"
            :style="{ color: activeClass === 'marketing' ? '#7772f1' : '#424551' }"
          >
            Marketing
            <p :style="{ color: activeClass === 'marketing' ? '#7772f1' : '#424551' }">4</p>
          </button>
          <button
            class="categories__blog-row"
            @click="(activeClass = 'seo'), activeEl()"
            :style="{ color: activeClass === 'seo' ? '#7772f1' : '#424551' }"
          >
            SEO
            <p :style="{ color: activeClass === 'seo' ? '#7772f1' : '#424551' }">8</p>
          </button>
          <button
            class="categories__blog-row"
            @click="(activeClass = 'paid'), activeEl()"
            :style="{ color: activeClass === 'paid' ? '#7772f1' : '#424551' }"
          >
            Paid Search
            <p :style="{ color: activeClass === 'paid' ? '#7772f1' : '#424551' }">2</p>
          </button>
        </div>
        <div class="categories__trending">
          <div class="categories__trending-title">Now Trending</div>
          <div class="categories__trending-row">
            <img class="categories__trending-img" src="/images/Blog/img1.jpg" alt="" />
            <div class="categories__trending-info">
              <div class="categories__trending-date">
                <img src="/images/news/clock.svg" alt="" />&nbsp;July 5, 2020
              </div>
              <div class="categories__trending-text">
                5 Surprising Ways to Combine Content Marketing with PPC
              </div>
            </div>
          </div>
          <div class="categories__trending-row">
            <img class="categories__trending-img" src="/images/Blog/img2.jpg" alt="" />
            <div class="categories__trending-info">
              <div class="categories__trending-date">
                <img src="/images/news/clock.svg" alt="" />&nbsp;April 9, 2020
              </div>
              <div class="categories__trending-text">Why SEO Is All About Content Marketing?</div>
            </div>
          </div>
          <div class="categories__trending-row">
            <img class="categories__trending-img" src="/images/Blog/img3.jpg" alt="" />
            <div class="categories__trending-info">
              <div class="categories__trending-date">
                <img src="/images/news/clock.svg" alt="" />&nbsp;March 12, 2020
              </div>
              <div class="categories__trending-text">
                10 tips for a small business digital marketing strategy
              </div>
            </div>
          </div>
        </div>
        <div class="categories__tags">
          <div class="categories__tags-title">Tags</div>
          <div class="categories__tagsbox">
            <button class="categories__tags-button">#tips&tricks</button>
            <button class="categories__tags-button">#strategy</button>
            <button class="categories__tags-button">#SMM</button>
            <button class="categories__tags-button">#business</button>
            <button class="categories__tags-button">#PPC</button>
            <button class="categories__tags-button">#targeting</button>
          </div>
        </div>
      </div>
    </div>
    <subscribeVue :dark="false" />
    <footerVue />
  </div>
</template>

<script>
import navigationVue from '@/components/navigationVue.vue'
import blogElementVue from '@/components/blogElementVue.vue'
import subscribeVue from '@/components/subscribeVue.vue'
import footerVue from '@/components/footerVue.vue'

export default {
  components: { navigationVue, blogElementVue, subscribeVue, footerVue },
  data() {
    return {
      headerService: false,
      navigationActive: 4,
      headerBurger: false,
      categoriesList: {
        1: {
          class: 'media',
          page: 1,
          active: true,
          id: 1,
          img: '/CreateX/images/Blog/image1.jpg',
          category: 'Media & Press',
          date: 'June 12, 2020',
          person: 'By Soham Alexander',
          title: 'Digital Marketing Game: What You Need to Know to Stay Ahead?1',
          text: 'Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida...'
        },
        2: {
          class: 'media',
          page: 1,
          active: true,
          id: 2,
          img: '/CreateX/images/Blog/image2.jpg',
          category: 'Media & Press',
          date: 'June 6, 2020',
          person: 'By Shawn Edwards',
          title: 'How to Evaluate and Compare Social Media Tools Today.2',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        3: {
          class: 'media',
          page: 1,
          active: true,
          id: 3,
          img: '/CreateX/images/Blog/image3.jpg',
          category: 'Media & Press',
          date: 'May 1, 2020',
          person: 'By Diane Mccoy',
          title: 'The Best Practices to Optimize Your Website for Mobile.3',
          text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...'
        },
        4: {
          class: 'ad',
          page: 1,
          active: true,
          id: 4,
          img: '/CreateX/images/Blog/image4.jpg',
          category: 'Ad Tips',
          date: 'April 25, 2020',
          person: 'By Jane Cooper',
          title: '10 Seriously Underused Paid Search Strategies.4',
          text: 'Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis...'
        },
        5: {
          class: 'ad',
          page: 1,
          active: true,
          id: 5,
          img: '/CreateX/images/Blog/image5.jpg',
          category: 'Ad Tips',
          date: 'June 3, 2020',
          person: 'By Andrew Weepr',
          title: 'How to Create Content That Gets Linked and Shared.5',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        6: {
          class: 'ad',
          page: 1,
          active: true,
          id: 6,
          img: '/CreateX/images/Blog/image6.jpg',
          category: 'Ad Tips',
          date: 'March 18, 2020',
          person: 'By Mary Scetec',
          title: '12 Simple Tips to Creating an Effective Ad.6',
          text: 'Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna...'
        },
        7: {
          class: 'ad',
          page: 2,
          active: true,
          id: 7,
          img: '/CreateX/images/Blog/image1.jpg',
          category: 'Ad Tips',
          date: 'Augest 29, 2005',
          person: 'By Antoni Dia',
          title: 'Digital Marketing Game: What You Need to Know to Stay Ahead?7',
          text: 'Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida...'
        },
        8: {
          class: 'ad',
          page: 2,
          active: true,
          id: 8,
          img: '/CreateX/images/Blog/image2.jpg',
          category: 'Ad Tips',
          date: 'September 3, 2017',
          person: 'By Tobi Clark',
          title: 'How to Evaluate and Compare Social Media Tools Today.8',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        9: {
          class: 'ad',
          page: 2,
          active: true,
          id: 9,
          img: '/CreateX/images/Blog/image3.jpg',
          category: 'Ad Tips',
          date: 'June 12, 2020',
          person: 'By Min Diver',
          title: 'The Best Practices to Optimize Your Website for Mobile.9',
          text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...'
        },
        10: {
          class: 'ad',
          page: 2,
          active: true,
          id: 10,
          img: '/CreateX/images/Blog/image4.jpg',
          category: 'Ad Tips',
          date: 'June 6, 2020',
          person: 'By Soham Alexander',
          title: '10 Seriously Underused Paid Search Strategies.10',
          text: 'Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis...'
        },
        11: {
          class: 'marketing',
          page: 2,
          active: true,
          id: 11,
          img: '/CreateX/images/Blog/image5.jpg',
          category: 'Marketing',
          date: 'May 1, 2020',
          person: 'By Shawn Edwards',
          title: 'How to Create Content That Gets Linked and Shared.11',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        12: {
          class: 'marketing',
          page: 2,
          active: true,
          id: 12,
          img: '/CreateX/images/Blog/image6.jpg',
          category: 'Marketing',
          date: 'April 25, 2020',
          person: 'By Diane Mccoy',
          title: '12 Simple Tips to Creating an Effective Ad.12',
          text: 'Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna...'
        },
        13: {
          class: 'marketing',
          page: 3,
          active: true,
          id: 13,
          img: '/CreateX/images/Blog/image1.jpg',
          category: 'Marketing',
          date: 'June 3, 2020',
          person: 'By Jane Cooper',
          title: 'Digital Marketing Game: What You Need to Know to Stay Ahead?13',
          text: 'Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida...'
        },
        14: {
          class: 'marketing',
          page: 3,
          active: true,
          id: 14,
          img: '/CreateX/images/Blog/image2.jpg',
          category: 'Marketing',
          date: 'March 18, 2020',
          person: 'By Andrew Weepr',
          title: 'How to Evaluate and Compare Social Media Tools Today.14',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        15: {
          class: 'seo',
          page: 3,
          active: true,
          id: 15,
          img: '/CreateX/images/Blog/image3.jpg',
          category: 'SEO',
          date: 'Augest 29, 2005',
          person: 'By Mary Scetec',
          title: 'The Best Practices to Optimize Your Website for Mobile.15',
          text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...'
        },
        16: {
          class: 'seo',
          page: 3,
          active: true,
          id: 16,
          img: '/CreateX/images/Blog/image4.jpg',
          category: 'SEO',
          date: 'September 3, 2017',
          person: 'By Antoni Dia',
          title: '10 Seriously Underused Paid Search Strategies.16',
          text: 'Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis...'
        },
        17: {
          class: 'seo',
          page: 3,
          active: true,
          id: 17,
          img: '/CreateX/images/Blog/image5.jpg',
          category: 'SEO',
          date: 'June 12, 2020',
          person: 'By Tobi Clark',
          title: 'How to Create Content That Gets Linked and Shared.17',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        18: {
          class: 'seo',
          page: 3,
          active: true,
          id: 18,
          img: '/CreateX/images/Blog/image6.jpg',
          category: 'SEO',
          date: 'June 6, 2020',
          person: 'By Min Diver',
          title: '12 Simple Tips to Creating an Effective Ad.18',
          text: 'Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna...'
        },
        19: {
          class: 'seo',
          page: 4,
          active: true,
          id: 19,
          img: '/CreateX/images/Blog/image1.jpg',
          category: 'SEO',
          date: 'May 1, 2020',
          person: 'By Diane Mccoy',
          title: 'How to Create Content That Gets Linked and Shared.19',
          text: 'Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida...'
        },
        20: {
          class: 'seo',
          page: 4,
          active: true,
          id: 20,
          img: '/CreateX/images/Blog/image2.jpg',
          category: 'SEO',
          date: 'April 25, 2020',
          person: 'By Antoni Dia',
          title: '10 Seriously Underused Paid Search Strategies.20',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        21: {
          class: 'seo',
          page: 4,
          active: true,
          id: 21,
          img: '/CreateX/images/Blog/image3.jpg',
          category: 'SEO',
          date: 'June 3, 2020',
          person: 'By Soham Alexander',
          title: 'The Best Practices to Optimize Your Website for Mobile.21',
          text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...'
        },
        22: {
          class: 'seo',
          page: 4,
          active: true,
          id: 22,
          img: '/CreateX/images/Blog/image4.jpg',
          category: 'SEO',
          date: 'March 18, 2020',
          person: 'By Shawn Edwards',
          title: 'How to Evaluate and Compare Social Media Tools Today.22',
          text: 'Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis...'
        },
        23: {
          class: 'paid',
          page: 4,
          active: true,
          id: 23,
          img: '/CreateX/images/Blog/image5.jpg',
          category: 'Paid Search',
          date: 'Augest 29, 2005',
          person: 'By Min Diver',
          title: 'Digital Marketing Game: What You Need to Know to Stay Ahead?23',
          text: 'Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..'
        },
        24: {
          class: 'paid',
          page: 4,
          active: true,
          id: 24,
          img: '/CreateX/images/Blog/image6.jpg',
          category: 'Paid Search',
          date: 'September 3, 2017',
          person: 'By Andrew Weepr',
          title: '12 Simple Tips to Creating an Effective Ad.24',
          text: 'Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna...'
        }
      },
      activeClass: 'all',
      activeElements: {},
      activeNumber: 24,
      activePage: 1,
      compKey: true
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
    activeEl() {
      this.compKey = !this.compKey
      let numb = 0
      if (this.activeClass === 'all') {
        for (let item in this.categoriesList) {
          this.categoriesList[item].active = true
          numb++
        }
      } else if (this.activeClass === 'media') {
        for (let item in this.categoriesList) {
          if (this.categoriesList[item].class === 'media') {
            this.categoriesList[item].active = true
            numb++
          } else {
            this.categoriesList[item].active = false
          }
        }
      } else if (this.activeClass === 'ad') {
        for (let item in this.categoriesList) {
          if (this.categoriesList[item].class === 'ad') {
            this.categoriesList[item].active = true
            numb++
          } else {
            this.categoriesList[item].active = false
          }
        }
      } else if (this.activeClass === 'marketing') {
        for (let item in this.categoriesList) {
          if (this.categoriesList[item].class === 'marketing') {
            this.categoriesList[item].active = true
            numb++
          } else {
            this.categoriesList[item].active = false
          }
        }
      } else if (this.activeClass === 'seo') {
        for (let item in this.categoriesList) {
          if (this.categoriesList[item].class === 'seo') {
            this.categoriesList[item].active = true
            numb++
          } else {
            this.categoriesList[item].active = false
          }
        }
      } else if (this.activeClass === 'paid') {
        for (let item in this.categoriesList) {
          if (this.categoriesList[item].class === 'paid') {
            this.categoriesList[item].active = true
            numb++
          } else {
            this.categoriesList[item].active = false
          }
        }
      }
      this.activeNumber = numb
      let count = 0
      for (let item in this.categoriesList) {
        if (this.categoriesList[item].active === true) {
          count++
          if (count <= 6) {
            this.categoriesList[item].page = 1
          } else if (count > 6 && count <= 12) {
            this.categoriesList[item].page = 2
          } else if (count > 12 && count <= 18) {
            this.categoriesList[item].page = 3
          } else if (count > 18 && count <= 24) {
            this.categoriesList[item].page = 4
          }
        }
      }
      this.activePage = 1
    },
    nextPage() {
      if (this.activeNumber >= 18 && this.activePage < 4) {
        this.activePage++
      } else if (this.activeNumber >= 12 && this.activePage < 3) {
        this.activePage++
      } else if (this.activeNumber >= 6 && this.activePage < 2) {
        this.activePage++
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

.header__lines-left {
  position: absolute;
  top: 9vw;
  left: 21vw;
  width: 4.5vw;
  z-index: -1;
}

.header__lines-right {
  position: absolute;
  top: 8vw;
  right: -1vw;
  width: 6.5vw;
  z-index: -1;
}

.header__lines4 {
  position: absolute;
  bottom: -19vw;
  left: 0vw;
  width: 34.6vw;
  z-index: -1;
}

.header__shapes {
  position: absolute;
  bottom: -11vw;
  right: 15vw;
  width: 17.3vw;
  z-index: -1;
  transform: rotateY(180deg);
}

.header__shapes2 {
  position: absolute;
  top: -8vw;
  left: -13vw;
  width: 23.5vw;
  z-index: -1;
}

.header__container {
  max-width: 1230px;
  margin: 0 auto;
  padding: 20px 50px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header__location {
  display: flex;
  align-items: center;
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
  margin-bottom: 40px;
}

.header__formbox {
  width: 50%;
}

.header__form {
  display: flex;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  input {
    background-color: #ffffff00;
    margin-left: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: white;
    opacity: 0.6;
    width: 100%;
  }
  button {
    background-color: $primary;
    padding: 0px 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 325%;
    letter-spacing: 0.03em;
    text-align: center;
    color: white;
  }
}

.news__container {
  max-width: 1330px;
  padding: 100px 0 48px;
  margin: 0 auto;
  padding-right: 50px;
  padding-left: 50px;
}

.news__content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 48px;
}

hr {
  height: 1px;
  width: 100%;
  background-color: #e5e8ed;
}

.news__el {
  position: relative;
  max-width: 600px;
  &:before {
    content: 'Latest Post';
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 4px;
    padding: 1px 8px;
    width: 106px;
    height: 29px;
    background-color: #03cea4;
  }
}

.news__img {
  width: 100%;
}

.news__el-info {
  margin: 16px 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
}

.news__el-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 8px;
}

.news__el-button {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  gap: 8px;
  background-color: #ffffff00;
  align-items: center;
}

.categories {
  position: relative;
}

.categories__shapes {
  position: absolute;
  top: 3vw;
  left: -9vw;
  width: 17.6vw;
  z-index: -1;
  transform: rotateY(180deg);
}

.categories__lines {
  position: absolute;
  bottom: 20vw;
  right: -17vw;
  width: 31vw;
  z-index: -1;
  transform: rotate(90deg);
}

.categories__container {
  max-width: 1330px;
  margin: 0 auto;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 250px 410px auto;
  column-gap: 78px;
  row-gap: 60px;
  padding-right: 50px;
  padding-left: 50px;
}

.categories__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 60px;
  grid-row: span 3;
}

.categories__hr {
  grid-column: span 2;
}

.categories__blog-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 24px;
  text-wrap: nowrap;
}

.categories__blog-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
  background-color: #ffffff00;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  &:last-child {
    margin-bottom: 0;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    text-align: right;
  }
}

.categories__pages {
  display: flex;
  gap: 20px;
}

.categories__page {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  background-color: #ffffff00;
}

.categories__button-next {
  display: flex;
  align-items: center;
  gap: 11px;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: $gray800;
  background-color: #ffffff00;
}

.categories__trending-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 24px;
}

.categories__trending-row {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}

.categories__trending-date {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  margin-bottom: 4px;
}

.categories__trending-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  cursor: pointer;
}

.categories__tags-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-bottom: 24px;
}

.categories__tagsbox {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
}

.categories__tags-button {
  border: 1px solid #d7dadd;
  border-radius: 4px;
  padding: 5px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: $gray700;
  background-color: #ffffff00;
}

@media (max-width: 1300px) {
  .categories__container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .categories__blog {
    order: 1;
  }

  .categories__content {
    order: 2;
  }

  .categories__trending {
    order: 3;
  }

  .categories__tags {
    order: 4;
  }

  .categories__trending-date {
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .categories__trending-title {
    font-size: 26px;
  }

  .categories__trending-text {
    font-size: 20px;
  }

  .categories__tags-button {
    font-size: 18px;
  }
}

@media (max-width: 1200px) {
  .header__formbox {
    width: 70%;
  }

  .header__form {
    background: #424551d2;
  }
}

@media (max-width: 1100px) {
  .header__title {
    font-size: 62px;
  }
}

@media (max-width: 900px) {
  .header__text {
    font-size: 17px;
    max-width: none;
  }

  .header__title {
    font-size: 46px;
  }

  .header__dots {
    display: none;
  }

  .header__lines-left {
    top: 16vw;
    left: 27vw;
    width: 6vw;
  }

  .header__lines-right {
    top: 40vw;
    right: 13vw;
    width: 8vw;
  }

  .header__lines4 {
    width: 40vw;
  }

  .header__shapes {
    right: 8vw;
    width: 20vw;
  }

  .header__shapes2 {
    width: 30vw;
  }
}

@media (max-width: 800px) {
  .header__formbox {
    width: 90%;
  }
}

@media (max-width: 750px) {
  .news__el-text {
    font-size: 15px;
  }

  .news__el-title {
    font-size: 17px;
  }

  .news__el-info {
    font-size: 12px;
  }
}

@media (max-width: 700px) {
  .header__title {
    display: flex;
    text-align: center;
  }
}

@media (max-width: 650px) {
  .news__content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .news__el {
    max-width: none;
    width: 100%;
  }

  .news__el-info {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .news__el-title {
    font-size: 20px;
  }

  .news__el-text {
    font-size: 17px;
  }
}

@media (max-width: 600px) {
  .header__formbox {
    width: 100%;
  }

  .categories__container {
    padding-bottom: 70px;
  }

  .categories__trending-date {
    font-size: 13px;
  }

  .categories__trending-text {
    font-size: 16px;
  }
}

@media (max-width: 550px) {
  .header__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .header__lines-left {
    top: 20vw;
    left: 27vw;
    width: 11vw;
  }

  .header__lines-right {
    top: 92vw;
    width: 12vw;
  }

  .header__lines4 {
    display: none;
  }

  .header__shapes {
    right: 17vw;
    width: 28vw;
  }

  .header__shapes2 {
    width: 39vw;
  }

  .news__container {
    padding-right: 20px;
    padding-left: 20px;
  }

  .categories__container {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (max-width: 500px) {
  .header__text {
    font-size: 15px;
  }

  .header__form {
    flex-direction: column;
    width: calc(100vw - 40px);
    input {
      line-height: 325%;
    }
  }

  .header__form input {
    font-size: 14px;
  }

  .header__form button {
    font-size: 14px;
  }

  .categories__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .categories__tags-button {
    font-size: 14px;
  }
}

@media (max-width: 450px) {
  .header__lines-left {
    display: none;
  }

  .header__lines-right {
    display: none;
  }

  .header__shapes {
    display: none;
  }

  .header__shapes2 {
    display: none;
  }

  .news__el:before {
    width: 86px;
    height: 24px;
    font-size: 11px;
  }

  .categories__container {
    padding-bottom: 40px;
  }
}

@media (max-width: 400px) {
  .header__text {
    margin-bottom: 90px;
  }

  .header__title {
    font-size: 34px;
  }

  .header__form input {
    font-size: 13px;
  }

  .header__form button {
    font-size: 13px;
  }

  .news__el-text {
    font-size: 15px;
  }

  .news__el-title {
    font-size: 17px;
  }

  .news__el-info {
    font-size: 11px;
  }

  .news__container {
    padding-top: 50px;
    padding-bottom: 36px;
  }

  .news__content {
    margin-bottom: 36px;
    gap: 20px;
  }

  .categories__container {
    gap: 30px;
  }

  .categories__blog-title {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .categories__blog-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 3px;
    font-size: 14px;
  }

  .categories__page {
    font-size: 14px;
  }

  .categories__pages {
    gap: 15px;
  }

  .categories__trending-title {
    font-size: 22px;
  }

  .categories__trending-date {
    font-size: 12px;
  }

  .categories__trending-text {
    font-size: 14px;
  }

  .categories__trending-img {
    max-width: 80px;
  }

  .categories__tags-title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .categories__tags-button {
    font-size: 12px;
  }
}

@media (hover: hover) {
  .header__form button:hover {
    background-color: #fff;
    color: $primary;
  }

  .news__el-button:hover {
    gap: 16px;
  }

  .categories__button-next:hover {
    color: $primary;
    svg path {
      fill: $primary;
    }
  }

  .categories__trending-text:hover {
    color: $primary;
  }

  .categories__tags-button:hover {
    background-color: $primary;
    color: white;
    border: 1px solid $primary;
  }
}

@media (hover: none) {
  .header__form button:active {
    background-color: #fff;
    color: $primary;
  }

  .news__el-button:active {
    gap: 16px;
  }

  .categories__button-next:active {
    color: $primary;
    svg path {
      fill: $primary;
    }
  }

  .categories__trending-text:active {
    color: $primary;
  }

  .categories__tags-button:active {
    background-color: $primary;
    color: white;
    border: 1px solid $primary;
  }
}
</style>
