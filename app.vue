<script lang="ts" setup>
import { useIpadCursor } from "./utils/cursor/useCursor";
import Modal from './components/Modal/index.vue';
useIpadCursor();
const nuxt = useNuxtApp();
let dailyImage:string;

nuxt.hook('app:mounted', async () => {
  const { data, pending, error, refresh } = await useFetch("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1");
  dailyImage = `https://cn.bing.com${data.value?.images[0].url}`;
});

const data = [
  {
    title: "repeat tasks",
    list: [
      {
        title: "task 1",
        content: "content 1",
      },
      {
        title: "task 2",
        content: "content 2",
      },
      {
        title: "task 3",
        content: "content 3",
      },
    ],
  },
  {
    title: "Todo",
    list: [
      {
        title: "task 1",
        content: "content 1",
      },
      {
        title: "task 2",
        content: "content 2",
      },
      {
        title: "task 3",
        content: "content 3",
      },
    ],
  },
  {
    title: "Done",
    list: [
      {
        title: "task 1",
        content: "content 1",
      },
      {
        title: "task 2",
        content: "content 2",
      },
      {
        title: "task 3",
        content: "content 3",
      },
    ],
  },
  {
    title: "Archived",
    list: [
      {
        title: "task 1",
        content: "content 1",
      },
      {
        title: "task 2",
        content: "content 2",
      },
      {
        title: "task 3",
        content: "content 3",
      },
    ],
  },
];
</script>
<template>
  <div class="relative w-100vw h-100vh">
    <div
      id="navbar"
      class="w-full relative h-48px py-2 shadow backdrop-blur-20 box-border"
      flex="~ flex-row justify-center items-center"
    >
      <button class="btn font-bold text-2xl text-gray-50" data-cursor="block" @click="nuxt.">Wakanban</button>
    </div>
    <div
      id="kanban"
      class="relative w-full box-border px-10 pt-10 box-border sm:flex-row gap-5 sm:gap-0"
      flex="~ justify-between col"
    >
      <div
        class="w-full sm:w-20vw b-solid b-transparent b-10px inline-block box-border rounded-12px text-white shadow backdrop-blur-30"
        v-for="item in data"
      >
        <div w-full flex="~ justify-center items-center">
          <button btn text-gray-50 text-lg font-semibold data-cursor="block">
            {{ item.title }}
          </button>
        </div>
        <div btn-square right-0 top-0 absolute data-cursor="block">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4h2Z" />
          </svg>
        </div>
        <div
          class="b-1 shadow b-white text-white bg-white bg-opacity-10 rounded-12px p-10px m-10px"
          v-for="data in item.list"
        >
          <div data-cursor="text" text-sm>{{ data.title }}</div>
          <div data-cursor="text" text-xs>{{ data.content }}</div>
          <div class="w-full flex flex-justify-end">
            <button class="btn text-gray-50" data-cursor="block">testing</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body,
html {
  padding: 0;
  margin: 0;
}
body {
  background: url(http://api.muvip.cn//api/bing/index.php?rand=false&day=0&size=1920x1080&info=false);
}
</style>
