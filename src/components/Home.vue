<template>

  <div>
    <FluidPic title="CREATIVE DIGITAL" excerpt="Proin iaculis purus consequat sem cure" buttonTitle="VIEW PORTFOLIO" pushPage="Portfolio"></FluidPic>

  <div class="services">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="services-title">
            <h3>PROFESSIONAL SERVİCES</h3>
            <p class="font-weight-light">Proin iaculis purus consequat sem cure</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="services-image">
            <IconHeart></IconHeart>
          </div>
          <p><b>BEATIFUL DESIGNS</b></p>
          <p class="font-weight-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Neque enim iusto ab fuga error repellendus aperiam voluptates
            veritatis cupiditate nobis.
          </p>
        </div>
        <div class="col-md-4">
          <div class="services-image">
            <IconPhone></IconPhone>
          </div>
          <p><b>RESPONSIVE WEB</b></p>
          <p class="font-weight-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Neque enim iusto ab fuga error repellendus aperiam voluptates
            veritatis cupiditate nobis.
          </p>
        </div>
        <div class=" col-md-4">
          <div class="services-image">
            <IconDots></IconDots>
          </div>
          <p><b>MARKETING TOOLS</b></p>
          <p class="font-weight-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Neque enim iusto ab fuga error repellendus aperiam voluptates
            veritatis cupiditate nobis.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="justRelax">
    <div class="container-fluid nopadding">
      <div class="row nomargin">
        <div class="col-md-12">
          <div class="justRelax-art">
            <h3>JUST RELAX <b class="color">&</b><br>LET US DO THE HEAVY LIFTING</h3>
            <p class="font-weight-light">Proin iaculis purus consequat sem cure...</p>
            <p class="font-weight-light">
              <IconCheck class="text-light"></IconCheck>
               &NonBreakingSpace; İntial Setup & Customizations
            </p>
            <p class="font-weight-light">
              <IconCheck class="text-light"></IconCheck>
              &NonBreakingSpace; Regular Updates
            </p>
            <p class="font-weight-light">
              <IconCheck class="text-light"></IconCheck>
              &NonBreakingSpace; Round The Clock Support
            </p>
            <button class="btn btn-success button"><b>LEARN MORE</b></button>
          </div>
        </div>
        <div class="col-12 nopadding justRelax-image">
          <img src="../img/coast.jpg">
        </div>
      </div>
    </div>
  </div>

   <div class="lastest">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 lastest-title">
          <h3>LATEST PROJECT</h3>
          <p class="font-weight-light">Proin iaculis purus consequat sem cure</p>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-lg-5 lastest-art">
              <div class="col-12 lastest-art-col">
                <b>DEVELOPING A FRAMEWORK</b>
              </div>
              <div class="col-12 lastest-art-col">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quasi eligendi omnis minima, modi
                obcaecati
                repellendus, accusantium cumque alias sunt architecto asperiores vitae.
              </div>
              <div class="col-12 lastest-art-col">
                <div class="row">
                  <div class="col-2">
                    <IconBin></IconBin>
                  </div>
                  <div class="col-9"><b>E-Commerce ready</b>
                    <p class="font-weight-light">Proin iaculis purus consequat sem cure digni ssim.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 lastest-art-col">
                <div class="row">
                  <div class="col-2">
                    <IconCheck></IconCheck>
                  </div>
                  <div class="col-9"><b>Powerfull SEO Features</b>
                    <p class="font-weight-light">Proin iaculis purus consequat sem cure digni ssim.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 lastest-art-col">
                <div class="row">
                  <div class="col-2">
                    <IconLock></IconLock>
                  </div>
                  <div class="col-9"><b>Secure Encryption</b>
                    <p class="font-weight-light">Proin iaculis purus consequat sem cure digni ssim.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 lastest-art-col">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Necessitatibus cupiditate est nam magni
                rerum
                perfect.
              </div>
              <div class="col-12 lastest-art-col">
                <a class="text-success text-decoration-none"><b>VIEW DETAILS ➔</b></a>
              </div>
            </div>
            <div class="col-lg-6 lastest-image">
              <img src="../img/Treehouse-Home.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <ContactUs></ContactUs>
    <Footer></Footer>
  </diV>

</template>

<script>
import FluidPic from './FluidPic.vue'
import Footer from './Footer.vue'
import ContactUs from './ContactUs.vue'
import IconPhone from '../icons/mobile2.svg'
import IconDots from '../icons/stats-dots.svg'
import IconHeart from '../icons/heart.svg'
import IconCheck from '../icons/checkmark.svg'
import IconBin from '../icons/bin.svg'
import IconLock from '../icons/lock.svg'

export default {
  name: 'Home',
  components:{ 
    FluidPic,
    Footer,
    IconPhone,
    IconHeart,
    IconDots,
    IconCheck,
    IconBin,
    IconLock,
    ContactUs
    }
}
</script>

<style lang="scss" scoped>
@import "../scss/mixin.scss";
@import "../scss/main.scss";

.services {
  text-align: center;
  padding: 5px;
  &-title {
    margin-top: 10px;

    & h3 {
      font-size: $titleFontSize;
      font-weight: $titleFontWeight;
      @include mq("tablet") {
        margin-top: 30px;
        font-size: $titleFontSizeTablet;
      }
      @include mq("desktop") {
        margin-top: 50px;
        font-size: $titleFontSizeDesktop;
      }
    }
  }
  &-image {
    margin: 25px;
  }
}

.justRelax {
  width: 100%;
  height: 475px;
  overflow: hidden;
  margin-top: 50px;
  &-art {
    position: absolute;
    top: 15px;
    color: white;
    z-index: 1;
    padding: 15px;
    @include mq("tablet") {
      left: 150px;
    }
    @include mq("desktop") {
      left: 350px;
    }
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
    & p {
      font-size: 12px;
      @include mq("tablet") {
        font-size: 18px;
      }
      @include mq("desktop") {
        font-size: 25px;
      }
    }
    & button {
      margin-top: 25px;
      border-radius: $borderRadius;
      font-size: 0.8rem;
      padding: 15px 25px;
    }
  }

  &-image {
    background-color: black;
    & img {
      width: 200%;
      height: auto;
      z-index: -1;
      opacity: 0.6;
      @include mq("tablet") {
        width: 100%;
      }
    }
  }
}

.lastest {
  width: 100%;
  overflow: hidden;
  margin-top: 40px;
  &-art {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    @include mq("desktop") {
      position: relative;
      left: 50px;
    }

    &-col {
      margin-top: 20px;
    }
  }

  &-title {
    text-align: center;
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
  &-image {
    display: none;
    position: relative;
    right: -50px;
    z-index: -1;

    & img {
      width: 120%;
    }
    @include mq("desktop") {
      display: block;
    }
  }
}
</style>