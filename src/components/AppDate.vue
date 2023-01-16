<template>
  <span :title="humanFriendlyDate()">
    {{ diffForHumans() }}
  </span>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const props = defineProps<{
  timestamp: number;
}>();

function diffForHumans(): string {
  return dayjs.unix(props.timestamp).fromNow();
}
function humanFriendlyDate(): string {
  return dayjs.unix(props.timestamp).format("llll");
}
</script>
