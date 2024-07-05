<script setup lang="ts">
const { data: items } = await useFetch("/api/navigationLinks");
const isActive = ref<boolean>(false);
const isAnimate = ref<boolean>(false);

watch(isActive, () => {
  isActive.value === true ? document.body.classList.add("lock") : document.body.classList.remove("lock");
});

onMounted(() => setTimeout(() => (isAnimate.value = true), 500));
</script>

<template>
  <div class="hamburger" :class="{ animate: isAnimate }">
    <input type="checkbox" id="hamburger__checkbox" class="hamburger__checkbox" />
    <label @click="isActive = !isActive" class="hamburger__label" for="hamburger__checkbox"></label>
  </div>

  <nav class="nav" :class="{ active: isActive }">
    <NuxtLink class="nav__item body-text body-text_lg" v-for="item in items" :to="item.link">
      {{ item.name }}
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
@import "scss";

.animate {
  &.hamburger {
    opacity: 1;
    translate: 0%;
  }
  z-index: 10;
}

.nav {
  &.active {
    display: flex;
  }
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: rgba(#000, 0.9);
  padding: 40px 0px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: 5;
  &__item {
    text-decoration: none;
    text-transform: capitalize;
    border: 1px solid var(--main-color);
    border-radius: 10px;
    padding: 10px 20px;
  }
}

.hamburger {
  display: none;
  opacity: 0;
  translate: 100%;
  transition: all 0.4s ease;

  @include mqs(md) {
    display: block;
  }

  &__checkbox {
    position: absolute;
    visibility: hidden;
  }

  &__label {
    cursor: pointer;
    display: block;
    position: relative;
    border: none;
    background: transparent;
    width: 40px;
    height: 26px;
    margin: 30px auto;

    &::before,
    &::after {
      content: "";
      left: 0;
      position: absolute;
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 10px;
      background: #fff;
    }

    &::before {
      top: 0;
      box-shadow: 0 11px 0 #fff;
      transition: box-shadow 0.2s 0.15s, top 0.2s 0.15s, transform 0.2s;
    }

    &::after {
      bottom: 0;
      transition: bottom 0.2s 0.15s, transform 0.2s;
    }
  }

  &__checkbox:checked + &__label {
    &::before {
      top: 11px;
      transform: rotate(45deg);
      box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
      transition: box-shadow 0.15s, top 0.2s, transform 0.2s 0.15s;
    }

    &::after {
      bottom: 11px;
      transform: rotate(-45deg);
      transition: bottom 0.2s, transform 0.2s 0.15s;
    }
  }
}
</style>
