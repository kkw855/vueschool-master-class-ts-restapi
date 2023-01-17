<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <thread-list :threads="threads" />
  </div>
</template>
cd
<script setup lang="ts">
import type Forum from "@/types/Forum";
import type Thread from "@/types/Thread";
import ThreadList from "@/components/ThreadList.vue";
import sourceData from "@/data.json";
import { computed } from "vue";

const props = defineProps<{
  id: string;
}>();

const forum = computed<Forum>(
  () => sourceData.forums.find((f) => f.id === props.id) as Forum
);
const threads = computed<Thread[]>(() =>
  sourceData.threads.filter((t) => t.forumId === props.id)
);
</script>
