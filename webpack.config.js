const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    "mode": "development",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname+'/dist',
        "filename": "[name].js"
    },
    "plugins": [
      new CopyWebpackPlugin( [
        {
          "from": "src/view/index.html",
          "to": "./",
          fromType: 'glob'
        }
      ] )
    ],
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "es2016"
                        ]
                    }
                }
            },
            {
                "test": /.*\.scss/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};

