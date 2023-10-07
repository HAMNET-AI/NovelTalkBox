<template>
  <div>
    <div class="pt-4">
      <router-link to="/">
        <img
          class="w-16 h-16 rounded-full mx-auto border"
          src="/hhh.png"
          alt=""
        />
      </router-link>
      <h3 class="text-center mt-4">角色名</h3>
      <div class="text-center mt-4">
        <button
          class="text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center"
        >
          关注
        </button>
      </div>
    </div>
    <router-link to="/qa">
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
        xxx回答过的问题（75）
      </div>

      <!-- card -->

      <router-link to="/info">
        <Card
          title="正义与复仇的区别"
          userimg="https://img2.baidu.com/it/u=1185243695,3965528148&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          content="正义与复仇的区别在于动机和行为的性质。正义是出于道德和法律的合理原因，追求公平和平等，通常通过合法的渠道来解决问题。复仇则是个人的报复行为，出于个人情感，通常超越了法律的界限，以伤害他人为目的。"
        />
      </router-link>

      <router-link to="/info">
        <Card
          title="真的可以放弃陆地在海里生活吗"
          userimg="https://img2.baidu.com/it/u=3475381334,1505093482&fm=253&fmt=auto&app=138&f=PNG?w=500&h=540"
          content="是的，放弃陆地在海里生活是一种可能，但它需要牺牲与陆地社会的联系和舒适，以换取在海底的自由和独立。这是一种极端的生活选择，需要坚定的决心和适应能力。对于我来说，海洋是我热爱的家园。"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from "../components/Card.vue";
</script>
