<template>
  <div class="col-large push-top">
    <h1>
      {{ thread.title }}
    </h1>

    <PostList :posts="threadPosts" />
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import sourceData from "@/data.json";
import type Post from "@/types/Post";
import type Thread from "@/types/Thread";
import { computed } from "vue";

const props = defineProps<{
  id: string;
}>();

const thread = computed(() => threads.find((t) => t.id === props.id));
const threadPosts = computed(() =>
  posts.filter((p) => p.threadId === props.id)
);

const threads: Thread[] = sourceData.threads;
// json 파일에 포함된 emoji 를 위해서
const posts: Post[] = JSON.parse(JSON.stringify(sourceData.posts));
</script>
