import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class extends Route {
  @service router;

  async model({ id }, transition) {
    if (id === '200') {
      return {};
    } else if (id === '500') {
      let title = 'Internal server error';
      this.router.replaceWith('error', { transition, title });
    } else {
      let title = 'Not found';
      this.router.replaceWith('error', { transition, title });
    }
  }
}
