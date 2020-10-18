/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Resource } from 'rest-hooks';
import settings from '../api/config';

export default class MoviesResource extends Resource {
  static fetchOptionsPlugin = (options: RequestInit) => {
    return {
      ...options,
      headers: {
        ...options.headers,
        ...settings.headers,
      },
    };
  };

  pk() {
    return '';
  }

  static urlRoot = `${settings.api.baseUrl}${settings.api.topRated}`;

  static detailShape<T extends typeof Resource>(this: T) {
    return {
      ...super.detailShape(),
      schema: { data: this.asSchema() },
    };
  }
}
