<template>
  <div>
    <div class="pt-4">
      <div @click="$router.back()">
        <img
          class="w-16 h-16 rounded-full mx-auto border"
          :src="roleData.image"
          alt=""
        />
      </div>
      <h3 class="text-center mt-4">{{ roleData.name }}</h3>
      <div class="text-center mt-4">
        <button
          class="text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center"
        >
          关注
        </button>
      </div>
    </div>
    <router-link :to="`/qa/${id}`">
      <div class="px-4 py-2 bg-white p-4 w-3/4 rounded-xl mx-auto mt-6">
        <p class="p-4 text-center">Ask me anyting！<br />欢迎向我匿名提问！</p>
      </div>
      <div class="text-sm mt-3 text-center drop-shadow-lg">
        点击此处向我匿名提问
      </div>
    </router-link>

    <!-- QA -->
    <div>
      <div class="mt-40 text-lg pl-3 text-white font-bold pb-4 drop-shadow-lg">
        {{ roleData.name }} 回答过的问题（{{ roleData.chatlog.length }}）
      </div>

      <!-- card -->
      <div class="px-2">
        <div class="flex flex-col">
          <Card v-for="(item, key) in roleData.chatlog" :key="key" :query="item.query" :answer="item.answer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { getRoleInfo } from "../api";
import Card from "../components/Card.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const roleData = ref("");
const id = ref("");

const roleInfo = async (id) => {
  try {
    const res = await getRoleInfo(id);
    roleData.value = res;
    console.log(roleData.value);
  } catch (err) {
    console.log(err);
  }
};

watchEffect(() => {
  id.value = router.currentRoute.value.params.roleid;
  console.log(id.value);
  roleInfo(id);
});
</script>
