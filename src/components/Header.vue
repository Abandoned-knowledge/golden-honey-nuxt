<script setup lang="ts">
import Menu from "./Menu/Menu.vue";
</script>

<template>
  <header class="container">
    <MainLogo />
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
}
</style>
