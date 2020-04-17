module.exports = {
	 publicPath: './',
    assetsDir: 'static',
	 // 将构建好的文件输出到哪里
	outputDir: 'dist',
    productionSourceMap: false,
	 devServer: {
        proxy: {
            '/empcenter':{
                target: 'http://127.0.0.1:8003',
                changeOrigin:true,
                ws: true
            }
        },
        disableHostCheck: true
    }
}