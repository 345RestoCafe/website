<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <Galleria
        :value="images"
        :showThumbnails="false"
        :circular="true"
        :autoPlay="true"
        :transitionInterval="2500"
        :unstyled="true"
        containerStyle="width: 100%; border-radius: 0.8rem; overflow: hidden;"
        :showIndicators="false"
    >
      <template #item="slotProps">
        <transition name="fade" mode="out-in">
          <img
              :key="slotProps.item.itemImageSrc"
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              class="img-fluid fade-img"
          />
        </transition>
      </template>
    </Galleria>
  </div>
</template>

<style scoped>
Galleria {
  width: 100%;
  max-height: 20rem;
  border: none;
}

img {
  width: 100%;
  max-width: 30rem;
  height: 25rem;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  border: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-img {
  width: 100%;
  height: 25rem;
  object-fit: cover;
  border: none;
  display: block;
}
</style>