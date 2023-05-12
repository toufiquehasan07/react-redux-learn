import {
  BUG_ADDED,
  BUG_REMOVED,
  BUG_RESOLVED,
} from "../constants/action-types";
let lasId = 0;

const bugReducer = (store = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...store,
        {
          id: ++lasId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return [...store].filter((bug) => bug.id !== action.payload.id);

    case BUG_RESOLVED:
      return [...store].map((bug) => {
        if (bug.id === action.payload.id) {
          bug.resolved = true;
          return bug;
        }
        return bug;
      });
    default:
      return store;
  }
};

export default bugReducer;
