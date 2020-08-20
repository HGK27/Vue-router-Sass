<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-frame">
          <div class="row">
            <div class="col-12 footer-frame-art">
              <h5>CONTACT US</h5>
            </div>
            <div class="col-12 footer-frame-art">
              <IconLocation class="icon-footer"></IconLocation> 55 Main St. Toronto
            </div>
            <div class="col-12 footer-frame-art">
              <IconPhone class="icon-footer"></IconPhone> (416)555-5252
            </div>
            <div class="col-12 footer-frame-art">
              <IconEnvelop class="icon-footer"></IconEnvelop>hello@treehouse.com
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-frame">
          <div class="row">
            <div class="col-12 footer-frame-art">
              <h5>LASTEST POST</h5>
            </div>
            <div class="col-12 footer-frame-art">
              <IconNewspaper class="icon-footer"></IconNewspaper>Made With Love Toronto
            </div>
            <div class="col-12 footer-frame-art">
              <IconNewspaper class="icon-footer"></IconNewspaper>Startup News & Emerging Tech
            </div>
            <div class="col-12 footer-frame-art">
              <IconNewspaper class="icon-footer"></IconNewspaper>Doin Will Soon Rule The World
            </div>
            <div class="col-12 footer-frame-art">
              <IconNewspaper class="icon-footer"></IconNewspaper>Table Technology On The Rise
            </div>
            <div class="col-12 footer-frame-art">
              <IconNewspaper class="icon-footer"></IconNewspaper>Learn Web Desing In 30 Days!
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-frame">
          <div class="row">
            <div class="col-12 footer-frame-art">
              <h5>LASTEST TWEETS</h5>
            </div>
            <div class="col-12 footer-frame-art">
              <div class="row">
                <div class="col-2">
                  <IconTwitter></IconTwitter>
                </div>
                <div class="col-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque sed explicabo.
                  <p class="font-weight-light text-secondary"> 8 min ago</p>
                </div>
                <div class="col-2">
                  <IconTwitter></IconTwitter>
                </div>
                <div class="col-10">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque sed explicabo.
                  <p class="font-weight-light text-secondary"> 8 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-socialMediaCopy">
      <div class="container">
        <div class="row">
          <div class="col-md-12 footer-socialMediaCopy-social">
            <div class="footer-socialMediaCopy-social-hover">
              <IconFacebook></IconFacebook>
            </div>
            <div class="footer-socialMediaCopy-social-hover">
                <IconTwitter></IconTwitter> 
            </div>
            <div class="footer-socialMediaCopy-social-hover">
              <IconGoogle></IconGoogle>
            </div>
          </div>
          <div class="col-md-12 text-dark">
            <p class="footer-socialMediaCopy-copyRight">© Copyright 2014 FreeBiesXpress.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconFacebook from '../icons/facebook.svg'
import IconEnvelop from '../icons/envelop.svg'
import IconGoogle from '../icons/google-plus.svg'
import IconLocation from '../icons/location.svg'
import IconPhone from '../icons/mobile2.svg'
import IconNewspaper from '../icons/newspaper.svg'
import IconTwitter from '../icons/twitter.svg'

export default {
  name: 'Footer',
  components:{
    IconFacebook,
    IconEnvelop,
    IconGoogle,
    IconLocation,
    IconPhone,
    IconNewspaper,
    IconTwitter
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/mixin.scss";
@import "../scss/main.scss";

.icon-footer {
  color: white;
  margin-right: 5px;
}
.footer {
  color: white;
  width: 100%;
  background-color: black;
  padding-top: 25px;

  &-frame {
    margin-top: 25px;
    padding-bottom: 25px;

    &-art {
      margin-top: 7px;
    }
  }
  &-socialMediaCopy {
    width: 100%;
    background-color: white;
    position: static;
    bottom: 0px;
    margin-top: 25px;
    &-social {
      text-align: center;
      padding: 25px;

      @include mq("desktop") {
        position: relative;
        top: 15px;
      }
      &-hover {
        display: inline;
        padding: 10px;
        background-color: black;
        padding: 20px 15px 20px 15px;
        border-radius: 50%;
      }
      &-hover:hover {
        opacity: 0.6;
      }
    }
    &-copyRight {
      text-align: center;

      @include mq("desktop") {
        text-align: left;
        position: absolute;
        bottom: 15px;
      }
    }
  }
}
</style>