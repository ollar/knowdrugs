export function registerModal(id) {
  return {
    type: 'REGISTER_MODAL',
    id,
  };
}

export function setVisibility(id, visibility) {
  return {
    type: 'SET_MODAL_VISIBILITY',
    id,
    visibility,
  };
}
