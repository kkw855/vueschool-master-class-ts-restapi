<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <a href="#">Forums</a>
      </h2>

      <div v-for="forum in forums" :key="forum.id" class="forum-listing">
        <div class="forum-details">
          <router-link
            class="text-xlarge"
            :to="{ name: 'Forum', params: { id: forum.id } }"
            >{{ forum.name }}</router-link
          >
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ forumThreadsWord(forum) }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Forum from "@/types/Forum";
import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";

// eslint-disable-next-line functional/no-expression-statement
defineProps<{
  forums: Forum[];
}>();

function forumThreadsWord(forum: Forum) {
  return pipe(
    forum,
    O.fromNullableK((f) => f.threads),
    O.fold(
      // eslint-disable-next-line functional/functional-parameters
      () => "no threads",
      (threads) => (threads.length > 1 ? "threads" : "thread")
    )
  );
}
</script>
