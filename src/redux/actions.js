export const ADD_CONTACT = "ADD_CONTAC";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const FILTER = "FILTER";
export function addContact(text, num) {
  return {
    type: ADD_CONTACT,
    text,
    num,
  };
}
export function removeContact(id) {
  return {
    type: REMOVE_CONTACT,
    id,
  };
}
export function findContact(find) {
  return {
    type: FILTER,
    find,
  };
}
