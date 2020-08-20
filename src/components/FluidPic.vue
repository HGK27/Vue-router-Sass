<template>

  <div class="container-fluid">
    <div class="row ">
      <div class="col-12 nopadding image">
        <div class="image-art">
          <h2>{{title}}</h2>
          <p>{{excerpt}}</p>
          <button @click="$router.push(`${pushPage}`)" class="btn btn-success button"><b>{{buttonTitle}}</b></button>
        </div>
        <div class="image-image">
          <img src="../img/work-laptop.jpg">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FluidPic',
  props: {
      title: String,
      excerpt: String,
      buttonTitle: String,
      pushPage: String
  },
}
</script>

<style lang="scss" scoped>
@import "../scss/mixin.scss";
@import "../scss/main.scss";

.image {
  width: 100%;
  height: 450px;
  overflow: hidden;

  &-art {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1;

    @include mq("desktop") {
      width: 100%;
    }

    & button {
      margin-top: 25px;
      border-radius: $borderRadius;
      font-size: 0.8rem;
      padding: 15px 25px;
    }
    & h2 {
      font-size: 30px;

      @include mq("tablet") {
        font-size: 40px;
      }
      @include mq("desktop") {
        font-size: 60px;
      }
    }
    & p {
      display: none;

      @include mq("tablet") {
        margin-top: 10px;
        letter-spacing: 1px;
        display: block;
      }
      @include mq("desktop") {
        margin-top: 15px;
        letter-spacing: 2px;
        display: block;
      }
    }
  }
  &-image {
    background-color: black;
    & img {
      width: 220%;
      opacity: 0.6;
      z-index: -1;

      @include mq("tablet") {
        width: 150%;
      }
      @include mq("desktop") {
        width: 100%;
      }
    }
  }
}
</style>