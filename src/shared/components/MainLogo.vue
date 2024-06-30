<script setup lang="ts"></script>

<template>
  <div class="logo">
    <LogoIcon />
    <span class="logo__text lora gradient-main">golden honey</span>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  &__text {
    font-weight: bold;
    font-size: 18px;
    text-transform: capitalize;
  }
}
</style>
