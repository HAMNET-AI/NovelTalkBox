<template>
  <div class="p-2.5 bg-white rounded-lg m-3">
    <p class="text-center bg-gray-200 p-6 rounded-lg">{{ query }}</p>
    <div class="flex pt-6">
      <p class="p-4 text-sm flex-1">{{ answer }}</p>
    </div>
  </div>
</template>

<script setup>
const { query, answer } = defineProps(['query', 'answer']);
</script>
