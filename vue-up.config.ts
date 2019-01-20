import { Configuration } from '@gluons/vue-up';
import nvl from 'nvl';
import { resolve } from 'path';

const config: Configuration = {
	entry: resolve(__dirname, './src/index.ts'),
	libraryName: 'VueGitHubButtons',
	fileName: 'vue-github-buttons',
	define: {
		GH_TOKEN: ''
	},
	dev: {
		entry: resolve(__dirname, './dev/index.ts'),
		define: {
			GH_TOKEN: nvl(process.env.GITHUB_DEV_TOKEN, '')
		},
		htmlTitle: 'Vue GitHub Buttons'
	}
};

export default config;
