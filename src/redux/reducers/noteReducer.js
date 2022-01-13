import {
  CREATE_NOTE,
  DELETE_NOTE,
  TOGGLE_ARCHIVE,
  TOGGLE_FAVOURITE,
  UPDATE_NOTE,
} from '../const';

const INITIAL_STATE = {
  allNotes: [],
};

const noteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NOTE:
    case TOGGLE_FAVOURITE:
    case TOGGLE_ARCHIVE:
    case UPDATE_NOTE:
    case DELETE_NOTE:
      return {
        allNotes: action.payload,
      };

    default:
      return state;
  }
};
export default noteReducer;
