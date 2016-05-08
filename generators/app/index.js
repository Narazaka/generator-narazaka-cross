'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the shining ' + chalk.red('generator-narazaka-cross') + ' generator!'
    ));

    var prompts = [{
      type: 'string',
      name: 'moduleName',
      message: 'What is the name of your module? ',
      default: 'my-module'
    },{
      type: 'string',
      name: 'moduleDesc',
      message: 'A description for your module: ',
      default: 'My very own module'
    },{
      type: 'string',
      name: 'moduleAuthor',
      message: 'Your name: ',
      default: 'Narazaka'
    },{
      type: 'string',
      name: 'moduleEmail',
      message: 'Your email: ',
      default: 'info@narazaka.net'
    },{
      type: 'string',
      name: 'moduleAuthorSite',
      message: 'Your site: ',
      default: 'https://narazaka.net/'
    },{
      type: 'string',
      name: 'moduleOrganization',
      message: 'Github organization for your module: ',
      default: 'Narazaka'
    },{
      type: 'string',
      name: 'moduleLicense',
      message: 'License type: ',
      default: 'MIT'
    }];

    this.prompt(prompts, function (props) {
      var name = _.deburr(props.moduleName);

      this.moduleName = _.kebabCase(name);
      this.moduleClassName = _.capitalize(_.camelCase(name));
      this.moduleExportName = _.camelCase(name);
      this.moduleDesc = _.deburr(props.moduleDesc);
      this.moduleLicense = _.deburr(props.moduleLicense);
      this.moduleAuthor = props.moduleAuthor;
      this.moduleEmail = props.moduleEmail;
      this.moduleAuthorSite = props.moduleAuthorSite;
      this.moduleOrganization = _.deburr(props.moduleOrganization);

      done();
    }.bind(this));
  },

  writing: function () {
    this.dest.mkdir('src');
    this.dest.mkdir('src/lib');
    this.dest.mkdir('test');
    this.dest.mkdir('mock');
    this.copy('.babelrc');
    this.copy('.codeclimate.yml');
    this.copy('.eslintrc.yml');
    this.copy('.gitignore');
    this.copy('.npmignore');
    this.copy('.travis.yml');
    this.copy('appveyor.yml');
    this.copy('bower.json');
    this.copy('esdoc.json');
    this.copy('gulpfile.babel.js');
    this.copy('karma.conf.js');
    this.copy('package.json');
    this.copy('Readme.md');
    this.copy('webpack.confg.js');
    this.copy('test/basic.js');
    this.copy('test/mocha.opts');
    this.copy('mock/mocha-lazy-bdd.js');
  },

  install: function () {
    this.installDependencies();
  }
});
