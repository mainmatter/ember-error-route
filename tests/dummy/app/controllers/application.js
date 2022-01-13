import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

  get baseUrl() {
    return window.location.origin;
  }

  get route() {
    return this.router.currentRouteName;
  }

  get url() {
    return this.router.currentURL;
  }
}
