/**
 * @module courses
 * @description Schema for the courses object 
* 
*/
import { normalize, schema } from "normalizr";

const course = new schema.Entity('courses');
export function coursesNormalizer(data) {
  return normalize(data, [course]);
}