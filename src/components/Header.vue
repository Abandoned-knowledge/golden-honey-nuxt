<script setup lang="ts">
import HamburgerMenu from "./Menu/HamburgerMenu.vue";
import Menu from "./Menu/Menu.vue";
</script>

<template>
  <header class="container">
    <MainLogo />
    <HamburgerMenu />
    <Menu />
  </header>
</template>

<style lang="scss" scoped>
@import "scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin-top: 10px;
}
</style>
