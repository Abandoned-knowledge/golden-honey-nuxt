<script setup lang="ts">
const props = defineProps<{ link: string }>();
</script>

<template>
  <a :href="props.link" class="button body-text body-text_bold">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  text-decoration: none;
  border-radius: 100px;
  padding: 10px 30px;
  border: 1px solid rgba(#d0a94b, 0.4);
  text-transform: capitalize;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(#d0a94b, 0.4);
  }
}
</style>
