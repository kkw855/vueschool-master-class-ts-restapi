<template>
  <h1>Welcome to the Forum</h1>
  <forum-list :forums="forums" />
</template>

<script setup lang="ts">
import type Forum from "@/types/Forum";
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList.vue";

const forums: Forum[] = sourceData.forums;
</script>
