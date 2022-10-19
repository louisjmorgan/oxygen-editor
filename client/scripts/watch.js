process.env.NODE_ENV = 'development';

const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');
const webpack = require('webpack');
const webpackconfig = require('react-scripts/config/webpack.config.js');
const config = webpackconfig('development');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


// removes react-dev-utils/webpackHotDevClient.js at first in the array

// ...other content...

// Remove 'react-refresh' from the loaders.
for (const rule of config.module.rules) {
  if (!rule.oneOf) continue

  for (const one of rule.oneOf) {
    if (
      one.loader &&
      one.loader.includes('babel-loader') &&
      one.options &&
      one.options.plugins
    ) {
      one.options.plugins = one
        .options
        .plugins
        .filter(
          plugin =>
            typeof plugin !== 'string' ||
            !plugin.includes('react-refresh'),
        )
    }
  }
}

// Remove 'react-refresh' and HMR plugins.
config.plugins = config
  .plugins
  .filter(
    plugin =>
      !(plugin instanceof webpack.HotModuleReplacementPlugin) &&
      !(plugin instanceof ReactRefreshPlugin),
  )


webpack(config).watch({}, (err, stats) => {
    if (err) {
        console.error(err);
    } else {
        copyPublicFolder();
    }
    console.error(stats.toString({
        chunks: false,
        colors: true
    }));
});

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: file => file !== paths.appHtml
    });
}
