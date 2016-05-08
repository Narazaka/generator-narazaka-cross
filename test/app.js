'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-narazaka-cross:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        moduleName: 'example',
        moduleDesc: '',
        moduleAuthor: 'Narazaka',
        moduleEmail: 'info@narazaka.net',
        moduleAuthorSite: 'https://narazaka.net/',
        moduleOrganization: '',
        moduleLicense: 'MIT',
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'test/mocha.opts'
    ]);
  });
});
