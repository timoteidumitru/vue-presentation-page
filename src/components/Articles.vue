<template>
  <section class="max-w-5xl mx-auto my-20">
    <div
      v-for="article in appData.articles"
      :key="article.id"
      class="item max-w-xl mx-auto my-8 py-5"
    >
      <p
        class="opacity-100 text-Sky font-bold font-lato text-xs tracking-wider text-left uppercase"
      >
        {{ article.sectionName }}
      </p>
      <h1 class="text-Blue my-5 opacity-100 font-bold text-5xl leading-10">
        {{ article.title }}
      </h1>
      <p class="text-Graphite font-bold text-lg">{{ article.description }}</p>
    </div>
  </section>
</template>

<script setup>
import appData from "@/assets/data";
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const items = document.querySelectorAll(".item");

  items.forEach((item, index) => {
    if (index === 0) {
      gsap.set(item, { opacity: 1, y: 0 });
    } else {
      gsap.set(item, { opacity: 0, y: 50 });
    }

    ScrollTrigger.create({
      trigger: item,
      start: "center bottom",
      end: "center top",
      onEnter: () => {
        gsap.to(item, { opacity: 1, y: 0 });
        if (index > 0) {
          gsap.to(items[index - 1], { opacity: 0, y: -50 });
        }
        if (index < items.length - 1) {
          gsap.to(items[index + 1], {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.5,
          });
        }
      },
      onLeaveBack: () => {
        if (index > 0) {
          gsap.to(items[index - 1], {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.5,
          });
        }
        if (index < items.length - 1) {
          gsap.to(items[index + 1], { opacity: 0, y: 50 });
        }
        gsap.to(item, { opacity: 0, y: -50 });
      },
    });
  });
});
</script>
