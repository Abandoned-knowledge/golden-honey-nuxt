<script setup lang="ts">
import InstagrammIcon from "~/shared/icons/SoMe/InstagrammIcon.vue";
import LinkedinIcon from "~/shared/icons/SoMe/LinkedinIcon.vue";
import YouTubeIcon from "~/shared/icons/SoMe/YouTubeIcon.vue";

const isAnimate = ref<boolean>(false);

onMounted(() => setTimeout(() => (isAnimate.value = true), 1000));
</script>

<template>
  <footer class="container footer" :class="{ animate: isAnimate }">
    <div class="footer__up">
      <div class="contacts">
        <p class="body-text"><ContactsEmailIcon /> Email <span> honey@gmail.com </span></p>
        <p class="body-text"><ContactsPhoneIcon /> Phone <span> +96650509090 </span></p>
        <p class="body-text"><ContactsWhatsappIcon /> WhatsApp <span> +96650509090 </span></p>
      </div>

      <div class="socials">
        <a href="https://www.youtube.com/" target="_blank">
          <YouTubeIcon />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagrammIcon />
        </a>
        <a href="https://ru.linkedin.com/" target="_blank">
          <LinkedinIcon />
        </a>
      </div>
    </div>

    <div class="footer__down">
      <MainLogo />
      <p class="body-text">Copyright © 2023 AllN1. All rights reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import 'scss';
.animate {
  .footer {
    &__up,
    &__down {
      opacity: 1;
      translate: 0 0;
    }
  }
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 50%;
  margin-bottom: 50px;
  margin-top: 250px;

  @include mqs(lg) {
    width: 80%;
  }
  @include mqs(md) {
    margin-top: 100px;
  }

  &__up,
  &__down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &__up {
    translate: 0% -50%;

    @include mqs(sm) {
      flex-direction: column;
      gap: 10px;
    }
  }

  &__down {
    translate: 0% 50%;
  }
}
.socials {
  display: flex;
  gap: 10px;
  a {
    text-decoration: none;
  }
}

.body-text {
  color: var(--main-color);
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  span {
    margin-left: 30px;
  }
}
</style>
