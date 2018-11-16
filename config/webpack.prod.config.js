const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const replaceStyleLoaderWith = require('./replaceStyleLoaderWith');

const {
  baseConfig,
  cssLoaderOptions,
  projectRootDir
} = require('./webpack.base.config.js');

cssLoaderOptions.sourceMap = false;

const prodConfig = merge.smart(
  replaceStyleLoaderWith(MiniCssExtractPlugin.loader)(/\.s[ac]ss$/, baseConfig),
  {
    mode: 'production',

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true
        })
      ]
    },

    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'bundle-[hash].js',
      publicPath: 'dist/'
    },

    module: {
      rules: [
        {
          test: /\.(jpe?g|png)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 80
                }
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(['dist'], { root: projectRootDir }),
      new MiniCssExtractPlugin({
        filename: 'styles-[contenthash].css'
      })
    ]
  }
);

module.exports = prodConfig;
