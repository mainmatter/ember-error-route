ember-error-route
==============================================================================

This addon will help you build better “404 Not Found” and other error pages in
Ember.js.

Take a look at our [demo page](https://simplabs.github.io/ember-error-route/)
to better understand what this does!


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-error-route
```


Usage
------------------------------------------------------------------------------

1. Add an `error` route (`this.route('error', { path: '*path' });`) to the
   `app/router.js` file

2. Add the `error` route implementation:

```js
import ErrorRoute from 'ember-error-route';

export default class CatchAllRoute extends ErrorRoute {}
```

3. Wrap your `model()` hooks with `try/catch` and redirect the user to the
   `error` route:

```js
@service router;

async model(params, transition) {
  try {
    return await fetch(`https://movies.com/${params.id}.json`);
  } catch (error) {
    this.router.replaceWith('error', { transition, error, title: 'Movie not found' });
  }
}
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
