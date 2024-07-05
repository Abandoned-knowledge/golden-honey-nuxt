<script setup lang="ts">
onMounted(() => {
  const animationComponents: HTMLElement[] = Array.from(document.querySelectorAll(".animation-component"));
  const handleScroll = () => animationOnScroll(animationComponents);
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <HeroSection />
  <AboutUs />
  <Products />
  <SpecialOffers />
  <Locations />
</template>
