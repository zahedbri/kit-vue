<template>
  <div :class="$style.header__container">
    <div class="container-fluid" style="max-width: 1440px;">
      <a-tooltip placement="left">
        <template slot="title">
          <span>Set Primary Color</span>
        </template>
        <div :class="{[$style.color]: true, [$style.reset]: reset}">
          <button @click="() => resetColor()">
            <i class="fe fe-x-circle" />
          </button>
          <input
            type="color"
            id="colorPicker"
            :value="primaryColor"
            @change="(e) => selectColor(e.target.value)"
          />
          <i class="fe fe-package" />
        </div>
      </a-tooltip>
      <header class="pt-3 pb-3">
        <div class="row">
          <div class="col-xl-12">
            <div :class="$style.topbar">
              <div :class="$style.logoContainer">
                <div :class="$style.logo">
                  <img src="resources/images/logo.svg" class="mr-2" alt="Clean UI" />
                  <div :class="$style.name">Clean UI KIT Pro</div>
                  <div :class="$style.descr">Vue</div>
                </div>
              </div>
              <span class="mr-3">Switch to:</span>
              <a
                class="d-none d-md-block mr-3 kit__utils__link"
                href="https://kit-react.cleanuitemplate.com/"
              >React</a>
              <a
                class="d-none d-md-block mr-3 kit__utils__link"
                href="https://kit-angular.cleanuitemplate.com/"
              >Angular</a>
              <a
                class="d-none d-md-block mr-3 kit__utils__link"
                href="https://kit-html.cleanuitemplate.com/versions/main/widgets-general.html"
              >Html</a>
              <a
                class="mr-auto d-none d-md-block kit__utils__link"
                href="https://docs.cleanuitemplate.com/kit-pro/"
                target="_blank"
              >Documentation →</a>
              <p class="mb-0 mr-3 d-xl-block d-none">
                Status
                <span
                  class="ml-1 badge bg-primary text-white font-size-12 text-uppercase"
                >ACTIVE</span>
              </p>
              <div>
                <kit-user-menu />
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="mb-4 mr-4 float-xl-left">
              <a
                href="https://themeforest.net/item/clean-ui-kit-pro-widgetdriven-admin-dashboard-template/24783640"
                rel="noopener noreferrer"
                target="_blank"
                class="btn btn-success"
                :class="$style.button"
              >
                <i class="fe fe-shopping-cart align-middle mr-2" />
                Buy Now Pro 19$
                <span>Dark Theme & 17+ Apps!</span>
              </a>
            </div>
            <p class="pt-xl-2">
              Create beautiful apps faster with Clean UI KIT’s collection of visual, structural,
              platform, and interactive widgets & utilities.
              <br />Customized Bootstrap & third-party plugins framework with modular architecture.
            </p>
          </div>
          <div class="col-xl-12">
            <ul class="list-unstyled tabs" :class="$style.tabs">
              <template v-for="(item, index) in menuData">
                <li :key="index">
                  <router-link
                    :to="item.url"
                    :class="{
                    [$style.tabs__active]: item.url === activeSubmenu.url,
                  }"
                  >
                    {{ item.title }}
                    <span class="badge bg-light ml-1">{{ item.count }}</span>
                  </router-link>
                </li>
              </template>
            </ul>
            <div :class="$style.buttons">
              <ul v-if="activeSubmenu.children" class="list-unstyled">
                <template v-for="(item, index) in activeSubmenu.children">
                  <li :key="index">
                    <router-link
                      class="btn mr-2 mb-2"
                      :to="item.url"
                      :class="{
                    'btn-light': item.url !== activeItem.url,
                    'btn-primary': item.url === activeItem.url,
                  }"
                    >{{ item.title }}</router-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>
<style lang="scss" module>
@import "./style.module.scss";
</style>
<script>
import _ from 'lodash'
import KitUserMenu from './UserMenu'
import getMenuData from './config.js'

export default {
  name: 'main-menu',
  components: {
    KitUserMenu,
  },
  mounted() {
    // set active menu items
    this.setActiveItems()

    // init theme
    const mode = window.localStorage.getItem('kit.theme')
    if (mode === 'dark') {
      document.querySelector('html').setAttribute('data-kit-theme', 'dark')
    }

    // init primary color
    const color = window.localStorage.getItem('kit.primary')
    if (color) {
      this.selectColor(color)
    }
  },
  data() {
    return {
      menuData: getMenuData(),
      activeSubmenu: '',
      activeItem: '',
      primaryColor: '#4b7cf3',
      reset: true,
    }
  },
  watch: {
    '$route'() {
      this.setActiveItems()
    },
  },
  methods: {
    switchDarkTheme() {
      const theme = document.querySelector('html').getAttribute('data-kit-theme')
      if (theme === 'dark') {
        document.querySelector('html').setAttribute('data-kit-theme', 'default')
        window.localStorage.setItem('kit.theme', 'default')
      }
      if (theme === 'default') {
        document.querySelector('html').setAttribute('data-kit-theme', 'dark')
        window.localStorage.setItem('kit.theme', 'dark')
      }
    },
    setActiveItems() {
      const menuData = this.menuData
      const pathname = this.$route.path

      const flattenItems = (items, key) =>
        items.reduce((flattenedItems, item) => {
          flattenedItems.push(item)
          if (Array.isArray(item[key])) {
            return flattenedItems.concat(flattenItems(item[key], key))
          }
          return flattenedItems
        }, [])
      this.activeItem = _.find(flattenItems(menuData, 'children'), ['url', pathname]) || {}
      this.activeSubmenu =
        flattenItems(menuData, 'children')
          .map(item => {
            return item.url === pathname || _.find(item.children, ['url', pathname]) ? item : null
          })
          .filter(item => item !== null)[0] || {}
    },
    selectColor(color) {
      const styleElement = document.querySelector('#primaryColor')
      if (styleElement) {
        styleElement.remove()
      }
      window.localStorage.setItem('kit.primary', color)
      const body = document.querySelector('body')
      const styleEl = document.createElement('style')
      const css = document.createTextNode(`:root { --kit-color-primary: ${color};}`)
      styleEl.setAttribute('id', 'primaryColor')
      styleEl.appendChild(css)
      body.appendChild(styleEl)
      this.primaryColor = color
      this.reset = false
    },
    resetColor() {
      const defaultColor = '#4b7cf3'
      this.selectColor(defaultColor)
      window.localStorage.removeItem('kit.primary')
      this.primaryColor = defaultColor
      this.reset = true
    },
  },
}
</script>
