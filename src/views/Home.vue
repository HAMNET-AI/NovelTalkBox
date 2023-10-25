<template>
  <div>
    <div class="px-2">
      <div class="flex flex-col-reverse">
        <Character
          v-for="i in book"
          :key="i.id"
          :Data="i"
          @click="$router.push(`/role/${i.id}`)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Character from "../components/Character.vue";
import { ref } from "vue";
import { getBookData } from "../api";

const book = ref(null); // 新增一个响应式变量

const bookData = async () => {
  try {
    const res = await getBookData();
    console.log(res);
    book.value = res.data; // 将数据存储在响应式变量中
    console.log(book.value);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  bookData();
});

</script>
