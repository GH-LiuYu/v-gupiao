'use strict'

const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基础配置 详情看文档
    publicPath: './',//当前文件打包
    outputDir: 'dist',//打包输出路径
    assetsDir: 'static',
    devServer: {
        port: 8082,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // 把key的路径代理到target位置
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            [process.env.VUE_APP_BASE_API]: { //需要代理的路径   例如 '/api'
                target: `http://192.168.126.128:8081`, //代理到 目标路径
                changeOrigin: true,
                pathRewrite: { // 修改路径数据
                    ['^' + process.env.VUE_APP_BASE_API]: '' // 举例 '^/api:""' 把路径中的/api字符串删除
                }
            }
        },
    },
    configureWebpack: {
        //    @路径走src文件夹
        resolve: {
            extensions: ['js', 'vue'],
            alias: {
                '@': resolve('src')
            }
        }
    }
}
