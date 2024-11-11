import { createRouter, createWebHistory } from 'vue-router'
import pageServicesVue from '../views/pageServicesVue.vue'
import pageHomeVue from '../views/pageHomeVue.vue'
import searchVue from '../views/pageSearchVue.vue'
import caseVue from '../views/pageCaseVue.vue'
import lovatoVue from '../views/pageLovatoVue.vue'
import AboutVue from '../views/pageAboutVue.vue'
import CareersVue from '../views/pageCareersVue.vue'
import BlogVue from '../views/pageBlogVue.vue'
import MaximizeVue from '../views/pageMaximizeVue.vue'
import ContactsVue from '../views/pageContactsVue.vue'

export default createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', component: pageHomeVue, alias: '/' },
    { path: '/services', component: pageServicesVue },
    { path: '/searchEngineOptimization', component: searchVue },
    { path: '/caseStudies', component: caseVue },
    { path: '/LovatoCompany', component: lovatoVue },
    { path: '/About', component: AboutVue },
    { path: '/Careers', component: CareersVue },
    { path: '/Blog', component: BlogVue },
    { path: '/MaximizeROI', component: MaximizeVue },
    { path: '/Contacts', component: ContactsVue }
  ]
})
