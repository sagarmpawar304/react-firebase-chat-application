type state = any;

const reducer: (state: state, action: any) => state = (
  state = false,
  action: any
) => {
  switch (action.type) {
    case 'success':
      return action.payload;
    case 'reset':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
