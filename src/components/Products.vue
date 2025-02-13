<script setup lang="ts">
function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const { data: products } = await useFetch("/api/products");

const productFirstRow = products.value?.slice(0, 4);
const productSecondRow = products.value?.slice(4, 8);

const productsRows = [productFirstRow, productSecondRow];

onMounted(() => {
  const combs: HTMLElement[] = Array.from(document.querySelectorAll(".comb"));
  combs.forEach((comb: HTMLElement) => (comb.style.transitionDelay = `${getRandomValue(100, 350)}ms`));
});
</script>

<template>
  <section class="container m-comp animation-component" id="products">
    <H2Text>Products</H2Text>

    <div class="combs">
      <div class="row" v-for="row in productsRows">
        <div class="comb" v-for="item in row">
          <ProductsHoneyCombFrame class="comb__frame" />
          <component :is="item.iconName" class="comb__icon" />
          <div class="comb__name">
            <ProductsHoneyCombPanel class="comb__panel" />
            <span class="title-text">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "scss";
.row {
  display: flex;
  gap: 20px;
  justify-content: center;

  @include mqs(sm) {
    gap: 10px;
  }

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

  &__frame {
    height: fit-content;

    @include mqs(lg) {
      width: 150px;
    }
    @include mqs(md) {
      width: 100px;
    }
    @include mqs(sm) {
      width: 75px;
    }
  }
  &__icon {
    position: absolute;
    width: 80%;
    height: 80%;
  }
  &__panel {
    width: 100%;
    height: 100%;
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
