<script setup lang="ts">
const { data: rawLinks } = await useFetch("/api/locationLinks");
const firstLinks = rawLinks.value?.slice(0, 2);
const lastLinks = rawLinks.value?.slice(2, 4);
const links = [firstLinks, lastLinks];
</script>

<template>
  <section class="container m-comp animation-component">
    <H2Text>Find us at</H2Text>

    <div class="location">
      <LocationIcon class="location__icon" />

      <div class="links">
        <div class="links__frame" v-for="links_ in links">
          <div class="links__bg"></div>
          <div class="links__item" v-for="link in links_">
            <p class="body-text body-text_lg body-text_bold">{{ link.name }}</p>
            <ButtonVisit :link="link.link"> Visit </ButtonVisit>
          </div>
        </div>
      </div>

      <HoneyComb class="combs" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "scss";

.location {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;

  &__icon {
    transition: all 0.4s ease;
    transition-delay: 200ms;

    opacity: 0;
    translate: 0% -50%;
  }
}

.combs {
  scale: 1 -1;
  position: absolute;
  top: 30%;
  z-index: -5;
}

.animate {
  .location__icon {
    opacity: 1;
    translate: 0% 0%;
  }

  .links__frame {
    opacity: 1;
    &:first-child,
    &:last-child {
      translate: 0%;
    }
  }
}

.links {
  display: flex;
  gap: 20px;
  width: 80%;
  margin: 0 auto;

  @include mqs(md) {
    width: 100%;
    flex-direction: column;
  }

  &__frame {
    transition: all 0.4s ease;
    transition-delay: 400ms;
    opacity: 0;
    &:first-child {
      translate: -60%;
    }
    &:last-child {
      translate: 60%;
    }

    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 30px 25px;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid rgba(#d0a94b, 0.2);
    @include mqs(sm) {
      padding: 20px 15px;
      gap: 15px;
    }
  }

  &__bg {
    background-color: rgba(#ffffff, 0.2);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    filter: blur(20px);
    z-index: -1;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
