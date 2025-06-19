import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';

export default {
    mode: 'development',
    devServer: {
        port: 9001,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'ProductList',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductList': './src/ProductList',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
