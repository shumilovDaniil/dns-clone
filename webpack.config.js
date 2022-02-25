const path = require('path')
var glob = require('glob')

module.exports = {
	mode: 'development',
	entry: glob.sync('./src/js/**.js').reduce(function (obj, el) {
		obj[path.parse(el).name] = el
		return obj
	}, {}),
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: '[name].bundle.js',
	},
	watch: true,
}
