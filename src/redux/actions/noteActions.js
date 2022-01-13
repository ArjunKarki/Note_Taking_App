import {CREATE_NOTE, TOGGLE_FAVOURITE} from '../const';

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
    is_archive: false,
  };
  console.log(note);
  dispatch({
    type: CREATE_NOTE,
    payload: [...allNotes, note],
  });
};

export const toggleFavourite = note => (dispatch, getState) => {
  let {
    notes: {allNotes},
  } = getState();
  let newNotes = allNotes.map((item, index) => {
    if (item.id == note.id) {
      return {...item, is_favourite: !item.is_favourite};
    }
    return {...item};
  });

  dispatch({
    type: TOGGLE_FAVOURITE,
    payload: newNotes,
  });
};

export const toggleArchive = note => (dispatch, getState) => {
  let {
    notes: {allNotes},
  } = getState();
  let newNotes = allNotes.map((item, index) => {
    if (item.id == note.id) {
      return {...item, is_archive: !item.is_archive};
    }
    return {...item};
  });

  dispatch({
    type: TOGGLE_FAVOURITE,
    payload: newNotes,
  });
};
