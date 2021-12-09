import Route from '@ember/routing/route';

export default class extends Route {
  async model({ id }) {
    if (id === '200') {
      return {};
    } else if (id === '500') {
      throw new Error('Internal server error');
    } else {
      throw new Error('Not found');
    }
  }
}
