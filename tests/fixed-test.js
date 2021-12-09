import { currentURL, currentRouteName, click } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from './test-helpers/visit-ignoring-abort';

module('Acceptance | fixed', function (hooks) {
  setupApplicationTest(hooks);

  test('200', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.strictEqual(currentRouteName(), 'index');

    await click('[data-test-200-fixed]');
    assert.strictEqual(currentURL(), '/fixed/200');
    assert.strictEqual(currentRouteName(), 'fixed');
  });

  test('404', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.strictEqual(currentRouteName(), 'index');

    await click('[data-test-404-fixed]');
    assert.strictEqual(currentURL(), '/fixed/404');
    assert.strictEqual(currentRouteName(), 'error');
  });

  test('404 directly', async function (assert) {
    await visit('/fixed/404');
    assert.strictEqual(currentURL(), '/fixed/404');
    assert.strictEqual(currentRouteName(), 'error');
  });

  test('500', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.strictEqual(currentRouteName(), 'index');

    await click('[data-test-500-fixed]');
    assert.strictEqual(currentURL(), '/fixed/500');
    assert.strictEqual(currentRouteName(), 'error');
  });

  test('500 directly', async function (assert) {
    await visit('/fixed/500');
    assert.strictEqual(currentURL(), '/fixed/500');
    assert.strictEqual(currentRouteName(), 'error');
  });
});
