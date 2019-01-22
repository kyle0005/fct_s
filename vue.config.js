module.exports = {
  pages: {
    main: {
      // page 的入口
      entry: "src/pages/main/main.js",
      // 模板来源
      template: "src/pages/main/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "main Page"
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['index']
    },
    user: {
      // page 的入口
      entry: "src/pages/user/main.js",
      // 模板来源
      template: "src/pages/user/index.html",
      // 在 dist/index.html 的输出
      filename: "user.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "user Page"
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'user']
      // chunks: ['user']
    },
    welcome: {
      // page 的入口
      entry: "src/pages/welcome/main.js",
      // 模板来源
      template: "src/pages/welcome/index.html",
      // 在 dist/index.html 的输出
      filename: "welcome.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "welcome Page"
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['welcome']
    }
  },
/*   chainWebpack: config => {
    const options = module.exports;
    const pages = options.pages;
    const pageKeys = Object.keys(pages);

    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: "chunk-vendors",
          priority: -10,
          chunks: "initial",
          minChunks: 2,
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        },
        ...pageKeys.map(key => ({
          name: `chunk-${key}-vendors`,
          priority: -11,
          chunks: chunk => chunk.name === key,
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        })),
        common: {
          name: "chunk-common",
          priority: -20,
          chunks: "initial",
          minChunks: 2,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    });
  } */
  // assetsDir: 'static',
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { 
          limit: 10240000,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]',
              // publicPath: '../../../fonts/',           /* 生成dist目录中css里面的图片的url地址前缀 */
              outputPath: 'fonts/'        /* 图片输出到dist的目录前缀 */
            }
          },
          
        }
        )
      )
  }
};
