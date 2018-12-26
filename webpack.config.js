//webpack.config.js
var webpack = require('webpack');
// const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vuxLoader = require('vux-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const env = process.env.NODE_ENV
const webpackConfig = {
    mode: env || 'development',
    devtool: '#source-map',
    entry: __dirname + "/src/main.js",//入口文件
    output: {
        path: __dirname + "/dist",//打包后导出文件夹
        filename: "[name].js",//导出的文件名
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
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
            
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        },
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        contentBase: "./dist",
        stats: { colors: true },
        historyApiFallback: true,
        inline: true,
        open: true //自动打开浏览器
    },
    plugins: [
        // new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue-demo',//生成的 html 文件 title
            filename: 'index.html',//生成的 html
            template: 'index.html'//模板 html
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
            }
        ], {
            ignore: [
                // 'text-editor.vue'
            ]
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    performance: {
        hints:false,//去掉性能提示
    }
        
}

module.exports = vuxLoader.merge(webpackConfig, {
    options: {},
    plugins: [{
      name: 'vux-ui'
    }]
})
