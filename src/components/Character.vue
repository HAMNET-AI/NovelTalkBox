<template>
  <div class="w-1/4 bg-[#D9EEEC] p-2 rounded-xl shadow-lg sm:m-4 m-3">
    <img :src="characterData.imageUrl" alt="" class="rounded-full" />
    <div class="text-center mt-1">{{ characterData.name }}</div>
  </div>
</template>

<script setup>
  
const props = defineProps({
  characterData: Object, // 接受人物卡片的数据对象
});
</script>

