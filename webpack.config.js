let path = require("path");
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
    }
}