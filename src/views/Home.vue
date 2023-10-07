<template>
  <div>
    <div class="px-2">
      <div class="flex flex-wrap">
        <Character
          v-for="character in characters"
          :key="character.id"
          :characterData="character"
          @click="showModal = true, selectedCharacter = character"
        />
      </div>
    </div>

    <!-- 模态框 -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-10 bg-black/20 backdrop-blur-sm">
      <div class="bg-white w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-xl shadow-lg">
        <h2 class="text-xl font-bold mb-2 text-center">选择了 {{ selectedCharacter.name }}</h2>
        <img :src="selectedCharacter.imageUrl" alt="" class="rounded-full w-1/3 mx-auto">
        <p class="text-gray-500 text-sm text-center my-4">作者：{{ selectedCharacter.author }} ——《{{ selectedCharacter.bookName }}》</p>
        <div class="text-center">
        <!-- 前往按钮，点击后导航到新页面 -->
        <router-link to="/main">
          <button class="bg-green-400 text-white px-6 py-2 rounded-lg mx-4">
            对话
          </button>
        </router-link>
        
        <!-- 取消按钮，点击后关闭模态框 -->
        <button @click="showModal = false" class="bg-gray-400 text-white px-6 py-2 rounded-lg mx-4">
          取消
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Character from "../components/Character.vue";
import { ref } from 'vue';

const showModal = ref(false);
const selectedCharacter = ref(null);

// 人物卡片数据数组
const characters = [
  {
    id: 1,
    name: "许晶晶",
    imageUrl: "/xujingjing.png",
    author: "阎真",
    bookName: "如何是好",
  },
  {
    id: 2,
    name: "叶文洁",
    imageUrl: "/yewenjie.png",
    author: "刘慈欣",
    bookName: "三体",
  },
];
</script>
