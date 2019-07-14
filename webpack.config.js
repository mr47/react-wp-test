const {
    getFileLoaderOptions,
    issuerForNonStyleFiles,
    issuerForStyleFiles,
} = require('@wpackio/scripts');
const ImageminPlugin = require("imagemin-webpack");

module.exports = function webpackOverrideCallback (config, merge, appDir, isDev){
   let customConfig = {
       plugins: [
           new ImageminPlugin({
               bail: false, // Ignore errors on corrupted images
               cache: true,
               imageminOptions: {
                   // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

                   // Lossless optimization with custom option
                   // Feel free to experiment with options for better result for you
                   plugins: [
                       ["gifsicle", { interlaced: true }],
                       ["jpegtran", { progressive: true }],
                       ["optipng", { optimizationLevel: 5 }],
                       [
                           "svgo",
                           {
                               plugins: [
                                   {
                                       removeViewBox: false
                                   }
                               ]
                           }
                       ]
                   ]
               }
           })
       ]
   };
   return merge(config, customConfig)
};