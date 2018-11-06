//webpack.config.js
var webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: __dirname + "/src/main.js",//入口文件
    output: {
        path: __dirname + "/dist",//打包后导出文件夹
        filename: "bundle.js"//导出的文件名
    },
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },           
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }    
                ]
                
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                // include: [resolve('src'), resolve('test')],
                options: {
                  formatter: require('eslint-friendly-formatter')
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: "./dist",
        stats:{colors: true},
        historyApiFallback: true,
        inline: true,
        open: true //自动打开浏览器
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue-demo',//生成的 html 文件 title
            filename: 'index.html',//生成的 html
            template: 'index.html'//模板 html
        }),
    ]
}
