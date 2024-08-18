const INITIAL_VALUE = {
  language: "EN",
};

export default function LanguageReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
