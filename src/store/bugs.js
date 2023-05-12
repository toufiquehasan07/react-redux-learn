/* define constants */
const BUG_ADDED = "bugCreated";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";
const LAST_ID = 0;

/* define reducer */
const bugReducer = (store = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...store,
        {
          id: LAST_ID + 1,
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

/* define action creators */
export const bugAdded = (description) => {
  return {
    type: BUG_ADDED,
    payload: {
      description,
    },
  };
};

export const bugRemoved = (id) => {
  return {
    type: BUG_REMOVED,
    payload: {
      id,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: BUG_RESOLVED,
    payload: {
      id,
    },
  };
};

export default bugReducer;
