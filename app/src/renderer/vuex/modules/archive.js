import * as types from '../mutation-types';

const state = {
  file: null,
  zip: null,
  entries: [],
};

const mutations = {
  [types.SET_OPEN_FILE](state, payload) {
    state.file = payload.file;
    state.zip = payload.zip;
    state.entries = payload.entries;
  },
};

export default {
  state,
  mutations,
};
