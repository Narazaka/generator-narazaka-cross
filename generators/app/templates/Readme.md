# [<%= moduleName %>](https://github.com/<%= moduleOrganization %>/<%= moduleName %>.js)

[![npm](https://img.shields.io/npm/v/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)
[![npm license](https://img.shields.io/npm/l/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)
[![npm download total](https://img.shields.io/npm/dt/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)
[![npm download by month](https://img.shields.io/npm/dm/<%= moduleName %>.svg)](https://www.npmjs.com/package/<%= moduleName %>)
[![Bower](https://img.shields.io/bower/v/<%= moduleName %>.svg)](https://github.com/<%= moduleOrganization %>/<%= moduleName %>.js)
[![Bower](https://img.shields.io/bower/l/<%= moduleName %>.svg)](https://github.com/<%= moduleOrganization %>/<%= moduleName %>.js)

[![Dependency Status](https://david-dm.org/<%= moduleOrganization %>/<%= moduleName %>.js.svg)](https://david-dm.org/<%= moduleOrganization %>/<%= moduleName %>.js)
[![devDependency Status](https://david-dm.org/<%= moduleOrganization %>/<%= moduleName %>.js/dev-status.svg)](https://david-dm.org/<%= moduleOrganization %>/<%= moduleName %>.js#info=devDependencies)
[![Travis Build Status](https://travis-ci.org/<%= moduleOrganization %>/<%= moduleName %>.js.svg)](https://travis-ci.org/<%= moduleOrganization %>/<%= moduleName %>.js)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/<%= moduleOrganization %>/<%= moduleName %>.js?svg=true)](https://ci.appveyor.com/project/<%= moduleAuthor %>/<%= moduleName %>-js)
[![codecov.io](https://codecov.io/github/<%= moduleOrganization %>/<%= moduleName %>.js/coverage.svg?branch=master)](https://codecov.io/github/<%= moduleOrganization %>/<%= moduleName %>.js?branch=master)
[![Code Climate](https://codeclimate.com/github/<%= moduleOrganization %>/<%= moduleName %>.js/badges/gpa.svg)](https://codeclimate.com/github/<%= moduleOrganization %>/<%= moduleName %>.js)

<%= moduleDesc %>

## Install

npm:
```
npm install <%= moduleName %>
```

bower:
```
bower install <%= moduleName %>
```

## Usage

node.js(ES2015):
```javascript
import {<%= moduleClassName %>} from '<%= moduleName %>';
```

node.js(ES5):
```javascript
var <%= moduleExportName %> = require('<%= moduleName %>');
var <%= moduleClassName %> = <%= moduleExportName %>.<%= moduleClassName %>;
```

browser:
```html
<script src="<%= moduleName %>.js"></script>
var <%= moduleClassName %> = <%= moduleExportName %>.<%= moduleClassName %>;
```

## API

[API Document](https://doc.esdoc.org/github.com/<%= moduleOrganization %>/<%= moduleName %>.js/)

## License

This is released under [<%= moduleLicense %> License](<%= moduleAuthorSite %>license/<%= moduleLicense %>?<%= new Date().getFullYear() %>).
