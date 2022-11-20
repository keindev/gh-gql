export type IArrayElement<A> = A extends readonly (infer T)[] ? T : never;
