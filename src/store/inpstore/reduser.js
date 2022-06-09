import { INPUT } from "./action";

let defaultStore = {
  input: "",
};

export let newreducer = (store = defaultStore, action) => {
  switch (action.type) {
    case INPUT:
      return { ...defaultStore, input: action.payloud };
  }
  return store;
};
