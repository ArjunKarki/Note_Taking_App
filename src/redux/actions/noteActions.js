import {
  CREATE_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVOURITE,
  UPDATE_NOTE,
} from '../const';

export const saveNote = note => (dispatch, getState) => {
  let {
    notes: {allNotes},
  } = getState();

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

export const updateNote = (title, body, id) => (dispatch, getState) => {
  let {
    notes: {allNotes},
  } = getState();
  let note = {
    title,
    body,
    created_at: new Date(),
    updated_at: new Date(),
  };
  let newNotes = allNotes.map((item, index) => {
    if (item.id == id) {
      return {...item, ...note};
    } else {
      return {...item};
    }
  });
  console.log(newNotes);
  dispatch({
    type: UPDATE_NOTE,
    payload: newNotes,
  });
};

export const deleteNote = id => (dispatch, getState) => {
  let {
    notes: {allNotes},
  } = getState();

  dispatch({
    type: DELETE_NOTE,
    payload: allNotes.filter(note => note.id != id),
  });
};
