import { module, test } from 'qunit';
import { setupTest } from 'markerclusterer-issue-17/tests/helpers';

module('Unit | Controller | application', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });
});
