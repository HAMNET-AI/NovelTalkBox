<template>
  <div>
    <div class="bg-white p-4 rounded-xl mx-4 mt-8">
      <div class="px-2 py-8 bg-gray-200 rounded-xl text-center">
        {{props.title}}
      </div>
    </div>

    <div class="bg-white p-4 mx-4 my-8 rounded-xl">
      <div class="py-2">
        {{props.content}}
      </div>
      <p class="mt-4 text-gray-400 text-sm">爱德蒙·邓蒂斯 ——《基督山伯爵》</p>
      <div class="text-center mt-8">
        <button class="text-white bg-[#4dd5ed] py-2 px-8 rounded-3xl">
          向ta发起匿名提问
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  content: string;
}

const props = defineProps<Props>();
</script>
