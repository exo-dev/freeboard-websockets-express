var https = require('https');
var fs    = require('fs');

fs.mkdir("node_modules/freeboard/plugins/datasource/", function() {

    download("http://raw.githubusercontent.com/Freeboard/plugins/master/datasources/plugin_json_ws.js",
        "node_modules/freeboard/plugins/datasource/plugin_json_ws.js", function() {
            console.log("Plugin downloaded");
        });
});


fs.readFile('node_modules/freeboard/index.html', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var original = 'head.js("js/freeboard+plugins.min.js",';
    var nueva    = 'head.js("js/freeboard+plugins.min.js", "plugins/datasource/plugin_json_ws.js",';
    var result   = data.replace(original, nueva);

    fs.writeFile('node_modules/freeboard/index.html', result, 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }
    });
});

function download() {
    var options = {
        hostname: 'raw.githubusercontent.com',
        port    : 443,
        path    : '/Freeboard/plugins/master/datasources/plugin_json_ws.js',
        method  : 'GET'
    };

    var file = fs.createWriteStream("node_modules/freeboard/plugins/datasource/plugin_json_ws.js");
    var req  = https.request(options, function(res) {
        res.on('data', function(d) {
            file.write(d);
        });
    });
    req.end();

    req.on('error', function(e) {
        console.error(e);
    });
}
