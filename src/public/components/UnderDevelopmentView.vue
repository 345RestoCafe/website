<template>
<div class="view-container">
  <div class="content">
    <div class="icons">
      <i class="pi pi-wrench" ></i>
      <i class="pi pi-desktop" ></i>
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
  font-size: 100px;
}

@media (max-width: 571px) {
  .view-container {
    padding-top: 250px;
  }
  .content{
    width: 150px;
    padding: 50px;
  }
  i {
    font-size: 30px;
    padding: 5px;
  }
  .title {
    font-size: 1.2em;
  }
}

@media (max-width: 430px) {
  .view-container {
    padding-top: 150px;
  }

}
</style>