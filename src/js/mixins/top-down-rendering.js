import Component from "omniscient/component";

/* Bridge to shouldComponentUpdate of Omniscent.
 * Add this to all the components which may be a
 * subject of top-down rendering.
 */

export default {

  shouldComponentUpdate: Component.shouldComponentUpdate

};
