var app =  require('./app');

var renderer = require('vue-server-renderer').createRenderer();

var test = require('aspnet-prerendering').createServerRenderer(function () {
    return new Promise(function (resolve, reject) {
        renderer.renderToString(app, (err, resultHtml) => { // params.data is the store's initial state. Sent by the asp-prerender-data attribute
            if (err) {
                reject(err.message);
            }

            console.log(resultHtml);
            resolve({ html: resultHtml })
        });
    });
});

module.exports = test;