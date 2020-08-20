<template>
  <div id="App">
    <div class="menu">
      <div class="container">
        <div class="row">
          <div class="menu-title">
            <div class="menu-title-iconCircle">
              <IconLeaf class="icon-leaf"/>
            </div>
              <h1>TREEHOUSE</h1>
          </div>
          <div class="menu-icon" @click="isMenu=!isMenu">
            <IconCross v-if="isMenu" />
            <IconMenu v-else />
          </div>
            <nav class="menu-nav" v-if="(windowWidth>992 || isMenu)" >
              <router-link to="/" class="menu-nav-item"><span  @click="isMenuFun()">Home</span></router-link>
              <router-link to="/About" class="menu-nav-item"><span  @click="isMenuFun()">About</span></router-link>
              <router-link to="/Blog" class="menu-nav-item"><span  @click="isMenuFun()">Blog</span></router-link>
              <router-link to="/Portfolio" class="menu-nav-item"><span  @click="isMenuFun()">Portfolio</span></router-link>
              <router-link to="/Contact" class="menu-nav-item"><span  @click="isMenuFun()">Contact</span></router-link>
            </nav>
        </div>
      </div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
import IconMenu from './icons/menu.svg'
import IconCross from './icons/cross.svg'
import IconLeaf from './icons/leaf.svg'

export default {
  name: 'App',
  components:{
    IconMenu,
    IconCross,
    IconLeaf
  },
  data() {
    return {
      isMenu:false,
      windowWidth:0
    }
  },
  methods: {
    menuFunc(){
      this.windowWidth = window.innerWidth
    },
    isMenuFun(){
      setTimeout(() => {
              return this.isMenu=false
      }, 400);
    }
  },
  destroyed() {
      window.removeEventListener('resize', this.menuFunc);
  },
  created() {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', this.menuFunc);
  }
}
</script>

<style lang="scss">
@import "./scss/mixin.scss";
@import "./scss/main.scss";

body {
  font-family: "Merriweather Sans", sans-serif !important;
}

.icon-leaf {
  color: white;
  padding: 5px;
  margin-left: 3px;
  width: 30px;
  height: 30px;
  overflow: inherit;
}

.menu {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 99;

  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    z-index: 99;

    &-iconCircle {
      background-color: $colorGreen;
      border-radius: 50%;
      margin: $buttonMargin;
    }

    & h1 {
      font-size: 25px;
      font-weight: 850;
      position: relative;
      top: 5px;
    }
  }
  &-icon {
    display: block;
    padding: 10px 20px 10px 20px;
    position: absolute;
    right: 20px;
    top: 20px;

    @include mq("desktop") {
      display: none;
    }
  }

  &-nav {
    position: absolute;
    width: 100%;
    right: 0;
    left: 0;
    top: 100px;
    box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    z-index: 9;

    @include mq("desktop") {
      width: auto;
      top: 35px;
      text-align: right;
      right: 150px;
      box-shadow: 0px 0px 0px;
    }
    & a:hover {
      color: white;
      text-decoration: none;
    }

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding-top: 10px;
      padding-bottom: 10px;

      & span {
        width: 100%;
        text-align: center;
      }

      @include mq("desktop") {
        display: inline;
        padding: 10px 20px 10px 20px;
      }
    }
    &-item:hover {
      background-color: $colorGreen;
      border-radius: 5px;
    }
  }
}
</style>
