export interface Repository<T> {
    repository: T;
}

export interface Ref<T> {
    ref: T;
}

export interface Target<T> {
    target: T;
}

export interface History<T> {
    history: T;
}

export interface Edges<T> {
    node: T;
}

export type RefTarget<T> = Ref<Target<T>>;
export type RefTargetHistory<T> = Ref<Target<History<T>>>;
