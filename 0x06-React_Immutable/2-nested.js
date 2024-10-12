/**
 * return the value of an object at a define path
 */
import { Map } from "./node_modules/immutable/dist/immutable.js";

export default function accessImmutableObject(object, array) {
    return Map(object).getIn(array) || undefined;
}
