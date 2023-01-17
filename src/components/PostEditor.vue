<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          v-model="text"
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
</template>

<script setup lang="ts">
import type Post from "@/types/Post";
import type PostSaveEvent from "@/types/PostSaveEvent";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "save", event: PostSaveEvent): void;
}>();

const text = ref("");

function save() {
  const postId = "gggg" + Math.random();
  const post: Post = {
    id: postId,
    text: text.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: "unknown",
    userId: "7uVPJS9GHoftN58Z2MXCYDqmNAh2",
  };

  emit("save", { post });

  text.value = "";
}
</script>
