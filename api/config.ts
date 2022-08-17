import axios, { AxiosInstance } from 'axios';

import { baseURL } from './paths';

export default class Service<T> {
  protected api: AxiosInstance;

  constructor(protected readonly paths: T) {
    this.api = axios.create({
      baseURL,
      headers: this.defaultHeader
    });
  }

  private defaultHeader = {
    'Content-type': 'application/json'
  };
}
