'use strict';
var fso = require('fso');
var path = require('path');
var _ = require('lodash');

var org_name = process.argv[process.argv.length - 1].split('/');
if (org_name.length == 1) {
  var name = org_name[0];
  var org = 'Narazaka';
} else {
  var name = org_name[1];
  var org = org_name[0];
}

var moduleName = name;
var moduleClassName = _.capitalize(_.camelCase(name));
var moduleExportName = _.camelCase(name);
var moduleOrganization = org;
var moduleDesc = "module " + name;
var moduleAuthor = 'Narazaka';
var moduleEmail = 'info@narazaka.net';
var moduleAuthorSite = 'https://narazaka.net/';
var moduleLicense = 'MIT';

var templates_dir = fso.new(__dirname).new('templates')
var destination_dir = fso.new(name);
templates_dir.readdirAllSync().forEach(function(filename) {
  var from = templates_dir.new(filename);
  var to = destination_dir.new(filename);

  if (from.statSync().isFile()) {
    var template = from.readFileSync({encoding: 'utf8'});
    var content = template.replace(/<%=(\s*module.*?)%>/g, function(all, code) {
      return eval(code);
    });
    to.parent().mkpathSync();
    to.writeFileSync(content, {encoding: 'utf8'});
    console.log(filename);
  }
});
