<template>
  <h1>Welcome to the Forum</h1>
  <category-list :categories="categories" />
</template>

<script setup lang="ts">
import type Category from "@/types/Category";
import CategoryList from "@/components/CategoryList.vue";
import sourceData from "@/data.json";

const categories: Category[] = sourceData.categories;
</script>
