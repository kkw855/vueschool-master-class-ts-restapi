export default interface Forum {
  readonly id: string;
  readonly categoryId: string;
  readonly description: string;
  readonly lastPostId?: string;
  readonly name: string;
  readonly slug: string;
  readonly threads?: readonly string[];
}
