<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="contactForm">
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control" placeholder="Email">
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="name" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
            <label >Subject</label>
            <input type="subject" class="form-control" placeholder="Subject">
          </div>
          <div class="form-group">
          <textarea class="form-control textarea" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </div>
      <div class="col-lg-6">
          <div id="map-container-google-1" class="z-depth-1-half map-container">
          <iframe src="https://maps.google.com/maps?q=toronto&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
          style="border:0; width:100%; height:500px; margin-top:25px;" allowfullscreen></iframe>
          </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>

</template>

<script>
import Footer from './Footer.vue'
export default {
  name: 'Contact',
  components:{
      Footer
    }
}
</script>

<style lang="scss" scoped>
.contactForm {
  margin-top: 50px;
  margin-bottom: 25px;
}
.textarea {
  resize: none;
}
</style>