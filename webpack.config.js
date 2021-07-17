/** @type {import('webpack').Configuration} */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env) => ({
  mode: env.development ? 'development' : 'production',
  devtool: env.development ? 'inline-source-map' : false,
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/what-weight/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              compact: env.production,
              plugins: [
                env.development && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  devServer: {
    contentBase: './dist',
    contentBasePublicPath: '/what-weight/',
    publicPath: '/what-weight/',
    compress: true,
    hot: true,
    open: true,
    openPage: 'what-weight/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'what weight!?',
      filename: 'index.html',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/logo.png',
      inject: true,
      mode: 'webapp',
      devMode: 'webapp',
      favicons: {
        appName: 'what weight!?',
        appDescription:
          'A utility to calculate your set weights from previous sets.',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/what-weight/',
        background: '#963200',
        theme_color: '#ffffff',
      },
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    env.development && new HotModuleReplacementPlugin(),
    env.development && new ReactRefreshWebpackPlugin({ forceEnable: true }),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: (module) => {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];

            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
});
