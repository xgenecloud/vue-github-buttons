import { Vue } from 'vue-property-decorator';
export default class UserMixin extends Vue {
    user: string;
    showCount: boolean;
    count: number;
    get isLoading(): boolean;
}
