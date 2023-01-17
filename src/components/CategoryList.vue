<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :title="category.name"
    :category-id="category.id"
    :forums="getForumsForCategory(category)"
  />
</template>

<script setup lang="ts">
import type Category from "@/types/Category";
import type Forum from "@/types/Forum";
import ForumList from "@/components/ForumList.vue";
import sourceData from "@/data.json";

// eslint-disable-next-line functional/no-expression-statement
defineProps<{
  categories: Category[];
}>();

function getForumsForCategory(category: Category): Forum[] {
  return sourceData.forums.filter((f) => f.categoryId === category.id);
}
</script>
