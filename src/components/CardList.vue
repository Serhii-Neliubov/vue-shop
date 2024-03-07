<template>
    <div class="grid grid-cols-4 gap-5 ">
      <MyCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :price="item.price"
        :title="item.title"
        :imageUrl="item.imageUrl"
        :isAdded="true"
        :onClickAdd="onClickAdd"
        :onClickFavorite="() => emit('addToFavorite', item)"
        :isFavorite="item.isFavorite"
      />
    </div>
</template>

<script setup lang="ts">
  import MyCard from '@/components/Card.vue'

  interface Props {
    items: {
      id: number;
      price: number;
      title: string;
      imageUrl: string;
      isAdded: boolean;
      isFavorite: boolean;
    }[] | undefined;
  }

  defineProps<Props>();

  const emit = defineEmits(['addToFavorite']);

  const onClickAdd = () => {
  };

</script>