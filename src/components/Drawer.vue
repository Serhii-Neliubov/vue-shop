<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-70" />
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <CartItemList />

    <div class="flex flex-col gap-4 my-7">
      <div class="flex gap-2">
        <span>Total:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>$129.00</b>
      </div>

      <div class="flex gap-2">
        <span>Tax:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>$90.00</b>
      </div>

      <button
        :disabled="true"
        class="cursor-pointer bg-lime-500 w-full rounded-xl py-3 mt-4 text-white hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-300"
      >
        Create order
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DrawerHead from '@/components/DrawerHead.vue'
  import CartItemList from '@/components/CartItemList.vue'
</script>