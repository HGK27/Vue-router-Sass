<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div v-for="(item,index) in userData" :key="index">
          <div class="column-blog card" v-if="index<column">
            <div class="column-blog-title card-header">
                <h3>{{item.title}}</h3>
            </div>
            <div class="column-blog-body card-body">
                <p>{{item.body}}</p>
            </div>
            <footer class="column-blog-footer footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </div>
        </div>
        <div class="button">
          <button class="btn btn-success" @click="columnAdd">More Than</button>
        </div>
      </div>
      <div class="col-lg-4">
        <Sidebar></Sidebar>
      </div>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'

export default {
  name: 'Blog',
    data() {
      return {
        userData:{},
        column: 5
      }
    },
    components:{
      Sidebar,
      Footer
    },
    methods: {
      columnAdd(){
        this.column=this.column+5
      }
    },
    created() {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res)=>{return res.json()})
      .then((data)=>{this.userData = data; })
    }
}
</script>

<style lang="scss" scoped>
.column-blog {
  margin-top: 25px;
  &-footer {
    text-align: right;
    padding: 15px;
  }
}
.button {
  max-width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>