<script setup lang="ts">
const isAnimate = ref(false);

// onMounted(() => setTimeout(() => (isAnimate.value = !isAnimate.value), 500));
</script>

<template>
  <div class="text-container" :class="{ animate: isAnimate }" @click="isAnimate = !isAnimate">
    <H2BeeIcon class="text-container__icon" />
    <h2 class="h2-text text-container__text">
      <slot></slot>
    </h2>

    <div class="text-container__line"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "scss";

.animate {
  & .text-container__icon,
  .text-container__text {
    translate: 0px 0px;
    opacity: 1;
  }

  & .text-container__line {
    width: 65%;

    @include mqs(md) {
      width: 50%;
    }
  }
}

.text-container {
  display: flex;
  align-items: center;
  gap: 20px;

  &__icon,
  &__text {
    transition: all 0.3s ease;
    opacity: 0;
  }

  &__icon {
    rotate: 45deg;
    width: fit-content;
    translate: -20px 40px;
  }

  &__text {
    text-wrap: nowrap;
    width: fit-content;
    translate: -40%;
    transition-delay: 150ms;
  }

  &__line {
    transition: all 0.5s ease-in-out;
    border-radius: 100px;
    height: 4px;
    width: 0%;
    margin-left: auto;
    background: linear-gradient(to right, var(--extra-color) 0%, var(--bg-color) 100%);
  }
}
</style>
