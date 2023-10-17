<template>
  <div class="bg-[#D9EEEC] p-1 rounded-xl shadow-lg flex m-4">
    <div class="p-2 w-1/2 text-center">
      <img :src="Data.image" alt="" />
    </div>
    <div class="p-2 w-1/2 flex flex-col justify-around">
      <div class="text-center">《 {{ Data.name }} 》</div>
      <div class="text-center">作者：{{ Data.author }}</div>
    </div>
  </div>
</template>

<script setup>
  
const props = defineProps({
  Data: Object, // 接受人物卡片的数据对象
});
</script>

