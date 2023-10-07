<template>
  <div>
    <div class="pt-4">
      <router-link to="/main">
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

    <div class="px-4 py-2 p-4 w-3/4 rounded-xl mx-auto mt-6 bg-[#1bcfe8]">
      <p class="p-4 text-center text-white">
        ⚠️提问箱仅用于接受正向反馈，或者是说点悄悄话。别用它欺负人，如果您向我们的用戶发送骚扰信息，我们将禁止您使用提问箱，您的匿名提问消息也不会发送给对方。🌟🌟
      </p>
    </div>

    <div class="p-4 mt-4">
      <div class="p-4 bg-white rounded-2xl">
        <label
          for="message"
          class="block mb-5 text-3xl font-medium text-gray-900 text-center mt-2"
          >向我提问</label
        >
        <textarea
          id="message"
          rows="4"
          class="px-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="说出你的问题..."
        ></textarea>
        <div class="text-center">
          <button
            class="text-white bg-gradient-to-r from-blue-400 via-blue-400 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-2 text-center mt-6"
          >
            提交
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
