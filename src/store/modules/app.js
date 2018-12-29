
const app = {
  state: {
    headerTitle: '',
    showHeader: false
  },
  mutations: {
    setHeaderTitle (state, headerTitle) {
      state.headerTitle = headerTitle;
    },
    setShowHeader (state, showHeader) {
      state.showHeader = showHeader;
    }
  }
};

export default app;
