<template>
  <div>
  <FluidPic title="BEATIFUL DESIGNS" excerpt="Proin purus consequat sem cure exeliur" buttonTitle="GO TO HOME" pushPage="/"></FluidPic>
  
    <div class="about">
      <div class="about-title"><h1>ABOUT</h1></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, mollitia, voluptatibus ad
      aperiam autem necessitatibus ipsam esse cumque, optio commodi ullam rem velit quibusdam eaque consequuntur
        officiis maxime veritatis est?orem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, mollitia, voluptatibus ad
      aperiam autem necessitatibus ipsam esse cumque, optio commodi ullam rem velit quibusdam eaque consequuntur</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, mollitia, voluptatibus ad
      aperiam autem necessitatibus ipsam esse cumque, optio commodi ullam rem velit quibusdam eaque consequuntur
        officiis maxime veritatis est?orem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, mollitia, voluptatibus ad
      aperiam autem necessitatibus ipsam esse cumque, optio commodi ullam rem velit quibusdam eaque consequunturorem ipsum dolor sit
       amet, consectetur adipisicing elit. Accusamus, mollitia, voluptatibus adorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus, mollitia, voluptatibus adaperiam autem necessitatibus ipsam esse cumque, optio commodi ullam rem velit quibusdam 
        eaque consequuntur aperiam autem necessitatibus ipsam esse cumque, optio commodi ullam rem velit quibusdam eaque consequuntur</p>

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
  name: 'About', 
  components:{ 
    FluidPic,
    ContactUs,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/mixin.scss";

.about {
  line-height: 2;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  &-title {
    text-align: center;
  }

  @include mq("desktop") {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
}
</style>