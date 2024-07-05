<script setup lang="ts">
function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const { data: products } = await useFetch("/api/products");

const productFirstRow = products.value?.slice(0, 4);
const productSecondRow = products.value?.slice(4, 8);

const isAnimate = ref<boolean>(false);

onMounted(() => {
  const combs: HTMLElement[] = Array.from(document.querySelectorAll(".comb"));
  combs.forEach((comb: HTMLElement) => (comb.style.transitionDelay = `${getRandomValue(100, 350)}ms`));

  setTimeout(() => (isAnimate.value = true), 1000);
});
</script>

<template>
  <section class="container m-comp">
    <H2Text>Products</H2Text>

    <div class="combs" :class="{ animate: isAnimate }">
      <div class="row row_first">
        <div class="comb" v-for="item in productFirstRow">
          <ProductsHoneyCombFrame />
          <component :is="item.iconName" class="comb__icon" />
          <div class="comb__name">
            <ProductsHoneyCombPanel />
            <span class="title-text">{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="row row_second">
        <div class="comb" v-for="item in productSecondRow">
          <ProductsHoneyCombFrame />
          <component :is="item.iconName" class="comb__icon" />
          <div class="comb__name">
            <ProductsHoneyCombPanel />
            <span class="title-text">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  gap: 20px;
  justify-content: center;

  &_second {
    translate: 0px -20px;
  }
}

.animate .comb {
  scale: 1;
  opacity: 1;
}

.comb {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  scale: 0.5;
  transition: all 0.25s ease;
  opacity: 0;

  &__icon {
    position: absolute;
  }

  &__name {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    opacity: 0;
    transition: all 0.25s ease;

    &:hover {
      opacity: 1;
    }

    & span {
      color: var(--main-color);
      position: absolute;
    }
  }
}
</style>
