<script setup lang="ts">
let isAnimate = ref(false);

onMounted(() => setTimeout(() => (isAnimate.value = true), 1000));
</script>

<template>
  <section class="hero" :class="{ animate: isAnimate }">
    <img class="hero__bg" src="img/hero-section-bg.png" alt="hero section background" />
    <div class="hero__bg-radial"></div>
    <div class="hero__main">
      <h1 class="h1-text">golden honey</h1>
      <img class="hero__photo" src="img/hero-section-main.png" alt="honey" />

      <div class="hero__main-bg-light"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$trans: all 0.45s ease;
.animate {
  & .hero__bg {
    opacity: 1;
    scale: 1;
  }
  & .hero__photo,
  .h1-text {
    opacity: 1;
    translate: 0% 0%;
  }

  & .hero__main-bg-light {
    opacity: 1;
    scale: 1;
  }
}

.hero {
  margin-top: 30px;
  &__bg {
    position: absolute;
    top: 50px;
    z-index: -2;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: $trans;
    opacity: 0;
    scale: 0.7;

    &-radial {
      position: absolute;
      top: 50px;
      background: radial-gradient(circle, rgba(11, 11, 11, 0) 0%, rgba(11, 11, 11, 1) 40%);
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  &__photo {
    width: fit-content;
    height: auto;
    opacity: 0;
    transition: $trans;
    translate: 0% 20%;
    transition-delay: 200ms;
  }

  &__main-bg-light {
    transition: $trans;
    opacity: 0;
    transition-delay: 150ms;

    scale: 0.5;
    top: 0;
    position: absolute;
    width: 650px;
    aspect-ratio: 1;
    background: radial-gradient(circle, rgba(255, 184, 0, 0.5) 0%, rgba(217, 217, 217, 0) 50%);
    z-index: -1;
    top: 20%;
  }
}

.h1-text {
  opacity: 0;
  transition: $trans;
  translate: 0% 20%;
  transition-delay: 150ms;

  text-transform: capitalize;
  margin: 0;
  height: fit-content;
  background: linear-gradient(
    180deg,
    rgba(255, 234, 173, 1) 0%,
    rgba(255, 220, 131, 1) 30%,
    rgba(255, 196, 83, 1) 55%,
    rgba(239, 160, 54, 1) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
