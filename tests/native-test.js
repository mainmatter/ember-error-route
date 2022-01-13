import { currentURL, currentRouteName, click } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from './test-helpers/visit-ignoring-abort';

module('Acceptance | native', function (hooks) {
  setupApplicationTest(hooks);

  test('200', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.strictEqual(currentRouteName(), 'index');

    await click('[data-test-200-native]');
    assert.strictEqual(currentURL(), '/native/200');
    assert.strictEqual(currentRouteName(), 'native');
  });

  test('404', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.strictEqual(currentRouteName(), 'index');

    await click('[data-test-404-native]');
    assert.strictEqual(currentURL(), '/');
    assert.strictEqual(currentRouteName(), 'native_error');
  });

  test('404 directly', async function (assert) {
    await visit('/native/404');
    assert.strictEqual(currentURL(), '/native/404');
    assert.strictEqual(currentRouteName(), 'native_error');
  });
});
