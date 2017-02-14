module.exports = {
	entry:"./src/app.jsx",
	output: { 
		filename:'app.js',
        path:__dirname + '/dist'
	},
	module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
	watch:true
}
