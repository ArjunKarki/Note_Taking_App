import {CREATE_NOTE} from '../const';

export const saveNote = (title, body) => (dispatch, getState) => {
  let {
    notes: {allNotes},
  } = getState();
  let note = {
    id: new Date().getTime(),
    title,
    body,
    created_at: new Date(),
    updated_at: null,
    is_favourite: false,
    is_archived: false,
  };
  console.log(note);
  dispatch({
    type: CREATE_NOTE,
    payload: [...allNotes, note],
  });
};
