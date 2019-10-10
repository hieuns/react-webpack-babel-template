const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: './env-vars/.env.production'
    })
  ]
};
