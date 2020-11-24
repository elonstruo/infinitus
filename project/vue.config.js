const webpack = require('webpack');
const GenerateAssetPlugin = require('generate-asset-webpack-plugin');

let createConfig = function (compilation) {

    let cfgJson = {
        debugServiceUrl:process.env.debug_service_url,
        isDebug:process.env.isdebug
    };

    return JSON.stringify(cfgJson);
}

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
