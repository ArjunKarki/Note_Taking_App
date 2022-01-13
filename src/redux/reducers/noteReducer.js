import {CREATE_NOTE, TOGGLE_FAVOURITE} from '../const';

const INITIAL_STATE = {
  allNotes: [],
};

const noteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NOTE:
    case TOGGLE_FAVOURITE:
      return {
        ...state,
        allNotes: action.payload,
      };

    default:
      return state;
  }
};
export default noteReducer;
