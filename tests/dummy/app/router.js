import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('native', { path: '/native/:id' });
  this.route('fixed', { path: '/fixed/:id' });
  this.route('error', { path: '*path' });
});
