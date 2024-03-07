<template>
  <div class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
    <img @click="onClickFavorite" :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Like 1 icon" class="absolute top-8 left-8" />
    <img :src="imageUrl" alt="sneaker image" />

    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Price:</span>
        <b>${{ price }} </b>
      </div>

      <img
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="Plus icon"
        @click="onClickAdd"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    imageUrl: string;
    title: string;
    price: number;
    id: number;
    isAdded: boolean;
    isFavorite: boolean;
    onClickAdd: () => void;
    onClickFavorite: () => void;
  }

  defineProps<Props>();
</script>