<script setup lang="ts">
const isAnimate = ref<boolean>(false);

onMounted(() => setTimeout(() => (isAnimate.value = true), 1000));
</script>

<template>
  <section class="container about m-comp" :class="{ animate: isAnimate }">
    <H2Text>About Us</H2Text>

    <div class="about__content">
      <p class="body-text body-text_lg about__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam reprehenderit nostrum deserunt. Ea quos,
        eveniet iure ratione iusto corrupti ab delectus nemo perspiciatis eos corporis deserunt neque non sit autem
        dicta repudiandae omnis illo ad accusamus pariatur, dolore commodi animi quam. Dolores, ipsam obcaecati. Alias
        eum accusamus, deserunt distinctio maxime mollitia neque quasi quibusdam incidunt similique dolorum illum,
        dolore saepe qui eveniet ad provident, praesentium rerum quam voluptates asperiores fugit!
      </p>

      <div class="about__image">
        <img class="about__honey-bar" src="img/honey-bar.png" alt="honey bar" />
        <HoneyComb class="about__honeycomb" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "scss";
.animate {
  & .about__text {
    opacity: 1;
    translate: 0%;
  }
  & .about__honey-bar {
    opacity: 1;
    translate: 0%;
  }
}

.about {
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    gap: 50px;
    height: 500px;

    @include mqs(md) {
      grid-template-columns: 1fr;
      gap: 10px;
      height: 100%;
      text-align: center;
    }
  }

  &__text,
  &__honey-bar {
    opacity: 0;
    transition: all 0.4s ease;
  }

  &__text {
    line-height: 180%;
    margin: 0;
    translate: -30%;
  }

  &__image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    width: auto;

    @include mqs(md) {
      height: 400px;
    }
  }

  &__honey-bar {
    height: 80%;
    width: auto;
    translate: 30%;
    transition-delay: 400ms;
  }

  &__honeycomb {
    position: absolute;
    bottom: 20%;
    z-index: -1;
    @include mqs(sm) {
      width: 250%;
    }
  }
}
</style>
