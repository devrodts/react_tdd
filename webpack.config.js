const path = require('path')
const {DefinePlugin} = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/main/index.tsx",

    output:{
        path: path.join(__dirname, "public/js"),
        publicPath: "/public/js/",
        filename: "bundle.js"
    },

    resolve:{
        extensions: [".ts", ".tsx", ".js", ".jsx", "scss"],
        alias: {
            "@": path.join(__dirname, "src")
        }
    },
    devServer:{
        contentBase: "./public",
        writeToDisk: true,
        historyApiFallback: true,
    },
    externals: {
        react: "React",
        'react-dom': "ReactDOM"
    }

}
