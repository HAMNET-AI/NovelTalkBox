<template>
  <div class="p-3 bg-white rounded-xl mx-4 mt-6">
    <p class="text-center bg-gray-200 p-6 rounded-xl">{{ props.title }}</p>
    <div class="flex pt-6">
      <img
        :src="props.userimg"
        alt=""
        class="rounded-full w-10 h-10 m-auto flex-none"
      />
      <p class="p-4 text-sm flex-1">
        {{ props.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  content: string;
  userimg: string;
}

const props = defineProps<Props>();
</script>
