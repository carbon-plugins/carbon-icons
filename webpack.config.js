const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config"); // webpack.config.js
const million 		 = require( 'million/compiler');

const isProduction = process.env.NODE_ENV === 'production';

const devConfig = {
	...defaultConfig
}

const buildConfig = {
  ...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		million.webpack({ auto: true }),
	]
}
module.exports = isProduction
	? buildConfig
	: devConfig
