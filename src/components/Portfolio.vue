<template>
<div>
  <FluidPic title="RESPONSIVE WEB" excerpt="Proin purus consequat sem cure exeliur" buttonTitle="GO TO HOME" pushPage="/"></FluidPic>
  <div class="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="portfolio-title">
            <h1>Web Design Portfolio</h1>
          </div>
        </div>
        <div class="col-md-4">
          <div class="portfolio-img">
            <img src="../img/Treehouse-Home-Page.jpg">
          </div>
            <h2 class="portfolio-custom">for example</h2>
        </div>
        <div class="col-md-4">
          <div class="portfolio-img">
            <img src="../img/Treehouse-Home-Page.jpg">
          </div>
            <h2 class="portfolio-custom">for example</h2>
        </div>
        <div class="col-md-4">
          <div class="portfolio-img">
            <img src="../img/82ekran.png">
          </div>
            <h2 class="portfolio-custom">82ekran.com</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="company">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img src="../img/Company.png"><b class="company-counter" v-for="(item, index) in arr" :key="index">{{item.company}}+ <p>Company</p></b>
        </div>
        <div class="col-md-4">
          <img src="../img/project.png"><b class="company-counter" v-for="(item, index) in arr" :key="index">{{item.project}}+ <p>Project</p></b>
        </div>
        <div class="col-md-4">
          <img src="../img/Users.png"><b class="company-counter" v-for="(item, index) in arr" :key="index">{{item.user}}+ <p>Users</p></b>
        </div>
      </div>
    </div>
  </div>

  <div class="client">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="client-title">
            <h3>OUR AWESOME CLIENTS</h3>
            <p class="font-weight-light">Proin iaculis purus consequat sem cure</p>
          </div>
          <div class="col-md-12 client-art">
            <div class="row">
              <div class="col-md-2 client-art-image">
                <img class="client-art-image-face" src="../img/face1.jpg">
              </div>

              <div class="col-md-9">
                <div class="row">
                  <div class="col-1 nopadding">
                    <div class=" client-art-arrowgrup float-right">
                      <div class="client-art-arrowgrup-arrow1"></div>
                      <div class="client-art-arrowgrup-arrow2"></div>
                    </div>
                  </div>
                  <div class="col-11 client-art-frame">
                    <div class="client-art-frame-comment">
                      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ipsa ab quasi repellat
                      inventore, deserunt aperiam amet a perferendis dolorum quam."</div>

                    <p class="text-success client-art-frame-customer">-Jamie RİCHARDSON ,Founder of Cocoa Media</p>
                  </div>
                </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-11 client-art-frame">
                    <div class="client-art-frame-comment">
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio dolorem temporibus
                      placeat
                      delectus minus ea illum cupiditate veniam maiores consectetur laboriosam doloremque quidem iusto.
                      "
                    </div>

                    <p class="text-success client-art-frame-customer">-Antony DAVİS ,Founder of Center</p>
                  </div>
                  <div class="col-1 nopadding">

                    <div class="client-art-arrowgrup">
                      <div class="client-art-arrowgrup-arrow3"></div>
                      <div class="client-art-arrowgrup-arrow4"></div>
                    </div>

                  </div>
                </div>
              </div>

              <div class="col-md-2 client-art-image">
               <img class="client-art-image-face" src="../img/face2.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ContactUs></ContactUs>
  <Footer></Footer>

</div>
</template>

<script>
import FluidPic from './FluidPic.vue'
import ContactUs from './ContactUs.vue'
import Footer from './Footer.vue'

export default {
  name: 'Portfolio',
  data() {
    return {
      interval : null,
      arr: [{
        user:0,
        company:0,
        project:0
      }]
    }
  },
  mounted () {
      this.interval = setInterval(() => {
        this.arr.map(x => {if(x.user<500){x.user++}});
        this.arr.map(x => {if(x.project<200){x.project++}});
        this.arr.map(x => {if(x.company<100){x.company++}});
      }, 20);
  },
  beforeDestroy () {
    clearInterval(this.interval);
  },
  components:{
    FluidPic,
    ContactUs,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/mixin.scss";
@import "../scss/main.scss";

.portfolio {
  text-align: center;
  overflow: hidden;
  width: 100%;

  &-title {
    margin-top: 25px;
  }
  &-img {
    width: 100%;
    height: 250px;
    overflow: hidden;
    margin-top: 25px;
    margin-bottom: 25px;
    border-radius: 3px;
    background-color: black;

    & img {
      opacity: 0.5;
      width: 100%;
      height: auto;
    }
  }
  & img:hover {
    opacity: 1;
    transition: 2s;
    transform: translateY(-35%);
  }

  &-custom {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 25px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    height: 60px;
  }
}

.company {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: rgb(200, 220, 200);

  @include mq("tablet") {
    height: 450px;
  }

  @include mq("desktop") {
    height: 350px;
  }

  &-counter {
    margin-left: 15px;
    color: white;
    font-size: 25px;
    & p {
      text-align: center;
    }
  }
}

.client {
  margin-bottom: 25px;

  &-title {
    text-align: center;
    margin-top: 40px;
    & h3 {
      font-size: $titleFontSize;
      font-weight: $titleFontWeight;

      @include mq("tablet") {
        font-size: $titleFontSizeTablet;
      }
      @include mq("desktop") {
        font-size: $titleFontSizeDesktop;
      }
    }
  }

  &-art {
    &-image {
      display: none;
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;

      &-face {
        width: 100%;
        border-radius: 50%;
        margin-top: 25px;
      }

      @include mq("tablet") {
        display: block;
      }
    }

    &-frame {
      background-color: rgba(224, 222, 222, 0.5);
      border-radius: 2px;
      margin-top: 40px;
      &-comment {
        padding: 30px;
      }
      &-customer {
        text-align: center;
        font-size: 12px;
      }
    }
    &-arrowgrup {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;

      &-arrow1 {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-top: 10px solid transparent;
        border-right: 10px solid rgba(224, 222, 222, 0.5);
        position: relative;
        top: 0.6rem;
      }
      &-arrow2 {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid rgba(224, 222, 222, 0.5);
        position: relative;
        top: 0.6rem;
      }
      &-arrow3 {
        width: 0;
        height: 0;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-left: 10px solid rgba(224, 222, 222, 0.5);
        position: relative;
        top: 0.6rem;
      }
      &-arrow4 {
        width: 0;
        height: 0;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid rgba(224, 222, 222, 0.5);
        position: relative;
        top: 0.6rem;
      }
      @include mq("tablet") {
      }
    }
  }
}
</style>