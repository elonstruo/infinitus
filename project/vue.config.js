
module.exports = {
    devServer: {
        proxy: {
            '/apis': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': ''
                }
            }
        }
    },

    publicPath: '/wap',
}
