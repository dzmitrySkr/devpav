import { CREATE_STORE, CHANGE_STORE, DELETE_STORE } from "./action";

let defaultStore = {
  tasks: [
    { id: 1, text: "NEW i should throw garbige" },
    { id: 2, text: "NEW #Cut my hair" },
    { id: 3, text: "NEW go for a #walk" },
  ],
};

export let reducer = (store = defaultStore, action) => {
  switch (action.type) {
    case CREATE_STORE:
      return {
        ...store,
        tasks: [
          ...store.tasks,
          { id: new Date().getTime(), text: action.payloud },
        ],
      };

    case DELETE_STORE:
      return {
        ...store,
        tasks: store.tasks.filter((item) => item.text !== action.payloud),
      };

    case CHANGE_STORE:
      let a = store.tasks.filter((item, index) => {
        return item.id === action.payloud.id
          ? (store.tasks[index].text = action.payloud.income)
          : item.text;
      });
      return { tasks: a };
  }
  return store;
};
