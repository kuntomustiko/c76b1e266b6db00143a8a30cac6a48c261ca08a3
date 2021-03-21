const init = {
  display: 'none',
  position: 'relative',
  width: 'auto',
  margin: '0px',
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case 'MODALADD_OPEN':
      return {
        ...state,
        display: payload.display,
        position: payload.position,
        width: payload.width,
        margin: payload.margin,
      };
    default:
      return state;
  }
};
