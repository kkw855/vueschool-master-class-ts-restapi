export default interface Category {
  readonly id: string;
  readonly forums: readonly string[];
  readonly name: string;
  readonly slug: string;
}
