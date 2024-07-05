<script setup lang="ts">
import { type ISliderItem } from "@/app/interfaces/interfaces";

const props = defineProps<ISliderItem>();
const isAnimate = ref<boolean>(false);

onMounted(() => setTimeout(() => (isAnimate.value = true), 750));
</script>

<template>
  <article class="item" :class="{ animate: isAnimate }">
    <div class="item__image-container">
      <img :src="props.imgSrc" class="item__image" alt="honey bar" />
      <p class="body-text body-text_lg">{{ props.name }}</p>
    </div>
    <div class="item__content">
      <div class="item__name">
        <p class="body-text body-text_lg"><span class="body-text_bold">Honey: </span>{{ props.honey }}</p>
        <p class="body-text body-text_lg"><span class="body-text_bold">Title: </span>{{ props.title }}</p>
      </div>

      <div class="item__specifications">
        <div class="item__sizes">
          <p class="body-text body-text_lg body-text_bold">Size :</p>
          <div class="bars">
            <HoneyBarLg class="bars__icon" />
            <HoneyBarMd class="bars__icon" />
            <HoneyBarSm class="bars__icon" />
          </div>
        </div>

        <div class="item__properties">
          <p class="body-text body-text_lg"><span class="body-text_bold">Color: </span>{{ props.color }}</p>
          <p class="body-text body-text_lg"><span class="body-text_bold">Region: </span>{{ props.region }}</p>
          <p class="body-text body-text_lg"><span class="body-text_bold">Price: </span>{{ props.price }} SAR</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "scss";
.animate.item {
  opacity: 1;
}

.item {
  background: rgba(#ffba41, 0.07);
  padding: 25px;
  border-radius: 50px;
  display: flex;
  gap: 100px;
  width: 80%;
  opacity: 0;
  transition: all 0.4s ease;

  @include mqs(md) {
    gap: 25px;
    width: 90%;
  }

  @include mqs(sm) {
    gap: 10px;
    padding: 15px;
  }

  &__image {
    height: 300px;
    width: 250px;
    object-fit: cover;

    @include mqs(md) {
      height: 250px;
      width: 200px;
    }
    @include mqs(sm) {
      height: 200px;
      width: 150px;
    }
  }

  &__image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    @include mqs(md) {
      gap: 0px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &__specifications {
    display: flex;
    gap: 50px;
    @include mqs(md) {
      gap: 30px;
      align-items: end;
    }
  }

  &__sizes {
    display: flex;
    flex-direction: column;
  }
}

.bars {
  display: flex;
  align-items: end;
  gap: 10px;

  @include mqs(sm) {
    flex-direction: column;
    align-items: start;
  }

  &__icon {
    @include mqs(sm) {
      scale: .8;
    }
  }
}

.body-text {
  text-transform: capitalize;
  color: var(--main-color);
  &_bold {
    color: var(--extra-color);
  }
}
</style>
