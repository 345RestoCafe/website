<script>
export default {
  name: "topWaveDividerComponent"
}
</script>

<template>
  <div class="divider">
    <svg viewBox="0 0 1920 116" preserveAspectRatio="none">
      <path fill="#FFF" d="M453,92c11.7-4.87,28.46-11.43,49-18c42.29-13.52,76.36-19.33,115-25c51.58-7.57,100.28-14.72,171-20
          c24.87-1.86,82.88-5.76,158-6c69.99-0.23,122.54,2.82,159,5c51.18,3.06,95.17,5.69,155,14c71.5,9.94,115.42,21.02,127,24
          c33.7,8.68,61.62,17.79,82,25C1130.33,91.33,791.67,91.67,453,92z" />
    </svg>
  </div>
</template>

<style scoped>
.divider {
  position: relative;
  top: -100px;
  width: 100%;
  overflow: hidden;
}
.divider svg {
  display: block;
  width: 100%;
}
</style>