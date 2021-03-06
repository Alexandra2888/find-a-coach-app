import { createStore } from 'vuex';

// eslint-disable-next-line import/extensions
import coachesModule from './modules/coaches/index.js';
// eslint-disable-next-line import/extensions
import requestsModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
