const initial_state = {
  test: 0,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case "ON_TEST":
      return { test: action.test };
    default:
      return state;
  }
}
