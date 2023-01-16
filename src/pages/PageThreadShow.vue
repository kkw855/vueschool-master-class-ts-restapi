<template>
  <div class="col-large push-top">
    <h1>
      {{ thread.title }}
    </h1>

    <post-list :posts="threadPosts" />
    <post-editor @save="save" />
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import sourceData from "@/data.json";
import type Post from "@/types/Post";
import type Thread from "@/types/Thread";
import { computed, reactive } from "vue";
import PostEditor from "@/components/PostEditor.vue";
import type PostSaveEvent from "@/types/PostSaveEvent";

// props
const props = defineProps<{
  id: string;
}>();

// data
const threads = reactive<Thread[]>(sourceData.threads);
// JSON 파일에 포함된 emoji 를 위해서
const posts = reactive<Post[]>(JSON.parse(JSON.stringify(sourceData.posts)));
const thread = computed(() => threads.find((t) => t.id === props.id));
const threadPosts = computed(() =>
  posts.filter((p) => p.threadId === props.id)
);

// methods
function save(eventData: PostSaveEvent) {
  const post: Post = {
    ...eventData.post,
    threadId: props.id,
  };

  console.log(post);

  thread.value.posts.push(post.id);
  posts.push(post);
}
</script>
