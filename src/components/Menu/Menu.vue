<script setup lang="ts">
const items = [
  { id: 1, name: "about us", link: "/" },
  { id: 2, name: "products", link: "/" },
  { id: 3, name: "delivery apps", link: "/" },
  { id: 4, name: "locations", link: "/" },
  { id: 5, name: "contacts", link: "/" },
];

let isAnimate = ref(false);
onMounted(() => setTimeout(() => (isAnimate.value = true), 750));
</script>

<template>
  <ul class="nav" :class="{ animate: isAnimate }">
    <li :class="'nav__item_' + item.id" class="nav__item" v-for="item in items">
      <NuxtLink class="nav__link body-text body-text_lg" :to="item.link">
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
$border-radius: 10px;
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 30px;
  background-color: var(--bg-color);
  border-radius: $border-radius;
  translate: 100%;
  transition: all 0.5s ease;
  position: relative;
  border: 1px solid var(--main-color);

  &__item {
    opacity: 0;
    margin: 10px 0px;
    transition: all 0.3s ease;
  }

  &__link {
    padding: 10px 15px;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--extra-color);
    border-radius: 10px;
    transition: all 0.2s ease;

    &:hover {
      color: var(--white-color);
      background-color: var(--extra-2-color);
    }
  }
}

.animate {
  &.nav {
    translate: 0%;
  }

  & .nav__item {
    opacity: 100;
  }
}
@for $i from 1 through 5 {
  .animate .nav__item_#{$i} {
    transition-delay: 200ms * $i;
  }
}
</style>
