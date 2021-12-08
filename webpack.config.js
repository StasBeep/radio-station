const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    // Готовый продукт
    // mode: 'production',
    // Сборка для разработки
    mode: 'development',
    // Подключение map к сборке
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.bundle.js',
    },

    experiments: {
        topLevelAwait: true,
    },

    module: {
        rules: [{
                // Если есть расширение .m или .js
                test: /\.js$/,
                // игнорирование папок node_modules и bower_components
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // null-loader используется тогда, когда знаешь какая зависимсть
                    // лишняя
                    // loader: 'null-loader',
                    options: {
                        "presets": ["@babel/preset-env", {
                            "exclude": ["transform-async-to-generator", "transform-regenerator"]
                        }],
                    }
                },
            }
        ]
    },

    plugins: [
        // Очистка перед каждой сборкой
        new CleanWebpackPlugin(),
    ]
}