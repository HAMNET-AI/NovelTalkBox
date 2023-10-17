<template>
  <div>
    <div class="px-2">
      <div class="flex flex-wrap">
        <RoleCard 
          v-for="i in role"
          :key="i.id"
          :Data="i"
          @click="selectedRole = i; showModal = true"
        />
      </div>
    </div>

    <!-- 模态框 -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-10 bg-black/20 backdrop-blur-sm"
    >
      <div
        class="bg-white w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 rounded-xl shadow-lg"
      >
        <h2 class="text-xl font-bold mb-2 text-center">
          选择了 {{ selectedRole.name }}
        </h2>
        <img
          :src="selectedRole.image"
          alt=""
          class="rounded-full w-1/3 mx-auto"
        />
        <div class="text-center mt-4">
          <router-link :to="`/main/${selectedRole.character_id}`">
            <button class="bg-green-400 text-white px-6 py-2 rounded-lg mx-4">
              对话
            </button>
          </router-link>
          <button
            @click="showModal = false"
            class="bg-gray-400 text-white px-6 py-2 rounded-lg mx-4"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { getRoleData } from "../api";
import RoleCard from "../components/RoleCard.vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const showModal = ref(false);
const selectedRole = ref(null);
const role = ref(null); // 新增一个响应式变量
const id = ref('')

const roleData = async (id) => {
  try {
    const res = await getRoleData(id);
    role.value = res.data; // 将数据存储在响应式变量中
    console.log(role.value);
  } catch (err) {
    console.log(err);
  }
};

watchEffect(() => {
  id.value = router.currentRoute.value.params.bookid;
  roleData(id);
});

</script>
