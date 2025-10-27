<script setup>
import { ref, watchEffect, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 5000
  }
});

const currentIndex = ref(0);
let timer = null;

const startRotation = () => {
  stopRotation();
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  }, props.interval);
};

const stopRotation = () => {
  if (timer) clearInterval(timer);
};

onMounted(startRotation);
onBeforeUnmount(stopRotation);

watchEffect(() => {
  stopRotation();
  startRotation();
});
</script>

<template>
  <div class="fade-carousel position-relative overflow-hidden rounded">
    <transition-group name="fade" tag="div">
      <img
          v-if="images.length"
          :key="images[currentIndex]?.itemImageSrc"
          :src="images[currentIndex]?.itemImageSrc"
          :alt="images[currentIndex]?.alt || ''"
          class="carousel-img position-absolute w-100 h-100"
      />
    </transition-group>
  </div>
</template>

<style scoped>
.fade-carousel {
  width: 100%;
  max-width: 640px;
  height: 25rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.carousel-img {
  object-fit: cover;
  top: 0;
  left: 0;
}
</style>