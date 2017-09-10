import Vue from 'vue';
import VueGitHubButtons from '../../src/index';
import Follow from '@/components/Follow.vue';

describe('Follow', () => {
	Vue.use(VueGitHubButtons);
	let Ctor = Vue.extend(Follow);
	const vm = new Ctor({
		propsData: {
			user: 'gluons',
			showCount: true
		}
	}).$mount();

	it('has expected name', () => {
		expect(vm.$options.name).toEqual('gh-btns-follow');
	});
	it('has expected props', () => {
		let props = vm.$props;
		expect(props.user).toEqual('gluons');
		expect(props.showCount).toBe(true);
	});
	it('has expected data', done => {
		vm.count = 123;
		vm.$nextTick(() => {
			let data = vm.$data;
			let count = data.count;
			expect(count).toEqual(123);

			done();
		});
	});
	it('has expected custom values', () => {
		expect(vm['_vue-github-buttons_useCache']).toBeDefined();
	});
});
