<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <div class="flex items-center gap-4">
      <img class="w-10" src="/logo.png" alt="logo" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-400">The best sneakers shop</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li class="flex cursor-pointer items-center gap-3 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="cart">
        <b>$100</b>
      </li>

      <li class="flex cursor-pointer items-center gap-3 text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="cart">
        <span>Wishlist</span>
      </li>

      <li class="flex cursor-pointer items-center gap-3 text-gray-500 hover:text-black">
        <img src="/profile.svg" alt="cart">
        <span>Profile</span>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
</script>