import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RepoMixin extends Vue {
	@Prop({ type: String, required: true }) slug: string;
	@Prop({ type: String, required: false }) icon: string;
	@Prop({ type: Boolean, default: false }) showCount: boolean;
	@Prop({ type: Boolean, default: false }) reverse: boolean;

	count: number = null;

	get isLoading(): boolean {
		if (this.showCount) {
			return this.count == null;
		} else {
			return false;
		}
	}
}
