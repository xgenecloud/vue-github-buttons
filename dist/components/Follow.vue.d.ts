import { getCountMixin, userMixin } from '../mixins';
declare const GitHubButtonFollow_base: import("vue-class-component/lib/declarations").VueClass<getCountMixin & userMixin>;
export default class GitHubButtonFollow extends GitHubButtonFollow_base {
    loadCount(): Promise<void>;
    created(): Promise<void>;
    updated(): Promise<void>;
}
export {};
