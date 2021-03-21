const init = {
  overflow: '',
  height: '',
  left: '',
  display: 'none',
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case 'MODALLOCATION_OPEN':
      return {
        ...state,
        overflow: payload.overflow,
        height: payload.height,
        left: payload.left,
        display: payload.display,
      };
    default:
      return state;
  }
};
