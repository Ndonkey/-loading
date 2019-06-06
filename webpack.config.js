let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin = require("mini-css-extract-plugin")
// reslove函数用来返回一个绝对路径
let resolve = (file)=>{
    return path.resolve(__dirname,file)
}
console.log(resolve("index.js"))
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path: resolve(__dirname,"dist"),
        filename: "dist/main.js"
    },
    devServer:{
        port: 3000,
        contentBase: './dist',
        compress: true,
        open: true,
        proxy:{}
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:"index.html",
            hash: true,
            minify:{
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "main.css" //抽离出来的css文件名

        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test:/\.less/,
                use: ["style-loader","css-loader","less-loader"]
            }
        ]
    }
}