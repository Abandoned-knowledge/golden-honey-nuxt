<script setup lang="ts">
let isAnimate = ref(false);
onMounted(() => setTimeout(() => (isAnimate.value = true), 500));
</script>

<template>
  <div class="logo" :class="{ animate: isAnimate }">
    <LogoIcon class="logo__icon" />
    <span class="logo__text lora gradient-main">golden honey</span>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;

  &__icon {
    transition: all 0.4s ease;

    scale: 0.5;
    rotate: -180deg;
    opacity: 0;
    visibility: hidden;
  }

  &__text {
    font-weight: bold;
    font-size: 18px;
    text-transform: capitalize;
    overflow-x: hidden;
    translate: -100%;
    transition: all 0.4s ease 0.05s;
    opacity: 0;
    visibility: hidden;
  }
}

.animate {
  & .logo__icon {
    scale: 1;
    rotate: 0deg;
    opacity: 100;
    visibility: visible;
  }
  & .logo__text {
    translate: 0%;
    opacity: 100%;
    visibility: visible;
  }
}
</style>
