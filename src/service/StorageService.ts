import moment from 'moment';

const CACHE_TIME_DAYS = 1;

export default class StorageService {
  static get<T>(key: string): T {
    let lastQuery: any = localStorage.getItem(`${key}-lastQuery`);
    if (!lastQuery) {
      lastQuery = moment.now();
      localStorage.setItem(`${key}-lastQuery`, lastQuery);
    } else {
      if (moment().diff(lastQuery, 'days') > CACHE_TIME_DAYS) {
        localStorage.removeItem(key);
      }
    }
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    } else {
      return null;
    }
  }

  static set(key: string, data: any) {
    localStorage.setItem(`${key}-lastQuery`, moment.now().toString());
    localStorage.setItem(key, JSON.stringify(data));
  }
}
