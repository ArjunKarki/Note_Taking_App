import {CHANGE_THEME} from '../const';

const INITIAL_STATE = {
  darkTheme: false,
};
const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;
