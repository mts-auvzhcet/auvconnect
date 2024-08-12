// next.config.mjs
export default {
    webpack(config, { isServer }) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
          emitFile: isServer,
        },
      });
  
      return config;
    },
  };
  