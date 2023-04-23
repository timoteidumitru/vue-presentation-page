<template>
  <header class="min-w-full container text-center justify-center">
    <h1
      class="font-Lato font-bold opacity-100 uppercase text-lg tracking-widest py-7"
      style="color: rgba(20, 143, 207, 1); letter-spacing: 3.25px"
    >
      GET AHEAD
    </h1>
    <section class="flex flex-wrap max-w-screen-lg justify-center mx-auto">
      <div
        class="flex flex-col items-center rounded gap-4 mx-2 my-2 py-2 px-2 border border-gray-300 w-64 cursor-pointer"
        v-for="item in appData.headerSectionOne"
        :key="item.id"
      >
        <img class="w-16" :src="item.img" :alt="item.img" />
        <p>{{ item.title }}</p>
        <p class="text-xsm">{{ item.description }}</p>
      </div>
      <div
        class="flex flex-col items-center rounded gap-2 mx-4 my-4 py-8 px-8 border border-gray-300 md:w-96 cursor-pointer"
        v-for="item in appData.headerSectionTwo"
        :key="item.id"
      >
        <img class="w-16" :src="item.img" :alt="item.img" />
        <p>{{ item.title }}</p>
        <p class="text-xsm">{{ item.description }}</p>
      </div>
    </section>
  </header>
</template>

<script setup>
import appData from "@/assets/data";
</script>
