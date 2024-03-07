<template>
  <Drawer v-if="isDrawerOpen"/>

  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <MyHeader />
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8 ">All Sneakers</h2>

        <div class="flex gap-4">
          <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
            <option value="name">Name</option>
            <option value="price">Price (Cheap)</option>
            <option value="-price">Price (Expensive)</option>
          </select>

          <div class="relative">
            <img class="absolute left-4 top-3" src="/search.svg" alt="search icon" />
            <input
              @input="onChangeSearch"
              type="text"
              class="border border-gray-200 rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      <CardList :items="items" @addToFavorite="addToFavorite"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import axios from 'axios'
  import MyHeader from '@/components/Header.vue'
  import CardList from '@/components/CardList.vue'
  import Drawer from '@/components/Drawer.vue'
  import { onMounted, provide, reactive, ref, watch } from 'vue'
  import type { ISneaker } from '@/models/ISneaker'

  interface RequestParams {
    sortBy: string;
    title?: string;
  }

  const items = ref<ISneaker[]>([]);
  const isDrawerOpen = ref<boolean>(false);

  const filters = reactive({
    sortBy: 'title',
    searchQuery: ''
  });

  const onChangeSearch = (e: Event) => {
    const target = e.target as HTMLInputElement;
    filters.searchQuery = target.value;
  };

  const onChangeSelect = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    filters.sortBy = target.value;
  };

  const fetchItems = async () => {
    try {
      const params: RequestParams = {
        sortBy: filters.sortBy,
      };

      if(filters.searchQuery){
        params.title = `*${filters.searchQuery}*`;
      }

      const { data } = await axios.get(`https://e16a7470c3c552a4.mokky.dev/items`, { params });

      items.value = data.map((obj: ISneaker) => ({ ...obj, isAdded: false, isFavorite: false }));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const { data: favorites } = await axios.get(`https://e16a7470c3c552a4.mokky.dev/favorites`);

      items.value = items.value.map((item: any) => {
        const favorite = favorites.find((favorite: any) => favorite.parentId === item.id);

        if(!favorite){
          return item;
        }

        return{
          ...item,
          isFavorite: true,
          favoriteId: favorite.id,
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addToFavorite = (item: ISneaker) => {
    if(!item.isFavorite) {
        axios.post(`https://e16a7470c3c552a4.mokky.dev/favorites`, {
          parentId: item.id,
        }).then(({ data }) => {
          items.value = items.value.map((obj: any) => {
            if(obj.id === item.id){
              return {
                ...obj,
                isFavorite: true,
                favoriteId: data.id,
              };
            }

            return obj;
          });
        }).catch(error => {
          console.error(error);
        });
      } else {
        axios.delete(`https://e16a7470c3c552a4.mokky.dev/favorites/${item.favoriteId}`).then(() => {
          items.value = items.value.map((obj: any) => {
            if(obj.id === item.id){
              return {
                ...obj,
                isFavorite: false,
                favoriteId: null,
              };
            }

            return obj;
          });
        }).catch(error => {
          console.error(error);
        });
      }
  };

  provide('addToFavorite', addToFavorite);

  onMounted(async () => {
    await fetchItems();
    await fetchFavorites();
  });

  watch(filters, fetchItems);

</script>