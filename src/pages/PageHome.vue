<template>
  <h1>Welcome to the Forum</h1>
  <thread-list :threads="threads" />
</template>

<script setup lang="ts">
import ThreadList from "@/components/ThreadList.vue";
import sourceData from "@/data.json";
import type Thread from "@/types/Thread";

const threads: Thread[] = sourceData.threads;
</script>
