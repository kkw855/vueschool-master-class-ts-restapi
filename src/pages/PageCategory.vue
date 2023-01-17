<template>
  <h1>{{ category.name }}</h1>
  <forum-list :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<script setup lang="ts">
import type Category from "@/types/Category";
import type Forum from "@/types/Forum";
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList.vue";
import { computed } from "vue";

// eslint-disable-next-line functional/no-expression-statement
const props = defineProps<{
  id: string;
}>();

const category = computed<Category>(
  // eslint-disable-next-line functional/functional-parameters
  () => sourceData.categories.find((c) => c.id === props.id) as Category
);

function getForumsForCategory(category: Category): Forum[] {
  return sourceData.forums.filter((f) => f.categoryId === category.id);
}
</script>
