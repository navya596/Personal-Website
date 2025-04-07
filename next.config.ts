const path = require('path');

module.exports = {
  webpack(config: { resolve: { alias: { [x: string]: any; }; }; }) {
    config.resolve.alias['@'] = path.join(__dirname, 'app');
    return config;
  }
};
