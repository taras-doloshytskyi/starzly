import createStore from 'zustand';

import { starzlyService } from '@api';

import { Video, ComplexTalent } from '@types';

type VideoState = {
  page: number;
  videoItems: Video[];
  chosenTalent: ComplexTalent | null;

  fetchVideos: (page: number) => void;

  fetchTalent: (id: number) => void;
};

const initialState: Omit<VideoState, 'fetchVideos' | 'fetchTalent'> = {
  page: 1,
  videoItems: [],
  chosenTalent: null
};

export const useVideoStore = createStore<VideoState>((set, get) => ({
  ...initialState,

  fetchVideos: (page) => {
    set({ page });

    starzlyService.getVideo(page).then(({ data }) => {
      const currentVideos = get().videoItems;

      set({ videoItems: currentVideos.concat(data.data) });
    });
  },

  fetchTalent: (id) => {
    set({ chosenTalent: null });

    starzlyService
      .getTalentInfo(id)
      .then(({ data }) => set({ chosenTalent: data }));
  }
}));
