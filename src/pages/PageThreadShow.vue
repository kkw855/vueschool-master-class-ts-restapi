<template>
  <div class="col-large push-top">
    <h1>
      {{ thread.title }}
    </h1>

    <PostList :posts="threadPosts" />
    <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea
            v-model="newPostData"
            name=""
            id=""
            cols="30"
            rows="10"
            class="form-input"
          />
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostList from "@/components/PostList.vue";
import sourceData from "@/data.json";
import type Post from "@/types/Post";
import type Thread from "@/types/Thread";
import { computed, reactive, ref } from "vue";

// props
const props = defineProps<{
  id: string;
}>();

// data
const threads: Thread[] = sourceData.threads;
// JSON 파일에 포함된 emoji 를 위해서
const posts = reactive<Post[]>(JSON.parse(JSON.stringify(sourceData.posts)));
const thread = computed(() => threads.find((t) => t.id === props.id));
const threadPosts = computed(() =>
  posts.filter((p) => p.threadId === props.id)
);
const newPostData = ref("");

// methods
function addPost() {
  const postId = "gggg" + Math.random();
  const post: Post = {
    id: postId,
    text: newPostData.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.id,
    userId: "7uVPJS9GHoftN58Z2MXCYDqmNAh2",
  };
  posts.push(post);
  thread.value.posts.push(postId);

  newPostData.value = "";
}
</script>
