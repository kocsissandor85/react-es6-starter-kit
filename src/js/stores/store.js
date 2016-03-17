import Reflux from "reflux";
import immstruct from "immstruct";
import Action from "../actions";

var Store = Reflux.createStore({

  data: immstruct({
    /* Add some immutable data for top-down rendering. */
  }),

  init: function () {
    /* Start listening to actions. */
  }

});

window.store = Store;
export default Store;