// eslint-disable-next-line import/extensions
import mutations from './mutations.js';
// eslint-disable-next-line import/extensions
import actions from './actions.js';
// eslint-disable-next-line import/extensions
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
  getters,
};
