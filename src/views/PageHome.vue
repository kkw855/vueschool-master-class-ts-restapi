<template>
  <div
    v-for="thread in threads"
    v-bind:key="thread.id"
    class="col-large push-top"
  >
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{
            userById(postById(postId).userId).name
          }}</a>

          <a href="#">
            <img
              class="avatar-large"
              :src="userById(postById(postId).userId).avatar"
              alt=""
            />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import sourceData from "@/data.json";
import type Thread from "@/types/Thread";
import type Post from "@/types/Post";
import type User from "@/types/User";

const threads: Thread[] = sourceData.threads;
// JSON 파일에 포함된 emoji 를 위해서
const posts: Post[] = JSON.parse(JSON.stringify(sourceData.posts));
const users: User[] = sourceData.users;

const postById = (postId: string) => posts.find((p) => p.id === postId);
const userById = (userId: string) => users.find((u) => u.id === userId);
</script>

<style scoped></style>
