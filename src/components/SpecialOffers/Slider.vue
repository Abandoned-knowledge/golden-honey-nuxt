<script setup lang="ts">
import SliderItem from "./SliderItem.vue";
const { data: items } = await useFetch("/api/sliderItems");

import { Pagination } from "swiper/modules";
let modules = [Pagination];
</script>

<template>
  <Swiper class="mySwiper">
    <SwiperSlide v-for="item in items" class="swiper-slide">
      <SliderItem
        :img-src="item.imgSrc"
        :name="item.name"
        :honey="item.honey"
        :title="item.title"
        :color="item.color"
        :region="item.region"
        :price="item.price"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
.swiper-slide {
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
