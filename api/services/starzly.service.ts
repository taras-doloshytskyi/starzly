import { AxiosResponse } from 'axios';

import Service from './../config';

import { ComplexTalent, GetVideosResponse } from '@types';

import { paths } from './../paths';

class StarzlyService extends Service<typeof paths> {
  constructor() {
    super(paths);
  }

  public getVideo = (page: number): Promise<AxiosResponse<GetVideosResponse>> =>
    this.api.get(`${this.paths.videos}?page=${page}&per_page=2&app=1&new=1`);

  public getTalentInfo = (id: number): Promise<AxiosResponse<ComplexTalent>> =>
    this.api.get(`${this.paths.talent}/${id}`);
}

export const starzlyService = new StarzlyService();
