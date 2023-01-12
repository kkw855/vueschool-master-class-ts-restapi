import type Post from "@/types/Post";

export default interface PostSaveEvent {
  readonly post: Post;
}
