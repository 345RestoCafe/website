<template>
<div class="view-container">
  <div class="content">
    <div class="icons">
      <i class="pi pi-wrench" style="font-size: 100px"></i>
      <i class="pi pi-desktop" style="font-size: 100px"></i>
    </div>
    <h1 class="title">Este sitio se encuentra en mantenimiento</h1>

  </div>
</div>
</template>

<script>
export default {
  name: 'UnderDevelopment'
}
</script>

<style scoped>
.view-container {
  padding-top: 150px ;
}
.content {
  color: #777777;
  width: 400px;
  font-family: Popins, sans-serif;
  padding: 100px;
  justify-self: center;
}
.icons {
  justify-self: center;
}
.title {
  text-align: center;
}
i {
  padding: 20px;
}

</style>