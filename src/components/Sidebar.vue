<template>
  <div class="container-fluid">
    <div class="row">
      <div class="sidebar">
        <div class="sidebar-item" v-for="i in 3" :key="i">
          <h3 class="sidebar-item-title">Title</h3>
          <img class="sidebar-item-img" src="../img/empty.jpg">
          <p class="sidebar-item-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur 
            tempora explicabo animi omnis iusto adipisci quos!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Sidebar'
}
</script>

<style lang="scss" scoped>
.sidebar {
  &-item {
    margin-top: 20px;
    &-title {
      text-align: center;
    }
    &-img {
      width: 100%;
    }
    &-body {
      margin-top: 10px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}
</style>