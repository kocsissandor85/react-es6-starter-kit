import Reflux from "reflux";

var syncAction, asyncAction;

syncAction = {};
asyncAction = { asyncResult: true };

export default {
  app: Reflux.createActions({
    sync: syncAction,
    async: asyncAction
  })
};