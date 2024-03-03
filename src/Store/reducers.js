const initialState = {
    sidebar: false,
    user: null,
  };
  
  const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLESIDEBAR':
        return { ...state, sidebar: !state.sidebar };
      case 'UPDATEUSER':
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export default AppReducer;