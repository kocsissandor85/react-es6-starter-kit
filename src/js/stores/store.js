import Reflux from "reflux";
import immstruct from "immstruct";
import Actions from "../actions";

export default Reflux.createStore({

  data: immstruct({
    /* Add some immutable data for top-down rendering. */
  }),

  init: function () {
    /* Start listening to actions. */
  }

});