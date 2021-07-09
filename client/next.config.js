// This file is loaded automatically when the project start up.
// Purpose: watch for file changes
module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300; // poll once every 300ms
    return config;
  },
};
