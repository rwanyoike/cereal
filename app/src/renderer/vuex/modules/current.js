import * as types from '../mutation-types';

const state = {
  index: 0,
  dataURI: null,
};

const mutations = {
  [types.SET_NEXT_ITEM](state, payload) {
    state.index = payload.index;
    state.dataURI = payload.dataURI;
  },
};

export default {
  state,
  mutations,
};
