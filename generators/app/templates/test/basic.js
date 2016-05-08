import {<%= moduleClassName %>} from '../src/lib/<%= moduleName %>';

import assert from 'power-assert';

/** @test {<%= moduleClassName %>} */
describe('<%= moduleClassName %>', function() {
  lazy('instance', function() { return new <%= moduleClassName %>() });
  /** @test {<%= moduleClassName %>#constructor} */
  context('constructor', function() {
    it('basic', function() { assert(this.instance instanceof <%= moduleClassName %>) });
  });
});
